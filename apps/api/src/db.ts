// db.ts
import { Sequelize } from 'sequelize';

import config from 'config';

export const sequelize = new Sequelize(config.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // <-- Allows self-signed certificates
    }
  },
  define: {
    underscored: true,
  },
});

export async function connect(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log('Successfully connected to the PostgreSQL database.');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
  }
}

export default {
  sequelize,
  connect,
};
