## Source Order

We've worked hard to make sure that the scripture styles do not collide with other styles on your site. That being said, it's important that it comes last in the source order whether that is last in a Sass import or last when linking to the CSS file.

## Install Sass

Use the following command to install the sass Ruby gem:

`$ gem install sass`

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

## Fonts

Documentation soon...

## CDN

To reference this directly from the CDN add the following to your page.

```html
<link
  rel="stylesheet"
  href="https://assets.api.bible/css/api-bible-content.css"
/>
```

# Preview Tool

First add your API.Bible key to `previewer/config.json`. See `config.json.sample` for format.

Then, to run the preview tool

```
cd previewer
npm install
npm run storybook
```

New stories can be added to `stores/index.js`.
