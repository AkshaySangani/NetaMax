# Neta vnext frontend

This project contains the code for the new version of Neta e-commerce.

## Build statuses

| Branch | Status |
| ------------- | ------------- |
| Develop |  [![Build And Deploy QA](https://github.com/NetaMx/r2_front/actions/workflows/build_and_deploy_qa.yml/badge.svg?branch=develop)](https://github.com/NetaMx/r2_front/actions/workflows/build_and_deploy_qa.yml) |
| main | [![Build and Deploy PPE Artifact](https://github.com/NetaMx/r2_front/actions/workflows/build_and_deploy_ppe.yml/badge.svg?branch=main)](https://github.com/NetaMx/r2_front/actions/workflows/build_and_deploy_ppe.yml) |
| releases | [![Build and Deploy Production Artifact](https://github.com/NetaMx/r2_front/actions/workflows/build_and_deploy_production.yml/badge.svg)](https://github.com/NetaMx/r2_front/actions/workflows/build_and_deploy_production.yml) |

## Test coverage

![Coverage lines](https://github.com/NetaMx/r2_front/blob/develop/badges/badge-lines.svg)
![Coverage functions](https://github.com/NetaMx/r2_front/blob/develop/badges/badge-functions.svg)
![Coverage branches](https://github.com/NetaMx/r2_front/blob/develop/badges/badge-branches.svg)
![Coverage statements](https://github.com/NetaMx/r2_front/blob/develop/badges/badge-statements.svg)

## Tools and technologies used

- 🔥 [Next.js](https://nextjs.org) for SSR it improves loading speeds and SEO.
- 🎨 Chakra UI [chakraui.com](https://chakra-ui.com/) (w/ JIT mode)
- 💅 Styled-component for styles management [styled-components.com](https://styled-components.com/)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

## Philosophy and architecture

- Minimal code
- SEO-friendly
- Components / Containers / Dataflows architecture - see [link](https://betterprogramming.pub/how-you-should-structure-your-react-applications-e7dd32375a98)

## Requirements

- Node.js and npm

## Getting started

Run the following command on your local environment:

```bash
cd r2_front
npm install
```

Then, you can run locally in development mode with live reload:

```bash
npm run dev
```

Open <http://localhost:3000> with your favorite browser to see your project.

```bash
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Statics images
├── src
│   ├── components           # Reusable components
│   ├── config               # SEO configuration
│   ├── constants            # Application constants
│   ├── containers           # Pages containers
│   ├── dataflows            # Async calls / data management
│   ├── pages                # Next JS pages
│   ├── state                # State management
│   ├── styles               # Styled-component global styles folder 
│   └── utils                # Utility folder
└── tsconfig.json            # TypeScript configuration
```

## Deploy to production

You can see the results locally in production mode with:

```bash
npm run build
npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js).
You can create an optimized production build with:

```bash
npm run build-prod
```

## Run tests

```bash
npm test
```
