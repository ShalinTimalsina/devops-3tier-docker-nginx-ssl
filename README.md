# 📦 3‑Tier Containerized Web Application

This project is a fully containerized **3‑tier web application** consisting of:

- **🌐 Frontend:** Static HTML served via Nginx  
- **🟩 Backend API:** Node.js  
- **🗄️ PostgreSQL Database:** Persistent storage using Docker volumes  
- **🔀 Nginx Reverse Proxy:** Handles routing + SSL termination  
- **🔐 Let’s Encrypt (Certbot):** Automated HTTPS certificates  
- **☁️ Cloudflare DNS (DNS‑Only Mode):** Domain management  
- **🐳 Docker Compose:** Orchestrates the entire multi‑service stack  

This setup demonstrates a **production‑style deployment** following industry‑standard DevOps practices.

---

## ⚠️ Important Notes Before Running This Project

### 🔸 1. Use Your Own `.env` File (Not Included)
The `.env` file contains sensitive credentials and is **intentionally not committed**.  
Create your own `.env` in the project root:

``
DB_HOST=database
DB_USER=your_user
DB_PASSWORD=your_password
DB_NAME=your_dbname
``
Never commit this file to GitHub.

---

### 🔸 2. You MUST Use Your Own Domain
This project requires a real domain to:

- Resolve through Cloudflare  
- Pass Let’s Encrypt HTTP‑01 verification  
- Enable HTTPS on your server  

You cannot use localhost or an IP address for certificate generation.

---

### 🔸 3. Generate Your Own SSL Certificates Using Certbot
SSL certificates are **not included** and must be generated on your server.

Steps:
1. Point your domain to your server in **Cloudflare (DNS‑Only mode)**  
2. Run your Docker stack  
3. Use Certbot to generate valid certificates  
4. Mount the certificates into the Nginx container  

Each user must generate certificates for **their own domain**.

---

## 📁 Project Structure

```bash
Devops-Project/
│
├── backend/               # Node.js backend API
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── frontend/              # Frontend static site
│   ├── Dockerfile
│   └── index.html
│
├── nginx/                 # Reverse proxy + SSL configuration
│   └── (nginx.conf)
│
├── init.sql               # PostgreSQL initialization script
├── docker-compose.yml     # Orchestration for all services
├── .env                   # Environment variables (not committed)
└── README.md
