import React from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #111;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: #bbb; /* lighter gray text */
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 12px;
    padding: 16px 20px;
    justify-content: space-between;
    position: relative;
    background: #111; /* black background */
    border: 1px solid #333; /* subtle dark border */
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 0px 12px rgba(255,255,255,0.05);

    &:hover {
        box-shadow: 0px 0px 24px rgba(255,255,255,0.1);
        transform: translateY(-5px);
    }

    @media only screen and (max-width: 768px){
        padding: 12px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document} {
        display: flex;
    }

    &:hover ${Span} {
        overflow: visible;
        -webkit-line-clamp: unset;
    }
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
`

const Image = styled.img`
    height: 50px;
    border-radius: 10px;
    background: #222; /* dark placeholder bg */
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: #fff; /* bright role name */
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #aaa; /* muted gray */
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: #888; /* lighter muted gray */
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: #fff; 
    background: #1a1a1a;  /* dark background */
    border: 1px solid #333; /* subtle border */
    border-radius: 6px;     /* rounded pill-like */
    padding: 4px 10px;      /* space inside each box */
    transition: all 0.2s ease-in-out;
    cursor: default;

    &:hover {
        background: #222; 
       color: #856518;        /* text changes to blue */
    }

    @media only screen and (max-width: 768px){
        font-size: 12px;
        padding: 3px 8px;
    }
`


const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc && (
                    <Span>{experience?.desc}</Span>
                )}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}> {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>
            {experience.doc && (
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            )}
        </Card>
    )
}

export default ExperienceCard
