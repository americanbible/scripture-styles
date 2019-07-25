const gntId = "61fd76eafa1577c2-01";

export default [
  {
    title: "Introductions",
    cards: [
      {
        title: "Introduction major title.",
        marker: "imt",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction section heading.",
        marker: "is",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction Paragraph",
        marker: "ip",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction Paragraph Indented",
        marker: "ip",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction flush left (margin) paragraph",
        marker: "im",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction flush left (margin) paragraph indented",
        marker: "imi",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction quote from text paragraph.",
        marker: "ipq",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction quote from text paragraph (no margin).",
        marker: "imq",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction right-aligned paragraph.",
        marker: "ipr",
        description: "Typically used for a quote from text reference.",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction poetic line.",
        marker: "iq#",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction blank line.",
        marker: "ib",
        description:
          "May be used to explicitly indicate additional white space between paragraphs.",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction List Item",
        marker: "ib",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction outline title.",
        marker: "iot",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction outline entry (and reference range)",
        marker: "io#",
        passageId: "GEN.intro"
      },
      {
        title: "Introduction outline reference range.",
        marker: "ior",
        description:
          "An outline entry typically ends with a range of references in parentheses. This is an optional character style for marking (and potentially formatting) these references separately.",
        passageId: "GEN.intro"
      }
    ]
  },
  {
    title: "Titles, Headings, and Labels",
    cards: [
      {
        marker: "mr",
        title: "Major section reference range",
        description:
          "The text reference range listed under a major section heading.",
        passageId: "PSA.1.1"
      },
      {
        marker: "s",
        title: "Section heading",
        description: "The typical (common) section division heading.",
        passageId: "GEN.intro-GEN.1.8"
      },
      {
        marker: "sr",
        title: "Section reference range",
        description:
          "The text reference range listed under a section heading. .sr is not equivalent to .r which is used for marking parallel references.",
        passageId: "JOB.4.1-JOB.4.4"
      },
      {
        marker: "r",
        title: "Parallel passage reference(s).",
        description: "Parallel passage reference(s).",
        passageId: "PSA.14.1-PSA.14.4"
      },
      //   {
      //     marker: "rq",
      //     title: "Inline quotation reference(s).",
      //     description:
      //       "A reference indicating the source text for the preceding quotation (usually an Old Testament quote). The reference(s) are intended to be formatted (typeset) within the scripture body text column, and not extracted from the text as are regular cross references (\\x...\\x*). They are also typically separated from the main text of Scripture using a different type style and alignment.",
      //
      //     passageId: "GEN.intro"
      //   },
      {
        marker: "d",
        title: "Descriptive title (or 'Hebrew subtitle')",
        description:
          "Sometimes used in Psalms under the section heading (e.g. 'For the director of Music').",
        passageId: "PSA.43.1-PSA.43.5"
      },
      {
        marker: "sp",
        title: "Speaker Identification",
        description: "Speaker Identification (e.g. Job and Song of Songs)",
        passageId: "JOB.40.1-JOB.40.8"
      }
    ]
  },
  {
    title: "Chapters and Verses",
    cards: [
      {
        title: "Chapter Number",
        marker: "c",
        description:
          "The marker is followed by the chapter number. No text should follow this marker.",
        passageId: "GEN.intro"
      },
      {
        title: "Alternate second chapter number",
        marker: "ca",
        description:
          "Used for marking the chapter number used in an alternate versification scheme. Required when different versification traditions need to be supported in the same translation text. The content within the marker pair should only contain the alternate chapter number, and not include any formatting/presentation characters (e.g. brackets or parentheses).",
        passageId: "GEN.1.1"
      },
      {
        title: "Chapter Description",
        marker: "cd",
        description:
          "A brief description of chapter content (similar to .d - descriptive heading, or .iex - ).",
        passageId: "GEN.1.1"
      },
      {
        title: "Verse Number",
        marker: "v",
        description:
          "Marker is followed by the verse number #, and the text of the verse.",
        passageId: "GEN.1.1"
      },
      {
        title: "va",
        description:
          "Used for marking verse numbers used in an alternate versification scheme. Required when different versification traditions need to be supported in the same translation text.",
        marker: "va",
        passageId: "GEN.1.1"
      },
      {
        title: "Published verse character.",
        marker: "vp",
        description:
          "This is the verse character (number, letter) which should be displayed in the published text (where the published character(s) are different than the .v # digit used within the translation editing environment).",
        passageId: "GEN.1.1"
      }
    ]
  },
  {
    title: "Paragraphs",
    cards: [
      {
        title: "Normal paragraph",
        marker: "p",
        passageId: "GEN.1.1"
      },
      {
        title: "Flush left paragraph",
        marker: "m",
        description:
          "No first line indent. Usually used to resume prose at the margin (without indent) after poetry or OT quotation (i.e. continuation of the previous paragraph).",
        passageId: "GEN.1.1"
      },
      {
        title: "Embeded text opening",
        marker: "pmo",
        passageId: "GEN.1.1"
      },
      {
        title: "Embeded text paragraph",
        marker: "pm",
        passageId: "GEN.1.1"
      },
      {
        title: "Embedded text refrain",
        marker: "pmr",
        passageId: "GEN.1.1"
      },
      {
        title: "Indented paragraph",
        marker: "pi#",
        description:
          "Used in some texts for discourse sections. The variable # represents the level of indent.",
        passageId: "GEN.1.1"
      },
      {
        title: "Indented flush left",
        marker: "mi",
        passageId: "GEN.1.1"
      },
      {
        title: "Closure of an epistle/letter",
        marker: "cls",
        description: 'Similar to "With love,"or "Sincerely yours,".'
      },
      {
        title: "Centered paragraph",
        marker: "pc",
        passageId: "GEN.1.1"
      },
      {
        title: "List item",
        marker: "li",
        description:
          "An out-dented paragraph meant to highlight the items of a list. Lists may be used to markup the elements of a recurrent structure, such as the days within the creation account, or the Decalogue (10 commandments).",
        passageId: "GEN.1.1"
      }
    ]
  },
  {
    title: "Poetry",
    cards: [
      {
        title: "Poetic line",
        marker: "q#"
      },
      {
        title: "Right aligned poetic line",
        marker: "qr",
        description: "Commonly used as poetic refrain",
        passageId: "GEN.1.1"
      },
      {
        title: "Centered poetic line",
        marker: "qc",
        passageId: "GEN.1.1"
      },
      {
        title: "Selah",
        marker: "qs",
        description:
          'Used for the expression "Selah"commonly found in the Psalms. This text is frequently right aligned, and rendered on the same line as the previous poetic text, if space allows.'
      },
      {
        title: "Acrostic heading",
        marker: "qa",
        passageId: "GEN.1.1"
      },
      {
        title: "Acrostic Marker character",
        marker: "qac",
        description:
          "Marker to indicate the acrostic letter within a poetic line.",
        passageId: "GEN.1.1"
      },
      {
        title: "Embeded text poetic line",
        marker: "qm#"
      }
    ]
  },
  {
    title: "Tables",
    cards: [
      {
        title: "Table row start.",
        marker: "tr",
        description:
          'The first <span class="code">.tr</span> initiates a new table. Rows contain column headings or cells.'
      },
      {
        title: "Table column heading",
        marker: "th#"
      },
      {
        title: "Right aligned table column heading",
        marker: "thr#"
      },
      {
        title: "Table cell",
        marker: "tc#"
      },
      {
        title: "Right aligned table cell",
        marker: "tcr#"
      }
    ]
  },
  {
    title: "Footnotes",
    cards: [
      {
        title: "The footnote element",
        marker: "f",
        passageId: "GEN.1.1"
      },
      {
        title: 'Footnote "origin"reference',
        marker: "fr",
        description: "This is the chapter and verse(s) that note refers to.",
        passageId: "GEN.1.1"
      },
      {
        title: "Footnote Keyword",
        marker: "fk",
        description:
          "The specific keyword/term from the text for which the footnote is being provided.",
        passageId: "GEN.1.1"
      },
      {
        title: "Footnote translation quotation",
        marker: "fq",
        description:
          "A quotation from the current scripture text translation for which the note is being provided.",
        passageId: "GEN.1.1"
      },
      {
        title: "Footnote alternate translation quotation",
        marker: "fqa",
        description:
          "A quotation from the current scripture text translation for which the note is being provided.",
        passageId: "GEN.1.1"
      },
      {
        title: 'Footnote "label"text.',
        marker: "fl",
        description:
          'Can be used for marking or "labeling"a word or words which are used consistently across certain types of translation notes (such as the words "Or"in an alternative translation note, "Others", "Heb.", "LXX"etc.).'
      },
      {
        title: "Footnote verse number.",
        marker: "fv#",
        description:
          "To mark a verse number in the the text quotation or alternative translation.",
        passageId: "GEN.1.1"
      },
      {
        title: "Footnote text",
        marker: "ft",
        description: "The essential (explanatory) text of the footnote.",
        passageId: "GEN.1.1"
      },
      {
        title: "Deuterocanonical content",
        marker: "fdc",
        description:
          "Text between these markers is material to be included only in published editions that contain the Deuterocanonical books.",
        passageId: "GEN.1.1"
      },
      {
        title: "Footnote reference mark",
        marker: "fm",
        description:
          "Used where two or more locations in the scripture text should ideally refer the reader to the same footnote text (as seen in identical footnote text which is referred to at Gen 2.9 and Gen 2.17 in some English translations).",
        passageId: "GEN.1.1"
      }
    ]
  },
  {
    title: "Cross References",
    cards: [
      {
        title: 'Cross reference "origin"reference',
        marker: "xo",
        description:
          "This is the chapter and verse(s) that target reference(s) are being provided for",
        passageId: "GEN.1.1"
      },
      {
        title: "Target reference(s)",
        marker: "xt",
        passageId: "GEN.1.1"
      }
    ]
  },
  {
    title: "Special Text and Character Styles",
    cards: [
      {
        title: "Translator's addition",
        marker: "add",
        passageId: "GEN.1.1"
      },
      {
        title: "Quoted book title",
        marker: "bk",
        passageId: "GEN.1.1"
      },
      {
        title: "Litergical note/comment",
        marker: "lit",
        description:
          "Liturgical note/comment. (e.g. a guide which tells the reader/worshipper that he should recite a prayer or recitation etc.)",
        passageId: "GEN.1.1"
      },
      {
        title: "Name of God",
        marker: "nd",
        passageId: "GEN.1.1"
      },
      {
        title: "Quoted text",
        marker: "qt",
        description:
          "Old Testament quotations in the New Testament, or other quotations.",
        passageId: "GEN.1.1"
      },
      {
        title: "Signature",
        marker: "sig",
        description: "Signature of the author of an epistle",
        passageId: "GEN.1.1"
      },
      {
        title: "Secondary language",
        marker: "sls",
        description:
          "Passage of text based on a secondary language or alternate text source.",
        passageId: "GEN.1.1"
      },
      {
        title: "Transliterated (or foreign) word(s)",
        marker: "tl",
        passageId: "GEN.1.1"
      }
    ]
  }
];
