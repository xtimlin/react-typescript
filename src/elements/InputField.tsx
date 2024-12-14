import React, { FC } from 'react';

interface InputFieldProps {
  label?: string;
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

const InputField: FC<InputFieldProps> = ({
                                           label,
                                           value,
                                           onChange,
                                           placeholder = '',
                                           type = 'text',
                                           className = '',
                                         }) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-2 text-sm font-medium text-gray-400">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default InputField;
