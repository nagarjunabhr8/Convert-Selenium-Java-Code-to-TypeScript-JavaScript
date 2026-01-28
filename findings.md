# 🔎 Findings

## 📚 Research
- **TestNG to Playwright Mapping**:
    - `@Test` -> `test('name', async ({ page }) => { ... })`
    - `@BeforeMethod` -> `test.beforeEach(async () => { ... })`
    - `@AfterMethod` -> `test.afterEach(async () => { ... })`
    - `@BeforeClass` -> `test.beforeAll(async () => { ... })`
    - `@AfterClass` -> `test.afterAll(async () => { ... })`
    - Assertion: `Assert.assertEquals(a, b)` -> `expect(a).toBe(b)` or `expect(locator).toHaveText(b)`


## 💡 Discoveries
*Key learnings during the project.*

## 🚧 Constraints
*Limitations and boundaries.*
