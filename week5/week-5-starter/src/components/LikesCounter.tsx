// Optional stretch: import and render <LikesCounter /> in App.
import { useEffect, useState } from 'react';

export default function LikesCounter() {
  const [likes, setLikes] = useState(0);
  useEffect(() => {
    console.log('Likes:', likes);
  }, [likes]);

  return <button onClick={() => setLikes(current => current + 1)}>
    Likes: {likes}
  </button>;
}
