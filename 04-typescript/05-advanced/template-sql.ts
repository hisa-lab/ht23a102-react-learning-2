const tables = ['users', 'posts', 'comments'] as const;
type Table = typeof tables[number];
type AllSelect = `SELECT * FROM ${Table}`;
type LimitSelect = `${AllSelect} LIMIT ${number}`;

const createQuery = (table: Table, limit?: number): AllSelect | LimitSelect =>
    limit ? `SELECT * FROM ${table} LIMIT ${limit}`
    : `SELECT * FROM ${table}`;

const query = createQuery('users', 20);
const query2 = createQuery('posts');
// const query3 = createQuery('hello');
console.log(query);
console.log(query2);