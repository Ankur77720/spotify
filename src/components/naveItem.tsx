import React, { MouseEventHandler } from 'react'
import * as RemixIcon from "@remixicon/react"

interface navItemProps {
    label: string,
    Icon: RemixIcon.RemixiconComponentType,
    forwardOnClick: MouseEventHandler<HTMLButtonElement>,
    forwardRef: React.RefObject<HTMLButtonElement>
}

const NaveItem: React.FC<navItemProps> = ({ label, Icon, forwardOnClick, forwardRef }) => {
    return (
        <button ref={forwardRef} onClick={forwardOnClick} className='flex flex-col justify-center items-center' >
            <Icon className='opacity-40' />
            <p className='opacity-60' >Home</p>
        </button>
    )
}

export default NaveItem
