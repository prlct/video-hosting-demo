import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { models, modelsId } from './models';
import type { photos, photosId } from './photos';

export interface photos_model_lnkAttributes {
  id: number;
  photo_id?: number;
  model_id?: number;
  photo_ord?: number;
}

export type photos_model_lnkPk = "id";
export type photos_model_lnkId = photos_model_lnk[photos_model_lnkPk];
export type photos_model_lnkOptionalAttributes = "id" | "photo_id" | "model_id" | "photo_ord";
export type photos_model_lnkCreationAttributes = Optional<photos_model_lnkAttributes, photos_model_lnkOptionalAttributes>;

export class photos_model_lnk extends Model<photos_model_lnkAttributes, photos_model_lnkCreationAttributes> implements photos_model_lnkAttributes {
  id!: number;
  photo_id?: number;
  model_id?: number;
  photo_ord?: number;

  // photos_model_lnk belongsTo models via model_id
  model!: models;
  getModel!: Sequelize.BelongsToGetAssociationMixin<models>;
  setModel!: Sequelize.BelongsToSetAssociationMixin<models, modelsId>;
  createModel!: Sequelize.BelongsToCreateAssociationMixin<models>;
  // photos_model_lnk belongsTo photos via photo_id
  photo!: photos;
  getPhoto!: Sequelize.BelongsToGetAssociationMixin<photos>;
  setPhoto!: Sequelize.BelongsToSetAssociationMixin<photos, photosId>;
  createPhoto!: Sequelize.BelongsToCreateAssociationMixin<photos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof photos_model_lnk {
    return photos_model_lnk.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    photo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'photos',
        key: 'id'
      }
    },
    model_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'models',
        key: 'id'
      }
    },
    photo_ord: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'photos_model_lnk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "idx_photos_model_lnk_fk",
        fields: [
          { name: "photo_id" },
        ]
      },
      {
        name: "idx_photos_model_lnk_ifk",
        fields: [
          { name: "model_id" },
        ]
      },
      {
        name: "photos_model_lnk_fk",
        fields: [
          { name: "photo_id" },
        ]
      },
      {
        name: "photos_model_lnk_ifk",
        fields: [
          { name: "model_id" },
        ]
      },
      {
        name: "photos_model_lnk_oifk",
        fields: [
          { name: "photo_ord" },
        ]
      },
      {
        name: "photos_model_lnk_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "photos_model_lnk_uq",
        unique: true,
        fields: [
          { name: "photo_id" },
          { name: "model_id" },
        ]
      },
    ]
  });
  }
}
