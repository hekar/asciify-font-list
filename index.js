#!/usr/bin/env node

'use strict';

const asciify = require('asciify');

if (require.main === module) {
  const phrase = 'abcdefghijklmnopqrstuvwxyz';
  asciify.getFonts((err, fonts) => {
    fonts.forEach((font) => {
      const option = {font};
      asciify(phrase, option, (err, res) => {
        console.log(font);
        console.log(res);
      });
      console.log();
    });
  });
}

