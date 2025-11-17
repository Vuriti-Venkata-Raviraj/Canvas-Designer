#!/usr/bin/env bash

# Create Next.js app if folder is empty
if [ -z "$(ls -A ..)" ]; then
  echo "⚡ Creating Next.js app..."
  cd .. && npx create-next-app@latest . --ts --tailwind --eslint --app
else
  echo "📦 Project files already exist. Skipping Next.js creation."
fi

echo "✔ Initial setup complete!"
