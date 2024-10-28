import React from 'react'

const MySelect = ({options, defeaultValue, value, onChange}) => {

    return (
    <select vaalue={value} onChange={event => onChange(e.target.value)} className='border-2 border-black mr-10 mt-3 mb-3 ml-3 rounded-md'>
        <option disabled={true} value="">{defeaultValue}</option>
        {options.map(option => 
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
            )}
    </select>
    )
  }

  export default MySelect;