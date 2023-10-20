import { NodeEnv } from "@config/environment_variables"

const devMode = "development"
const prodMode = "production"

export const isDevMode = () => {
  return NodeEnv === devMode
}

export const isProdMode = () => {
  return NodeEnv === prodMode
}
