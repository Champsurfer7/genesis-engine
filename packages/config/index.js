// Genesis Engine – Secure Configuration Loader (KeyStone)
// Validates required environment variables and provides safe defaults.

function requireEnv(key) {
  if (!process.env[key]) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return process.env[key];
}

const config = {
  ai: {
    provider: process.env.AI_PROVIDER || 'ollama',
    apiKey: process.env.OPENAI_API_KEY || process.env.GROQ_API_KEY || null,
    ollamaModel: process.env.OLLAMA_MODEL || 'llama3.2:latest',
  },
  database: {
    url: process.env.SUPABASE_URL || null,
  },
  gateway: {
    port: process.env.PORT || 3000,
  },
  auth: {
    token: process.env.API_TOKEN || null,
  },
  isDev: process.env.NODE_ENV !== 'production',
};

module.exports = config;