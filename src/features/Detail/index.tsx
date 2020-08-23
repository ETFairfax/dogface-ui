import React, { useEffect } from 'react'
import { useSelector } from 'store/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { fetchBreedImagesThunk } from 'store/breeds/thunks'

const Detail: React.FC = () => {
    const { group } = useParams()
    const dispatch = useDispatch()
    const selection = useSelector(({ breedGroups }) =>
        breedGroups.groups.find((g) => g.name === group)
    )

    const handleChangePictureClick = () => {
        dispatch(fetchBreedImagesThunk(group, true))
    }

    useEffect(() => {
        dispatch(fetchBreedImagesThunk(group, false))
    }, [group])

    const hasImages = selection?.images && selection.images.length > 0

    return (
        <>
            <button
                className='bg-brown text-white py-2 px-4'
                onClick={handleChangePictureClick}
            >
                Change Pictures
            </button>
            <h2>{selection?.name}</h2>
            <p>
                Sub breeds:
                {selection?.breeds.map((breed) => (
                    <span>{breed}</span>
                ))}
            </p>
            {hasImages && (
                <div className='flex flex-wrap justify-between'>
                    {selection?.images.map((image) => (
                        <img
                            key={image}
                            src={image}
                            alt=''
                            className='shadow-xl'
                        />
                    ))}
                </div>
            )}
            <Link to='/'>Back</Link>
        </>
    )
}

export default Detail
