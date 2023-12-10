export const PgUrl = process.env.PG_URL
export const NodeEnv = process.env.NODE_ENV || "production"
export const ServerPort = parseInt(process.env.SERVER_PORT) || 3000
export const FrontEndDomain =
  process.env.FRONT_END_DOMAIN || "https://amc-carpool.zbly.org"
