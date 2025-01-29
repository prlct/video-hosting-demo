import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { globals_cmps, globals_cmpsId } from './globals_cmps';

export interface globalsAttributes {
  id: number;
  document_id?: string;
  site_name?: string;
  site_description?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type globalsPk = "id";
export type globalsId = globals[globalsPk];
export type globalsOptionalAttributes = "id" | "document_id" | "site_name" | "site_description" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type globalsCreationAttributes = Optional<globalsAttributes, globalsOptionalAttributes>;

export class globals extends Model<globalsAttributes, globalsCreationAttributes> implements globalsAttributes {
  id!: number;
  document_id?: string;
  site_name?: string;
  site_description?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // globals belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // globals belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // globals hasMany globals_cmps via entity_id
  globals_cmps!: globals_cmps[];
  getGlobals_cmps!: Sequelize.HasManyGetAssociationsMixin<globals_cmps>;
  setGlobals_cmps!: Sequelize.HasManySetAssociationsMixin<globals_cmps, globals_cmpsId>;
  addGlobals_cmp!: Sequelize.HasManyAddAssociationMixin<globals_cmps, globals_cmpsId>;
  addGlobals_cmps!: Sequelize.HasManyAddAssociationsMixin<globals_cmps, globals_cmpsId>;
  createGlobals_cmp!: Sequelize.HasManyCreateAssociationMixin<globals_cmps>;
  removeGlobals_cmp!: Sequelize.HasManyRemoveAssociationMixin<globals_cmps, globals_cmpsId>;
  removeGlobals_cmps!: Sequelize.HasManyRemoveAssociationsMixin<globals_cmps, globals_cmpsId>;
  hasGlobals_cmp!: Sequelize.HasManyHasAssociationMixin<globals_cmps, globals_cmpsId>;
  hasGlobals_cmps!: Sequelize.HasManyHasAssociationsMixin<globals_cmps, globals_cmpsId>;
  countGlobals_cmps!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof globals {
    return globals.init({
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
    site_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    site_description: {
      type: DataTypes.TEXT,
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
    tableName: 'globals',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "globals_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "globals_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "globals_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "globals_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "idx_globals_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_globals_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
