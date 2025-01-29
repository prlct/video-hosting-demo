import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface components_shared_seosAttributes {
  id: number;
  meta_title?: string;
  meta_description?: string;
}

export type components_shared_seosPk = "id";
export type components_shared_seosId = components_shared_seos[components_shared_seosPk];
export type components_shared_seosOptionalAttributes = "id" | "meta_title" | "meta_description";
export type components_shared_seosCreationAttributes = Optional<components_shared_seosAttributes, components_shared_seosOptionalAttributes>;

export class components_shared_seos extends Model<components_shared_seosAttributes, components_shared_seosCreationAttributes> implements components_shared_seosAttributes {
  id!: number;
  meta_title?: string;
  meta_description?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof components_shared_seos {
    return components_shared_seos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    meta_title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    meta_description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'components_shared_seos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "components_shared_seos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
