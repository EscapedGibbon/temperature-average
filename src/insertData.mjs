import Database from 'better-sqlite3';

const db = new Database('./tempData.sql');

export function insertData(data) {
	const sql = db.prepare(`INSERT INTO logs(date, temperature)
	VALUES(@date,@temperature)`);
	sql.run([new Date().toLocaleString('fr-CH'), data],);
}
