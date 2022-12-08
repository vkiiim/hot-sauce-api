const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let hotSauces = {
  'the classic': {
      'heatLevel': '1/10',
      'scoville (SHU)': '1800 SHU'
  },
  'los calientes':{
      'heatLevel': '4/10',
      'scoville': '36000 SHU'
  },
  'the last dab':{
      'heatLevel': '11/10',
      'scoville': '2000000 SHU'
  },
  'unknown':{
      'heatLevel': 'unknown',
      'scoville': 'unknown'
  }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/hotSauces/:sauceName', (request, response) => {
  const sauceName = request.params.sauceName.toLowerCase()
  if(hotSauces[sauceName]){
    response.json(hotSauces[sauceName])
  }else {
    response.json(hotSauces['unknown'])
  }

})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
