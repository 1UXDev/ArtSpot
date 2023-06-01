export default function Comment({ slug, handleDelete }) {
  const commentData = JSON.parse(localStorage.getItem(slug));

  return (
    <ul>
      {!commentData
        ? "nothing here"
        : commentData.map((comment) => {
            return (
              <li key={comment.id}>
                <h3>{comment.name}</h3>
                <p>{comment.text}</p>
                <div className="dateTime">
                  <p>{comment.date}</p>
                  <p>{comment.time}</p>
                </div>
                <button onClick={() => handleDelete(comment.id)}>x</button>
              </li>
            );
          })}
    </ul>
  );
}
