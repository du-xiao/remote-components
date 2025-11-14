import React from "react";
import { Card, Descriptions, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function UserCard({ name, age }) {
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
