# Gitlab API Integration

The main idea of ​​this library created in the JavaScript language is to provide a ready-made set of API methods for
integration with Gitlab

## Author

https://www.youtube.com/@QANSIGLIERE/

## Support the project

https://buymeacoffee.com/qansigliere

## Installation

Using npm `npm i qansigliere-gitlab-api-integration`

## How to use it

### Create a \*.env file

Create any \*.env file (like `gitlab.env`) and write the following information in the created file

```
export GITLAB_URL="https://__YOUR_URL__"
export GITLAB_AUTH_TOKEN="__YOUR_APIKEY__"
```

### Make the \*.env file works

Just run in the terminal the following command: `source gitlab.env`

### Projects

#### Get information about all projects

```
let newIntegration = new Gitlab_API();
let request = await newIntegration.getAllProjects();
```

### Merge Requests

#### Get information about all merge requests

```
let newIntegration = new Gitlab_API();
let request = await newIntegration.getAllMergeRequests();
```

### Merge Request Notes

#### Get information about all merge request notes

```
let newIntegration = new Gitlab_API();
let request = await newIntegration.getAllMergeRequestNotes(id, merge_request_iid);
```

## Improvements & Suggestions

https://forms.gle/GZbS9hw42tSYJxKL7
