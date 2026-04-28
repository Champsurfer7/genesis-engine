# GENESIS ENGINE – SETUP GUIDE

## Prerequisites
- Node.js 18 or higher
- 4GB RAM minimum (8GB recommended)
- Git

### Optional (for full features)
- Telegram account
- GitHub account
- Supabase account

---

## Step 1: Clone the Repository
```bash
git clone https://github.com/TBD-AmazingGlobalSolutions/genesis-engine.git
cd genesis-engine

Step 2: Environment Setup
cp .env.example .env

Edit .env with your credentials. At minimum, fill in ONE AI provider.
Option A: Free Local AI (Ollama – recommended)

# Install Ollama from https://ollama.ai
ollama pull llama3.2
ollama serve

Set in .env:
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.2:latest

Option B: Free Cloud AI (Groq)

Get a free key at https://console.groq.com/keys and set in .env:

GROQ_API_KEY=your_key_here

Option C: OpenRouter

Get a free key at https://openrouter.ai/settings/keys and set:
OPENROUTER_API_KEY=your_key_here

Step 3: Install Dependencies
npm install

Step 4: Start the Engine
npm run dev

The engine starts on http://localhost:3000.
Step 5: Verify Health
curl http://localhost:3000/health
Expected response: OK

Docker Setup (alternative)
docker-compose -f docker/docker-compose.yml up -d

elegram Bot Setup (optional)

    Message @BotFather on Telegram

    Send /newbot and follow prompts

    Copy the bot token into .env

    Get your user ID from @userinfobot

    Restart the engine

Troubleshooting

    Port already in use: Change PORT=3001 in .env

    Ollama connection error: Ensure ollama serve is running

    Permission issues (Linux/Mac): sudo chown -R $(whoami) ~/.npm

Next Steps

    Read SECURITY.md to harden your setup

    Check FREE_TIER_SETUP.md for more free services

    Explore the Architecture overview

Need help? Open an issue on GitHub!


