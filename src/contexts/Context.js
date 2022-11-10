import { useState, createContext } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [showBookmark, setShowBookmark] = useState(true);

  return (
    <Context.Provider value={{ open, setOpen, showBookmark, setShowBookmark }}>
      {children}
    </Context.Provider>
  );
};
