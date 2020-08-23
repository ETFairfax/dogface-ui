import React from 'react'
import { useSelector } from 'store/hooks/useSelector'
import BreedListItem from './BreedListItem'

const BreedList: React.FC = () => {
    const { breedGroups } = useSelector(({ breedGroups }) => breedGroups)

    return (
        <div>
            {breedGroups.map((breedGroup) => (
                <BreedListItem {...breedGroup} />
            ))}
        </div>
    )
}

export default BreedList
