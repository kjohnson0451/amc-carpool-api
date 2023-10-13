import express from "express"

export const router = express.Router()

router.get("/get-trip", (req, res) => {
  res.send("Hello world!")
})
