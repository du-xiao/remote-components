import { createApp, h, reactive } from "vue";
import UserCard from "./components/UserCard.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

class UserCardElement extends HTMLElement {
  constructor() {
    super();
    this._props = reactive({ name: "", age: 0, listData: [] });
    this.vueApp = null;
  }

  static get observedAttributes() {
    return ["name", "age"];
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    this._props[attr] = attr === "age" ? Number(newVal) : newVal;
  }

  set name(val) { this._props.name = val; }
  get name() { return this._props.name; }

  set age(val) { this._props.age = Number(val); }
  get age() { return this._props.age; }

  set listData(val) { this._props.listData = val || []; }
  get listData() { return this._props.listData; }

  connectedCallback() {
    if (!this.vueApp) {
      this.vueApp = createApp({
        render: () => h(UserCard, this._props)
      }).use(ElementPlus);

      this.vueApp.mount(this);
    }
  }

  disconnectedCallback() {
    if (this.vueApp) {
      this.vueApp.unmount();
      this.vueApp = null;
    }
  }
}

customElements.define("user-card-vue", UserCardElement);
