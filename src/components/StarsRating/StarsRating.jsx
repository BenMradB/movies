import React, { useState } from 'react'
import styles from './StarsRating.module.css'
import Star from '../Star/Star';
import { useMovies } from '../../context/MoviesProvider';

const StarsRating = ({
    addToWatchedListHandler,
    onCloseSelectedMovie,
    maxRating = 10,
    starSize = 30,
    starColor = 'gold',
    setState = null
}) => {
    const { dispatch } = useMovies();
    const [rating, setRating] = useState(0);
    const [tempRating, setTempRating] = useState(0);
    const stars = Array.from({ length: maxRating }, (i) => i);

    const onAddMovieHandler = () => {
        addToWatchedListHandler()
        onCloseSelectedMovie()
    }
    return (
        <div className={styles.container}>
            <div className={styles.stars}>
                <div>
                    {
                        stars.map((ele, i) => (
                            <Star
                                key={i}
                                size={starSize}
                                color={starColor}
                                fill={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                                onMouseEnter={() => setTempRating(i + 1)}
                                onMouseLeave={() => setTempRating(0)}
                                onClickRating={() => { setRating(i + 1); setState(i + 1) }}
                            />
                        ))
                    }
                </div>
                <p>{tempRating || rating || ''}</p>
            </div>
            {
                rating ? <button onClick={onAddMovieHandler}>Add to your watched list</button> : null
            }
        </div>
    )
}

export default StarsRating