import { Schema } from 'mongoose';
import uuid from 'uuid-random';

export const TasksSchema = new Schema({
  rank: {
    type: Number,
    default: -999,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  members: {
    type: [{ type: String }],
    default: null,
  },
});

export const FiltersSchema = new Schema({
  userID: {
    type: Number,
    default: -999,
  },
  showTasks: {
    type: String,
    default: 'all',
  },
  dateRangeStart: {
    type: Date,
    default: Date.now,
  },
  dateRangeEnd: {
    type: Date,
    default: Date.now,
  },
});

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tokenSalt: {
    type: String,
    default: uuid(),
  },
});
