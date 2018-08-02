const { start } = require("repl");

const terminal = start();

terminal.context.bn = require("bignumber.js");
