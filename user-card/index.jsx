import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Card, Descriptions, Avatar, List } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "antd/dist/reset.css"; // 全局引入 AntD 样式

// 内部 React 组件
function UserCard({ name, age,listData = [] }) {
  const [height, setHeight] = useState(260);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight((prev) => prev + 10); // 每秒增加高度10px
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card
      style={{
        width: 260,
        height: height,
        borderRadius: 16,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transition: "height 0.5s ease",
        background: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
        overflow: "hidden",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <Avatar size={64} icon={<UserOutlined />} />
        <h3 style={{ marginTop: 12, color: "#fff" }}>{name}</h3>
      </div>

      <Descriptions
        size="small"
        column={1}
        bordered
        style={{
          background: "rgba(255,255,255,0.2)",
          borderRadius: 8,
        }}
      >
        <Descriptions.Item label="Name" style={{ color: "#fff" }}>
          {name}
        </Descriptions.Item>
        <Descriptions.Item label="Age" style={{ color: "#fff" }}>
          {age}
        </Descriptions.Item>
      </Descriptions>

      <List
        itemLayout="horizontal"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

// WebComponent 定义（不使用 shadow DOM）
class UserCardElement extends HTMLElement {
  constructor() {
    super();
    this._listData = [];
    this.root = null; // 显式声明一下
  }

  static get observedAttributes() {
    return ["name", "age"];
  }

  set listData(val) {
    this._listData = val || [];
    this.renderReact(); 
  }

  get listData() {
    return this._listData;
  }

  connectedCallback() {
    this.renderReact(); 
  }

  attributeChangedCallback() {
    this.renderReact();
  }

  disconnectedCallback() {
    // 可选：卸载 React
    if (this.root) {
      this.root.unmount();
      this.root = null;
    }
  }

  renderReact() {
    // 🔴 关键：懒初始化 root
    if (!this.root) {
      this.root = createRoot(this);
    }

    const name = this.getAttribute("name") || "unknown";
    const age = this.getAttribute("age") || "0";

    this.root.render(
      <UserCard name={name} age={age} listData={this._listData} />
    );
  }
}

customElements.define("user-card", UserCardElement);
