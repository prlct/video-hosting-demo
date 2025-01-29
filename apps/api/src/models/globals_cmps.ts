import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { globals, globalsId } from './globals';

export interface globals_cmpsAttributes {
  id: number;
  entity_id?: number;
  cmp_id?: number;
  component_type?: string;
  field?: string;
  order?: number;
}

export type globals_cmpsPk = "id";
export type globals_cmpsId = globals_cmps[globals_cmpsPk];
export type globals_cmpsOptionalAttributes = "id" | "entity_id" | "cmp_id" | "component_type" | "field" | "order";
export type globals_cmpsCreationAttributes = Optional<globals_cmpsAttributes, globals_cmpsOptionalAttributes>;

export class globals_cmps extends Model<globals_cmpsAttributes, globals_cmpsCreationAttributes> implements globals_cmpsAttributes {
  id!: number;
  entity_id?: number;
  cmp_id?: number;
  component_type?: string;
  field?: string;
  order?: number;

  // globals_cmps belongsTo globals via entity_id
  entity!: globals;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<globals>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<globals, globalsId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<globals>;

  static initModel(sequelize: Sequelize.Sequelize): typeof globals_cmps {
    return globals_cmps.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    entity_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'globals',
        key: 'id'
      }
    },
    cmp_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    component_type: {
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
    tableName: 'globals_cmps',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "globals_cmps_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "globals_component_type_idx",
        fields: [
          { name: "component_type" },
        ]
      },
      {
        name: "globals_entity_fk",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "globals_field_idx",
        fields: [
          { name: "field" },
        ]
      },
      {
        name: "globals_uq",
        unique: true,
        fields: [
          { name: "entity_id" },
          { name: "cmp_id" },
          { name: "field" },
          { name: "component_type" },
        ]
      },
      {
        name: "idx_globals_entity_id",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
  }
}
