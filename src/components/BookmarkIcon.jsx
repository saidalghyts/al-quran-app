import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
function FavoriteIconComponent({ favId }) {
  const [items, setItems] = useState(getStorageList()); //
  //main helper function to get data from the storage or set it
  function getStorageList() {
    const list = localStorage.getItem('dufavorites');
    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  }

  //on item change in the list save it to the state and localStorage
  useEffect(() => {
    localStorage.setItem('dufavorites', JSON.stringify(items));
  }, [items]);
  //checking if the item is already in the list or not
  const Favorites = items === null ? false : items.includes(favId);
  const handleToggleFavourite = () => {
    if (Favorites) {
      console.log('remove item');
      const currentList = getStorageList();
      const removeItemId = favId;
      for (var i = 0; i < currentList.length; i++) {
        if (currentList[i] === removeItemId) {
          currentList.splice(i, 1);
        }
        setItems(currentList);
      }
    } else {
      console.log('add item');
      const currentList = getStorageList();
      const newList = [...currentList, favId];
      setItems(newList);
    }
  };
  //rendering different icons if its favorite
  return (
    <>
      {Favorites ? (
        <span
          onClick={handleToggleFavourite}
          className="cursor-pointer duration-200">
          <svg
            className="line"
            width={20}
            height={20}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            viewBox="0 0 24 24">
            <g transform="translate(4.500000, 2.500000)">
              <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z" />

              <line
                className="svgC h"
                transform="translate(-4.500000, -2.500000)"
                x1={15}
                x2={9}
                y1={9}
                y2={9}
              />
            </g>
          </svg>
        </span>
      ) : (
        <span
          onClick={handleToggleFavourite}
          className="cursor-pointer duration-200">
          <svg
            className="line"
            width={20}
            height={20}
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
            viewBox="0 0 24 24">
            <g transform="translate(4.500000, 2.500000)">
              <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z" />

              <line
                className="svgC v"
                transform="translate(-4.500000, -2.500000)"
                x1={12}
                x2={12}
                y1={6}
                y2={12}
              />

              <line
                className="svgC h"
                transform="translate(-4.500000, -2.500000)"
                x1={15}
                x2={9}
                y1={9}
                y2={9}
              />
            </g>
          </svg>
        </span>
      )}
      {/* <div onClick={handleToggleFavourite} className='cursor-pointer absolute right-2 top-2 bg-white p-2 rounded-full'>
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
</div> */}
    </>
  );
}

//this is important because we have to render the component
// only in browser side, either component will through error
// because it will look for the local storage in the serverSide
const FavoriteIcon = dynamic(() => Promise.resolve(FavoriteIconComponent), {
  ssr: false,
});
export default FavoriteIcon;
