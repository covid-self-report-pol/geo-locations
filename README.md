# geo-locations
Repository to host geo locations files for other targeted countries

@all participant from codevscovid19.org you can make pull request to create files that containe geo locations.

## Content overview

1. [Header description](#header)
2. [FAQ](#faq)
3. [Links to sources](#datasources)
4. [Sources used for each country + parsing language](#source-by-country)

### Header:
- country_code: ISO 3166 Alpha-3 country code ([see country-codes_csv.csv or country-codes_json.json](data/general/country_codes/))
- postal_code: country specific postal_code
- latitude: latitude in WSG84
- latitude: longitude in WSG84
- region_id: string in descending order state, region, community, neighborhood/village, where the different levels are merged by '::' with the last level containing multiple options with the same postal_code separated by '||'

#### example from Mexico

| country_code | postal_code | latitude | longitude | region_id |
| ------------ | ----------- | -------------- | -------------- | -------- |
| mex | 01460 | 19.376 | -99.1954 | Distrito Federal Ciudad de México::Álvaro Obregón::Alfonso XIII
| mex | 01470 | 19.374 | -99.2011 | Distrito Federal Ciudad de México::Álvaro Obregón::Molino de Rosas\|\|Alfalfar

## FAQ
- [In my country multiple cities can have the same postal code?](#in-my-country-multiple-cities-can-have-the-same-postal-code-what-do-i-do)
- [When we group together multiple cities, which location should we keep?](#when-we-group-together-multiple-cities-which-location-should-we-keep)

### In my country multiple cities can have the same postal code. What do I do?
Most of the time these cities are relatively small and are grouped together for convenience. Right now information at the postal code level is sufficient for the self-reporting process. Grouping should (if possible) occur to either the biggest or most important city in the region or to an appropriate name. Joining the cities by ";" is another possibility.

### When we group together multiple cities, which location should we keep?
Location should be kept to the city selected for the location or can be set to the geometric mean of the locations involved.

## Datasources
- Postal codes can also be found at: https://www.geonames.org/ might not be completely up to date but hosts a lot of info.
- Some good sources can be found at: https://datahub.io/
  - Country codes: https://datahub.io/core/country-codes
  - Language codes: https://datahub.io/core/language-codes
  - Airport codes: https://datahub.io/core/airport-codes
  
## Source by country

| Country | Source | language used for parsing |
| --- | --- | ---|
| Switzerland | [Official postal_codes in WGS84](https://www.cadastre.ch/en/services/service/registry/plz.html) | Python / Jupyter |
| Mexico | [Geonames.org MX](http://download.geonames.org/export/zip/MX.zip) | Python / Jupyter |
| India | [Geonames.org IN](http://download.geonames.org/export/zip/IN.zip) | Python / Jupyter |
| Poland | [Geonames.org IN](http://download.geonames.org/export/zip/PL.zip) | Python / Jupyter |
