# Frontend guide

## What is implemented

The current frontend includes a React landing page and a signup/login flow connected to the authentication API. Matching, messaging, language switching, and persistent browser sessions are not implemented yet.

Files work together as follows:

    client/public/index.html  browser document and root mount point
    client/src/index.js       starts React and renders App
    client/src/app.js         page components and content
    client/public/styles.css  global design tokens and page styles

## How to start the frontend

From the client directory, run:

    npm install
    npm start

npm install downloads packages in client/package.json. npm start launches the React development server. The browser loads public/index.html, then React replaces its root element with the App interface.

## JavaScript and React components

There are no JavaScript classes in the current app. Modern React uses function components instead of class components.

### index.js

    const root = createRoot(document.getElementById("root"));
    root.render(<App />);

- createRoot connects React to the root element in public/index.html.
- root.render displays the main App component.
- Keep this file small. It is the entry point, not the place for page content or feature logic.

### App

App is the default export from src/app.js and the top-level page component. It assembles navigation, the hero, chat preview, product-principle cards, how-it-works steps, the final call-to-action card, and the footer.

Use App when adding a major landing-page section. Create another component file for a new screen, such as sign-up or chat, instead of making App too large.

### ChatPreview

ChatPreview renders the decorative anonymous chat mock-up in the hero section.

It is presentational: the timer, message input, and typing dots are static. When real chat functionality is added, pass real data to this component and add message/event logic.

### Principle

Example:

    <Principle number="01" title="Start unseen">
      Every conversation begins behind a randomized alias and avatar.
    </Principle>

Principle creates one reusable product-principle card.

| Prop | What it does |
|---|---|
| number | Displays the small section number, such as 01. |
| title | Displays the card heading. |
| children | Displays the paragraph between opening and closing component tags. |

Use it to add a card without copying the same markup.

### Step

Example:

    <Step number="01" title="Choose a mode">
      Open Mode shares interests. Anonymous Mode keeps everything private.
    </Step>

Step creates one list item in the How it works section. Its number, title, and children props work like Principle.

## Classes and styles

In React, use className rather than HTML class:

    <section className="hero">

The class name connects the React element to a selector in client/public/styles.css.

### Global style tokens

The :root block at the top of styles.css is the global design-control panel. Change values there first when updating the project-wide look.

| Token group | Examples | Use |
|---|---|---|
| Colors | --color-base, --color-primary, --color-text | Brand palette and semantic text colors |
| Typography | --font-body, --font-label, --font-size-headline | Fonts, readable sizes, and hierarchy |
| Spacing | --space-md, --page-gutter, --space-3xl | Gaps, padding, and fluid whitespace |
| Shape | --radius-md, --radius-lg, --radius-pill | Card, bubble, and button curves |
| Surfaces | --surface-glass, --surface-tier-2, --surface-dock | Dark glass layers |
| Elevation | --blur-card, --shadow-primary, --shadow-card | Soft depth and glow |
| Layout | --page-gutter, --page-gutter-narrow | Fluid page gutters and compact-phone spacing |

Example: change this one token to update the primary-button color everywhere.

    --color-primary: #14b8a6;

### Page class groups

| Classes | What they style |
|---|---|
| .page-shell, .nav, .nav-actions, .brand | Page width, navigation, and Mongra wordmark |
| .language-switcher, .language-option, .is-current | ENG/MN presentation; is-current marks English as selected |
| .hero, .hero-copy, .eyebrow, .intro, .hero-actions | Landing-page introduction and calls to action |
| .button, .button-primary, .button-light, .text-link | Reusable visual button and text-link styles |
| .conversation-art, .orb, .chat-window | Decorative chat illustration and ambient shapes |
| .chat-topbar, .alias, .avatar, .timer, .chat-body, .message, .incoming, .outgoing, .typing, .chat-input | Parts of the static chat preview |
| .principles, .number | Reusable product-principle card layout |
| .how-it-works, .steps | Explanatory step section |
| .start-card, .fine-print | Final call-to-action card and its 18+ note |
| footer | Footer links and tagline |

### Responsive behavior

The stylesheet is mobile-first and uses global fluid values such as clamp().

- Below 700px: one-column phone layout.
- At 700px and above: tablet layout with a two-column hero and three-column principle cards.
- At 1024px and above: the page uses the full available viewport width with expanded breathing room.
- Below 360px: narrower gutters and simplified navigation.

For new screens, prefer clamp(), CSS Grid/Flexbox, global spacing tokens, and these breakpoints instead of fixed device widths.

## Adding functionality safely

Current controls are links for visual presentation. Replace or enhance them once the relevant feature exists.

## Authentication page

The login/sign-up interface is in src/components/auth/AuthPage.js. It uses the auth functions in src/services/auth.js to call:

    POST /api/auth/signup
    POST /api/auth/login

The API is implemented in the server folder. Sign-up requires email, a password between 8 and 128 characters, 18+ confirmation, and Terms/Privacy acceptance. The form reminds users never to share their password. The server hashes passwords using bcrypt before saving the user to MongoDB. Password hashes are never returned to the browser.

Configure the server by copying server/.env.example to server/.env and setting MONGODB_URI and a long random JWT_SECRET. Do not commit server/.env.

The API returns a JWT after successful authentication, but the current frontend intentionally does not persist that token. Add a secure, HttpOnly-cookie session flow before building protected user pages.

### Language switching

The language options are currently static. To make them work later:

1. Import useState into app.js.
2. Store the current language, initially en.
3. Render text from an English/Mongolian translation object.
4. Use accessible buttons or click handlers to update the selected language.
5. Move translations into a dedicated file, such as src/content/translations.js.

### A real primary action

The Start a conversation link currently scrolls to a visual section. When a start-chat screen exists, replace its href with navigation logic, such as a React Router route or your own screen-state handler. Keep the button and button-primary classes so its visual style stays consistent.

## Recommended organization as the app grows

    client/src/
      app.js
      index.js
      components/
        common/      Shared Button, Logo, LanguageSwitcher, Modal
        landing/     ChatPreview, Principle, Step
        chat/        ChatRoom, MessageBubble, Timer, DecisionPanel
        onboarding/  AgeGate, LegalAcceptance, ProfileSetup
      pages/         LandingPage, OnboardingPage, ChatPage, MatchesPage
      content/       Translations and static copy
      services/      API calls and socket setup
      hooks/         Reusable React hooks

Extract a component from app.js when it becomes reusable, interactive, or long enough to make App hard to scan. Keep visual tokens in the global stylesheet; do not create isolated colors, fonts, or spacing scales inside individual components.
