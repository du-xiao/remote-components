import { createApp, h } from "vue";
import UserCard from "./components/UserCard.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

class UserCardElement extends HTMLElement {
  constructor() {
    super();
    this._props = { name: "", age: 0, listData: [] };
    this.vueApp = null;
  }

  static get observedAttributes() {
    return ["name", "age"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (attr === "name") this._props.name = newVal;
    if (attr === "age") this._props.age = Number(newVal);
    this.renderVue();
  }

  set listData(val) {
    this._props.listData = val || [];
    this.renderVue();
  }

  connectedCallback() {
    this.renderVue();
  }

  disconnectedCallback() {
    if (this.vueApp) {
      this.vueApp.unmount();
      this.vueApp = null;
    }
  }

  renderVue() {
    if (!this.isConnected) return;

    if (!this.vueApp) {
      this.vueApp = createApp({
        render: () => h(UserCard, this._props)
      }).use(ElementPlus);

      this.vueApp.mount(this);
    }
  }
}

customElements.define("user-card", UserCardElement);
