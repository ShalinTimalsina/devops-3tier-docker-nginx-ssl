# 📦 3‑Tier Dockerized Web Application
This project is a fully containerized 3‑tier web application consisting of:

- 🌐 Frontend: Static HTML served via Nginx
- 🟩 Backend API: Node.js REST API
- 🗄️ PostgreSQL Database: Persistent data storage using Docker volumes
- 🔀 Nginx Reverse Proxy: Routing of frontend & backend with SSL termination
- 🔐 Let’s Encrypt (Certbot): Automated HTTPS certificates
- ☁️ Cloudflare DNS (DNS‑Only Mode): Domain management
- 🐳 Docker Compose: Orchestrates all services into a unified stack

## This setup demonstrates a production‑style deployment following industry‑standard DevOps practices — including containerization, reverse proxying, SSL automation, networking, and persistent data management.
