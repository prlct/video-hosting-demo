import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { up_roles, up_rolesId } from './up_roles';
import type { users, usersId } from './user';

export interface users_role_lnkAttributes {
  id: number;
  user_id?: number;
  role_id?: number;
  user_ord?: number;
}

export type users_role_lnkPk = "id";
export type users_role_lnkId = users_role_lnk[users_role_lnkPk];
export type users_role_lnkOptionalAttributes = "id" | "user_id" | "role_id" | "user_ord";
export type users_role_lnkCreationAttributes = Optional<users_role_lnkAttributes, users_role_lnkOptionalAttributes>;

export class users_role_lnk extends Model<users_role_lnkAttributes, users_role_lnkCreationAttributes> implements users_role_lnkAttributes {
  id!: number;
  user_id?: number;
  role_id?: number;
  user_ord?: number;

  // users_role_lnk belongsTo up_roles via role_id
  role!: up_roles;
  getRole!: Sequelize.BelongsToGetAssociationMixin<up_roles>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<up_roles, up_rolesId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<up_roles>;
  // users_role_lnk belongsTo users via user_id
  user!: users;
  getUser!: Sequelize.BelongsToGetAssociationMixin<users>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<users, usersId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof users_role_lnk {
    return users_role_lnk.init({
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
        model: 'users',
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
    user_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users_role_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_users_role_lnk_fk",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idx_users_role_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "users_role_lnk_fk",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "users_role_lnk_ifk",
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "users_role_lnk_oifk",
        fields: [
          { name: "user_ord" },
        ]
      },
      {
        name: "users_role_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "users_role_lnk_uq",
        unique: true,
        fields: [
          { name: "user_id" },
          { name: "role_id" },
        ]
      },
    ]
  });
  }
}
