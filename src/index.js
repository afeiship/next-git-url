(function() {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxTmpl = nx.tmpl || require('@jswork/next-tmpl');
  var urlParse = require('git-url-parse');
  var IS_GITHUB = 'github.com';

  var NxGitUrl = nx.declare('nx.GitUrl', {
    properties: {
      github: function () {
        return this.data.resource === IS_GITHUB;
      },
      ssh: function () {
        var tmpl = 'git@github.com:{organization}/{name}.git';
        return nxTmpl(tmpl, this.data);
      },
      actions: function () {
        var hub = 'https://github.com/{organization}/{name}/actions';
        var lab = 'https://git.{source}/{organization}/{name}/-/pipelines';
        var tmpl = this.github ? hub : lab;
        return nxTmpl(tmpl, this.data);
      },
      https: function () {
        var hub = 'https://{source}/{organization}/{name}.git';
        var lab = 'https://git.{source}/{organization}/{name}.git';
        var tmpl = this.github ? hub : lab;
        return nxTmpl(tmpl, this.data);
      },
      url: function () {
        var tmpl = 'https://{resource}/{full_name}';
        return nxTmpl(tmpl, this.data);
      },
      pages: function () {
        var hub = 'https://{organization}.github.io/{name}/';
        var lab = 'https://{organization}.pages.{source}/{name}/';
        var tmpl = this.github ? hub : lab;
        return nxTmpl(tmpl, this.data);
      },
      mr: function () {
        var tmpl = this.github ? '' : 'https://{resource}/{full_name}/-/merge_requests';
        return nxTmpl(tmpl, this.data);
      }
    },
    methods: {
      init: function (inGitUrl) {
        this.data = urlParse(inGitUrl);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxGitUrl;
  }
})();
