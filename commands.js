const fs = require("fs");
const axios = require("axios");

module.exports = {
  pwd: function () {
    return process.argv[1];
  },

  date: function () {
    return new Date();
  },

  ls: function () {
    fs.readdir(".", function (err, files) {
      if (err) throw err;
      files.forEach(function (file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write("prompt > ");
    });
  },

  echo: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    return palabrasSeparadas.join(" ");
  },

  cat: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      process.stdout.write(data.toString());
      process.stdout.write("prompt > ");
    }); // recibimos un buffer, para que podamos leer el mismo tenemos que convertirlo a string

    return path;
  },

  head: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.slice(0, 5);
      let finalfinal = final.join("\n");
      process.stdout.write(finalfinal);
      process.stdout.write("prompt > ");
    });
    return path;
  },
  tail: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.slice(resultado.length - 5);
      let finalfinal = final.join("\n");
      process.stdout.write(finalfinal);
      process.stdout.write("prompt > ");
    });
    return path;
  },
  sort: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.sort();
      let finalfinal = final.join("\n");
      process.stdout.write(finalfinal);
      process.stdout.write("prompt > ");
    });
    return path;
  },
  wc: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.length.toString();

      process.stdout.write(final);
      process.stdout.write("prompt > ");
    });
    return path;
  },
  uniq: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");

    fs.readFile(path, function (err, data) {
      if (err) throw err;
      let texto = data.toString();
      let resultado = texto.split("\n");
      let final = resultado.filter((a, b, c) => c.indexOf(a) == b);
      let finalfinal = final.join("\n");

      process.stdout.write(finalfinal);
      process.stdout.write("prompt > ");
    });
    return path;
  },
  curl: function (palabra) {
    let palabrasSeparadas = palabra.split(" ");
    palabrasSeparadas.shift();
    let path = palabrasSeparadas.join(" ");
    //https://plataforma5.la/
    axios
      .get(palabrasSeparadas[0])
      .then((response) => {
        console.log(response.data);
        process.stdout.write(response.data.toString());
        process.stdout.write("prompt > ");
      })
      .catch(console.log("Error en la carga"));

    return path;
  },
};
