import { addParameters, configure } from "@storybook/react";
import theme from "./theme";

function loadStories() {
  require("../stories");
}

addParameters({ options: { showPanel: false, theme } });

configure(loadStories, module);
