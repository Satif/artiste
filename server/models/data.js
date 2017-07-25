var mongoose = require('mongoose');
var Schema      = mongoose.Schema;

module.exports = mongoose.model('data', {
  "slider": {
    "btnText": String,
    "subtitle": String,
    "videoId": String,
    "title": String,
    "image": {type: Schema.Types.Mixed}
  },
  "works": {
    "btnText": String,
    "works": [
      {
        "smallDescription": String,
        "name": String,
        "category": String,
        "photoMain": {type: Schema.Types.Mixed},
        "morePictures": Schema.Types.Mixed,
        "videoId": String
      }
    ],
    "subtitle": String,
    "btnDescription": String,
    "title": String
  },
  "teams": {
    "teams": [
      {
        "facebook": String,
        "name": String,
        "photo": {type: Schema.Types.Mixed},
        "description": String,
        "position": String,
        "email": String
      }
    ],
    "subtitle": String,
    "title": String
  },
  "abouts": {
    "description": String,
    "abouts": [
      {
        "name": String,
        "percent": Number
      }
    ],
    "title": String
  },
  "welcome": {
    "logo": {type: Schema.Types.Mixed},
    "text": String,
    "title": String
  },
  "contacts": {
    "subtitle": String,
    "title": String,
    "logo": {type: Schema.Types.Mixed},
    "time": String,
    "timeText": String,
    "address": String,
    "phone": String,
    "email": String,
    "facebook": String,
    "twitter": String,
    "vimeo": String,
    "vk": String
  }
});

