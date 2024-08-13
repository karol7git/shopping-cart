import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #1e1e1e;
  color: #e0e0e0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #333; /* Color más suave para el borde */
  border-radius: 15px; /* Radio consistente */
  overflow: hidden; /* Asegura que la imagen y el contenido no se salgan del borde */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* Sombra sutil para profundidad */

  img {
    max-height: 250px;
    object-fit: cover;
    width: 100%; /* Asegura que la imagen se ajuste al ancho del contenedor */
    border-bottom: 1px solid #333; /* Borde inferior para separar la imagen del contenido */
  }

  div {
    padding: 1rem;
    color: #e0e0e0; /* Color de texto general */
    display: flex;
    flex-direction: column;
    height: 100%;

    h3 {
      font-size: 1.2rem;
      margin: 0.5rem 0;
      color: #e0e0e0;
    }

    p {
      font-size: 1rem;
      margin: 0.5rem 0;
      color: #e0e0e0; /* Color de texto más suave para la descripción */
    }

    h3:last-of-type {
      margin-top: auto; /* Empuja el precio hacia el fondo del div */
      font-size: 1.5rem;
      color: #fff; /* Color del precio */
    }
  }

  button {
    border-radius: 0 0 15px 15px; /* Radio consistente con el resto de la tarjeta */
    background-color: #007bff; /* Color de fondo del botón */
    color: #fff; /* Color del texto del botón */
    border: none;
    padding: 0.75rem;
    cursor: pointer;
    transition: background-color 0.3s ease; /* Transición suave para el color de fondo */

    &:hover {
      background-color: #0056b3; /* Color del botón al pasar el cursor */
    }
  }
`;
