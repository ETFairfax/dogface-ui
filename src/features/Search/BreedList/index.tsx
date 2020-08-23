import React from 'react'
import { useSelector } from 'store/hooks/useSelector'
import BreedListItem from './BreedListItem'

const BreedList: React.FC<{ filter: string }> = ({ filter }) => {
    const { groups } = useSelector(({ breedGroups }) => breedGroups)

    return (
        <table className='table-fixed border-collapse w-full'>
            <thead>
                <tr className='text-brown text-left border-b border-black'>
                    <th className='w-1/3'>Bread group {filter}</th>
                    <th className='w-1/3'>Number of breeds</th>
                    <th className='w-1/3'>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {groups
                    .filter((x) => x.name.includes(filter))
                    .map((group) => (
                        <BreedListItem key={group.name} {...group} />
                    ))}
            </tbody>
        </table>
    )
}

export default BreedList
