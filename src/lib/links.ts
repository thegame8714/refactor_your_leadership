export const BOOKING_URL = "https://calendar.app.google/SJHqZZKWCnVrtwXC7";

// Resolved long-form URL for the same appointment schedule, used to embed
// the live Google Calendar booking widget directly on the site. The short
// link above sets X-Frame-Options: SAMEORIGIN on its redirect response, so
// it can't be used as an iframe src, but this destination URL has no
// frame-blocking headers and reflects the same real-time availability.
export const BOOKING_EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ07EaTrTpnT41FRqKES7weRsyKTTsoL2AKNYk8ydsTEgzW-25UY07rVQFGiWcWqj_wsfHqcVTdi?gv=true";
