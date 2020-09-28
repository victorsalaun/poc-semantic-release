module.exports = {
    repositoryUrl: "https://github.com/victorsalaun/poc-semantic-release",
    tagFormat: "v${version}",
    branches: ["master"],
    plugins: [
        "@semantic-release/commit-analyzer",
        ["@semantic-release/git", {
            "assets": ["docs/CHANGELOG.md"]
        }],
        "@semantic-release/github",
        "@semantic-release/release-notes-generator",
        ["@semantic-release/changelog", {
            "changelogFile": "CHANGELOG.md"
        }],
    ],
};