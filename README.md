## Movie React Native Application

# Overview
This project is a mobile application built with React Native that allows users to search for and find detailed information about movies. The application integrates various APIs to provide users with comprehensive movie details, including cast information, similar movies, and more. The app is designed to offer a seamless and engaging user experience with features like search, detailed movie pages, and cast information.

# Features

**Search Functionality:** Users can search for movies by title using a search bar.

**Movie Details:** Displays detailed information about each movie, including title, release date, genre, rating, and description.

**Cast Information:** Provides details about the cast of each movie.

**Similar Movies:** Suggests movies similar to the one being viewed.

**Responsive UI:** Adaptable user interface for different screen sizes and orientations.

**Favorites:** Users can mark movies as favorites.


# Technologies Used

**React Native:** For building cross-platform mobile applications.

**Redux:** State management library to manage the application's state.

**Axios:** For making HTTP requests to fetch movie data from external APIs.

**React Navigation:** To handle navigation between different screens within the app.

**Tailwind CSS:** For styling the application using utility-first CSS framework.

**Expo:** A framework and platform for universal React applications.

# File Descriptions

**package.json**

Defines the project's metadata, dependencies, and scripts. This file includes essential libraries like react-native, axios, expo, and react-navigation.

**postcss.config.js**

Configures PostCSS with Tailwind CSS to use utility-first CSS for styling.

**metro.config.js**

Configures Metro, the JavaScript bundler for React Native, enabling CSS support.

**babel.config.js**

Configures Babel for transpiling the application code, including the integration with NativeWind for Tailwind CSS.






## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```


- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
