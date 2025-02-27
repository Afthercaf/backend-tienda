const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true,
    unique: true
  },
  roleCode: {
    type: Number,
    required: true,
    unique: true
  }
});

const Role = mongoose.model('Role', roleSchema);
module.exports = Role;
