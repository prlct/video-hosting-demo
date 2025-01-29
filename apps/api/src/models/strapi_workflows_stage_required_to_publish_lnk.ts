import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { strapi_workflows, strapi_workflowsId } from './strapi_workflows';
import type { strapi_workflows_stages, strapi_workflows_stagesId } from './strapi_workflows_stages';

export interface strapi_workflows_stage_required_to_publish_lnkAttributes {
  id: number;
  workflow_id?: number;
  workflow_stage_id?: number;
}

export type strapi_workflows_stage_required_to_publish_lnkPk = "id";
export type strapi_workflows_stage_required_to_publish_lnkId = strapi_workflows_stage_required_to_publish_lnk[strapi_workflows_stage_required_to_publish_lnkPk];
export type strapi_workflows_stage_required_to_publish_lnkOptionalAttributes = "id" | "workflow_id" | "workflow_stage_id";
export type strapi_workflows_stage_required_to_publish_lnkCreationAttributes = Optional<strapi_workflows_stage_required_to_publish_lnkAttributes, strapi_workflows_stage_required_to_publish_lnkOptionalAttributes>;

export class strapi_workflows_stage_required_to_publish_lnk extends Model<strapi_workflows_stage_required_to_publish_lnkAttributes, strapi_workflows_stage_required_to_publish_lnkCreationAttributes> implements strapi_workflows_stage_required_to_publish_lnkAttributes {
  id!: number;
  workflow_id?: number;
  workflow_stage_id?: number;

  // strapi_workflows_stage_required_to_publish_lnk belongsTo strapi_workflows via workflow_id
  workflow!: strapi_workflows;
  getWorkflow!: Sequelize.BelongsToGetAssociationMixin<strapi_workflows>;
  setWorkflow!: Sequelize.BelongsToSetAssociationMixin<strapi_workflows, strapi_workflowsId>;
  createWorkflow!: Sequelize.BelongsToCreateAssociationMixin<strapi_workflows>;
  // strapi_workflows_stage_required_to_publish_lnk belongsTo strapi_workflows_stages via workflow_stage_id
  workflow_stage!: strapi_workflows_stages;
  getWorkflow_stage!: Sequelize.BelongsToGetAssociationMixin<strapi_workflows_stages>;
  setWorkflow_stage!: Sequelize.BelongsToSetAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  createWorkflow_stage!: Sequelize.BelongsToCreateAssociationMixin<strapi_workflows_stages>;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_workflows_stage_required_to_publish_lnk {
    return strapi_workflows_stage_required_to_publish_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    workflow_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_workflows',
        key: 'id'
      }
    },
    workflow_stage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_workflows_stages',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'strapi_workflows_stage_required_to_publish_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_strapi_workflows_stage_required_to_publish_lnk_fk",
        fields: [
          { name: "workflow_id" },
        ]
      },
      {
        name: "idx_strapi_workflows_stage_required_to_publish_lnk_ifk",
        fields: [
          { name: "workflow_stage_id" },
        ]
      },
      {
        name: "strapi_workflows_stage_required_to_publish_lnk_fk",
        fields: [
          { name: "workflow_id" },
        ]
      },
      {
        name: "strapi_workflows_stage_required_to_publish_lnk_ifk",
        fields: [
          { name: "workflow_stage_id" },
        ]
      },
      {
        name: "strapi_workflows_stage_required_to_publish_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_workflows_stage_required_to_publish_lnk_uq",
        unique: true,
        fields: [
          { name: "workflow_id" },
          { name: "workflow_stage_id" },
        ]
      },
    ]
  });
  }
}
