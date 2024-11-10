const featuredCharts = [
  {
    img: "data:image/png;base64,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",
    title: "Your weekly update of the most played...",
  },
  {
    img: "data:image/png;base64,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",
    title: "Your weekly update of the most played...",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Your daily update of the most played...",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Your daily update of the most played...",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Your daily update of the most viral track...",
  },
  {
    img: "data:image/jpeg;base64,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",
    title: "Your daily update of the most viral track...",
  },
];

export default featuredCharts