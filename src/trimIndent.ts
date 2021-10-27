function trimIndent(str: string): string {
  let lines = str.split("\n");
  lines = lines.map((l) => l.replace(/^\s*/, ""));
  str = lines.join("\n");
  return str.replace(/^\s*/, "");
}

export { trimIndent };
