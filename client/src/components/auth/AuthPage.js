import { useState } from "react";
import { logIn, signUp } from "../../services/auth";

const initialForm = {
  email: "",
  password: "",
  confirmPassword: "",
  isAdult: false,
  acceptedTerms: false,
};

function AuthPage({ onBack }) {
  const [mode, setMode] = useState("signup");
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSignUp = mode === "signup";

  function switchMode(nextMode) {
    setMode(nextMode);
    setForm(initialForm);
    setStatus({ type: "", message: "" });
  }

  function updateField(event) {
    const { name, value, checked, type } = event.target;
    setForm((current) => ({ ...current, [name]: type === "checkbox" ? checked : value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    if (isSignUp && form.password !== form.confirmPassword) {
      setStatus({ type: "error", message: "Passwords do not match." });
      return;
    }

    setIsSubmitting(true);

    try {
      if (isSignUp) {
        await signUp({
          email: form.email,
          password: form.password,
          isAdult: form.isAdult,
          acceptedTerms: form.acceptedTerms,
        });
      } else {
        await logIn({ email: form.email, password: form.password });
      }

      setStatus({ type: "success", message: isSignUp ? "Your account is ready." : "Welcome back." });
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="auth-page">
      <nav className="auth-nav" aria-label="Authentication navigation">
        <button className="brand brand-button" type="button" onClick={onBack} aria-label="Back to Mongra home">
          mongra<span>.</span>
        </button>
        <button className="back-link" type="button" onClick={onBack}>← back</button>
      </nav>

      <section className="auth-layout" aria-labelledby="auth-title">
        <div className="auth-intro">
          <p className="eyebrow"><span className="status-dot" aria-hidden="true" /> talk first, safely</p>
          <h1 id="auth-title">{isSignUp ? "A quieter way to meet." : "Welcome back."}</h1>
          <p>{isSignUp ? "Create an account to start anonymous conversations on your own terms." : "Sign in to continue where the conversation left off."}</p>
          <div className="auth-note"><span aria-hidden="true">✦</span><p>Don't share your password with anyone, no matter what.</p></div>
        </div>

        <div className="auth-card">
          <div className="auth-tabs" role="tablist" aria-label="Account action">
            <button className={isSignUp ? "auth-tab is-active" : "auth-tab"} type="button" role="tab" aria-selected={isSignUp} onClick={() => switchMode("signup")}>Sign up</button>
            <button className={!isSignUp ? "auth-tab is-active" : "auth-tab"} type="button" role="tab" aria-selected={!isSignUp} onClick={() => switchMode("login")}>Log in</button>
          </div>

          <form className="auth-form" onSubmit={handleSubmit}>
            <label>
              Email address
              <input name="email" type="email" autoComplete="email" value={form.email} onChange={updateField} placeholder="you@example.com" required />
            </label>
            <label>
              Password
              <input name="password" type="password" autoComplete={isSignUp ? "new-password" : "current-password"} value={form.password} onChange={updateField} placeholder="At least 8 characters" minLength="8" maxLength="128" required />
            </label>

            {isSignUp && (
              <>
                <label>
                  Confirm password
                  <input name="confirmPassword" type="password" autoComplete="new-password" value={form.confirmPassword} onChange={updateField} placeholder="Repeat your password" minLength="8" maxLength="128" required />
                </label>
                <label className="check-row">
                  <input name="isAdult" type="checkbox" checked={form.isAdult} onChange={updateField} required />
                  <span>I confirm that I am 18 years or older.</span>
                </label>
                <label className="check-row">
                  <input name="acceptedTerms" type="checkbox" checked={form.acceptedTerms} onChange={updateField} required />
                  <span>I agree to the <a href="#terms">Terms of Use</a> and <a href="#privacy">Privacy Policy</a>.</span>
                </label>
              </>
            )}

            {status.message && <p className={status.type === "error" ? "form-message is-error" : "form-message is-success"} role="status">{status.message}</p>}
            <button className="button button-primary auth-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait…" : isSignUp ? "Create account" : "Log in"} <span aria-hidden="true">→</span>
            </button>
          </form>
          <p className="auth-footnote">{isSignUp ? "Mongra is for social entertainment and casual conversation." : "Not an account yet? Choose Sign up above."}</p>
        </div>
      </section>
    </main>
  );
}

export default AuthPage;
