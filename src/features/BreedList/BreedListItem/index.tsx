import React from 'react'
import { Link } from 'react-router-dom'
import { IBreedGroup } from 'store/breeds/types'

const BreedListItem: React.FC<IBreedGroup> = ({ name, breeds }) => (
    <tr>
        <td>
            <Link to={`/${name}`}>{name}</Link>
        </td>
        <td>
            <Link to={`/${name}`}>{breeds.length}</Link>
        </td>
    </tr>
)

export default BreedListItem
