import React, { FC } from 'react'

interface inputProps {
    label?: string,
    name?: string,
    type?: string,
    bind?: Function
}

const Input: FC<inputProps> = ({ label, name, type, bind }) => {
    return (
        <div className='w-full flex flex-col gap-2 text-xl'>
            <label htmlFor="" className='font-semibold text-2xl'>
                What's your username ?
            </label>
            <input
                className='p-4 bg-ui-default  text-2xl rounded-md border-transparent w-full outline-none text-text-primary'
                type="text"
                name='username'
                id='username'
            />``
        </div>
    )
}

export default Input