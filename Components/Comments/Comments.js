export default function Comment({ slug, handleDelete }) {
  const commentData = JSON.parse(localStorage.getItem(slug));

  return (
    <ul className="commentContainer">
      <h3>Comments on the Artwork</h3>
      {commentData.length < 1 ? (
        <p className="nothingHere">
          Nothing here yet. Why dont you creat the first comment?
        </p>
      ) : (
        commentData.map((comment) => {
          return (
            <li key={comment.id}>
              <div className="textContent">
                <h4>{comment.name}</h4>
                <p>{comment.text}</p>
              </div>
              <div className="dateTime">
                <p>{comment.date}</p>
                <p>{comment.time}</p>
              </div>
              <button onClick={() => handleDelete(comment.id)}>
                Delete Comment
              </button>
            </li>
          );
        })
      )}
    </ul>
  );
}
