import Database from 'better-sqlite3';
/**
 * Inserts data inside the table
 * @param {number} data - data inserted
 */

const db = new Database('./tempData.sql');

export function insertData(data) {
  const sql = db.prepare(`INSERT INTO logs(date, temperature)
	VALUES(@date,@temperature)`);
  sql.run([new Date().toLocaleString('fr-CH'), data]);
}
