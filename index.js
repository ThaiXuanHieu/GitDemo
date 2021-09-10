const promise = new Promise((resolve, reject) => {
  resolve("React");
});

promise
  .then((res) => {
    return res + " <3 ASP.NET Core";
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
