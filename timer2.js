const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');



stdin.on('data', (key) => {
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
  } else if (Number(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);

    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  }
});
