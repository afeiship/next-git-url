(function () {
  const NxGitUrl = require('../src');

  describe('NxGitUrl.methods', function () {
    test('github url: git@github.com:afeiship/next-git-url.git', function () {
      var url = 'git@github.com:afeiship/next-git-url.git';
      var gitUrl = new NxGitUrl(url);
      var { github, pages, url, ssh, https } = gitUrl;

      expect(github).toBe(true);
      expect(pages).toBe('https://afeiship.github.io/next-git-url/');
      expect(ssh).toBe('git@github.com:afeiship/next-git-url.git');
      expect(https).toBe('https://github.com/afeiship/next-git-url.git');
      expect(url).toBe('https://github.com/afeiship/next-git-url');
    });

    test('gitlab url: git@git.saybot.net:aric.zheng/dingtalk-assistant.git', function () {
      var url = 'git@git.saybot.net:aric.zheng/dingtalk-assistant.git';
      var gitUrl = new NxGitUrl(url);
      var { github, pages, url, ssh, https, mr } = gitUrl;

      expect(github).toBe(false);
      expect(pages).toBe('https://aric.zheng.pages.saybot.net/dingtalk-assistant/');
      expect(ssh).toBe('git@github.com:aric.zheng/dingtalk-assistant.git');
      expect(https).toBe('https://git.saybot.net/aric.zheng/dingtalk-assistant.git');
      expect(url).toBe('https://git.saybot.net/aric.zheng/dingtalk-assistant');
      expect(url).toBe('https://git.saybot.net/aric.zheng/dingtalk-assistant/-/merge_requests');
    });
  });
})();
