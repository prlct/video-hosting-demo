import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_roles, admin_rolesId } from './admin_roles';
import type { admin_users, admin_usersId } from './admin_users';

export interface admin_users_roles_lnkAttributes {
  id: number;
  user_id?: number;
  role_id?: number;
  role_ord?: number;
  user_ord?: number;
}

export type admin_users_roles_lnkPk = "id";
export type admin_users_roles_lnkId = admin_users_roles_lnk[admin_users_roles_lnkPk];
export type admin_users_roles_lnkOptionalAttributes = "id" | "user_id" | "role_id" | "role_ord" | "user_ord";
export type admin_users_roles_lnkCreationAttributes = Optional<admin_users_roles_lnkAttributes, admin_users_roles_lnkOptionalAttributes>;

export class admin_users_roles_lnk extends Model<admin_users_roles_lnkAttributes, admin_users_roles_lnkCreationAttributes> implements admin_users_roles_lnkAttributes {
  id!: number;
  user_id?: number;
  role_id?: number;
  role_ord?: number;
  user_ord?: number;

  // admin_users_roles_lnk belongsTo admin_roles via role_id
  role!: admin_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<admin_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<admin_roles, admin_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<admin_roles>;
  // admin_users_roles_lnk belongsTo admin_users via user_id
  user!: admin_users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof admin_users_roles_lnk {
    return admin_users_roles_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_users',
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
    role_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    user_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'admin_users_roles_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_users_roles_lnk_fk",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "admin_users_roles_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "admin_users_roles_lnk_ofk",
        fields: [
          { name: "role_ord" },
        ]
      },
      {
        name: "admin_users_roles_lnk_oifk",
        fields: [
          { name: "user_ord" },
        ]
      },
      {
        name: "admin_users_roles_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "admin_users_roles_lnk_uq",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
      {
        name: "idx_admin_users_roles_lnk_fk",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idx_admin_users_roles_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
