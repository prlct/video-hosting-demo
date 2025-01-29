import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { abouts, aboutsId } from './abouts';
import type { admin_permissions, admin_permissionsId } from './admin_permissions';
import type { admin_roles, admin_rolesId } from './admin_roles';
import type { admin_users_roles_lnk, admin_users_roles_lnkId } from './admin_users_roles_lnk';
import type { categories, categoriesId } from './categories';
import type { files, filesId } from './files';
import type { globals, globalsId } from './globals';
import type { i18n_locale, i18n_localeId } from './i18n_locale';
import type { landings, landingsId } from './landings';
import type { models, modelsId } from './models';
import type { photos, photosId } from './photos';
import type { strapi_api_token_permissions, strapi_api_token_permissionsId } from './strapi_api_token_permissions';
import type { strapi_api_tokens, strapi_api_tokensId } from './strapi_api_tokens';
import type { strapi_history_versions, strapi_history_versionsId } from './strapi_history_versions';
import type { strapi_release_actions, strapi_release_actionsId } from './strapi_release_actions';
import type { strapi_releases, strapi_releasesId } from './strapi_releases';
import type { strapi_transfer_token_permissions, strapi_transfer_token_permissionsId } from './strapi_transfer_token_permissions';
import type { strapi_transfer_tokens, strapi_transfer_tokensId } from './strapi_transfer_tokens';
import type { strapi_workflows, strapi_workflowsId } from './strapi_workflows';
import type { strapi_workflows_stages, strapi_workflows_stagesId } from './strapi_workflows_stages';
import type { tags, tagsId } from './tags';
import type { up_permissions, up_permissionsId } from './up_permissions';
import type { up_roles, up_rolesId } from './up_roles';
import type { upload_folders, upload_foldersId } from './upload_folders';
import type { users, usersId } from './user';
import type { videos, videosId } from './videos';

export interface admin_usersAttributes {
  id: number;
  document_id?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  password?: string;
  reset_password_token?: string;
  registration_token?: string;
  is_active?: boolean;
  blocked?: boolean;
  prefered_language?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;
}

export type admin_usersPk = "id";
export type admin_usersId = admin_users[admin_usersPk];
export type admin_usersOptionalAttributes = "id" | "document_id" | "firstname" | "lastname" | "username" | "email" | "password" | "reset_password_token" | "registration_token" | "is_active" | "blocked" | "prefered_language" | "created_at" | "updated_at" | "published_at" | "created_by_id" | "updated_by_id" | "locale";
export type admin_usersCreationAttributes = Optional<admin_usersAttributes, admin_usersOptionalAttributes>;

export class admin_users extends Model<admin_usersAttributes, admin_usersCreationAttributes> implements admin_usersAttributes {
  id!: number;
  document_id?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  password?: string;
  reset_password_token?: string;
  registration_token?: string;
  is_active?: boolean;
  blocked?: boolean;
  prefered_language?: string;
  created_at?: Date;
  updated_at?: Date;
  published_at?: Date;
  created_by_id?: number;
  updated_by_id?: number;
  locale?: string;

  // admin_users hasMany abouts via created_by_id
  abouts!: abouts[];
  getAbouts!: Sequelize.HasManyGetAssociationsMixin<abouts>;
  setAbouts!: Sequelize.HasManySetAssociationsMixin<abouts, aboutsId>;
  addAbout!: Sequelize.HasManyAddAssociationMixin<abouts, aboutsId>;
  addAbouts!: Sequelize.HasManyAddAssociationsMixin<abouts, aboutsId>;
  createAbout!: Sequelize.HasManyCreateAssociationMixin<abouts>;
  removeAbout!: Sequelize.HasManyRemoveAssociationMixin<abouts, aboutsId>;
  removeAbouts!: Sequelize.HasManyRemoveAssociationsMixin<abouts, aboutsId>;
  hasAbout!: Sequelize.HasManyHasAssociationMixin<abouts, aboutsId>;
  hasAbouts!: Sequelize.HasManyHasAssociationsMixin<abouts, aboutsId>;
  countAbouts!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany abouts via updated_by_id
  updated_by_abouts!: abouts[];
  getUpdated_by_abouts!: Sequelize.HasManyGetAssociationsMixin<abouts>;
  setUpdated_by_abouts!: Sequelize.HasManySetAssociationsMixin<abouts, aboutsId>;
  addUpdated_by_about!: Sequelize.HasManyAddAssociationMixin<abouts, aboutsId>;
  addUpdated_by_abouts!: Sequelize.HasManyAddAssociationsMixin<abouts, aboutsId>;
  createUpdated_by_about!: Sequelize.HasManyCreateAssociationMixin<abouts>;
  removeUpdated_by_about!: Sequelize.HasManyRemoveAssociationMixin<abouts, aboutsId>;
  removeUpdated_by_abouts!: Sequelize.HasManyRemoveAssociationsMixin<abouts, aboutsId>;
  hasUpdated_by_about!: Sequelize.HasManyHasAssociationMixin<abouts, aboutsId>;
  hasUpdated_by_abouts!: Sequelize.HasManyHasAssociationsMixin<abouts, aboutsId>;
  countUpdated_by_abouts!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany admin_permissions via created_by_id
  admin_permissions!: admin_permissions[];
  getAdmin_permissions!: Sequelize.HasManyGetAssociationsMixin<admin_permissions>;
  setAdmin_permissions!: Sequelize.HasManySetAssociationsMixin<admin_permissions, admin_permissionsId>;
  addAdmin_permission!: Sequelize.HasManyAddAssociationMixin<admin_permissions, admin_permissionsId>;
  addAdmin_permissions!: Sequelize.HasManyAddAssociationsMixin<admin_permissions, admin_permissionsId>;
  createAdmin_permission!: Sequelize.HasManyCreateAssociationMixin<admin_permissions>;
  removeAdmin_permission!: Sequelize.HasManyRemoveAssociationMixin<admin_permissions, admin_permissionsId>;
  removeAdmin_permissions!: Sequelize.HasManyRemoveAssociationsMixin<admin_permissions, admin_permissionsId>;
  hasAdmin_permission!: Sequelize.HasManyHasAssociationMixin<admin_permissions, admin_permissionsId>;
  hasAdmin_permissions!: Sequelize.HasManyHasAssociationsMixin<admin_permissions, admin_permissionsId>;
  countAdmin_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany admin_permissions via updated_by_id
  updated_by_admin_permissions!: admin_permissions[];
  getUpdated_by_admin_permissions!: Sequelize.HasManyGetAssociationsMixin<admin_permissions>;
  setUpdated_by_admin_permissions!: Sequelize.HasManySetAssociationsMixin<admin_permissions, admin_permissionsId>;
  addUpdated_by_admin_permission!: Sequelize.HasManyAddAssociationMixin<admin_permissions, admin_permissionsId>;
  addUpdated_by_admin_permissions!: Sequelize.HasManyAddAssociationsMixin<admin_permissions, admin_permissionsId>;
  createUpdated_by_admin_permission!: Sequelize.HasManyCreateAssociationMixin<admin_permissions>;
  removeUpdated_by_admin_permission!: Sequelize.HasManyRemoveAssociationMixin<admin_permissions, admin_permissionsId>;
  removeUpdated_by_admin_permissions!: Sequelize.HasManyRemoveAssociationsMixin<admin_permissions, admin_permissionsId>;
  hasUpdated_by_admin_permission!: Sequelize.HasManyHasAssociationMixin<admin_permissions, admin_permissionsId>;
  hasUpdated_by_admin_permissions!: Sequelize.HasManyHasAssociationsMixin<admin_permissions, admin_permissionsId>;
  countUpdated_by_admin_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany admin_roles via created_by_id
  admin_roles!: admin_roles[];
  getAdmin_roles!: Sequelize.HasManyGetAssociationsMixin<admin_roles>;
  setAdmin_roles!: Sequelize.HasManySetAssociationsMixin<admin_roles, admin_rolesId>;
  addAdmin_role!: Sequelize.HasManyAddAssociationMixin<admin_roles, admin_rolesId>;
  addAdmin_roles!: Sequelize.HasManyAddAssociationsMixin<admin_roles, admin_rolesId>;
  createAdmin_role!: Sequelize.HasManyCreateAssociationMixin<admin_roles>;
  removeAdmin_role!: Sequelize.HasManyRemoveAssociationMixin<admin_roles, admin_rolesId>;
  removeAdmin_roles!: Sequelize.HasManyRemoveAssociationsMixin<admin_roles, admin_rolesId>;
  hasAdmin_role!: Sequelize.HasManyHasAssociationMixin<admin_roles, admin_rolesId>;
  hasAdmin_roles!: Sequelize.HasManyHasAssociationsMixin<admin_roles, admin_rolesId>;
  countAdmin_roles!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany admin_roles via updated_by_id
  updated_by_admin_roles!: admin_roles[];
  getUpdated_by_admin_roles!: Sequelize.HasManyGetAssociationsMixin<admin_roles>;
  setUpdated_by_admin_roles!: Sequelize.HasManySetAssociationsMixin<admin_roles, admin_rolesId>;
  addUpdated_by_admin_role!: Sequelize.HasManyAddAssociationMixin<admin_roles, admin_rolesId>;
  addUpdated_by_admin_roles!: Sequelize.HasManyAddAssociationsMixin<admin_roles, admin_rolesId>;
  createUpdated_by_admin_role!: Sequelize.HasManyCreateAssociationMixin<admin_roles>;
  removeUpdated_by_admin_role!: Sequelize.HasManyRemoveAssociationMixin<admin_roles, admin_rolesId>;
  removeUpdated_by_admin_roles!: Sequelize.HasManyRemoveAssociationsMixin<admin_roles, admin_rolesId>;
  hasUpdated_by_admin_role!: Sequelize.HasManyHasAssociationMixin<admin_roles, admin_rolesId>;
  hasUpdated_by_admin_roles!: Sequelize.HasManyHasAssociationsMixin<admin_roles, admin_rolesId>;
  countUpdated_by_admin_roles!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users belongsTo admin_users via created_by_id
  created_by!: admin_users;
  getCreated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setCreated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createCreated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // admin_users belongsTo admin_users via updated_by_id
  updated_by!: admin_users;
  getUpdated_by!: Sequelize.BelongsToGetAssociationMixin<admin_users>;
  setUpdated_by!: Sequelize.BelongsToSetAssociationMixin<admin_users, admin_usersId>;
  createUpdated_by!: Sequelize.BelongsToCreateAssociationMixin<admin_users>;
  // admin_users hasMany admin_users_roles_lnk via user_id
  admin_users_roles_lnks!: admin_users_roles_lnk[];
  getAdmin_users_roles_lnks!: Sequelize.HasManyGetAssociationsMixin<admin_users_roles_lnk>;
  setAdmin_users_roles_lnks!: Sequelize.HasManySetAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  addAdmin_users_roles_lnk!: Sequelize.HasManyAddAssociationMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  addAdmin_users_roles_lnks!: Sequelize.HasManyAddAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  createAdmin_users_roles_lnk!: Sequelize.HasManyCreateAssociationMixin<admin_users_roles_lnk>;
  removeAdmin_users_roles_lnk!: Sequelize.HasManyRemoveAssociationMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  removeAdmin_users_roles_lnks!: Sequelize.HasManyRemoveAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  hasAdmin_users_roles_lnk!: Sequelize.HasManyHasAssociationMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  hasAdmin_users_roles_lnks!: Sequelize.HasManyHasAssociationsMixin<admin_users_roles_lnk, admin_users_roles_lnkId>;
  countAdmin_users_roles_lnks!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany categories via created_by_id
  categories!: categories[];
  getCategories!: Sequelize.HasManyGetAssociationsMixin<categories>;
  setCategories!: Sequelize.HasManySetAssociationsMixin<categories, categoriesId>;
  addCategory!: Sequelize.HasManyAddAssociationMixin<categories, categoriesId>;
  addCategories!: Sequelize.HasManyAddAssociationsMixin<categories, categoriesId>;
  createCategory!: Sequelize.HasManyCreateAssociationMixin<categories>;
  removeCategory!: Sequelize.HasManyRemoveAssociationMixin<categories, categoriesId>;
  removeCategories!: Sequelize.HasManyRemoveAssociationsMixin<categories, categoriesId>;
  hasCategory!: Sequelize.HasManyHasAssociationMixin<categories, categoriesId>;
  hasCategories!: Sequelize.HasManyHasAssociationsMixin<categories, categoriesId>;
  countCategories!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany categories via updated_by_id
  updated_by_categories!: categories[];
  getUpdated_by_categories!: Sequelize.HasManyGetAssociationsMixin<categories>;
  setUpdated_by_categories!: Sequelize.HasManySetAssociationsMixin<categories, categoriesId>;
  addUpdated_by_category!: Sequelize.HasManyAddAssociationMixin<categories, categoriesId>;
  addUpdated_by_categories!: Sequelize.HasManyAddAssociationsMixin<categories, categoriesId>;
  createUpdated_by_category!: Sequelize.HasManyCreateAssociationMixin<categories>;
  removeUpdated_by_category!: Sequelize.HasManyRemoveAssociationMixin<categories, categoriesId>;
  removeUpdated_by_categories!: Sequelize.HasManyRemoveAssociationsMixin<categories, categoriesId>;
  hasUpdated_by_category!: Sequelize.HasManyHasAssociationMixin<categories, categoriesId>;
  hasUpdated_by_categories!: Sequelize.HasManyHasAssociationsMixin<categories, categoriesId>;
  countUpdated_by_categories!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany files via created_by_id
  files!: files[];
  getFiles!: Sequelize.HasManyGetAssociationsMixin<files>;
  setFiles!: Sequelize.HasManySetAssociationsMixin<files, filesId>;
  addFile!: Sequelize.HasManyAddAssociationMixin<files, filesId>;
  addFiles!: Sequelize.HasManyAddAssociationsMixin<files, filesId>;
  createFile!: Sequelize.HasManyCreateAssociationMixin<files>;
  removeFile!: Sequelize.HasManyRemoveAssociationMixin<files, filesId>;
  removeFiles!: Sequelize.HasManyRemoveAssociationsMixin<files, filesId>;
  hasFile!: Sequelize.HasManyHasAssociationMixin<files, filesId>;
  hasFiles!: Sequelize.HasManyHasAssociationsMixin<files, filesId>;
  countFiles!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany files via updated_by_id
  updated_by_files!: files[];
  getUpdated_by_files!: Sequelize.HasManyGetAssociationsMixin<files>;
  setUpdated_by_files!: Sequelize.HasManySetAssociationsMixin<files, filesId>;
  addUpdated_by_file!: Sequelize.HasManyAddAssociationMixin<files, filesId>;
  addUpdated_by_files!: Sequelize.HasManyAddAssociationsMixin<files, filesId>;
  createUpdated_by_file!: Sequelize.HasManyCreateAssociationMixin<files>;
  removeUpdated_by_file!: Sequelize.HasManyRemoveAssociationMixin<files, filesId>;
  removeUpdated_by_files!: Sequelize.HasManyRemoveAssociationsMixin<files, filesId>;
  hasUpdated_by_file!: Sequelize.HasManyHasAssociationMixin<files, filesId>;
  hasUpdated_by_files!: Sequelize.HasManyHasAssociationsMixin<files, filesId>;
  countUpdated_by_files!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany globals via created_by_id
  globals!: globals[];
  getGlobals!: Sequelize.HasManyGetAssociationsMixin<globals>;
  setGlobals!: Sequelize.HasManySetAssociationsMixin<globals, globalsId>;
  addGlobal!: Sequelize.HasManyAddAssociationMixin<globals, globalsId>;
  addGlobals!: Sequelize.HasManyAddAssociationsMixin<globals, globalsId>;
  createGlobal!: Sequelize.HasManyCreateAssociationMixin<globals>;
  removeGlobal!: Sequelize.HasManyRemoveAssociationMixin<globals, globalsId>;
  removeGlobals!: Sequelize.HasManyRemoveAssociationsMixin<globals, globalsId>;
  hasGlobal!: Sequelize.HasManyHasAssociationMixin<globals, globalsId>;
  hasGlobals!: Sequelize.HasManyHasAssociationsMixin<globals, globalsId>;
  countGlobals!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany globals via updated_by_id
  updated_by_globals!: globals[];
  getUpdated_by_globals!: Sequelize.HasManyGetAssociationsMixin<globals>;
  setUpdated_by_globals!: Sequelize.HasManySetAssociationsMixin<globals, globalsId>;
  addUpdated_by_global!: Sequelize.HasManyAddAssociationMixin<globals, globalsId>;
  addUpdated_by_globals!: Sequelize.HasManyAddAssociationsMixin<globals, globalsId>;
  createUpdated_by_global!: Sequelize.HasManyCreateAssociationMixin<globals>;
  removeUpdated_by_global!: Sequelize.HasManyRemoveAssociationMixin<globals, globalsId>;
  removeUpdated_by_globals!: Sequelize.HasManyRemoveAssociationsMixin<globals, globalsId>;
  hasUpdated_by_global!: Sequelize.HasManyHasAssociationMixin<globals, globalsId>;
  hasUpdated_by_globals!: Sequelize.HasManyHasAssociationsMixin<globals, globalsId>;
  countUpdated_by_globals!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany i18n_locale via created_by_id
  i18n_locales!: i18n_locale[];
  getI18n_locales!: Sequelize.HasManyGetAssociationsMixin<i18n_locale>;
  setI18n_locales!: Sequelize.HasManySetAssociationsMixin<i18n_locale, i18n_localeId>;
  addI18n_locale!: Sequelize.HasManyAddAssociationMixin<i18n_locale, i18n_localeId>;
  addI18n_locales!: Sequelize.HasManyAddAssociationsMixin<i18n_locale, i18n_localeId>;
  createI18n_locale!: Sequelize.HasManyCreateAssociationMixin<i18n_locale>;
  removeI18n_locale!: Sequelize.HasManyRemoveAssociationMixin<i18n_locale, i18n_localeId>;
  removeI18n_locales!: Sequelize.HasManyRemoveAssociationsMixin<i18n_locale, i18n_localeId>;
  hasI18n_locale!: Sequelize.HasManyHasAssociationMixin<i18n_locale, i18n_localeId>;
  hasI18n_locales!: Sequelize.HasManyHasAssociationsMixin<i18n_locale, i18n_localeId>;
  countI18n_locales!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany i18n_locale via updated_by_id
  updated_by_i18n_locales!: i18n_locale[];
  getUpdated_by_i18n_locales!: Sequelize.HasManyGetAssociationsMixin<i18n_locale>;
  setUpdated_by_i18n_locales!: Sequelize.HasManySetAssociationsMixin<i18n_locale, i18n_localeId>;
  addUpdated_by_i18n_locale!: Sequelize.HasManyAddAssociationMixin<i18n_locale, i18n_localeId>;
  addUpdated_by_i18n_locales!: Sequelize.HasManyAddAssociationsMixin<i18n_locale, i18n_localeId>;
  createUpdated_by_i18n_locale!: Sequelize.HasManyCreateAssociationMixin<i18n_locale>;
  removeUpdated_by_i18n_locale!: Sequelize.HasManyRemoveAssociationMixin<i18n_locale, i18n_localeId>;
  removeUpdated_by_i18n_locales!: Sequelize.HasManyRemoveAssociationsMixin<i18n_locale, i18n_localeId>;
  hasUpdated_by_i18n_locale!: Sequelize.HasManyHasAssociationMixin<i18n_locale, i18n_localeId>;
  hasUpdated_by_i18n_locales!: Sequelize.HasManyHasAssociationsMixin<i18n_locale, i18n_localeId>;
  countUpdated_by_i18n_locales!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany landings via created_by_id
  landings!: landings[];
  getLandings!: Sequelize.HasManyGetAssociationsMixin<landings>;
  setLandings!: Sequelize.HasManySetAssociationsMixin<landings, landingsId>;
  addLanding!: Sequelize.HasManyAddAssociationMixin<landings, landingsId>;
  addLandings!: Sequelize.HasManyAddAssociationsMixin<landings, landingsId>;
  createLanding!: Sequelize.HasManyCreateAssociationMixin<landings>;
  removeLanding!: Sequelize.HasManyRemoveAssociationMixin<landings, landingsId>;
  removeLandings!: Sequelize.HasManyRemoveAssociationsMixin<landings, landingsId>;
  hasLanding!: Sequelize.HasManyHasAssociationMixin<landings, landingsId>;
  hasLandings!: Sequelize.HasManyHasAssociationsMixin<landings, landingsId>;
  countLandings!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany landings via updated_by_id
  updated_by_landings!: landings[];
  getUpdated_by_landings!: Sequelize.HasManyGetAssociationsMixin<landings>;
  setUpdated_by_landings!: Sequelize.HasManySetAssociationsMixin<landings, landingsId>;
  addUpdated_by_landing!: Sequelize.HasManyAddAssociationMixin<landings, landingsId>;
  addUpdated_by_landings!: Sequelize.HasManyAddAssociationsMixin<landings, landingsId>;
  createUpdated_by_landing!: Sequelize.HasManyCreateAssociationMixin<landings>;
  removeUpdated_by_landing!: Sequelize.HasManyRemoveAssociationMixin<landings, landingsId>;
  removeUpdated_by_landings!: Sequelize.HasManyRemoveAssociationsMixin<landings, landingsId>;
  hasUpdated_by_landing!: Sequelize.HasManyHasAssociationMixin<landings, landingsId>;
  hasUpdated_by_landings!: Sequelize.HasManyHasAssociationsMixin<landings, landingsId>;
  countUpdated_by_landings!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany models via created_by_id
  models!: models[];
  getModels!: Sequelize.HasManyGetAssociationsMixin<models>;
  setModels!: Sequelize.HasManySetAssociationsMixin<models, modelsId>;
  addModel!: Sequelize.HasManyAddAssociationMixin<models, modelsId>;
  addModels!: Sequelize.HasManyAddAssociationsMixin<models, modelsId>;
  createModel!: Sequelize.HasManyCreateAssociationMixin<models>;
  removeModel!: Sequelize.HasManyRemoveAssociationMixin<models, modelsId>;
  removeModels!: Sequelize.HasManyRemoveAssociationsMixin<models, modelsId>;
  hasModel!: Sequelize.HasManyHasAssociationMixin<models, modelsId>;
  hasModels!: Sequelize.HasManyHasAssociationsMixin<models, modelsId>;
  countModels!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany models via updated_by_id
  updated_by_models!: models[];
  getUpdated_by_models!: Sequelize.HasManyGetAssociationsMixin<models>;
  setUpdated_by_models!: Sequelize.HasManySetAssociationsMixin<models, modelsId>;
  addUpdated_by_model!: Sequelize.HasManyAddAssociationMixin<models, modelsId>;
  addUpdated_by_models!: Sequelize.HasManyAddAssociationsMixin<models, modelsId>;
  createUpdated_by_model!: Sequelize.HasManyCreateAssociationMixin<models>;
  removeUpdated_by_model!: Sequelize.HasManyRemoveAssociationMixin<models, modelsId>;
  removeUpdated_by_models!: Sequelize.HasManyRemoveAssociationsMixin<models, modelsId>;
  hasUpdated_by_model!: Sequelize.HasManyHasAssociationMixin<models, modelsId>;
  hasUpdated_by_models!: Sequelize.HasManyHasAssociationsMixin<models, modelsId>;
  countUpdated_by_models!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany photos via created_by_id
  photos!: photos[];
  getPhotos!: Sequelize.HasManyGetAssociationsMixin<photos>;
  setPhotos!: Sequelize.HasManySetAssociationsMixin<photos, photosId>;
  addPhoto!: Sequelize.HasManyAddAssociationMixin<photos, photosId>;
  addPhotos!: Sequelize.HasManyAddAssociationsMixin<photos, photosId>;
  createPhoto!: Sequelize.HasManyCreateAssociationMixin<photos>;
  removePhoto!: Sequelize.HasManyRemoveAssociationMixin<photos, photosId>;
  removePhotos!: Sequelize.HasManyRemoveAssociationsMixin<photos, photosId>;
  hasPhoto!: Sequelize.HasManyHasAssociationMixin<photos, photosId>;
  hasPhotos!: Sequelize.HasManyHasAssociationsMixin<photos, photosId>;
  countPhotos!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany photos via updated_by_id
  updated_by_photos!: photos[];
  getUpdated_by_photos!: Sequelize.HasManyGetAssociationsMixin<photos>;
  setUpdated_by_photos!: Sequelize.HasManySetAssociationsMixin<photos, photosId>;
  addUpdated_by_photo!: Sequelize.HasManyAddAssociationMixin<photos, photosId>;
  addUpdated_by_photos!: Sequelize.HasManyAddAssociationsMixin<photos, photosId>;
  createUpdated_by_photo!: Sequelize.HasManyCreateAssociationMixin<photos>;
  removeUpdated_by_photo!: Sequelize.HasManyRemoveAssociationMixin<photos, photosId>;
  removeUpdated_by_photos!: Sequelize.HasManyRemoveAssociationsMixin<photos, photosId>;
  hasUpdated_by_photo!: Sequelize.HasManyHasAssociationMixin<photos, photosId>;
  hasUpdated_by_photos!: Sequelize.HasManyHasAssociationsMixin<photos, photosId>;
  countUpdated_by_photos!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_api_token_permissions via created_by_id
  strapi_api_token_permissions!: strapi_api_token_permissions[];
  getStrapi_api_token_permissions!: Sequelize.HasManyGetAssociationsMixin<strapi_api_token_permissions>;
  setStrapi_api_token_permissions!: Sequelize.HasManySetAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  addStrapi_api_token_permission!: Sequelize.HasManyAddAssociationMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  addStrapi_api_token_permissions!: Sequelize.HasManyAddAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  createStrapi_api_token_permission!: Sequelize.HasManyCreateAssociationMixin<strapi_api_token_permissions>;
  removeStrapi_api_token_permission!: Sequelize.HasManyRemoveAssociationMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  removeStrapi_api_token_permissions!: Sequelize.HasManyRemoveAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  hasStrapi_api_token_permission!: Sequelize.HasManyHasAssociationMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  hasStrapi_api_token_permissions!: Sequelize.HasManyHasAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  countStrapi_api_token_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_api_token_permissions via updated_by_id
  updated_by_strapi_api_token_permissions!: strapi_api_token_permissions[];
  getUpdated_by_strapi_api_token_permissions!: Sequelize.HasManyGetAssociationsMixin<strapi_api_token_permissions>;
  setUpdated_by_strapi_api_token_permissions!: Sequelize.HasManySetAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  addUpdated_by_strapi_api_token_permission!: Sequelize.HasManyAddAssociationMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  addUpdated_by_strapi_api_token_permissions!: Sequelize.HasManyAddAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  createUpdated_by_strapi_api_token_permission!: Sequelize.HasManyCreateAssociationMixin<strapi_api_token_permissions>;
  removeUpdated_by_strapi_api_token_permission!: Sequelize.HasManyRemoveAssociationMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  removeUpdated_by_strapi_api_token_permissions!: Sequelize.HasManyRemoveAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  hasUpdated_by_strapi_api_token_permission!: Sequelize.HasManyHasAssociationMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  hasUpdated_by_strapi_api_token_permissions!: Sequelize.HasManyHasAssociationsMixin<strapi_api_token_permissions, strapi_api_token_permissionsId>;
  countUpdated_by_strapi_api_token_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_api_tokens via created_by_id
  strapi_api_tokens!: strapi_api_tokens[];
  getStrapi_api_tokens!: Sequelize.HasManyGetAssociationsMixin<strapi_api_tokens>;
  setStrapi_api_tokens!: Sequelize.HasManySetAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  addStrapi_api_token!: Sequelize.HasManyAddAssociationMixin<strapi_api_tokens, strapi_api_tokensId>;
  addStrapi_api_tokens!: Sequelize.HasManyAddAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  createStrapi_api_token!: Sequelize.HasManyCreateAssociationMixin<strapi_api_tokens>;
  removeStrapi_api_token!: Sequelize.HasManyRemoveAssociationMixin<strapi_api_tokens, strapi_api_tokensId>;
  removeStrapi_api_tokens!: Sequelize.HasManyRemoveAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  hasStrapi_api_token!: Sequelize.HasManyHasAssociationMixin<strapi_api_tokens, strapi_api_tokensId>;
  hasStrapi_api_tokens!: Sequelize.HasManyHasAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  countStrapi_api_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_api_tokens via updated_by_id
  updated_by_strapi_api_tokens!: strapi_api_tokens[];
  getUpdated_by_strapi_api_tokens!: Sequelize.HasManyGetAssociationsMixin<strapi_api_tokens>;
  setUpdated_by_strapi_api_tokens!: Sequelize.HasManySetAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  addUpdated_by_strapi_api_token!: Sequelize.HasManyAddAssociationMixin<strapi_api_tokens, strapi_api_tokensId>;
  addUpdated_by_strapi_api_tokens!: Sequelize.HasManyAddAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  createUpdated_by_strapi_api_token!: Sequelize.HasManyCreateAssociationMixin<strapi_api_tokens>;
  removeUpdated_by_strapi_api_token!: Sequelize.HasManyRemoveAssociationMixin<strapi_api_tokens, strapi_api_tokensId>;
  removeUpdated_by_strapi_api_tokens!: Sequelize.HasManyRemoveAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  hasUpdated_by_strapi_api_token!: Sequelize.HasManyHasAssociationMixin<strapi_api_tokens, strapi_api_tokensId>;
  hasUpdated_by_strapi_api_tokens!: Sequelize.HasManyHasAssociationsMixin<strapi_api_tokens, strapi_api_tokensId>;
  countUpdated_by_strapi_api_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_history_versions via created_by_id
  strapi_history_versions!: strapi_history_versions[];
  getStrapi_history_versions!: Sequelize.HasManyGetAssociationsMixin<strapi_history_versions>;
  setStrapi_history_versions!: Sequelize.HasManySetAssociationsMixin<strapi_history_versions, strapi_history_versionsId>;
  addStrapi_history_version!: Sequelize.HasManyAddAssociationMixin<strapi_history_versions, strapi_history_versionsId>;
  addStrapi_history_versions!: Sequelize.HasManyAddAssociationsMixin<strapi_history_versions, strapi_history_versionsId>;
  createStrapi_history_version!: Sequelize.HasManyCreateAssociationMixin<strapi_history_versions>;
  removeStrapi_history_version!: Sequelize.HasManyRemoveAssociationMixin<strapi_history_versions, strapi_history_versionsId>;
  removeStrapi_history_versions!: Sequelize.HasManyRemoveAssociationsMixin<strapi_history_versions, strapi_history_versionsId>;
  hasStrapi_history_version!: Sequelize.HasManyHasAssociationMixin<strapi_history_versions, strapi_history_versionsId>;
  hasStrapi_history_versions!: Sequelize.HasManyHasAssociationsMixin<strapi_history_versions, strapi_history_versionsId>;
  countStrapi_history_versions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_release_actions via created_by_id
  strapi_release_actions!: strapi_release_actions[];
  getStrapi_release_actions!: Sequelize.HasManyGetAssociationsMixin<strapi_release_actions>;
  setStrapi_release_actions!: Sequelize.HasManySetAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  addStrapi_release_action!: Sequelize.HasManyAddAssociationMixin<strapi_release_actions, strapi_release_actionsId>;
  addStrapi_release_actions!: Sequelize.HasManyAddAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  createStrapi_release_action!: Sequelize.HasManyCreateAssociationMixin<strapi_release_actions>;
  removeStrapi_release_action!: Sequelize.HasManyRemoveAssociationMixin<strapi_release_actions, strapi_release_actionsId>;
  removeStrapi_release_actions!: Sequelize.HasManyRemoveAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  hasStrapi_release_action!: Sequelize.HasManyHasAssociationMixin<strapi_release_actions, strapi_release_actionsId>;
  hasStrapi_release_actions!: Sequelize.HasManyHasAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  countStrapi_release_actions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_release_actions via updated_by_id
  updated_by_strapi_release_actions!: strapi_release_actions[];
  getUpdated_by_strapi_release_actions!: Sequelize.HasManyGetAssociationsMixin<strapi_release_actions>;
  setUpdated_by_strapi_release_actions!: Sequelize.HasManySetAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  addUpdated_by_strapi_release_action!: Sequelize.HasManyAddAssociationMixin<strapi_release_actions, strapi_release_actionsId>;
  addUpdated_by_strapi_release_actions!: Sequelize.HasManyAddAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  createUpdated_by_strapi_release_action!: Sequelize.HasManyCreateAssociationMixin<strapi_release_actions>;
  removeUpdated_by_strapi_release_action!: Sequelize.HasManyRemoveAssociationMixin<strapi_release_actions, strapi_release_actionsId>;
  removeUpdated_by_strapi_release_actions!: Sequelize.HasManyRemoveAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  hasUpdated_by_strapi_release_action!: Sequelize.HasManyHasAssociationMixin<strapi_release_actions, strapi_release_actionsId>;
  hasUpdated_by_strapi_release_actions!: Sequelize.HasManyHasAssociationsMixin<strapi_release_actions, strapi_release_actionsId>;
  countUpdated_by_strapi_release_actions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_releases via created_by_id
  strapi_releases!: strapi_releases[];
  getStrapi_releases!: Sequelize.HasManyGetAssociationsMixin<strapi_releases>;
  setStrapi_releases!: Sequelize.HasManySetAssociationsMixin<strapi_releases, strapi_releasesId>;
  addStrapi_release!: Sequelize.HasManyAddAssociationMixin<strapi_releases, strapi_releasesId>;
  addStrapi_releases!: Sequelize.HasManyAddAssociationsMixin<strapi_releases, strapi_releasesId>;
  createStrapi_release!: Sequelize.HasManyCreateAssociationMixin<strapi_releases>;
  removeStrapi_release!: Sequelize.HasManyRemoveAssociationMixin<strapi_releases, strapi_releasesId>;
  removeStrapi_releases!: Sequelize.HasManyRemoveAssociationsMixin<strapi_releases, strapi_releasesId>;
  hasStrapi_release!: Sequelize.HasManyHasAssociationMixin<strapi_releases, strapi_releasesId>;
  hasStrapi_releases!: Sequelize.HasManyHasAssociationsMixin<strapi_releases, strapi_releasesId>;
  countStrapi_releases!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_releases via updated_by_id
  updated_by_strapi_releases!: strapi_releases[];
  getUpdated_by_strapi_releases!: Sequelize.HasManyGetAssociationsMixin<strapi_releases>;
  setUpdated_by_strapi_releases!: Sequelize.HasManySetAssociationsMixin<strapi_releases, strapi_releasesId>;
  addUpdated_by_strapi_release!: Sequelize.HasManyAddAssociationMixin<strapi_releases, strapi_releasesId>;
  addUpdated_by_strapi_releases!: Sequelize.HasManyAddAssociationsMixin<strapi_releases, strapi_releasesId>;
  createUpdated_by_strapi_release!: Sequelize.HasManyCreateAssociationMixin<strapi_releases>;
  removeUpdated_by_strapi_release!: Sequelize.HasManyRemoveAssociationMixin<strapi_releases, strapi_releasesId>;
  removeUpdated_by_strapi_releases!: Sequelize.HasManyRemoveAssociationsMixin<strapi_releases, strapi_releasesId>;
  hasUpdated_by_strapi_release!: Sequelize.HasManyHasAssociationMixin<strapi_releases, strapi_releasesId>;
  hasUpdated_by_strapi_releases!: Sequelize.HasManyHasAssociationsMixin<strapi_releases, strapi_releasesId>;
  countUpdated_by_strapi_releases!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_transfer_token_permissions via created_by_id
  strapi_transfer_token_permissions!: strapi_transfer_token_permissions[];
  getStrapi_transfer_token_permissions!: Sequelize.HasManyGetAssociationsMixin<strapi_transfer_token_permissions>;
  setStrapi_transfer_token_permissions!: Sequelize.HasManySetAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  addStrapi_transfer_token_permission!: Sequelize.HasManyAddAssociationMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  addStrapi_transfer_token_permissions!: Sequelize.HasManyAddAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  createStrapi_transfer_token_permission!: Sequelize.HasManyCreateAssociationMixin<strapi_transfer_token_permissions>;
  removeStrapi_transfer_token_permission!: Sequelize.HasManyRemoveAssociationMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  removeStrapi_transfer_token_permissions!: Sequelize.HasManyRemoveAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  hasStrapi_transfer_token_permission!: Sequelize.HasManyHasAssociationMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  hasStrapi_transfer_token_permissions!: Sequelize.HasManyHasAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  countStrapi_transfer_token_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_transfer_token_permissions via updated_by_id
  updated_by_strapi_transfer_token_permissions!: strapi_transfer_token_permissions[];
  getUpdated_by_strapi_transfer_token_permissions!: Sequelize.HasManyGetAssociationsMixin<strapi_transfer_token_permissions>;
  setUpdated_by_strapi_transfer_token_permissions!: Sequelize.HasManySetAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  addUpdated_by_strapi_transfer_token_permission!: Sequelize.HasManyAddAssociationMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  addUpdated_by_strapi_transfer_token_permissions!: Sequelize.HasManyAddAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  createUpdated_by_strapi_transfer_token_permission!: Sequelize.HasManyCreateAssociationMixin<strapi_transfer_token_permissions>;
  removeUpdated_by_strapi_transfer_token_permission!: Sequelize.HasManyRemoveAssociationMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  removeUpdated_by_strapi_transfer_token_permissions!: Sequelize.HasManyRemoveAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  hasUpdated_by_strapi_transfer_token_permission!: Sequelize.HasManyHasAssociationMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  hasUpdated_by_strapi_transfer_token_permissions!: Sequelize.HasManyHasAssociationsMixin<strapi_transfer_token_permissions, strapi_transfer_token_permissionsId>;
  countUpdated_by_strapi_transfer_token_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_transfer_tokens via created_by_id
  strapi_transfer_tokens!: strapi_transfer_tokens[];
  getStrapi_transfer_tokens!: Sequelize.HasManyGetAssociationsMixin<strapi_transfer_tokens>;
  setStrapi_transfer_tokens!: Sequelize.HasManySetAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  addStrapi_transfer_token!: Sequelize.HasManyAddAssociationMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  addStrapi_transfer_tokens!: Sequelize.HasManyAddAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  createStrapi_transfer_token!: Sequelize.HasManyCreateAssociationMixin<strapi_transfer_tokens>;
  removeStrapi_transfer_token!: Sequelize.HasManyRemoveAssociationMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  removeStrapi_transfer_tokens!: Sequelize.HasManyRemoveAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  hasStrapi_transfer_token!: Sequelize.HasManyHasAssociationMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  hasStrapi_transfer_tokens!: Sequelize.HasManyHasAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  countStrapi_transfer_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_transfer_tokens via updated_by_id
  updated_by_strapi_transfer_tokens!: strapi_transfer_tokens[];
  getUpdated_by_strapi_transfer_tokens!: Sequelize.HasManyGetAssociationsMixin<strapi_transfer_tokens>;
  setUpdated_by_strapi_transfer_tokens!: Sequelize.HasManySetAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  addUpdated_by_strapi_transfer_token!: Sequelize.HasManyAddAssociationMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  addUpdated_by_strapi_transfer_tokens!: Sequelize.HasManyAddAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  createUpdated_by_strapi_transfer_token!: Sequelize.HasManyCreateAssociationMixin<strapi_transfer_tokens>;
  removeUpdated_by_strapi_transfer_token!: Sequelize.HasManyRemoveAssociationMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  removeUpdated_by_strapi_transfer_tokens!: Sequelize.HasManyRemoveAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  hasUpdated_by_strapi_transfer_token!: Sequelize.HasManyHasAssociationMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  hasUpdated_by_strapi_transfer_tokens!: Sequelize.HasManyHasAssociationsMixin<strapi_transfer_tokens, strapi_transfer_tokensId>;
  countUpdated_by_strapi_transfer_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_workflows via created_by_id
  strapi_workflows!: strapi_workflows[];
  getStrapi_workflows!: Sequelize.HasManyGetAssociationsMixin<strapi_workflows>;
  setStrapi_workflows!: Sequelize.HasManySetAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  addStrapi_workflow!: Sequelize.HasManyAddAssociationMixin<strapi_workflows, strapi_workflowsId>;
  addStrapi_workflows!: Sequelize.HasManyAddAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  createStrapi_workflow!: Sequelize.HasManyCreateAssociationMixin<strapi_workflows>;
  removeStrapi_workflow!: Sequelize.HasManyRemoveAssociationMixin<strapi_workflows, strapi_workflowsId>;
  removeStrapi_workflows!: Sequelize.HasManyRemoveAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  hasStrapi_workflow!: Sequelize.HasManyHasAssociationMixin<strapi_workflows, strapi_workflowsId>;
  hasStrapi_workflows!: Sequelize.HasManyHasAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  countStrapi_workflows!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_workflows via updated_by_id
  updated_by_strapi_workflows!: strapi_workflows[];
  getUpdated_by_strapi_workflows!: Sequelize.HasManyGetAssociationsMixin<strapi_workflows>;
  setUpdated_by_strapi_workflows!: Sequelize.HasManySetAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  addUpdated_by_strapi_workflow!: Sequelize.HasManyAddAssociationMixin<strapi_workflows, strapi_workflowsId>;
  addUpdated_by_strapi_workflows!: Sequelize.HasManyAddAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  createUpdated_by_strapi_workflow!: Sequelize.HasManyCreateAssociationMixin<strapi_workflows>;
  removeUpdated_by_strapi_workflow!: Sequelize.HasManyRemoveAssociationMixin<strapi_workflows, strapi_workflowsId>;
  removeUpdated_by_strapi_workflows!: Sequelize.HasManyRemoveAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  hasUpdated_by_strapi_workflow!: Sequelize.HasManyHasAssociationMixin<strapi_workflows, strapi_workflowsId>;
  hasUpdated_by_strapi_workflows!: Sequelize.HasManyHasAssociationsMixin<strapi_workflows, strapi_workflowsId>;
  countUpdated_by_strapi_workflows!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_workflows_stages via created_by_id
  strapi_workflows_stages!: strapi_workflows_stages[];
  getStrapi_workflows_stages!: Sequelize.HasManyGetAssociationsMixin<strapi_workflows_stages>;
  setStrapi_workflows_stages!: Sequelize.HasManySetAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  addStrapi_workflows_stage!: Sequelize.HasManyAddAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  addStrapi_workflows_stages!: Sequelize.HasManyAddAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  createStrapi_workflows_stage!: Sequelize.HasManyCreateAssociationMixin<strapi_workflows_stages>;
  removeStrapi_workflows_stage!: Sequelize.HasManyRemoveAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  removeStrapi_workflows_stages!: Sequelize.HasManyRemoveAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  hasStrapi_workflows_stage!: Sequelize.HasManyHasAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  hasStrapi_workflows_stages!: Sequelize.HasManyHasAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  countStrapi_workflows_stages!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany strapi_workflows_stages via updated_by_id
  updated_by_strapi_workflows_stages!: strapi_workflows_stages[];
  getUpdated_by_strapi_workflows_stages!: Sequelize.HasManyGetAssociationsMixin<strapi_workflows_stages>;
  setUpdated_by_strapi_workflows_stages!: Sequelize.HasManySetAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  addUpdated_by_strapi_workflows_stage!: Sequelize.HasManyAddAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  addUpdated_by_strapi_workflows_stages!: Sequelize.HasManyAddAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  createUpdated_by_strapi_workflows_stage!: Sequelize.HasManyCreateAssociationMixin<strapi_workflows_stages>;
  removeUpdated_by_strapi_workflows_stage!: Sequelize.HasManyRemoveAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  removeUpdated_by_strapi_workflows_stages!: Sequelize.HasManyRemoveAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  hasUpdated_by_strapi_workflows_stage!: Sequelize.HasManyHasAssociationMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  hasUpdated_by_strapi_workflows_stages!: Sequelize.HasManyHasAssociationsMixin<strapi_workflows_stages, strapi_workflows_stagesId>;
  countUpdated_by_strapi_workflows_stages!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany tags via created_by_id
  tags!: tags[];
  getTags!: Sequelize.HasManyGetAssociationsMixin<tags>;
  setTags!: Sequelize.HasManySetAssociationsMixin<tags, tagsId>;
  addTag!: Sequelize.HasManyAddAssociationMixin<tags, tagsId>;
  addTags!: Sequelize.HasManyAddAssociationsMixin<tags, tagsId>;
  createTag!: Sequelize.HasManyCreateAssociationMixin<tags>;
  removeTag!: Sequelize.HasManyRemoveAssociationMixin<tags, tagsId>;
  removeTags!: Sequelize.HasManyRemoveAssociationsMixin<tags, tagsId>;
  hasTag!: Sequelize.HasManyHasAssociationMixin<tags, tagsId>;
  hasTags!: Sequelize.HasManyHasAssociationsMixin<tags, tagsId>;
  countTags!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany tags via updated_by_id
  updated_by_tags!: tags[];
  getUpdated_by_tags!: Sequelize.HasManyGetAssociationsMixin<tags>;
  setUpdated_by_tags!: Sequelize.HasManySetAssociationsMixin<tags, tagsId>;
  addUpdated_by_tag!: Sequelize.HasManyAddAssociationMixin<tags, tagsId>;
  addUpdated_by_tags!: Sequelize.HasManyAddAssociationsMixin<tags, tagsId>;
  createUpdated_by_tag!: Sequelize.HasManyCreateAssociationMixin<tags>;
  removeUpdated_by_tag!: Sequelize.HasManyRemoveAssociationMixin<tags, tagsId>;
  removeUpdated_by_tags!: Sequelize.HasManyRemoveAssociationsMixin<tags, tagsId>;
  hasUpdated_by_tag!: Sequelize.HasManyHasAssociationMixin<tags, tagsId>;
  hasUpdated_by_tags!: Sequelize.HasManyHasAssociationsMixin<tags, tagsId>;
  countUpdated_by_tags!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany up_permissions via created_by_id
  up_permissions!: up_permissions[];
  getUp_permissions!: Sequelize.HasManyGetAssociationsMixin<up_permissions>;
  setUp_permissions!: Sequelize.HasManySetAssociationsMixin<up_permissions, up_permissionsId>;
  addUp_permission!: Sequelize.HasManyAddAssociationMixin<up_permissions, up_permissionsId>;
  addUp_permissions!: Sequelize.HasManyAddAssociationsMixin<up_permissions, up_permissionsId>;
  createUp_permission!: Sequelize.HasManyCreateAssociationMixin<up_permissions>;
  removeUp_permission!: Sequelize.HasManyRemoveAssociationMixin<up_permissions, up_permissionsId>;
  removeUp_permissions!: Sequelize.HasManyRemoveAssociationsMixin<up_permissions, up_permissionsId>;
  hasUp_permission!: Sequelize.HasManyHasAssociationMixin<up_permissions, up_permissionsId>;
  hasUp_permissions!: Sequelize.HasManyHasAssociationsMixin<up_permissions, up_permissionsId>;
  countUp_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany up_permissions via updated_by_id
  updated_by_up_permissions!: up_permissions[];
  getUpdated_by_up_permissions!: Sequelize.HasManyGetAssociationsMixin<up_permissions>;
  setUpdated_by_up_permissions!: Sequelize.HasManySetAssociationsMixin<up_permissions, up_permissionsId>;
  addUpdated_by_up_permission!: Sequelize.HasManyAddAssociationMixin<up_permissions, up_permissionsId>;
  addUpdated_by_up_permissions!: Sequelize.HasManyAddAssociationsMixin<up_permissions, up_permissionsId>;
  createUpdated_by_up_permission!: Sequelize.HasManyCreateAssociationMixin<up_permissions>;
  removeUpdated_by_up_permission!: Sequelize.HasManyRemoveAssociationMixin<up_permissions, up_permissionsId>;
  removeUpdated_by_up_permissions!: Sequelize.HasManyRemoveAssociationsMixin<up_permissions, up_permissionsId>;
  hasUpdated_by_up_permission!: Sequelize.HasManyHasAssociationMixin<up_permissions, up_permissionsId>;
  hasUpdated_by_up_permissions!: Sequelize.HasManyHasAssociationsMixin<up_permissions, up_permissionsId>;
  countUpdated_by_up_permissions!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany up_roles via created_by_id
  up_roles!: up_roles[];
  getUp_roles!: Sequelize.HasManyGetAssociationsMixin<up_roles>;
  setUp_roles!: Sequelize.HasManySetAssociationsMixin<up_roles, up_rolesId>;
  addUp_role!: Sequelize.HasManyAddAssociationMixin<up_roles, up_rolesId>;
  addUp_roles!: Sequelize.HasManyAddAssociationsMixin<up_roles, up_rolesId>;
  createUp_role!: Sequelize.HasManyCreateAssociationMixin<up_roles>;
  removeUp_role!: Sequelize.HasManyRemoveAssociationMixin<up_roles, up_rolesId>;
  removeUp_roles!: Sequelize.HasManyRemoveAssociationsMixin<up_roles, up_rolesId>;
  hasUp_role!: Sequelize.HasManyHasAssociationMixin<up_roles, up_rolesId>;
  hasUp_roles!: Sequelize.HasManyHasAssociationsMixin<up_roles, up_rolesId>;
  countUp_roles!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany up_roles via updated_by_id
  updated_by_up_roles!: up_roles[];
  getUpdated_by_up_roles!: Sequelize.HasManyGetAssociationsMixin<up_roles>;
  setUpdated_by_up_roles!: Sequelize.HasManySetAssociationsMixin<up_roles, up_rolesId>;
  addUpdated_by_up_role!: Sequelize.HasManyAddAssociationMixin<up_roles, up_rolesId>;
  addUpdated_by_up_roles!: Sequelize.HasManyAddAssociationsMixin<up_roles, up_rolesId>;
  createUpdated_by_up_role!: Sequelize.HasManyCreateAssociationMixin<up_roles>;
  removeUpdated_by_up_role!: Sequelize.HasManyRemoveAssociationMixin<up_roles, up_rolesId>;
  removeUpdated_by_up_roles!: Sequelize.HasManyRemoveAssociationsMixin<up_roles, up_rolesId>;
  hasUpdated_by_up_role!: Sequelize.HasManyHasAssociationMixin<up_roles, up_rolesId>;
  hasUpdated_by_up_roles!: Sequelize.HasManyHasAssociationsMixin<up_roles, up_rolesId>;
  countUpdated_by_up_roles!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany upload_folders via created_by_id
  upload_folders!: upload_folders[];
  getUpload_folders!: Sequelize.HasManyGetAssociationsMixin<upload_folders>;
  setUpload_folders!: Sequelize.HasManySetAssociationsMixin<upload_folders, upload_foldersId>;
  addUpload_folder!: Sequelize.HasManyAddAssociationMixin<upload_folders, upload_foldersId>;
  addUpload_folders!: Sequelize.HasManyAddAssociationsMixin<upload_folders, upload_foldersId>;
  createUpload_folder!: Sequelize.HasManyCreateAssociationMixin<upload_folders>;
  removeUpload_folder!: Sequelize.HasManyRemoveAssociationMixin<upload_folders, upload_foldersId>;
  removeUpload_folders!: Sequelize.HasManyRemoveAssociationsMixin<upload_folders, upload_foldersId>;
  hasUpload_folder!: Sequelize.HasManyHasAssociationMixin<upload_folders, upload_foldersId>;
  hasUpload_folders!: Sequelize.HasManyHasAssociationsMixin<upload_folders, upload_foldersId>;
  countUpload_folders!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany upload_folders via updated_by_id
  updated_by_upload_folders!: upload_folders[];
  getUpdated_by_upload_folders!: Sequelize.HasManyGetAssociationsMixin<upload_folders>;
  setUpdated_by_upload_folders!: Sequelize.HasManySetAssociationsMixin<upload_folders, upload_foldersId>;
  addUpdated_by_upload_folder!: Sequelize.HasManyAddAssociationMixin<upload_folders, upload_foldersId>;
  addUpdated_by_upload_folders!: Sequelize.HasManyAddAssociationsMixin<upload_folders, upload_foldersId>;
  createUpdated_by_upload_folder!: Sequelize.HasManyCreateAssociationMixin<upload_folders>;
  removeUpdated_by_upload_folder!: Sequelize.HasManyRemoveAssociationMixin<upload_folders, upload_foldersId>;
  removeUpdated_by_upload_folders!: Sequelize.HasManyRemoveAssociationsMixin<upload_folders, upload_foldersId>;
  hasUpdated_by_upload_folder!: Sequelize.HasManyHasAssociationMixin<upload_folders, upload_foldersId>;
  hasUpdated_by_upload_folders!: Sequelize.HasManyHasAssociationsMixin<upload_folders, upload_foldersId>;
  countUpdated_by_upload_folders!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany users via created_by_id
  users!: users[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<users>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<users, usersId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<users, usersId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<users, usersId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<users>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<users, usersId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<users, usersId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<users, usersId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<users, usersId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany users via updated_by_id
  updated_by_users!: users[];
  getUpdated_by_users!: Sequelize.HasManyGetAssociationsMixin<users>;
  setUpdated_by_users!: Sequelize.HasManySetAssociationsMixin<users, usersId>;
  addUpdated_by_user!: Sequelize.HasManyAddAssociationMixin<users, usersId>;
  addUpdated_by_users!: Sequelize.HasManyAddAssociationsMixin<users, usersId>;
  createUpdated_by_user!: Sequelize.HasManyCreateAssociationMixin<users>;
  removeUpdated_by_user!: Sequelize.HasManyRemoveAssociationMixin<users, usersId>;
  removeUpdated_by_users!: Sequelize.HasManyRemoveAssociationsMixin<users, usersId>;
  hasUpdated_by_user!: Sequelize.HasManyHasAssociationMixin<users, usersId>;
  hasUpdated_by_users!: Sequelize.HasManyHasAssociationsMixin<users, usersId>;
  countUpdated_by_users!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany videos via created_by_id
  videos!: videos[];
  getVideos!: Sequelize.HasManyGetAssociationsMixin<videos>;
  setVideos!: Sequelize.HasManySetAssociationsMixin<videos, videosId>;
  addVideo!: Sequelize.HasManyAddAssociationMixin<videos, videosId>;
  addVideos!: Sequelize.HasManyAddAssociationsMixin<videos, videosId>;
  createVideo!: Sequelize.HasManyCreateAssociationMixin<videos>;
  removeVideo!: Sequelize.HasManyRemoveAssociationMixin<videos, videosId>;
  removeVideos!: Sequelize.HasManyRemoveAssociationsMixin<videos, videosId>;
  hasVideo!: Sequelize.HasManyHasAssociationMixin<videos, videosId>;
  hasVideos!: Sequelize.HasManyHasAssociationsMixin<videos, videosId>;
  countVideos!: Sequelize.HasManyCountAssociationsMixin;
  // admin_users hasMany videos via updated_by_id
  updated_by_videos!: videos[];
  getUpdated_by_videos!: Sequelize.HasManyGetAssociationsMixin<videos>;
  setUpdated_by_videos!: Sequelize.HasManySetAssociationsMixin<videos, videosId>;
  addUpdated_by_video!: Sequelize.HasManyAddAssociationMixin<videos, videosId>;
  addUpdated_by_videos!: Sequelize.HasManyAddAssociationsMixin<videos, videosId>;
  createUpdated_by_video!: Sequelize.HasManyCreateAssociationMixin<videos>;
  removeUpdated_by_video!: Sequelize.HasManyRemoveAssociationMixin<videos, videosId>;
  removeUpdated_by_videos!: Sequelize.HasManyRemoveAssociationsMixin<videos, videosId>;
  hasUpdated_by_video!: Sequelize.HasManyHasAssociationMixin<videos, videosId>;
  hasUpdated_by_videos!: Sequelize.HasManyHasAssociationsMixin<videos, videosId>;
  countUpdated_by_videos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof admin_users {
    return admin_users.init({
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
    firstname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reset_password_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    registration_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    blocked: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    prefered_language: {
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
    tableName: 'admin_users',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "admin_users_created_by_id_fk",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "admin_users_documents_idx",
        fields: [
          { name: "document_id" },
          { name: "locale" },
          { name: "published_at" },
        ]
      },
      {
        name: "admin_users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "admin_users_updated_by_id_fk",
        fields: [
          { name: "updated_by_id" },
        ]
      },
      {
        name: "idx_admin_users_created_by_id",
        fields: [
          { name: "created_by_id" },
        ]
      },
      {
        name: "idx_admin_users_updated_by_id",
        fields: [
          { name: "updated_by_id" },
        ]
      },
    ]
  });
  }
}
