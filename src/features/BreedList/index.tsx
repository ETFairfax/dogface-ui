import React from 'react'
// import TaskItem from 'features/TaskList/TaskItem'
import { useSelector } from 'store/hooks/useSelector'
import BreedListItem from './BreedListItem'
// import { useDispatch } from 'react-redux'
// import { deleteTaskThunk } from 'store/breeds/thunks'
// import About from 'features/About'

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
