# Recipe Calories App 🍽️

A responsive React application that helps users discover recipes, view ingredients, track calories, and manage cooking status (Want to Cook → Currently Cooking). Built with **React + Vite**, styled using **Tailwind CSS**, and deployed on **Surge**.

---

## 🔗 Live & Source

- **Live Site (Netlify):** [https://keen-otter-834fee.netlify.app](https://keen-otter-834fee.netlify.app)
- **Live Site (Surge):** [https://recipe-calories-atik.surge.sh](https://recipe-calories-atik.surge.sh)
- **GitHub Repo:** [https://github.com/atik1948/recipe-calories](https://github.com/atik1948/recipe-calories)

---

## ✨ Features

- 📋 Browse recipe cards with images, ingredients, time, and calories
- ➕ **Want to Cook** list with duplicate prevention
- 🔄 Move items to **Currently Cooking**
- 🔔 Toast notifications (success/error)
- 📱 Fully responsive navbar (mobile + desktop)
- ⚡ Fast build with Vite

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Notifications:** react-hot-toast
- **Icons:** lucide-react
- **Deployment:** Surge

---

## 📁 Project Structure

```
recipe-calories/
├─ public/
│  └─ recipes.json
├─ src/
│  ├─ assets/
│  ├─ Banner/
│  ├─ Card/
│  ├─ Navbar/
│  ├─ Recipes/
│  ├─ Sidebar/
│  ├─ Sidebars/
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## 🚀 Getting Started (Local)

1. **Clone the repo**

```bash
git clone https://github.com/atik1948/recipe-calories.git
cd recipe-calories
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npm run dev
```

---

## 🌐 Deployment (Surge)

```bash
npm run build
surge dist your-domain.surge.sh
```

> Note: `dist` is ignored in GitHub via `.gitignore`.

---

---

## 👤 Author

**Atik**
GitHub: [https://github.com/atik1948](https://github.com/atik1948)

---

## 📄 License

This project is for educational purposes.
