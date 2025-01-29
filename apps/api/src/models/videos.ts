import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';

export interface videosAttributes {
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

export type videosPk = "id";
export type videosId = videos[videosPk];
export type videosOptionalAttributes = "id" | "document_id" | "title" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type videosCreationAttributes = Optional<videosAttributes, videosOptionalAttributes>;

export class videos extends Model<videosAttributes, videosCreationAttributes> implements videosAttributes {
  id!: number;
  document_id?: string;
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // videos belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // videos belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;

  static initModel(sequelize: Sequelize.Sequelize): typeof videos {
    return videos.init({
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
    tableName: 'videos',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_videos_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_videos_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "videos_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "videos_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "videos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "videos_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
