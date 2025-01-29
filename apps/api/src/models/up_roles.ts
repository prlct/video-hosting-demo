import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { up_permissions_role_lnk, up_permissions_role_lnkId } from './up_permissions_role_lnk';
import type { users_role_lnk, users_role_lnkId } from './users_role_lnk';

export interface up_rolesAttributes {
  id: number;
  document_id?: string;
  name?: string;
  description?: string;
  type?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type up_rolesPk = "id";
export type up_rolesId = up_roles[up_rolesPk];
export type up_rolesOptionalAttributes = "id" | "document_id" | "name" | "description" | "type" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type up_rolesCreationAttributes = Optional<up_rolesAttributes, up_rolesOptionalAttributes>;

export class up_roles extends Model<up_rolesAttributes, up_rolesCreationAttributes> implements up_rolesAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  description?: string;
  type?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // up_roles belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // up_roles belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // up_roles hasMany up_permissions_role_lnk via role_id
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
  // up_roles hasMany users_role_lnk via role_id
  users_role_lnks!: users_role_lnk[];
  getUsers_role_lnks!: Sequelize.HasManyGetAssociationsMixin<users_role_lnk>;
  setUsers_role_lnks!: Sequelize.HasManySetAssociationsMixin<users_role_lnk, users_role_lnkId>;
  addUsers_role_lnk!: Sequelize.HasManyAddAssociationMixin<users_role_lnk, users_role_lnkId>;
  addUsers_role_lnks!: Sequelize.HasManyAddAssociationsMixin<users_role_lnk, users_role_lnkId>;
  createUsers_role_lnk!: Sequelize.HasManyCreateAssociationMixin<users_role_lnk>;
  removeUsers_role_lnk!: Sequelize.HasManyRemoveAssociationMixin<users_role_lnk, users_role_lnkId>;
  removeUsers_role_lnks!: Sequelize.HasManyRemoveAssociationsMixin<users_role_lnk, users_role_lnkId>;
  hasUsers_role_lnk!: Sequelize.HasManyHasAssociationMixin<users_role_lnk, users_role_lnkId>;
  hasUsers_role_lnks!: Sequelize.HasManyHasAssociationsMixin<users_role_lnk, users_role_lnkId>;
  countUsers_role_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof up_roles {
    return up_roles.init({
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
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    type: {
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
    tableName: 'up_roles',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_up_roles_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_up_roles_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "up_roles_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "up_roles_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "up_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "up_roles_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
