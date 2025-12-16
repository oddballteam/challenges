const knex = require('knex');
const faker = require('faker');

// Initialize Knex with SQLite
const db = knex({
  client: 'sqlite3',
  connection: {
    filename: './oddballs.db'
  },
  useNullAsDefault: true
});

const createTableSQL = `
  CREATE TABLE IF NOT EXISTS oddballs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    street TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    phone TEXT,
    email TEXT
  )
`;

async function seed() {
  try {
    console.log('Creating oddballs table...');
    await db.raw(createTableSQL);

    console.log('Checking if data already exists...');
    const existingCount = await db('oddballs').count('id as count').first();
    
    if (existingCount.count > 0) {
      console.log(`Database already contains ${existingCount.count} records.`);
      console.log('Skipping seed. Drop the table or delete oddballs.db to re-seed.');
      process.exit(0);
    }

    console.log('Generating 5000 oddball records...');
    const oddballs = [];
    
    for (let i = 0; i < 5000; i++) {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      
      oddballs.push({
        firstName,
        lastName,
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zip: faker.address.zipCode(),
        phone: faker.phone.phoneNumber(),
        email: `${firstName}.${lastName}@gmail.com`
      });
    }

    console.log('Inserting records into database...');
    await db.batchInsert('oddballs', oddballs, 100);

    console.log('✓ Successfully seeded 5000 oddballs!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
