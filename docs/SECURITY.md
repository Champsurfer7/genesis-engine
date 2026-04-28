# 🔒 Security

## Critical Rules
- `.env` is never committed to Git
- All API keys are stored as environment variables
- Docker runs as a non‑root user
- Rate limiting is enabled by default
- The sandbox blocks dangerous commands (`sudo`, `chmod 777`, `curl | sh`)
- API authentication is required for all endpoints

## Emergency Procedures
If a token is compromised:
1. Revoke the token immediately
2. Generate a new token
3. Update `.env`
4. Restart the engine