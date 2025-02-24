var { get, downloadV2 } = require('qansigliere-axios-utils');

class Gitlab_API {
    constructor(url = '', authToken = '') {
        this.url = url ? url : process.env.GITLAB_URL;
        this.headers = {
            'User-Agent': 'QANSIGLIERE',
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${authToken ? authToken : process.env.GITLAB_AUTH_TOKEN}`,
        };
    }

    async getAllProjects(additional_filters = '') {
        return await downloadV2(
            this.url,
            `/api/v4/projects/${additional_filters ? `?${additional_filters}` : ''}`,
            this.headers,
            'git',
        );
    }

    async getAllMergeRequests(additional_filters = '') {
        return await downloadV2(
            this.url,
            `/api/v4/merge_requests${additional_filters ? `?${additional_filters}` : ''}`,
            this.headers,
            'git',
        );
    }

    async getAllMergeRequestNotes(id, merge_request_iid, additional_filters = '') {
        return await downloadV2(
            this.url,
            `/api/v4/projects/${id}/merge_requests/${merge_request_iid}/notes${
                additional_filters ? `?${additional_filters}` : ''
            }`,
            this.headers,
            'git',
        );
    }

    async getProjectMergeRequests(id, additional_filters = '') {
        return await downloadV2(
            this.url,
            `/api/v4/projects/${id}/merge_requests/${additional_filters ? `?${additional_filters}` : ''}`,
            this.headers,
            'git',
        );
    }
}

module.exports.Gitlab_API = Gitlab_API;
