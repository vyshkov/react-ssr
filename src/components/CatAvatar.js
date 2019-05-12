import styled from 'styled-components';

const CatAvatar = styled.div`
    height: 250px;
    width: 250px;
    margin-bottom: 10px;
    background-image: url('${props => props.img}');
    background-size: cover;
    background-position: center;
`

export default CatAvatar;
