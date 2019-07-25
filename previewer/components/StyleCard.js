import React from "react";
import Passage from "./Passage";
import styled from "styled-components";

const Card = styled.section`
  font-family: sans-serif;
  max-width: 40em;
`;

const PassageWrapper = styled.div`
  .${props => props.marker} {
    box-shadow: 0 0 0 3px rgba(116, 241, 198, 0.5);
  }
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.08);
  padding: 2em;
  margin-bottom: 3em;
  background-color: white;
`;

const Marker = styled.span`
  background-color: #41454e;
  color: #74f1c6;
  padding: 0.4em;
  border-radius: 2px;
  font-family: monospace;
  font-weight: normal;
`;

const StyleCard = ({ marker, title, description, bibleId, passageId }) => {
  return (
    <Card>
      <h2>
        <Marker>{`.${marker}`}</Marker> {title}
      </h2>
      <p>{description}</p>
      <PassageWrapper marker={marker}>
        <Passage bibleId={bibleId} passageId={passageId} />
      </PassageWrapper>
    </Card>
  );
};

export default StyleCard;
