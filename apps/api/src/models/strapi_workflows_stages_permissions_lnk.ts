import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_permissions, admin_permissionsId } from './admin_permissions';
import type { strapi_workflows_stages, strapi_workflows_stagesId } from './strapi_workflows_stages';

export interface strapi_workflows_stages_permissions_lnkAttributes {
  id: number;
  workflow_stage_id?: number;
  permission_id?: number;
  permission_ord?: number;
}

export type strapi_workflows_stages_permissions_lnkPk = "id";
export type strapi_workflows_stages_permissions_lnkId = strapi_workflows_stages_permissions_lnk[strapi_workflows_stages_permissions_lnkPk];
export type strapi_workflows_stages_permissions_lnkOptionalAttributes = "id" | "workflow_stage_id" | "permission_id" | "permission_ord";
export type strapi_workflows_stages_permissions_lnkCreationAttributes = Optional<strapi_workflows_stages_permissions_lnkAttributes, strapi_workflows_stages_permissions_lnkOptionalAttributes>;

export class strapi_workflows_stages_permissions_lnk extends Model<strapi_workflows_stages_permissions_lnkAttributes, strapi_workflows_stages_permissions_lnkCreationAttributes> implements strapi_workflows_stages_permissions_lnkAttributes {
  id!: number;
  workflow_stage_id?: number;
  permission_id?: number;
  permission_ord?: number;

  // strapi_workflows_stages_permissions_lnk belongsTo admin_permissions via permission_id
  permission!: admin_permissions;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<admin_permissions>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<admin_permissions, admin_permissionsId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<admin_permissions>;
  // strapi_workflows_stages_permissions_lnk belongsTo strapi_workflows_stages via workflow_stage_id
  workflow_stage!: strapi_workflows_stages;
  getWorkflow_stage!: Sequelize.BelongsToGetAssociationMixin<strapi_workflows_stages>;
  setWorkflow_stage!: Sequelize.BelongsToSetAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  createWorkflow_stage!: Sequelize.BelongsToCreateAssociationMixin<strapi_workflows_stages>;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_workflows_stages_permissions_lnk {
    return strapi_workflows_stages_permissions_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    workflow_stage_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_workflows_stages',
        key: 'id'
      }
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_permissions',
        key: 'id'
      }
    },
    permission_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_workflows_stages_permissions_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_strapi_workflows_stages_permissions_lnk_fk",
        fields: [
          { name: "workflow_stage_id" },
        ]
      },
      {
        name: "idx_strapi_workflows_stages_permissions_lnk_ifk",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "strapi_workflows_stages_permissions_lnk_fk",
        fields: [
          { name: "workflow_stage_id" },
        ]
      },
      {
        name: "strapi_workflows_stages_permissions_lnk_ifk",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "strapi_workflows_stages_permissions_lnk_ofk",
        fields: [
          { name: "permission_ord" },
        ]
      },
      {
        name: "strapi_workflows_stages_permissions_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_workflows_stages_permissions_lnk_uq",
        unique: true,
        fields: [
          { name: "workflow_stage_id" },
          { name: "permission_id" },
        ]
      },
    ]
  });
  }
}
