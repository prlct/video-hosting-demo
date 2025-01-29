import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId } from './strapi_api_token_permissions_token_lnk';

export interface strapi_api_token_permissionsAttributes {
  id: number;
  document_id?: string;
  action?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type strapi_api_token_permissionsPk = "id";
export type strapi_api_token_permissionsId = strapi_api_token_permissions[strapi_api_token_permissionsPk];
export type strapi_api_token_permissionsOptionalAttributes = "id" | "document_id" | "action" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type strapi_api_token_permissionsCreationAttributes = Optional<strapi_api_token_permissionsAttributes, strapi_api_token_permissionsOptionalAttributes>;

export class strapi_api_token_permissions extends Model<strapi_api_token_permissionsAttributes, strapi_api_token_permissionsCreationAttributes> implements strapi_api_token_permissionsAttributes {
  id!: number;
  document_id?: string;
  action?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // strapi_api_token_permissions belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_api_token_permissions belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_api_token_permissions hasMany strapi_api_token_permissions_token_lnk via api_token_permission_id
  strapi_api_token_permissions_token_lnks!: strapi_api_token_permissions_token_lnk[];
  getStrapi_api_token_permissions_token_lnks!: Sequelize.HasManyGetAssociationsMixin<strapi_api_token_permissions_token_lnk>;
  setStrapi_api_token_permissions_token_lnks!: Sequelize.HasManySetAssociationsMixin<strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId>;
  addStrapi_api_token_permissions_token_lnk!: Sequelize.HasManyAddAssociationMixin<strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId>;
  addStrapi_api_token_permissions_token_lnks!: Sequelize.HasManyAddAssociationsMixin<strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId>;
  createStrapi_api_token_permissions_token_lnk!: Sequelize.HasManyCreateAssociationMixin<strapi_api_token_permissions_token_lnk>;
  removeStrapi_api_token_permissions_token_lnk!: Sequelize.HasManyRemoveAssociationMixin<strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId>;
  removeStrapi_api_token_permissions_token_lnks!: Sequelize.HasManyRemoveAssociationsMixin<strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId>;
  hasStrapi_api_token_permissions_token_lnk!: Sequelize.HasManyHasAssociationMixin<strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId>;
  hasStrapi_api_token_permissions_token_lnks!: Sequelize.HasManyHasAssociationsMixin<strapi_api_token_permissions_token_lnk, strapi_api_token_permissions_token_lnkId>;
  countStrapi_api_token_permissions_token_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_api_token_permissions {
    return strapi_api_token_permissions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_users',
        key: 'id'
      }
    },
    updated_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_users',
        key: 'id'
      }
    },
    locale: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_api_token_permissions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_strapi_api_token_permissions_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_strapi_api_token_permissions_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "strapi_api_token_permissions_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "strapi_api_token_permissions_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "strapi_api_token_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_api_token_permissions_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
