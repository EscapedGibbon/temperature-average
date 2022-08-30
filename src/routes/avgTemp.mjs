import Database from 'better-sqlite3';

/**
 * Inserts data inside the table
 */

const db = new Database('./tempData.sql');

export function avgTemp() {
  let select = db.prepare(`SELECT AVG(temperature) as avg FROM logs`);
  const avgTemp = select.get().avg;
  return avgTemp;
}
