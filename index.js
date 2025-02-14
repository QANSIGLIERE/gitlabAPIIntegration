var { Gitlab_API } = require('./lib/apiIntegration');

// Remove me at the end
(async function API() {
    let newIntegration = new Gitlab_API();
    let request = await newIntegration.getAllRepositories();

    console.log(JSON.stringify(request));
})();

module.exports.Gitlab_API = Gitlab_API;
