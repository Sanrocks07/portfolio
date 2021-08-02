import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 30, text: "Github Repos" },
  { number: 90, text: "Level in Progate Web Development Tracks" },
  { number: 500, text: "Programming questions solved" },
];

const Acomplishments = () => (
  <Section id="acc">
    <SectionTitle>Accomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    {/* section divider is optional here */}
    <SectionDivider />
  </Section>
);

export default Acomplishments;
