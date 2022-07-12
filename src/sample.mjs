import sqlite3 from 'better-sqlite3'
const db = new sqlite3('./database.db');

db.exec("CREATE TABLE IF NOT EXISTS logs (date DATE, temperature INT)");
db.exec("CREATE INDEX IF NOT EXISTS dateIndex ON logs (date DESC)");
console.log(db);
const insert = db.prepare("INSERT INTO logs VALUES (@date,@temperature");
let temp = 33;
insert.run({ date: Date.now(), temperature: temp });
