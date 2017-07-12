var mongoose = require('mongoose');

module.exports = mongoose.model('data', {
  "slider": {
    "btnText": String,
    "subtitle": String,
    "videoId": String,
    "title": String
  },
  "processes": {
    "processes": [
      {
        "icon": String,
        "name": String
      }
    ],
    "subtitle": String,
    "title": String
  },
  "achievements": {
    "achievements": [
      {
        "number": Number,
        "icon": String,
        "text": String
      }
    ]
  },
  "clients": {
    "clients": [
      {
        "image": String,
        "name": String
      }
    ],
    "subtitle": String,
    "title": String
  },
  "works": {
    "btnText": String,
    "works": [
      {
        "smallDescription": String,
        "name": String,
        "description": String,
        "photoMain": String
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
  "blogs": {
    "blogs": [
      {
        "smallDescription": String,
        "description": String,
        "photo": String,
        "title": String
      }
    ],
    "subtitle": String,
    "title": String
  },
  "feedbacks": {
    "feedbacks": [
      {
        "name": String,
        "description": String
      }
    ]
  },
  "services": {
    "subtitle": String,
    "services": [
      {
        "icon": String,
        "text": String,
        "title": String
      }
    ],
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
  "orders": {
    "orders": [
      {
        "image": String,
        "btnText": String,
        "subtitle": String,
        "text": String,
        "title": String
      }
    ]
  },
  "welcome": {
    "logo": String,
    "text": String,
    "title": String
  }
});

