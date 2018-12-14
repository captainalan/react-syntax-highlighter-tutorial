## Create a tutorial with syntax highlighting using React

Any self-taught web developer will spend a lot of time reading and working
through tutorials. Here's my (first) effort to give back!  In this tutorial, we
will write, build, and deploy a website with syntax highlighting using React.

See what we will be building on [Github
pages](https://captainalan.github.io/react-syntax-highlighter-tutorial/). 


### Pre-requisites

I will assume you have basic working knowledge of how to open a terminal,
navigate directories, create files, etc. You should have a Github account and be
familiar with the basics of Git. Additionally, you should be familiar with
concepts common to most programming languages like variables,

You will also need to have the following things installed:

- [npm](https://www.npmjs.com/)
- [create-react-app](https://github.com/facebook/create-react-app)

Please make sure you have these packages installed. If you are using MacOS and
you do not already have [homebrew](https://brew.sh/) installed, this may be a
good opportunity to make the switch to using a [package
manager](https://en.wikipedia.org/wiki/Package_manager) rather than manually
dealing with the installations, upgrades, and so forth all the programs you use.

## Getting started

To begin, create a new project using `create-react-app`.

```bash
$ create-react-app MyProject
```

From your project's new directory, start up a development server so you can see
the changes you make in your browser as you write code.

```bash
$ cd MyProject 
$ yarn start
```

Your default browser should launch a window at http://localhost:3000/ by
`create-react-app`'s default settings.

Now, open up your favorite text editor (here I am using [Visual Studio
Code](https://code.visualstudio.com/) with
vim emulation) and navigate to your project directory. Open up the file
`src/App.js` to edit.

## Install packages

Open up another terminal to your project's root directory (e.g. `~/MyProject/`).
We are going to make use of the
[react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD)
package. Install this package by running `npm install react-syntax-highlighter
--save`.

When you do this, you may see a lot of text, some warnings, and finally
(hopefully) a reassuring message that your install was successful. 

Take a look at `package.json`. You will notice that there is a line under
"dependencies" that says `"react-syntax-highlighter": "^XX.X.X"` where the X's
represent the version of this package that was just installed.

## Put things together

At the top of `App.js`, below the import statements that are already there, add
the following lines:

```javascript
import SyntaxHighlighter from 'react-syntax-highlighter';
```

Next, get a snippet of code you want to try to display from your favorite
programming language (many are
[supported](https://github.com/conorhastings/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD)
by react-syntax-highlighter). Here, I'll use [Haskell](https://www.haskell.org/).

Right after all the import statements, save a string of text to a variable to
display. 

```javascript
// Example code string to highlight
const myCodeString = `
{- Map function written in Haskell. -}
map           :: (a->b) -> [a] -> [b]
map f  []     =  []
map f (x:xs)  =  f x : map f xs
`
```

Then, add the following lines to the `App` class definition right before the
closing header tag (`</header>`).

```html
<SyntaxHighlighter language='haskell'>
    {myCodeString}
</SyntaxHighlighter>
```

Check out what your app looks like so far in your browser (which should have a
window open to http://localhost:3000/). Everything should look cool except the
text is strangely centered in the code block.

Open up `App.css` and change

```css
.App {
  text-align: center;
}

```

...to...

```css
.App {
  text-align: left;
}

```

Return to the browser window; things should look good. Further edit the contents
of `App.js` to your liking.

## Building and Deploying

So, we built a nice looking, static web page. Let's upload it somewhere! Here,
we'll be using Github and Github pages.

First, create a new empty Github repository. Upload your project to that new
repository. 

Now, return to the terminal window at your project directory. Run:

```bash
npm run build
```

After a few moments (depends on how fast your machine is), a new `build/` folder
will have been generated.

Edit `package.json` adding a "homepage" line pointing to the Github pages
website you will be hosting your completed project on:

```json
{
  ...,
  "homepage": "https://YOUR-GITHUB-NAME.github.io/YOUR-REPO-NAME",
  ...,
}
```

Install the `gh-pages` package on npm:

```bash
npm install --save-dev gh-pages
```

In `package.json`, modify the scripts item, adding the following lines:

```json
"scripts": {
  ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
  ...
}
```

Once that is done, deploy your page by running...

```bash
npm run deploy
```

...from a terminal in the root directory. This command will deploy your `build/`
directory created earlier to the homepage you specified.


For more information on this subject, see [this helpful
page](https://medium.com/@_mariacheline/deploy-create-react-app-project-to-github-pages-2eb6deda5b89)
by [mariacheline](https://medium.com/@_mariacheline).

## Summary

In this tutorial, we built a React app by re-using a lot of existing, readily
available work: create-react-app, react-syntax-highlighter, etc. We pasted some
pieces together and then returned them back to the internet from which forth
they came.

Using modern tooling like npm and React, many difficult tasks become easy! 

Here, there wasn't much explaining. Hopefully, however, by successfully using a
handful of tools, this tutorial has helped you figure out what you want to learn
more about next in addition to delivering some fast, flashy results.

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
