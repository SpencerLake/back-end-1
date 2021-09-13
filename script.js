
document.getElementById("fbutton").onclick = function () {
    axios
      .get("http://localhost:4000/api/users")
      .then(function (response) {
        const data = response.data;
        document.getElementById("people").innerHTML = data
          .map(function (person) {
            return '<li class="row">' + person;
          })
          .join("");
      })
      .catch(function (err) {
        document.getElementById("people").innerHTML =
          '<li class="text-danger">' + err.message + "</li>";
      });
  };



document.getElementById("hbutton").onclick = function () {
    axios
      .get("http://localhost:4000/api/hobbies")
      .then(function (response) {
        const data = response.data;
        document.getElementById("hobbies").innerHTML = data
          .map(function (hobbies) {
            return '<li class="row">' + hobbies;
          })
          .join("");
      })
      .catch(function (err) {
        document.getElementById("hobbies").innerHTML =
          '<li class="text-danger">' + err.message + "</li>";
      });
  }; 

