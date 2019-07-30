import React from "react";
import Passage from "./Passage";
import styled from "styled-components";

const Card = styled.section`
  font-family: "Noto Sans", sans-serif;
  max-width: 40em;
  padding: 24px;
`;

const PassageWrapper = styled.div`
  ${props =>
    props.markers.map(
      marker => `.${marker} {
    box-shadow: 0 0 0 4px rgba(12, 104, 241, 0.3);
  }`
    )}
  /* white */
  background: #ffffff;
  /* Gray-300 */
  border: 1px solid #e0e0e0;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 24px;
`;

const Marker = styled.span`
  background-color: #0c68f1;
  color: #ffffff;
  padding: 8px;
  border-radius: 2px;
  font-family: monospace;
  font-weight: normal;
`;

const StyleCard = ({ marker, title, description, bibleId, passageId }) => {
  const markers = marker.match("#")
    ? [1, 2, 3].map(i => marker.replace("#", i))
    : [marker];
  return (
    <Card>
      <h2>
        <Marker>{`.${marker}`}</Marker> {title}
      </h2>
      <p>{description}</p>
      <PassageWrapper markers={markers}>
        <Passage bibleId={bibleId} passageId={passageId} />
      </PassageWrapper>
    </Card>
  );
};

export default StyleCard;
