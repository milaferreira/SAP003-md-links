const mdLinks = require("../index.js");
const array = [ 
    { href: "https://pt.wikipedia.org/wiki/Markdown", title: "Markdown" },
    { href: "https://nodejs.org/", title: "Node.js" },
    { href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", title: "md-links" }
  ];


describe(mdLinks, () => {
    it("should be a function", () => {
      expect(typeof mdLinks).toBe("function");
    });
  
    it("should return 3 links", (done) => {
      mdLinks("./lib/__tests__/teste.md")
        .then(r => {
          expect(r).toEqual(array);
          done();
        });
    });
  
    it("should be an error", () => {
      expect(mdLinks()).rejects.toEqual("Deve conter um parametro");
    })
})