import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId } from './strapi_workflows_stage_required_to_publish_lnk';
import type { strapi_workflows_stages_permissions_lnk, strapi_workflows_stages_permissions_lnkId } from './strapi_workflows_stages_permissions_lnk';
import type { strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId } from './strapi_workflows_stages_workflow_lnk';

export interface strapi_workflows_stagesAttributes {
  id: number;
  document_id?: string;
  name?: string;
  color?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type strapi_workflows_stagesPk = "id";
export type strapi_workflows_stagesId = strapi_workflows_stages[strapi_workflows_stagesPk];
export type strapi_workflows_stagesOptionalAttributes = "id" | "document_id" | "name" | "color" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type strapi_workflows_stagesCreationAttributes = Optional<strapi_workflows_stagesAttributes, strapi_workflows_stagesOptionalAttributes>;

export class strapi_workflows_stages extends Model<strapi_workflows_stagesAttributes, strapi_workflows_stagesCreationAttributes> implements strapi_workflows_stagesAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  color?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // strapi_workflows_stages belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_workflows_stages belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // strapi_workflows_stages hasMany strapi_workflows_stage_required_to_publish_lnk via workflow_stage_id
  strapi_workflows_stage_required_to_publish_lnks!: strapi_workflows_stage_required_to_publish_lnk[];
  getStrapi_workflows_stage_required_to_publish_lnks!: Sequelize.HasManyGetAssociationsMixin<strapi_workflows_stage_required_to_publish_lnk>;
  setStrapi_workflows_stage_required_to_publish_lnks!: Sequelize.HasManySetAssociationsMixin<strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId>;
  addStrapi_workflows_stage_required_to_publish_lnk!: Sequelize.HasManyAddAssociationMixin<strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId>;
  addStrapi_workflows_stage_required_to_publish_lnks!: Sequelize.HasManyAddAssociationsMixin<strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId>;
  createStrapi_workflows_stage_required_to_publish_lnk!: Sequelize.HasManyCreateAssociationMixin<strapi_workflows_stage_required_to_publish_lnk>;
  removeStrapi_workflows_stage_required_to_publish_lnk!: Sequelize.HasManyRemoveAssociationMixin<strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId>;
  removeStrapi_workflows_stage_required_to_publish_lnks!: Sequelize.HasManyRemoveAssociationsMixin<strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId>;
  hasStrapi_workflows_stage_required_to_publish_lnk!: Sequelize.HasManyHasAssociationMixin<strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId>;
  hasStrapi_workflows_stage_required_to_publish_lnks!: Sequelize.HasManyHasAssociationsMixin<strapi_workflows_stage_required_to_publish_lnk, strapi_workflows_stage_required_to_publish_lnkId>;
  countStrapi_workflows_stage_required_to_publish_lnks!: Sequelize.HasManyCountAssociationsMixin;
  // strapi_workflows_stages hasMany strapi_workflows_stages_permissions_lnk via workflow_stage_id
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
  // strapi_workflows_stages hasMany strapi_workflows_stages_workflow_lnk via workflow_stage_id
  strapi_workflows_stages_workflow_lnks!: strapi_workflows_stages_workflow_lnk[];
  getStrapi_workflows_stages_workflow_lnks!: Sequelize.HasManyGetAssociationsMixin<strapi_workflows_stages_workflow_lnk>;
  setStrapi_workflows_stages_workflow_lnks!: Sequelize.HasManySetAssociationsMixin<strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId>;
  addStrapi_workflows_stages_workflow_lnk!: Sequelize.HasManyAddAssociationMixin<strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId>;
  addStrapi_workflows_stages_workflow_lnks!: Sequelize.HasManyAddAssociationsMixin<strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId>;
  createStrapi_workflows_stages_workflow_lnk!: Sequelize.HasManyCreateAssociationMixin<strapi_workflows_stages_workflow_lnk>;
  removeStrapi_workflows_stages_workflow_lnk!: Sequelize.HasManyRemoveAssociationMixin<strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId>;
  removeStrapi_workflows_stages_workflow_lnks!: Sequelize.HasManyRemoveAssociationsMixin<strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId>;
  hasStrapi_workflows_stages_workflow_lnk!: Sequelize.HasManyHasAssociationMixin<strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId>;
  hasStrapi_workflows_stages_workflow_lnks!: Sequelize.HasManyHasAssociationsMixin<strapi_workflows_stages_workflow_lnk, strapi_workflows_stages_workflow_lnkId>;
  countStrapi_workflows_stages_workflow_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_workflows_stages {
    return strapi_workflows_stages.init({
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
    color: {
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
    tableName: 'strapi_workflows_stages',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_strapi_workflows_stages_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_strapi_workflows_stages_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "strapi_workflows_stages_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "strapi_workflows_stages_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "strapi_workflows_stages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_workflows_stages_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
