import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface components_shared_bannersAttributes {
  id: number;
  banner_link?: string;
  banner_text?: string;
}

export type components_shared_bannersPk = "id";
export type components_shared_bannersId = components_shared_banners[components_shared_bannersPk];
export type components_shared_bannersOptionalAttributes = "id" | "banner_link" | "banner_text";
export type components_shared_bannersCreationAttributes = Optional<components_shared_bannersAttributes, components_shared_bannersOptionalAttributes>;

export class components_shared_banners extends Model<components_shared_bannersAttributes, components_shared_bannersCreationAttributes> implements components_shared_bannersAttributes {
  id!: number;
  banner_link?: string;
  banner_text?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof components_shared_banners {
    return components_shared_banners.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    banner_link: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    banner_text: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'components_shared_banners',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "components_shared_banners_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
