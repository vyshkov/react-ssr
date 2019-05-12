import styled from 'styled-components';

const CatAvatar = styled.div`
    height: ${props => props.size || 250}px;
    width: ${props => props.size || 250}px;
    margin-bottom: 10px;
    background-image: url('${props => props.img}');
    background-size: cover;
    background-position: center;
`

export default CatAvatar;
