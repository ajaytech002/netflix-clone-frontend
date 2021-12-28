# Table of Contents

- [Setup](#setup)
- [Netflix Homepage](#netflix-homepage)
- [Mock API](#mock-api)

## Setup

This is the frontend of the Netflix Clone frontend, deveoped using React. This app was created using `create-react-app` and `react-router-dom`.

1. [Install git](https://git-scm.com/downloads).
2. [Install visual studio code](https://code.visualstudio.com/)
3. Create a new project in github.

   Use the same name as the react project which we will be creating using the `create-react-app` script. Don't create a README.md file. Just create a .gitignore and a LICENSE if necessary.

   Here are the settings needed.

   ![.gitignore and LICENSE settings](/docs/images/github-create-repository-initial-setup.png)

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

Here is what we are going to build. The logged in version of the Netflix homepage looks something like this.

![Netflix Homepage](/docs/images/netflix-home-page-banner.png)

It has a top menu bar with some menu items like `TV Shows`, `Movies`, `Search button` and a dropdown that contains `Account` and `Sign Out` options - like so.

![Top Menu bar](/docs/images/netflix-home-page-top-menu.png)

Right underneath that, we have the `Banner`. This is a large image that is displayed at the top of the page. Internally, in netflix, there might be a random algorithm that is used to select a banner image. But for now, we will just select a random movie image to display.

![Banner](/docs/images/netflix-home-page-banner-image.png)

Inside the banner, there are various embedded components, like the `Play` button, `Info` button etc.

![Top 10 movies](/docs/images/netflix-home-page-top-10-scroller.png)

Right underneath a variety of scrollers start displaying. First, we have the `top-10-movies` scroller. This is a list of movies that are currently trending in that particular country.

Similarly, there are other scrollers as well.

![More Scrollers](/docs/images/netflix-home-page-more-scrollers.png)

There are some display effects that are applied to the various scrollers. For example, if you hover your mouse over any of the movies in the scroller, you will see that the movie pops-out.

![Pop out](/docs/images/pop-out.gif)

As soon as you move your mouse away from the movie, it will return to its original position. Also, if you hover for a while into the pop-over, a preview of the movie will start to play.

![Pop out - More options](/docs/images/pop-out-more-options.png)

In the pop-up, there are specific options available in the pop-over like the `Play` button, `Add to my List` button, `Like` and `Dislike` buttons etc.

To view more elements in the scroller, just use the right and left navigation buttons - like so

![Navigation](/docs/images/scroller-right-left.gif)

## Mock API

To make things easy, we will first start to use the Mock API provided by a website called.

## Deploy

### Vercel

Create React Apps can be directly deployed to vercel. However, there is a small change we need to do. During the deployment, in the build-command, change it as follows. You will have to switch on the `OVERRIDE` option.

```bash
CI= npm run build
```
