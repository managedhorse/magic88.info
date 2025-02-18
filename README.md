

- 🚀 Server-side rendering
- ⚡️ Hot Module Replacement (HMR)
- 📦 Asset bundling and optimization
- 🔄 Data loading and mutations
- 🔒 TypeScript by default
- 🎉 TailwindCSS for styling
- 📖 [React Router docs](https://reactrouter.com/)



Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.



```
magic88.info
├─ .dockerignore
├─ Dockerfile
├─ README.md
├─ app
│  ├─ app.css
│  ├─ components
│  │  ├─ About.tsx
│  │  ├─ Community.tsx
│  │  ├─ Explore.tsx
│  │  ├─ Footer.tsx
│  │  ├─ GreenButton.tsx
│  │  ├─ Navbar.tsx
│  │  ├─ SeamlessGaming.tsx
│  │  ├─ WhiteButton.tsx
│  │  └─ WhyChoose.tsx
│  ├─ images
│  │  ├─ 88casinoicon.svg
│  │  ├─ CS.svg
│  │  ├─ crypto wallet.svg
│  │  ├─ exp1.svg
│  │  ├─ exp2.svg
│  │  ├─ exp3.svg
│  │  ├─ exp4.svg
│  │  ├─ exp5.svg
│  │  ├─ exp6.svg
│  │  ├─ exp7.svg
│  │  ├─ exp8.svg
│  │  ├─ exp9.svg
│  │  ├─ explore1.png
│  │  ├─ explore2.png
│  │  ├─ explore3.png
│  │  ├─ explore4.png
│  │  ├─ explore5.png
│  │  ├─ explore6.png
│  │  ├─ explore7.png
│  │  ├─ explore8.png
│  │  ├─ explore9.png
│  │  ├─ fastpayment.svg
│  │  ├─ laptopmockup.png
│  │  ├─ laptoponrock.png
│  │  ├─ logo.webp
│  │  ├─ mainbg.png
│  │  ├─ money.svg
│  │  ├─ multidevice.svg
│  │  ├─ security.svg
│  │  ├─ why-choose-us 2.png
│  │  └─ whychoose.webp
│  ├─ main.tsx
│  ├─ pages
│  │  └─ Homepage.tsx
│  ├─ root.tsx
│  └─ router.tsx
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.cjs
├─ public
│  └─ favicon.ico
├─ react-slick.d.ts
├─ tailwind.config.cjs
├─ tsconfig.json
└─ vite.config.ts

```