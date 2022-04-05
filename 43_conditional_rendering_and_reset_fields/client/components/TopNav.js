import { useState, useContext } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

const TopNav = () => {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  // state
  const [current, setCurrent] = useState("mail");
  // hooks
  const router = useRouter();

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const signOut = () => {
    // remove from local storage
    localStorage.removeItem("auth");
    // remove from context
    setAuth({
      user: null,
      token: "",
    });
    // redirect to login
    router.push("/signin");
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link href="/">
          <a>CMS</a>
        </Link>
      </Menu.Item>

      {auth?.user === null && (
        <>
          <Menu.Item
            style={{ marginLeft: "auto" }}
            key="signup"
            icon={<UserAddOutlined />}
          >
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="signin" icon={<UserOutlined />}>
            <Link href="/signin">
              <a>Signin</a>
            </Link>
          </Menu.Item>
        </>
      )}

      {auth?.user !== null && (
        <>
          <SubMenu
            key="SubMenu"
            icon={<SettingOutlined />}
            title="Dashboard"
            style={{ marginLeft: "auto" }}
          >
            <Menu.ItemGroup title="Management">
              <Menu.Item key="setting:2">
                <Link href="/admin">
                  <a>Admin</a>
                </Link>
              </Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>

          <Menu.Item
            onClick={() => signOut()}
            key="signout"
            icon={<LogoutOutlined />}
          >
            <a>Sign out</a>
          </Menu.Item>
        </>
      )}

      <Menu.Item>
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
