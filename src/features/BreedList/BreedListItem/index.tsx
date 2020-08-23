import React from 'react'
import { IBreedGroup } from 'store/breeds/types'

const BreedListItem: React.FC<IBreedGroup> = ({ name, breeds }) => (
    <div>
        {name} {breeds.length}
    </div>
)

export default BreedListItem
