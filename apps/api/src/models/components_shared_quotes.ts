import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface components_shared_quotesAttributes {
  id: number;
  title?: string;
  body?: string;
}

export type components_shared_quotesPk = "id";
export type components_shared_quotesId = components_shared_quotes[components_shared_quotesPk];
export type components_shared_quotesOptionalAttributes = "id" | "title" | "body";
export type components_shared_quotesCreationAttributes = Optional<components_shared_quotesAttributes, components_shared_quotesOptionalAttributes>;

export class components_shared_quotes extends Model<components_shared_quotesAttributes, components_shared_quotesCreationAttributes> implements components_shared_quotesAttributes {
  id!: number;
  title?: string;
  body?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof components_shared_quotes {
    return components_shared_quotes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'components_shared_quotes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "components_shared_quotes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
