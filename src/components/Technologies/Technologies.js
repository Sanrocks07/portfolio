import React from "react";
import {
  DiJavascript,
  DiMongodb,
  DiFirebase,
  DiReact,
  DiNodejsSmall,
  DiGithubBadge,
} from "react-icons/di";
import { GoFileCode } from "react-icons/go";
import { SiJavascript, SiGraphql, SiPostman } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tech Stack</SectionTitle>
    <List>
      <listItem>
        <GoFileCode size="3rem" />
        <ListContainer>
          <ListTitle>C++</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <SiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>Javascript</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <DiMongodb size="3rem" />
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <ListTitle>ExpressJS</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>React</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <DiNodejsSmall size="3rem" />
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <SiGraphql size="3rem" />
        <ListContainer>
          <ListTitle>GraphQL</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <SiPostman size="3rem" />
        <ListContainer>
          <ListTitle>Postman</ListTitle>
        </ListContainer>
      </listItem>
      <listItem>
        <DiGithubBadge size="3rem" />
        <ListContainer>
          <ListTitle>Git & Github</ListTitle>
        </ListContainer>
      </listItem>
    </List>
    <SectionDivider />
  </Section>
);

export default Technologies;
