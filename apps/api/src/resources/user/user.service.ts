import _ from 'lodash';
import { users as User } from 'models/user'; // Sequelize model

function getPublic(user: any | null) {
  if (!user) return null;
  const privateFields = [
    'password',
    'reset_password_token',
    'confirmation_token',
    // add any others you don't want to expose
  ];
  return _.omit(user instanceof User ? user.toJSON() : user, privateFields);
}

export default {
  // updateLastRequest,
  getPublic,
};
