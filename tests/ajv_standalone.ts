import type AjvCore from "ajv/dist/core"
import AjvPack from "ajv/dist/standalone/instance"

export function withStandalone(instances: AjvCore[]): (AjvCore | AjvPack)[] {
  return [...(instances as (AjvCore | AjvPack)[]), ...instances.map(makeStandalone)]
}

function makeStandalone(ajv: AjvCore): AjvPack {
  return new AjvPack(ajv)
}
