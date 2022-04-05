# Getting Started with this app

## Steps to get app running:

1. Have latest versions of Node and NPM installed.
2. Open terminal in root folder.
3. Run `npm install`
4. Run `npm start`

## Project Structure:

Here is a breakdown of the structure and their purposes:

hack-uconn-website (root)
    public
        index.html
        icons (pngs, icos, etc.)
    src
        assets
        components
        pages
            page1
                components
                Page1.js
            page2
                components
                Page2.js
        services
        utils
    .gitignore
    package(-lock).jsons
    README.md


- public: stuff for building the app. Most of the time not relevant until you deploy the app.
- index.html: where meta data is displayed for page.

- src: where all the app lives (for the most part).
- assets: where all image and text content will live. Broken down into text and images folder. In text/image folder, should break down further to pages / other type of folder to keep it organized.
- components: where general components that are going to be shared across the app will live. Can create sub-folders in here as well to keep it organized.
- pages: Where entire pages will live. Pages will probably be a lot of smaller components living in the big page. Can have its own components folder if there is components that are specific to it (shouldn't be many).
- services: where a lot of outside / 3rd party logic will live (example: if you want to make an HTTP request, you should probably make an HTTP request to handle that). You can also move generic logic to services. Don't get this confused with utilities.
- utilities: fuctions that perform a static action (example: say you want to have a global function that can parse a string a certain way every single time and needs to be used by many components. You should probably make it a utility function). You can also group these into sub-folders.

- .gitignore: files Git will ignore when adding/committing/pushing to Github via Git.
- package(-lock).jsons: files for project configurations and dependencies
- README.md: page you're reading right now. Used for information





# CREATE REACT APP README BELOW


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
