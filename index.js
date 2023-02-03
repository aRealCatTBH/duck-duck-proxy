const ddg = require('duck-duck-scrape');
const express = require('express')
const app = express()
const port = 1337

app.all('/:method', async (req, res) => {
  try {
    res.send(await ddg[req.params.method](req.query.q, {
      safeSearch: ddg.SafeSearchType[req.query.sS || "STRICT"]
    }))
  } catch {
    res.send("/autocomplete /search /searchImages /searchNews /searchVideos")
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
