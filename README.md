# Overview

This repo contains base style sheets intented to be used on scripture content return from API.Bible. For examples of all the styles and formatting used, see [examples](http://americanbible.github.io/scripture-styles).

All the HTML content returned from API.Bible uses classnames that follow [USX](https://ubsicap.github.io/usx/) styles.

# Usage

To use this package directly in your app, install with NPM.

```
npm install --save scripture-styles
```

Then import into your index file.

```
import "scripture-styles/dist/css/scripture-styles.css";
```

Wherever you display scripture content from API.Bible on your site, just make sure it's wrapped in a `div` with `class="scripture-styles"`.

````
<div class="scripture-styles">
  {apiBibleResponse.data.content}
</div>


## CDN

If you prefer to reference this directly from the CDN add the following to your page.

```html
<link
  rel="stylesheet"
  href="https://assets.api.bible/css/scripture-styles.css"
/>
````

## Source Order

We've worked hard to make sure that the scripture styles do not collide with other styles on your site. That being said, it's important that it comes last in the source order whether that is last in a Sass import or last when linking to the CSS file.

## Choose an Output Style

We've chose to use **:nested** as the style for the main css file. It's nice and easy to read. We've used **:compressed** on the minified css file. If you want to go straight into production just grab the minifed version.

If you need to rebuild the css you can run.

```

npm run build

```

Or individually:

**nested**

`npm run build-nested`

**compressed**

`npm run build-nested`

**gzip**

`npm run gzip`

# Preview Tool

First add your API.Bible key to `previewer/.env`. See `.env.sample` for format. If you need a key, you can [Sign Up Here](https://scripture.api.bible).

Then, to run the preview tool

```
cd previewer
npm install
npm start
```

New stories can be added to `stories/stories.js`.
