## Getting Started

To begin, we run through our basic clone & install process:

1. Deploy to heroku `git push heroku master`
2. Ensure that at least one instance of the app is running: `heroku ps:scale web=1`.
3. Open side: `heroku open`
4. Logs: `heroku logs --tail`

## Gulp Commands

```sh
gulp serve            // Serves project from .tmp folder
gulp clean            // Removes any temporary folders
gulp serve:dist       // Serves project as it does for production builds
gulp builds           // Builds project to 'dist' folder
```

Enjoy!