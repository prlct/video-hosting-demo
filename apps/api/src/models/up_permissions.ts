import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { up_permissions_role_lnk, up_permissions_role_lnkId } from './up_permissions_role_lnk';

export interface up_permissionsAttributes {
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

export type up_permissionsPk = "id";
export type up_permissionsId = up_permissions[up_permissionsPk];
export type up_permissionsOptionalAttributes = "id" | "document_id" | "action" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type up_permissionsCreationAttributes = Optional<up_permissionsAttributes, up_permissionsOptionalAttributes>;

export class up_permissions extends Model<up_permissionsAttributes, up_permissionsCreationAttributes> implements up_permissionsAttributes {
  id!: number;
  document_id?: string;
  action?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // up_permissions belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // up_permissions belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // up_permissions hasMany up_permissions_role_lnk via permission_id
  up_permissions_role_lnks!: up_permissions_role_lnk[];
  getUp_permissions_role_lnks!: Sequelize.HasManyGetAssociationsMixin<up_permissions_role_lnk>;
  setUp_permissions_role_lnks!: Sequelize.HasManySetAssociationsMixin<up_permissions_role_lnk, up_permissions_role_lnkId>;
  addUp_permissions_role_lnk!: Sequelize.HasManyAddAssociationMixin<up_permissions_role_lnk, up_permissions_role_lnkId>;
  addUp_permissions_role_lnks!: Sequelize.HasManyAddAssociationsMixin<up_permissions_role_lnk, up_permissions_role_lnkId>;
  createUp_permissions_role_lnk!: Sequelize.HasManyCreateAssociationMixin<up_permissions_role_lnk>;
  removeUp_permissions_role_lnk!: Sequelize.HasManyRemoveAssociationMixin<up_permissions_role_lnk, up_permissions_role_lnkId>;
  removeUp_permissions_role_lnks!: Sequelize.HasManyRemoveAssociationsMixin<up_permissions_role_lnk, up_permissions_role_lnkId>;
  hasUp_permissions_role_lnk!: Sequelize.HasManyHasAssociationMixin<up_permissions_role_lnk, up_permissions_role_lnkId>;
  hasUp_permissions_role_lnks!: Sequelize.HasManyHasAssociationsMixin<up_permissions_role_lnk, up_permissions_role_lnkId>;
  countUp_permissions_role_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof up_permissions {
    return up_permissions.init({
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
    tableName: 'up_permissions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_up_permissions_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_up_permissions_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "up_permissions_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "up_permissions_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "up_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "up_permissions_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
