// Genesis Engine – Environment Validator
// Usage: npm run env:check

const requiredVars = [
  "API_TOKEN",
];

let missing = 0;
for (const key of requiredVars) {
  if (!process.env[key]) {
    console.error(`❌ Missing required env variable: ${key}`);
    missing++;
  }
}

if (missing === 0) {
  console.log("✅ All required environment variables are set.");
} else {
  console.error(`❌ ${missing} variable(s) missing.`);
  process.exit(1);
}