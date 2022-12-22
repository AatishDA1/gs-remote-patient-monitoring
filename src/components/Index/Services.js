import React from "react";
import styled from "styled-components";
import { RiHeartPulseFill } from "react-icons/ri";
import { FaArchive } from "react-icons/fa";
import { MdAddAlert } from "react-icons/md";

const ServicesData = [
  {
    icon: <RiHeartPulseFill size={90} color="#990000" />,
    description: "Streamlined Patient Vital Monitoring",
  },
  {
    icon: <FaArchive size={80} color="#0b5394" />,
    description: "Easy Access to Patient Records",
  },
  {
    icon: <MdAddAlert size={80} color="#38761d" />,
    description: "Alert Notification System",
  },
];

const Services = () => {
  return (
    <ServicesContainer>
      <Heading>Services we Offer</Heading>
      <Wrapper>
        {ServicesData.map((item, index) => {
          return (
            <ServicesBox key={index}>
              <Icon>{item.icon}</Icon>
              <Description>{item.description}</Description>
            </ServicesBox>
          );
        })}
      </Wrapper>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  width: 100%;
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw-1300px) / 2);
`;

const Heading = styled.h1`
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 3rem);
  margin-bottom: 2rem;
  margin-top: 3rem;
  padding: 0 2rem;
  font-weight: bold;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const ServicesBox = styled.div`
  height: 100%;
  width: 100%;
  padding: 2rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const Description = styled.div`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;
  text-align: center;
`;
