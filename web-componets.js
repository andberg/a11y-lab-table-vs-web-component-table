class WCTable extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-table", WCTable);

class WCTableBody extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-body", WCTableBody);

class WCRow extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");

    shadow.appendChild(slot);
  }
}
customElements.define("wc-tr", WCRow);

class WCTableHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-th", WCRow);

class WCTableDataCell extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-td", WCTableDataCell);
