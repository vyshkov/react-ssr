import React from 'react';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import cats from '../data';

import CatPrifileImage from '../components/CatPrifileImage';

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    font-family: sans-serif;
    padding: 10px;
    margin: 10px;
    text-align: center;
`

const Header = styled.div`
    font-size: 30px;
    padding: 20px;
`;

const GoBackButton = styled.button`
    background-color: rgba(0,0,0,0.5);
    color: white;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
    font-size: 16px;
    border: none;
    transition: 0.33s;

    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`;

const ContentCat = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 800px;
    background-color: rgba(0,0,0,0.5);
    padding: 20px;
    border-radius: 4px;
`;

const DetailsPage = ({ match }) => {
    const selectedCat = cats
        .find(cat => cat.name.toLowerCase() === match.params.name.toLowerCase());

    if (!selectedCat) {
        return (
            <div>Not found !</div>
        )
    }

    return (
        <ProfileContainer>
            <ContentCat>
                <Header>Profile: {selectedCat.name}</Header>
                <CatPrifileImage img={selectedCat.img} size={500} />
                <div>{selectedCat.description}</div>
                <Link to="/"><GoBackButton>Go Back</GoBackButton></Link> 
            </ContentCat>
        </ProfileContainer>
    )
}

export default withRouter(DetailsPage);