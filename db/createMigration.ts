import knex from 'knex';
import readline from 'readline';
import knexConfig from '../knexfile'; // Import the knex configuration

// Get the knex configuration for the environment (you can change this to use 'production' or 'staging' if needed)
const db = knex(knexConfig.development);

// Set up readline to prompt for the migration name
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the name for the new migration: ', (migrationName) => {
    if (!migrationName) {
        console.log('Migration name is required.');
        rl.close();
        return;
    }

    // Create the migration using Knex CLI commands programmatically
    db.migrate
        .make(migrationName)
        .then(() => {
            console.log(
                `Migration ${migrationName} created successfully. ` +
                    `DON'T FORGET TO CHANGE FILE TYPE FROM .js TO .ts`
            );
        })
        .catch((error) => {
            console.error('Error creating migration:', error);
        })
        .finally(() => {
            rl.close();
            db.destroy(); // Close the database connection
        });
});
