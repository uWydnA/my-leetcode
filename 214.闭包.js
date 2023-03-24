const auth = { token: 1 }

const intervalTimeOutFn = () => {
  console.log(auth, auth.token, 'token');

  if (auth.token >= 5) {
    clearInterval(timer)
    clearInterval(time2)
  }
}

const timer = setInterval(intervalTimeOutFn, 1000);

const time2 = setInterval(() => {
  auth.token++
}, 500)

