# ajv-draft-04

Ajv with JSON Schema draft-04 support

[![build](https://github.com/ajv-validator/ajv-draft-04/actions/workflows/build.yml/badge.svg)](https://github.com/ajv-validator/ajv-draft-04/actions/workflows/build.yml)
[![npm](https://img.shields.io/npm/v/ajv-draft-04.svg)](https://www.npmjs.com/package/ajv-draft-04)
[![coverage](https://coveralls.io/repos/github/ajv-validator/ajv-draft-04/badge.svg?branch=master)](https://coveralls.io/github/ajv-validator/ajv-draft-04?branch=master)
[![Gitter](https://img.shields.io/gitter/room/ajv-validator/ajv.svg)](https://gitter.im/ajv-validator/ajv)
[![GitHub Sponsors](https://img.shields.io/badge/$-sponsors-brightgreen)](https://github.com/sponsors/epoberezkin)

## Usage

```javascript
// ESM/TypeScript import
import Ajv from "ajv-draft-04"
// Node.js require:
const Ajv = require("ajv-draft-04")

const ajv = new Ajv()
```

## Tests

```bash
npm install
git submodule update --init
npm test
```

## License

[MIT](https://github.com/ajv-validator/ajv-formats/blob/master/LICENSE)
