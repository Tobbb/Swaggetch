import { getConfig } from "./handleConfig.js"
import { getSwagger, sortPathsByTag } from "./utils.js"

async function main() {
  const config = getConfig()
  const swagger = await getSwagger(config.swaggerUrl)
  sortPathsByTag(swagger)
}

void main()
