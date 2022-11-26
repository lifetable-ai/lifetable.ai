import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

import './ningowood-root-config.css'

import './static/ningowood.png'

import './event-emitter'
import './store-emitter'
import { SentryProvider } from "./sdk/sentry";

// if (
//   process.env.NODE_ENV === 'production' &&
//   location.href.indexOf('ningowood.com') > -1
// ) {
const Sentry = new SentryProvider()
Sentry.init()
// }

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

// System.import("@ningowood/util-styleguide").then(() => {
// Activate the layout engine once the styleguide CSS is loaded
layoutEngine.activate();
start();
// });
