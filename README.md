# Google Geocoding API

## Prepare Your Environment

If you don't have [Node.js](https://nodejs.org/) installed, you may want to use [nvm](https://github.com/creationix/nvm) and install it. Once `node` and `npm` commands exist on your computer, install Dredd globally:

    $ npm install -g dredd

Get [API_KEY](https://developers.google.com/maps/documentation/geocoding/get-api-key) from google to use [Geocoding API](https://developers.google.com/maps/documentation/geocoding/intro). Replace `API_KEY` with your own key from google in `secret-config.json` (refer `secret-config-sample.json`).

## Test

To test the API use

    $ dredd apiary.apib --hookfiles=./hooks.js
