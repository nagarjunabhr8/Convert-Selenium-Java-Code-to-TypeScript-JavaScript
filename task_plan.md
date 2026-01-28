# 📋 Task Plan

## 🟢 Phase 0: Initialization
- [x] Create Project Memory files (`task_plan.md`, `findings.md`, `progress.md`, `gemini.md`)
- [ ] Answer Discovery Questions
- [ ] Define Data Schema in `gemini.md`
- [ ] Approve Blueprint

## 🏗️ Phase 1: Blueprint (Vision & Logic)
- [x] Define North Star (Web App for Selenium -> Playwright)
- [x] Identify Integrations (TestNG support)
- [x] Establish Source of Truth (User Input via UI)
- [x] Define Delivery Payload (UI Display + File Save)
- [x] Set Behavioral Rules (Readability > 1:1)
- [ ] Research specific TestNG -> Playwright mappings

## ⚡ Phase 2: Link (Connectivity)
- [ ] Verify environment (Node.js, npm)
- [ ] **Verify Ollama Connection:** Check if `codellama` model is pulled and API is responsive.
- [ ] Setup Web App Structure (React Frontend + Node.js Backend)
- [ ] Create `ollama_client.ts` tool to verify LLM handshake


## ⚙️ Phase 3: Architect (The 3-Layer Build)
- [ ] Define SOP: `map_selenium_to_playwright.md`
- [ ] Build Tool: `java_parser.py` (or JS equivalent if we do full JS stack)
- [ ] Build Tool: `playwright_generator.py`

## ✨ Phase 4: Stylize (Refinement & UI)
- [ ] Build React UI (Input Textarea, Output Code Block, "Convert" Button)
- [ ] Add Syntax Highlighting
- [ ] Implement File System write (requires backend or Electron/local server context)

## 🛰️ Phase 5: Trigger (Deployment)
- [ ] Finalize local run instructions

