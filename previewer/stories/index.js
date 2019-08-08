import React from "react";
import { storiesOf } from "@storybook/react";

import StyleCard from "../components/StyleCard";

import introductions from "./introductions.stories";
import chaptersverses from "./chaptersverses.stories";
import crossreferences from "./crossreferences.stories";
import footnotes from "./footnotes.stories";
import paragraphs from "./paragraphs.stories";
import poetry from "./poetry.stories";
import titlesheadingslabels from "./titlesheadingslabels.stories";
import tables from "./tables.stories";
import specialtext from "./specialtext.stories";

const gntId = "61fd76eafa1577c2-01";

const stories = [
  introductions,
  chaptersverses,
  crossreferences,
  footnotes,
  titlesheadingslabels,
  paragraphs,
  poetry,
  tables,
  specialtext
];

stories.map(story =>
  story.cards.map(card =>
    storiesOf(`Classes|${story.title}`, module).add(
      `.${card.marker} - ${card.title}`,
      () => (
        <StyleCard
          marker={card.marker}
          title={card.title}
          description={card.description}
          bibleId={card.bibleId || gntId}
          passageId={card.passageId}
        />
      )
    )
  )
);
