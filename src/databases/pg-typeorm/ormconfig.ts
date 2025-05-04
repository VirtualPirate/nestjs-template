import { DataSource } from 'typeorm';
import { migrations } from './migrations/index.js';
import { entities } from './entities/index.js';
// import { migrations } from './migrations/index.js';
// import { PG_CERT } from './certificates.js';

export const PGDataSource: DataSource = new DataSource({
  type: 'postgres',
  replication: {
    master: {
      host: process.env['PG_HOST'],
      port: parseInt(process.env['PG_PORT']),
      username: process.env['PG_USERNAME'],
      password: process.env['PG_PASSWORD'],
      database: process.env['PG_DATABASE'],

      // If SSL certificate is provided
      //   ...(process.env['PG_SSL'] === 'require'
      //     ? {
      //         ssl: {
      //           rejectUnauthorized: true,
      //           ca: PG_CERT,
      //         },
      //       }
      //     : {}),
    },
    slaves: [],
  },
  synchronize: false,
  logging: process.env['PG_LOGGING'] === 'true',
  entities: entities,
  migrations: migrations,
});
