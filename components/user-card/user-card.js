class n extends HTMLElement {
  connectedCallback() {
    const e = this.getAttribute("name") || "unknown";
    this.innerHTML = `
<div style="padding:12px;border:1px solid #ddd;border-radius:8px;">
User: <strong>${e}</strong>
</div>
`;
  }
}
customElements.define("user-card", n);
