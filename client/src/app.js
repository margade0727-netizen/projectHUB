const Principle = ({ number, title, children }) => (
  <article>
    <p className="number">{number}</p>
    <h2>{title}</h2>
    <p>{children}</p>
  </article>
);

const Step = ({ number, title, children }) => (
  <li>
    <span>{number}</span>
    <strong>{title}</strong>
    <p>{children}</p>
  </li>
);

const ChatPreview = () => (
  <div className="conversation-art" aria-label="An illustration of an anonymous conversation">
    <div className="orb orb-one" />
    <div className="orb orb-two" />
    <div className="chat-window">
      <div className="chat-topbar">
        <div className="alias">
          <span className="avatar avatar-sun" aria-hidden="true">✦</span>
          <span>ember-cove</span>
        </div>
        <span className="timer">02:14</span>
        <span className="more" aria-hidden="true">•••</span>
      </div>
      <div className="chat-body">
        <div className="message incoming">What’s a small thing that made your day better?</div>
        <div className="message outgoing">The first coffee after a rainy walk. You?</div>
        <div className="message incoming short">A good song at the right time.</div>
        <div className="typing" aria-label="The other person is typing">
          <span /><span /><span />
        </div>
      </div>
      <div className="chat-input">
        <span>Write a message</span>
        <b aria-hidden="true">↑</b>
      </div>
    </div>
    <p className="art-caption">No profile. No pressure. Just a good start.</p>
  </div>
);

function App() {
  const [screen, setScreen] = useState("landing");

  if (screen === "auth") {
    return <AuthPage onBack={() => setScreen("landing")} />;
  }

  return (
    <main className="page-shell">
      <nav className="nav" aria-label="Primary navigation">
        <button className="brand brand-button" type="button" onClick={() => setScreen("landing")} aria-label="Mongra home">mongra<span>.</span></button>
        <div className="nav-actions">
          <div className="language-switcher" aria-label="Language">
            <a className="language-option is-current" href="#top" lang="en" aria-current="true">ENG</a>
            <span aria-hidden="true">/</span>
            <a className="language-option" href="#top" lang="mn">MN</a>
          </div>
          <a className="nav-link" href="#how-it-works">how it works <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> anonymous conversations</p>
          <h1 id="hero-title">Talk first.<br /><em>Meet later.</em></h1>
          <p className="intro">Mongra is a space for a real conversation before profiles, photos, or expectations enter the room.</p>
          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => setScreen("auth")}>Start a conversation <span aria-hidden="true">→</span></button>
            <a className="text-link" href="#how-it-works">See how it works <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <ChatPreview />
      </section>

      <section className="principles" aria-label="Mongra principles">
        <Principle number="01" title="Start unseen">Every conversation begins behind a randomized alias and avatar.</Principle>
        <Principle number="02" title="Keep it light">Three minutes to see whether a conversation has somewhere to go.</Principle>
        <Principle number="03" title="Choose together">Profiles are shared only after both people choose to match.</Principle>
      </section>

      <section className="how-it-works" id="how-it-works" aria-labelledby="how-title">
        <div className="section-heading">
          <p className="eyebrow">the simple part</p>
          <h2 id="how-title">A little more human,<br />from the first hello.</h2>
        </div>
        <ol className="steps">
          <Step number="01" title="Choose a mode">Open Mode shares interests. Anonymous Mode keeps everything private.</Step>
          <Step number="02" title="Start talking">You are paired with someone new for a short, easygoing conversation.</Step>
          <Step number="03" title="Decide together">Extend the chat, match in Open Mode, or simply move on.</Step>
        </ol>
      </section>

      <section className="start-card" id="start" aria-labelledby="start-title">
        <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> your next conversation</p>
        <h2 id="start-title">The best introductions<br />rarely need a photo.</h2>
        <button className="button button-light" type="button" onClick={() => setScreen("auth")}>Enter Mongra <span aria-hidden="true">→</span></button>
        <p className="fine-print">For adults 18+ · Social entertainment and casual conversation only</p>
      </section>

      <footer>
        <button className="brand brand-button" type="button" onClick={() => setScreen("landing")}>mongra<span>.</span></button>
        <p>talk first, meet later</p>
        <div><a href="#top">Privacy</a><a href="#top">Terms</a><a href="#top">Safety</a></div>
      </footer>
    </main>
  );
}

export default App;
import { useState } from "react";
import AuthPage from "./components/auth/AuthPage";
