function stringToJSON(inputProperties, value) {
  let result;
  const properties = inputProperties.split(">");
  result = `{${properties
    .map((property) => `"${property}":`)
    .join("{")}"${value}"${"}".repeat(properties.length)}`;
  return result;
}
stringToJSON("a>b>c", "hello");
stringToJSON("a", "hello");
