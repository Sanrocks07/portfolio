import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey there! <br />
        I am Sanchit Pillai <br />
        {/* Full Stack Dev | Programmer | Learner */}
      </SectionTitle>
      <SectionText>Full Stack Dev | Programmer | Learner</SectionText>
      {/* Insert resume link here! */}
      <Button onClick={() => window.open("https://drive.google.com/file/d/1OFRXqroNHCqH4jlRrayThEbF1TLDS5CF/view?usp=sharing", "_blank")}>
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
