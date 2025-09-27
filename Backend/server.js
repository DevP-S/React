import express from "express";
import sqlite3 from "sqlite3";
import { open } from "sqlite";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Apri il database SQLite
const dbPromise = open({
  filename: "./users.db",
  driver: sqlite3.Database
});

// Inizializza la tabella e utente admin
const initDB = async () => {
  const db = await dbPromise;
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      password TEXT
    )
  `);

  const user = await db.get("SELECT * FROM users WHERE username = 'admin'");
  if (!user) {
    await db.run(
      "INSERT INTO users (username, password) VALUES (?, ?)",
      ["admin", "1234"]
    );
  }
};

// Chiama initDB dopo aver definito dbPromise
initDB();

// Endpoint login
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const db = await dbPromise;

  const user = await db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );

  if (user) {
    res.json({ success: true, user });
  } else {
    res.json({ success: false });
  }
});

// Avvio server
app.listen(3001, () => {
  console.log("✅ Server avviato su http://localhost:3001");
});
