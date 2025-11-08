import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px 80px 0px;
    background-color: #0d0d0d; /* dark background */
    @media (max-width: 960px) {
        padding: 20px 0;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: #ffffff; /* white text */
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #b3b3b3; /* light gray */
    font-weight: bold;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;   /* space between cards */
    width: 100%;
    max-width: 600px; /* uniform width for all cards */
    align-items: center;
`;

const Education = () => {
    return (
        <Container id="education">
            <Title>Education</Title>
            <Desc>
                My education has been a journey of self-discovery and growth. 
                My educational details are as follows.
            </Desc>
            <CardsWrapper>
                {education.map((edu, index) => (
                    <EducationCard 
                        key={index} 
                        education={edu} 
                        style={{ width: '100%' }} 
                    />
                ))}
            </CardsWrapper>
        </Container>
    )
}

export default Education;
