import React from 'react';
import { Card as AntCard, Button } from 'antd';
const Card = ({ title, description, image, actions }) => {
    return (
        <AntCard
            hoverable
            style={{ width: 300, margin: '16px' }}
            cover={image && <img alt={title} src={image} />}
        >
            <AntCard.Meta title={title} description={description} />
            <div style={{ marginTop: 16 }}>
                {actions && actions.map((action, index) => (
                    <Button
                        key={index}
                        type={action.type}
                        onClick={action.onClick}
                        style={{ marginRight: '8px' }}
                    >
                        {action.label}
                    </Button>
                ))}
            </div>
        </AntCard>
    );
};

export default Card;