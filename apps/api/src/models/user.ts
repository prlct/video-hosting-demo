import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from 'db';

import type { admin_users, admin_usersId } from './admin_users';
import type { users_role_lnk, users_role_lnkId } from './users_role_lnk';

export interface usersAttributes {
  id: number;
  document_id?: string;
  username?: string;
  email?: string;
  provider?: string;
  password?: string;
  reset_password_token?: string;
  confirmation_token?: string | null;
  confirmed?: boolean;
  blocked?: boolean;
  paid?: boolean;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
  first_name?: string;
  last_name?: string;
}

export type usersPk = "id";
export type usersId = users[usersPk];
export type usersOptionalAttributes = "id" | "document_id" | "username" | "email" | "provider" | "password" | "reset_password_token" | "confirmation_token" | "confirmed" | "blocked" | "paid" | "created_at" | "updated_at" | "deleted_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale" | "first_name" | "last_name";
export type usersCreationAttributes = Optional<usersAttributes, usersOptionalAttributes>;

export class users extends Model<usersAttributes, usersCreationAttributes> implements usersAttributes {
  id!: number;

  document_id?: string;

  username?: string;

  email?: string;

  provider?: string;

  password?: string;

  reset_password_token?: string;

  confirmation_token?: string | null;

  confirmed?: boolean;

  blocked?: boolean;

  paid?: boolean;

  created_at?: Date;

  updated_at?: Date;

  deleted_at?: Date;

  published_at?: Date;

  created_by_id?: number;

  updated_by_id?: number;

  locale?: string;

  first_name?: string;

  last_name?: string;

  // users belongsTo admin_users via created_by_id
  created_by!: admin_users;

  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;

  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;

  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  // users belongsTo admin_users via updated_by_id
  updated_by!: admin_users;

  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;

  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;

  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  // users hasMany users_role_lnk via user_id
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
}

users.init({
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
  username: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  provider: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  reset_password_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  confirmation_token: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  blocked: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  paid: {
    type: DataTypes.BOOLEAN,
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
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'users',
  schema: 'public',
  timestamps: true,
  paranoid: true,
  indexes: [
    {
      name: "idx_users_created_by_id",
      fields: [
        { name: "created_by_id" },
      ]
    },
    {
      name: "idx_users_updated_by_id",
      fields: [
        { name: "updated_by_id" },
      ]
    },
    {
      name: "users_created_by_id_fk",
      fields: [
        { name: "created_by_id" },
      ]
    },
    {
      name: "users_documents_idx",
      fields: [
        { name: "document_id" },
        { name: "locale" },
        { name: "published_at" },
      ]
    },
    {
      name: "users_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "users_updated_by_id_fk",
      fields: [
        { name: "updated_by_id" },
      ]
    },
  ]
});
