import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_permissions_role_lnk, admin_permissions_role_lnkId } from './admin_permissions_role_lnk';
import type { admin_users, admin_usersId } from './admin_users';
import type { strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId } from './strapi_workflows_stages_permissions_lnk';

export interface admin_permissionsAttributes {
  id: number;
  document_id?: string;
  action?: string;
  action_parameters?: object;
  subject?: string;
  properties?: object;
  conditions?: object;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type admin_permissionsPk = "id";
export type admin_permissionsId = admin_permissions[admin_permissionsPk];
export type admin_permissionsOptionalAttributes = "id" | "document_id" | "action" | "action_parameters" | "subject" | "properties" | "conditions" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type admin_permissionsCreationAttributes = Optional<admin_permissionsAttributes, admin_permissionsOptionalAttributes>;

export class admin_permissions extends Model<admin_permissionsAttributes, admin_permissionsCreationAttributes> implements admin_permissionsAttributes {
  id!: number;
  document_id?: string;
  action?: string;
  action_parameters?: object;
  subject?: string;
  properties?: object;
  conditions?: object;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // admin_permissions hasMany admin_permissions_role_lnk via permission_id
  admin_permissions_role_lnks!: admin_permissions_role_lnk[];
  getAdmin_permissions_role_lnks!: Sequelize.HasManyGetAssociationsMixin<admin_permissions_role_lnk>;
  setAdmin_permissions_role_lnks!: Sequelize.HasManySetAssociationsMixin<admin_permissions_role_lnk, admin_permissions_role_lnkId>;
  addAdmin_permissions_role_lnk!: Sequelize.HasManyAddAssociationMixin<admin_permissions_role_lnk, admin_permissions_role_lnkId>;
  addAdmin_permissions_role_lnks!: Sequelize.HasManyAddAssociationsMixin<admin_permissions_role_lnk, admin_permissions_role_lnkId>;
  createAdmin_permissions_role_lnk!: Sequelize.HasManyCreateAssociationMixin<admin_permissions_role_lnk>;
  removeAdmin_permissions_role_lnk!: Sequelize.HasManyRemoveAssociationMixin<admin_permissions_role_lnk, admin_permissions_role_lnkId>;
  removeAdmin_permissions_role_lnks!: Sequelize.HasManyRemoveAssociationsMixin<admin_permissions_role_lnk, admin_permissions_role_lnkId>;
  hasAdmin_permissions_role_lnk!: Sequelize.HasManyHasAssociationMixin<admin_permissions_role_lnk, admin_permissions_role_lnkId>;
  hasAdmin_permissions_role_lnks!: Sequelize.HasManyHasAssociationsMixin<admin_permissions_role_lnk, admin_permissions_role_lnkId>;
  countAdmin_permissions_role_lnks!: Sequelize.HasManyCountAssociationsMixin;
  // admin_permissions hasMany strapi_workflows_stages_permissions_lnk via permission_id
  strapi_workflows_stages_permissions_lnks!: strapi_workflows_stages_permissions_lnk[];
  getStrapi_workflows_stages_permissions_lnks!: Sequelize.HasManyGetAssociationsMixin<strapi_workflows_stages_permissions_lnk>;
  setStrapi_workflows_stages_permissions_lnks!: Sequelize.HasManySetAssociationsMixin<strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId>;
  addStrapi_workflows_stages_permissions_lnk!: Sequelize.HasManyAddAssociationMixin<strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId>;
  addStrapi_workflows_stages_permissions_lnks!: Sequelize.HasManyAddAssociationsMixin<strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId>;
  createStrapi_workflows_stages_permissions_lnk!: Sequelize.HasManyCreateAssociationMixin<strapi_workflows_stages_permissions_lnk>;
  removeStrapi_workflows_stages_permissions_lnk!: Sequelize.HasManyRemoveAssociationMixin<strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId>;
  removeStrapi_workflows_stages_permissions_lnks!: Sequelize.HasManyRemoveAssociationsMixin<strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId>;
  hasStrapi_workflows_stages_permissions_lnk!: Sequelize.HasManyHasAssociationMixin<strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId>;
  hasStrapi_workflows_stages_permissions_lnks!: Sequelize.HasManyHasAssociationsMixin<strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId>;
  countStrapi_workflows_stages_permissions_lnks!: Sequelize.HasManyCountAssociationsMixin;
  // admin_permissions belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // admin_permissions belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof admin_permissions {
    return admin_permissions.init({
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
    action_parameters: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    properties: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    conditions: {
      type: DataTypes.JSONB,
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
    tableName: 'admin_permissions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "admin_permissions_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "admin_permissions_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "admin_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "admin_permissions_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "idx_admin_permissions_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_admin_permissions_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
