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
