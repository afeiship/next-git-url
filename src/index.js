import nx from '@jswork/next';
import urlParse from 'git-url-parse';
import '@jswork/next-tmpl';

const IS_GITHUB = 'github.com';

const NxGitUrl = nx.declare('nx.GitUrl', {
  properties: {
    github: function () {
      return this.data.resource === IS_GITHUB;
    },
    ssh: function () {
      var tmpl = 'git@github.com:{organization}/{name}.git';
      return nx.tmpl(tmpl, this.data);
    },
    actions: function () {
      var hub = 'https://github.com/{organization}/{name}/actions';
      var lab = 'https://git.{source}/{organization}/{name}/-/pipelines';
      var tmpl = this.github ? hub : lab;
      return nx.tmpl(tmpl, this.data);
    },
    https: function () {
      var hub = 'https://{source}/{organization}/{name}.git';
      var lab = 'https://git.{source}/{organization}/{name}.git';
      var tmpl = this.github ? hub : lab;
      return nx.tmpl(tmpl, this.data);
    },
    url: function () {
      var tmpl = 'https://{resource}/{full_name}';
      return nx.tmpl(tmpl, this.data);
    },
    pages: function () {
      var hub = 'https://{organization}.github.io/{name}/';
      var lab = 'https://{organization}.pages.{source}/{name}/';
      var tmpl = this.github ? hub : lab;
      return nx.tmpl(tmpl, this.data);
    },
    mr: function () {
      var tmpl = this.github ? '' : 'https://{resource}/{full_name}/-/merge_requests/new';
      return nx.tmpl(tmpl, this.data);
    }
  },
  methods: {
    init: function (inGitUrl) {
      this.data = urlParse(inGitUrl);
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxGitUrl;
}

export default NxGitUrl;
