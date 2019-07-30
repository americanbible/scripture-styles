export default {
  title: "Chapters and Verses",
  cards: [
    {
      title: "Chapter Number",
      marker: "c",
      description:
        "The marker is followed by the chapter number. No text should follow this marker.",
      passageId: null
    },
    {
      title: "Alternate second chapter number",
      marker: "ca",
      description:
        "Used for marking the chapter number used in an alternate versification scheme. Required when different versification traditions need to be supported in the same translation text. The content within the marker pair should only contain the alternate chapter number, and not include any formatting/presentation characters (e.g. brackets or parentheses).",
      passageId: null
    },
    {
      title: "Chapter Description",
      marker: "cd",
      description:
        "A brief description of chapter content (similar to .d - descriptive heading, or .iex - ).",
      passageId: null
    },
    {
      title: "Verse Number",
      marker: "v",
      description:
        "Marker is followed by the verse number #, and the text of the verse.",
      passageId: "PSA.1"
    },
    {
      title: "Alternate Versification Number",
      description:
        "Used for marking verse numbers used in an alternate versification scheme. Required when different versification traditions need to be supported in the same translation text.",
      marker: "va",
      passageId: null
    },
    {
      title: "Published Verse Character",
      marker: "vp",
      description:
        "This is the verse character (number, letter) which should be displayed in the published text (where the published character(s) are different than the .v # digit used within the translation editing environment).",
      passageId: null
    }
  ]
};
