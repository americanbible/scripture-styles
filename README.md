## Source Order

We've worked hard to make sure that the scripture styles do not collide with other styles on your site. That being said, it's important that it comes last in the source order whether that is last in a Sass import or last when linking to the CSS file.


## Install Sass

Use the following command to install the sass Ruby gem:

`$ gem install sass`


## Choose an Output Style

We've chose to use __:nested__ as the style for the main css file. It's nice and easy to read. We've used __:compressed__ on the minified css file. If you want to go straight into production just grab the minifed version.

__nested__

`$ scss -t nested scss/eb-scripture-style/eb-scripture-style.scss css/eb-scripture-style.css`

__expanded__

`$ scss -t expanded scss/eb-scripture-style/eb-scripture-style.scss css/eb-scripture-style.css`

__compact__

`$ scss -t compact scss/eb-scripture-style/eb-scripture-style.scss css/eb-scripture-style.css`

__compressed__

`$ scss -t compressed scss/eb-scripture-style/eb-scripture-style.scss css/eb-scripture-style.min.css`

__gzip__

`gzip < css/eb-scripture-style.min.css > css/eb-scripture-style.min.css.gz`

## Fonts

We recommend using [CharisSIL](http://scripts.sil.org/cms/scripts/page.php?item_id=CharisSIL_download) because it has tremendous character support. Over 3600 glyphs are included. We have included “Charis” in our default font stack and we are leaving it up to developers to make that font available to their apps or sites.

You are welcome to use the Sass files to change the default font stack and recompile the css, or you can simply override it with your own rules in a separate CSS file.

Charis SIL is released under the SIL Open Font License (OFL), version 1.1. Copyright (c) 1997-2014, SIL International (http://scripts.sil.org/) with Reserved Font Names "Charis" and "SIL".

http://scripts.sil.org/cms/scripts/page.php?item_id=OFL
