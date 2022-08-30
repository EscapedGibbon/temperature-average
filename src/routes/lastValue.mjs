import Database from 'better-sqlite3';

/**
 * Inserts data inside the table
 */

const db = new Database('./tempData.sql');

export function lastValue() {
  let lastSelect = db.prepare(
    `SELECT temperature FROM logs ORDER BY date DESC LIMIT 1`,
  );
  const lastValue = lastSelect.get();
  return lastValue;
}
