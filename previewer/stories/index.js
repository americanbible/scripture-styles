import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";
// import { linkTo } from "@storybook/addon-links";

import Passage from "../components/Passage";
import StyleCard from "../components/StyleCard";

import stories from "./stories";

const gntId = "61fd76eafa1577c2-01";

stories.map(story =>
  story.cards.map(card =>
    storiesOf(`Classes|${story.title}`, module).add(
      `.${card.marker} - ${card.title}`,
      () => (
        <StyleCard
          marker={card.marker}
          title={card.title}
          description={card.description}
          bibleId={card.bibleId}
          passageId={card.passageId}
        />
      )
    )
  )
);
