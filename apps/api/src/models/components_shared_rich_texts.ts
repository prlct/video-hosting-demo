import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface components_shared_rich_textsAttributes {
  id: number;
  body?: string;
}

export type components_shared_rich_textsPk = "id";
export type components_shared_rich_textsId = components_shared_rich_texts[components_shared_rich_textsPk];
export type components_shared_rich_textsOptionalAttributes = "id" | "body";
export type components_shared_rich_textsCreationAttributes = Optional<components_shared_rich_textsAttributes, components_shared_rich_textsOptionalAttributes>;

export class components_shared_rich_texts extends Model<components_shared_rich_textsAttributes, components_shared_rich_textsCreationAttributes> implements components_shared_rich_textsAttributes {
  id!: number;
  body?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof components_shared_rich_texts {
    return components_shared_rich_texts.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'components_shared_rich_texts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "components_shared_rich_texts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
