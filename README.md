# next-git-url
> Get git urls.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-git-url
```

## apis
| property | description                                 |
| -------- | ------------------------------------------- |
| github   | Check if is github.                         |
| pages    | Gh_pages.                                   |
| url      | Git url in its source.                      |
| ssh      | `ssh` git url.                              |
| https    | `https` git url.                            |
| mr       | Get merge request url(only support gitlab). |

## usage
```js
import '@jswork/next-git-url';

const url = 'git@github.com:afeiship/next-git-url.git';
const gitUrl = new nx.GitUrl(url);
const { github, pages, url, ssh, https } = gitUrl;

// true
// https://afeiship.github.io/next-git-url/
// git@github.com:afeiship/next-git-url.git
// https://github.com/afeiship/next-git-url.git
// https://github.com/afeiship/next-git-url
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-git-url/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-git-url
[version-url]: https://npmjs.org/package/@jswork/next-git-url

[license-image]: https://img.shields.io/npm/l/@jswork/next-git-url
[license-url]: https://github.com/afeiship/next-git-url/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-git-url
[size-url]: https://github.com/afeiship/next-git-url/blob/master/dist/next-git-url.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-git-url
[download-url]: https://www.npmjs.com/package/@jswork/next-git-url
