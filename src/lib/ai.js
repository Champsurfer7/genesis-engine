// AI Provider Abstraction
// Supports Ollama, OpenAI, Claude, Groq, OpenRouter
class AI {
  constructor(config) {
    this.config = config;
    this.provider = config.ai?.provider || "ollama";
  }

  async chat(message) {
    // TODO: Route to correct provider based on this.provider
    // Example: if (this.provider === 'ollama') return this.chatOllama(message);
    throw new Error(`AI provider '${this.provider}' not implemented yet`);
  }
}

module.exports = AI;