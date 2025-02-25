export const newBookInputs = [
  {
    label: "Title*",
    name: "title",
    type: "text",
    required: true,
    placeholder: "Java Script",
  },
  {
    label: "Year*",
    name: "year",
    type: "Number",
    min: "1901",
    max: new Date().getFullYear(),
    required: true,
    placeholder: "2025",
  },
  {
    label: "Author",
    name: "author",
    type: "text",
    placeholder: "Dinesh Budhathoki",
  },
  {
    label: "Image Url*",
    name: "imgUrl",
    type: "url",
    required: true,
    placeholder: "http://path-to-imgUrl",
  },
  {
    label: "ISBN*",
    name: "isbn",
    type: "Number",
    required: true,
    placeholder: "**********",
  },
  {
    label: "Genre*",
    name: "genre",
    type: "text",
    required: true,
    placeholder: "Programming",
  },
  {
    label: "Expected Available Date",
    name: "expectedAvailable",
    type: "Date",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    as: "textarea",
    placeholder: "Book summary",
  },
];

//this is fot the edit books
export const editBookInputs = [
  {
    label: "Title*",
    name: "title",
    type: "text",
    required: true,
  },
  {
    label: "Slug",
    name: "slug",
    type: "text",
    required: true,
    disabled: true,
    placeholder: "Java Script",
  },
  {
    label: "Year*",
    name: "year",
    type: "Number",
    min: "1901",
    max: new Date().getFullYear(),
    required: true,
  },
  {
    label: "Author",
    name: "author",
    type: "text",
    required: true,
  },
  {
    label: "Image Url*",
    name: "imgUrl",
    type: "url",
    required: true,
  },
  {
    label: "ISBN*",
    name: "isbn",
    type: "Number",
    disabled: true,
  },
  {
    label: "Genre*",
    name: "genre",
    type: "text",
    required: true,
  },
  {
    label: "Expected Available Date",
    name: "expectedAvailable",
    type: "Date",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    as: "textarea",
  },
];
