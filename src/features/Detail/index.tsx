import React, { useEffect } from 'react'
import { useSelector } from 'store/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchBreedImagesThunk } from 'store/breeds/thunks'

const Detail: React.FC = () => {
    const { group } = useParams()
    const dispatch = useDispatch()
    const selection = useSelector(({ breedGroups }) =>
        breedGroups.groups.find((g) => g.name === group)
    )

    useEffect(() => {
        dispatch(fetchBreedImagesThunk(group))
    }, [group])

    const hasImages = selection?.images && selection.images.length > 0

    return (
        <>
            {hasImages &&
                selection?.images.map((image) => (
                    <img key={image} height='280px' src={image} alt='' />
                ))}
        </>
    )
}

export default Detail
