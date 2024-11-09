# Nuxt Boilerplate - Base

---

## Git hooks

```sh
# optional
npx husky
```

## Report env

```sh
# check env info
npm run settings:envinfo
```

## Node version manager

```sh
# look pinned version node in package.json file
volta install node@[verstionOnYourProject]
```

## Executable files

```sh
npm run settings:executable
```

## Install a project

```sh
# clean install with deps from package.lock
npm ci
# or install with deps package.json & update package.lock
# npm install
```

## Update with npm-check-updates

```sh
# optional
# npm audit
# if not install package install it
npm install -g npm-check-updates
```

## Npm commands

```sh
# build (ssr)
npm run build
```

```sh
# preview (ssr)
npm run start
```

```sh
# build (ssg)
npm run generate
```

```sh
# preview (ssg)
npm run preview
```

## Info

- https://github.com/tabrindle/envinfo - Report dev env
- https://volta.sh/ - Node version manager
- https://nuxt.com/docs/guide/directory-structure/env - Nuxt env structure
- https://nuxt.com/docs/getting-started/deployment - Nuxt deployment
- https://nuxt.com/docs/getting-started/configuration - Nuxt configuration
- https://vitejs.dev/guide/build.html - Vite build for production
- https://vuejs.org/guide/best-practices/production-deployment.html - Vue production & deployment
- See more in package.json, docs.md files
