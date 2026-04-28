#!/bin/bash
# Genesis Engine – Quick Setup
echo "🌀 Genesis Engine setup..."

# Copy environment template if .env doesn't exist
if [ ! -f .env ]; then
    cp -n .env.example .env
    echo "✅ .env created from template"
else
    echo "⚠️  .env already exists – skipped"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Setup complete!"