import sqlite3 from 'sqlite3'

const db = new sqlite3.Database("./tempData.sql");

// db.exec(`CREATE TABLE logs (date, temperature)`);
export function insertData(data) {
	const sql = `INSERT INTO logs(date, temperature)
	VALUES(?,?)`;
	db.run(sql, [Date.now(), 22], (err) => {
		if (err) return console.error(err.message);

		console.log("Success");
	});
}





