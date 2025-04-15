# SignalPet Assignment

ExpressJS + Typescript backend that translates veterinarian reports into multiple languages using [LibreTranslate](https://libretranslate.com)

## Features

- Translate labeled strings in bulk using LibreTranslate
- Supports `en`, `es`, `fr`, `de`, `pt`
- Uses docker for isolated translation engine

## Getting started

```bash
    npm install
    npm run dev
```

## Setup LibreTranslate locally for testing purpose `http://localhost:5001`

```bash
    git clone https://github.com/LibreTranslate/LibreTranslate.git
    cd LibreTranslate
    chmod +x run.sh
    ./run.sh --load-only en,es,fr,de,pt --port 5001
```

## Setup `.env` file using `.env.sample`

## to test the translate feature

### 1. use of jest and supertest

- for unit and integration testing

```bash
    npm run test
```

### 2. using postman

POST `http://localhost:5000/api/translate`

```bash
{
    "text": [
        "Hello, how are you?",
        "please contact your veterinarian"
    ],
    "targetLang": "es"
}
```

- To use user-based preference

```bash
{
    "text": [
        "Hello, how are you?",
        "your test results are available",
        "please contact your veterinarian",
        "january - month"
    ],
    "userId":123
}
```

- To handle user preference
  POST `http://localhost:5000/api/users/:userId/preferences`

```bash
    {
    "language": "fr"
    }
```

## Bonus Features Implemented

- Error handling for unsupported languages [used express-validator - DONE]
- Detect and fallback to system language via Accept-Language header [Handled using Middleware - DONE]
- Cost-reduction via in-memory caching [in-memory: Map-based for now - DONE]
- User preference storage [In-memory for now using Map - DONE]
- Unit and integration tests [Jest + Supertest - DONE]

## Tech Stack

- Node.js + Express
- TypeScript
- Jest + Supertest
- LibreTranslate (via Docker)
