import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface strapi_database_schemaAttributes {
  id: number;
  schema?: object;
  time?: Date;
  hash?: string;
}

export type strapi_database_schemaPk = "id";
export type strapi_database_schemaId = strapi_database_schema[strapi_database_schemaPk];
export type strapi_database_schemaOptionalAttributes = "id" | "schema" | "time" | "hash";
export type strapi_database_schemaCreationAttributes = Optional<strapi_database_schemaAttributes, strapi_database_schemaOptionalAttributes>;

export class strapi_database_schema extends Model<strapi_database_schemaAttributes, strapi_database_schemaCreationAttributes> implements strapi_database_schemaAttributes {
  id!: number;
  schema?: object;
  time?: Date;
  hash?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_database_schema {
    return strapi_database_schema.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    schema: {
      type: DataTypes.JSON,
      allowNull: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_database_schema',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "strapi_database_schema_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
