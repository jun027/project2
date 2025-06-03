import PropTypes from 'prop-types'
import { Controller, useFormContext } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import clsx from 'clsx'

// ----------------------------------------------------------------------

export default function RHFTextField({ name, helperText, disabledError, type, ...other }) {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          type={type}
          value={type === 'number' && field.value === 0 ? '' : field.value}
          onChange={(event) => {
            if (type === 'number') {
              field.onChange(Number(event.target.value))
            } else {
              field.onChange(event.target.value)
            }
          }}
          error={!!error}
          helperText={error && !disabledError ? error?.message : helperText}
          className={clsx('rhf-text-field', other.disabled && 'field-disabled')}
          {...other}
        />
      )}
    />
  )
}

RHFTextField.propTypes = {
  helperText: PropTypes.object,
  name: PropTypes.string,
  type: PropTypes.string,
}
