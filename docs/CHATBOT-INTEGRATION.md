# AutomatedAssistant Chatbot Integration

This portfolio uses the AutomatedAssistant chatbot as a **micro frontend** component, loaded from an external source.

## Setup

### Environment Configuration

Add the chatbot URL to your `.env` file:

```bash
NEXT_PUBLIC_CHATBOT_URL="http://localhost:3001"
```

For production, set this to your deployed chatbot URL:

```bash
NEXT_PUBLIC_CHATBOT_URL="https://your-chatbot-domain.com"
```

### Running the Chatbot Locally

1. Start the AutomatedAssistant chatbot in its own repository:
   ```bash
   cd ~/Repos/AutomatedAssistant
   npm run dev  # or pnpm/yarn
   ```

2. Ensure the chatbot is running on the port specified in `NEXT_PUBLIC_CHATBOT_URL` (default: `3001`)

3. Start the portfolio:
   ```bash
   cd ~/Repos/Portfolio
   pnpm dev
   ```

## How It Works

The `AutomatedAssistant` component in `/src/components/AutomatedAssistant.tsx` loads the chatbot using one of these methods:

1. **Script Bundle**: Loads `chatbot.js` and looks for a global `mountChatbot` function
2. **ES Module**: Attempts to import the chatbot as an ES module
3. **Iframe Fallback**: Falls back to loading the chatbot in an iframe (most compatible)

## Chatbot Requirements

For the chatbot to work as a micro frontend, the AutomatedAssistant repository should:

- Expose a build artifact (e.g., `chatbot.js`) that can be loaded
- Either:
  - Expose a global `mountChatbot(container)` function, OR
  - Be accessible as a standalone page that can be loaded in an iframe

## Customization

You can pass a custom URL to the component:

```tsx
<AutomatedAssistant chatbotUrl="http://custom-url:3001" />
```

If no URL is provided, it will use `NEXT_PUBLIC_CHATBOT_URL` from environment variables, or default to `http://localhost:3001`.
