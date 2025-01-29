import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { files, filesId } from './files';

export interface files_related_mphAttributes {
  id: number;
  file_id?: number;
  related_id?: number;
  related_type?: string;
  field?: string;
  order?: number;
}

export type files_related_mphPk = "id";
export type files_related_mphId = files_related_mph[files_related_mphPk];
export type files_related_mphOptionalAttributes = "id" | "file_id" | "related_id" | "related_type" | "field" | "order";
export type files_related_mphCreationAttributes = Optional<files_related_mphAttributes, files_related_mphOptionalAttributes>;

export class files_related_mph extends Model<files_related_mphAttributes, files_related_mphCreationAttributes> implements files_related_mphAttributes {
  id!: number;
  file_id?: number;
  related_id?: number;
  related_type?: string;
  field?: string;
  order?: number;

  // files_related_mph belongsTo files via file_id
  file!: files;
  getFile!: Sequelize.BelongsToGetAssociationMixin<files>;
  setFile!: Sequelize.BelongsToSetAssociationMixin<files, filesId>;
  createFile!: Sequelize.BelongsToCreateAssociationMixin<files>;

  static initModel(sequelize: Sequelize.Sequelize): typeof files_related_mph {
    return files_related_mph.init({
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
    related_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    related_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    field: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    order: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'files_related_mph',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "files_related_mph_fk",
        fields: [
          { name: "file_id" },
        ]
      },
      {
        name: "files_related_mph_idix",
        fields: [
          { name: "related_id" },
        ]
      },
      {
        name: "files_related_mph_oidx",
        fields: [
          { name: "order" },
        ]
      },
      {
        name: "files_related_mph_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_files_related_mph_fk",
        fields: [
          { name: "file_id" },
        ]
      },
    ]
  });
  }
}
