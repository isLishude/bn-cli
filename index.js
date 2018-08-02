#!/usr/bin/env node

const { start } = require("repl");
const terminal = start({
  prompt: "> ",
  input: process.stdin,
  output: process.stdout,
  terminal: process.stdout.isTTY,
  useGlobal: true
});
terminal.context.bn = require("bignumber.js");
