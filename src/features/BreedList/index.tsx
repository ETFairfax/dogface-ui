import React from 'react'
import { useSelector } from 'store/hooks/useSelector'
import BreedListItem from './BreedListItem'

const BreedList: React.FC = () => {
    const { groups } = useSelector(({ breedGroups }) => breedGroups)

    return (
        <table className='table-auto border-collapse w-full'>
            <thead>
                <tr className='text-brown text-left'>
                    <th>Bread group</th>
                    <th>Number of breeds</th>
                </tr>
            </thead>
            <tbody>
                {groups.map((group) => (
                    <BreedListItem key={group.name} {...group} />
                ))}
            </tbody>
        </table>
    )
}

export default BreedList
