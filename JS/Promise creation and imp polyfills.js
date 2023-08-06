Promise.mypro = function (promiseArray) {
  return new Promise(function (resolve, reject) {
    let unresolved = promiseArray.length;
    let resolvedPromises = [];

    if (unresolved == 0) {
      resolve(promiseArray);
      return;
    }

    promiseArray.forEach(async (promise) => {
      try {
        const value = await promise;
        resolvedPromises.push(value);
        unresolved--;
        if (unresolved === 0) resolve(resolvedPromises);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const p1 = Promise.resolve(3);
const p2 = 4;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("test");
  }, 100);
});

Promise.mypro([p1, p2, p3]).then(console.log, console.log);

function real() {
  console.log(1);
}

function real() {
  console.log(2);
}

real();