# Gather Typescript Template

This is a stripped down copy of [the code](https://github.com/gathertown/the-forest) behind [The Forest](https://gather.town/app/e5kK4mRdSOALriFT/TheForest), a dynamic, living Gather map.

Also a great example of a simple mod built with the [Gather API](https://gathertown.notion.site/Gather-Websocket-API-bf2d5d4526db412590c3579c36141063)!

This template is aimed to get me up and running as quickly as possible. I hope it helps you too!

## Setup

prereq: have NodeJS and npm or pnpm installed

1. Run `npm i` or `pnpm i`, whichever you prefer.
2. Copy `example.api-key.ts`, remove `example.` from the name, and replace the example key with your own:

```js
export const API_KEY = "your-api-key-here"
```

3. Replace the `SPACE_ID` and `MAP_ID` in `index.ts` with your own

## Run

`npm run start`
