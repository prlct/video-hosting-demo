import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';

export interface strapi_history_versionsAttributes {
  id: number;
  content_type: string;
  related_document_id?: string;
  locale?: string;
  status?: string;
  data?: object;
  schema?: object;
  created_at?: Date;
  created_by_id?: number;
}

export type strapi_history_versionsPk = "id";
export type strapi_history_versionsId = strapi_history_versions[strapi_history_versionsPk];
export type strapi_history_versionsOptionalAttributes = "id" | "related_document_id" | "locale" | "status" | "data" | "schema" | "created_at" | "created_by_id";
export type strapi_history_versionsCreationAttributes = Optional<strapi_history_versionsAttributes, strapi_history_versionsOptionalAttributes>;

export class strapi_history_versions extends Model<strapi_history_versionsAttributes, strapi_history_versionsCreationAttributes> implements strapi_history_versionsAttributes {
  id!: number;
  content_type!: string;
  related_document_id?: string;
  locale?: string;
  status?: string;
  data?: object;
  schema?: object;
  created_at?: Date;
  created_by_id?: number;

  // strapi_history_versions belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_history_versions {
    return strapi_history_versions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    content_type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    related_document_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    data: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    schema: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'strapi_history_versions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_strapi_history_versions_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "strapi_history_versions_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "strapi_history_versions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
