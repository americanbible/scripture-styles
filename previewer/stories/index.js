import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import Passage from "../components/Passage";

const gntId = "61fd76eafa1577c2-01";

storiesOf("Passage", module).add("Genesis 1", () => (
  <Passage bibleId={gntId} passageId="GEN.1" />
));

storiesOf("Passage", module).add("Genesis 1 with Footnotes", () => (
  <Passage bibleId={gntId} passageId="GEN.1" footnotes={true} />
));

storiesOf("Passage", module).add("Psalms 23", () => (
  <Passage bibleId={gntId} passageId="PSA.23" />
));
