# Aman Kumar Portfolio Website

This project is a modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    npm install framer-motion lucide-react @formspree/react
    ```

2.  **Run Locally:**
    ```bash
    npm run dev
    ```

## Step 7: Deployment Instructions

### Option 1: Vercel (Recommended)

1.  Push this code to a **GitHub Repository**.
2.  Go to [Vercel.com](https://vercel.com) and Sign Up/Log In.
3.  Click **"Add New..."** -> **"Project"**.
4.  Select your GitHub repository (`aman-portfolio`).
5.  Vercel will auto-detect "Vite" or "Create React App".
6.  Click **"Deploy"**.
7.  Your site will be live in seconds!

### Option 2: GitHub Pages

1.  Open `package.json` and add:
    ```json
    "homepage": "https://yourusername.github.io/repo-name"
    ```
2.  Install `gh-pages`:
    ```bash
    npm install gh-pages --save-dev
    ```
3.  Add these scripts to `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist" 
    ```
    *(Note: if using CRA, folder is `build`, if Vite, folder is `dist`)*
4.  Run:
    ```bash
    npm run deploy
    ```

## Contact Form Setup

1.  Go to [Formspree](https://formspree.io).
2.  Create a new form.
3.  Copy the **Form ID**.
4.  Open `components/Contact.tsx` and replace `xdojzkaz` with your actual Form ID.
