module.exports = {
    repositoryUrl: "https://github.com/victorsalaun/poc-semantic-release",
    tagFormat: "v${version}",
    branches: ["master"],
    plugins: [
        "@semantic-release/release-notes-generator",
        "@semantic-release/git",
        "@semantic-release/github",
    ],
};