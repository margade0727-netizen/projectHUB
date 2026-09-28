# mongra.online

Mongra is a mobile-first web app for anonymous, casual social conversation. People meet through how they talk before any personal details are visible. The product is intentionally for fun and entertainment—not dating, matchmaking, or professional services.

## Product principles

- Every new chat begins anonymously, using a randomized alias and avatar.
- No name, profile photo, social handle, or written profile is visible in an initial chat.
- Open Mode may show shared interest tags during a chat; Anonymous Mode shows no interests or identity information.
- A connection is saved only when both people mutually choose **Match** in Open Mode.
- A mutual Open Mode match reveals both profiles and creates a timer-free ongoing connection.
- Anonymous Mode never reveals identities, saves connections, or offers a Match action.
- Safety and consent take priority: users can block or report at any time.

## Conversation flow

1. A user starts a random or interest-based chat.
2. The chat runs for three minutes.
3. At the end of each round, Open Mode users can choose **Extend**, **Match**, or **End**.
4. Anonymous Mode users can choose **Extend** or **End**.
5. Extend succeeds only when both people choose it. A chat can be extended three times, for a maximum of 12 minutes.
6. Match succeeds only when both Open Mode users choose it. Both profiles are revealed and the connection moves to the future Matches/Connected list.
7. If a person ends, blocks, reports, or removes a connection, the other person sees only: **“Conversation unavailable.”**

## Modes

### Open Mode

- Shared interest tags are visible during the initial chat.
- A mutual Match reveals each user’s name, username, profile photo, written description, and social-media handle.
- Matched users can message each other without a timer until either person removes, blocks, or reports the connection.

### Anonymous Mode

- No interest tags, profile details, or identity reveal.
- Only Extend and End are available after each timed round.
- Ended conversations are deleted, except where a report requires temporary retention for moderation.
- A short reporting grace period is available immediately after a chat ends.

## Safety and privacy

- **Block** ends the chat/connection and prevents future pairing between those people.
- **Report** ends the chat/connection and asks for a reason, such as harassment, spam, inappropriate content, or suspected underage use.
- Reported chat content may be retained only long enough for safety and moderation review, then deleted under the retention policy.
- New accounts should be rate-limited to reduce spam and fake accounts.
- Moderation decisions should be evidence-based; block counts are review signals, not automatic permanent bans.

## Legal requirements before use

Before account creation or use, Mongra must require users to:

- Confirm they are 18 or older.
- Agree to the Terms of Use and Privacy Policy.
- Be able to open both legal pages before accepting.

The product should record the acceptance date/time and policy version. The Privacy Policy must explain collected data, what is shown to other users and when, reported-chat retention, moderation, and account-deletion requests. The Terms of Use must cover the 18+ rule, prohibited behavior, moderation actions, report review, account termination/appeals, and this positioning statement:

> Mongra is intended for social entertainment and casual conversation only. It is not a dating service, matchmaking service, or professional relationship platform.

This wording describes the product’s intended purpose; it does not replace legal review or prevent a user from trying to use it for dating.

## Development

Implementation planning and the active progress tracker live in [DEVELOPMENT.md](DEVELOPMENT.md).

## Proposed technical structure

The initial stack is expected to be MERN:

```text
client/                 React frontend
server/                 Node/Express API
  config/               Database and environment configuration
  controllers/          Request handling
  models/               Mongoose schemas
  routes/               API routes
  middleware/           Authentication and error handling
  validators/           Request validation
```

The stack and repository layout are not yet implemented and can change before development begins.
