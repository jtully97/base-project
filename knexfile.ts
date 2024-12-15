import { Knex } from 'knex';

const knexConfig: { [key: string]: Knex.Config } = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: 'postgres',
            database: 'postgres',
        },
        migrations: {
            directory: './db/migrations',
        },
    },
};

export default knexConfig;
