import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom'

import styled from 'styled-components';
import SearchField from '../components/SearchField';
import CardContainer from '../components/CardContainer';
import CatAvatar from '../components/CatAvatar';

import cats from '../data';

const CatsResult = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

function HomePage({ location, history }) {
    let params = new URLSearchParams(location.search);
    let [search, setSearch] = useState(params.get('search') || '');

    return [
        <Helmet key="meta">
            <title>Find you cat hero</title>
            <meta name="description" content="Helmet application" />
        </Helmet>,
        <div key="content">
            <SearchField
                placeholder="Search your hero.."
                value={search}
                onChange={e => {
                    history.push({
                        pathname: '/',
                        search: "?" + new URLSearchParams({search: e.target.value}).toString()
                    })
                    setSearch(e.target.value);
                }}
            />
            <CatsResult>
                {
                    cats
                        .filter(cat => cat.name.toLowerCase().includes(search))
                        .map(cat => (
                            <Link to={`/details/${cat.name}`}>
                                <CardContainer key={cat.name}>
                                    <CatAvatar img={cat.img} />
                                    {cat.name}
                                </CardContainer>
                            </Link>
                        ))
                }
            </CatsResult>
        </div>
    ];
} 

export default withRouter(HomePage);
