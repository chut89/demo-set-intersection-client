'use client';

import { useContext, useState } from 'react';
import { places } from './data.tsx';
import { getImageUrl } from './utils.tsx';
import { IsLargeContext } from './Context.tsx';

import '../image.css';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <IsLargeContext.Provider value={isLarge}>
        <List />
      </IsLargeContext.Provider>
    </>
  )
}

function List() {
  const listItems = places.map(place =>
    <li className='thumbnail' key={place.id}>
      <Place
        place={place}
      />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  const isLarge = useContext(IsLargeContext);
  return (
    <>
      <PlaceImage
        place={place}
        imageSize={isLarge ? 150 : 100}
      />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place, imageSize }) {
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}

