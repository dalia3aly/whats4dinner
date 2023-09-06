// hooks/subscribeFormInput.js
import { useState } from 'react';

export function subscribeFormInput(initialValue, type = 'text') {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    type === 'checkbox' ? setValue(e.target.checked) : setValue(e.target.value);
  }

  const reset = () => (type === 'checkbox' ? setValue(false) : setValue(''));

  const valid = () => (type !== 'checkbox' ? value.trim() !== '' : true);

  const inputProps = {
    value,
    onChange: handleChange,
    type,
  };

  return [inputProps, reset, valid];
}
