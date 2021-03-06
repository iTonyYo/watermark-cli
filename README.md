[![Maintainability](https://api.codeclimate.com/v1/badges/006b4b12feb004d15164/maintainability)](https://codeclimate.com/github/iTonyYo/watermark-cli/maintainability)

# `@oopsunome/watermark-cli`

从命令行给图片贴水印。

## 目录
- [安装](#安装)
- [使用](#使用)
- [相关](#相关)
- [贡献指南](#贡献指南)
- [证书](#证书)

## 安装

```shell
# 使用 NPM
$ npm i -g @oopsunome/watermark-cli

# 使用 Yarn
$ yarn global add @oopsunome/watermark-cli
```

## 使用

```
$ watermark <标记> <画布> 选项 [...]

  选项
    --out, -o, 输出位置, 默认 process.cwd()
    --scale, -s, 水印缩放程度, 0 ~ 1
    --opacity, -O, 水印透明度, 0 ~ 1
    --position, -p, 水印位置, center | top-left | top-right | bottom-left | left-bottom
    --gap, -g, 画布内边距, 默认 8 像素

  示例
    $ watermark mark.png paper.png --scale 0.3 --opacity 0.8 --position center --gap 18
```

## 相关
- [@oopsunome/watermark][@oopsunome/watermark] - 当前项目调用的接口。

## 贡献指南

仔细查阅 [CONTRIBUTING.md][贡献指南] 以了解详情。

## 证书

[`@oopsunome/watermark-cli`][@oopsunome/watermark-cli] 获得了 MIT 许可，仔细查阅 [LICENSE.md][证书] 以了解详情。



[贡献指南]: https://github.com/iTonyYo/watermark-cli/blob/master/CONTRIBUTING.md
[证书]: https://github.com/iTonyYo/watermark-cli/blob/master/LICENSE.md
[Node]: https://nodejs.org/
[@oopsunome/watermark-cli]: https://github.com/iTonyYo/watermark-cli
[@oopsunome/watermark]: https://github.com/iTonyYo/watermark
