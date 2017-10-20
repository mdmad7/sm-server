import mongoose, { Schema } from 'mongoose';
import Validate from 'validator';
import bcrypt from 'bcryptjs';

const TeacherSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    otherName: {
      type: String,
      lowercase: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator(email) {
          return Validate.isEmail(email);
        },
        message: '{VALUE} is not a valid email!',
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator(password) {
          // atleast 1 lowercase, 1 uppercase, 1 numeral and a length of 8
          const strongRegex = new RegExp(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})',
          );
          return strongRegex.test(password);
        },
        message: 'Your password is too weak !',
      },
    },
  },
  { timestamps: true },
);

// pre-middleware -- hashing password password with bcrypt bfr saving
TeacherSchema.pre('save', function(next) {
  const hash = bcrypt.hashSync(this.password, 8);
  this.password = hash;
  next();
});

export default mongoose.model('Teacher', TeacherSchema);
