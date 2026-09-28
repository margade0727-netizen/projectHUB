# Mongra development plan

## Status

**Current phase:** product definition and technical planning.

A React landing page and signup/login flow are implemented, with an API that stores bcrypt password hashes. Matching, messaging, persistent browser sessions, and production legal copy remain unimplemented. This document records the agreed product direction and the work still required before launch.

## Confirmed decisions

| Area | Decision |
|---|---|
| Product name | `mongra.online` |
| Audience | 18+ users, confirmed with a simple yes/no prompt for now |
| Positioning | Fun, entertainment, and casual social conversation; not dating, matchmaking, or professional services |
| Modes | Open Mode and Anonymous Mode |
| Open Mode | Shows interest tags; mutual Match reveals both profiles and saves the connection |
| Anonymous Mode | Shows no interests or identities; allows only Extend or End; never saves a connection |
| Timed chat | Three-minute initial round plus up to three mutually accepted extensions (12 minutes maximum) |
| Password length | 8 to 128 characters |
| Open Mode decisions | Extend, Match, End |
| Anonymous Mode decisions | Extend, End |
| End/removal message | “Conversation unavailable” |
| Profile fields | Name, username, photo, social-media handle, description, and selected interest tags |
| Interest input | User-written description plus selected tags |
| Chat retention | Delete ended anonymous chats, except temporary retention of reported content for moderation review |

## Naming still to decide

- The saved mutual-connection list: **Matches**, **Connected**, or another name.

## Required product work

### 1. Product and UX design

- [x] Add the [design system](DESIGN.md) as the visual reference for mobile-first UI work.
- [x] Apply the design system to the static first-page prototype.
- [x] Add a presentational English/Mongolian language control, with English as the default.
- [x] Make the prototype fluid across phone, tablet, and desktop breakpoints using shared global tokens.
- [ ] Define the mobile-first information architecture and navigation.
- [ ] Design onboarding: 18+ confirmation, Terms/Privacy acceptance, profile setup, and interest selection.
- [ ] Design random and interest-based match entry points.
- [ ] Design anonymous chat, randomized aliases/avatars, timer, and decision states.
- [ ] Design all outcome states: mutual extend, mutual match, end, block, report, and unavailable conversation.
- [ ] Design the matched-connections list and timer-free messaging.
- [ ] Design Anonymous Mode’s short report-grace state.
- [ ] Write accessible, non-dating-oriented product copy.

### 2. Legal, privacy, and safety

- [ ] Obtain appropriate legal review before release.
- [ ] Write a Privacy Policy covering data collection, profile visibility, report retention, moderation, account deletion, and contact details.
- [ ] Write Terms of Use covering 18+ use, prohibited conduct, safety review, moderation, suspension/ban/appeal handling, and the entertainment-only positioning.
- [ ] Implement required acceptance of both policies before use.
- [ ] Store the accepted policy version and timestamp.
- [ ] Define exact retention periods and secure deletion procedures for normal, reported, blocked, and deleted-account data.
- [ ] Define a moderator workflow and evidence standards for reports, suspensions, and bans.

### 3. Backend foundations

- [ ] Choose and initialize the frontend/backend repository structure.
- [x] Add MongoDB-backed sign-up and login endpoints with server-side bcrypt password hashing.
- [ ] Configure environments, secrets, database connection, logging, and error handling.
- [ ] Create schemas for users, profiles, interest tags, sessions, chats, messages, matches, blocks, reports, moderation actions, and policy acceptance.
- [ ] Implement authentication, authorization, and account deletion.
- [ ] Build matching queues for random and interest-based chats.
- [ ] Implement real-time chat and authoritative server-side timers.
- [ ] Implement mutual decision rules, extension cap, matching, and connection removal.
- [ ] Implement block/report workflows and report-only chat preservation.
- [ ] Add rate limits and abuse-prevention controls for new accounts.

### 4. Frontend foundations

- [ ] Build responsive mobile-first screens.
- [x] Convert the landing-page prototype into reusable React components.
- [x] Build a responsive, presentationally complete login/sign-up screen connected to the authentication API.
- [x] Tune the desktop landing page to use the available viewport width while preserving fluid mobile gutters.
- [ ] Build legal acceptance and profile onboarding.
- [ ] Build mode selection, matching, anonymous chat, timer, and decision interfaces.
- [ ] Build report/block forms and unavailable conversation states.
- [ ] Build Open Mode profile reveal and the saved-connections list.
- [ ] Ensure users cannot access identities or saved connections in Anonymous Mode.

### 5. Quality and launch readiness

- [ ] Add unit and integration tests for all decision outcomes and permissions.
- [ ] Test real-time disconnect, reconnect, timeout, and simultaneous-action cases.
- [ ] Conduct privacy and security review, including access control around reports and revealed profile data.
- [ ] Add analytics only after documenting its purpose and privacy treatment.
- [ ] Prepare moderation operations, support routes, and incident response.
- [ ] Run usability testing focused on consent, safety, and clarity of mode differences.

## Core rules to protect during implementation

- Initial chats must not expose a real profile, name, photo, social handle, or written description.
- A profile reveal may happen only after a mutual Open Mode Match.
- One-sided Match never reveals either profile.
- One-sided Extend never continues a chat.
- One-sided End ends the chat.
- Anonymous Mode must not contain a hidden path to identity reveal or saved connections.
- A report may preserve chat content for review; normal ended Anonymous Mode chats should not be retained as conversation history.
- Block, report, removal, and an ordinary end must not disclose which user initiated the action.

## Suggested implementation order

1. Establish the project scaffold, authentication, profile setup, and policy acceptance.
2. Build Open Mode’s anonymous real-time chat and server-side timer.
3. Add the Extend / Match / End state machine and the mutual-connection list.
4. Add Anonymous Mode with its stricter no-reveal/no-save rules.
5. Add reporting, blocking, moderation storage, rate limiting, and admin tooling.
6. Test safety, privacy, edge cases, and mobile usability before a limited release.
