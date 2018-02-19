[![Build Status](https://travis-ci.org/hunsalz/in-app-search.svg?branch=master)](https://travis-ci.org/hunsalz/in-app-search)
[![License](https://img.shields.io/badge/license-MIT%20License-blue.svg)](http://doge.mit-license.org)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/hunsalz/in-app-search)

# \<in-app-search\>

An implementation of material design in app search: [Search pattern](https://www.google.com/design/spec/patterns/search.html#search-in-app-search)

<!--
```
<custom-element-demo height="370">
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="in-app-search.html">
    <style>
    </style>
    <dom-bind>
      <template is="dom-bind">
        <in-app-search expanded placeholder="Search"></in-app-search>
      </template>
    </dom-bind>
  </template>
</custom-element-demo>
```
-->

Watch a [live demo ↗](http://hunsalz.github.io/in-app-search/components/in-app-search/demo/)

## Install dependencies and run the demo locally

1. Install all dependencies via [Bower](https://bower.io/) in the repo directory:

```
    bower install
```

2. Run the demo automatically in your browser via the Polymer development server part of [Polymer CLI](https://www.npmjs.com/package/polymer-cli) from the project directory:

```
    polymer serve --open
```

## Usage

```html
<in-app-search expanded placeholder="Search"></in-app-search>
```

The above example illustrates the usage of `<web-socket>` in a [Polymer](https://www.polymer-project.org) app.

Attributes explained:

* __expanded__ = True while search field is expanded
* __placeholder__ = Specifies a short hint that describes the expected value of the search field
