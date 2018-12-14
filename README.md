## Create a tutorial with syntax highlighting using React

In this tutorial, we will write, build, and deploy a tutorial complete with
syntax highlighting using React. 

Any self-taught web developer will spend a lot of time reading and working
through tutorials. Here's my (first) effort to give back!

### Pre-requisites

I will assume you have basic working knowledge of how to open a terminal,
navigate directories, create files, etc. Additionally, you should be familiar
with concepts common to most programming languages like variables,

Additionally, you will need to have the following things installed:

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




## Summary

In this tutorial, we built a React app by re-using a lot of existing, readily
available work: create-react-app, react-syntax-highlighter, etc. We pasted some
pieces together and then returned them back to the internet from which forth
they came.

Using modern tooling like npm and React, many difficult tasks become easy! 

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
