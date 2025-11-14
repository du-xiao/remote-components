class UserCard extends HTMLElement {
connectedCallback() {
const name = this.getAttribute("name") || "unknown";
this.innerHTML = `
<div style="padding:12px;border:1px solid #ddd;border-radius:8px;">
User: <strong>${name}</strong>
</div>
`;
}
}
 
customElements.define("user-card", UserCard);
