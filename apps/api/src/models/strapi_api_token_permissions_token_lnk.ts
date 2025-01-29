import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { strapi_api_token_permissions, strapi_api_token_permissionsId } from './strapi_api_token_permissions';
import type { strapi_api_tokens, strapi_api_tokensId } from './strapi_api_tokens';

export interface strapi_api_token_permissions_token_lnkAttributes {
  id: number;
  api_token_permission_id?: number;
  api_token_id?: number;
  api_token_permission_ord?: number;
}

export type strapi_api_token_permissions_token_lnkPk = "id";
export type strapi_api_token_permissions_token_lnkId = strapi_api_token_permissions_token_lnk[strapi_api_token_permissions_token_lnkPk];
export type strapi_api_token_permissions_token_lnkOptionalAttributes = "id" | "api_token_permission_id" | "api_token_id" | "api_token_permission_ord";
export type strapi_api_token_permissions_token_lnkCreationAttributes = Optional<strapi_api_token_permissions_token_lnkAttributes, strapi_api_token_permissions_token_lnkOptionalAttributes>;

export class strapi_api_token_permissions_token_lnk extends Model<strapi_api_token_permissions_token_lnkAttributes, strapi_api_token_permissions_token_lnkCreationAttributes> implements strapi_api_token_permissions_token_lnkAttributes {
  id!: number;
  api_token_permission_id?: number;
  api_token_id?: number;
  api_token_permission_ord?: number;

  // strapi_api_token_permissions_token_lnk belongsTo strapi_api_token_permissions via api_token_permission_id
  api_token_permission!: strapi_api_token_permissions;
  getApi_token_permission!: Sequelize.BelongsToGetAssociationMixin<strapi_api_token_permissions>;
  setApi_token_permission!: Sequelize.BelongsToSetAssociationMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  createApi_token_permission!: Sequelize.BelongsToCreateAssociationMixin<strapi_api_token_permissions>;
  // strapi_api_token_permissions_token_lnk belongsTo strapi_api_tokens via api_token_id
  api_token!: strapi_api_tokens;
  getApi_token!: Sequelize.BelongsToGetAssociationMixin<strapi_api_tokens>;
  setApi_token!: Sequelize.BelongsToSetAssociationMixin<strapi_api_tokens, strapi_api_tokensId>;
  createApi_token!: Sequelize.BelongsToCreateAssociationMixin<strapi_api_tokens>;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_api_token_permissions_token_lnk {
    return strapi_api_token_permissions_token_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    api_token_permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_api_token_permissions',
        key: 'id'
      }
    },
    api_token_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_api_tokens',
        key: 'id'
      }
    },
    api_token_permission_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_api_token_permissions_token_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_strapi_api_token_permissions_token_lnk_fk",
        fields: [
          { name: "api_token_permission_id" },
        ]
      },
      {
        name: "idx_strapi_api_token_permissions_token_lnk_ifk",
        fields: [
          { name: "api_token_id" },
        ]
      },
      {
        name: "strapi_api_token_permissions_token_lnk_fk",
        fields: [
          { name: "api_token_permission_id" },
        ]
      },
      {
        name: "strapi_api_token_permissions_token_lnk_ifk",
        fields: [
          { name: "api_token_id" },
        ]
      },
      {
        name: "strapi_api_token_permissions_token_lnk_oifk",
        fields: [
          { name: "api_token_permission_ord" },
        ]
      },
      {
        name: "strapi_api_token_permissions_token_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_api_token_permissions_token_lnk_uq",
        unique: true,
        fields: [
          { name: "api_token_permission_id" },
          { name: "api_token_id" },
        ]
      },
    ]
  });
  }
}
