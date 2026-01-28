import { Ollama } from 'ollama'

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' })

async function checkConnection() {
  try {
    console.log("📡 Connecting to Ollama...")
    const response = await ollama.chat({
      model: 'codellama',
      messages: [{ role: 'user', content: 'Say "Connection Successful" if you can hear me.' }],
    })
    console.log("✅ Response received:", response.message.content)
  } catch (error) {
    console.error("❌ Error connecting to Ollama:", error)
  }
}

checkConnection()
