export const generateInputLabelHelperTextID = (id?: string) => {
  return {
    label: id + "-label",
    helperText: id + "-helper-text",
    secondaryHelperText: id + "-secondary-helper-text",
  };
};
