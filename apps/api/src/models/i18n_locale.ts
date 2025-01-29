import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';

export interface i18n_localeAttributes {
  id: number;
  document_id?: string;
  name?: string;
  code?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type i18n_localePk = "id";
export type i18n_localeId = i18n_locale[i18n_localePk];
export type i18n_localeOptionalAttributes = "id" | "document_id" | "name" | "code" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type i18n_localeCreationAttributes = Optional<i18n_localeAttributes, i18n_localeOptionalAttributes>;

export class i18n_locale extends Model<i18n_localeAttributes, i18n_localeCreationAttributes> implements i18n_localeAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  code?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // i18n_locale belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // i18n_locale belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof i18n_locale {
    return i18n_locale.init({
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
    tableName: 'i18n_locale',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "i18n_locale_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "i18n_locale_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "i18n_locale_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "i18n_locale_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "idx_i18n_locale_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_i18n_locale_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
