import fs from "fs"
import { Config } from "./types.js"

export const getConfig = () => {
  const config = fs.readFileSync("swaggetch.config.json", "utf8")
  if (config) {
    const configObj = JSON.parse(config) as Config
    console.log(configObj)
    return configObj
  }
  console.log("no config")
  return
}
