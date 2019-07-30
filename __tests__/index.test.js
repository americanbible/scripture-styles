const Fs = require("fs");
const sass = require("node-sass");

it("can compile sass to css", done => {
  sass.render(
    {
      file: __dirname + "/../scss/scripture-styles.scss"
    },
    (err, result) => {
      expect(err).toBeNull();
      expect(result).toBeInstanceOf(Object);
      expect(result.css).toBeInstanceOf(Buffer);
      done();
    }
  );
});
