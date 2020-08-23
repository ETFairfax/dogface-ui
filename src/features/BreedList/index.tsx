import React from 'react'
import { useSelector } from 'store/hooks/useSelector'
import BreedListItem from './BreedListItem'

const BreedList: React.FC = () => {
    const { groups } = useSelector(({ breedGroups }) => breedGroups)

    return (
        <div>
            {groups.map((group) => (
                <BreedListItem {...group} />
            ))}
        </div>
    )
}

export default BreedList
