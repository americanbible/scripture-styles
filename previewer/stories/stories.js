const gntId = "61fd76eafa1577c2-01";

export default [
  {
    title: "Titles, Headings, and Labels",
    cards: [
      {
        marker: "mr",
        title: "Major section reference range",
        description:
          "The text reference range listed under a major section heading.",
        bibleId: gntId,
        passageId: "PSA.1.1"
      },

      {
        marker: "s",
        title: "Section heading",
        description: "The typical (common) section division heading.",
        bibleId: gntId,
        passageId: "GEN.1.1-GEN.1.8"
      },

      {
        marker: "sr",
        title: "Section reference range",
        description:
          "The text reference range listed under a section heading. .sr is not equivalent to .r which is used for marking parallel references.",
        bibleId: gntId,
        passageId: "JOB.4.1-JOB.4.4"
      },
      {
        marker: "r",
        title: "Parallel passage reference(s).",
        description: "Parallel passage reference(s).",
        bibleId: gntId,
        passageId: "PSA.14.1-PSA.14.4"
      },
      //   {
      //     marker: "rq",
      //     title: "Inline quotation reference(s).",
      //     description:
      //       "A reference indicating the source text for the preceding quotation (usually an Old Testament quote). The reference(s) are intended to be formatted (typeset) within the scripture body text column, and not extracted from the text as are regular cross references (\\x...\\x*). They are also typically separated from the main text of Scripture using a different type style and alignment.",
      //     bibleId: gntId,
      //     passageId: "GEN.1.1"
      //   },
      {
        marker: "d",
        title: "Descriptive title (or 'Hebrew subtitle')",
        description:
          "Sometimes used in Psalms under the section heading (e.g. 'For the director of Music').",
        bibleId: gntId,
        passageId: "PSA.43.1-PSA.43.5"
      },
      {
        marker: "sp",
        title: "Speaker Identification",
        description: "Speaker Identification (e.g. Job and Song of Songs)",
        bibleId: gntId,
        passageId: "JOB.40.1-JOB.40.8"
      }
    ]
  }
];
