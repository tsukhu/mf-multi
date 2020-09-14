# Demo of Svelte , Vue and React MF

This is an extension to Jack Herrington's svelte and React MF.

Here are the updates
- Added a Vue 3 MF (remote)
- Also In the case of Vue JS exposing a function which takes care of initializing the entire Vue App and thats what is exposed as a remote. This can then simply mounted on any dom element in the host app.
- Removed the addToChart global function and using Custom Events for Card updates that show up on the Svelte Header
- The React Host app also updated to use Custom Events to send cart updates

# Setup

- Run `yarn install and yarn start` on the folders `header`, `react-consumer` and `vue-app`
- Open the host app on 8082 and try it out


