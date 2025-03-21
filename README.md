# 🎉 Eventive - Event and Certificate Management System

Eventive is a powerful, modern web application designed to streamline the process of managing events and issuing professional-grade certificates to participants. Whether you're hosting workshops, webinars, conferences, or training programs, Eventive simplifies registration, certificate creation, and event organization—all in one seamless platform.

---

## 📌 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Deployment](#-deployment)
- [Author](#-author)
- [License](#-license)

---

## ✨ Features

- 🗓 **Event Creation & Management** – Organize, edit, and manage multiple events.
- 🧾 **Participant Handling** – Register attendees and maintain detailed records.
- 🧑‍🎓 **Certificate Generator** – Generate personalized certificates with dynamic data.
- 🔄 **Live Preview** – Real-time updates as you design certificates and layouts.
- 🧰 **Developer-Friendly** – Built with TypeScript, Vite, and modern tooling for speed and simplicity.
- 📱 **Responsive UI** – Fully responsive design for desktop, tablet, and mobile views.
- 🧩 **Modular Components** – Easy to customize and extend as per your requirements.

---

## 💻 Tech Stack

| Tech         | Purpose                          |
|--------------|----------------------------------|
| **React**    | Frontend library for UI building |
| **TypeScript** | Type-safe JavaScript            |
| **Tailwind CSS** | Utility-first CSS framework |
| **shadcn/ui** | UI component library             |
| **Vite**     | Lightning-fast dev server and build tool |
| **PostCSS**  | CSS transformer with plugins     |
| **ESLint**   | Code linting                     |
| **npm** or **Bun** | Package management         |

---

## 🖼 Screenshots

> *(Screenshots coming soon – consider adding UI previews here)*

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** (or **Bun**) installed. You can install Node via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

### Installation Steps

```bash
# 1. Clone the repository
git clone https://github.com/immortaleyes/eventive-event-and-certificate-management.git

# 2. Navigate to the project folder
cd eventive-event-and-certificate-management

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Access the app at [http://localhost:5173](http://localhost:5173) (or whatever port Vite configures).

---

## 📁 Project Structure

```
├── public/             # Static assets
├── src/                # Main application source
│   ├── components/     # Reusable React components
│   ├── pages/          # Page-level components
│   ├── styles/         # Tailwind and global styles
│   └── App.tsx         # Main application entry
├── index.html          # HTML entry point
├── package.json        # Project metadata & dependencies
├── vite.config.ts      # Vite build configuration
└── tailwind.config.ts  # Tailwind customization
```

---

## 📦 Deployment

This app is designed to be easily deployed using any static hosting platform such as:

- [Vercel](https://vercel.com)
- [Netlify](https://www.netlify.com)
- GitHub Pages (via build + push)

To deploy:

```bash
npm run build
# then upload 'dist/' to your preferred host
```

For automated publishing, consider setting up a CI/CD pipeline.

---

## 🧠 Author

**Ajay Shriram Kushwaha**  
📫 [kushwaha.ajay22@gmail.com](mailto:kushwaha.ajay22@gmail.com)  
🌍 [GitHub Profile](https://github.com/immortaleyes))  
📝 Passionate about clean code, web development, and solving real-world problems with technology.

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify as needed!
