# Italian geolocation parser

This is the folder reguarding the italian geolocation csv generation.

The `input.txt` is taken by [geonames.org](https://download.geonames.org/export/zip/), but contains cieties with the same postal code.

This folder contains a **NodeJS** script, made with **Typescript** to merge these cieties with the same postal code and merge them, obtaining as coordinates the middle of the various coordinates and as city name the one who is nearest to that center.

To run the script:
* Install **node.js**
* Go to this folder
* From [geonames.org](https://download.geonames.org/export/zip/) download the italian txt file and name it as `raw_input.txt`
* Execute `npm i` to install the dependencies
* Execute `npm run transpile` to transpile typescript in javascript
* Execute `npm start` to generate the csv file
* The `ita_geocoding.csv` will be generated