import Database from 'better-sqlite3';

/**
 * Inserts data inside the table
 */

const db = new Database('./tempData.sql');

export function avgPerHour() {
  const group = db.prepare(
    `select  strftime('%Y-%m-%d %H',date),avg(temperature) from logs group by strftime('%Y-%m-%d %H',date) order by strftime('%Y-%m-%d %H',date)`,
  );
  const avgPerHour = group.all();
  return avgPerHour;
}
