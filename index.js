#!/usr/bin/env node

console.log(`Usage:

new BigNumber("2003528493491143929").div(1e18).toString()
'2.003528493491143929'

`);

const terminal = require("repl").start({
  prompt: "> ",
  input: process.stdin,
  output: process.stdout,
  terminal: process.stdout.isTTY,
  useGlobal: true,
});

terminal.context.BigNumber = require("bignumber.js");
