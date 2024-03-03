import PG from 'pg';
const Pool = PG.Pool;

export const pool = new Pool({
	user: 'root',
	password: 'root',
	database: 'task_manager',
	host: 'localhost',
	port: '5432',
});
