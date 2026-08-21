# Sukoon Ki Gali

## Project Implementation Specification

Build a polished, peaceful, single-page music experience called **Sukoon Ki Gali**.

This is not intended to be a conventional music streaming application, dashboard, SaaS product, or Spotify clone.

It should feel like **entering a small peaceful place on the internet**.

The visitor should arrive, see a beautiful atmospheric environment, and immediately understand the purpose:

> **You've done enough for now. Sit here for a while.**

The website is a curated collection of peaceful songs. The first version is manually curated. Community voting, user submissions, rankings, recommendations, authentication, and other social functionality are explicitly OUT OF SCOPE for the initial implementation.

The first version should focus almost entirely on:

1. atmosphere
2. visual quality
3. music playback
4. simple controls
5. excellent responsive behavior
6. extremely low friction

---

# 1. Core Product Concept

## Product name

**Sukoon Ki Gali**

Meaning/idea:

> A little lane/place where you go when your mind needs peace.

The name should not be treated like a generic music brand.

The website should visually communicate the feeling of:

- coming home after a long day
- being mentally exhausted
- having too much work on your mind
- feeling stressed
- not knowing what to do next
- wanting to stop thinking for a while
- sitting quietly somewhere
- listening to music without doing anything else

The emotional experience is:

**stress → pause → calm → stay**

The site should NOT feel like:

- a productivity app
- a meditation app
- a generic lofi player
- a Spotify clone
- a modern SaaS dashboard
- a startup landing page
- an AI-generated “glassmorphism” template
- a futuristic music application
- a generic dark-mode website

It should feel human, warm, quiet, atmospheric and slightly nostalgic.

---

# 2. Existing Project

The project has already been created from an existing Astro template.

DO NOT replace the existing project structure blindly.

First inspect the existing project and understand:

- Astro configuration
- Tailwind configuration
- existing components
- global CSS
- existing fonts
- existing layout
- existing assets
- package manager
- scripts
- public directory
- any existing design tokens

Reuse useful infrastructure where appropriate.

Remove or replace template UI that does not fit Sukoon Ki Gali.

Do not preserve template components merely because they already exist.

The final result should feel like a deliberately designed product, not an Astro template with the content swapped.

---

# 3. Technology

Use:

- Astro
- Tailwind CSS
- TypeScript where useful
- YouTube IFrame Player API
- Static frontend architecture

Do NOT introduce unnecessary frameworks.

Do NOT add:

- Next.js
- React unless the existing template absolutely requires a tiny interactive island and there is a compelling reason
- database
- authentication
- backend API
- server actions
- CMS
- Redux
- Zustand
- Firebase
- Supabase
- Prisma
- MongoDB
- user accounts
- analytics dashboard
- recommendation engine

This is intentionally a lightweight static site.

Astro is being used because most of the page is static and the interactive portion is limited to the music player.

---

# 4. Background Image

There is already a generated background image in:

`public/bg.png`

THIS IMAGE IS THE PRIMARY VISUAL FOUNDATION OF THE ENTIRE WEBSITE.

Use the image as the permanent full-screen background.

Do not replace it.

Do not generate another image.

Do not add stock images.

Do not add random decorative illustrations.

Do not add additional hero artwork unless there is an extremely strong reason.

The image depicts the visual world of Sukoon Ki Gali and should remain visible throughout the experience.

The background should:

- cover the viewport
- maintain its aspect ratio
- remain visually dominant
- not be cropped aggressively on common desktop sizes
- behave intelligently on mobile
- remain behind the interface
- never make the UI unreadable

Use appropriate positioning such as:

`background-size: cover`

and tune the positioning for desktop/mobile if necessary.

If the image is better treated as an absolutely positioned `<img>` instead of CSS background, that is acceptable, provided the visual result remains identical.

---

# 5. Background Treatment

The biggest mistake to avoid is putting a heavy generic overlay over the beautiful image.

Do NOT put a large opaque black overlay on top.

Do NOT use a random gradient.

Do NOT use a colorful gradient.

Do NOT use purple/blue/pink AI-style gradients.

The background already has its own palette.

The UI should derive its visual language from the image.

If an overlay is required for readability, use an extremely subtle tonal treatment.

Examples of acceptable treatment:

- very subtle darkening around UI areas
- soft vignette
- subtle bottom-to-transparent gradient behind the player
- extremely low-opacity warm/dark layer

The image must remain recognizable.

The atmosphere should feel like:

**warm lights + evening + quiet street + deep blue/purple sky + muted earthy tones**

not:

**black glassmorphism UI placed over an image.**

---

# 6. Design Philosophy

The design must follow this principle:

> **The interface should disappear into the atmosphere.**

The background and music are the experience.

The UI exists only to make the experience usable.

Every visual element should justify its existence.

Current minimalist web design references consistently emphasize restraint, limited palettes, whitespace/breathing room, strong typography, and keeping the interface subordinate to the primary content. Use those principles here rather than copying any specific website. citeturn0search0turn0search1turn0search4

---

# 7. ABSOLUTE DESIGN WARNING

Do NOT produce the common AI-generated UI pattern:

- translucent white cards everywhere
- glassmorphism everywhere
- excessive `backdrop-blur`
- rounded-2xl on every component
- rounded-full buttons everywhere
- bright gradients
- neon colors
- excessive shadows
- floating cards stacked on cards
- excessive borders
- excessive icons
- huge dashboard-like control panels
- “premium SaaS” aesthetics
- random pills
- unnecessary badges
- excessive animations
- glowing buttons
- purple-blue gradient text
- generic Inter + glass cards
- huge centered hero heading with a CTA
- random decorative blobs
- abstract SVG decorations
- excessive spacing with no purpose

The site should NOT look like something generated from a generic “modern landing page” prompt.

It should feel like a carefully art-directed music experience.

---

# 8. Color System

Do not invent a large color system.

The background image should determine the palette.

Use a restrained palette inspired by:

- deep blue
- muted indigo
- warm brown
- dim amber
- muted cream
- soft gray
- near-black blue

Colors should be low saturation.

Avoid:

- pure white everywhere
- pure black everywhere
- saturated red
- saturated blue
- neon green
- neon purple
- bright pink
- rainbow gradients

Text should generally be:

- soft warm white
- muted cream
- low-contrast gray for secondary information

Primary controls can use a slightly warmer light tone so they feel connected to the street lights in the background.

---

# 9. Typography

Typography should feel calm and editorial.

Do not use extremely heavy font weights.

Avoid giant bold startup-style typography.

Use:

- light/regular weight for most text
- medium weight where hierarchy requires it
- generous letter spacing where appropriate
- restrained typography

The title **Sukoon Ki Gali** can be visually prominent, but it should not occupy half the screen.

The title should feel like the name of a place, not the headline of a SaaS landing page.

Potential typographic treatment:

SUKOON KI GALI

or

Sukoon Ki Gali

with subtle tracking.

A small supporting line can communicate the concept:

> thodi der yahin baitho.

This should remain understated.

Do not over-explain the product.

---

# 10. Overall Layout

The entire experience should fit within the viewport.

There should be no conventional scrolling page.

The initial viewport should feel like a complete scene.

Conceptually:

```text
┌──────────────────────────────────────────────┐
│                                              │
│                                              │
│                  SUKOON KI GALI              │
│                                              │
│             thodi der yahin baitho.          │
│                                              │
│                                              │
│                                              │
│                                              │
│                                              │
│                                              │
│                                              │
│        ┌────────────────────────────┐        │
│        │  music / player controls   │        │
│        └────────────────────────────┘        │
│                                              │
└──────────────────────────────────────────────┘
```

This is only conceptual.

Do not literally reproduce this ASCII layout.

The final composition should feel organic and atmospheric.

---

# 11. Main Content

The primary content should include:

### Brand

**Sukoon Ki Gali**

### Supporting line

Use:

**thodi der yahin baitho.**

This line is intentionally simple.

Do not add paragraphs explaining the product.

Do not write:

“Welcome to Sukoon Ki Gali, a curated collection of peaceful songs designed to help you relax after a stressful day.”

That would destroy the atmosphere.

The user should understand the product from the experience itself.

---

# 12. Music Player

The music player is the primary interactive element.

It should remain visually secondary to the background but still be easy to use.

Required controls:

- Play
- Pause
- Previous
- Next
- Volume
- Progress/track state if technically appropriate
- Current song title
- Current artist/channel information where available
- Playlist access

Optional:

- Shuffle
- Repeat

Do not overload the player.

Do not make it look like a full Spotify player.

---

# 13. YouTube Integration

Use the official **YouTube IFrame Player API**.

Do not download or proxy music.

Do not host music files.

Do not build an unofficial music extraction system.

The website should use a YouTube playlist as the music source.

The current public playlist is:

Playlist ID:

`PLUKBMAqy5FT0`

It currently contains 14 songs.

More songs will be added later.

Do not hardcode assumptions that there will always be exactly 14 songs.

The player should be built around the playlist itself.

Official YouTube IFrame functionality supports playlist playback and controls such as play, pause, next, previous, volume, shuffle and player-state events. Use the documented API rather than reverse-engineering YouTube playback behavior.

---

# 14. Important YouTube Implementation Constraint

DO NOT create an invisible YouTube player whose only purpose is extracting audio.

Do NOT:

- hide the iframe with `display:none`
- make the iframe 1x1
- make the iframe completely transparent
- use YouTube only as an invisible audio backend
- download audio from YouTube
- proxy YouTube media URLs
- extract direct `videoplayback` URLs
- use unofficial YouTube scraping APIs

The player must remain an actual embedded YouTube player and comply with the official platform's embedding/player requirements.

The custom UI can control the YouTube player through the official API, but do not create a deceptive implementation where YouTube is completely hidden.

---

# 15. Player Visual Design

The player should NOT be a giant card.

Avoid:

```text
┌────────────────────────────────────┐
│                                    │
│        huge glassmorphism card     │
│                                    │
│  Album      Song                    │
│  artwork    Artist                  │
│                                    │
│  ◀    ▶    ▶▶     🔊               │
│                                    │
└────────────────────────────────────┘
```

That is too application-like.

Instead, create something closer to a **small floating radio/control console**.

The player should feel like it belongs in the scene.

Potential layout:

```text
Song title
Artist / source

────────────────────────────

     previous   play   next

────────────────────────────

     playlist        volume
```

The exact design is up to the implementation, but it should remain compact.

---

# 16. YouTube Player Visibility

The YouTube player itself should have an appropriate visible presence.

Do not completely conceal it.

A possible approach is to give the embedded player a dedicated visual area that is integrated into the player composition.

Do not allow the YouTube UI to visually dominate the entire website.

The custom controls should provide the site's visual identity.

Where YouTube's own player controls are necessary for compliance/usability, keep them appropriately integrated.

Do not attempt to recreate every YouTube feature.

---

# 17. Initial Playback

The desired behavior is:

1. User opens the website.
2. Background loads.
3. Site is immediately visible.
4. User sees Sukoon Ki Gali.
5. User can intentionally enter/start the experience.
6. Music starts after a user interaction when browser autoplay policies require it.

Do NOT assume browsers will permit audible autoplay.

Do NOT build a broken experience around guaranteed autoplay with sound.

A tasteful first-interaction screen is acceptable.

For example:

```text
Sukoon Ki Gali

thodi der yahin baitho.

[ enter ]
```

After the user interacts:

- initialize/start YouTube playback
- start the selected/first track
- transition into the normal player state

The interaction should feel like **entering the place**, not like accepting a cookie or clicking a generic CTA.

Do not use a large SaaS-style button.

---

# 18. First Visit / Enter Experience

If an entry state is implemented, make it extremely minimal.

Possible structure:

```text
Sukoon Ki Gali

thodi der yahin baitho.

ENTER
```

The background should already be visible.

Do not hide the background behind a splash screen.

Do not use a loading spinner as the main experience.

Do not use an animated logo intro.

Do not add unnecessary startup animations.

A very subtle fade is enough.

---

# 19. Playlist Drawer

The playlist should be accessible but not dominate the screen.

A small button such as:

`Songs`

or an understated list icon can open the playlist.

When opened:

- show current songs
- allow selecting a song
- highlight the currently playing song
- allow closing the drawer
- preserve the background atmosphere

The playlist should not become a generic white/black table.

Possible visual direction:

- narrow side panel
- soft warm/dark surface
- subtle blur if appropriate
- very low opacity border
- song rows with generous spacing
- current song indicated subtly

Do not use excessive cards.

---

# 20. Playlist Data

Even though YouTube provides the playlist, maintain a local lightweight metadata model if necessary for UI presentation.

For example:

```ts
type Song = {
  id: string;
  title: string;
  artist?: string;
  youtubeId?: string;
};
```

However, do not duplicate the entire playlist manually unless required.

Prefer using the YouTube playlist as the authoritative playback order/source.

If metadata needs to be locally defined for the first version, keep it isolated in something like:

`src/data/playlist.ts`

Do not scatter song information across components.

---

# 21. Player Architecture

Create a dedicated player component/island.

Suggested architecture:

```text
src/
├── components/
│   ├── MusicPlayer.astro
│   ├── PlaylistDrawer.astro
│   └── ...
├── data/
│   └── playlist.ts
├── layouts/
│   └── Layout.astro
├── pages/
│   └── index.astro
├── styles/
│   └── global.css
└── public/
    └── bg.png
```

Adjust this to the existing project structure rather than forcing it.

The player logic should be isolated from purely visual components.

---

# 22. YouTube API Loading

Load the YouTube IFrame API correctly.

Do not repeatedly inject the API script.

Do not initialize multiple players.

Do not create a player on every render.

The application should:

1. load the YouTube IFrame API
2. initialize the player once
3. provide the playlist ID
4. listen to player state changes
5. synchronize the custom UI
6. clean up appropriately when necessary

Handle:

- API loading
- player ready
- player state changes
- player errors
- autoplay blocked
- playlist changes

---

# 23. Player State

Maintain a small client-side state model:

```ts
type PlayerState = {
  isReady: boolean;
  isPlaying: boolean;
  currentIndex: number;
  currentVideoId?: string;
  currentTitle?: string;
  volume: number;
  isMuted: boolean;
  isPlaylistOpen: boolean;
};
```

Do not introduce a state-management library.

Simple local state is enough.

---

# 24. Player Events

Synchronize the UI with YouTube player state.

Important states include:

- unstarted
- ended
- playing
- paused
- buffering
- cued

When a track ends, the next track should continue naturally through the YouTube playlist configuration.

When a user selects another track from the playlist drawer, instruct the YouTube player to play that item.

---

# 25. Shuffle

The first version may support shuffle.

If enabled, use the official player API.

Do not implement custom randomization by downloading/manipulating tracks.

If shuffle is enabled:

- visually indicate it subtly
- don't use a bright active color
- preserve the calm aesthetic

---

# 26. Repeat

If repeat is included, the default behavior should be:

**playlist continues indefinitely**

The user should not suddenly hit silence after the final song.

Use YouTube's playlist looping behavior appropriately.

---

# 27. Progress Bar

A progress bar can be useful but should be extremely subtle.

Do not create:

- huge sliders
- glowing progress indicators
- neon progress bars

Use a thin line.

The track progress can be represented with a muted warm tone.

If synchronizing exact progress frequently causes unnecessary complexity, keep the update frequency reasonable.

---

# 28. Volume

Volume should be accessible.

On desktop:

- compact volume control

On mobile:

- use a compact control
- do not let the volume slider consume large screen space

Remember that many mobile browsers manage media volume through the device itself.

Do not create a giant volume panel.

---

# 29. Mobile Design

Mobile is extremely important.

This site will likely be discovered through social media.

Design for:

- iPhone-sized screens
- Android phones
- portrait orientation
- small viewport heights
- mobile browser UI
- touch interaction

The background should remain beautiful on mobile.

Do not simply crop the desktop composition aggressively.

Test:

- 360px wide
- 390px wide
- 412px wide
- 768px wide
- desktop 1280px+
- large desktop

Controls should have comfortable touch targets.

Do not place tiny buttons next to each other.

---

# 30. Mobile Player

On mobile, the player should probably sit near the bottom.

But account for:

- browser safe areas
- gesture navigation
- bottom browser controls
- small screen heights

Use safe-area-aware spacing where appropriate.

Do not make the player cover the most important portion of the background.

---

# 31. Responsive Background

Desktop:

- preserve the full atmosphere
- show the alley depth
- maintain the warm lights and skyline

Mobile:

- crop intelligently
- preserve the doorway/sign/light area where possible
- avoid placing critical text over extremely busy regions

Use media-query-specific background positioning if needed.

Do not distort the image.

---

# 32. Accessibility

Implement proper accessibility.

Controls need:

- accessible labels
- keyboard support
- focus states
- adequate contrast
- semantic buttons

Do not rely only on icons.

For example:

```html
<button aria-label="Play">
```

not just an unlabeled icon.

The playlist drawer should be keyboard accessible.

Escape should close overlays/drawers where appropriate.

---

# 33. Reduced Motion

Respect:

`prefers-reduced-motion`

If animations are added:

- keep them subtle
- reduce/disable them when requested

Do not add continuous animations to the background.

Do not animate every UI element.

The site should feel still.

---

# 34. Animation Philosophy

Animation should feel like breathing, not like a tech demo.

Good:

- subtle fade-in
- slight opacity transition
- gentle player appearance
- smooth drawer transition
- very slow atmospheric movement if eventually added

Bad:

- bouncing elements
- excessive spring animations
- cards flying in
- rotating icons
- constant background movement
- particle systems
- glowing effects
- cursor trails
- animated gradients

The background image is already atmospheric.

It does not need visual tricks.

---

# 35. Borders and Surfaces

The user specifically does NOT want the typical AI-generated combination of:

> transparent card + border + blur + rounded corners + shadow

on everything.

Therefore:

- use borders sparingly
- use transparency sparingly
- use rounded corners sparingly
- don't apply the same radius to every element
- don't make every element a card

Some elements can have subtle rounding because they are controls, but the overall design should remain organic.

The UI should feel like physical objects placed into the scene, not a collection of floating web cards.

---

# 36. Shadows

Use extremely soft shadows only when needed for separation.

Avoid:

```text
shadow-2xl
shadow-[0_0_50px_...]
```

everywhere.

The background already provides natural depth.

---

# 37. Icons

Use a consistent icon library if the existing template already has one.

Otherwise use a lightweight icon solution.

Do not use emojis as interface icons.

Do not mix five different icon styles.

Icons should be:

- thin
- simple
- understated

---

# 38. Logo / Branding

Do not create a complex logo.

The text **Sukoon Ki Gali** itself is the brand.

If a small typographic mark is desired, keep it extremely simple.

No:

- music notes inside circles
- headphones logo
- generic sound-wave logo
- gradient logo
- AI-generated abstract logo

The fictional place is the identity.

---

# 39. Copywriting

Keep copy minimal.

Primary:

**Sukoon Ki Gali**

Secondary:

**thodi der yahin baitho.**

Potential tiny supporting UI:

- Now playing
- Songs
- Shuffle
- Volume

Nothing more is required.

Do not add marketing copy.

Do not add feature lists.

Do not add “Why Sukoon Ki Gali?”

Do not add testimonials.

Do not add “Join the community.”

Do not add a newsletter.

Do not add a footer full of links.

This is an experience, not a marketing site.

---

# 40. Page Structure

The final page should essentially be one viewport.

Conceptually:

```text
<body>
  background
  atmospheric overlay
  main scene
    brand
    subtitle
    player
    playlist drawer
  youtube player integration
</body>
```

Do not create conventional sections like:

- hero
- features
- testimonials
- pricing
- about
- CTA
- footer

This is not a landing page.

---

# 41. Performance

Performance matters because the website is primarily visual.

Optimize:

- image loading
- JavaScript
- YouTube API loading
- font loading
- layout stability

Do not ship unnecessary dependencies.

The background image should be optimized appropriately while preserving quality.

Avoid loading large assets that aren't actually used.

Astro should keep the initial HTML lightweight.

---

# 42. Background Image Optimization

Inspect `public/bg.png`.

If its file size is unnecessarily large, you may create an optimized derivative.

Do NOT replace the visual.

Do NOT degrade it noticeably.

The generated image is the central asset.

If an optimized WebP/AVIF version provides substantial improvement and the environment supports it cleanly, it can be used while retaining `bg.png` as the source asset.

---

# 43. SEO

Even though this is an experience, add basic metadata.

Title:

**Sukoon Ki Gali — thodi der yahin baitho.**

Description should be concise and atmospheric.

For example:

> A quiet corner of the internet with peaceful songs for when you need to slow down.

Do not keyword-stuff.

Use an appropriate Open Graph image.

If practical, use the background image as the OG image.

---

# 44. Favicon

Create a minimal favicon based on the brand.

Do not create a complex icon.

A simple typographic or atmospheric mark is enough.

---

# 45. Browser Behavior

Handle:

- autoplay restrictions
- muted state if necessary
- player errors
- network failures
- YouTube API unavailable
- unsupported video
- deleted/private videos

If a YouTube video is unavailable, the UI should not completely break.

The playlist should continue if possible.

---

# 46. YouTube Error Handling

Handle YouTube player errors gracefully.

Do not show raw technical errors such as:

```text
Error 150
Error 101
```

to normal users.

Instead, use a subtle message such as:

> This song isn't available right now.

But don't make the error state visually dramatic.

---

# 47. Current Playlist

The starting playlist is the user's manually curated collection.

Current YouTube playlist ID:

`PLUKBMAqy5FT0`

Current count:

14 songs.

The playlist will eventually grow.

Do not build assumptions around 14 tracks.

The eventual goal is approximately 100 carefully selected peaceful songs.

The songs are not selected merely because they are popular.

The intended emotional filter is:

> Someone has worked too much, feels stressed, cannot think clearly, and wants to sit somewhere quiet and let their mind settle.

Therefore, music should generally feel:

- peaceful
- warm
- soft
- dreamy
- reflective
- calming
- comfortable
- easy to leave playing in the background

Avoid automatically treating viral songs as suitable.

A song being trending on Instagram is NOT enough.

Avoid:

- item songs
- aggressive dance tracks
- high-energy party songs
- loud EDM
- chaotic meme songs
- intense heartbreak tracks
- songs that are only “aesthetic” but emotionally stressful

The playlist should ultimately feel coherent from beginning to end.

---

# 48. Future Community System

Do NOT implement this now.

But keep the architecture extensible.

Eventually the project may include:

- user voting
- song upvotes
- community suggestions
- song rankings
- new song submissions
- moderation
- community-selected playlist
- multiple moods/places

The current player should not make these future features difficult.

For example, avoid hardcoding the entire UI around a single fixed list.

But do NOT prematurely build backend infrastructure.

---

# 49. Future Multiple Rooms

Do not implement now.

Potential future concept:

```text
Sukoon Ki Gali
    ├── Peace
    ├── Rain
    ├── Late Night
    ├── After Work
    └── Nostalgia
```

But version 1 is ONLY the main peaceful experience.

Do not add navigation for hypothetical future rooms.

---

# 50. Inspiration

Use design inspiration from minimalist, atmospheric, music-oriented websites.

The goal is not to copy any specific site.

Useful principles from current minimalist design references include:

- let the primary visual dominate
- keep interface elements sparse
- use high-quality imagery
- use a restrained palette
- use typography carefully
- preserve breathing room
- make every interaction purposeful
- avoid decorative clutter

These principles are especially appropriate for a site where the visual and music should be the focus. citeturn0search0turn0search1turn0search4turn0search5

A current music-oriented example also demonstrates the value of making the player feel almost invisible so the listener's attention stays on the actual music rather than the interface. citeturn0search10

Use those references for **principles and mood**, not for copying layouts.

---

# 51. Design Quality Bar

Before considering the implementation finished, ask:

### Does it feel peaceful?

If not, redesign it.

### Does the background remain the star?

If not, reduce the UI.

### Does it look like a generic AI-generated website?

If yes, start removing things.

### Are there too many cards?

Remove them.

### Are there too many rounded containers?

Remove them.

### Are there too many borders?

Remove them.

### Are there too many translucent surfaces?

Remove them.

### Are there unnecessary gradients?

Remove them.

### Does the interface resemble a SaaS dashboard?

Redesign it.

### Does it feel like Spotify?

Redesign it.

### Does it feel like a little place on the internet?

Keep going.

---

# 52. Interaction Quality

The player must feel satisfying.

Examples:

Play:

- immediate response
- subtle visual state change

Pause:

- immediate response
- no unnecessary animation

Next:

- current song updates
- player state updates

Previous:

- current song updates

Opening playlist:

- gentle transition
- background remains visible

Closing playlist:

- returns to scene

Do not use large loading states for simple UI interactions.

---

# 53. Initial Loading

On initial load:

1. show the background as quickly as possible
2. render the brand
3. render minimal UI
4. initialize YouTube separately
5. avoid blocking the entire page on the YouTube API

The user should see the atmosphere even if YouTube is still initializing.

The page should not look broken while waiting for the player.

---

# 54. Failure State

If YouTube fails:

The background and brand should still render.

Show a minimal state such as:

> Music is taking a moment.

and allow retry.

Do not show a giant error screen.

The visual identity should remain intact.

---

# 55. No Unnecessary Features

For version 1, DO NOT add:

- login
- signup
- accounts
- likes
- favorites
- comments
- voting
- search
- recommendations
- playlists created by users
- notifications
- profiles
- social sharing feeds
- AI
- chat
- admin panel
- analytics UI
- subscriptions
- payment
- ads
- newsletter
- blog
- contact form

None of these belong in the first version.

---

# 56. Sharing

Although there is no social system, the site should be naturally shareable.

Make the URL simple:

`/`

Later, mood-specific URLs may exist.

The Open Graph metadata should make a shared link look attractive.

The preview should use the Sukoon Ki Gali atmosphere.

The site should be understandable within a few seconds when someone opens it from an Instagram Reel.

---

# 57. Code Quality

Keep the implementation clean.

Avoid:

- giant monolithic components
- duplicated player logic
- duplicated CSS
- random inline styles everywhere
- unnecessary dependencies
- magic numbers scattered throughout the code

Use clear component boundaries.

Keep the YouTube integration isolated.

Keep data separate from presentation.

Keep visual styling in the project's existing Tailwind/global CSS architecture.

---

# 58. Tailwind Usage

Use Tailwind where appropriate.

But don't blindly stack utility classes until a component becomes unreadable.

If a repeated visual pattern is used multiple times, create a reusable component or CSS utility.

The global CSS should define any genuine design tokens that make sense.

Do not create a giant design system for a one-page website.

---

# 59. Avoid Template Residue

After implementation, inspect the page for anything inherited from the original template that doesn't belong.

Remove:

- template navigation
- placeholder sections
- sample content
- generic CTA buttons
- template footer
- unnecessary animations
- template color schemes
- template typography
- template components that conflict with the atmosphere

The final website should feel purpose-built.

---

# 60. Verification Checklist

Before finishing, verify:

## Visual

- [ ] `public/bg.png` is used as the main background
- [ ] background fills the viewport
- [ ] background remains visually dominant
- [ ] no stock images are used
- [ ] no generic gradients
- [ ] no neon colors
- [ ] no excessive glassmorphism
- [ ] no excessive rounded cards
- [ ] no excessive borders
- [ ] no generic SaaS appearance
- [ ] typography feels calm
- [ ] visual hierarchy is clear

## Branding

- [ ] Sukoon Ki Gali is clearly visible
- [ ] subtitle `thodi der yahin baitho.` is present
- [ ] branding does not overpower the background

## Music

- [ ] YouTube IFrame API is used
- [ ] playlist ID `PLUKBMAqy5FT0` is configured
- [ ] player initializes correctly
- [ ] play works
- [ ] pause works
- [ ] next works
- [ ] previous works
- [ ] volume works
- [ ] playlist selection works
- [ ] current track is reflected in UI
- [ ] playlist continues appropriately
- [ ] YouTube errors are handled
- [ ] autoplay restrictions are handled
- [ ] no unofficial audio extraction is used
- [ ] no YouTube media URLs are downloaded/proxied
- [ ] YouTube is not being used as a hidden audio-only backend

## Responsive

- [ ] desktop works
- [ ] tablet works
- [ ] mobile works
- [ ] portrait mobile works
- [ ] controls have adequate touch targets
- [ ] background composition remains attractive
- [ ] player doesn't cover important content

## Accessibility

- [ ] buttons have accessible labels
- [ ] keyboard navigation works
- [ ] focus states exist
- [ ] contrast is sufficient
- [ ] reduced motion is respected

## Performance

- [ ] page loads quickly
- [ ] background is optimized appropriately
- [ ] YouTube API doesn't block initial rendering
- [ ] no unnecessary dependencies
- [ ] no unnecessary JavaScript
- [ ] no layout-breaking loading states

---

# 61. Final Acceptance Criteria

The implementation is successful only if the following statement feels true:

> I open Sukoon Ki Gali after a tiring/stressful day and it feels like I have entered a quiet little place where I can stop thinking for a while and listen to music.

It should NOT feel like:

> I opened another music player.

It should NOT feel like:

> I opened another AI-generated landing page.

It should NOT feel like:

> I opened another SaaS dashboard.

The entire product should feel like:

**a quiet corner of the internet.**

The background image is the environment.

The music is the main content.

The player is the instrument.

The interface should almost disappear.

---

# 62. Implementation Order

Build in this order.

### Phase 1 — Inspect

- inspect existing Astro project
- inspect current template
- inspect `public/bg.png`
- inspect Tailwind/global CSS
- identify what can be reused
- remove irrelevant template assumptions

### Phase 2 — Scene

- implement full-screen background
- implement subtle readability treatment
- add Sukoon Ki Gali branding
- add `thodi der yahin baitho.`
- establish typography and visual hierarchy

### Phase 3 — YouTube

- integrate official YouTube IFrame API
- initialize playlist `PLUKBMAqy5FT0`
- handle player readiness
- handle player state
- handle autoplay restrictions
- handle errors

### Phase 4 — Player

- build compact custom player UI
- connect play/pause
- previous/next
- volume
- current track
- playlist access

### Phase 5 — Playlist

- build understated playlist drawer
- display current playlist
- allow selecting tracks
- keep the atmosphere visible

### Phase 6 — Responsive

- desktop
- tablet
- mobile
- safe-area handling
- background positioning
- touch targets

### Phase 7 — Polish

- typography
- spacing
- opacity
- subtle transitions
- focus states
- accessibility
- performance

### Phase 8 — Cleanup

- remove unused template code
- remove unused dependencies
- remove unused CSS
- verify no placeholder content remains
- verify no generic template styling remains

### Phase 9 — Final test

Test the entire experience from a fresh browser session.

The final result should be judged primarily by **how it feels**, not by how many features it has.

---

# 63. Final Instruction to the Implementing Agent

Take the time to make the design genuinely beautiful.

Do not rush toward “functional but ugly.”

Do not interpret “minimal” as “empty.”

Do not interpret “aesthetic” as “glassmorphism.”

Do not interpret “peaceful” as “pastel gradient.”

Do not interpret “modern” as “rounded cards everywhere.”

Do not add UI simply because there is empty space.

Use the existing `public/bg.png` as the source of visual truth.

Build around it.

The background already establishes the world.

The typography establishes the personality.

The music establishes the emotion.

The player should provide only the controls necessary to stay in that world.

**Sukoon Ki Gali should feel like somewhere you discovered, not something a startup sold you.**