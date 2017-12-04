var unified = require("unified");
var markdown = require("remark-parse");
var vfile = require("to-vfile");
var report = require("vfile-reporter");
var remark2rehype = require("remark-rehype");
var remark2retext = require("remark-retext");
var english = require("retext-english");
var indefiniteArticle = require("retext-indefinite-article");
var html = require("rehype-stringify");
var toc = require("remark-toc");
var doc = require("rehype-document");

var processor = unified()
  .use(markdown)
  .use(
    remark2retext,
    unified()
      .use(english)
      .use(indefiniteArticle)
  )
  .use(toc)
  .use(remark2rehype)
  .use(doc, { title: "Contents" })
  .use(html);

// process.stdin.pipe(stream(processor)).pipe(process.stdout);
processor.process(vfile.readSync("Day1.md"), function(err, file) {
  if (err) throw err;
  console.error(report(file));
  file.extname = ".html";
  vfile.writeSync(file);
});
