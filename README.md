# 📦 3-Tier Containerized Web Application in AWS EC2 (Learning Project)

This is a foundational DevOps practice project where I’m learning real-world deployment concepts by building a simple 3-tier containerized application.

The goal is not complexity, but understanding how modern applications are structured, secured, and deployed.

---

## 🏗 Architecture

```
Client → Nginx (Reverse Proxy) → Frontend / Backend → PostgreSQL
```

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

### 1️⃣ Frontend
- Static site
- Served via Nginx
- Runs in its own container

### 2️⃣ Backend
- Node.js API
- Runs in a separate container
- Exposes REST endpoints
- Connects to PostgreSQL

### 3️⃣ Database
- PostgreSQL 15-alpine
- Uses Docker volumes for persistent storage

---

## 🔧 Infrastructure Components

- **Reverse Proxy:** Nginx  
- **SSL:** Let’s Encrypt (Certbot)  
- **DNS:** Cloudflare (DNS-Only mode required)  
- **Orchestration:** Docker Compose  
- **Persistence:** Docker Volumes  

---

## ⚠️ Required Setup

### 1. Create `.env` File

Create a `.env` file in the project root:

```env
DB_HOST=database
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
```

Do not commit this file.

---

### 2. Use Your Own Domain

A real domain is required for:
- SSL certificate generation
- HTTPS access
- DNS validation

---

## 🔐 Install Certbot (Ubuntu)

```bash
sudo apt update
sudo apt install certbot -y
```

---

## 🔐 Generate SSL Certificate

Before running:
- Port 80 must be open
- Domain must point to your Public IP of the EC2 instance.
- Cloudflare must be set to DNS-Only (grey cloud)

```bash
sudo certbot certonly --standalone \
-d yourdomain.com \
--non-interactive \
--agree-tos \
-m your-email@example.com
```

Certificates will be located at:

```
/etc/letsencrypt/live/yourdomain.com/
```

---

## 🔁 Renew SSL Certificates

```bash
sudo certbot renew
```

---

## 🎯 What This Project Demonstrates

- Basic 3-tier architecture
- Container networking
- Reverse proxy routing
- HTTPS setup with Let's Encrypt
- DNS validation flow
- Persistent database storage

---

##  Scope

This is a hands-on learning project focused on deployment fundamentals.

It intentionally does not include:
- CI/CD
- Kubernetes
- Monitoring/Logging stacks
- Scaling strategies

---

## Learning Approach

This project reflects my learning-by-doing approach — building small but structured systems to understand how real deployments work before moving to more advanced tools.
