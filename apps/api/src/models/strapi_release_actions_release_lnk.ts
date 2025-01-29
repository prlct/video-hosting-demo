import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { strapi_release_actions, strapi_release_actionsId } from './strapi_release_actions';
import type { strapi_releases, strapi_releasesId } from './strapi_releases';

export interface strapi_release_actions_release_lnkAttributes {
  id: number;
  release_action_id?: number;
  release_id?: number;
  release_action_ord?: number;
}

export type strapi_release_actions_release_lnkPk = "id";
export type strapi_release_actions_release_lnkId = strapi_release_actions_release_lnk[strapi_release_actions_release_lnkPk];
export type strapi_release_actions_release_lnkOptionalAttributes = "id" | "release_action_id" | "release_id" | "release_action_ord";
export type strapi_release_actions_release_lnkCreationAttributes = Optional<strapi_release_actions_release_lnkAttributes, strapi_release_actions_release_lnkOptionalAttributes>;

export class strapi_release_actions_release_lnk extends Model<strapi_release_actions_release_lnkAttributes, strapi_release_actions_release_lnkCreationAttributes> implements strapi_release_actions_release_lnkAttributes {
  id!: number;
  release_action_id?: number;
  release_id?: number;
  release_action_ord?: number;

  // strapi_release_actions_release_lnk belongsTo strapi_release_actions via release_action_id
  release_action!: strapi_release_actions;
  getRelease_action!: Sequelize.BelongsToGetAssociationMixin<strapi_release_actions>;
  setRelease_action!: Sequelize.BelongsToSetAssociationMixin<strapi_release_actions, strapi_release_actionsId>;
  createRelease_action!: Sequelize.BelongsToCreateAssociationMixin<strapi_release_actions>;
  // strapi_release_actions_release_lnk belongsTo strapi_releases via release_id
  release!: strapi_releases;
  getRelease!: Sequelize.BelongsToGetAssociationMixin<strapi_releases>;
  setRelease!: Sequelize.BelongsToSetAssociationMixin<strapi_releases, strapi_releasesId>;
  createRelease!: Sequelize.BelongsToCreateAssociationMixin<strapi_releases>;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_release_actions_release_lnk {
    return strapi_release_actions_release_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    release_action_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_release_actions',
        key: 'id'
      }
    },
    release_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_releases',
        key: 'id'
      }
    },
    release_action_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_release_actions_release_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_strapi_release_actions_release_lnk_fk",
        fields: [
          { name: "release_action_id" },
        ]
      },
      {
        name: "idx_strapi_release_actions_release_lnk_ifk",
        fields: [
          { name: "release_id" },
        ]
      },
      {
        name: "strapi_release_actions_release_lnk_fk",
        fields: [
          { name: "release_action_id" },
        ]
      },
      {
        name: "strapi_release_actions_release_lnk_ifk",
        fields: [
          { name: "release_id" },
        ]
      },
      {
        name: "strapi_release_actions_release_lnk_oifk",
        fields: [
          { name: "release_action_ord" },
        ]
      },
      {
        name: "strapi_release_actions_release_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_release_actions_release_lnk_uq",
        unique: true,
        fields: [
          { name: "release_action_id" },
          { name: "release_id" },
        ]
      },
    ]
  });
  }
}
