#!/usr/bin/env node

const {
  dirname,
  basename,
} = require('path');

const meow = require('meow');
const updateNotifier = require('update-notifier');
const { isString, merge } = require('lodash');

const watermark = require('@oopsunome/watermark');

const cli = meow(`
  使用方式
    $ watermark <mark> <paper> options [...]
  示例
    $ watermark mark.png paper.png --position center
`, {
  flags: {
    out: {
      type: 'string',
      alias: 'o',
    },
  },
});

updateNotifier({ pkg: cli.pkg }).notify();

if (cli.input.length === 0) {
  throw Error('Specify at least one path');
}

(async () => {
  const { input, flags } = cli;
  const {
    gap,

    position,
    scale,
    opacity,

    out,
  } = flags;

  await watermark(
    input[0],
    input[1],
    merge(
      {
        gap,
        mark: {
          position,
          scale,
          opacity,
        },
        output: {
          filename: undefined,
          path: undefined,
        },
      },
      isString(out) ? {
        output: {
          filename: basename(out),
          path: dirname(out),
        },
      } : {
        output: {
          filename: undefined,
          path: undefined,
        },
      },
    ),
  );
})();
