import Database from 'better-sqlite3';
import { avgTemp } from './avgTemp.mjs';
/**
 * Inserts data inside the table
 */

const db = new Database('./tempData.sql');

export function insertData(data) {
  const insert = db.prepare(`INSERT INTO logs(date, temperature)
	VALUES(?,?)`);
  let select = db.prepare(`SELECT SUM(temperature) as sum FROM logs`);
  let count = db.prepare(`SELECT COUNT(*) as count FROM logs`);

  insert.run([new Date().toLocaleString('fr-CH'), data]);
  let sum = select.get().sum;
  let totalCount = count.get().count;
  console.log(totalCount);
  avgTemp(sum, totalCount);
}
