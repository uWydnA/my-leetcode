onmessage = function (e) {
  console.log('Message received from main script', e, 'e');
  var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
  console.log('Posting message back to main script', workerResult, 'workerResult');
  postMessage(workerResult);
}