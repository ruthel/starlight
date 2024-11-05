"use client"
import React, {useEffect, useRef} from 'react';
import {useLoadScript} from '@react-google-maps/api';

const libraries = ['places'];

const AutocompleteInput = ({onPlaceSelected, value, lat, lng}) => {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyDhrpU5aafBQngNJcj_su0lcdHy0MPsnUY', // Replace with your API key
    libraries,
  });

  const autocompleteRef = useRef(null);

  useEffect(() => {
    if (isLoaded && autocompleteRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(autocompleteRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        onPlaceSelected(place);
      });
      autocomplete.set('place', {
        name: value,
        geometry: {
          location: {lat, lng},
        },
      });
    }
  }, [isLoaded, value]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div className='bg-white border rounded w-full py-2 px-3 mt-1 h-[42px]'>Loading...</div>;

  return <input ref={autocompleteRef} type="text" placeholder="Enter a location"
                className='bg-white border rounded w-full py-2 px-3 mt-1'/>;
};

export default AutocompleteInput;
