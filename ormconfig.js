const { DataSource } = require('typeorm');

module.exports = new DataSource({
  type: 'postgres',
  host: 'dpg-dbb3gfjrjlhs73b98fog-a.oregon-postgres.render.com',
  port: 5432,
  username: 'barber_studio_db_user',
  password: 'IkOpScbebgre0v2gTonpOiYvnAXn0G9q',
  database: 'barber_studio_db',
  ssl: { rejectUnauthorized: false },
  synchronize: false,
  logging: false,
  entities: ['src/modules/**/drivers/persistence/*.entity.ts'],
  migrations: ['src/shared/db/migrations/*{.ts,.js}'],
  migrationsTableName: 'typeorm_migrations',
});
