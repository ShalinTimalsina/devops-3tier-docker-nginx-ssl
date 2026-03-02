# 📦 3-Tier Containerized Web Application (Learning Project)

This is a foundational DevOps learning project where I am practicing real-world deployment concepts by building and containerizing a simple 3-tier web application.

The goal of this project is not to build a large-scale production system, but to understand how modern applications are structured, secured, and deployed using containers and supporting infrastructure.

This project reflects my “learning by doing” approach to improving my DevOps and infrastructure skills.

---

# 🧠 What I’m Practicing Here

- 3-tier architecture design
- Containerization with Docker
- Service orchestration using Docker Compose
- Reverse proxy configuration
- SSL certificate generation with Let’s Encrypt
- DNS configuration using Cloudflare
- Persistent database storage with Docker volumes
- Basic production-style deployment flow

---

# 🏗 Architecture Overview

The application follows a standard 3-tier architecture:

Client → Nginx Reverse Proxy → Frontend / Backend → PostgreSQL

---

## 1️⃣ Frontend (Presentation Layer)

- Static website
- Served via Nginx
- Runs inside its own container
- Sends API requests to the backend

Purpose:
Handles user interface and interacts with backend endpoints.

---

## 2️⃣ Backend API (Application Layer)

- Built using Node.js
- Runs in a dedicated container
- Exposes RESTful endpoints
- Contains basic application logic
- Connects to PostgreSQL

Purpose:
Processes client requests and communicates with the database.

---

## 3️⃣ PostgreSQL (Data Layer)

- PostgreSQL 15-alpine container
- Uses Docker volumes for persistence
- Data survives container restarts

Purpose:
Stores and manages application data.

---

# 🔧 Supporting Infrastructure

## 🌐 Nginx Reverse Proxy

A separate Nginx container acts as the entry point for all traffic.

Routing configuration:

/      → Frontend container  
/api   → Backend container  

It also:
- Terminates HTTPS connections
- Uses SSL certificates
- Keeps internal services isolated from public access

---

## 🔐 SSL with Certbot (Let’s Encrypt)

- SSL certificates are generated using Certbot
- Enables secure HTTPS communication
- Uses HTTP-01 challenge validation

Certificates are intentionally not included in this repository.

---

## ☁️ Cloudflare DNS (DNS-Only Mode Required)

Cloudflare is used to manage DNS records.

Important during SSL generation:
- The domain must point to the VPS IP
- Proxy must be set to DNS-Only (grey cloud)

This allows Let’s Encrypt to validate the server correctly.

---

## 🐳 Docker Compose

All services are orchestrated using a single docker-compose.yml file.

This provides:

- Multi-container startup
- Shared internal Docker network
- Volume persistence
- Clean separation of services
- Reproducible environment setup

---

# 📂 Technologies Used

Frontend        → Nginx (Static Hosting)  
Backend         → Node.js  
Database        → PostgreSQL  
Reverse Proxy   → Nginx  
SSL             → Let’s Encrypt (Certbot)  
DNS             → Cloudflare  
Orchestration   → Docker Compose  
Persistence     → Docker Volumes  

---

# ⚠️ Required Setup (Not Included)

Since this project simulates a real deployment, certain environment-specific files are not committed.

---

## 🔸 1. Create Your Own `.env` File

Create a `.env` file in the project root:

DB_HOST=database  
DB_USER=your_db_user  
DB_PASSWORD=your_db_password  
DB_NAME=your_db_name  

Do not commit this file to version control.

---

## 🔸 2. Use Your Own Domain

A real domain is required for:

- DNS configuration
- SSL certificate generation
- HTTPS access

Let’s Encrypt does not work with localhost or IP addresses.

---

# 🔐 Install Certbot (Ubuntu VPS)

Run on your server:

sudo apt update  
sudo apt install certbot -y  

---

# 🔐 Generate SSL Certificate (Standalone Mode)

Before running this command:

- Ensure port 80 is open
- Ensure your domain points to your VPS IP
- Set Cloudflare proxy to DNS-Only

Replace placeholders with your own domain and email:

sudo certbot certonly --standalone \
-d yourdomain.com \
--non-interactive \
--agree-tos \
-m your-email@example.com  

After successful generation, certificates will be located at:

/etc/letsencrypt/live/yourdomain.com/

These certificates can then be mounted into the Nginx container.

---

# 🔁 Renew SSL Certificates

Let’s Encrypt certificates expire every 90 days.

Manual renewal:

sudo certbot renew  

For real-world production, automated renewal should be configured.

---

# 🎯 What This Project Demonstrates

- Understanding of layered architecture
- Basic infrastructure thinking
- Container networking fundamentals
- Reverse proxy routing logic
- HTTPS configuration flow
- DNS validation process
- Data persistence management

---

# 📌 Scope Clarification

This is a foundational practice project.

It intentionally does NOT include:

- CI/CD pipelines
- Kubernetes
- Monitoring or logging stacks
- Horizontal scaling
- Infrastructure as Code

The focus is on mastering deployment fundamentals before moving to more advanced tooling.

---

# 🚀 Learning Mindset

This project represents my approach to improving:

Learning by building.  
Understanding the “why” behind each step.  
Practicing real deployment patterns in a controlled environment.  

It is part of my ongoing journey to become stronger in DevOps and infrastructure engineering.

---

# 🧾 Summary

A simple but structured 3-tier containerized application built to practice real-world deployment concepts using Docker, Nginx, PostgreSQL, Certbot, and Cloudflare.

This project reflects hands-on learning and foundational DevOps growth.
