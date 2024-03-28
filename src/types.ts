export interface Config {
  swaggerUrl: string
  outputFolder: string
}

export type methods = "get" | "post" | "delete"

export interface Swagger {
  tags: [{ name: string }]
  paths: { [key in methods]: methodPaths }
}

type methodPaths = {
  [key in methods]: generic
}

export interface generic {
  tags: string[]
  summary: string
  description: string
  operationId: string
  produces: unknown[]
  parameters: unknown[]
  responses: unknown[]
  security: unknown[]
}
