import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from 'db';

export interface tokensAttributes {
  id: number;
  type: "ACCESS" | "REFRESH";
  value: string;
  created_at: Date;
  updated_at: Date;
  is_shadow?: boolean;
  document_id?: string;
  user_id: string;
}

export type tokensPk = "id";
export type tokensId = tokens[tokensPk];
export type tokensOptionalAttributes = "id" | "created_at" | "updated_at" | "is_shadow" | "document_id";
export type tokensCreationAttributes = Optional<tokensAttributes, tokensOptionalAttributes>;

export class tokens extends Model<tokensAttributes, tokensCreationAttributes> implements tokensAttributes {
  id!: number;
  type!: "ACCESS" | "REFRESH";
  value!: string;
  created_at!: Date;
  updated_at!: Date;
  is_shadow?: boolean;
  document_id?: string;
  user_id!: string;

}

tokens.init({
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  type: {
    type: DataTypes.ENUM("ACCESS", "REFRESH"),
    allowNull: false
  },
  value: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  is_shadow: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  document_id: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  user_id: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'tokens',
  schema: 'public',
  timestamps: true,
  indexes: [
    {
      name: "tokens_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});
