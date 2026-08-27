# Sukoon Ki Gali 🎵

> A quiet corner of the internet with a peaceful, mood-driven collection of curated songs for when you need to slow down.

[Sukoon Ki Gali](https://sukoonkigali.kjpatel.me) is an open-source web application designed as a serene, intimate listening experience. Built around a curated selection of Indian and Hindi music, the app provides a calm photographic interface free from social clutter, ads, or distraction.

---

## 🎧 Official Playlist

The songs in this project are synchronized with the official YouTube playlist:
👉 [**Sukoon Ki Gali YouTube Playlist**](https://youtube.com/playlist?list=PLUKBMAqy5FT0&si=AXqRjl8h_BcCJjnq)

---

## ✨ Features

- **Curated Music Collection**: 106+ peacefully selected songs sorted in clean alphabetical order (A–Z).
- **Custom Minimalist Player**: Native-feeling music console powered by the YouTube IFrame API (`loadVideoById`), complete with timeline progress slider, track time indicators, volume controls, shuffle, and repeat modes.
- **Alphabetical Song Drawer**: Slide-over playlist panel displaying the full catalog with real-time active track highlighting and track index indicator (`01 / 106`).
- **Progressive Web App (PWA)**: Fully installable as a standalone app on Mobile (iOS & Android) and Desktop (Chrome, Edge, Safari) with offline shell caching via a custom Service Worker.
- **Quiet Editorial Feedback Form**: Native form integrated with [Formspree](https://formspree.io) allowing listeners to suggest songs to add or remove, featuring dynamic contextual placeholders and honeypot spam protection.
- **Keyboard Shortcuts**: Comprehensive keyboard navigation (`Space` for Play/Pause, `←`/`→` for Prev/Next, `S` for Shuffle, `R` for Repeat, `M` for Mute, `P` for Songs, `F` for Suggestion, `Esc` for Close). Bypasses automatically while typing in form fields.
- **Shortcut Discoverability**: Custom dark-glass desktop tooltips with `<kbd>` keycap badges on hover and focus.
- **SEO & OpenGraph Built-in**: Full Schema.org `MusicPlaylist` & `WebSite` JSON-LD structured data, OpenGraph images, canonical tags, and sitemap support.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) (`^7.2.4`)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- **Audio Engine**: [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)
- **Form Submissions**: [Formspree](https://formspree.io)
- **Fonts**: Cormorant Garamond & Plus Jakarta Sans (Google Fonts)
- **PWA Capabilities**: Web App Manifest (`manifest.webmanifest`), custom Service Worker (`sw.js`), and 192x192 / 512x512 maskable app icons

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) `>= 22.12.0`
- `npm`

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/kirtanpatel01/sukoonkigali.git
   cd sukoonkigali
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:4321` in your browser to view the application.

---

## 🧞 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts local development server at `localhost:4321` |
| `npm run build` | Compiles production static build to `./dist/` |
| `npm run preview` | Previews the production build locally |
| `npm run astro` | Runs Astro CLI commands (`astro check`, etc.) |

---

## 👨‍💻 Creator & Links

- **Created by**: Kirtan Patel
- **GitHub Repository**: [kirtanpatel01/sukoonkigali](https://github.com/kirtanpatel01/sukoonkigali)
- **Instagram**: [@kjpatel.dev](https://instagram.com/kjpatel.dev)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
