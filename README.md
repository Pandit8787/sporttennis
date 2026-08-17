# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
## Deployment

### Vercel

- Connect this repo to Vercel.
- Set the build command to `npm run build` or `npm run build:vercel`.
- Vercel will use the generated `.vercel/output` build output.

### Netlify

- Connect this repo to Netlify.
- Set the build command to `npm run build:netlify`.
- Publish directory: `dist`
- Functions directory: `.netlify/functions-internal`

The project already includes `netlify.toml` and `vercel.json` for deployment-ready configuration.
## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
