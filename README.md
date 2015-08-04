Krita Icon Font
===============

#### A Webfont created with the original awesome [Krita](https://krita.org/) Icons.

The original Idea behind this work was to create useful tools for people writing Tutorials e.g. about krita. The iconset includes some handy css styles, making it easy to use it in a broad variety. I have adjusted the kbd (html-tag) to emphasize the use of shortcuts in a tutorial and to fit to the available extra-themes.

*Note*: I have only created the "framework" for these truly nice Icons - the design was done by _Angel Antondo_!

## Basic Usage:

1. Download the Files (Fonts & CSS)
2. Load the Icon Font in the Head Section of your Website

 ```html
 <link href="path-to/css/krita-icons.min.css" rel="stylesheet">
 ```
 
3. Use the Icons with the Class-Selector: _kicon-iconname_

 ```html
 <span class="kicon-iconname"></span>
 ```

4. *[Optional]* Add theme or size classes (see sections below for available styles)

### _Available Styles:_

Size (Medium/Large/ExtraLarge):

- kicon-md
- kicon-lg
- kicon-xl

Darke or Light Themes:

- theme-dark
- theme-light

Icon Groups (to use with one of the themes..):

- icon-group
- icon-group-horizontal
- highlight-icon

Markup (Icongroups):

```html
<div class="icon-group">
  <span class"theme-light kicon-iconname"></span>
  ...
</div>
```

*Licence GPL v2.0*
