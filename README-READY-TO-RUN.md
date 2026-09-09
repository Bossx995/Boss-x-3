# Boss X Bot — Ready to Run

## Requirements
- Node.js 18 or newer (Node 20/22 recommended)
- A WhatsApp account for pairing

## Run
```bash
npm install --legacy-peer-deps
npm start
```

The bot uses a pairing code flow. Enter the WhatsApp number shown/ configured in `settings.js`, then link it from WhatsApp → Linked devices.

## Configuration
Edit `settings.js` for bot name, owner name/number, prefix-related settings and other public configuration.
Keep API secrets in environment variables where supported; do not publish real API keys.

## Hosting
Use a Node.js hosting service or VPS. Set the start command to `npm start` and use Node.js 18+.

## Notes
Some command source files were missing from the supplied ZIP. Safe placeholder modules were added so the bot can boot without crashing; those specific commands report that they are unavailable instead of crashing the process.
