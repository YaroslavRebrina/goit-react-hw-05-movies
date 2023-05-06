const ReviewItem = ({ author, comment }) => {
  return (
    <>
      <h3>Author: {author}</h3>
      <p>{comment}</p>
    </>
  );
};

export default ReviewItem;
