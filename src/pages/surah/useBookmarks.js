import { useEffect, useState } from 'react';

function useBookmarks() {
  const [bookmarks, setBookmarks] = useState(() => {
    if (typeof window !== 'undefined') {
      const ls = localStorage.getItem('bookmarks');
      if (ls) return JSON.parse(ls);
      else return [];
    }
  });

  const toggleItemInLocalStorage = (id) => () => {
    const isBookmarked = bookmarks.includes(id);
    if (isBookmarked) setBookmarks((prev) => prev.filter((b) => b !== id));
    else setBookmarks((prev) => [...prev, id]);
  };

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  return [bookmarks, toggleItemInLocalStorage];
}
export default useBookmarks;
