import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface strapi_migrations_internalAttributes {
  id: number;
  name?: string;
  time?: Date;
}

export type strapi_migrations_internalPk = "id";
export type strapi_migrations_internalId = strapi_migrations_internal[strapi_migrations_internalPk];
export type strapi_migrations_internalOptionalAttributes = "id" | "name" | "time";
export type strapi_migrations_internalCreationAttributes = Optional<strapi_migrations_internalAttributes, strapi_migrations_internalOptionalAttributes>;

export class strapi_migrations_internal extends Model<strapi_migrations_internalAttributes, strapi_migrations_internalCreationAttributes> implements strapi_migrations_internalAttributes {
  id!: number;
  name?: string;
  time?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_migrations_internal {
    return strapi_migrations_internal.init({
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
    tableName: 'strapi_migrations_internal',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "strapi_migrations_internal_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
