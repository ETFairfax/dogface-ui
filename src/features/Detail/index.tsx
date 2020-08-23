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
            <div className='flex justify-between mb-4'>
                <div>
                    <h2>{selection?.name}</h2>
                    <p>
                        Sub breeds:{' '}
                        {selection?.breeds.map((breed, i) => [
                            i > 0 && ', ',
                            <span className='text-brown' key={i}>
                                {breed}
                            </span>
                        ])}
                    </p>
                </div>
                <button
                    className='bg-brown text-white py-2 px-4'
                    onClick={handleChangePictureClick}
                >
                    Change Pictures
                </button>
            </div>
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

            <Link to='/'>
                <button
                    className='bg-transparent text-brown py-2 px-4 border border-brown hover:bg-brown hover:text-white'
                    onClick={handleChangePictureClick}
                >
                    Back
                </button>
            </Link>
        </>
    )
}

export default Detail
