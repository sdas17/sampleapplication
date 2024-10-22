// components/Header.js
import React from 'react';
import { Layout, Button } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import '../Sidebar.css'

const { Header: AntHeader } = Layout;

const Header = ({ collapsed, toggleSidebar }) => {
  return (
    <AntHeader
      style={{
        background: '#fff',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        paddingRight: '20px',
        position: 'fixed',
        width: '100%',
        zIndex: 1,
      }}
    >
      <Button type="text" onClick={toggleSidebar} style={{ fontSize: '18px', marginLeft: '20px' }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <div className="container">
        Welcome, Case Manager Name
        <img
          style={{ borderRadius: '50%', height: '50px' }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8UWsHRdJ3a1BZP7rm1fHm43sco5t8ZVKGHA&s"
          alt="not found"
        />
      </div>
    </AntHeader>
  );
};

export default Header;
