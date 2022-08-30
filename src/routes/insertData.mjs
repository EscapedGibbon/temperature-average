import Database from 'better-sqlite3';

/**
 * Inserts data inside the table
 */

const db = new Database('./tempData.sql');

export function insertData(data) {
  const insert = db.prepare(`INSERT INTO logs(date, temperature)
  VALUES(?,?)`);

  insert.run([new Date().toISOString(), data]);
  return data;
}
