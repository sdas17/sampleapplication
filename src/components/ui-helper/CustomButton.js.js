import React from 'react';
import { Button } from 'antd';

const CustomButton = ({
    type = "default",           // Default button type
    icon,                       // Button icon
    onClick,                   // Click event handler
    children,                  // Button label
    variant,                   // Variant for styling
}) => {
    let buttonStyle;

    switch (children) {
        case "Clear":
            buttonStyle = {
                backgroundColor: 'gray',
                color: 'white',
                height: '35px',
            };
            break;
        case "Edit":
            buttonStyle = {
                backgroundColor: 'lightblue',
                color: 'white',
                height: '35px',
            }
            break;
        case "Delete":
            buttonStyle = {
                backgroundColor: 'delete',
                color: 'white',
                height: '35px',
            }
            break;
        case "Search":
            buttonStyle = {
                backgroundColor: "#4B0082",
                color: 'white',
                height: '35px',
            };
            break;
        case "Refugee":
            buttonStyle = {
                backgroundColor: 'red',
                color: 'white',
                height: '35px',
                paddingTop: '1px',
            };
            break;
        case " ":
            buttonStyle = {
                backgroundColor: 'black',
                color: 'white',
                height: '35px',
                paddingTop: '1px',
            }
            break;
        default:
            buttonStyle = {
                backgroundColor: 'white',
                color: 'white',
                height: '35px',
                paddingTop: '1px',

            };
            break;
    }

    return (
        <Button
            type={type}
            icon={icon}
            onClick={onClick}
            style={buttonStyle}
            className={variant}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
