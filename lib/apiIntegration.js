var { get, download } = require('qansigliere-axios-utils');

class Gitlab_API {
    constructor(url = '', authToken = '') {
        this.url = url ? url : process.env.GITLAB_URL;
        this.headers = {
            'User-Agent': 'QANSIGLIERE',
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${authToken ? authToken : process.env.GITLAB_AUTH_TOKEN}`,
        };
    }

    async getRepos(owner) {
        return await get(this.url, `users/${owner}/repos`, this.headers);
    }
}

module.exports.Gitlab_API = Gitlab_API;
