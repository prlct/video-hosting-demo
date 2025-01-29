import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { strapi_transfer_token_permissions, strapi_transfer_token_permissionsId } from './strapi_transfer_token_permissions';
import type { strapi_transfer_tokens, strapi_transfer_tokensId } from './strapi_transfer_tokens';

export interface strapi_transfer_token_permissions_token_lnkAttributes {
  id: number;
  transfer_token_permission_id?: number;
  transfer_token_id?: number;
  transfer_token_permission_ord?: number;
}

export type strapi_transfer_token_permissions_token_lnkPk = "id";
export type strapi_transfer_token_permissions_token_lnkId = strapi_transfer_token_permissions_token_lnk[strapi_transfer_token_permissions_token_lnkPk];
export type strapi_transfer_token_permissions_token_lnkOptionalAttributes = "id" | "transfer_token_permission_id" | "transfer_token_id" | "transfer_token_permission_ord";
export type strapi_transfer_token_permissions_token_lnkCreationAttributes = Optional<strapi_transfer_token_permissions_token_lnkAttributes, strapi_transfer_token_permissions_token_lnkOptionalAttributes>;

export class strapi_transfer_token_permissions_token_lnk extends Model<strapi_transfer_token_permissions_token_lnkAttributes, strapi_transfer_token_permissions_token_lnkCreationAttributes> implements strapi_transfer_token_permissions_token_lnkAttributes {
  id!: number;
  transfer_token_permission_id?: number;
  transfer_token_id?: number;
  transfer_token_permission_ord?: number;

  // strapi_transfer_token_permissions_token_lnk belongsTo strapi_transfer_token_permissions via transfer_token_permission_id
  transfer_token_permission!: strapi_transfer_token_permissions;
  getTransfer_token_permission!: Sequelize.BelongsToGetAssociationMixin<strapi_transfer_token_permissions>;
  setTransfer_token_permission!: Sequelize.BelongsToSetAssociationMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  createTransfer_token_permission!: Sequelize.BelongsToCreateAssociationMixin<strapi_transfer_token_permissions>;
  // strapi_transfer_token_permissions_token_lnk belongsTo strapi_transfer_tokens via transfer_token_id
  transfer_token!: strapi_transfer_tokens;
  getTransfer_token!: Sequelize.BelongsToGetAssociationMixin<strapi_transfer_tokens>;
  setTransfer_token!: Sequelize.BelongsToSetAssociationMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  createTransfer_token!: Sequelize.BelongsToCreateAssociationMixin<strapi_transfer_tokens>;

  static initModel(sequelize: Sequelize.Sequelize): typeof strapi_transfer_token_permissions_token_lnk {
    return strapi_transfer_token_permissions_token_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    transfer_token_permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_transfer_token_permissions',
        key: 'id'
      }
    },
    transfer_token_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'strapi_transfer_tokens',
        key: 'id'
      }
    },
    transfer_token_permission_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'strapi_transfer_token_permissions_token_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_strapi_transfer_token_permissions_token_lnk_fk",
        fields: [
          { name: "transfer_token_permission_id" },
        ]
      },
      {
        name: "idx_strapi_transfer_token_permissions_token_lnk_ifk",
        fields: [
          { name: "transfer_token_id" },
        ]
      },
      {
        name: "strapi_transfer_token_permissions_token_lnk_fk",
        fields: [
          { name: "transfer_token_permission_id" },
        ]
      },
      {
        name: "strapi_transfer_token_permissions_token_lnk_ifk",
        fields: [
          { name: "transfer_token_id" },
        ]
      },
      {
        name: "strapi_transfer_token_permissions_token_lnk_oifk",
        fields: [
          { name: "transfer_token_permission_ord" },
        ]
      },
      {
        name: "strapi_transfer_token_permissions_token_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "strapi_transfer_token_permissions_token_lnk_uq",
        unique: true,
        fields: [
          { name: "transfer_token_permission_id" },
          { name: "transfer_token_id" },
        ]
      },
    ]
  });
  }
}
