// tf.loadModel('jsmodel/model.json')
tf.loadLayersModel('jsmodel/model.json')
  .then(function (model) {
    console.log(model)
    const webrtcElement = document.getElementById('video')

    const canvas = document.createElement('canvas')
    canvas.width = 224
    canvas.height = 224
    document.body.appendChild(canvas)

    window.requestAnimationFrame(onFrame.bind(null, model, webrtcElement, canvas))
  })

const VIDEO_WIDTH = 640
const VIDEO_HEIGHT = 480
const NET_SIZE = 224

function onFrame (model, webrtcElement, canvas) {
  const ctx = canvas.getContext('2d')
  ctx.drawImage(webrtcElement, 0, 0, VIDEO_WIDTH, VIDEO_HEIGHT, 0, 0, NET_SIZE, NET_SIZE)

  // const tensor = tf.fromPixels(webrtcElement)
  const tensor = tf.browser.fromPixels(canvas)
  const eTensor = tensor.expandDims(0).asType('float32').div(256.0)
  const pred = model.predict(eTensor)
  max = tf.argMax(pred, 1)

  const predValues = pred.dataSync()
  const predArray = Array.from(predValues)
  meanScore = calcMeanScore(predArray)

  const progressElement = document.getElementById('estimation')
  progressElement.setAttribute('data-value', Math.round(meanScore * 10))
  //console.log(meanScore.toFixed(2))
  window.requestAnimationFrame(onFrame.bind(null, model, webrtcElement, canvas))
}

function calcMeanScore (scoreDist) {
  let result = 0
  for (let i = 1; i <= 10; i++) {
    result += i * scoreDist[i - 1]
  }
  return result
}
