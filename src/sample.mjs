import sqlite3 from 'sqlite3'

const db = new sqlite3.Database("./tempData.sql");


export function insertData(data) {
	const sql = `INSERT INTO logs(date, temperature)
	VALUES(?,?)`;
	db.run(sql, [new Date().toLocaleString('fr-CH'), data], (err) => {
		if (err) return console.error(err.message);

		console.log("Success");

	});


}





