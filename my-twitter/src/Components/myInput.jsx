import React from 'react'

const MyInput = React.forwardRef((props, ref) => {

    return (
      <input ref={ref} className='border-2 border-black mr-10 mt-3 mb-3 ml-3 rounded-md' name='body' {...props} />
    )
  });

export default MyInput;
