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

## Setup LibreTranslate locally for testing purpose

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
