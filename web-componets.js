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

class WCWithTwoRows extends HTMLElement {
  constructor() {
    super();
    this.style.display = "contents";
    const shadow = this.attachShadow({ mode: "open" });

    const trForSlot = document.createElement("wc-tr");
    trForSlot.setAttribute("role", "row");
    trForSlot.style.display = "table-row";
    const slot = document.createElement("slot");
    trForSlot.appendChild(slot);

    const tr = document.createElement("wc-tr");
    tr.setAttribute("role", "row");
    tr.style.display = "table-row";
    const td = document.createElement("wc-td");
    td.innerHTML = "Inner html i td";
    td.setAttribute("colspan", "4");
    tr.appendChild(td);

    shadow.appendChild(trForSlot);
    shadow.appendChild(tr);
  }
}
customElements.define("wc-two-rows", WCWithTwoRows);
