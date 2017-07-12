var mongoose = require('mongoose');

module.exports = mongoose.model('data', {
  "slider": {
    "btnText": "PLAY VIDEO",
    "subtitle": "Amazing video",
    "videoId": "1",
    "title": "ArtSide Production"
  },
  "processes": {
    "processes": [
      {
        "icon": "Underpants",
        "name": "test"
      }
    ],
    "subtitle": "That's How We Do It",
    "title": "OUR PROCESS"
  },
  "achievements": [
    {
      "number": 1088,
      "icon": "Pool",
      "text": "Some text"
    }],
  "clients": {
    "clients": [
      {
        "image": null,
        "name": "test5"
      }
    ],
    "subtitle": "They Trust Us",
    "title": "OUR CLIENTS"
  },
  "works": {
    "btnText": "VIEW PORTFOLIO",
    "works": [
      {
        "smallDescription": "test23",
        "name": "test",
        "description": null,
        "photoMain": null
      }
    ],
    "subtitle": "We Take Care For Every Detail",
    "btnDescription": "HAVE YOU FALLEN IN LOVE ALREADY WITH OUR WORKS?",
    "title": "LATEST WORKS"
  },
  "teams": {
    "teams": [
      {
        "facebook": "http://facebook.com",
        "name": "Ivan Test",
        "photo": null,
        "description": "One of the best photographer in the world!",
        "position": "Photographer",
        "email": "test@mail.com"
      }
    ],
    "subtitle": "Creative Nerds",
    "title": "MEET OUR TEAM"
  },
  "blogs": {
    "blogs": [
      {
        "smallDescription": "test desc",
        "description": "test",
        "photo": null,
        "title": "test"
      }
    ],
    "subtitle": "Our Latest News",
    "title": "FROM BLOG"
  },
  "feedbacks": [
    {
      "name": "John J.D.",
      "description": "I’am amazed, I should say thank you so much for your awesome template. Design is so good and neat, every detail has been taken care these team are realy amazing and talented! I will work only with enigma agency."
    }
  ],
  "services": {
    "subtitle": "Continuously Creating Daring Digital Solutions",
    "services": [
      {
        "icon": "Chart",
        "text": "Our web design team will spend time with our digital marketing team to ensure the core principles of effective websites.",
        "title": "Marketing"
      }
    ],
    "title": "Our Services"
  },
  "abouts": {
    "description": "Our web design team will spend time with our digital marketing team to ensure the core principles of effective websites and development.  We want to tell your brand’s story with quality content that will help you inspire your audience, build meaningful connections and grow your success. Different marketing goals mean different content tools.",
    "abouts": [
      {
        "name": "Time",
        "percent": 70
      }
    ],
    "title": "ABOUT US"
  },
  "orders": [
    {
      "image": null,
      "btnText": "save",
      "subtitle": "some subtext",
      "text": "another bit text description",
      "title": "Test"
    }
  ],
  "welcome": {
    "logo": "https://api.backendless.com/0E333A5D-617D-8A64-FFBE-60C7CE45F000/05891DE8-F61B-BAEE-FF60-001D1A3CF600/files/media/intro_logo.png",
    "text": "We continuosly seek between design and technology. For over a decade, we've helped businesses to craft honest, emotional experiences through strategy, brand development, graphic design, web design. Our team hand picked to provide the right balance of skills to work.",
    "title": "WELCOME TO ARTSIDE"
  }
});

