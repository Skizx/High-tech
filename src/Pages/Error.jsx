/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import "../Components/_error.scss";

const Error = () => {
  return (
    <>
      <div className="error-container">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="error-container_link">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </>
  )
}

export default Error;