import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId } from './strapi_transfer_token_permissions_token_lnk';

export interface strapi_transfer_tokensAttributes {
  id: number;
  document_id?: string;
  name?: string;
  description?: string;
  access_key?: string;
  last_used_at?: Date;
  expires_at?: Date;
  lifespan?: number;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type strapi_transfer_tokensPk = "id";
export type strapi_transfer_tokensId = strapi_transfer_tokens[strapi_transfer_tokensPk];
export type strapi_transfer_tokensOptionalAttributes = "id" | "document_id" | "name" | "description" | "access_key" | "last_used_at" | "expires_at" | "lifespan" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type strapi_transfer_tokensCreationAttributes = Optional<strapi_transfer_tokensAttributes, strapi_transfer_tokensOptionalAttributes>;

export class strapi_transfer_tokens extends Model<strapi_transfer_tokensAttributes, strapi_transfer_tokensCreationAttributes> implements strapi_transfer_tokensAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  description?: string;
  access_key?: string;
  last_used_at?: Date;
  expires_at?: Date;
  lifespan?: number;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // strapi_transfer_tokens belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_transfer_tokens belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_transfer_tokens hasMany strapi_transfer_token_permissions_token_lnk via transfer_token_id
  strapi_transfer_token_permissions_token_lnks!: strapi_transfer_token_permissions_token_lnk[];
  getStrapi_transfer_token_permissions_token_lnks!: Sequelize.HasManyGetAssociationsMixin<strapi_transfer_token_permissions_token_lnk>;
  setStrapi_transfer_token_permissions_token_lnks!: Sequelize.HasManySetAssociationsMixin<strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId>;
  addStrapi_transfer_token_permissions_token_lnk!: Sequelize.HasManyAddAssociationMixin<strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId>;
  addStrapi_transfer_token_permissions_token_lnks!: Sequelize.HasManyAddAssociationsMixin<strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId>;
  createStrapi_transfer_token_permissions_token_lnk!: Sequelize.HasManyCreateAssociationMixin<strapi_transfer_token_permissions_token_lnk>;
  removeStrapi_transfer_token_permissions_token_lnk!: Sequelize.HasManyRemoveAssociationMixin<strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId>;
  removeStrapi_transfer_token_permissions_token_lnks!: Sequelize.HasManyRemoveAssociationsMixin<strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId>;
  hasStrapi_transfer_token_permissions_token_lnk!: Sequelize.HasManyHasAssociationMixin<strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId>;
  hasStrapi_transfer_token_permissions_token_lnks!: Sequelize.HasManyHasAssociationsMixin<strapi_transfer_token_permissions_token_lnk, strapi_transfer_token_permissions_token_lnkId>;
  countStrapi_transfer_token_permissions_token_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_transfer_tokens {
    return strapi_transfer_tokens.init({
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
    access_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    last_used_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expires_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    lifespan: {
      type: DataTypes.BIGINT,
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
    tableName: 'strapi_transfer_tokens',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_strapi_transfer_tokens_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_strapi_transfer_tokens_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "strapi_transfer_tokens_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "strapi_transfer_tokens_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "strapi_transfer_tokens_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_transfer_tokens_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
