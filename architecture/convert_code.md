# SOP: Converting Selenium (Java) to Playwright (TS)

**Goal:** Convert Java Selenium code to Playwright TypeScript using Local LLM (Ollama).

## 1. Context Loading
- The System must accept:
  - Raw Java Code
  - Metadata (User preferences)
- The System must load the `codellama` model via Ollama.

## 2. Prompt Engineering Strategy
- **Role:** "You are an expert Test Automation Engineer converting legacy Selenium Java to modern Playwright TypeScript."
- **Constraints:**
  - Use `await` for all interactions.
  - Use `page.locator()` instead of generic `driver.findElement()`.
  - Prefer `expect` assertions.
  - Preserve comments where logic is complex.

## 3. Error Handling
- If LLM output is truncated, request completion (if supported) or warn user.
- If code contains `driver` or `By.`, flag as potential hallucination/incomplete conversion.
