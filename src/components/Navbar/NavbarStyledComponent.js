import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.background_dark || '#0D0D0D'};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  width: 50%;    
  padding: 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_light || '#F5F5F5'};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary || '#856518'};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary || '#856518'};
  }
`;

export const GitHubButton = styled.a`
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 10px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 768px) { 
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_light || '#F5F5F5'};
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  position: absolute;
  top: 70px;             /* below navbar */
  right: 15px;           /* small gap from screen edge */
  width: 60%;
  background: #111;      /* dark but not pure black */
  border-radius: 12px;   /* smooth rounded corners */
  padding: 25px 20px;
  z-index: 1000;

  /* subtle shadow for floating effect */
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);

  transition: all 0.35s ease-in-out;

  ${({ isOpen }) =>
    isOpen
      ? `
        opacity: 1; 
        visibility: visible; 
        transform: translateY(0); 
      `
      : `
        opacity: 0; 
        visibility: hidden; 
        transform: translateY(-15px); 
      `}

  /* menu link styles */
  a {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    margin: 12px 0;
    text-decoration: none;
    transition: color 0.2s ease, transform 0.2s ease;

    &:hover {
      color: #f5c542;       /* gold hover effect */
      transform: scale(1.05);
    }
  }

  /* social buttons */
  .social-btn {
    margin-top: 20px;
    padding: 10px 18px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background: #caa552;   /* gold */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #e6c36a;
      transform: translateY(-2px);
    }

    &.linkedin {
      background: #0077b5; /* LinkedIn blue */
      &:hover {
        background: #0a91d1;
      }
    }
  }
`;



export const MobileLink = styled.a`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin: 15px 0;   /* ✅ equal spacing */
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;


export const MobileMenuButton = styled.a`
  margin-top: 20px;
  padding: 10px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
  color: #fff;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primaryDark || "#444"};
  }
`;

