# Melina's Portfolio

A modern, responsive portfolio website showcasing my work as a Frontend Developer and Digital Marketing Specialist. Built with Vue.js 3, featuring a clean design with gradient accents and smooth animations.

## 🌟 Features

- **Modern Design**: Clean UI with gradient effects and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Projects Showcase**: Highlighting selected projects including:
  - Video Call Demo (Vue 3 + Jitsi Meet API)
  - IAMDB App
  - Etalon Shopping App
  - Rock Paper Scissors Game
  - Todo List App
- **Experience Section**: Detailed work history and accomplishments
- **SEO Optimized**: Built with best practices for search engine visibility

## 🎥 Video Call Demo

A real video calling app powered by Jitsi Meet. Works just like Google Meet - create a meeting or join with a code!

### Features
- 🎥 Real HD video & audio with multiple participants
- 🖥️ Screen sharing
- 💬 Live chat
- 🌍 Works in English, Persian, and Arabic
- 🔒 No registration needed, encrypted
- 📱 Works on desktop, tablet, and mobile
- 🎨 Clean dark theme UI

### How it works

1. Click "New Meeting" to create a room (generates unique code)
2. Share the code with others
3. They click "Enter a Code" and type your code
4. Everyone joins and can video chat instantly!

Built with Jitsi Meet's free servers (no backend needed!)

### Built with
- Vue.js 3 (Composition API)
- Jitsi Meet External API
- Tailwind CSS
- Vue Router
- Deployed on Netlify

### Try it live
Visit `/demo/call` on the website to test it!

### What's cool about it
- Auto-generates room names if you don't provide one
- Adjustable video quality (up to 1080p)
- Tracks who joins/leaves
- Works great on mobile
- Error handling with nice fallback UI

### Ideas for later
- Add room passwords
- Recording feature
- Waiting room (moderator approval)
- Call quality stats
- Maybe host our own Jitsi server

## 🛠️ Tech Stack

- **Framework**: Vue.js 3
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: Vue Router
- **State Management**: Pinia
- **Deployment**: Netlify

## 📦 Project Setup

### Install Dependencies
```sh
npm install
```

### Development Server
```sh
npm run dev
```

### Build for Production
```sh
npm run build
```

### Preview Production Build
```sh
npm run preview
```

## 🚀 Deployment

This project is configured for deployment on Netlify. Simply connect your GitHub repository to Netlify and it will automatically deploy on every push to the main branch.

### Build Settings
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`

## 📝 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Vue components
│   ├── about/
│   ├── experience/
│   ├── footer/
│   ├── header/
│   ├── projects/
│   └── VideoCall.vue
├── views/           # Page components
│   ├── HomeView.vue
│   ├── Archive.vue
│   └── DemoCall.vue
├── router/          # Vue Router configuration
└── main.js          # Application entry point
```

## 🤝 Connect With Me

- **Portfolio**: [Your Portfolio URL]
- **LinkedIn**: [Your LinkedIn]
- **GitHub**: [Your GitHub]
- **Email**: [Your Email]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Melina Niavarani
