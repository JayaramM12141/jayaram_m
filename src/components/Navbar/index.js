import React, { useEffect, useRef, useState } from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink
} from './NavbarStyledComponent';
import { FaBars, FaRProject } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const menuRef = useRef(null); // ref for mobile menu

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest('.mobile-icon')
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo */}
        <NavLogo to="/">
          <a
            style={{
              display: 'flex',
              alignItems: 'center',
              color: '#856518',
              marginBottom: '20px',
              cursor: 'pointer'
            }}
          >
            <FaRProject size="2.5rem" />
          </a>
        </NavLogo>

        {/* Mobile Hamburger */}
        <MobileIcon className="mobile-icon" onClick={() => setIsOpen(prev => !prev)}>
          <FaBars />
        </MobileIcon>

        {/* Desktop Menu */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#certification">Certification</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {/* Desktop Buttons */}
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github
          </GitHubButton>
          <GitHubButton href={Bio.linkedin} target="_blank">
            LinkedIn
          </GitHubButton>
        </ButtonContainer>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu ref={menuRef} isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href="#certification" onClick={() => setIsOpen(false)}>Certification</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <MobileLink href="#blogs" onClick={() => setIsOpen(false)}>Blogs</MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>

            {/* Mobile Buttons */}
            <GitHubButton
              style={{
                padding: '10px 16px',
                margin: '10px',
                background: theme.primary,
                color: '#fff',
                width: 'max-content'
              }}
              href={Bio.github}
              target="_blank"
            >
              Github
            </GitHubButton>
            <GitHubButton
              style={{
                padding: '10px 16px',
                margin: '10px',
                background: theme.primary,
                color: '#fff',
                width: 'max-content'
              }}
              href={Bio.linkedin}
              target="_blank"
            >
              LinkedIn
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
