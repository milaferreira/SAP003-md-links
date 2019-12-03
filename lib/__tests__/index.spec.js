const mdLinks = require("../index.js");


describe(mdLinks, () => {
    test("should be a function", (done) => {
      expect(typeof mdLinks).toBe("function");
      done();
    });
  
    test("retorna", (done) => {
      mdLinks("./lib/__tests__/Teste.md")
        .then(r => {
          expect(r).toEqual([ 
            { href: "https://pt.wikipedia.org/wiki/Markdown", title: "Markdown" },
            { href: "https://nodejs.org/", title: "Node.js" },
            { href: "https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg", title: "md-links" },
          ]);
          done();
        });
    });
  
    test("should be an error", (done) => {
      mdLinks("./lib/__tests__/Test.md")
      .catch(error => {
        
        expect(error).toEqual("ENOENT: no such file or directory, open 'C:\\Users\\CAMILA\\Desktop\\SAP003-md-links\\lib\\__tests__\\Test.md'"
        );
        done();
      })
    })
})