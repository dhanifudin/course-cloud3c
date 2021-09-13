const glob = require("glob");
const { countCharacters } = require("wcmd/lib/utils");
const MINIMAL_CHARS = 1000;

(async () => {
  glob("../../attendances/**/*.md", (err, files) => {
    files.forEach((file) => {
      const result = countCharacters(file);
      const chars = result.lines
        .map((line) => line.length)
        .reduce((l1, l2) => l1 + l2);
      if (chars < MINIMAL_CHARS) {
        console.error(
          `${file} doesn't meet summary requirements (minimum ${MINIMAL_CHARS} chars): ${chars} chars`
        );
        process.exit(1);
      }
    });
    console.log(`All summary passed`);
    process.exit(0);
  });
})();
