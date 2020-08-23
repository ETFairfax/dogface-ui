import React from 'react'
import { Link } from 'react-router-dom'
import { IBreedGroup } from 'store/breeds/types'

const BreedListItem: React.FC<IBreedGroup> = ({ name, breeds }) => (
    <div>
        <Link to={`/${name}`}>
            {name} {breeds.length}
        </Link>
    </div>
)

export default BreedListItem
