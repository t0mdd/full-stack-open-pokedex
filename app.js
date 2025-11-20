const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// app.get('/version', (req, res) => {
//   res.send('4') // change this string to ensure a new version deployed
// })

const healthRequestCapacity = 3;
let healthRequests = 0;

app.get('/health', (req, res) => {
  healthRequests++;
  if (healthRequests > healthRequestCapacity) {
    res.sendStatus(500)
  }
  else {
    res.send('ok')
  }
})

app.listen(PORT, () => {
  console.log(`Howdy!! Server started on port ${PORT}`)
})
