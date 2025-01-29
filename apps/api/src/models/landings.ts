import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { landings_cmps, landings_cmpsId } from './landings_cmps';

export interface landingsAttributes {
  id: number;
  document_id?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type landingsPk = "id";
export type landingsId = landings[landingsPk];
export type landingsOptionalAttributes = "id" | "document_id" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type landingsCreationAttributes = Optional<landingsAttributes, landingsOptionalAttributes>;

export class landings extends Model<landingsAttributes, landingsCreationAttributes> implements landingsAttributes {
  id!: number;
  document_id?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // landings belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // landings belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // landings hasMany landings_cmps via entity_id
  landings_cmps!: landings_cmps[];
  getLandings_cmps!: Sequelize.HasManyGetAssociationsMixin<landings_cmps>;
  setLandings_cmps!: Sequelize.HasManySetAssociationsMixin<landings_cmps, landings_cmpsId>;
  addLandings_cmp!: Sequelize.HasManyAddAssociationMixin<landings_cmps, landings_cmpsId>;
  addLandings_cmps!: Sequelize.HasManyAddAssociationsMixin<landings_cmps, landings_cmpsId>;
  createLandings_cmp!: Sequelize.HasManyCreateAssociationMixin<landings_cmps>;
  removeLandings_cmp!: Sequelize.HasManyRemoveAssociationMixin<landings_cmps, landings_cmpsId>;
  removeLandings_cmps!: Sequelize.HasManyRemoveAssociationsMixin<landings_cmps, landings_cmpsId>;
  hasLandings_cmp!: Sequelize.HasManyHasAssociationMixin<landings_cmps, landings_cmpsId>;
  hasLandings_cmps!: Sequelize.HasManyHasAssociationsMixin<landings_cmps, landings_cmpsId>;
  countLandings_cmps!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof landings {
    return landings.init({
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
    tableName: 'landings',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_landings_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_landings_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "landings_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "landings_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "landings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "landings_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
