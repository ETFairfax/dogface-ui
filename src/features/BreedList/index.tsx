import React from 'react'
// import TaskItem from 'features/TaskList/TaskItem'
import { useSelector } from 'store/hooks/useSelector'
import BreedListItem from './BreedListItem'
// import { useDispatch } from 'react-redux'
// import { deleteTaskThunk } from 'store/breeds/thunks'
// import About from 'features/About'

const BreedList: React.FC = () => {
    const { breeds } = useSelector(({ breeds }) => breeds)

    return (
        <div>
            {breeds.map((x) => (
                <BreedListItem {...x} />
            ))}
        </div>
    )
}

export default BreedList
