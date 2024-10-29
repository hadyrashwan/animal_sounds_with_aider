# Prerequisites

## 1. Install Python
   - Follow the installation instructions on the official [Python website](https://www.python.org/downloads/).

## 2. Install Aider
   - Visit the [Aider site](https://aider.chat/) and follow the setup instructions for your operating system.

## 3. Install Node.js
   - Visit the [Node.js website](https://nodejs.org/en) and download the latest version.

## 4. Set Up the Mistral AI Model
   - [Sign up](https://console.mistral.ai/billing/plans) for Mistral AI and set your Plan as "Experiment" on the [billing page](https://console.mistral.ai/billing/plans).
   - Obtain an API Key from the [API keys page](https://console.mistral.ai/api-keys/) in your Mistral AI console.
   - Configure the API key in your environment:
     ```bash
     export MISTRAL_API_KEY=your-api-key
     ```

## 5. Run Aider with the Mistral Model
   - Execute the following command to launch Aider with Mistral's latest large model:
     ```bash
     aider --model mistral/mistral-large-latest
     ```
