import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { admin_users, admin_usersId } from './admin_users';
import type { photos_model_lnk, photos_model_lnkId } from './photos_model_lnk';

export interface modelsAttributes {
  id: number;
  document_id?: string;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type modelsPk = "id";
export type modelsId = models[modelsPk];
export type modelsOptionalAttributes = "id" | "document_id" | "name" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type modelsCreationAttributes = Optional<modelsAttributes, modelsOptionalAttributes>;

export class models extends Model<modelsAttributes, modelsCreationAttributes> implements modelsAttributes {
  id!: number;
  document_id?: string;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // models belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // models belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // models hasMany photos_model_lnk via model_id
  photos_model_lnks!: photos_model_lnk[];
  getPhotos_model_lnks!: Sequelize.HasManyGetAssociationsMixin<photos_model_lnk>;
  setPhotos_model_lnks!: Sequelize.HasManySetAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  addPhotos_model_lnk!: Sequelize.HasManyAddAssociationMixin<photos_model_lnk, photos_model_lnkId>;
  addPhotos_model_lnks!: Sequelize.HasManyAddAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  createPhotos_model_lnk!: Sequelize.HasManyCreateAssociationMixin<photos_model_lnk>;
  removePhotos_model_lnk!: Sequelize.HasManyRemoveAssociationMixin<photos_model_lnk, photos_model_lnkId>;
  removePhotos_model_lnks!: Sequelize.HasManyRemoveAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  hasPhotos_model_lnk!: Sequelize.HasManyHasAssociationMixin<photos_model_lnk, photos_model_lnkId>;
  hasPhotos_model_lnks!: Sequelize.HasManyHasAssociationsMixin<photos_model_lnk, photos_model_lnkId>;
  countPhotos_model_lnks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof models {
    return models.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    document_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_users',
        key: 'id'
      }
    },
    updated_by_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'admin_users',
        key: 'id'
      }
    },
    locale: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'models',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "idx_models_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_models_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "models_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "models_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "models_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "models_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
