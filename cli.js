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

  选项
    --out, -o, 输出位置, 默认 process.cwd()
    --scale, -s, 水印缩放程度, 0 ~ 1
    --opacity, -O, 水印透明度, 0 ~ 1
    --position, -p, 水印位置, center | top-left | top-right | bottom-left | left-bottom
    --gap, -g, 画布内边距, 默认 8 像素

  示例
    $ watermark mark.png paper.png --scale 0.3 --opacity 0.8 --position center --gap 18
`, {
  flags: {
    out: {
      type: 'string',
      alias: 'o',
    },
    scale: {
      type: 'number',
      alias: 's',
    },
    opacity: {
      type: 'number',
      alias: 'O',
    },
    position: {
      type: 'string',
      alias: 'p',
    },
    gap: {
      type: 'number',
      alias: 'g',
    },
    help: {
      type: 'boolean',
      alias: 'h',
    },
  },
});

updateNotifier({ pkg: cli.pkg }).notify();

if (cli.input.length !== 2) {
  throw Error('必须同时提供水印、画板两个来源');
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
