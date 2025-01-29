import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface strapi_webhooksAttributes {
  id: number;
  name?: string;
  url?: string;
  headers?: object;
  events?: object;
  enabled?: boolean;
}

export type strapi_webhooksPk = "id";
export type strapi_webhooksId = strapi_webhooks[strapi_webhooksPk];
export type strapi_webhooksOptionalAttributes = "id" | "name" | "url" | "headers" | "events" | "enabled";
export type strapi_webhooksCreationAttributes = Optional<strapi_webhooksAttributes, strapi_webhooksOptionalAttributes>;

export class strapi_webhooks extends Model<strapi_webhooksAttributes, strapi_webhooksCreationAttributes> implements strapi_webhooksAttributes {
  id!: number;
  name?: string;
  url?: string;
  headers?: object;
  events?: object;
  enabled?: boolean;


  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_webhooks {
    return strapi_webhooks.init({
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
    url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    headers: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    events: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_webhooks',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "strapi_webhooks_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
