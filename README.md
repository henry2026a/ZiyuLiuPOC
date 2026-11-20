# Food Price List

A small full-stack demo for Assignment 3. Express serves the page and the food API. The page fetches five sample items and draws a table. The data is stored in memory; no database setup is needed.

## Run locally

From the project folder:

```sh
npm ci
npm test
npm start
```

Open `http://localhost:3000` for the page or `http://localhost:3000/foods` for the JSON response. The server uses `PORT` when it is set, and defaults to `3000` otherwise. Unknown paths return `404`.

## Publish on Replit

1. Put the contents of this project folder at the root of the GitHub repository. Do not upload `node_modules`.
2. Import the repository into Replit. Use `npm start` as the run command. If a build command is needed, use `npm ci`.
3. Run the app and publish it as a public web app with a Node.js backend, not as a static site.
4. Open the published home page and its `/foods` path without being signed in. Submit the ZIP and the published URL as instructed in Brightspace.
