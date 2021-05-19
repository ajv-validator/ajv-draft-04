import type {Options} from ".."

const fullTest = process.env.AJV_FULL_TEST

const codeOptions = {es5: true, lines: true, optimize: false}

const options: Options = fullTest
  ? {
      allErrors: true,
      verbose: true,
      inlineRefs: false,
      code: codeOptions,
    }
  : {allErrors: true, code: codeOptions}

export default options
