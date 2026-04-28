# 🌀 Genesis Engine – Architecture

## System Overview
Channels → Gateway → Brain (ReAct Loop)
Brain uses Skills/Tools and Memory System.
Memory: MEMORY.md (long-term), daily/*.md (session), DREAMS.md (consolidation).

## Key Components
- **AI Provider** – abstraction over Ollama, OpenAI, Claude, Groq, OpenRouter
- **Gateway** – REST/WebSocket entry point
- **Brain** – reasoning loop that calls skills and tools
- **Memory** – persistent context with dreaming consolidation
- **Channels** – Telegram, Discord, WhatsApp adapters
- **Sandbox** – filesystem and command restrictions
- **Heartbeat** – scheduled automation tasks