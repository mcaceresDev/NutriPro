import session from "express-session";
import { join } from "path";

const SQLiteStore = require("connect-sqlite3")(session);

export const sessionMiddleware = session({
  store: new SQLiteStore({
    db: "sessions.sqlite",
    dir: join(__dirname, "../database"), // puedes cambiarlo
  }),
  secret: "E:]y.d5)pTjz9,h", // cámbiala
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60, // 1 hora
    secure: false, // usa true si tienes HTTPS
    httpOnly: true,
  },
});
