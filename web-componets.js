class WCTable extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const table = document.createElement('table');

    shadow.appendChild(table);
  }
}

// Define the new element
customElements.define('wc-table', WCTable);
