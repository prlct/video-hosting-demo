import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { files_folder_lnk, files_folder_lnkId } from './files_folder_lnk';
import type { upload_folders_parent_lnk, upload_folders_parent_lnkId } from './upload_folders_parent_lnk';

export interface upload_foldersAttributes {
  id: number;
  document_id?: string;
  name?: string;
  path_id?: number;
  path?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type upload_foldersPk = "id";
export type upload_foldersId = upload_folders[upload_foldersPk];
export type upload_foldersOptionalAttributes = "id" | "document_id" | "name" | "path_id" | "path" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type upload_foldersCreationAttributes = Optional<upload_foldersAttributes, upload_foldersOptionalAttributes>;

export class upload_folders extends Model<upload_foldersAttributes, upload_foldersCreationAttributes> implements upload_foldersAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  path_id?: number;
  path?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // upload_folders belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // upload_folders belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // upload_folders hasMany files_folder_lnk via folder_id
  files_folder_lnks!: files_folder_lnk[];
  getFiles_folder_lnks!: Sequelize.HasManyGetAssociationsMixin<files_folder_lnk>;
  setFiles_folder_lnks!: Sequelize.HasManySetAssociationsMixin<files_folder_lnk, files_folder_lnkId>;
  addFiles_folder_lnk!: Sequelize.HasManyAddAssociationMixin<files_folder_lnk, files_folder_lnkId>;
  addFiles_folder_lnks!: Sequelize.HasManyAddAssociationsMixin<files_folder_lnk, files_folder_lnkId>;
  createFiles_folder_lnk!: Sequelize.HasManyCreateAssociationMixin<files_folder_lnk>;
  removeFiles_folder_lnk!: Sequelize.HasManyRemoveAssociationMixin<files_folder_lnk, files_folder_lnkId>;
  removeFiles_folder_lnks!: Sequelize.HasManyRemoveAssociationsMixin<files_folder_lnk, files_folder_lnkId>;
  hasFiles_folder_lnk!: Sequelize.HasManyHasAssociationMixin<files_folder_lnk, files_folder_lnkId>;
  hasFiles_folder_lnks!: Sequelize.HasManyHasAssociationsMixin<files_folder_lnk, files_folder_lnkId>;
  countFiles_folder_lnks!: Sequelize.HasManyCountAssociationsMixin;
  // upload_folders hasMany upload_folders_parent_lnk via folder_id
  upload_folders_parent_lnks!: upload_folders_parent_lnk[];
  getUpload_folders_parent_lnks!: Sequelize.HasManyGetAssociationsMixin<upload_folders_parent_lnk>;
  setUpload_folders_parent_lnks!: Sequelize.HasManySetAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  addUpload_folders_parent_lnk!: Sequelize.HasManyAddAssociationMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  addUpload_folders_parent_lnks!: Sequelize.HasManyAddAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  createUpload_folders_parent_lnk!: Sequelize.HasManyCreateAssociationMixin<upload_folders_parent_lnk>;
  removeUpload_folders_parent_lnk!: Sequelize.HasManyRemoveAssociationMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  removeUpload_folders_parent_lnks!: Sequelize.HasManyRemoveAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  hasUpload_folders_parent_lnk!: Sequelize.HasManyHasAssociationMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  hasUpload_folders_parent_lnks!: Sequelize.HasManyHasAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  countUpload_folders_parent_lnks!: Sequelize.HasManyCountAssociationsMixin;
  // upload_folders hasMany upload_folders_parent_lnk via inv_folder_id
  inv_folder_upload_folders_parent_lnks!: upload_folders_parent_lnk[];
  getInv_folder_upload_folders_parent_lnks!: Sequelize.HasManyGetAssociationsMixin<upload_folders_parent_lnk>;
  setInv_folder_upload_folders_parent_lnks!: Sequelize.HasManySetAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  addInv_folder_upload_folders_parent_lnk!: Sequelize.HasManyAddAssociationMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  addInv_folder_upload_folders_parent_lnks!: Sequelize.HasManyAddAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  createInv_folder_upload_folders_parent_lnk!: Sequelize.HasManyCreateAssociationMixin<upload_folders_parent_lnk>;
  removeInv_folder_upload_folders_parent_lnk!: Sequelize.HasManyRemoveAssociationMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  removeInv_folder_upload_folders_parent_lnks!: Sequelize.HasManyRemoveAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  hasInv_folder_upload_folders_parent_lnk!: Sequelize.HasManyHasAssociationMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  hasInv_folder_upload_folders_parent_lnks!: Sequelize.HasManyHasAssociationsMixin<upload_folders_parent_lnk, upload_folders_parent_lnkId>;
  countInv_folder_upload_folders_parent_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof upload_folders {
    return upload_folders.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    path_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    path: {
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
    tableName: 'upload_folders',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_upload_folders_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_upload_folders_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "upload_folders_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "upload_folders_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "upload_folders_path_id_index",
        unique: true,
        fields: [
          { name: "path_id" },
        ]
      },
      {
        name: "upload_folders_path_index",
        unique: true,
        fields: [
          { name: "path" },
        ]
      },
      {
        name: "upload_folders_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "upload_folders_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
