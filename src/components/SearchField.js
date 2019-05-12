import styled from 'styled-components';

const SearchField = styled.input`
    outline: none;
    border: none;
    width: 100%;
    padding: 10px;
    margin: 0;
    font-size: 26px;
    color: white;
    background-color: rgba(50,50,50,0.3);
    margin-bottom: 20px;
    box-shadow: 0 0 20px black;
    transition: 0.33s;

    &:focus {
        background-color: rgba(50,50,50,0.5);
    }
`;

export default SearchField;
