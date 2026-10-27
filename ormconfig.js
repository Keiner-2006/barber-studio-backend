const { DataSource } = require('typeorm');

module.exports = new DataSource({
  type: 'postgres',
<<<<<<< HEAD
  url: process.env.DATABASE_URL || process.env.PLATFORM_DATABASE_URL,
=======
  host: 'dpg-dbb3gfjrjlhs73b98fog-a.oregon-postgres.render.com',
  port: 5432,
  username: 'barber_studio_db_user',
  password: 'IkOpScbebgre0v2gTonpOiYvnAXn0G9q',
  database: 'barber_studio_db',
>>>>>>> 05d6582edfc8790a94d649f0902b455499488925
  ssl: { rejectUnauthorized: false },
  synchronize: false,
  logging: false,
  entities: ['src/modules/**/drivers/persistence/*.entity.ts'],
  migrations: ['src/shared/db/migrations/*{.ts,.js}'],
  migrationsTableName: 'typeorm_migrations',
});
