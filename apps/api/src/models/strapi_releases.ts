import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { strapi_release_actions_release_lnk, strapi_release_actions_release_lnkId } from './strapi_release_actions_release_lnk';

export interface strapi_releasesAttributes {
  id: number;
  document_id?: string;
  name?: string;
  released_at?: Date;
  scheduled_at?: Date;
  timezone?: string;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type strapi_releasesPk = "id";
export type strapi_releasesId = strapi_releases[strapi_releasesPk];
export type strapi_releasesOptionalAttributes = "id" | "document_id" | "name" | "released_at" | "scheduled_at" | "timezone" | "status" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type strapi_releasesCreationAttributes = Optional<strapi_releasesAttributes, strapi_releasesOptionalAttributes>;

export class strapi_releases extends Model<strapi_releasesAttributes, strapi_releasesCreationAttributes> implements strapi_releasesAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  released_at?: Date;
  scheduled_at?: Date;
  timezone?: string;
  status?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // strapi_releases belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_releases belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_releases hasMany strapi_release_actions_release_lnk via release_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_releases {
    return strapi_releases.init({
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
    released_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scheduled_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
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
    tableName: 'strapi_releases',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_strapi_releases_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_strapi_releases_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "strapi_releases_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "strapi_releases_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "strapi_releases_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_releases_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
