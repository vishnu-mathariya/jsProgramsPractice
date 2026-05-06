const createURL = (protocol) => {
  const inner = (domain) => {
    return `${protocol}://${domain}`;
  };

  return inner;
};

const httpsURL = createURL("https");

console.log(httpsURL("google.com"));
