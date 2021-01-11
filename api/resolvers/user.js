const { Users } = require('../data');

module.exports = (parent, { id }, context, info) => {
  return Users.find((user) => user.id == id);
}
