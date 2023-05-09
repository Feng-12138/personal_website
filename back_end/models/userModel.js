const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
import { nanoid } from 'nanoid'

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: nanoid()
    },
    email: {
        type: String,
        required: [true, 'Please tell us your email!']
    },
    password: {
        type: String,
        required: [true, 'User should give password'],
        minlength: 8,
        select: false
    },
    name: {
        type: String,
        required: [true, 'User should give its name'],
    },
    active: {
        type: Boolean,
        default: true,
        select: false
    }

});

userSchema.pre('save', async function(next) {
    // Only run this function if password was actually modified
    if (!this.isModified('password')) return next();
  
    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);
    next();
  });

userSchema.pre(/^find/, function(next) {
    // this points to the current query
    this.find({ active: { $ne: false } });
    next();
  });

userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
  };


userSchema.methods.createPasswordResetToken = function() {
    const resetToken = crypto.randomBytes(32).toString('hex');
  
    this.passwordResetToken = crypto
      .createHash('sha256')
      .update(resetToken)
      .digest('hex');
  
    // console.log({ resetToken }, this.passwordResetToken);
  
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  
    return resetToken;
  };
  
  const User = mongoose.model('User', userSchema);
  
  module.exports = User;