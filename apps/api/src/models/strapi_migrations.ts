import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface strapi_migrationsAttributes {
  id: number;
  name?: string;
  time?: Date;
}

export type strapi_migrationsPk = "id";
export type strapi_migrationsId = strapi_migrations[strapi_migrationsPk];
export type strapi_migrationsOptionalAttributes = "id" | "name" | "time";
export type strapi_migrationsCreationAttributes = Optional<strapi_migrationsAttributes, strapi_migrationsOptionalAttributes>;

export class strapi_migrations extends Model<strapi_migrationsAttributes, strapi_migrationsCreationAttributes> implements strapi_migrationsAttributes {
  id!: number;
  name?: string;
  time?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_migrations {
    return strapi_migrations.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_migrations',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "strapi_migrations_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
