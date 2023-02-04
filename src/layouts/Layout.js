import Navbar from '../components/Navbar';
import ToTop from '../components/ToTop';
import Bookmark from '../components/Bookmark';
import { useContext } from 'react';
import { Context } from '../contexts/Context';

export default function Layout({ children }) {
  const { showBookmark, setShowBookmark, bookmark, removeBookmark } =
    useContext(Context);
  return (
    <>
      <Navbar />
      <Bookmark
        showBookmark={showBookmark}
        setShowBookmark={setShowBookmark}
        bookmark={bookmark}
        removeBookmark={removeBookmark}
      />
      {children}
      <ToTop />
    </>
  );
}
