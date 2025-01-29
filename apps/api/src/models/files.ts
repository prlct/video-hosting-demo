import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { files_folder_lnk, files_folder_lnkId } from './files_folder_lnk';
import type { files_related_mph, files_related_mphId } from './files_related_mph';
import { sequelize } from 'db';

export interface filesAttributes {
  id: number;
  document_id?: string;
  name?: string;
  alternative_text?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: object;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  preview_url?: string;
  provider?: string;
  provider_metadata?: object;
  folder_path?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type filesPk = "id";
export type filesId = files[filesPk];
export type filesOptionalAttributes = "id" | "document_id" | "name" | "alternative_text" | "caption" | "width" | "height" | "formats" | "hash" | "ext" | "mime" | "size" | "url" | "preview_url" | "provider" | "provider_metadata" | "folder_path" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type filesCreationAttributes = Optional<filesAttributes, filesOptionalAttributes>;

export class files extends Model<filesAttributes, filesCreationAttributes> implements filesAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  alternative_text?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: object;
  hash?: string;
  ext?: string;
  mime?: string;
  size?: number;
  url?: string;
  preview_url?: string;
  provider?: string;
  provider_metadata?: object;
  folder_path?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // files belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // files belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // files hasMany files_folder_lnk via file_id
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
  // files hasMany files_related_mph via file_id
  files_related_mphs!: files_related_mph[];
  getFiles_related_mphs!: Sequelize.HasManyGetAssociationsMixin<files_related_mph>;
  setFiles_related_mphs!: Sequelize.HasManySetAssociationsMixin<files_related_mph, files_related_mphId>;
  addFiles_related_mph!: Sequelize.HasManyAddAssociationMixin<files_related_mph, files_related_mphId>;
  addFiles_related_mphs!: Sequelize.HasManyAddAssociationsMixin<files_related_mph, files_related_mphId>;
  createFiles_related_mph!: Sequelize.HasManyCreateAssociationMixin<files_related_mph>;
  removeFiles_related_mph!: Sequelize.HasManyRemoveAssociationMixin<files_related_mph, files_related_mphId>;
  removeFiles_related_mphs!: Sequelize.HasManyRemoveAssociationsMixin<files_related_mph, files_related_mphId>;
  hasFiles_related_mph!: Sequelize.HasManyHasAssociationMixin<files_related_mph, files_related_mphId>;
  hasFiles_related_mphs!: Sequelize.HasManyHasAssociationsMixin<files_related_mph, files_related_mphId>;
  countFiles_related_mphs!: Sequelize.HasManyCountAssociationsMixin;


}

files.init({
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
  alternative_text: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  caption: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  width: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  height: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  formats: {
    type: DataTypes.JSONB,
    allowNull: true
  },
  hash: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  ext: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  mime: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  size: {
    type: DataTypes.DECIMAL,
    allowNull: true
  },
  url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  preview_url: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  provider: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  provider_metadata: {
    type: DataTypes.JSONB,
    allowNull: true
  },
  folder_path: {
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
  tableName: 'files',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: "files_created_by_id_fk",
      fields: [
        { name: "created_by_id" },
      ]
    },
    {
      name: "files_documents_idx",
      fields: [
        { name: "document_id" },
        { name: "locale" },
        { name: "published_at" },
      ]
    },
    {
      name: "files_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
    {
      name: "files_updated_by_id_fk",
      fields: [
        { name: "updated_by_id" },
      ]
    },
    {
      name: "idx_files_created_by_id",
      fields: [
        { name: "created_by_id" },
      ]
    },
    {
      name: "idx_files_updated_by_id",
      fields: [
        { name: "updated_by_id" },
      ]
    },
    {
      name: "upload_files_created_at_index",
      fields: [
        { name: "created_at" },
      ]
    },
    {
      name: "upload_files_ext_index",
      fields: [
        { name: "ext" },
      ]
    },
    {
      name: "upload_files_folder_path_index",
      fields: [
        { name: "folder_path" },
      ]
    },
    {
      name: "upload_files_name_index",
      fields: [
        { name: "name" },
      ]
    },
    {
      name: "upload_files_size_index",
      fields: [
        { name: "size" },
      ]
    },
    {
      name: "upload_files_updated_at_index",
      fields: [
        { name: "updated_at" },
      ]
    },
  ]
});