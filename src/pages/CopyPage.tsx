import React, { useEffect, useState } from 'react';
import InputField from '../elements/InputField';

interface Field {
  label: string;
  value: string;
}

const CopyPage: React.FunctionComponent = () => {
  const [counter, setCounter] = useState(1);
  const [email, setEmail] = useState('');
  const [dummyEmail, setDummyEmail] = useState('');
  const [copiedVal, setCopiedVal] = useState('');

  const [fields, setFields] = useState<Field[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFieldLabel, setNewFieldLabel] = useState('');
  const [newFieldValue, setNewFieldValue] = useState('');

  const btnClass =
    'text-blue-700 hover:text-white border hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2';

  useEffect(() => {
    if (email.includes('@')) {
      const temp = email.split('@');
      setDummyEmail(temp[0] + '+' + counter + '@' + temp[1]);
    } else {
      setDummyEmail(email);
    }
  }, [email, counter]);

  const handleCopy = async (text: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      console.log(`Copied: "${text}"`);
      setCopiedVal(text)
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const handleFieldChange = (index: number, newValue: string) => {
    setFields((prevFields) =>
      prevFields.map((field, i) =>
        i === index ? { ...field, value: newValue } : field
      )
    );
  };

  const handleAddField = () => {
    if (newFieldLabel.trim() && newFieldValue.trim()) {
      setFields([...fields, { label: newFieldLabel, value: newFieldValue }]);
      setNewFieldLabel('');
      setNewFieldValue('');
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <InputField
        label="Counter"
        value={counter.toString()}
        onChange={(newValue) => setCounter(Number(newValue))}
        placeholder="Enter your Counter"
        type="number"
        className="mb-4"
      />

      <InputField
        label="Email"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
        type="email"
        className="mb-4"
      />

      {fields.map((field, index) => (
        <InputField
          key={field.label}
          label={field.label}
          value={field.value}
          onChange={(newValue) => handleFieldChange(index, newValue)}
          type="text"
          className="mb-4"
        />
      ))}

      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Add Field
      </button>

      {email.length > 0 && <p>Next Email value: {dummyEmail}</p>}

      {copiedVal.length > 0 && <div><span className='text-red-500 font-bold'>{copiedVal}</span> <span>copied</span></div>}

      <button
        type="button"
        onClick={() => {
          handleCopy(dummyEmail);
          setCounter(counter + 1);
        }}
        className={btnClass}
      >
        Copy Dummy Email
      </button>

      {fields.map((field, index) => (
        <button
          key={`${field.label}-button`}
          type="button"
          onClick={() => handleCopy(field.value)}
          className={btnClass}
        >
          Copy {field.label}
        </button>
      ))}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-bold mb-4">Add New Field</h2>
            <InputField
              label="Field Name"
              value={newFieldLabel}
              onChange={setNewFieldLabel}
              placeholder="Enter field name"
              type="text"
              className="mb-4"
            />
            <InputField
              label="Field Value"
              value={newFieldValue}
              onChange={setNewFieldValue}
              placeholder="Enter field value"
              type="text"
              className="mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleAddField}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CopyPage;
