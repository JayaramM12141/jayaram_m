import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  background-color: #0d0d0d; /* dark background */
  padding: 20px 20px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: #ffffff; /* white text for dark theme */
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #b3b3b3; /* light gray text */
  font-weight: bold;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #1a1a1a; /* dark card */
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.7) 0px 4px 24px; /* dark shadow */
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #ffffff;
`

const ContactInput = styled.input`
  flex: 1;
  background-color: #0d0d0d; /* input dark background */
  border: 1px solid #555; /* dark gray border */
  outline: none;
  font-size: 18px;
  color: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #856518; /* accent color on focus */
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: #0d0d0d;
  border: 1px solid #555;
  outline: none;
  font-size: 18px;
  color: #ffffff;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #856518;
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-align: center;
  background: #856518;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`

const Contact = () => {
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_07vw8xc', 'template_vm9f1uk', form.current, '1EJte8e3vRxTKv3o6')
      .then((result) => {
        toast.success('Email sent successfully!', {
          position: "top-right",
          autoClose: 5000,
          theme: "dark",
        });
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <Container id='contact'>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput required placeholder="Your Email" name="from_email" />
          <ContactInput required placeholder="Your Name" name="from_name" />
          <ContactInput required placeholder="Subject" name="subject" />
          <ContactInputMessage required placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  )
}

export default Contact
