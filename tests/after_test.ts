import type Ajv from ".."
import type {AnySchema, ErrorObject} from ".."
import * as assert from "assert"

interface TestResult {
  validator: Ajv
  schema: AnySchema
  data: unknown
  valid: boolean
  expected: boolean
  errors: ErrorObject[] | null
  passed: boolean // true if valid == expected
}

export function afterError(res: TestResult): void {
  console.log("ajv options:", res.validator.opts)
}

export function afterEach(res: TestResult): void {
  // console.log(res.errors);
  assert.ok(typeof res.valid == "boolean")
  if (res.valid === true) {
    assert.ok(res.errors === null)
  } else {
    const errs = res.errors as ErrorObject[]
    assert.ok(Array.isArray(errs))
    for (const err of errs) {
      assert.ok(typeof err == "object")
    }
  }
}
