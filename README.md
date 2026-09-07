# lambdao-dev

Main website for Lambdao.

## Development

The production site uses GitHub Pages' branch-based Jekyll build. The
`github-pages` gem therefore pins local development to the dependency versions
available on GitHub Pages.

Install the Ruby version from `.ruby-version`, then install and run the site:

```sh
gem install bundler -v 2.7.2
bundle install
bundle exec jekyll serve
```

## GitHub Pages setups

This repository currently uses **Deploy from a branch** in the repository's
Pages settings. GitHub controls the build environment, so keep the
`github-pages` version in `Gemfile` aligned with GitHub's published dependency
versions and commit the updated `Gemfile.lock`.

The alternative is **GitHub Actions** as the Pages source. That setup builds and
uploads `_site` in a deployment workflow, allowing the repository to choose its
own Ruby and Jekyll versions. If the repository switches to that setup, replace
the `github-pages` compatibility bundle with explicitly maintained dependencies
and extend `.github/workflows/build.yml` with the Pages upload and deploy steps.
