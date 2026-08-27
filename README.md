# Sukoon Ki Gali 🎵

> A quiet corner of the internet with a peaceful, mood-driven collection of curated songs for when you need to slow down.

[Sukoon Ki Gali](https://sukoonkigali.kjpatel.me) is an open-source web application designed as a serene, intimate listening experience. Built around a curated selection of Indian and Hindi music, the app provides a calm photographic interface free from social clutter, ads, or distraction.

---

## 🎧 Official Playlist

The songs in this project are synchronized with the official YouTube playlist:  
👉 [**Sukoon Ki Gali YouTube Playlist**](https://youtube.com/playlist?list=PLUKBMAqy5FT0&si=AXqRjl8h_BcCJjnq)

---

## ✨ Features

- **Curated Music Collection**: 106+ peacefully selected songs sorted in clean alphabetical order (A–Z) or dynamic shuffled order.
- **Synchronized YouTube Video Engine**: Official visible YouTube video player seamlessly integrated directly above the custom controls, complete with bidirectional state synchronization (Play, Pause, Seek, Volume, Track End, and Metadata).
- **Theater Mode Expansion**: Enlarge / Compress toggle allowing the video player to expand smoothly (`max-w-4xl`) while keeping custom player controls strictly visible and accessible below.
- **Optimized Non-Blocking Architecture**: YouTube API initialized asynchronously via `requestIdleCallback` with DNS preconnect hints (`youtube.com`, `s.ytimg.com`) for ultra-fast initial page paints.
- **Alphabetical Song Drawer**: Slide-over playlist panel featuring:
  - Real-time instant search filtering by song title or artist.
  - Active track highlighting and track index indicator (`01 / 106`).
  - Song exclusion toggles allowing listeners to temporarily skip specific tracks during playback sessions.
- **Dual Curation & Feedback System**:
  - **"+ Suggest a Song"**: Curation form for proposing new songs or requesting track removals.
  - **"Leave a note"**: Dedicated general feedback form for listener thoughts and notes powered by Formspree (`https://formspree.io/f/mnpqaboz`).
- **Comprehensive Keyboard Shortcuts**:
  - `Space` / `K`: Play / Pause
  - `→` / `←`: Seek video **+10 seconds** / **-10 seconds**
  - `N` / `]` / `Shift + →`: Next Song
  - `B` / `[` / `Shift + ←`: Previous Song
  - `S`: Toggle Shuffle Mode
  - `R`: Toggle Repeat Mode
  - `M`: Mute / Unmute
  - `P`: Toggle Songs Playlist Drawer
  - `F`: Open Suggestion Modal
  - `Esc`: Close open drawers and modals
  - *Bypasses automatically when typing inside form input fields.*
- **Progressive Web App (PWA)**: Fully installable as a standalone app on Mobile (iOS & Android) and Desktop (Chrome, Edge, Safari) with offline shell caching via a custom Service Worker.
- **SEO & Structured Data**: Built-in Schema.org `MusicPlaylist` & `WebSite` JSON-LD structured data, OpenGraph tags, canonical URLs, and sitemap generation.

---

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build) (`^5.0`)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite`
- **Audio & Video Engine**: [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference)
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
- **Website**: [sukoonkigali.kjpatel.me](https://sukoonkigali.kjpatel.me)
- **GitHub Repository**: [kirtanpatel01/sukoonkigali](https://github.com/kirtanpatel01/sukoonkigali)
- **Instagram**: [@kjpatel.dev](https://instagram.com/kjpatel.dev)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
