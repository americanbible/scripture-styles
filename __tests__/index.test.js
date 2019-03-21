const Fs = require("fs");
const sass = require("node-sass");

it("can compile sass to css", done => {
  sass.render(
    {
      file: __dirname + "/../scss/eb-scripture-style/eb-scripture-style.scss"
    },
    (err, result) => {
      console.log(err);
      expect(err).toBeNull();
      expect(result).toBeInstanceOf(Object);
      expect(result.css).toBeInstanceOf(Buffer);
      done();
    }
  );
});
