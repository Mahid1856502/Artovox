import TAG_COLORS from "./tagsColors";

export const handleMultipleCheck = (event, values) => {
  let checked = values;

  if (event.target.checked) {
    checked = [...checked, event.target.value];
  } else {
    checked.splice(checked.indexOf(event.target.value), 1);
  }

  return checked;
};

export const isInThePast = (date) => {
  const today = new Date();

  today.setHours(0, 0, 0, 0);

  return date < today;
};

export const getTagColorClass = (tag) => {
  const tagColor = TAG_COLORS.find(
    (item) => item.name.toLowerCase() === tag.toLowerCase()
  );
  return tagColor?.colorClass || "most-least-assets";
};
