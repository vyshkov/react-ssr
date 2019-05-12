import styled from 'styled-components';

const CardContainer = styled.button`
    display: inline-block;
    margin: 20px;
    padding: 0 0 10px 0;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
    border: none;
    opacity: 0.8;
    font-size: 20px;
    font-family: sans-serif;
    text-align: center;
    cursor: pointer;
    transition: 0.33s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0 0 0 2px white;
        opacity: 1;
    }
`;
export default CardContainer;
