# sigle-image-embed

This repository is used to generate images for various Sigle integrations.

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Fly.io

When deploying for the first time, we create the machine configuration:

```bash
fly scale memory 512
```

```bash
pnpm deploy
```
