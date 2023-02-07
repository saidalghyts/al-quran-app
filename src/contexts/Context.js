import { useState, createContext, useEffect } from 'react';

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [open, setOpen] = useState(true);

  return (
    <Context.Provider
      value={{
        open,
        setOpen,
      }}>
      {children}
    </Context.Provider>
  );
};
