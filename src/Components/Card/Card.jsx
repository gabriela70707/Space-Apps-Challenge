import React from 'react';
import styled from 'styled-components';

const Card = ({ backgroundImage, title, hoverText }) => {
  return (
    <StyledWrapper backgroundImage={backgroundImage}>
      <div className="card">
        <div className="card-title">{title}</div>
        <div className="card-hover-text">{hoverText}</div>
      </div>
    </StyledWrapper>
  );
}

Card.defaultProps = {
  title: "CARD",
  hoverText: "HELLO",
  backgroundImage: "https://via.placeholder.com/220x320"
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 260px;
    height: 360px;
    background: ${props => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: flex-end; /* Alinha o conteúdo na parte inferior */
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }

  .card-title {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 12px 25px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.5s ease;
    margin-bottom: 20px; /* Espaço da borda inferior */
    z-index: 2;
    position: relative;
    width: 80%; /* Largura do título */
  }

  .card-hover-text {
    display: grid;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: white;
    z-index: 3;
    transition: all 0.3s ease;
    font-size: 13px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    text-align: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    padding: 15px 25px;
    border-radius: 15px;
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
    background-color: rgba(0, 17, 87, 0.8);
    transition: all 0.5s;
    z-index: 1;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }

  .card:hover .card-title {
    opacity: 0; /* Título some no hover */
  }

  .card:hover .card-hover-text {
    opacity: 1;
    transition-delay: 0.2s;
  }
`;

export default Card;