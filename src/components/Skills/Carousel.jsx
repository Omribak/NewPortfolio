import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import { Myskills } from '../../constants/data-objects/Arrays';
import SkillsCard from './SkillsCard';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  customPaging: (i) => (
    <div
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: 'white',
        borderRadius: '50%'
      }}
    ></div>
  )
};

const SliderContainer = styled.div`
  padding: 2rem;
  width: 80%;
`;

const CarouselContainer = styled.div`
  @media only screen and (max-width: 1100px) {
    display: none;
  }
`;

const SkillsRegularContainer = styled.div`
  display: none;
  @media only screen and (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }
`;

export default function Carousel() {
  return (
    <SliderContainer>
      <CarouselContainer>
        <Slider {...settings}>
          {Myskills.map((skill, index) => (
            <SkillsCard skill={skill} key={index} />
          ))}
        </Slider>
      </CarouselContainer>
      <SkillsRegularContainer>
        {Myskills.map((skill, index) => (
          <SkillsCard skill={skill} key={index} />
        ))}
      </SkillsRegularContainer>
    </SliderContainer>
  );
}
