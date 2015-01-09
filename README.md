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