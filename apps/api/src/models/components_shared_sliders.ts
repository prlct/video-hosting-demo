import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface components_shared_slidersAttributes {
  id: number;
}

export type components_shared_slidersPk = "id";
export type components_shared_slidersId = components_shared_sliders[components_shared_slidersPk];
export type components_shared_slidersOptionalAttributes = "id";
export type components_shared_slidersCreationAttributes = Optional<components_shared_slidersAttributes, components_shared_slidersOptionalAttributes>;

export class components_shared_sliders extends Model<components_shared_slidersAttributes, components_shared_slidersCreationAttributes> implements components_shared_slidersAttributes {
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof components_shared_sliders {
    return components_shared_sliders.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'components_shared_sliders',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "components_shared_sliders_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
