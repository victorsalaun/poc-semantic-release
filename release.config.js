const branch = process.env.CI_COMMIT_BRANCH

const config = {
    branches: [
        'master',
        {
            name: 'develop',
            prerelease: true
        }
    ],
    plugins: [
        '@semantic-release/commit-analyzer', // https://github.com/semantic-release/commit-analyzer
        '@semantic-release/release-notes-generator', //https://github.com/semantic-release/release-notes-generator
        '@semantic-release/github', // https://github.com/semantic-release/github
    ],
}

// If no prerelease branch, then modify CHANGELOG.md file
if (config.branches.some(it => it === branch || (it.name === branch && !it.prerelease))) {
    //  https://github.com/semantic-release/changelog
    config.plugins.push('@semantic-release/changelog', [
        // https://github.com/semantic-release/git
        '@semantic-release/git',
        {
            assets: ['CHANGELOG.md'],
        },
    ])
}

module.exports = config