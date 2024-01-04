# Demo Set Intersection Client #
This client side demo project implemented using Typescript together with https://github.com/chut89/demo-set-intersection/tree/main form a complete client-server application showing how to compute the intersection of two sets

### Prerequisite ###
- nodejs
In Linux visit https://github.com/nodesource/distributions#installation-instructions or perform following steps
```shellscript
sudo apt-get update
sudo apt-get install -y ca-certificates curl gnupg
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
```
```shellscript
NODE_MAJOR=21
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
```
```shellscript
sudo apt-get update
sudo apt-get install nodejs -y
```
Windows: visit https://nodejs.org/en/download/package-manager/#windows-1 for details
- npm
```shellscript
sudo apt-get install npm
```
- Install Material UI
```shellscript
npm install @mui/material @emotion/react @emotion/styled
```
- Install linter Hooks
```shellscript
npm i eslint-plugin-react-hooks
```
- Git
```shellscript
sudo apt-get -y install git
```

### Clone frontend repository
```
git clone https://github.com/chut89/demo-set-intersection-client
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
