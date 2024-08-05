This is an opininated TypeScript Library starter template for those looking to get started writing a TypeScript library fast.
It relies heavily on the zero-low configuration that 📦 [Parcel](https://parceljs.org) provides.

## Motivation

I build a lot of TypeScript libraries and tend to start new projects fairly often.
It got a bit tedious to set up the same project over and over, so I started this repository.
It is primarily for me, but if you find it useful, that's great!

## Features

- 📦 Parcel
- 🟦 TypeScript
- 🧪 Jest
- 🐙 GitHub Actions
- 📝 Documentation

## Usage

```sh
# Clone the template locally
git clone git@github.com:sebkolind/libby.git my-project

# Change working directory to your project
cd my-project

# Install dependencies
npm install
```

### Configure Package

Open the `package.json` file and change the `name`, `description` and `author` fields to something you'd like.
The `name` should be unique and you should use a namespace (like how I use `@sebkolind` for my packages),
`author` is you and `description` is a short summary of what your package is about.

## Start building

The package is setup with a `lib` folder which contains all your package code.
Inside the lib folder is a `main.ts` file. This is the entry point, and will be the place to export code that can be used by consumers of your library.

The folder `__tests__` holds all your unit tests. When you run `npm run test` the files ending with
`.test.ts` will be run.

```sh

# Development
npm run dev

# Run tests
npm run test

# Build for release
npm run build

# Docs
docs:dev # development
docs:build # build for release
docs:preview # preview release
```

## Write Documentation

I use [VitePress](https://vitepress.dev/) to write documentation for my packages. It's easy to use, comes
with a great default theme, and you write your content in Markdown.

VitePress is already installed, so to get started you can use the documentation found [here](https://vitepress.dev/guide/getting-started). 
I use the default configuration, so it should be easy to follow the guide from start to finish.
