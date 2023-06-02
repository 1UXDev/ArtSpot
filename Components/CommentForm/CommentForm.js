import { uid } from "uid";

export default function CommentForm({ slug, comments, setComments }) {
  function handleSubmit(event) {
    event.preventDefault();
    let formName = event.target.elements.name.value;
    let formText = event.target.elements.comment.value;

    // get Time & Date
    let date = new Date();
    let formDate = date.toDateString();
    let formTime = date.getHours() + ":" + date.getMinutes();

    //define id
    let commentID = uid();

    setComments([
      ...comments,
      {
        id: commentID,
        slug: slug,
        name: formName,
        text: formText,
        date: formDate,
        time: formTime,
      },
    ]);

    event.target.reset();
    event.target.elements.name.focus();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formContent">
        <div>
          <label htmlFor="name">Your name *</label>
          <input
            name="name"
            type="text"
            placeholder="How should we call you?"
            id="name"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="comment">Your Comment *</label>
          <textarea
            name="comment"
            type="text"
            rows="6"
            placeholder="What are your thoughts?"
            id="comment"
            required
          ></textarea>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
