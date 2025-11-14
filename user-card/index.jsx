import React from "react";
import { createRoot } from "react-dom/client";
import { Card, Descriptions, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // 浏览器可直接用 CDN 也可以引入

// 内部 React 组件
function UserCard({ name, age }) {
  return (
    <Card
      style={{
        width: 260,
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <h3 style={{ marginTop: 12 }}>{name}</h3>
      </div>

      <Descriptions size="small" column={1} bordered>
        <Descriptions.Item label="Name">{name}</Descriptions.Item>
        <Descriptions.Item label="Age">{age}</Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

// WebComponent 定义
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
