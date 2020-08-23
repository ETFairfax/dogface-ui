import React from 'react'
import { IBreed } from 'store/breeds/types'

const BreedListItem: React.FC<IBreed> = ({ name }) => (
    <div className=''>
        <div className=''>{name}</div>
    </div>
)

export default BreedListItem
