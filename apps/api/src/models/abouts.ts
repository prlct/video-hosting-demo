import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { abouts_cmps, abouts_cmpsId } from './abouts_cmps';
import type { admin_users, admin_usersId } from './admin_users';

export interface aboutsAttributes {
  id: number;
  document_id?: string;
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type aboutsPk = "id";
export type aboutsId = abouts[aboutsPk];
export type aboutsOptionalAttributes = "id" | "document_id" | "title" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type aboutsCreationAttributes = Optional<aboutsAttributes, aboutsOptionalAttributes>;

export class abouts extends Model<aboutsAttributes, aboutsCreationAttributes> implements aboutsAttributes {
  id!: number;
  document_id?: string;
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // abouts hasMany abouts_cmps via entity_id
  abouts_cmps!: abouts_cmps[];
  getAbouts_cmps!: Sequelize.HasManyGetAssociationsMixin<abouts_cmps>;
  setAbouts_cmps!: Sequelize.HasManySetAssociationsMixin<abouts_cmps, abouts_cmpsId>;
  addAbouts_cmp!: Sequelize.HasManyAddAssociationMixin<abouts_cmps, abouts_cmpsId>;
  addAbouts_cmps!: Sequelize.HasManyAddAssociationsMixin<abouts_cmps, abouts_cmpsId>;
  createAbouts_cmp!: Sequelize.HasManyCreateAssociationMixin<abouts_cmps>;
  removeAbouts_cmp!: Sequelize.HasManyRemoveAssociationMixin<abouts_cmps, abouts_cmpsId>;
  removeAbouts_cmps!: Sequelize.HasManyRemoveAssociationsMixin<abouts_cmps, abouts_cmpsId>;
  hasAbouts_cmp!: Sequelize.HasManyHasAssociationMixin<abouts_cmps, abouts_cmpsId>;
  hasAbouts_cmps!: Sequelize.HasManyHasAssociationsMixin<abouts_cmps, abouts_cmpsId>;
  countAbouts_cmps!: Sequelize.HasManyCountAssociationsMixin;
  // abouts belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // abouts belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof abouts {
    return abouts.init({
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
    title: {
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
    tableName: 'abouts',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "abouts_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "abouts_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "abouts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "abouts_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "idx_abouts_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_abouts_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
