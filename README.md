## SignalPet Assignment

ExpressJS + Typescript backend that translates veterinarian reports into multiple languages using [LibreTranslate](https://libretranslate.com)

### Features

- Translate labeled strings in bulk using LibreTranslate
- Supports `en`, `es`, `fr`, `de`, `pt`
- Uses docker for isolated translation engine

## Getting started

```bash
    npm install
    npm run dev
```

### Setup LibreTranslate locally for testing purpose

```bash
    git clone https://github.com/LibreTranslate/LibreTranslate.git
    cd LibreTranslate
    chmod +x run.sh
    ./run.sh --load-only en,es,fr,de,pt --port 5001
```

### Setup `.env` file using `.env.sample`

### to test the translate feature

POST `/api/translate`

```bash
{
    "text": [
        "Hello, how are you?",
        "please contact your veterinarian"
    ],
    "targetLang": "es"
}
```
