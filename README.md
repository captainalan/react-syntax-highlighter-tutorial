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
vim emulation) and navigate to your project directory.

## Install some packages

Open up another terminal to your project's root directory (e.g. `~/MyProject/`).
(Don't shut down the development server you just started!)


<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
