import express, { Request, Response } from 'express';
import cors from 'cors';
import { Ollama } from 'ollama';

const app = express();
const port = 3001;

// Initialize Ollama
const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });

app.use(cors());
app.use(express.json());

interface ConversionRequest {
    sourceCode: string;
    targetLanguage: string;
}

app.post('/api/convert', async (req: Request, res: Response) => {
    try {
        const { sourceCode, targetLanguage } = req.body;
        console.log(`Received conversion request for ${targetLanguage}`);

        const prompt = `
You are an expert SDET. Convert the following Selenium Java code to Playwright ${targetLanguage}.
Focus on:
1. Using 'test', 'expect' from '@playwright/test'.
2. Replacing 'driver.findElement' with 'page.locator'.
3. Using async/await properly.
4. Keeping the logic intact.

Original Java Code:
\`\`\`java
${sourceCode}
\`\`\`

Output ONLY the code block.
`;

        const response = await ollama.chat({
            model: 'codellama',
            messages: [{ role: 'user', content: prompt }],
            options: { temperature: 0.2 }
        });

        const content = response.message.content;
        const match = content.match(/```(?:typescript|ts|javascript|js)?([\s\S]*?)```/);
        const code = match ? match[1].trim() : content;

        res.json({ success: true, convertedCode: code });

    } catch (error: any) {
        console.error('Error during conversion:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
