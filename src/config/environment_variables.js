// Most variables here assume we're in production mode
// if process.env.XYZ is null. But the opposite is the
// case for PG_URL
export const PgUrl =
  process.env.PG_URL || "postgresql://localdb:localdb@local_db:5432/localdb"

export const NodeEnv = process.env.NODE_ENV || "production"
export const ServerPort = parseInt(process.env.SERVER_PORT) || 3000
export const FrontEndDomain =
  process.env.FRONT_END_DOMAIN || "https://amc-carpool.zbly.org"
