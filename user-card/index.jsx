import React from "react";
import { createRoot } from "react-dom/client";
import UserCard from "./UserCard.jsx";
import "antd/dist/reset.css";  // 必须引入 Antd 样式

class UserCardElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ["name", "age"];
  }

  connectedCallback() {
    this.renderReact();
  }

  attributeChangedCallback() {
    this.renderReact();
  }

  renderReact() {
    const name = this.getAttribute("name") || "unknown";
    const age = this.getAttribute("age") || "0";

    if (!this.root) {
      const container = document.createElement("div");
      this.shadowRoot.appendChild(container);
      this.root = createRoot(container);
    }

    this.root.render(<UserCard name={name} age={age} />);
  }
}

customElements.define("user-card", UserCardElement);
