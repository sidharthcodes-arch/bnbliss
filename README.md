# BnBliss – Full-Stack Accommodation Marketplace

A full-stack web application inspired by Airbnb, built using **Node.js**, **Express**, **MongoDB**, and **EJS**.  
Users can browse accommodations, create listings, leave reviews, manage accounts, and search for stays.

---

## 🚀 Features

### 🏡 Accommodation Listings
- Create, edit, and delete listings  
- Upload images (Multer + Cloudinary)  
- View detailed listing pages  
- Server-side rendered UI using EJS templates  

### ⭐ Reviews System
- Add reviews to listings  
- Edit or delete reviews  
- Validation and error handling  

### 👤 User Authentication
- User signup and login  
- Session-based authentication (Passport.js)  
- LocalStrategy with encrypted passwords  
- Flash messages for user feedback  

### 🔒 Authorization
- Only listing owners can modify or delete their listings  
- Route protection using middleware  

### 🔍 Search & Filtering
- Search listings by title  
- Basic UI filters  

### 📦 Robust Backend Architecture
- MVC structure (models, views, controllers)  
- Custom error class (ExpressError)  
- Asynchronous wrapper (wrapAsync)  
- Middleware pipelines  
- MongoDB session store  

---

## 🧰 Tech Stack

### **Backend**
- Node.js  
- Express  
- MongoDB  
- Mongoose  
- Passport.js  
- express-session  
- method-override  
- connect-mongo  

### **Frontend**
- EJS  
- CSS / JavaScript  
- Bootstrap (optional)  

### **Other Tools**
- Multer + Cloudinary  
- Flash messages  
- Custom middleware  
- Error handling utilities  

---

## 📂 Folder Structure

```
├── models
├── routes
├── views
├── public
├── utils
├── schema.js
├── app.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/sidharthcodes-arch/bnbliss
cd bnbliss
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create a `.env` file
```bash
ATLASDB_URL=your_mongodb_url
SECRET=your_session_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
```

### 4. Run the app
```bash
node app.js
```

Server runs at:
```
http://localhost:8080
```

---

## 📸 Screenshots

### Home Page
![Home Page](/public/Screenshots/home.png)

### Listing Page
![Listing Page](/public/Screenshots/listing.png)

### Login Page
![Login Page](/public/Screenshots/login.png)

### Signup Page
![Signup Page](/public/Screenshots/signup.png)

### Create Listing Page
![Create Listing](/public/Screenshots/create.png)

---

## 🧠 What I Learned

- Designing a full-stack application using Node.js + Express  
- Implementing secure authentication with Passport.js  
- Modeling data and relationships using Mongoose  
- Building middleware-driven backend pipelines  
- Constructing server-side rendered UIs with EJS  
- Handling cloud file uploads with Multer + Cloudinary  
- Structuring scalable REST APIs  

---

## 🙋‍♂️ About the Developer

Built by **Sidharth**, a self-taught full-stack developer passionate about backend engineering, distributed systems, and scalable architecture.

---

## 🏁 Status

Fully functional and continuously improving.
