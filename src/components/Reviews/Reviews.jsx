import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import movieAPI from 'services/moviesAPI';

import ReviewItem from 'components/ReviewItem/ReviewItem';

const Reviews = () => {
  const [review, setReview] = useState([]);

  const location = useLocation();
  useEffect(() => {
    const getReviews = async () => {
      const response = await movieAPI.fetchMovieRewievs(location.state);
      console.log(response);
      setReview(response.data.results);
    };

    try {
      getReviews();
    } catch (error) {
      console.log(error.messege);
    }
  }, [location.state]);

  return (
    <>
      {review.length === 0 ? (
        <p>There no reviews</p>
      ) : (
        review.map(({ author, content }) => {
          return <ReviewItem author={author} comment={content} />;
        })
      )}
    </>
  );
};

export default Reviews;

// const Cast = () => {
//

//

//
// export default Cast;
