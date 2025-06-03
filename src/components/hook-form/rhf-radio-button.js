import clsx from 'clsx'
import { Controller, useFormContext } from 'react-hook-form'

export function RHFRadioButton({ id, name, label, value, disabled }) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <div className="flex flex-row items-center space-x-[6px]">
            <input
              id={id}
              {...field}
              type="radio"
              value={value}
              className={clsx(
                'appearance-none relative aspect-square w-[18px] border-2 rounded-full duration-100 before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[6px] before:aspect-square before:rounded-full before:bg-primary-700 before:duration-200',
                field.value === value
                  ? 'border-primary-700 before:opacity-100'
                  : 'border-dark-500 before:opacity-0',
                disabled ? 'cursor-not-allowed' : 'cursor-pointer'
              )}
              disabled={disabled}
            />
            <label
              htmlFor={id}
              className={clsx(
                'desktop-regular-h6',
                disabled ? 'cursor-not-allowed text-dark-500' : 'cursor-pointer text-dark-900'
              )}
            >
              {label}
            </label>
          </div>
        )
      }}
    />
  )
}
