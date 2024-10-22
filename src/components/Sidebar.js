import React from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined, SoundOutlined, CommentOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate();  // Use navigate for programmatic navigation

  // Create a mapping of route paths to menu item keys
  const menuKeyMapping = {
    '/client-list': '1',
    '/client-card': '1', // You can map multiple paths to the same key
    '/new-client': '1',
    '/new-client-details': '1',
    '/client-history': '1',
    '/client-list-main': '1',
    '/broadcast-services': '2',
    '/new-broadcast': '2',
    '/conversion': '3',
    '/new-broadcast-chat': '2'
  };

  // Determine the selected key based on the current path
  const selectedKey = menuKeyMapping[location.pathname] || '1'; // Default to key '1'

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      width={250}
      style={{ background: '#fff', height: '100vh', position: 'fixed', left: 0, zIndex: 2 }}
    >
      <div style={{ padding: '16px', textAlign: 'center' }}>
        {!collapsed && (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3fz5E2CqxwOnRDk45okfuCeDFIGvob15N2_yGcagKqZck4fwxuNw3Tun_stXSpjx36eQ&usqp=CAU"
            alt="Logo"
            style={{ maxWidth: '150px' }}
          />
        )}
      </div>
      <Menu mode="inline" selectedKeys={[selectedKey]} style={{ height: '100%' }}>
        <Menu.Item key="1" onClick={() => navigate('/client-list')}>
          <TeamOutlined className="menu-icon" /> Clients List
        </Menu.Item>
        <Menu.Item key="2" onClick={() => navigate('/broadcast-services')}>
          <SoundOutlined className="menu-icon" /> Broadcast Services
        </Menu.Item>
        <Menu.Item key="3" onClick={() => navigate('/conversion')}>
          <CommentOutlined className="menu-icon" /> Conversations
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
