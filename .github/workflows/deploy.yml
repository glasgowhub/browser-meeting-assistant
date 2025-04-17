name: deploy
on:
push:
branches: [main]
jobs:
build:
runs-on: ubuntu-latest
steps:
- uses: actions/checkout@v3
- uses: pnpm/action-setup@v2
with: { version: 9 }
- run: pnpm i && pnpm run build
- uses: JamesIves/github-pages-deploy-action@v4
with:
branch: gh-pages
folder: dist
