import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Person } from './PersonTypes';

type FormValues = Omit<Person, 'id'>; // Exclude ID as it's generated separately

interface PersonFormModalProps {
  onClose: () => void;
  onSubmit: (person: Person) => void;
  defaultValues?: Person | null; // Default values for editing
}

const PersonFormModal: React.FC<PersonFormModalProps> = ({
  onClose,
  onSubmit,
  defaultValues,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: defaultValues || undefined,
  });

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    const id = defaultValues?.id || Date.now().toString(); // Generate ID if not editing
    onSubmit({ ...data, id });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-auto">
      <div className="bg-white p-6 rounded-md w-2/3">
        <h2 className="text-xl font-semibold mb-4">
          {defaultValues ? 'Edit Person' : 'Add New Person'}
        </h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          {/* First and Last Name */}
          <div className="grid grid-cols-2 gap-4 md-10">
            <div className="relative">
              <input
                {...register('firstName', {
                  required: 'First Name is required',
                })}
                id="firstName"
                type="text"
                className="input-box"
                placeholder="First Name"
              />
              <label htmlFor="firstName" className="input-box-label">
                First Name
              </label>
              {errors.firstName && (
                <span className="text-sm text-red-500">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div className="relative">
              <input
                {...register('lastName', { required: 'Last Name is required' })}
                id="lastName"
                type="text"
                className="input-box"
                placeholder="Last Name"
              />
              <label htmlFor="lastName" className="input-box-label">
                Last Name
              </label>
              {errors.lastName && (
                <span className="text-sm text-red-500">
                  {errors.lastName.message}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="relative mt-10">
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email format',
                },
              })}
              id="email"
              type="email"
              className="input-box"
              placeholder="Email"
            />
            <label htmlFor="email" className="input-box-label">
              Email
            </label>
            {errors.email && (
              <span className="text-sm text-red-500">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Phone */}
          <div className="relative mt-10">
            <input
              {...register('phone', {
                required: 'Phone is required',
              })}
              id="phone"
              className="input-box"
              placeholder="Phone number"
            />
            <label htmlFor="phone" className="input-box-label">
              Phone
            </label>

            {errors.phone && (
              <span className="text-sm text-red-500">
                {errors.phone.message}
              </span>
            )}
          </div>

          {/* Street */}
          <div className="relative mt-10">
            <input
              {...register('address')}
              id="street"
              type="string"
              className="input-box"
              placeholder="Street"
            />
            <label htmlFor="street" className="input-box-label">
              Address
            </label>
          </div>

          {/*City, State, ZipCode*/}
          <div className="grid grid-cols-3 gap-4 md-10">
            {/* City */}
            <div className="relative mt-10">
              <input
                {...register('city')}
                id="city"
                type="string"
                className="input-box"
                placeholder="City"
              />
              <label htmlFor="city" className="input-box-label">
                City
              </label>
            </div>

            {/* State */}
            <div className="relative mt-10">
              <input
                {...register('state')}
                id="state"
                type="string"
                className="input-box"
                placeholder="State"
              />
              <label htmlFor="state" className="input-box-label">
                State
              </label>
            </div>

            {/* Zipcode */}
            <div className="relative mt-10">
              <input
                {...register('zipcode')}
                id="zipcode"
                className="input-box"
                placeholder="Zipcode"
              />
              <label htmlFor="zipcode" className="input-box-label">
                Zipcode
              </label>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-10">
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonFormModal;
