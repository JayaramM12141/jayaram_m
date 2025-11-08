import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/constants'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  background-color: #0d0d0d; /* dark background */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 24px;
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: #ffffff;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #b3b3b3;
  font-weight: bold;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-top: 30px;
`;

const Skill = styled.div`
  background-color: #111;
  border: 1px solid #333;
  border-radius: 16px;
  padding: 24px 36px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 768px) {
    max-width: 400px;
    padding: 18px 30px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  color: #fff;
  margin-bottom: 16px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #eee;
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 8px;
  padding: 8px 14px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #222;
    color: #856518;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 6px 12px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
    padding: 5px 10px;
  }
`;

const SkillImage = styled.img`
  width: 20px;
  height: 20px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I had worked in my journey.</Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem key={item.name}>
                    <SkillImage src={item.image} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
