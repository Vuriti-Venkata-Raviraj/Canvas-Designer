#!/usr/bin/env bash

echo "🚀 Starting Codespace..."

# Install dependencies if node_modules missing
if [ ! -d "node_modules" ]; then
  echo "📥 Installing dependencies..."
  npm install
fi

# Auto-run dev server (optional)
# Uncomment if you want auto-start
# npm run dev

echo "✔ Startup tasks finished!"
