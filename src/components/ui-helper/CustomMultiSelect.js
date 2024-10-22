// components/MultiSelect/CustomMultiSelect.js
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const CustomMultiSelect = ({ options, placeholder, onChange, value }) => {
    return (
        <Select
            mode="multiple"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            style={{ width: '100%' }}
        >
            {options.map((option, index) => (
                <Option key={index} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default CustomMultiSelect;
