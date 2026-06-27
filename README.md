# 🔗 URL Shortener with Analytics

A modern **full-stack URL Shortener** built using **Spring Boot**, **React**, **JWT Authentication**, and **PostgreSQL**. The application allows users to securely shorten long URLs, manage them through a personalized dashboard, and analyze click statistics with interactive charts.

---

## 📌 Project Overview

The URL Shortener is a secure web application that enables authenticated users to:

- 🔐 Register and Login using JWT Authentication
- ✂️ Generate short URLs from long URLs
- 📋 Copy shortened URLs instantly
- 📊 View analytics for each URL
- 📈 Monitor total clicks using interactive graphs
- 📅 Track URL creation dates
- 📱 Access a responsive interface on desktop and mobile

---

## ✨ Features

### 👤 Authentication
- User Registration
- User Login
- JWT Token Authentication
- BCrypt Password Encryption
- Protected Routes
- Logout Functionality

### 🔗 URL Shortening
- Create Short URLs
- Automatic Short Code Generation
- Redirect to Original URL
- Copy URL to Clipboard
- View All User URLs

### 📊 Analytics
- Total Click Count
- Individual URL Analytics
- Interactive Graphs
- Click History
- Date-wise Analytics

### 📋 Dashboard
- Total Click Statistics
- List of Created URLs
- Analytics Popup
- Create New URL Popup
- Responsive Dashboard

### 🎨 User Interface
- React + Vite
- Tailwind CSS
- Material UI
- React Icons
- Toast Notifications
- Loading Indicators

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- React Router DOM
- Axios
- TanStack React Query
- React Hook Form
- Tailwind CSS
- Material UI
- Recharts
- React Icons
- React Hot Toast

### Backend
- Java 21
- Spring Boot
- Spring Security
- Spring Data JPA
- JWT Authentication
- BCrypt Password Encoder
- Maven

### Database
- PostgreSQL

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: PostgreSQL

---

## 📂 Repository Structure

```text
URL-Shortener
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   ├── dto
│   ├── config
│   ├── security
│   ├── jwt
│   └── resources
│
├── frontend
│   ├── api
│   ├── components
│   ├── contextApi
│   ├── hooks
│   ├── pages
│   ├── router
│   ├── assets
│   └── utils
│
└── README.md
```

---

## 🚀 Application Workflow

```text
User Registers
      │
      ▼
User Login
      │
      ▼
JWT Token Generated
      │
      ▼
Dashboard
      │
      ▼
Create Short URL
      │
      ▼
Store URL in PostgreSQL
      │
      ▼
Generate Short Link
      │
      ▼
Share Short URL
      │
      ▼
Visitor Opens Short URL
      │
      ▼
Redirect to Original URL
      │
      ▼
Store Click Analytics
      │
      ▼
Display Analytics Graph
```

---

## 🔒 Security Features

- JWT Authentication
- Stateless Authentication
- BCrypt Password Encryption
- Protected API Endpoints
- Role-Based Authorization
- Secure Password Storage
- Token Validation
- CORS Configuration

---

## 📊 Analytics Features

- Total Click Count
- Individual URL Analytics
- Daily Click Statistics
- Interactive Graphs
- URL Performance Tracking
- Click Timeline

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/url-shortener.git

cd url-shortener
```

---

### Backend Setup

```bash
cd backend
```

Configure **application.properties**

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/url_shortener
spring.datasource.username=postgres
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update

jwt.secret=your_secret_key
```

Run the backend

```bash
mvn spring-boot:run
```

---

### Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
VITE_BACKEND_URL=http://localhost:8080
VITE_REACT_FRONT_END_URL=http://localhost:5173
```

Run the frontend

```bash
npm run dev
```

---

## 📡 API Endpoints

### Authentication

```http
POST /api/auth/register
POST /api/auth/login
```

### URL

```http
POST /api/urls/shorten
GET  /api/urls/myurls
GET  /api/urls/analytics/{shortUrl}
GET  /s/{shortUrl}
```

---

## 📷 Screenshots

Add screenshots of:

- Login Page
- Register Page
- Dashboard
- Create Short URL Popup
- URL List
- Analytics Graph
- Mobile View

---

## 🎯 Future Enhancements

- QR Code Generation
- Custom Short URLs
- URL Expiration
- Password Protected URLs
- Admin Dashboard
- User Profile Management
- Bulk URL Shortening
- Export Analytics (CSV/PDF)
- Device Analytics
- Browser Analytics
- Geographic Analytics
- Dark Mode
- Email Verification
- Two-Factor Authentication
- Rate Limiting
- Custom Domains
