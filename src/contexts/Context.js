import { useState, createContext, useEffect } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [showBookmark, setShowBookmark] = useState(true);
  const [bookmark, setBookmark] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://equran.id/api/surat');
      const data = await res.json();
      setData(data);
    };
    fetchData();
  }, []);

  const addToBookmark = (ayatLs) => {
    setBookmark([...bookmark, ayatLs]);
  };

  const removeBookmark = (bookmarkToRemove) => {
    setBookmark(bookmark.filter((x) => x !== bookmarkToRemove));
  };

  useEffect(() => {
    localStorage.setItem('bookmark', JSON.stringify(bookmark));
  }, [bookmark]);

  useEffect(() => {
    const bookmarkFromLocalStorage = localStorage.getItem('bookmark');

    const parsedBookmark =
      bookmarkFromLocalStorage !== null
        ? JSON.parse(bookmarkFromLocalStorage)
        : [];

    setBookmark(parsedBookmark);
  }, []);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
        showBookmark,
        setShowBookmark,
        bookmark,
        removeBookmark,
        addToBookmark,
        data,
      }}>
      {children}
    </Context.Provider>
  );
};
