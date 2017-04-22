#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="master"
TARGET_BRANCH="master:gh-pages"

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    echo "Skipping deploy; just doing a build."
    npm run spec
    exit 0
fi

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Now let's go have some fun with the cloned repo
cd dist

git init && \

git config user.name "Travis CI"
git config user.email "${COMMIT_AUTHOR_EMAIL}"

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add . && \
git commit -m "Deploy to GitHub Pages: ${SHA}" && \

# Get the deploy key by using Travis's stored variables to decrypt deploy-key.enc
ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../deploy-key.enc -out deploy-key -d
chmod 600 deploy-key
cp deploy_key ~/.ssh/id_rsa

# Now that we're all set up, we can push.
git push --force $SSH_REPO $TARGET_BRANCH
