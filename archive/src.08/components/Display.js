import React from 'react';
import Card from './Card';

const canine = {
  name: 'Spot',
  description: 'The best boy',
  id: 1,
};

export default function Display() {
  return (
    <Card name = {canine.name} description = {canine.description} od = {canine.id} />

    // <Card {...canine}> pulls in all 3 at once
      
        // TODO: Write logic that will render a Card component for the dog
        // TODO: Pass `name`, `description`, and `id` to the Card component as props
    
  );
}
