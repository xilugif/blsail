/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    _id: 'integer',
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    email: 'email',
    createTime: 'date'
  }

};
