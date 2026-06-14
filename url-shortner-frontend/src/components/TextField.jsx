import React from "react";

const TextField = ({
  label,
  id,
  type,
  placeholder,
  register,
  required,
  message,
  errors,
  min,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="font-medium text-gray-700">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500"
        {...register(id, {
          required: required ? message : false,
          minLength: min
            ? {
                value: min,
                message: `Minimum ${min} characters required`,
              }
            : undefined,
        })}
      />

      {errors[id] && (
        <p className="text-red-500 text-sm">
          {errors[id].message}
        </p>
      )}
    </div>
  );
};

export default TextField;