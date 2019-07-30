export default {
  title: "Paragraphs",
  cards: [
    {
      title: "Normal paragraph",
      marker: "p",
      passageId: "MAT.1.1-MAT.1.3"
    },
    {
      title: "Flush left paragraph",
      marker: "m",
      description:
        "No first line indent. Usually used to resume prose at the margin (without indent) after poetry or OT quotation (i.e. continuation of the previous paragraph).",
      passageId: "LUK.20.16-LUK.20.25"
    },
    {
      title: "Embeded text opening",
      marker: "pmo",
      passageId: null
    },
    {
      title: "Embeded text paragraph",
      marker: "pm",
      passageId: null
    },
    {
      title: "Embedded text refrain",
      marker: "pmr",
      passageId: null
    },
    {
      title: "Indented paragraph",
      marker: "pi",
      description:
        "Used in some texts for discourse sections. The variable # represents the level of indent.",
      passageId: "ACT.15.22-ACT.15.35"
    },
    {
      title: "Indented flush left",
      marker: "mi",
      passageId: "NEH.6.1-NEH.6.11"
    },
    {
      title: "Closure of an epistle/letter",
      marker: "cls",
      description: 'Similar to "With love,"or "Sincerely yours,".',
      passageId: null
    },
    {
      title: "Centered paragraph",
      marker: "pc",
      // bibleId: "555fef9a6cb31151-01",
      passageId: "REV.13.1"
    },
    {
      title: "List item",
      marker: "li1",
      description:
        "An out-dented paragraph meant to highlight the items of a list. Lists may be used to markup the elements of a recurrent structure, such as the days within the creation account, or the Decalogue (10 commandments).",
      passageId: "GEN.36.31-GEN.36.43"
    }
  ]
};
