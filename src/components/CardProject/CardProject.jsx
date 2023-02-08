import React from 'react';
import { shape, string, node } from 'prop-types';

function CardProject({ name, image, technologies, description }) {
  return (
    <div className="flex text-center flex-col gap-4">
      <h3>{name}</h3>
      <img className="w-32 rounded-[10%]" src={image} alt={name} />
      <p>{description}</p>
      <p>
        Tecnologias:
        {` ${technologies.join(' - ')}`}
      </p>
    </div>
  );
}

CardProject.propTypes = {
  name: string.isRequired,
  image: node.isRequired,
  technologies: shape({
    nome: string,
    oab: string
  }).isRequired,
  description: string.isRequired
};

export default CardProject;