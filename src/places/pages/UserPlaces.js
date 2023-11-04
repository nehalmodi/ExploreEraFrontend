import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title : 'Red Fort',
    description : "One of the most famous Fort/Monument in the world!",
    imageUrl:
     "https://lh5.googleusercontent.com/p/AF1QipP30RzCqnP3XTQzR8Wd-Z-BLptI8eI4_YTQ653V=w408-h258-k-no",
    address: "Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006",
    location : {
      lat :28.6561592,
      lng : 77.2410203
    },
    creator : 'u1'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
