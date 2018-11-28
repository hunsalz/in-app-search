[![Build Status](https://travis-ci.org/hunsalz/in-app-search.svg?branch=master)](https://travis-ci.org/hunsalz/in-app-search)
[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](http://doge.mit-license.org)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/hunsalz/in-app-search)

# Watch  [\<in-app-search\>↗](https://hunsalz.github.io/in-app-search/demo) live

A [Polymer 3.0](https://polymer-library.polymer-project.org/3.0/docs/devguide/feature-overview) element of material design in app search: [Search pattern](https://www.google.com/design/spec/patterns/search.html#search-in-app-search)

## Install dependencies and run the demo locally

1. Build \<web-socket\> in the repo directory:

```
$ polymer build
```

2. Run the demo automatically in your browser:

```
$ polymer serve --open
```

## Usage

```html
<in-app-search expanded placeholder="Search"></in-app-search>
```

Attributes explained:

* __expanded__ = True while search field is expanded
* __placeholder__ = Specifies a short hint that describes the expected value of the search field
