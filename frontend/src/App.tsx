import { useState } from 'react'
import './index.css'

function App() {
  const [inputCode, setInputCode] = useState(`// Paste your Selenium Java code here...
public void testLogin() {
    WebDriver driver = new ChromeDriver();
    driver.get("https://example.com/login");
    driver.findElement(By.id("username")).sendKeys("user");
    driver.findElement(By.id("password")).sendKeys("pass");
    driver.findElement(By.id("loginBtn")).click();
    Assert.assertEquals(driver.getTitle(), "Dashboard");
}`)
  const [outputCode, setOutputCode] = useState('// Playwright output will appear here...')
  const [isLoading, setIsLoading] = useState(false)
  const [targetLang, setTargetLang] = useState('TypeScript')

  const handleConvert = async () => {
    setIsLoading(true)
    setOutputCode('// Converting... please wait (this requires Local LLM)...')

    try {
      const response = await fetch('http://localhost:3001/api/convert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sourceCode: inputCode,
          targetLanguage: targetLang
        }),
      })

      const data = await response.json()
      if (data.success) {
        setOutputCode(data.convertedCode)
      } else {
        setOutputCode('// Error converting code: ' + data.error)
      }
    } catch (error) {
      setOutputCode('// Network Error: Ensure backend is running at localhost:3001\n' + error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Selenium to Playwright 🚀</h1>
      </header>

      <div className="main-content">
        <div className="editor-box">
          <h2>Input (Java Selenium)</h2>
          <textarea
            value={inputCode}
            onChange={(e) => setInputCode(e.target.value)}
            spellCheck="false"
          />
        </div>

        <div className="editor-box">
          <h2>Output (Playwright {targetLang})</h2>
          <div className="code-output">{outputCode}</div>
        </div>
      </div>

      <div className="controls">
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          style={{ padding: '10px', borderRadius: '4px', background: '#333', color: 'white', border: '1px solid #555' }}
        >
          <option value="TypeScript">TypeScript</option>
          <option value="JavaScript">JavaScript</option>
        </select>

        <button onClick={handleConvert} disabled={isLoading}>
          {isLoading ? 'Converting...' : 'Convert Code'}
          {isLoading && <span className="spinner"></span>}
        </button>
      </div>
    </div>
  )
}

export default App
