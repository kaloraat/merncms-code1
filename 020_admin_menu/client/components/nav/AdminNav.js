import React, { useState } from "react";
import { Menu, Button, Layout } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1", "sub2"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link href="/admin">
            <a>Dashboard</a>
          </Link>
        </Menu.Item>

        {/* posts */}
        <SubMenu key="sub1" icon={<MailOutlined />} title="Posts">
          <Menu.Item key="2">
            <Link href="/admin/posts">
              <a>All Posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/admin/posts/new">
              <a>Add New</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link href="/admin/categories">
              <a>Categories</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* library */}
        <SubMenu key="sub1" icon={<MailOutlined />} title="Media">
          <Menu.Item key="5">
            <Link href="/admin/media/library">
              <a>Library</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/admin/media/new">
              <a>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* comments */}
        <Menu.Item key="5">
          <Link href="/admin/comments">
            <a>Comments</a>
          </Link>
        </Menu.Item>

        {/* users */}
        <SubMenu key="sub1" icon={<MailOutlined />} title="Users">
          <Menu.Item key="5">
            <Link href="/admin/users">
              <a>All Users</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/admin/users/new">
              <a>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* profile */}
        <Menu.Item key="5">
          <Link href="/admin/userid">
            <a>Profile</a>
          </Link>
        </Menu.Item>

        {/* Customize */}
        <Menu.Item key="5">
          <Link href="/admin/customize">
            <a>Customize</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminNav;
