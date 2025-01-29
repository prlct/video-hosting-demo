import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { up_permissions, up_permissionsId } from './up_permissions';
import type { up_roles, up_rolesId } from './up_roles';

export interface up_permissions_role_lnkAttributes {
  id: number;
  permission_id?: number;
  role_id?: number;
  permission_ord?: number;
}

export type up_permissions_role_lnkPk = "id";
export type up_permissions_role_lnkId = up_permissions_role_lnk[up_permissions_role_lnkPk];
export type up_permissions_role_lnkOptionalAttributes = "id" | "permission_id" | "role_id" | "permission_ord";
export type up_permissions_role_lnkCreationAttributes = Optional<up_permissions_role_lnkAttributes, up_permissions_role_lnkOptionalAttributes>;

export class up_permissions_role_lnk extends Model<up_permissions_role_lnkAttributes, up_permissions_role_lnkCreationAttributes> implements up_permissions_role_lnkAttributes {
  id!: number;
  permission_id?: number;
  role_id?: number;
  permission_ord?: number;

  // up_permissions_role_lnk belongsTo up_permissions via permission_id
  permission!: up_permissions;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<up_permissions>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<up_permissions, up_permissionsId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<up_permissions>;
  // up_permissions_role_lnk belongsTo up_roles via role_id
  role!: up_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<up_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<up_roles, up_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<up_roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof up_permissions_role_lnk {
    return up_permissions_role_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'up_permissions',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'up_roles',
        key: 'id'
      }
    },
    permission_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'up_permissions_role_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_up_permissions_role_lnk_fk",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "idx_up_permissions_role_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "up_permissions_role_lnk_fk",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "up_permissions_role_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "up_permissions_role_lnk_oifk",
        fields: [
          { name: "permission_ord" },
        ]
      },
      {
        name: "up_permissions_role_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "up_permissions_role_lnk_uq",
        unique: true,
        fields: [
          { name: "permission_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
