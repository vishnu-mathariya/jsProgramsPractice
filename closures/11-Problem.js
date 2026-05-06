function createTag(tag) {
  return function inner(text) {
    return `<${tag}> ${text} </${tag}>`;
  };
}

const h1 = createTag("h1");

console.log(h1("Welcome"));
