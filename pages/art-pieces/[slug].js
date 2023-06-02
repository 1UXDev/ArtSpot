import { useRouter } from "next/router";
import ArtPieceDetails from "@/Components/ArtPieceDetails/ArtPieceDetails";
import CommentForm from "@/Components/CommentForm/CommentForm";
import Comment from "@/Components/Comments/Comments";
import useLocalStorageState from "use-local-storage-state";

export default function Slug({ data, favorites,
  setFavorites, }) {
  const router = useRouter();
  const { slug } = router.query;

  const { imageSource, name, artist, year, genre, colors } = data.find(
    (currentArtwork) => currentArtwork.slug === slug
  );

  const [comments, setComments] = useLocalStorageState(slug, {
    defaultValue: [],
  });

  // delete Button
  function handleDelete(id) {
    let deletedComment = comments.filter((comment) => comment.id !== id);
    setComments(deletedComment);
  }

  return (
    <div>
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
      <ArtPieceDetails
        image={imageSource}
        title={name}
        artist={artist}
        year={year}
        genre={genre}
        colors={colors}
        favorites={favorites}
        setFavorites={setFavorites}
        slug={slug}
      />
      <Comment slug={slug} handleDelete={handleDelete} />
      <CommentForm slug={slug} comments={comments} setComments={setComments} />
    </div>
  );
}
