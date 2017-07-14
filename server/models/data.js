var mongoose = require('mongoose');

module.exports = mongoose.model('data', {
  "slider": {
    "btnText": String,
    "subtitle": String,
    "videoId": String,
    "title": String
  },
  "works": {
    "btnText": String,
    "works": [
      {
        "smallDescription": String,
        "name": String,
        "category": String,
        "photoMain": String,
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
        "photo": String,
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
    "logo": String,
    "text": String,
    "title": String
  },
  "contacts": {
    "subtitle": String,
    "title": String,
    "logo": String,
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

