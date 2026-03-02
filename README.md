📁 Project Structure
`
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
`
