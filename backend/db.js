import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'adaptive_study',
    password: 'tMspring260!',
    port: 5432
});

export default pool;