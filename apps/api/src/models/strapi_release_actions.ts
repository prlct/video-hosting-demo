import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId } from './strapi_release_actions_release_lnk';

export interface strapi_release_actionsAttributes {
  id: number;
  document_id?: string;
  type?: string;
  content_type?: string;
  entry_document_id?: string;
  locale?: string;
  is_entry_valid?: boolean;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
}

export type strapi_release_actionsPk = "id";
export type strapi_release_actionsId = strapi_release_actions[strapi_release_actionsPk];
export type strapi_release_actionsOptionalAttributes = "id" | "document_id" | "type" | "content_type" | "entry_document_id" | "locale" | "is_entry_valid" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id";
export type strapi_release_actionsCreationAttributes = Optional<strapi_release_actionsAttributes, strapi_release_actionsOptionalAttributes>;

export class strapi_release_actions extends Model<strapi_release_actionsAttributes, strapi_release_actionsCreationAttributes> implements strapi_release_actionsAttributes {
  id!: number;
  document_id?: string;
  type?: string;
  content_type?: string;
  entry_document_id?: string;
  locale?: string;
  is_entry_valid?: boolean;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;

  // strapi_release_actions belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_release_actions belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_release_actions hasMany strapi_release_actions_release_lnk via release_action_id
  strapi_release_actions_release_lnks!: strapi_release_actions_release_lnk[];
  getStrapi_release_actions_release_lnks!: Sequelize.HasManyGetAssociationsMixin<strapi_release_actions_release_lnk>;
  setStrapi_release_actions_release_lnks!: Sequelize.HasManySetAssociationsMixin<strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId>;
  addStrapi_release_actions_release_lnk!: Sequelize.HasManyAddAssociationMixin<strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId>;
  addStrapi_release_actions_release_lnks!: Sequelize.HasManyAddAssociationsMixin<strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId>;
  createStrapi_release_actions_release_lnk!: Sequelize.HasManyCreateAssociationMixin<strapi_release_actions_release_lnk>;
  removeStrapi_release_actions_release_lnk!: Sequelize.HasManyRemoveAssociationMixin<strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId>;
  removeStrapi_release_actions_release_lnks!: Sequelize.HasManyRemoveAssociationsMixin<strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId>;
  hasStrapi_release_actions_release_lnk!: Sequelize.HasManyHasAssociationMixin<strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId>;
  hasStrapi_release_actions_release_lnks!: Sequelize.HasManyHasAssociationsMixin<strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId>;
  countStrapi_release_actions_release_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_release_actions {
    return strapi_release_actions.init({
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
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    content_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    entry_document_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    locale: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_entry_valid: {
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
    }
  }, {
    sequelize,
    tableName: 'strapi_release_actions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_strapi_release_actions_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_strapi_release_actions_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "strapi_release_actions_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "strapi_release_actions_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "strapi_release_actions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_release_actions_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
