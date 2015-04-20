# Usage

You have to:

* Clone this repository to whatever
* Edit ```composer.json``` 
* Push the changes to your repository (create a new repository and send to it, don't push to mine obviously)
* Configure the repository in your Duke's ```composer.json```
* Update composer's dependencies
* Reference the skin in your ```settings.php``` (see below)
* Configure your templates using the snippets below


You need to run ```bin/assets.php``` to:

* Recompile css and js while in production mode
* Refresh changes in manifest files while in debug mode

After this, stuff will be copied and/or compiled to your ```public_html/assets/skins/YOUR_SKIN_NAME``` folder.

Always replace ```YOUR_SKIN_NAME``` with whatever.

# Reference the skin in your ```settings.php```
```php
<?php
return array(
    // ... other settings...
    'skins' => array(
    // .. other skins...
        'YOUR_SKIN_NAME' => implode(DIRECTORY_SEPARATOR, array(dirname(__FILE__), 'vendor', 'your', 'repository', 'assets', 'skins')) . DIRECTORY_SEPARATOR,

    ),
);
```

# Configure your templates using the snippets below

Paste this code in your template.

## Javascript block

```php
<?php if (\C::$debug): ?>
    <?php include C::$root_abs . 'public_html/assets/skins/YOUR_SKIN_NAME/scripts.common.php'; ?>
    <!--[if lt IE 9]>
    <?php include C::$root_abs . 'public_html/assets/skins/YOUR_SKIN_NAME/scripts.ie.php'; ?>
    <![endif]-->
<?php else: ?>
    <script src="<?php echo \C::$root; ?>/assets/skins/YOUR_SKIN_NAME/javascripts/scripts.common.js"></script>
    <!--[if lt IE 9]>
    <script src="<?php echo \C::$root; ?>/assets/skins/YOUR_SKIN_NAME/javascripts/scripts.ie.js"></script>
    <![endif]-->
    <script src="<?php echo \C::$root; ?>/assets/skins/YOUR_SKIN_NAME/javascripts/scripts.js"></script>
<?php endif; ?>
```

## CSS block

```php
<?php if (\C::$debug): ?>
    <?php include C::$root_abs . 'public_html/assets/skins/YOUR_SKIN_NAME/styles.php'; ?>

    <!--[if lt IE 9]>
    <?php include C::$root_abs . 'public_html/assets/skins/YOUR_SKIN_NAME/styles.ie.php'; ?>
    <![endif]-->
<?php else: ?>
    <link rel="stylesheet" href="<?php echo \C::$root; ?>assets/skins/YOUR_SKIN_NAME/stylesheets/styles.css">
    <!--[if lt IE 9]>
      <link rel="stylesheet" href="<?php echo \C::$root; ?>assets/skins/YOUR_SKIN_NAME/stylesheets/ie.css">
    <![endif]-->
<?php endif; ?>
```

# .manifest files

When referencing files inside manifests, the paths always start at the base skin directory. See below.

There are 2 syntaxes for manifest files.

## Plain
Include all assets that should be compiled. CSS and JS goes separated. Below, an example of a javascript manifest (could be in js.common.manifest, for instance):

```
YOUR_SKIN_NAME/bower_components/jquery/dist/jquery.js
YOUR_SKIN_NAME/bower_components/jqueryui/jquery-ui.js
YOUR_SKIN_NAME/javascripts/bootstrap.js
YOUR_SKIN_NAME/javascripts/main.js
```

The same would go for the CSS manifests.


## File copying

Copy manifests contain the path to the folder or file, and the destination inside the final skin directory (```public_html/assets/skins/YOUR_SKIN_NAME```). For instance:

```
YOUR_SKIN_NAME/images images
YOUR_SKIN_NAME/fonts fonts
```

This will result in:

* YOUR_SKIN_NAME/images will be copied to public_html/assets/skins/YOUR_SKIN_NAME/images
* YOUR_SKIN_NAME/fonts will be copied to public_html/assets/skins/YOUR_SKIN_NAME/fonts





