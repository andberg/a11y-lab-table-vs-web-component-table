class WCTable extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("role", "table");
    this.style.display = "table";
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-table", WCTable);

class WCTableBody extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("role", "rowgroup");
    this.style.display = "table-row-group";

    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-body", WCTableBody);

class WCRow extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("role", "row");
    this.style.display = "table-row";
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");

    shadow.appendChild(slot);
  }
}
customElements.define("wc-tr", WCRow);

class WCTableHeader extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("role", "columnheader");
    this.style.fontWeight = "bold";
    this.style.padding = "0.25rem";
    this.style.display = "table-cell";
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-th", WCTableHeader);

class WCTableDataCell extends HTMLElement {
  constructor() {
    super();
    this.setAttribute("role", "cell");
    this.style.display = "table-cell";
    this.style.padding = "0.25rem";
    const shadow = this.attachShadow({ mode: "open" });
    const slot = document.createElement("slot");
    shadow.appendChild(slot);
  }
}
customElements.define("wc-td", WCTableDataCell);
