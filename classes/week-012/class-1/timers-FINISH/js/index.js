window.addEventListener("load", function (e) {
template = `

`

  function mockServerRequest() {
    const delay = new Promise((resolve, reject) => {
      setTimeout(function () {
       resolve(employees);
      }, 1500);
    });
    return delay;
  }

  mockServerRequest().then((data) => createEmployeeMarkup(data, template))

  function createEmployeeMarkup(data, template) {
    console.log(shit);
  }
});
