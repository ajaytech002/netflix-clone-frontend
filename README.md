# Table of Contents

- [Setup](#setup)
- [Netflix Homepage](#netflix-homepage)

## Setup

This is the frontend of the Netflix Clone frontend, deveoped using React. This app was created using `create-react-app` and `react-router-dom`.

1. [Install git](https://git-scm.com/downloads).
2. [Install visual studio code](https://code.visualstudio.com/)
3. Create a new project in github.

   Use the same name as the react project which we will be creating using the `create-react-app` script. Don't create a README.md file. Just create a .gitignore and a LICENSE if necessary.

   After the projet has been created in github, get the git clone url. For example, in our case it will be `https://github.com/ajaytech002/netflix-clone-frontend.git`.

4. Clone the project into your computer.

   ```bash
   git clone https://github.com/ajaytech002/netflix-clone-frontend.git
   ```

5. Create the react app using the following command:

   ```bash
   npx create-react-app netflix-clone-frontend
   ```

   Run this command inside the same directory that you used to run the previous command. Do NOT enter into the directory which was created when you cloned the repository.

   A new README.md will be created by the `create-react-script`. This will contain the instructions to run the react app using the `npm start` command.

6. Remove unnecessary files:

   We will have to do a little bit of a clean-up to remove unwanted files for now. This is to ensure that the setup directory stays clean and you will not be confused with unnecessary files.

   Remove the following files inside the src directory. Do NOT delete the entire `src` directory.

   ```bash
   📁 src
   Ⳑ 🗎 App.test.js
   Ⳑ 🗎 logo.svg
   Ⳑ 🗎 reportWebVitals.js
   Ⳑ 🗎 setupTests.js
   ```

7. Run the following command to start the react app:

   ```bash
   npm start
   ```

   Your default browser should open and you should be able to see the app.

   ![Beginner App](/docs/images/react-app-start.png)

## Netflix Homepage

The logged in version of the Netflix homepage looks something like this.

    ![Netflix Homepage](/docs/images/netflix-homepage.png)
