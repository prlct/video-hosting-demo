import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface components_shared_mediaAttributes {
  id: number;
}

export type components_shared_mediaPk = "id";
export type components_shared_mediaId = components_shared_media[components_shared_mediaPk];
export type components_shared_mediaOptionalAttributes = "id";
export type components_shared_mediaCreationAttributes = Optional<components_shared_mediaAttributes, components_shared_mediaOptionalAttributes>;

export class components_shared_media extends Model<components_shared_mediaAttributes, components_shared_mediaCreationAttributes> implements components_shared_mediaAttributes {
  id!: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof components_shared_media {
    return components_shared_media.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'components_shared_media',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "components_shared_media_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
