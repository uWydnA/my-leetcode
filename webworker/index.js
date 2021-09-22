if (window.Worker) {
  var myWorker = new Worker('./index.worker.js');
  const first = document.querySelector('#first')
  const second = document.querySelector('#second')
  first.oninput = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  second.oninput = function () {
    myWorker.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }
  myWorker.onmessage = function (e) {
    result.textContent = e.data;
    console.log('Message received from worker');
  }
}