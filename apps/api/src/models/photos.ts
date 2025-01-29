import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { photos_model_lnk, photos_model_lnkId } from './photos_model_lnk';

export interface photosAttributes {
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

export type photosPk = "id";
export type photosId = photos[photosPk];
export type photosOptionalAttributes = "id" | "document_id" | "title" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type photosCreationAttributes = Optional<photosAttributes, photosOptionalAttributes>;

export class photos extends Model<photosAttributes, photosCreationAttributes> implements photosAttributes {
  id!: number;
  document_id?: string;
  title?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // photos belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // photos belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // photos hasMany photos_model_lnk via photo_id
  photos_model_lnks!: photos_model_lnk[];
  getPhotos_model_lnks!: Sequelize.HasManyGetAssociationsMixin<photos_model_lnk>;
  setPhotos_model_lnks!: Sequelize.HasManySetAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  addPhotos_model_lnk!: Sequelize.HasManyAddAssociationMixin<photos_model_lnk, photos_model_lnkId>;
  addPhotos_model_lnks!: Sequelize.HasManyAddAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  createPhotos_model_lnk!: Sequelize.HasManyCreateAssociationMixin<photos_model_lnk>;
  removePhotos_model_lnk!: Sequelize.HasManyRemoveAssociationMixin<photos_model_lnk, photos_model_lnkId>;
  removePhotos_model_lnks!: Sequelize.HasManyRemoveAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  hasPhotos_model_lnk!: Sequelize.HasManyHasAssociationMixin<photos_model_lnk, photos_model_lnkId>;
  hasPhotos_model_lnks!: Sequelize.HasManyHasAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  countPhotos_model_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof photos {
    return photos.init({
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
    tableName: 'photos',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_photos_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_photos_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "photos_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "photos_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "photos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "photos_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
