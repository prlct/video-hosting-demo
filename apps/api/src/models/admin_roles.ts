import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_permissions_role_lnk, admin_permissions_role_lnkId } from './admin_permissions_role_lnk';
import type { admin_users, admin_usersId } from './admin_users';
import type { admin_users_roles_lnk, admin_users_roles_lnkId } from './admin_users_roles_lnk';

export interface admin_rolesAttributes {
  id: number;
  document_id?: string;
  name?: string;
  code?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type admin_rolesPk = "id";
export type admin_rolesId = admin_roles[admin_rolesPk];
export type admin_rolesOptionalAttributes = "id" | "document_id" | "name" | "code" | "description" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type admin_rolesCreationAttributes = Optional<admin_rolesAttributes, admin_rolesOptionalAttributes>;

export class admin_roles extends Model<admin_rolesAttributes, admin_rolesCreationAttributes> implements admin_rolesAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  code?: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // admin_roles hasMany admin_permissions_role_lnk via role_id
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
  // admin_roles hasMany admin_users_roles_lnk via role_id
  admin_users_roles_lnks!: admin_users_roles_lnk[];
  getAdmin_users_roles_lnks!: Sequelize.HasManyGetAssociationsMixin<admin_users_roles_lnk>;
  setAdmin_users_roles_lnks!: Sequelize.HasManySetAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  addAdmin_users_roles_lnk!: Sequelize.HasManyAddAssociationMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  addAdmin_users_roles_lnks!: Sequelize.HasManyAddAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  createAdmin_users_roles_lnk!: Sequelize.HasManyCreateAssociationMixin<admin_users_roles_lnk>;
  removeAdmin_users_roles_lnk!: Sequelize.HasManyRemoveAssociationMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  removeAdmin_users_roles_lnks!: Sequelize.HasManyRemoveAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  hasAdmin_users_roles_lnk!: Sequelize.HasManyHasAssociationMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  hasAdmin_users_roles_lnks!: Sequelize.HasManyHasAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  countAdmin_users_roles_lnks!: Sequelize.HasManyCountAssociationsMixin;
  // admin_roles belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // admin_roles belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof admin_roles {
    return admin_roles.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
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
    tableName: 'admin_roles',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "admin_roles_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "admin_roles_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "admin_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "admin_roles_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "idx_admin_roles_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_admin_roles_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
