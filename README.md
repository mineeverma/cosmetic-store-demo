# 🛍️ cosmetic-store-demo Project

This is a React-based cosmetic-store-demo project with Redux for state management, TypeScript for type safety, and SCSS for styling. The app fetches product data from a public API and allows users to search, view, and navigate through products.

## 🚀 Features
- 🔍 Search for products
- 🛒 View product details in a modal
- 🎨 Responsive design with SCSS
- 🏗️ Optimized with Redux, Redux-Thunk, and TypeScript
- ✅ ESLint configured for code consistency

---

## 🛠️ **Tech Stack**
- **Frontend**: React, TypeScript, Redux, Redux-Thunk, SCSS
- **Backend**: Public API (`https://dummyjson.com/products`)
- **Routing**: React Router
- **State Management**: Redux Toolkit

---

## 📂 **Project Structure**
```
cosmetic-store-demo/
│── public/                 # Static files
│── src/
│   ├── components/         # UI Components (Modal, Header, Footer, etc.)
│   ├── pages/              # Page components (Home, Products, ProductDetails)
│   ├── redux/              # Redux store, slices
│   ├── styles/             # SCSS styles
│   ├── App.tsx             # Main App Component
│   ├── main.tsx            # React Entry Point
│── .eslintrc.js            # ESLint Configuration
│── package.json            # Project Dependencies
│── README.md               # Project Documentation
│── tsconfig.json           # TypeScript Configuration
```

---

## 🔧 **Installation & Setup**
Follow these steps to set up and run the project locally.

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-username/cosmetic-store-demo.git
cd cosmetic-store-demo
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Run the Project**
```sh
npm run dev
```
Now, open **`http://localhost:5173/`** in your browser.

---

## 🧪 **Testing**
To run tests (if added):
```sh
npm test
```

---

## 📜 **Environment Variables**
If needed, create a `.env` file in the root directory and add:
```
REACT_APP_API_URL=https://dummyjson.com/products
```

---

## 🏗️ **Building for Production**
To build the project for production:
```sh
npm run build
```

---

## 🤝 **Contributing**
Pull requests are welcome! Please follow the ESLint & TypeScript guidelines.


