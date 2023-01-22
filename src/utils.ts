
export const formatViews = (views: number) =>
  Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(views);