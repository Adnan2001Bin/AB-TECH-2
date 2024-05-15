import React from 'react';


const Input = React.forwardRef((props ,ref) => {
  return (
    <div >
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className='pl-2 ml-2' ref={ref} {...props.input} />
    </div>
  );
});

export default Input;