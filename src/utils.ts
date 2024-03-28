import { Swagger, generic, methods } from "./types.js"

export const getSwagger = async (swaggerURL: string) => {
  return await fetch(swaggerURL).then((res) => res.json() as Promise<Swagger>)
}

export const sortPathsByTag = (swaggger: Swagger) => {
  const map1 = new Map<methods, generic[]>()
  for (const [, value] of Object.entries(swaggger.paths)) {
    if (value.get) {
      handleMap(map1, value.get, "get")
    }
    if (value.post) {
      handleMap(map1, value.get, "post")
    }
    if (value.delete) {
      handleMap(map1, value.get, "delete")
    }
  }
}

function handleMap(map: Map<methods, generic[]>, value: generic, key: methods) {
  if (!value) {
    return
  }
  let nextArr = [value]
  if (map.has(key)) {
    nextArr = [...map.get(key), ...nextArr]
  }
  map.set(key, nextArr)
}
