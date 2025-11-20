import { createApp, h, reactive, watch } from "vue";
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
    if (attr === "name") this._props.name = newVal;
    if (attr === "age") this._props.age = Number(newVal);
  }

  set listData(val) {
    this._props.listData = val || [];
  }

  connectedCallback() {
    if (!this.vueApp) {
      this.vueApp = createApp({
        render: () => h(UserCard, this._props)
      }).use(ElementPlus);

      this.vueApp.mount(this);

      watch(this._props, () => {
        this.vueApp._instance.update();
      }, { deep: true });
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
