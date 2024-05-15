const removeComments = (str: string): string => {
  // Remove single-line comments
  str = str.replace(/\/\/.*$/gm, "");
  // Remove multi-line comments
  str = str.replace(/\/\*[\s\S]*?\*\//g, "");
  return str;
};

const handleMultilineStrings = (str: string): string => {
  // Replace multiline strings enclosed in backticks with escaped strings
  return str.replace(/`([^`]*)`/g, (_match, multilineString) => {
    const escapedString = JSON.stringify(multilineString);
    return escapedString;
  });
};

export const JSONCT = {
  // deno-lint-ignore no-explicit-any
  parse: (jsonctStr: string): any => {
    // Remove comments
    jsonctStr = removeComments(jsonctStr);
    // Handle multiline strings
    jsonctStr = handleMultilineStrings(jsonctStr);
    // Parse the cleaned JSON string
    return JSON.parse(jsonctStr);
  },
};
