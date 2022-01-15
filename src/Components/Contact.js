import React from 'react';
import {useParams} from 'react-router-dom';

export default function Contact() {
  const {id} = useParams();
  return (
    <div className="contact">
      <div>Contact ({id})</div>
    </div>
  );
}
