import { Ollama } from 'ollama'

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })

export interface ConversionRequest {
    javaCode: string;
    preferences?: {
        usePageObject?: boolean;
    };
}

export async function convertJavaToPlaywright(request: ConversionRequest): Promise<string> {
    const prompt = `
You are an expert SDET. Convert the following Selenium Java code to Playwright TypeScript.
Focus on:
1. Using 'test', 'expect' from '@playwright/test'.
2. Replacing 'driver.findElement' with 'page.locator'.
3. Using async/await properly.
4. Keeping the logic intact.

Original Java Code:
\`\`\`java
${request.javaCode}
\`\`\`

Output ONLY the TypeScript code block.
`;

    try {
        const response = await ollama.chat({
            model: 'codellama',
            messages: [{ role: 'user', content: prompt }],
            options: {
                temperature: 0.2, // Low temperature for deterministic code
            }
        });

        // Extract code block if wrapped in markdown
        const content = response.message.content;
        const match = content.match(/```(?:typescript|ts)?([\s\S]*?)```/);
        return match ? match[1].trim() : content;

    } catch (error) {
        console.error("LLM Conversion Failed:", error);
        throw error;
    }
}
