const mongoose = require('mongoose');

const {Schema} = mongoose;

const NOTE_TYPES = ['twitters', 'articles', 'notes'];

const NoteSchema = new Schema({
  type: {
    type: String,
    enum: NOTE_TYPES,
    required: true,
  },
  tittle: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  articleUrl: {
    type: String,
    defualt: null,
  },
  twitterName: {
    type: String,
    default: null,
  },
  userID: {
    type: String,
    required: true,
  },
});

mongoose.model('notes', NoteSchema);