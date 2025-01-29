import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_permissions, admin_permissionsId } from './admin_permissions';
import type { admin_roles, admin_rolesId } from './admin_roles';

export interface admin_permissions_role_lnkAttributes {
  id: number;
  permission_id?: number;
  role_id?: number;
  permission_ord?: number;
}

export type admin_permissions_role_lnkPk = "id";
export type admin_permissions_role_lnkId = admin_permissions_role_lnk[admin_permissions_role_lnkPk];
export type admin_permissions_role_lnkOptionalAttributes = "id" | "permission_id" | "role_id" | "permission_ord";
export type admin_permissions_role_lnkCreationAttributes = Optional<admin_permissions_role_lnkAttributes, admin_permissions_role_lnkOptionalAttributes>;

export class admin_permissions_role_lnk extends Model<admin_permissions_role_lnkAttributes, admin_permissions_role_lnkCreationAttributes> implements admin_permissions_role_lnkAttributes {
  id!: number;
  permission_id?: number;
  role_id?: number;
  permission_ord?: number;

  // admin_permissions_role_lnk belongsTo admin_permissions via permission_id
  permission!: admin_permissions;
  getPermission!: Sequelize.BelongsToGetAssociationMixin<admin_permissions>;
  setPermission!: Sequelize.BelongsToSetAssociationMixin<admin_permissions, admin_permissionsId>;
  createPermission!: Sequelize.BelongsToCreateAssociationMixin<admin_permissions>;
  // admin_permissions_role_lnk belongsTo admin_roles via role_id
  role!: admin_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<admin_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<admin_roles, admin_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<admin_roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof admin_permissions_role_lnk {
    return admin_permissions_role_lnk.init({
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
        model: 'admin_permissions',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_roles',
        key: 'id'
      }
    },
    permission_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_permissions_role_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_permissions_role_lnk_fk",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "admin_permissions_role_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "admin_permissions_role_lnk_oifk",
        fields: [
          { name: "permission_ord" },
        ]
      },
      {
        name: "admin_permissions_role_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "admin_permissions_role_lnk_uq",
        unique: true,
        fields: [
          { name: "permission_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "idx_admin_permissions_role_lnk_fk",
        fields: [
          { name: "permission_id" },
        ]
      },
      {
        name: "idx_admin_permissions_role_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
