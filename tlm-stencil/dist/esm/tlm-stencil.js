import { p as promiseResolve, b as bootstrapLazy } from './index-9a1a8ed8.js';

/*
 Stencil Client Patch Browser v2.17.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["tlm-button",[[4,"tlm-button",{"testId":[1,"test-id"],"disabled":[4]}]]]], options);
});
