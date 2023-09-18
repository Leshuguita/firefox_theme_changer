# Firefox Theme Changer

A small extension that lets you change Firefox's theme at runtime just by creating a file.

## Installation

- Install the extension to Firefox
- Copy `themechanger.json` to the proper [Manifest Location](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#manifest_location). In linux, this is in the `~/.mozilla/native-messaging-hosts/` folder.
- Change the `path` inside the file to wherever you want to put the `firefox_theme_changer.py` script.

## Usage

Once everything is set up, you can change the theme by creating a file called `firefox_theme` containing the name of your desired theme (the same as in the Firefox screen), in the same folder as `firefox_theme_changer.py`. Remember it'll only work if the theme is installed.