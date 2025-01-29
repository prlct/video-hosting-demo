import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

import type { landings, landingsId } from './landings';

export interface landings_cmpsAttributes {
  id: number;
  entity_id?: number;
  cmp_id?: number;
  component_type?: string;
  field?: string;
  order?: number;
}

export type landings_cmpsPk = "id";
export type landings_cmpsId = landings_cmps[landings_cmpsPk];
export type landings_cmpsOptionalAttributes = "id" | "entity_id" | "cmp_id" | "component_type" | "field" | "order";
export type landings_cmpsCreationAttributes = Optional<landings_cmpsAttributes, landings_cmpsOptionalAttributes>;

export class landings_cmps extends Model<landings_cmpsAttributes, landings_cmpsCreationAttributes> implements landings_cmpsAttributes {
  id!: number;

  entity_id?: number;

  cmp_id?: number;

  component_type?: string;

  field?: string;

  order?: number;

  // landings_cmps belongsTo landings via entity_id
  entity!: landings;

  getEntity!: Sequelize.BelongsToGetAssociationMixin<landings>;

  setEntity!: Sequelize.BelongsToSetAssociationMixin<landings, landingsId>;

  createEntity!: Sequelize.BelongsToCreateAssociationMixin<landings>;

  static initModel(sequelize: Sequelize.Sequelize): typeof landings_cmps {
    return landings_cmps.init({
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
          model: 'landings',
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
      tableName: 'landings_cmps',
      schema: 'public',
      timestamps: false,
      indexes: [
        {
          name: "idx_landings_entity_id",
          fields: [
            { name: "entity_id" },
          ]
        },
        {
          name: "landings_cmps_pkey",
          unique: true,
          fields: [
            { name: "id" },
          ]
        },
        {
          name: "landings_component_type_idx",
          fields: [
            { name: "component_type" },
          ]
        },
        {
          name: "landings_entity_fk",
          fields: [
            { name: "entity_id" },
          ]
        },
        {
          name: "landings_field_idx",
          fields: [
            { name: "field" },
          ]
        },
        {
          name: "landings_uq",
          unique: true,
          fields: [
            { name: "entity_id" },
            { name: "cmp_id" },
            { name: "field" },
            { name: "component_type" },
          ]
        },
      ]
    });
  }
}
