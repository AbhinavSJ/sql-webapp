## SQL webapp

Click [here](https://atlan-sql-webapp.vercel.app/) to go visit the deployed app on vercel

This is a simple App to connect to a DB and query all the associated tables.

## FEATURES

- Onboarding flow with the industry standard form setup
- An app that gets all the tables associated to a DB after onboarding and lets you query any table and display results in a paginated table
- ability to download the queried results
- custom defined core ui components

## Limitations or scope of improvements
-  Each table cell can be formatted to have max width and overflow rules, currently unhandled which makes some tables rendered appear non-uniform (employees table)
-  Can modularize the code to a little more of an extent for scalability and simplicity, currently some components have too many functionalities and elements embedded in a single component (eg: datatable)
-  since the root is wrapped using context API, have to look out for unnecessary re-rendering of parent components and handle them

## Libraries
- [shadcn](https://ui.shadcn.com/) - for getting bare customisable ui core components and elements that i was able to customise for my use case
- react-hook-forms, zodresolver - to help with handling forms
- [husky](https://typicode.github.io/husky/) - for processing pre commit prettier hook
- @types/react-syntax-highlighter - for getting syntax-highlighted sql query



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


