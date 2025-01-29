import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { upload_folders, upload_foldersId } from './upload_folders';

export interface upload_folders_parent_lnkAttributes {
  id: number;
  folder_id?: number;
  inv_folder_id?: number;
  folder_ord?: number;
}

export type upload_folders_parent_lnkPk = "id";
export type upload_folders_parent_lnkId = upload_folders_parent_lnk[upload_folders_parent_lnkPk];
export type upload_folders_parent_lnkOptionalAttributes = "id" | "folder_id" | "inv_folder_id" | "folder_ord";
export type upload_folders_parent_lnkCreationAttributes = Optional<upload_folders_parent_lnkAttributes, upload_folders_parent_lnkOptionalAttributes>;

export class upload_folders_parent_lnk extends Model<upload_folders_parent_lnkAttributes, upload_folders_parent_lnkCreationAttributes> implements upload_folders_parent_lnkAttributes {
  id!: number;
  folder_id?: number;
  inv_folder_id?: number;
  folder_ord?: number;

  // upload_folders_parent_lnk belongsTo upload_folders via folder_id
  folder!: upload_folders;
  getFolder!: Sequelize.BelongsToGetAssociationMixin<upload_folders>;
  setFolder!: Sequelize.BelongsToSetAssociationMixin<upload_folders, upload_foldersId>;
  createFolder!: Sequelize.BelongsToCreateAssociationMixin<upload_folders>;
  // upload_folders_parent_lnk belongsTo upload_folders via inv_folder_id
  inv_folder!: upload_folders;
  getInv_folder!: Sequelize.BelongsToGetAssociationMixin<upload_folders>;
  setInv_folder!: Sequelize.BelongsToSetAssociationMixin<upload_folders, upload_foldersId>;
  createInv_folder!: Sequelize.BelongsToCreateAssociationMixin<upload_folders>;

  static initModel(sequelize: Sequelize.Sequelize): typeof upload_folders_parent_lnk {
    return upload_folders_parent_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'upload_folders',
        key: 'id'
      }
    },
    inv_folder_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'upload_folders',
        key: 'id'
      }
    },
    folder_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'upload_folders_parent_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_upload_folders_parent_lnk_fk",
        fields: [
          { name: "folder_id" },
        ]
      },
      {
        name: "idx_upload_folders_parent_lnk_ifk",
        fields: [
          { name: "inv_folder_id" },
        ]
      },
      {
        name: "upload_folders_parent_lnk_fk",
        fields: [
          { name: "folder_id" },
        ]
      },
      {
        name: "upload_folders_parent_lnk_ifk",
        fields: [
          { name: "inv_folder_id" },
        ]
      },
      {
        name: "upload_folders_parent_lnk_oifk",
        fields: [
          { name: "folder_ord" },
        ]
      },
      {
        name: "upload_folders_parent_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "upload_folders_parent_lnk_uq",
        unique: true,
        fields: [
          { name: "folder_id" },
          { name: "inv_folder_id" },
        ]
      },
    ]
  });
  }
}
