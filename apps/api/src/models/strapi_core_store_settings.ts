import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface strapi_core_store_settingsAttributes {
  id: number;
  key?: string;
  value?: string;
  type?: string;
  environment?: string;
  tag?: string;
}

export type strapi_core_store_settingsPk = "id";
export type strapi_core_store_settingsId = strapi_core_store_settings[strapi_core_store_settingsPk];
export type strapi_core_store_settingsOptionalAttributes = "id" | "key" | "value" | "type" | "environment" | "tag";
export type strapi_core_store_settingsCreationAttributes = Optional<strapi_core_store_settingsAttributes, strapi_core_store_settingsOptionalAttributes>;

export class strapi_core_store_settings extends Model<strapi_core_store_settingsAttributes, strapi_core_store_settingsCreationAttributes> implements strapi_core_store_settingsAttributes {
  id!: number;
  key?: string;
  value?: string;
  type?: string;
  environment?: string;
  tag?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_core_store_settings {
    return strapi_core_store_settings.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    environment: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_core_store_settings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "strapi_core_store_settings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
