// components/Dropdown/CustomDropdown.js
import React from 'react';
import { Dropdown, Menu, Button } from 'antd';

const CustomDropdown = ({ menuItems, buttonLabel }) => {
    const menu = (
        <Menu>
            {menuItems.map((item, index) => (
                <Menu.Item key={index} onClick={item.onClick}>
                    {item.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']}>
            <Button>{buttonLabel}</Button>
        </Dropdown>
    );
};

export default CustomDropdown;
