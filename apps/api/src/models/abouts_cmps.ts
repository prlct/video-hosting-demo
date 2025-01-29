import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { abouts, aboutsId } from './abouts';

export interface abouts_cmpsAttributes {
  id: number;
  entity_id?: number;
  cmp_id?: number;
  component_type?: string;
  field?: string;
  order?: number;
}

export type abouts_cmpsPk = "id";
export type abouts_cmpsId = abouts_cmps[abouts_cmpsPk];
export type abouts_cmpsOptionalAttributes = "id" | "entity_id" | "cmp_id" | "component_type" | "field" | "order";
export type abouts_cmpsCreationAttributes = Optional<abouts_cmpsAttributes, abouts_cmpsOptionalAttributes>;

export class abouts_cmps extends Model<abouts_cmpsAttributes, abouts_cmpsCreationAttributes> implements abouts_cmpsAttributes {
  id!: number;
  entity_id?: number;
  cmp_id?: number;
  component_type?: string;
  field?: string;
  order?: number;

  // abouts_cmps belongsTo abouts via entity_id
  entity!: abouts;
  getEntity!: Sequelize.BelongsToGetAssociationMixin<abouts>;
  setEntity!: Sequelize.BelongsToSetAssociationMixin<abouts, aboutsId>;
  createEntity!: Sequelize.BelongsToCreateAssociationMixin<abouts>;

  static initModel(sequelize: Sequelize.Sequelize): typeof abouts_cmps {
    return abouts_cmps.init({
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
        model: 'abouts',
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
    tableName: 'abouts_cmps',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "abouts_cmps_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "abouts_component_type_idx",
        fields: [
          { name: "component_type" },
        ]
      },
      {
        name: "abouts_entity_fk",
        fields: [
          { name: "entity_id" },
        ]
      },
      {
        name: "abouts_field_idx",
        fields: [
          { name: "field" },
        ]
      },
      {
        name: "abouts_uq",
        unique: true,
        fields: [
          { name: "entity_id" },
          { name: "cmp_id" },
          { name: "field" },
          { name: "component_type" },
        ]
      },
      {
        name: "idx_abouts_entity_id",
        fields: [
          { name: "entity_id" },
        ]
      },
    ]
  });
  }
}
