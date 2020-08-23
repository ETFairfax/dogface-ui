import React from 'react'
import { Link } from 'react-router-dom'
import { IBreedGroup } from 'store/breeds/types'

const BreedListItem: React.FC<IBreedGroup> = ({ name, breeds }) => (
    <tr>
        <td>{name}</td>
        <td>{breeds.length}</td>
        <td>
            <Link to={`/${name}`}>View</Link>
        </td>
    </tr>
)

export default BreedListItem
