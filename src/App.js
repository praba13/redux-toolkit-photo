import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos } from './galleryState';

import './App.css';
import CounterApp from './CounterApp';

function App() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.gallery.photos);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  console.log(photos);

  return (
    <div className='App'>
      <h1>Photo Gallery</h1>
      <p>Photo gallery with toolkit</p>
      <hr />
      <div className='Gallery'>
        {photos.map((photo) => (
          <img
            key={photo.id}
            src={photo.download_url}
            alt={photo.author}
            width='400'
            height='400'
          />
        ))}
      </div>
      <button>View More</button>
      <hr />
      <CounterApp />
    </div>
  );
}

export default App;
