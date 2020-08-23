import React, { useEffect } from 'react'
import { useSelector } from 'store/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBreedImagesThunk } from 'store/breeds/thunks'

const Detail: React.FC = () => {
    let { group } = useParams()
    const dispatch = useDispatch()
    const selection = useSelector(({ breedGroups }) =>
        breedGroups.groups.find((g) => g.name === group)
    )

    useEffect(() => {
        if (selection?.images && selection.images.length === 0) {
            dispatch(fetchBreedImagesThunk(group))
        }
    }, [group])

    return <div>{group}</div>
}

export default Detail
