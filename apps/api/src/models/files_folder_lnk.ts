import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { files, filesId } from './files';
import type { upload_folders, upload_foldersId } from './upload_folders';

export interface files_folder_lnkAttributes {
  id: number;
  file_id?: number;
  folder_id?: number;
  file_ord?: number;
}

export type files_folder_lnkPk = "id";
export type files_folder_lnkId = files_folder_lnk[files_folder_lnkPk];
export type files_folder_lnkOptionalAttributes = "id" | "file_id" | "folder_id" | "file_ord";
export type files_folder_lnkCreationAttributes = Optional<files_folder_lnkAttributes, files_folder_lnkOptionalAttributes>;

export class files_folder_lnk extends Model<files_folder_lnkAttributes, files_folder_lnkCreationAttributes> implements files_folder_lnkAttributes {
  id!: number;
  file_id?: number;
  folder_id?: number;
  file_ord?: number;

  // files_folder_lnk belongsTo files via file_id
  file!: files;
  getFile!: Sequelize.BelongsToGetAssociationMixin<files>;
  setFile!: Sequelize.BelongsToSetAssociationMixin<files, filesId>;
  createFile!: Sequelize.BelongsToCreateAssociationMixin<files>;
  // files_folder_lnk belongsTo upload_folders via folder_id
  folder!: upload_folders;
  getFolder!: Sequelize.BelongsToGetAssociationMixin<upload_folders>;
  setFolder!: Sequelize.BelongsToSetAssociationMixin<upload_folders, upload_foldersId>;
  createFolder!: Sequelize.BelongsToCreateAssociationMixin<upload_folders>;

  static initModel(sequelize: Sequelize.Sequelize): typeof files_folder_lnk {
    return files_folder_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    file_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'files',
        key: 'id'
      }
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'upload_folders',
        key: 'id'
      }
    },
    file_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'files_folder_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "files_folder_lnk_fk",
        fields: [
          { name: "file_id" },
        ]
      },
      {
        name: "files_folder_lnk_ifk",
        fields: [
          { name: "folder_id" },
        ]
      },
      {
        name: "files_folder_lnk_oifk",
        fields: [
          { name: "file_ord" },
        ]
      },
      {
        name: "files_folder_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "files_folder_lnk_uq",
        unique: true,
        fields: [
          { name: "file_id" },
          { name: "folder_id" },
        ]
      },
      {
        name: "idx_files_folder_lnk_fk",
        fields: [
          { name: "file_id" },
        ]
      },
      {
        name: "idx_files_folder_lnk_ifk",
        fields: [
          { name: "folder_id" },
        ]
      },
    ]
  });
  }
}
