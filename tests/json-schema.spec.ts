import _Ajv, {SchemaObject} from ".."
import getAjvInstances from "./ajv_instances"
// import {withStandalone} from "./ajv_standalone"
import options from "./ajv_options"
import {afterError, afterEach} from "./after_test"
import ajvFormats from "ajv-formats"
import * as assert from "assert"
import tests from "./_json/draft4"

const jsonSchemaTest: any = require("json-schema-test")

const remoteRefs: {[R in string]: SchemaObject} = {
  "http://localhost:1234/integer.json": require("./JSON-Schema-Test-Suite/remotes/integer.json"),
  "http://localhost:1234/subSchemas.json": require("./JSON-Schema-Test-Suite/remotes/subSchemas.json"),
  "http://localhost:1234/subSchemas-defs.json": require("./JSON-Schema-Test-Suite/remotes/subSchemas-defs.json"),
  "http://localhost:1234/baseUriChange/folderInteger.json": require("./JSON-Schema-Test-Suite/remotes/baseUriChange/folderInteger.json"),
  "http://localhost:1234/baseUriChangeFolder/folderInteger.json": require("./JSON-Schema-Test-Suite/remotes/baseUriChangeFolder/folderInteger.json"),
  "http://localhost:1234/baseUriChangeFolderInSubschema/folderInteger.json": require("./JSON-Schema-Test-Suite/remotes/baseUriChangeFolderInSubschema/folderInteger.json"),
  "http://localhost:1234/name.json": require("./JSON-Schema-Test-Suite/remotes/name.json"),
  "http://localhost:1234/name-defs.json": require("./JSON-Schema-Test-Suite/remotes/name-defs.json"),
}

const instances = getAjvInstances(_Ajv, options, {
  strict: false,
  ignoreKeywordsWithRef: true,
})

for (const ajv of instances) {
  ajv.opts.code.source = true
  for (const id in remoteRefs) ajv.addSchema(remoteRefs[id], id)
  ajvFormats(ajv)
}

jsonSchemaTest(instances, {
  description: `JSON-Schema Test Suite draft-04: ${instances.length} ajv instances with different options`,
  suites: {tests},
  only: [],
  skip: ["optional/zeroTerminatedFloats", "optional/float-overflow"],
  assert,
  afterError,
  afterEach,
  cwd: __dirname,
  hideFolder: `draft4/`,
})
