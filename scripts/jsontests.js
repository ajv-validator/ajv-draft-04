"use strict"

const testSuitePaths = {
  draft4: "tests/JSON-Schema-Test-Suite/tests/draft4/",
}

const glob = require("glob")
const fs = require("fs")

for (const suite in testSuitePaths) {
  const p = testSuitePaths[suite]
  const files = glob.sync(`${p}{**/,}*.json`)
  if (files.length === 0) {
    console.error(`Missing folder ${p}\nTry: git submodule update --init\n`)
    process.exit(1)
  }
  const code = files
    .map((f) => {
      const name = f.replace(p, "").replace(/\.json$/, "")
      const testPath = f.replace(/^tests/, "..")
      return `\n  {name: "${name}", test: require("${testPath}")},`
    })
    .reduce((list, f) => list + f)
  fs.writeFileSync(`./tests/_json/${suite}.ts`, `const tests = [${code}\n]\n\nexport default tests`)
}
