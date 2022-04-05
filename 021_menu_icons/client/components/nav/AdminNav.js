import React, { useState } from "react";
import { Menu, Button, Layout } from "antd";
import Link from "next/link";
import {
  PieChartOutlined,
  MailOutlined,
  PushpinOutlined,
  CameraOutlined,
  UserSwitchOutlined,
  SettingOutlined,
  BgColorsOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["2", "6", "10"]}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<SettingOutlined />}>
          <Link href="/admin">
            <a>Dashboard</a>
          </Link>
        </Menu.Item>

        {/* posts */}
        <SubMenu key="2" icon={<PushpinOutlined />} title="Posts">
          <Menu.Item key="3">
            <Link href="/admin/posts">
              <a>All Posts</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link href="/admin/posts/new">
              <a>Add New</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link href="/admin/categories">
              <a>Categories</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* library */}
        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item key="7">
            <Link href="/admin/media/library">
              <a>Library</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link href="/admin/media/new">
              <a>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* comments */}
        <Menu.Item key="9" icon={<CommentOutlined />}>
          <Link href="/admin/comments">
            <a>Comments</a>
          </Link>
        </Menu.Item>

        {/* users */}
        <SubMenu key="10" icon={<UserSwitchOutlined />} title="Users">
          <Menu.Item key="11">
            <Link href="/admin/users">
              <a>All Users</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="12">
            <Link href="/admin/users/new">
              <a>Add New</a>
            </Link>
          </Menu.Item>
        </SubMenu>

        {/* profile */}
        <Menu.Item key="5" icon={<UserOutlined />}>
          <Link href="/admin/userid">
            <a>Profile</a>
          </Link>
        </Menu.Item>

        {/* Customize */}
        <Menu.Item key="5" icon={<BgColorsOutlined />}>
          <Link href="/admin/customize">
            <a>Customize</a>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminNav;
