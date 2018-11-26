import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';

import '@polymer/iron-a11y-keys/iron-a11y-keys.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/iron-input/iron-input.js';
import '@polymer/paper-icon-button/paper-icon-button.js';

/**
 * `in-app-search`
 * An implementation of material design in app search: https://www.google.com/design/spec/patterns/search.html#search-in-app-search
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class InAppSearch extends PolymerElement {
  static get template() {
    return html`
      <style>
      :host {
        display: inline;
        font: inherit;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      :host([expanded]) {
        width: 100%;
      }

      .search-icon {
        @apply --layout-end;
        @apply --layout-self-center;
      }

      .search-box {
        background-color: var(--in-app-search-background-color, white);
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        @apply --layout-flex;
        @apply --layout-horizontal;
      }

      .search-box input {
        font-size: 20px;
        outline: 0;
        border: none;
        @apply --layout-flex;
      }

      .search-box paper-icon-button {
        color: var(--google-grey-700);
      }

      .search-box div {
        @apply --layout-self-center;
      }

      .clear-icon {
        @apply: --layout-vertical @apply --layout-center;
      }

      .clear-icon paper-icon-button {
        width: 32px;
        height: 32px;
      }
      </style>
      <template is="dom-if" if="[[!expanded]]">
        <paper-icon-button class="search-icon" icon="icons:search" noink on-tap="__toggle">
        </paper-icon-button>
      </template>
      <template id="box" is="dom-if" if="[[expanded]]">
        <div class="search-box">
          <paper-icon-button icon="icons:arrow-back" noink on-tap="__toggle"></paper-icon-button>
          <iron-a11y-keys keys="enter" on-keys-pressed="__search"></iron-a11y-keys>
          <input id="search" value="{{query::input}}" placeholder="[[placeholder]]">
          </input>
          <div class="clear-icon" hidden$="[[__isIconHidden(query)]]">
            <paper-icon-button id="clear" icon="icons:cancel" noink on-tap="__clearInput">
            </paper-icon-button>
          </div>
        </div>
      </template>
    `;
  }
  static get properties() {
    return {
      /**
       * Recent input of search field.
       */
      query: {
        type: String,
        value: '',
        notify: true
      },
      /**
       * Placeholder of search input field.
       */
      placeholder: {
        type: String,
        value: ''
      },
      /**
       * True while search field is expanded.
       */
      expanded: {
        type: Boolean,
        value: false,
        reflectToAttribute: true,
        notify: true
      }
    };
  }

  constructor() {
    super();

    // set passive gestures globally for all elements using Polymer gestures
    setPassiveTouchGestures(true);
  }

  __search(event) {
    this.dispatchEvent(new CustomEvent('search', { detail: { query: this.query } }));
  }

  __toggle(event) {
    this.expanded = !this.expanded;
    // if expanded then focus input field again
    if (this.expanded) {
      setTimeout(() => this.shadowRoot.querySelector('#search').focus(), 100);
    }
  }

  __clearInput(event) {
    this.query = '';
    // focus input field again
    this.shadowRoot.querySelector('#search').focus();
  }

  __isIconHidden(value) {
    return value.length > 0 ? false : true;
  }
}

window.customElements.define('in-app-search', InAppSearch);
