// CustomSelect.js
import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const SelectForm = ({ placeholder, options, onChange, className, ...props }) => {
    return (
        <Select placeholder={placeholder} onChange={onChange} className={className} {...props}>
            {options.map((option) => (
                <Option key={option.value} value={option.value}>
                    {option.label}
                </Option>
            ))}
        </Select>
    );
};

export default SelectForm;
