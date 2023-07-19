const commands = require("./commands");

// Un prompt como output
process.stdout.write("prompt > ");

// El evento STDIN 'data' se dispara cuando el usuario escribe una línea
process.stdin.on("data", function (data) {
  let cmd = data.toString().trim(); // Remueve la nueva línea

  if (cmd === "pwd") {
    cmd = commands.pwd();
  }
  if (cmd === "date") {
    cmd = commands.date();
  }

  if (cmd == "ls") {
    cmd = commands.ls() ? "undefined" : "ls";
  }

  if (cmd.indexOf("echo") !== -1) {
    cmd = commands.echo(cmd);
  }

  if (cmd.indexOf("cat") !== -1) {
    cmd = commands.cat(cmd);
  }

  if (cmd.indexOf("head") !== -1) {
    cmd = commands.head(cmd);
  }
  if (cmd.indexOf("tail") !== -1) {
    cmd = commands.tail(cmd);
  }
  if (cmd.indexOf("sort") !== -1) {
    cmd = commands.sort(cmd);
  }
  if (cmd.indexOf("wc") !== -1) {
    cmd = commands.wc(cmd);
  }
  if (cmd.indexOf("uniq") !== -1) {
    cmd = commands.uniq(cmd);
  }
  if (cmd.indexOf("curl") !== -1) {
    cmd = commands.curl(cmd);
  }

  process.stdout.write("You typed: " + cmd);

  process.stdout.write("\nprompt > ");
});
