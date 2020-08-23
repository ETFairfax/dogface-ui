import React from 'react'
import { useSelector } from 'store/hooks/useSelector'
import BreedListItem from './BreedListItem'

const BreedList: React.FC = () => {
    const { groups } = useSelector(({ breedGroups }) => breedGroups)

    return (
        <table>
            {groups.map((group) => (
                <BreedListItem key={group.name} {...group} />
            ))}
        </table>
    )
}

export default BreedList
