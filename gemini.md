# ♊ Gemini: Project Constitution

## 📜 Project Overview
**Goal:** Develop a system to convert Selenium Java code to Playwright TypeScript/JavaScript.

## 💾 Data Schemas

### Conversion Request (Input)
```json
{
  "sourceCode": "string", // raw Java Selenium code
  "sourceType": "TestNG" | "JUnit" | "Raw", // optional hint
  "targetLanguage": "TypeScript" | "JavaScript",
  "preferences": {
    "pageObjectModel": boolean, // default true
    "testRunner": "Playwright Test" // default
  }
}
```

### Conversion Response (Output)
```json
{
  "status": "success" | "error",
  "convertedCode": "string", // The main logic converted
  "supportingFiles": [
    {
      "fileName": "string", // e.g., "LoginPage.ts"
      "content": "string"
    }
  ],
  "logs": [
    "string" // conversion notes or warnings
  ]
}
```

## 🤖 Behavioral Rules
1.  **Readability First**: Do not do a literal line-by-line translation if it results in unidiomatic code. Use Playwright best practices (auto-waiting, locators vs xpaths).
2.  **TestNG Mapping**: Convert `@Test` to `test()`, `@BeforeClass` to `test.beforeAll()`, etc.
3.  **UI Driven**: The system is triggered via a Web UI and reports results back to the UI.


## 🏛️ Architectural Invariants
1. **3-Layer Architecture:** `architecture/` (SOPs), `tools/` (Scripts), `Navigation` (Agent Logic).
2. **AI-Driven Conversion:** Use Local LLM (Ollama - `codellama`) for intelligent code conversion.
3. **Data-First:** Schema definition precedes tool building.
4. **Self-Annealing:** Fix tools based on errors, then update architecture.


## 🔧 Maintenance Log
*Record of structural changes.*
