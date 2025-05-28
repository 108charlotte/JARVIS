/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@firebase/analytics/dist/esm/index.esm2017.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/analytics/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnalytics: () => (/* binding */ getAnalytics),
/* harmony export */   getGoogleAnalyticsClientId: () => (/* binding */ getGoogleAnalyticsClientId),
/* harmony export */   initializeAnalytics: () => (/* binding */ initializeAnalytics),
/* harmony export */   isSupported: () => (/* binding */ isSupported),
/* harmony export */   logEvent: () => (/* binding */ logEvent),
/* harmony export */   setAnalyticsCollectionEnabled: () => (/* binding */ setAnalyticsCollectionEnabled),
/* harmony export */   setConsent: () => (/* binding */ setConsent),
/* harmony export */   setCurrentScreen: () => (/* binding */ setCurrentScreen),
/* harmony export */   setDefaultEventParameters: () => (/* binding */ setDefaultEventParameters),
/* harmony export */   setUserId: () => (/* binding */ setUserId),
/* harmony export */   setUserProperties: () => (/* binding */ setUserProperties),
/* harmony export */   settings: () => (/* binding */ settings)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_installations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/installations */ "./node_modules/@firebase/installations/dist/esm/index.esm2017.js");






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Type constant for Firebase Analytics.
 */
const ANALYTICS_TYPE = 'analytics';
// Key to attach FID to in gtag params.
const GA_FID_KEY = 'firebase_id';
const ORIGIN_KEY = 'origin';
const FETCH_TIMEOUT_MILLIS = 60 * 1000;
const DYNAMIC_CONFIG_URL = 'https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig';
const GTAG_URL = 'https://www.googletagmanager.com/gtag/js';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/analytics');

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["already-exists" /* AnalyticsError.ALREADY_EXISTS */]: 'A Firebase Analytics instance with the appId {$id} ' +
        ' already exists. ' +
        'Only one Firebase Analytics instance can be created for each appId.',
    ["already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */]: 'initializeAnalytics() cannot be called again with different options than those ' +
        'it was initially called with. It can be called again with the same options to ' +
        'return the existing instance, or getAnalytics() can be used ' +
        'to get a reference to the already-initialized instance.',
    ["already-initialized-settings" /* AnalyticsError.ALREADY_INITIALIZED_SETTINGS */]: 'Firebase Analytics has already been initialized.' +
        'settings() must be called before initializing any Analytics instance' +
        'or it will have no effect.',
    ["interop-component-reg-failed" /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */]: 'Firebase Analytics Interop Component failed to instantiate: {$reason}',
    ["invalid-analytics-context" /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */]: 'Firebase Analytics is not supported in this environment. ' +
        'Wrap initialization of analytics in analytics.isSupported() ' +
        'to prevent initialization in unsupported environments. Details: {$errorInfo}',
    ["indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */]: 'IndexedDB unavailable or restricted in this environment. ' +
        'Wrap initialization of analytics in analytics.isSupported() ' +
        'to prevent initialization in unsupported environments. Details: {$errorInfo}',
    ["fetch-throttle" /* AnalyticsError.FETCH_THROTTLE */]: 'The config fetch request timed out while in an exponential backoff state.' +
        ' Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',
    ["config-fetch-failed" /* AnalyticsError.CONFIG_FETCH_FAILED */]: 'Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}',
    ["no-api-key" /* AnalyticsError.NO_API_KEY */]: 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
        'contain a valid API key.',
    ["no-app-id" /* AnalyticsError.NO_APP_ID */]: 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field to' +
        'contain a valid app ID.',
    ["no-client-id" /* AnalyticsError.NO_CLIENT_ID */]: 'The "client_id" field is empty.',
    ["invalid-gtag-resource" /* AnalyticsError.INVALID_GTAG_RESOURCE */]: 'Trusted Types detected an invalid gtag resource: {$gtagURL}.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('analytics', 'Analytics', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Verifies and creates a TrustedScriptURL.
 */
function createGtagTrustedTypesScriptURL(url) {
    if (!url.startsWith(GTAG_URL)) {
        const err = ERROR_FACTORY.create("invalid-gtag-resource" /* AnalyticsError.INVALID_GTAG_RESOURCE */, {
            gtagURL: url
        });
        logger.warn(err.message);
        return '';
    }
    return url;
}
/**
 * Makeshift polyfill for Promise.allSettled(). Resolves when all promises
 * have either resolved or rejected.
 *
 * @param promises Array of promises to wait for.
 */
function promiseAllSettled(promises) {
    return Promise.all(promises.map(promise => promise.catch(e => e)));
}
/**
 * Creates a TrustedTypePolicy object that implements the rules passed as policyOptions.
 *
 * @param policyName A string containing the name of the policy
 * @param policyOptions Object containing implementations of instance methods for TrustedTypesPolicy, see {@link https://developer.mozilla.org/en-US/docs/Web/API/TrustedTypePolicy#instance_methods
 * | the TrustedTypePolicy reference documentation}.
 */
function createTrustedTypesPolicy(policyName, policyOptions) {
    // Create a TrustedTypes policy that we can use for updating src
    // properties
    let trustedTypesPolicy;
    if (window.trustedTypes) {
        trustedTypesPolicy = window.trustedTypes.createPolicy(policyName, policyOptions);
    }
    return trustedTypesPolicy;
}
/**
 * Inserts gtag script tag into the page to asynchronously download gtag.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */
function insertScriptTag(dataLayerName, measurementId) {
    const trustedTypesPolicy = createTrustedTypesPolicy('firebase-js-sdk-policy', {
        createScriptURL: createGtagTrustedTypesScriptURL
    });
    const script = document.createElement('script');
    // We are not providing an analyticsId in the URL because it would trigger a `page_view`
    // without fid. We will initialize ga-id using gtag (config) command together with fid.
    const gtagScriptURL = `${GTAG_URL}?l=${dataLayerName}&id=${measurementId}`;
    script.src = trustedTypesPolicy
        ? trustedTypesPolicy === null || trustedTypesPolicy === void 0 ? void 0 : trustedTypesPolicy.createScriptURL(gtagScriptURL)
        : gtagScriptURL;
    script.async = true;
    document.head.appendChild(script);
}
/**
 * Get reference to, or create, global datalayer.
 * @param dataLayerName Name of datalayer (most often the default, "_dataLayer").
 */
function getOrCreateDataLayer(dataLayerName) {
    // Check for existing dataLayer and create if needed.
    let dataLayer = [];
    if (Array.isArray(window[dataLayerName])) {
        dataLayer = window[dataLayerName];
    }
    else {
        window[dataLayerName] = dataLayer;
    }
    return dataLayer;
}
/**
 * Wrapped gtag logic when gtag is called with 'config' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param measurementId GA Measurement ID to set config for.
 * @param gtagParams Gtag config params to set.
 */
async function gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams) {
    // If config is already fetched, we know the appId and can use it to look up what FID promise we
    /// are waiting for, and wait only on that one.
    const correspondingAppId = measurementIdToAppId[measurementId];
    try {
        if (correspondingAppId) {
            await initializationPromisesMap[correspondingAppId];
        }
        else {
            // If config is not fetched yet, wait for all configs (we don't know which one we need) and
            // find the appId (if any) corresponding to this measurementId. If there is one, wait on
            // that appId's initialization promise. If there is none, promise resolves and gtag
            // call goes through.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            const foundConfig = dynamicConfigResults.find(config => config.measurementId === measurementId);
            if (foundConfig) {
                await initializationPromisesMap[foundConfig.appId];
            }
        }
    }
    catch (e) {
        logger.error(e);
    }
    gtagCore("config" /* GtagCommand.CONFIG */, measurementId, gtagParams);
}
/**
 * Wrapped gtag logic when gtag is called with 'event' command.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementId GA Measurement ID to log event to.
 * @param gtagParams Params to log with this event.
 */
async function gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams) {
    try {
        let initializationPromisesToWaitFor = [];
        // If there's a 'send_to' param, check if any ID specified matches
        // an initializeIds() promise we are waiting for.
        if (gtagParams && gtagParams['send_to']) {
            let gaSendToList = gtagParams['send_to'];
            // Make it an array if is isn't, so it can be dealt with the same way.
            if (!Array.isArray(gaSendToList)) {
                gaSendToList = [gaSendToList];
            }
            // Checking 'send_to' fields requires having all measurement ID results back from
            // the dynamic config fetch.
            const dynamicConfigResults = await promiseAllSettled(dynamicConfigPromisesList);
            for (const sendToId of gaSendToList) {
                // Any fetched dynamic measurement ID that matches this 'send_to' ID
                const foundConfig = dynamicConfigResults.find(config => config.measurementId === sendToId);
                const initializationPromise = foundConfig && initializationPromisesMap[foundConfig.appId];
                if (initializationPromise) {
                    initializationPromisesToWaitFor.push(initializationPromise);
                }
                else {
                    // Found an item in 'send_to' that is not associated
                    // directly with an FID, possibly a group.  Empty this array,
                    // exit the loop early, and let it get populated below.
                    initializationPromisesToWaitFor = [];
                    break;
                }
            }
        }
        // This will be unpopulated if there was no 'send_to' field , or
        // if not all entries in the 'send_to' field could be mapped to
        // a FID. In these cases, wait on all pending initialization promises.
        if (initializationPromisesToWaitFor.length === 0) {
            /* eslint-disable-next-line @typescript-eslint/no-floating-promises */
            initializationPromisesToWaitFor = Object.values(initializationPromisesMap);
        }
        // Run core gtag function with args after all relevant initialization
        // promises have been resolved.
        await Promise.all(initializationPromisesToWaitFor);
        // Workaround for http://b/141370449 - third argument cannot be undefined.
        gtagCore("event" /* GtagCommand.EVENT */, measurementId, gtagParams || {});
    }
    catch (e) {
        logger.error(e);
    }
}
/**
 * Wraps a standard gtag function with extra code to wait for completion of
 * relevant initialization promises before sending requests.
 *
 * @param gtagCore Basic gtag function that just appends to dataLayer.
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 */
function wrapGtag(gtagCore, 
/**
 * Allows wrapped gtag calls to wait on whichever initialization promises are required,
 * depending on the contents of the gtag params' `send_to` field, if any.
 */
initializationPromisesMap, 
/**
 * Wrapped gtag calls sometimes require all dynamic config fetches to have returned
 * before determining what initialization promises (which include FIDs) to wait for.
 */
dynamicConfigPromisesList, 
/**
 * Wrapped gtag config calls can narrow down which initialization promise (with FID)
 * to wait for if the measurementId is already fetched, by getting the corresponding appId,
 * which is the key for the initialization promises map.
 */
measurementIdToAppId) {
    /**
     * Wrapper around gtag that ensures FID is sent with gtag calls.
     * @param command Gtag command type.
     * @param idOrNameOrParams Measurement ID if command is EVENT/CONFIG, params if command is SET.
     * @param gtagParams Params if event is EVENT/CONFIG.
     */
    async function gtagWrapper(command, ...args) {
        try {
            // If event, check that relevant initialization promises have completed.
            if (command === "event" /* GtagCommand.EVENT */) {
                const [measurementId, gtagParams] = args;
                // If EVENT, second arg must be measurementId.
                await gtagOnEvent(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementId, gtagParams);
            }
            else if (command === "config" /* GtagCommand.CONFIG */) {
                const [measurementId, gtagParams] = args;
                // If CONFIG, second arg must be measurementId.
                await gtagOnConfig(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, measurementId, gtagParams);
            }
            else if (command === "consent" /* GtagCommand.CONSENT */) {
                const [consentAction, gtagParams] = args;
                // consentAction can be one of 'default' or 'update'.
                gtagCore("consent" /* GtagCommand.CONSENT */, consentAction, gtagParams);
            }
            else if (command === "get" /* GtagCommand.GET */) {
                const [measurementId, fieldName, callback] = args;
                gtagCore("get" /* GtagCommand.GET */, measurementId, fieldName, callback);
            }
            else if (command === "set" /* GtagCommand.SET */) {
                const [customParams] = args;
                // If SET, second arg must be params.
                gtagCore("set" /* GtagCommand.SET */, customParams);
            }
            else {
                gtagCore(command, ...args);
            }
        }
        catch (e) {
            logger.error(e);
        }
    }
    return gtagWrapper;
}
/**
 * Creates global gtag function or wraps existing one if found.
 * This wrapped function attaches Firebase instance ID (FID) to gtag 'config' and
 * 'event' calls that belong to the GAID associated with this Firebase instance.
 *
 * @param initializationPromisesMap Map of appIds to their initialization promises.
 * @param dynamicConfigPromisesList Array of dynamic config fetch promises.
 * @param measurementIdToAppId Map of GA measurementIDs to corresponding Firebase appId.
 * @param dataLayerName Name of global GA datalayer array.
 * @param gtagFunctionName Name of global gtag function ("gtag" if not user-specified).
 */
function wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagFunctionName) {
    // Create a basic core gtag function
    let gtagCore = function (..._args) {
        // Must push IArguments object, not an array.
        window[dataLayerName].push(arguments);
    };
    // Replace it with existing one if found
    if (window[gtagFunctionName] &&
        typeof window[gtagFunctionName] === 'function') {
        // @ts-ignore
        gtagCore = window[gtagFunctionName];
    }
    window[gtagFunctionName] = wrapGtag(gtagCore, initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId);
    return {
        gtagCore,
        wrappedGtag: window[gtagFunctionName]
    };
}
/**
 * Returns the script tag in the DOM matching both the gtag url pattern
 * and the provided data layer name.
 */
function findGtagScriptOnPage(dataLayerName) {
    const scriptTags = window.document.getElementsByTagName('script');
    for (const tag of Object.values(scriptTags)) {
        if (tag.src &&
            tag.src.includes(GTAG_URL) &&
            tag.src.includes(dataLayerName)) {
            return tag;
        }
    }
    return null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Backoff factor for 503 errors, which we want to be conservative about
 * to avoid overloading servers. Each retry interval will be
 * BASE_INTERVAL_MILLIS * LONG_RETRY_FACTOR ^ retryCount, so the second one
 * will be ~30 seconds (with fuzzing).
 */
const LONG_RETRY_FACTOR = 30;
/**
 * Base wait interval to multiplied by backoffFactor^backoffCount.
 */
const BASE_INTERVAL_MILLIS = 1000;
/**
 * Stubbable retry data storage class.
 */
class RetryData {
    constructor(throttleMetadata = {}, intervalMillis = BASE_INTERVAL_MILLIS) {
        this.throttleMetadata = throttleMetadata;
        this.intervalMillis = intervalMillis;
    }
    getThrottleMetadata(appId) {
        return this.throttleMetadata[appId];
    }
    setThrottleMetadata(appId, metadata) {
        this.throttleMetadata[appId] = metadata;
    }
    deleteThrottleMetadata(appId) {
        delete this.throttleMetadata[appId];
    }
}
const defaultRetryData = new RetryData();
/**
 * Set GET request headers.
 * @param apiKey App API key.
 */
function getHeaders(apiKey) {
    return new Headers({
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
/**
 * Fetches dynamic config from backend.
 * @param app Firebase app to fetch config for.
 */
async function fetchDynamicConfig(appFields) {
    var _a;
    const { appId, apiKey } = appFields;
    const request = {
        method: 'GET',
        headers: getHeaders(apiKey)
    };
    const appUrl = DYNAMIC_CONFIG_URL.replace('{app-id}', appId);
    const response = await fetch(appUrl, request);
    if (response.status !== 200 && response.status !== 304) {
        let errorMessage = '';
        try {
            // Try to get any error message text from server response.
            const jsonResponse = (await response.json());
            if ((_a = jsonResponse.error) === null || _a === void 0 ? void 0 : _a.message) {
                errorMessage = jsonResponse.error.message;
            }
        }
        catch (_ignored) { }
        throw ERROR_FACTORY.create("config-fetch-failed" /* AnalyticsError.CONFIG_FETCH_FAILED */, {
            httpStatus: response.status,
            responseMessage: errorMessage
        });
    }
    return response.json();
}
/**
 * Fetches dynamic config from backend, retrying if failed.
 * @param app Firebase app to fetch config for.
 */
async function fetchDynamicConfigWithRetry(app, 
// retryData and timeoutMillis are parameterized to allow passing a different value for testing.
retryData = defaultRetryData, timeoutMillis) {
    const { appId, apiKey, measurementId } = app.options;
    if (!appId) {
        throw ERROR_FACTORY.create("no-app-id" /* AnalyticsError.NO_APP_ID */);
    }
    if (!apiKey) {
        if (measurementId) {
            return {
                measurementId,
                appId
            };
        }
        throw ERROR_FACTORY.create("no-api-key" /* AnalyticsError.NO_API_KEY */);
    }
    const throttleMetadata = retryData.getThrottleMetadata(appId) || {
        backoffCount: 0,
        throttleEndTimeMillis: Date.now()
    };
    const signal = new AnalyticsAbortSignal();
    setTimeout(async () => {
        // Note a very low delay, eg < 10ms, can elapse before listeners are initialized.
        signal.abort();
    }, timeoutMillis !== undefined ? timeoutMillis : FETCH_TIMEOUT_MILLIS);
    return attemptFetchDynamicConfigWithRetry({ appId, apiKey, measurementId }, throttleMetadata, signal, retryData);
}
/**
 * Runs one retry attempt.
 * @param appFields Necessary app config fields.
 * @param throttleMetadata Ongoing metadata to determine throttling times.
 * @param signal Abort signal.
 */
async function attemptFetchDynamicConfigWithRetry(appFields, { throttleEndTimeMillis, backoffCount }, signal, retryData = defaultRetryData // for testing
) {
    var _a;
    const { appId, measurementId } = appFields;
    // Starts with a (potentially zero) timeout to support resumption from stored state.
    // Ensures the throttle end time is honored if the last attempt timed out.
    // Note the SDK will never make a request if the fetch timeout expires at this point.
    try {
        await setAbortableTimeout(signal, throttleEndTimeMillis);
    }
    catch (e) {
        if (measurementId) {
            logger.warn(`Timed out fetching this Firebase app's measurement ID from the server.` +
                ` Falling back to the measurement ID ${measurementId}` +
                ` provided in the "measurementId" field in the local Firebase config. [${e === null || e === void 0 ? void 0 : e.message}]`);
            return { appId, measurementId };
        }
        throw e;
    }
    try {
        const response = await fetchDynamicConfig(appFields);
        // Note the SDK only clears throttle state if response is success or non-retriable.
        retryData.deleteThrottleMetadata(appId);
        return response;
    }
    catch (e) {
        const error = e;
        if (!isRetriableError(error)) {
            retryData.deleteThrottleMetadata(appId);
            if (measurementId) {
                logger.warn(`Failed to fetch this Firebase app's measurement ID from the server.` +
                    ` Falling back to the measurement ID ${measurementId}` +
                    ` provided in the "measurementId" field in the local Firebase config. [${error === null || error === void 0 ? void 0 : error.message}]`);
                return { appId, measurementId };
            }
            else {
                throw e;
            }
        }
        const backoffMillis = Number((_a = error === null || error === void 0 ? void 0 : error.customData) === null || _a === void 0 ? void 0 : _a.httpStatus) === 503
            ? (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis, LONG_RETRY_FACTOR)
            : (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.calculateBackoffMillis)(backoffCount, retryData.intervalMillis);
        // Increments backoff state.
        const throttleMetadata = {
            throttleEndTimeMillis: Date.now() + backoffMillis,
            backoffCount: backoffCount + 1
        };
        // Persists state.
        retryData.setThrottleMetadata(appId, throttleMetadata);
        logger.debug(`Calling attemptFetch again in ${backoffMillis} millis`);
        return attemptFetchDynamicConfigWithRetry(appFields, throttleMetadata, signal, retryData);
    }
}
/**
 * Supports waiting on a backoff by:
 *
 * <ul>
 *   <li>Promisifying setTimeout, so we can set a timeout in our Promise chain</li>
 *   <li>Listening on a signal bus for abort events, just like the Fetch API</li>
 *   <li>Failing in the same way the Fetch API fails, so timing out a live request and a throttled
 *       request appear the same.</li>
 * </ul>
 *
 * <p>Visible for testing.
 */
function setAbortableTimeout(signal, throttleEndTimeMillis) {
    return new Promise((resolve, reject) => {
        // Derives backoff from given end time, normalizing negative numbers to zero.
        const backoffMillis = Math.max(throttleEndTimeMillis - Date.now(), 0);
        const timeout = setTimeout(resolve, backoffMillis);
        // Adds listener, rather than sets onabort, because signal is a shared object.
        signal.addEventListener(() => {
            clearTimeout(timeout);
            // If the request completes before this timeout, the rejection has no effect.
            reject(ERROR_FACTORY.create("fetch-throttle" /* AnalyticsError.FETCH_THROTTLE */, {
                throttleEndTimeMillis
            }));
        });
    });
}
/**
 * Returns true if the {@link Error} indicates a fetch request may succeed later.
 */
function isRetriableError(e) {
    if (!(e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) || !e.customData) {
        return false;
    }
    // Uses string index defined by ErrorData, which FirebaseError implements.
    const httpStatus = Number(e.customData['httpStatus']);
    return (httpStatus === 429 ||
        httpStatus === 500 ||
        httpStatus === 503 ||
        httpStatus === 504);
}
/**
 * Shims a minimal AbortSignal (copied from Remote Config).
 *
 * <p>AbortController's AbortSignal conveniently decouples fetch timeout logic from other aspects
 * of networking, such as retries. Firebase doesn't use AbortController enough to justify a
 * polyfill recommendation, like we do with the Fetch API, but this minimal shim can easily be
 * swapped out if/when we do.
 */
class AnalyticsAbortSignal {
    constructor() {
        this.listeners = [];
    }
    addEventListener(listener) {
        this.listeners.push(listener);
    }
    abort() {
        this.listeners.forEach(listener => listener());
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Event parameters to set on 'gtag' during initialization.
 */
let defaultEventParametersForInit;
/**
 * Logs an analytics event through the Firebase SDK.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param eventName Google Analytics event name, choose from standard list or use a custom string.
 * @param eventParams Analytics event parameters.
 */
async function logEvent$1(gtagFunction, initializationPromise, eventName, eventParams, options) {
    if (options && options.global) {
        gtagFunction("event" /* GtagCommand.EVENT */, eventName, eventParams);
        return;
    }
    else {
        const measurementId = await initializationPromise;
        const params = Object.assign(Object.assign({}, eventParams), { 'send_to': measurementId });
        gtagFunction("event" /* GtagCommand.EVENT */, eventName, params);
    }
}
/**
 * Set screen_name parameter for this Google Analytics ID.
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param screenName Screen name string to set.
 */
async function setCurrentScreen$1(gtagFunction, initializationPromise, screenName, options) {
    if (options && options.global) {
        gtagFunction("set" /* GtagCommand.SET */, { 'screen_name': screenName });
        return Promise.resolve();
    }
    else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* GtagCommand.CONFIG */, measurementId, {
            update: true,
            'screen_name': screenName
        });
    }
}
/**
 * Set user_id parameter for this Google Analytics ID.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param id User ID string to set
 */
async function setUserId$1(gtagFunction, initializationPromise, id, options) {
    if (options && options.global) {
        gtagFunction("set" /* GtagCommand.SET */, { 'user_id': id });
        return Promise.resolve();
    }
    else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* GtagCommand.CONFIG */, measurementId, {
            update: true,
            'user_id': id
        });
    }
}
/**
 * Set all other user properties other than user_id and screen_name.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 * @param properties Map of user properties to set
 */
async function setUserProperties$1(gtagFunction, initializationPromise, properties, options) {
    if (options && options.global) {
        const flatProperties = {};
        for (const key of Object.keys(properties)) {
            // use dot notation for merge behavior in gtag.js
            flatProperties[`user_properties.${key}`] = properties[key];
        }
        gtagFunction("set" /* GtagCommand.SET */, flatProperties);
        return Promise.resolve();
    }
    else {
        const measurementId = await initializationPromise;
        gtagFunction("config" /* GtagCommand.CONFIG */, measurementId, {
            update: true,
            'user_properties': properties
        });
    }
}
/**
 * Retrieves a unique Google Analytics identifier for the web client.
 * See {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id | client_id}.
 *
 * @param gtagFunction Wrapped gtag function that waits for fid to be set before sending an event
 */
async function internalGetGoogleAnalyticsClientId(gtagFunction, initializationPromise) {
    const measurementId = await initializationPromise;
    return new Promise((resolve, reject) => {
        gtagFunction("get" /* GtagCommand.GET */, measurementId, 'client_id', (clientId) => {
            if (!clientId) {
                reject(ERROR_FACTORY.create("no-client-id" /* AnalyticsError.NO_CLIENT_ID */));
            }
            resolve(clientId);
        });
    });
}
/**
 * Set whether collection is enabled for this ID.
 *
 * @param enabled If true, collection is enabled for this ID.
 */
async function setAnalyticsCollectionEnabled$1(initializationPromise, enabled) {
    const measurementId = await initializationPromise;
    window[`ga-disable-${measurementId}`] = !enabled;
}
/**
 * Consent parameters to default to during 'gtag' initialization.
 */
let defaultConsentSettingsForInit;
/**
 * Sets the variable {@link defaultConsentSettingsForInit} for use in the initialization of
 * analytics.
 *
 * @param consentSettings Maps the applicable end user consent state for gtag.js.
 */
function _setConsentDefaultForInit(consentSettings) {
    defaultConsentSettingsForInit = consentSettings;
}
/**
 * Sets the variable `defaultEventParametersForInit` for use in the initialization of
 * analytics.
 *
 * @param customParams Any custom params the user may pass to gtag.js.
 */
function _setDefaultEventParametersForInit(customParams) {
    defaultEventParametersForInit = customParams;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function validateIndexedDB() {
    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
        logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */, {
            errorInfo: 'IndexedDB is not available in this environment.'
        }).message);
        return false;
    }
    else {
        try {
            await (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)();
        }
        catch (e) {
            logger.warn(ERROR_FACTORY.create("indexeddb-unavailable" /* AnalyticsError.INDEXEDDB_UNAVAILABLE */, {
                errorInfo: e === null || e === void 0 ? void 0 : e.toString()
            }).message);
            return false;
        }
    }
    return true;
}
/**
 * Initialize the analytics instance in gtag.js by calling config command with fid.
 *
 * NOTE: We combine analytics initialization and setting fid together because we want fid to be
 * part of the `page_view` event that's sent during the initialization
 * @param app Firebase app
 * @param gtagCore The gtag function that's not wrapped.
 * @param dynamicConfigPromisesList Array of all dynamic config promises.
 * @param measurementIdToAppId Maps measurementID to appID.
 * @param installations _FirebaseInstallationsInternal instance.
 *
 * @returns Measurement ID.
 */
async function _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCore, dataLayerName, options) {
    var _a;
    const dynamicConfigPromise = fetchDynamicConfigWithRetry(app);
    // Once fetched, map measurementIds to appId, for ease of lookup in wrapped gtag function.
    dynamicConfigPromise
        .then(config => {
        measurementIdToAppId[config.measurementId] = config.appId;
        if (app.options.measurementId &&
            config.measurementId !== app.options.measurementId) {
            logger.warn(`The measurement ID in the local Firebase config (${app.options.measurementId})` +
                ` does not match the measurement ID fetched from the server (${config.measurementId}).` +
                ` To ensure analytics events are always sent to the correct Analytics property,` +
                ` update the` +
                ` measurement ID field in the local config or remove it from the local config.`);
        }
    })
        .catch(e => logger.error(e));
    // Add to list to track state of all dynamic config promises.
    dynamicConfigPromisesList.push(dynamicConfigPromise);
    const fidPromise = validateIndexedDB().then(envIsValid => {
        if (envIsValid) {
            return installations.getId();
        }
        else {
            return undefined;
        }
    });
    const [dynamicConfig, fid] = await Promise.all([
        dynamicConfigPromise,
        fidPromise
    ]);
    // Detect if user has already put the gtag <script> tag on this page with the passed in
    // data layer name.
    if (!findGtagScriptOnPage(dataLayerName)) {
        insertScriptTag(dataLayerName, dynamicConfig.measurementId);
    }
    // Detects if there are consent settings that need to be configured.
    if (defaultConsentSettingsForInit) {
        gtagCore("consent" /* GtagCommand.CONSENT */, 'default', defaultConsentSettingsForInit);
        _setConsentDefaultForInit(undefined);
    }
    // This command initializes gtag.js and only needs to be called once for the entire web app,
    // but since it is idempotent, we can call it multiple times.
    // We keep it together with other initialization logic for better code structure.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtagCore('js', new Date());
    // User config added first. We don't want users to accidentally overwrite
    // base Firebase config properties.
    const configProperties = (_a = options === null || options === void 0 ? void 0 : options.config) !== null && _a !== void 0 ? _a : {};
    // guard against developers accidentally setting properties with prefix `firebase_`
    configProperties[ORIGIN_KEY] = 'firebase';
    configProperties.update = true;
    if (fid != null) {
        configProperties[GA_FID_KEY] = fid;
    }
    // It should be the first config command called on this GA-ID
    // Initialize this GA-ID and set FID on it using the gtag config API.
    // Note: This will trigger a page_view event unless 'send_page_view' is set to false in
    // `configProperties`.
    gtagCore("config" /* GtagCommand.CONFIG */, dynamicConfig.measurementId, configProperties);
    // Detects if there is data that will be set on every event logged from the SDK.
    if (defaultEventParametersForInit) {
        gtagCore("set" /* GtagCommand.SET */, defaultEventParametersForInit);
        _setDefaultEventParametersForInit(undefined);
    }
    return dynamicConfig.measurementId;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Analytics Service class.
 */
class AnalyticsService {
    constructor(app) {
        this.app = app;
    }
    _delete() {
        delete initializationPromisesMap[this.app.options.appId];
        return Promise.resolve();
    }
}
/**
 * Maps appId to full initialization promise. Wrapped gtag calls must wait on
 * all or some of these, depending on the call's `send_to` param and the status
 * of the dynamic config fetches (see below).
 */
let initializationPromisesMap = {};
/**
 * List of dynamic config fetch promises. In certain cases, wrapped gtag calls
 * wait on all these to be complete in order to determine if it can selectively
 * wait for only certain initialization (FID) promises or if it must wait for all.
 */
let dynamicConfigPromisesList = [];
/**
 * Maps fetched measurementIds to appId. Populated when the app's dynamic config
 * fetch completes. If already populated, gtag config calls can use this to
 * selectively wait for only this app's initialization promise (FID) instead of all
 * initialization promises.
 */
const measurementIdToAppId = {};
/**
 * Name for window global data layer array used by GA: defaults to 'dataLayer'.
 */
let dataLayerName = 'dataLayer';
/**
 * Name for window global gtag function used by GA: defaults to 'gtag'.
 */
let gtagName = 'gtag';
/**
 * Reproduction of standard gtag function or reference to existing
 * gtag function on window object.
 */
let gtagCoreFunction;
/**
 * Wrapper around gtag function that ensures FID is sent with all
 * relevant event and config calls.
 */
let wrappedGtagFunction;
/**
 * Flag to ensure page initialization steps (creation or wrapping of
 * dataLayer and gtag script) are only run once per page load.
 */
let globalInitDone = false;
/**
 * Configures Firebase Analytics to use custom `gtag` or `dataLayer` names.
 * Intended to be used if `gtag.js` script has been installed on
 * this page independently of Firebase Analytics, and is using non-default
 * names for either the `gtag` function or for `dataLayer`.
 * Must be called before calling `getAnalytics()` or it won't
 * have any effect.
 *
 * @public
 *
 * @param options - Custom gtag and dataLayer names.
 */
function settings(options) {
    if (globalInitDone) {
        throw ERROR_FACTORY.create("already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */);
    }
    if (options.dataLayerName) {
        dataLayerName = options.dataLayerName;
    }
    if (options.gtagName) {
        gtagName = options.gtagName;
    }
}
/**
 * Returns true if no environment mismatch is found.
 * If environment mismatches are found, throws an INVALID_ANALYTICS_CONTEXT
 * error that also lists details for each mismatch found.
 */
function warnOnBrowserContextMismatch() {
    const mismatchedEnvMessages = [];
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowserExtension)()) {
        mismatchedEnvMessages.push('This is a browser extension environment.');
    }
    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.areCookiesEnabled)()) {
        mismatchedEnvMessages.push('Cookies are not available.');
    }
    if (mismatchedEnvMessages.length > 0) {
        const details = mismatchedEnvMessages
            .map((message, index) => `(${index + 1}) ${message}`)
            .join(' ');
        const err = ERROR_FACTORY.create("invalid-analytics-context" /* AnalyticsError.INVALID_ANALYTICS_CONTEXT */, {
            errorInfo: details
        });
        logger.warn(err.message);
    }
}
/**
 * Analytics instance factory.
 * @internal
 */
function factory(app, installations, options) {
    warnOnBrowserContextMismatch();
    const appId = app.options.appId;
    if (!appId) {
        throw ERROR_FACTORY.create("no-app-id" /* AnalyticsError.NO_APP_ID */);
    }
    if (!app.options.apiKey) {
        if (app.options.measurementId) {
            logger.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest` +
                ` measurement ID for this Firebase app. Falling back to the measurement ID ${app.options.measurementId}` +
                ` provided in the "measurementId" field in the local Firebase config.`);
        }
        else {
            throw ERROR_FACTORY.create("no-api-key" /* AnalyticsError.NO_API_KEY */);
        }
    }
    if (initializationPromisesMap[appId] != null) {
        throw ERROR_FACTORY.create("already-exists" /* AnalyticsError.ALREADY_EXISTS */, {
            id: appId
        });
    }
    if (!globalInitDone) {
        // Steps here should only be done once per page: creation or wrapping
        // of dataLayer and global gtag function.
        getOrCreateDataLayer(dataLayerName);
        const { wrappedGtag, gtagCore } = wrapOrCreateGtag(initializationPromisesMap, dynamicConfigPromisesList, measurementIdToAppId, dataLayerName, gtagName);
        wrappedGtagFunction = wrappedGtag;
        gtagCoreFunction = gtagCore;
        globalInitDone = true;
    }
    // Async but non-blocking.
    // This map reflects the completion state of all promises for each appId.
    initializationPromisesMap[appId] = _initializeAnalytics(app, dynamicConfigPromisesList, measurementIdToAppId, installations, gtagCoreFunction, dataLayerName, options);
    const analyticsInstance = new AnalyticsService(app);
    return analyticsInstance;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */
function getAnalytics(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)()) {
    app = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(app);
    // Dependencies
    const analyticsProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) {
        return analyticsProvider.getImmediate();
    }
    return initializeAnalytics(app);
}
/**
 * Returns an {@link Analytics} instance for the given app.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */
function initializeAnalytics(app, options = {}) {
    // Dependencies
    const analyticsProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, ANALYTICS_TYPE);
    if (analyticsProvider.isInitialized()) {
        const existingInstance = analyticsProvider.getImmediate();
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, analyticsProvider.getOptions())) {
            return existingInstance;
        }
        else {
            throw ERROR_FACTORY.create("already-initialized" /* AnalyticsError.ALREADY_INITIALIZED */);
        }
    }
    const analyticsInstance = analyticsProvider.initialize({ options });
    return analyticsInstance;
}
/**
 * This is a public static method provided to users that wraps four different checks:
 *
 * 1. Check if it's not a browser extension environment.
 * 2. Check if cookies are enabled in current browser.
 * 3. Check if IndexedDB is supported by the browser environment.
 * 4. Check if the current browser context is valid for using `IndexedDB.open()`.
 *
 * @public
 *
 */
async function isSupported() {
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowserExtension)()) {
        return false;
    }
    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.areCookiesEnabled)()) {
        return false;
    }
    if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
        return false;
    }
    try {
        const isDBOpenable = await (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)();
        return isDBOpenable;
    }
    catch (error) {
        return false;
    }
}
/**
 * Use gtag `config` command to set `screen_name`.
 *
 * @public
 *
 * @deprecated Use {@link logEvent} with `eventName` as 'screen_view' and add relevant `eventParams`.
 * See {@link https://firebase.google.com/docs/analytics/screenviews | Track Screenviews}.
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param screenName - Screen name to set.
 */
function setCurrentScreen(analyticsInstance, screenName, options) {
    analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
    setCurrentScreen$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], screenName, options).catch(e => logger.error(e));
}
/**
 * Retrieves a unique Google Analytics identifier for the web client.
 * See {@link https://developers.google.com/analytics/devguides/collection/ga4/reference/config#client_id | client_id}.
 *
 * @public
 *
 * @param app - The {@link @firebase/app#FirebaseApp} to use.
 */
async function getGoogleAnalyticsClientId(analyticsInstance) {
    analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
    return internalGetGoogleAnalyticsClientId(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId]);
}
/**
 * Use gtag `config` command to set `user_id`.
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param id - User ID to set.
 */
function setUserId(analyticsInstance, id, options) {
    analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
    setUserId$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], id, options).catch(e => logger.error(e));
}
/**
 * Use gtag `config` command to set all params specified.
 *
 * @public
 */
function setUserProperties(analyticsInstance, properties, options) {
    analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
    setUserProperties$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], properties, options).catch(e => logger.error(e));
}
/**
 * Sets whether Google Analytics collection is enabled for this app on this device.
 * Sets global `window['ga-disable-analyticsId'] = true;`
 *
 * @public
 *
 * @param analyticsInstance - The {@link Analytics} instance.
 * @param enabled - If true, enables collection, if false, disables it.
 */
function setAnalyticsCollectionEnabled(analyticsInstance, enabled) {
    analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
    setAnalyticsCollectionEnabled$1(initializationPromisesMap[analyticsInstance.app.options.appId], enabled).catch(e => logger.error(e));
}
/**
 * Adds data that will be set on every event logged from the SDK, including automatic ones.
 * With gtag's "set" command, the values passed persist on the current page and are passed with
 * all subsequent events.
 * @public
 * @param customParams - Any custom params the user may pass to gtag.js.
 */
function setDefaultEventParameters(customParams) {
    // Check if reference to existing gtag function on window object exists
    if (wrappedGtagFunction) {
        wrappedGtagFunction("set" /* GtagCommand.SET */, customParams);
    }
    else {
        _setDefaultEventParametersForInit(customParams);
    }
}
/**
 * Sends a Google Analytics event with given `eventParams`. This method
 * automatically associates this logged event with this Firebase web
 * app instance on this device.
 * List of official event parameters can be found in the gtag.js
 * reference documentation:
 * {@link https://developers.google.com/gtagjs/reference/ga4-events
 * | the GA4 reference documentation}.
 *
 * @public
 */
function logEvent(analyticsInstance, eventName, eventParams, options) {
    analyticsInstance = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getModularInstance)(analyticsInstance);
    logEvent$1(wrappedGtagFunction, initializationPromisesMap[analyticsInstance.app.options.appId], eventName, eventParams, options).catch(e => logger.error(e));
}
/**
 * Sets the applicable end user consent state for this web app across all gtag references once
 * Firebase Analytics is initialized.
 *
 * Use the {@link ConsentSettings} to specify individual consent type values. By default consent
 * types are set to "granted".
 * @public
 * @param consentSettings - Maps the applicable end user consent state for gtag.js.
 */
function setConsent(consentSettings) {
    // Check if reference to existing gtag function on window object exists
    if (wrappedGtagFunction) {
        wrappedGtagFunction("consent" /* GtagCommand.CONSENT */, 'update', consentSettings);
    }
    else {
        _setConsentDefaultForInit(consentSettings);
    }
}

const name = "@firebase/analytics";
const version = "0.10.16";

/**
 * The Firebase Analytics Web SDK.
 * This SDK does not work in a Node.js environment.
 *
 * @packageDocumentation
 */
function registerAnalytics() {
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component(ANALYTICS_TYPE, (container, { options: analyticsOptions }) => {
        // getImmediate for FirebaseApp will always succeed
        const app = container.getProvider('app').getImmediate();
        const installations = container
            .getProvider('installations-internal')
            .getImmediate();
        return factory(app, installations, analyticsOptions);
    }, "PUBLIC" /* ComponentType.PUBLIC */));
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_3__.Component('analytics-internal', internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
    // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');
    function internalFactory(container) {
        try {
            const analytics = container.getProvider(ANALYTICS_TYPE).getImmediate();
            return {
                logEvent: (eventName, eventParams, options) => logEvent(analytics, eventName, eventParams, options)
            };
        }
        catch (e) {
            throw ERROR_FACTORY.create("interop-component-reg-failed" /* AnalyticsError.INTEROP_COMPONENT_REG_FAILED */, {
                reason: e
            });
        }
    }
}
registerAnalytics();


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseError: () => (/* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError),
/* harmony export */   SDK_VERSION: () => (/* binding */ SDK_VERSION),
/* harmony export */   _DEFAULT_ENTRY_NAME: () => (/* binding */ DEFAULT_ENTRY_NAME),
/* harmony export */   _addComponent: () => (/* binding */ _addComponent),
/* harmony export */   _addOrOverwriteComponent: () => (/* binding */ _addOrOverwriteComponent),
/* harmony export */   _apps: () => (/* binding */ _apps),
/* harmony export */   _clearComponents: () => (/* binding */ _clearComponents),
/* harmony export */   _components: () => (/* binding */ _components),
/* harmony export */   _getProvider: () => (/* binding */ _getProvider),
/* harmony export */   _isFirebaseApp: () => (/* binding */ _isFirebaseApp),
/* harmony export */   _isFirebaseServerApp: () => (/* binding */ _isFirebaseServerApp),
/* harmony export */   _registerComponent: () => (/* binding */ _registerComponent),
/* harmony export */   _removeServiceInstance: () => (/* binding */ _removeServiceInstance),
/* harmony export */   _serverApps: () => (/* binding */ _serverApps),
/* harmony export */   deleteApp: () => (/* binding */ deleteApp),
/* harmony export */   getApp: () => (/* binding */ getApp),
/* harmony export */   getApps: () => (/* binding */ getApps),
/* harmony export */   initializeApp: () => (/* binding */ initializeApp),
/* harmony export */   initializeServerApp: () => (/* binding */ initializeServerApp),
/* harmony export */   onLog: () => (/* binding */ onLog),
/* harmony export */   registerVersion: () => (/* binding */ registerVersion),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* ComponentType.VERSION */;
}

const name$q = "@firebase/app";
const version$1 = "0.13.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');

const name$p = "@firebase/app-compat";

const name$o = "@firebase/analytics-compat";

const name$n = "@firebase/analytics";

const name$m = "@firebase/app-check-compat";

const name$l = "@firebase/app-check";

const name$k = "@firebase/auth";

const name$j = "@firebase/auth-compat";

const name$i = "@firebase/database";

const name$h = "@firebase/data-connect";

const name$g = "@firebase/database-compat";

const name$f = "@firebase/functions";

const name$e = "@firebase/functions-compat";

const name$d = "@firebase/installations";

const name$c = "@firebase/installations-compat";

const name$b = "@firebase/messaging";

const name$a = "@firebase/messaging-compat";

const name$9 = "@firebase/performance";

const name$8 = "@firebase/performance-compat";

const name$7 = "@firebase/remote-config";

const name$6 = "@firebase/remote-config-compat";

const name$5 = "@firebase/storage";

const name$4 = "@firebase/storage-compat";

const name$3 = "@firebase/firestore";

const name$2 = "@firebase/ai";

const name$1 = "@firebase/firestore-compat";

const name = "firebase";
const version = "11.8.0";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$q]: 'fire-core',
    [name$p]: 'fire-core-compat',
    [name$n]: 'fire-analytics',
    [name$o]: 'fire-analytics-compat',
    [name$l]: 'fire-app-check',
    [name$m]: 'fire-app-check-compat',
    [name$k]: 'fire-auth',
    [name$j]: 'fire-auth-compat',
    [name$i]: 'fire-rtdb',
    [name$h]: 'fire-data-connect',
    [name$g]: 'fire-rtdb-compat',
    [name$f]: 'fire-fn',
    [name$e]: 'fire-fn-compat',
    [name$d]: 'fire-iid',
    [name$c]: 'fire-iid-compat',
    [name$b]: 'fire-fcm',
    [name$a]: 'fire-fcm-compat',
    [name$9]: 'fire-perf',
    [name$8]: 'fire-perf-compat',
    [name$7]: 'fire-rc',
    [name$6]: 'fire-rc-compat',
    [name$5]: 'fire-gcs',
    [name$4]: 'fire-gcs-compat',
    [name$3]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    [name$2]: 'fire-vertex',
    'fire-js': 'fire-js', // Platform identifier for JS SDK.
    [name]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * @internal
 */
const _serverApps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    for (const serverApp of _serverApps.values()) {
        _addComponent(serverApp, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    const heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 *
 * @param obj - an object of type FirebaseApp or FirebaseOptions.
 *
 * @returns true if the provide object is of type FirebaseApp.
 *
 * @internal
 */
function _isFirebaseApp(obj) {
    return obj.options !== undefined;
}
/**
 *
 * @param obj - an object of type FirebaseApp.
 *
 * @returns true if the provided object is of type FirebaseServerAppImpl.
 *
 * @internal
 */
function _isFirebaseServerApp(obj) {
    if (obj === null || obj === undefined) {
        return false;
    }
    return obj.settings !== undefined;
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* AppError.NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call initializeApp() first',
    ["bad-app-name" /* AppError.BAD_APP_NAME */]: "Illegal App name: '{$appName}'",
    ["duplicate-app" /* AppError.DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* AppError.APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["server-app-deleted" /* AppError.SERVER_APP_DELETED */]: 'Firebase Server App has been deleted',
    ["no-options" /* AppError.NO_OPTIONS */]: 'Need to provide options, when not being deployed to hosting via source.',
    ["invalid-app-argument" /* AppError.INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
    ["idb-open" /* AppError.IDB_OPEN */]: 'Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-get" /* AppError.IDB_GET */]: 'Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-set" /* AppError.IDB_WRITE */]: 'Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.',
    ["idb-delete" /* AppError.IDB_DELETE */]: 'Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.',
    ["finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */]: 'FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.',
    ["invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */]: 'FirebaseServerApp is not for use in browser environments.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', () => this, "PUBLIC" /* ComponentType.PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* AppError.APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Parse the token and check to see if the `exp` claim is in the future.
// Reports an error to the console if the token or claim could not be parsed, or if `exp` is in
// the past.
function validateTokenTTL(base64Token, tokenName) {
    const secondPart = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64Decode)(base64Token.split('.')[1]);
    if (secondPart === null) {
        console.error(`FirebaseServerApp ${tokenName} is invalid: second part could not be parsed.`);
        return;
    }
    const expClaim = JSON.parse(secondPart).exp;
    if (expClaim === undefined) {
        console.error(`FirebaseServerApp ${tokenName} is invalid: expiration claim could not be parsed`);
        return;
    }
    const exp = JSON.parse(secondPart).exp * 1000;
    const now = new Date().getTime();
    const diff = exp - now;
    if (diff <= 0) {
        console.error(`FirebaseServerApp ${tokenName} is invalid: the token has expired.`);
    }
}
class FirebaseServerAppImpl extends FirebaseAppImpl {
    constructor(options, serverConfig, name, container) {
        // Build configuration parameters for the FirebaseAppImpl base class.
        const automaticDataCollectionEnabled = serverConfig.automaticDataCollectionEnabled !== undefined
            ? serverConfig.automaticDataCollectionEnabled
            : true;
        // Create the FirebaseAppSettings object for the FirebaseAppImp constructor.
        const config = {
            name,
            automaticDataCollectionEnabled
        };
        if (options.apiKey !== undefined) {
            // Construct the parent FirebaseAppImp object.
            super(options, config, container);
        }
        else {
            const appImpl = options;
            super(appImpl.options, config, container);
        }
        // Now construct the data for the FirebaseServerAppImpl.
        this._serverConfig = Object.assign({ automaticDataCollectionEnabled }, serverConfig);
        // Ensure that the current time is within the `authIdtoken` window of validity.
        if (this._serverConfig.authIdToken) {
            validateTokenTTL(this._serverConfig.authIdToken, 'authIdToken');
        }
        // Ensure that the current time is within the `appCheckToken` window of validity.
        if (this._serverConfig.appCheckToken) {
            validateTokenTTL(this._serverConfig.appCheckToken, 'appCheckToken');
        }
        this._finalizationRegistry = null;
        if (typeof FinalizationRegistry !== 'undefined') {
            this._finalizationRegistry = new FinalizationRegistry(() => {
                this.automaticCleanup();
            });
        }
        this._refCount = 0;
        this.incRefCount(this._serverConfig.releaseOnDeref);
        // Do not retain a hard reference to the dref object, otherwise the FinalizationRegistry
        // will never trigger.
        this._serverConfig.releaseOnDeref = undefined;
        serverConfig.releaseOnDeref = undefined;
        registerVersion(name$q, version$1, 'serverapp');
    }
    toJSON() {
        return undefined;
    }
    get refCount() {
        return this._refCount;
    }
    // Increment the reference count of this server app. If an object is provided, register it
    // with the finalization registry.
    incRefCount(obj) {
        if (this.isDeleted) {
            return;
        }
        this._refCount++;
        if (obj !== undefined && this._finalizationRegistry !== null) {
            this._finalizationRegistry.register(obj, this);
        }
    }
    // Decrement the reference count.
    decRefCount() {
        if (this.isDeleted) {
            return 0;
        }
        return --this._refCount;
    }
    // Invoked by the FinalizationRegistry callback to note that this app should go through its
    // reference counts and delete itself if no reference count remain. The coordinating logic that
    // handles this is in deleteApp(...).
    automaticCleanup() {
        void deleteApp(this);
    }
    get settings() {
        this.checkDestroyed();
        return this._serverConfig;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("server-app-deleted" /* AppError.SERVER_APP_DELETED */);
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
    let options = _options;
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: true }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* AppError.BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    options || (options = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)());
    if (!options) {
        throw ERROR_FACTORY.create("no-options" /* AppError.NO_OPTIONS */);
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) &&
            (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* AppError.DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
function initializeServerApp(_options, _serverAppConfig) {
    if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isBrowser)() && !(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isWebWorker)()) {
        // FirebaseServerApp isn't designed to be run in browsers.
        throw ERROR_FACTORY.create("invalid-server-app-environment" /* AppError.INVALID_SERVER_APP_ENVIRONMENT */);
    }
    if (_serverAppConfig.automaticDataCollectionEnabled === undefined) {
        _serverAppConfig.automaticDataCollectionEnabled = true;
    }
    let appOptions;
    if (_isFirebaseApp(_options)) {
        appOptions = _options.options;
    }
    else {
        appOptions = _options;
    }
    // Build an app name based on a hash of the configuration options.
    const nameObj = Object.assign(Object.assign({}, _serverAppConfig), appOptions);
    // However, Do not mangle the name based on releaseOnDeref, since it will vary between the
    // construction of FirebaseServerApp instances. For example, if the object is the request headers.
    if (nameObj.releaseOnDeref !== undefined) {
        delete nameObj.releaseOnDeref;
    }
    const hashCode = (s) => {
        return [...s].reduce((hash, c) => (Math.imul(31, hash) + c.charCodeAt(0)) | 0, 0);
    };
    if (_serverAppConfig.releaseOnDeref !== undefined) {
        if (typeof FinalizationRegistry === 'undefined') {
            throw ERROR_FACTORY.create("finalization-registry-not-supported" /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */, {});
        }
    }
    const nameString = '' + hashCode(JSON.stringify(nameObj));
    const existingApp = _serverApps.get(nameString);
    if (existingApp) {
        existingApp.incRefCount(_serverAppConfig.releaseOnDeref);
        return existingApp;
    }
    const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(nameString);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseServerAppImpl(appOptions, _serverAppConfig, nameString, container);
    _serverApps.set(nameString, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app && name === DEFAULT_ENTRY_NAME && (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.getDefaultAppConfig)()) {
        return initializeApp();
    }
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* AppError.NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
async function deleteApp(app) {
    let cleanupProviders = false;
    const name = app.name;
    if (_apps.has(name)) {
        cleanupProviders = true;
        _apps.delete(name);
    }
    else if (_serverApps.has(name)) {
        const firebaseServerApp = app;
        if (firebaseServerApp.decRefCount() <= 0) {
            _serverApps.delete(name);
            cleanupProviders = true;
        }
    }
    if (cleanupProviders) {
        await Promise.all(app.container
            .getProviders()
            .map(provider => provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(`${library}-version`, () => ({ library, version }), "VERSION" /* ComponentType.VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* AppError.INVALID_LOG_ARGUMENT */);
    }
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = 'firebase-heartbeat-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DB_NAME, DB_VERSION, {
            upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        try {
                            db.createObjectStore(STORE_NAME);
                        }
                        catch (e) {
                            // Safari/iOS browsers throw occasional exceptions on
                            // db.createObjectStore() that may be a bug. Avoid blocking
                            // the rest of the app functionality.
                            console.warn(e);
                        }
                }
            }
        }).catch(e => {
            throw ERROR_FACTORY.create("idb-open" /* AppError.IDB_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME);
        const result = await tx.objectStore(STORE_NAME).get(computeKey(app));
        // We already have the value but tx.done can throw,
        // so we need to await it here to catch errors
        await tx.done;
        return result;
    }
    catch (e) {
        if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-get" /* AppError.IDB_GET */, {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        await tx.done;
    }
    catch (e) {
        if (e instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError) {
            logger.warn(e.message);
        }
        else {
            const idbGetError = ERROR_FACTORY.create("idb-set" /* AppError.IDB_WRITE */, {
                originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
            });
            logger.warn(idbGetError.message);
        }
    }
}
function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024;
const MAX_NUM_STORED_HEARTBEATS = 30;
class HeartbeatServiceImpl {
    constructor(container) {
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(result => {
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
        var _a, _b;
        try {
            const platformLogger = this.container
                .getProvider('platform-logger')
                .getImmediate();
            // This is the "Firebase user agent" string from the platform logger
            // service, not the browser user agent.
            const agent = platformLogger.getPlatformInfoString();
            const date = getUTCDateString();
            if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
                this._heartbeatsCache = await this._heartbeatsCachePromise;
                // If we failed to construct a heartbeats cache, then return immediately.
                if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
                    return;
                }
            }
            // Do not store a heartbeat if one is already stored for this day
            // or if a header has already been sent today.
            if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
                this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
                return;
            }
            else {
                // There is no entry for this date. Create one.
                this._heartbeatsCache.heartbeats.push({ date, agent });
                // If the number of stored heartbeats exceeds the maximum number of stored heartbeats, remove the heartbeat with the earliest date.
                // Since this is executed each time a heartbeat is pushed, the limit can only be exceeded by one, so only one needs to be removed.
                if (this._heartbeatsCache.heartbeats.length > MAX_NUM_STORED_HEARTBEATS) {
                    const earliestHeartbeatIdx = getEarliestHeartbeatIdx(this._heartbeatsCache.heartbeats);
                    this._heartbeatsCache.heartbeats.splice(earliestHeartbeatIdx, 1);
                }
            }
            return this._storage.overwrite(this._heartbeatsCache);
        }
        catch (e) {
            logger.warn(e);
        }
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
        var _a;
        try {
            if (this._heartbeatsCache === null) {
                await this._heartbeatsCachePromise;
            }
            // If it's still null or the array is empty, there is no data to send.
            if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null ||
                this._heartbeatsCache.heartbeats.length === 0) {
                return '';
            }
            const date = getUTCDateString();
            // Extract as many heartbeats from the cache as will fit under the size limit.
            const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
            const headerString = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
            // Store last sent date to prevent another being logged/sent for the same day.
            this._heartbeatsCache.lastSentHeartbeatDate = date;
            if (unsentEntries.length > 0) {
                // Store any unsent entries if they exist.
                this._heartbeatsCache.heartbeats = unsentEntries;
                // This seems more likely than emptying the array (below) to lead to some odd state
                // since the cache isn't empty and this will be called again on the next request,
                // and is probably safest if we await it.
                await this._storage.overwrite(this._heartbeatsCache);
            }
            else {
                this._heartbeatsCache.heartbeats = [];
                // Do not wait for this, to reduce latency.
                void this._storage.overwrite(this._heartbeatsCache);
            }
            return headerString;
        }
        catch (e) {
            logger.warn(e);
            return '';
        }
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    constructor(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
            return false;
        }
        else {
            return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)()
                .then(() => true)
                .catch(() => false);
        }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return { heartbeats: [] };
        }
        else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
                return idbHeartbeatObject;
            }
            else {
                return { heartbeats: [] };
            }
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}
/**
 * Returns the index of the heartbeat with the earliest date.
 * If the heartbeats array is empty, -1 is returned.
 */
function getEarliestHeartbeatIdx(heartbeats) {
    if (heartbeats.length === 0) {
        return -1;
    }
    let earliestHeartbeatIdx = 0;
    let earliestHeartbeatDate = heartbeats[0].date;
    for (let i = 1; i < heartbeats.length; i++) {
        if (heartbeats[i].date < earliestHeartbeatDate) {
            earliestHeartbeatDate = heartbeats[i].date;
            earliestHeartbeatIdx = i;
        }
    }
    return earliestHeartbeatIdx;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* ComponentType.PRIVATE */));
    // Register `app` package.
    registerVersion(name$q, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
    registerVersion(name$q, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/esm/index.esm2017.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Component: () => (/* binding */ Component),
/* harmony export */   ComponentContainer: () => (/* binding */ ComponentContainer),
/* harmony export */   Provider: () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* InstantiationMode.LAZY */;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
class Provider {
    constructor(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide multiple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/cannot be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            }
            catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services
                .filter(service => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service.INTERNAL.delete()),
            ...services
                .filter(service => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return () => {
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            try {
                callback(instance, identifier);
            }
            catch (_a) {
                // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_a) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* InstantiationMode.EXPLICIT */);
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* InstantiationMode.EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
class ComponentContainer {
    constructor(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/installations/dist/esm/index.esm2017.js":
/*!************************************************************************!*\
  !*** ./node_modules/@firebase/installations/dist/esm/index.esm2017.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteInstallations: () => (/* binding */ deleteInstallations),
/* harmony export */   getId: () => (/* binding */ getId),
/* harmony export */   getInstallations: () => (/* binding */ getInstallations),
/* harmony export */   getToken: () => (/* binding */ getToken),
/* harmony export */   onIdChange: () => (/* binding */ onIdChange)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");





const name = "@firebase/installations";
const version = "0.6.17";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const PENDING_TIMEOUT_MS = 10000;
const PACKAGE_VERSION = `w:${version}`;
const INTERNAL_AUTH_VERSION = 'FIS_v2';
const INSTALLATIONS_API_URL = 'https://firebaseinstallations.googleapis.com/v1';
const TOKEN_EXPIRATION_BUFFER = 60 * 60 * 1000; // One hour
const SERVICE = 'installations';
const SERVICE_NAME = 'Installations';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERROR_DESCRIPTION_MAP = {
    ["missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */]: 'Missing App configuration value: "{$valueName}"',
    ["not-registered" /* ErrorCode.NOT_REGISTERED */]: 'Firebase Installation is not registered.',
    ["installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */]: 'Firebase Installation not found.',
    ["request-failed" /* ErrorCode.REQUEST_FAILED */]: '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
    ["app-offline" /* ErrorCode.APP_OFFLINE */]: 'Could not process request. Application offline.',
    ["delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */]: "Can't delete installation while there is a pending registration request."
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory(SERVICE, SERVICE_NAME, ERROR_DESCRIPTION_MAP);
/** Returns true if error is a FirebaseError that is based on an error from the server. */
function isServerError(error) {
    return (error instanceof _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError &&
        error.code.includes("request-failed" /* ErrorCode.REQUEST_FAILED */));
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getInstallationsEndpoint({ projectId }) {
    return `${INSTALLATIONS_API_URL}/projects/${projectId}/installations`;
}
function extractAuthTokenInfoFromResponse(response) {
    return {
        token: response.token,
        requestStatus: 2 /* RequestStatus.COMPLETED */,
        expiresIn: getExpiresInFromResponseExpiresIn(response.expiresIn),
        creationTime: Date.now()
    };
}
async function getErrorFromResponse(requestName, response) {
    const responseJson = await response.json();
    const errorData = responseJson.error;
    return ERROR_FACTORY.create("request-failed" /* ErrorCode.REQUEST_FAILED */, {
        requestName,
        serverCode: errorData.code,
        serverMessage: errorData.message,
        serverStatus: errorData.status
    });
}
function getHeaders({ apiKey }) {
    return new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-goog-api-key': apiKey
    });
}
function getHeadersWithAuth(appConfig, { refreshToken }) {
    const headers = getHeaders(appConfig);
    headers.append('Authorization', getAuthorizationHeader(refreshToken));
    return headers;
}
/**
 * Calls the passed in fetch wrapper and returns the response.
 * If the returned response has a status of 5xx, re-runs the function once and
 * returns the response.
 */
async function retryIfServerError(fn) {
    const result = await fn();
    if (result.status >= 500 && result.status < 600) {
        // Internal Server Error. Retry request.
        return fn();
    }
    return result;
}
function getExpiresInFromResponseExpiresIn(responseExpiresIn) {
    // This works because the server will never respond with fractions of a second.
    return Number(responseExpiresIn.replace('s', '000'));
}
function getAuthorizationHeader(refreshToken) {
    return `${INTERNAL_AUTH_VERSION} ${refreshToken}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function createInstallationRequest({ appConfig, heartbeatServiceProvider }, { fid }) {
    const endpoint = getInstallationsEndpoint(appConfig);
    const headers = getHeaders(appConfig);
    // If heartbeat service exists, add the heartbeat string to the header.
    const heartbeatService = heartbeatServiceProvider.getImmediate({
        optional: true
    });
    if (heartbeatService) {
        const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
        if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
        }
    }
    const body = {
        fid,
        authVersion: INTERNAL_AUTH_VERSION,
        appId: appConfig.appId,
        sdkVersion: PACKAGE_VERSION
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const registeredInstallationEntry = {
            fid: responseValue.fid || fid,
            registrationStatus: 2 /* RequestStatus.COMPLETED */,
            refreshToken: responseValue.refreshToken,
            authToken: extractAuthTokenInfoFromResponse(responseValue.authToken)
        };
        return registeredInstallationEntry;
    }
    else {
        throw await getErrorFromResponse('Create Installation', response);
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a promise that resolves after given time passes. */
function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bufferToBase64UrlSafe(array) {
    const b64 = btoa(String.fromCharCode(...array));
    return b64.replace(/\+/g, '-').replace(/\//g, '_');
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const VALID_FID_PATTERN = /^[cdef][\w-]{21}$/;
const INVALID_FID = '';
/**
 * Generates a new FID using random values from Web Crypto API.
 * Returns an empty string if FID generation fails for any reason.
 */
function generateFid() {
    try {
        // A valid FID has exactly 22 base64 characters, which is 132 bits, or 16.5
        // bytes. our implementation generates a 17 byte array instead.
        const fidByteArray = new Uint8Array(17);
        const crypto = self.crypto || self.msCrypto;
        crypto.getRandomValues(fidByteArray);
        // Replace the first 4 random bits with the constant FID header of 0b0111.
        fidByteArray[0] = 0b01110000 + (fidByteArray[0] % 0b00010000);
        const fid = encode(fidByteArray);
        return VALID_FID_PATTERN.test(fid) ? fid : INVALID_FID;
    }
    catch (_a) {
        // FID generation errored
        return INVALID_FID;
    }
}
/** Converts a FID Uint8Array to a base64 string representation. */
function encode(fidByteArray) {
    const b64String = bufferToBase64UrlSafe(fidByteArray);
    // Remove the 23rd character that was added because of the extra 4 bits at the
    // end of our 17 byte array, and the '=' padding.
    return b64String.substr(0, 22);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Returns a string key that can be used to identify the app. */
function getKey(appConfig) {
    return `${appConfig.appName}!${appConfig.appId}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fidChangeCallbacks = new Map();
/**
 * Calls the onIdChange callbacks with the new FID value, and broadcasts the
 * change to other tabs.
 */
function fidChanged(appConfig, fid) {
    const key = getKey(appConfig);
    callFidChangeCallbacks(key, fid);
    broadcastFidChange(key, fid);
}
function addCallback(appConfig, callback) {
    // Open the broadcast channel if it's not already open,
    // to be able to listen to change events from other tabs.
    getBroadcastChannel();
    const key = getKey(appConfig);
    let callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        callbackSet = new Set();
        fidChangeCallbacks.set(key, callbackSet);
    }
    callbackSet.add(callback);
}
function removeCallback(appConfig, callback) {
    const key = getKey(appConfig);
    const callbackSet = fidChangeCallbacks.get(key);
    if (!callbackSet) {
        return;
    }
    callbackSet.delete(callback);
    if (callbackSet.size === 0) {
        fidChangeCallbacks.delete(key);
    }
    // Close broadcast channel if there are no more callbacks.
    closeBroadcastChannel();
}
function callFidChangeCallbacks(key, fid) {
    const callbacks = fidChangeCallbacks.get(key);
    if (!callbacks) {
        return;
    }
    for (const callback of callbacks) {
        callback(fid);
    }
}
function broadcastFidChange(key, fid) {
    const channel = getBroadcastChannel();
    if (channel) {
        channel.postMessage({ key, fid });
    }
    closeBroadcastChannel();
}
let broadcastChannel = null;
/** Opens and returns a BroadcastChannel if it is supported by the browser. */
function getBroadcastChannel() {
    if (!broadcastChannel && 'BroadcastChannel' in self) {
        broadcastChannel = new BroadcastChannel('[Firebase] FID Change');
        broadcastChannel.onmessage = e => {
            callFidChangeCallbacks(e.data.key, e.data.fid);
        };
    }
    return broadcastChannel;
}
function closeBroadcastChannel() {
    if (fidChangeCallbacks.size === 0 && broadcastChannel) {
        broadcastChannel.close();
        broadcastChannel = null;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DATABASE_NAME = 'firebase-installations-database';
const DATABASE_VERSION = 1;
const OBJECT_STORE_NAME = 'firebase-installations-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DATABASE_NAME, DATABASE_VERSION, {
            upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        db.createObjectStore(OBJECT_STORE_NAME);
                }
            }
        });
    }
    return dbPromise;
}
/** Assigns or overwrites the record for the given key with the given value. */
async function set(appConfig, value) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const objectStore = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = (await objectStore.get(key));
    await objectStore.put(value, key);
    await tx.done;
    if (!oldValue || oldValue.fid !== value.fid) {
        fidChanged(appConfig, value.fid);
    }
    return value;
}
/** Removes record(s) from the objectStore that match the given key. */
async function remove(appConfig) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    await tx.objectStore(OBJECT_STORE_NAME).delete(key);
    await tx.done;
}
/**
 * Atomically updates a record with the result of updateFn, which gets
 * called with the current value. If newValue is undefined, the record is
 * deleted instead.
 * @return Updated value
 */
async function update(appConfig, updateFn) {
    const key = getKey(appConfig);
    const db = await getDbPromise();
    const tx = db.transaction(OBJECT_STORE_NAME, 'readwrite');
    const store = tx.objectStore(OBJECT_STORE_NAME);
    const oldValue = (await store.get(key));
    const newValue = updateFn(oldValue);
    if (newValue === undefined) {
        await store.delete(key);
    }
    else {
        await store.put(newValue, key);
    }
    await tx.done;
    if (newValue && (!oldValue || oldValue.fid !== newValue.fid)) {
        fidChanged(appConfig, newValue.fid);
    }
    return newValue;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Updates and returns the InstallationEntry from the database.
 * Also triggers a registration request if it is necessary and possible.
 */
async function getInstallationEntry(installations) {
    let registrationPromise;
    const installationEntry = await update(installations.appConfig, oldEntry => {
        const installationEntry = updateOrCreateInstallationEntry(oldEntry);
        const entryWithPromise = triggerRegistrationIfNecessary(installations, installationEntry);
        registrationPromise = entryWithPromise.registrationPromise;
        return entryWithPromise.installationEntry;
    });
    if (installationEntry.fid === INVALID_FID) {
        // FID generation failed. Waiting for the FID from the server.
        return { installationEntry: await registrationPromise };
    }
    return {
        installationEntry,
        registrationPromise
    };
}
/**
 * Creates a new Installation Entry if one does not exist.
 * Also clears timed out pending requests.
 */
function updateOrCreateInstallationEntry(oldEntry) {
    const entry = oldEntry || {
        fid: generateFid(),
        registrationStatus: 0 /* RequestStatus.NOT_STARTED */
    };
    return clearTimedOutRequest(entry);
}
/**
 * If the Firebase Installation is not registered yet, this will trigger the
 * registration and return an InProgressInstallationEntry.
 *
 * If registrationPromise does not exist, the installationEntry is guaranteed
 * to be registered.
 */
function triggerRegistrationIfNecessary(installations, installationEntry) {
    if (installationEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
        if (!navigator.onLine) {
            // Registration required but app is offline.
            const registrationPromiseWithError = Promise.reject(ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */));
            return {
                installationEntry,
                registrationPromise: registrationPromiseWithError
            };
        }
        // Try registering. Change status to IN_PROGRESS.
        const inProgressEntry = {
            fid: installationEntry.fid,
            registrationStatus: 1 /* RequestStatus.IN_PROGRESS */,
            registrationTime: Date.now()
        };
        const registrationPromise = registerInstallation(installations, inProgressEntry);
        return { installationEntry: inProgressEntry, registrationPromise };
    }
    else if (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
        return {
            installationEntry,
            registrationPromise: waitUntilFidRegistration(installations)
        };
    }
    else {
        return { installationEntry };
    }
}
/** This will be executed only once for each new Firebase Installation. */
async function registerInstallation(installations, installationEntry) {
    try {
        const registeredInstallationEntry = await createInstallationRequest(installations, installationEntry);
        return set(installations.appConfig, registeredInstallationEntry);
    }
    catch (e) {
        if (isServerError(e) && e.customData.serverCode === 409) {
            // Server returned a "FID cannot be used" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
        }
        else {
            // Registration failed. Set FID as not registered.
            await set(installations.appConfig, {
                fid: installationEntry.fid,
                registrationStatus: 0 /* RequestStatus.NOT_STARTED */
            });
        }
        throw e;
    }
}
/** Call if FID registration is pending in another request. */
async function waitUntilFidRegistration(installations) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateInstallationRequest(installations.appConfig);
    while (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
        // createInstallation request still in progress.
        await sleep(100);
        entry = await updateInstallationRequest(installations.appConfig);
    }
    if (entry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
        // The request timed out or failed in a different call. Try again.
        const { installationEntry, registrationPromise } = await getInstallationEntry(installations);
        if (registrationPromise) {
            return registrationPromise;
        }
        else {
            // if there is no registrationPromise, entry is registered.
            return installationEntry;
        }
    }
    return entry;
}
/**
 * Called only if there is a CreateInstallation request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * CreateInstallation request.
 *
 * Returns the updated InstallationEntry.
 */
function updateInstallationRequest(appConfig) {
    return update(appConfig, oldEntry => {
        if (!oldEntry) {
            throw ERROR_FACTORY.create("installation-not-found" /* ErrorCode.INSTALLATION_NOT_FOUND */);
        }
        return clearTimedOutRequest(oldEntry);
    });
}
function clearTimedOutRequest(entry) {
    if (hasInstallationRequestTimedOut(entry)) {
        return {
            fid: entry.fid,
            registrationStatus: 0 /* RequestStatus.NOT_STARTED */
        };
    }
    return entry;
}
function hasInstallationRequestTimedOut(installationEntry) {
    return (installationEntry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
        installationEntry.registrationTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateAuthTokenRequest({ appConfig, heartbeatServiceProvider }, installationEntry) {
    const endpoint = getGenerateAuthTokenEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    // If heartbeat service exists, add the heartbeat string to the header.
    const heartbeatService = heartbeatServiceProvider.getImmediate({
        optional: true
    });
    if (heartbeatService) {
        const heartbeatsHeader = await heartbeatService.getHeartbeatsHeader();
        if (heartbeatsHeader) {
            headers.append('x-firebase-client', heartbeatsHeader);
        }
    }
    const body = {
        installation: {
            sdkVersion: PACKAGE_VERSION,
            appId: appConfig.appId
        }
    };
    const request = {
        method: 'POST',
        headers,
        body: JSON.stringify(body)
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (response.ok) {
        const responseValue = await response.json();
        const completedAuthToken = extractAuthTokenInfoFromResponse(responseValue);
        return completedAuthToken;
    }
    else {
        throw await getErrorFromResponse('Generate Auth Token', response);
    }
}
function getGenerateAuthTokenEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}/authTokens:generate`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a valid authentication token for the installation. Generates a new
 * token if one doesn't exist, is expired or about to expire.
 *
 * Should only be called if the Firebase Installation is registered.
 */
async function refreshAuthToken(installations, forceRefresh = false) {
    let tokenPromise;
    const entry = await update(installations.appConfig, oldEntry => {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
        }
        const oldAuthToken = oldEntry.authToken;
        if (!forceRefresh && isAuthTokenValid(oldAuthToken)) {
            // There is a valid token in the DB.
            return oldEntry;
        }
        else if (oldAuthToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
            // There already is a token request in progress.
            tokenPromise = waitUntilAuthTokenRequest(installations, forceRefresh);
            return oldEntry;
        }
        else {
            // No token or token expired.
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
            }
            const inProgressEntry = makeAuthTokenRequestInProgressEntry(oldEntry);
            tokenPromise = fetchAuthTokenFromServer(installations, inProgressEntry);
            return inProgressEntry;
        }
    });
    const authToken = tokenPromise
        ? await tokenPromise
        : entry.authToken;
    return authToken;
}
/**
 * Call only if FID is registered and Auth Token request is in progress.
 *
 * Waits until the current pending request finishes. If the request times out,
 * tries once in this thread as well.
 */
async function waitUntilAuthTokenRequest(installations, forceRefresh) {
    // Unfortunately, there is no way of reliably observing when a value in
    // IndexedDB changes (yet, see https://github.com/WICG/indexed-db-observers),
    // so we need to poll.
    let entry = await updateAuthTokenRequest(installations.appConfig);
    while (entry.authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */) {
        // generateAuthToken still in progress.
        await sleep(100);
        entry = await updateAuthTokenRequest(installations.appConfig);
    }
    const authToken = entry.authToken;
    if (authToken.requestStatus === 0 /* RequestStatus.NOT_STARTED */) {
        // The request timed out or failed in a different call. Try again.
        return refreshAuthToken(installations, forceRefresh);
    }
    else {
        return authToken;
    }
}
/**
 * Called only if there is a GenerateAuthToken request in progress.
 *
 * Updates the InstallationEntry in the DB based on the status of the
 * GenerateAuthToken request.
 *
 * Returns the updated InstallationEntry.
 */
function updateAuthTokenRequest(appConfig) {
    return update(appConfig, oldEntry => {
        if (!isEntryRegistered(oldEntry)) {
            throw ERROR_FACTORY.create("not-registered" /* ErrorCode.NOT_REGISTERED */);
        }
        const oldAuthToken = oldEntry.authToken;
        if (hasAuthTokenRequestTimedOut(oldAuthToken)) {
            return Object.assign(Object.assign({}, oldEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
        }
        return oldEntry;
    });
}
async function fetchAuthTokenFromServer(installations, installationEntry) {
    try {
        const authToken = await generateAuthTokenRequest(installations, installationEntry);
        const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken });
        await set(installations.appConfig, updatedInstallationEntry);
        return authToken;
    }
    catch (e) {
        if (isServerError(e) &&
            (e.customData.serverCode === 401 || e.customData.serverCode === 404)) {
            // Server returned a "FID not found" or a "Invalid authentication" error.
            // Generate a new ID next time.
            await remove(installations.appConfig);
        }
        else {
            const updatedInstallationEntry = Object.assign(Object.assign({}, installationEntry), { authToken: { requestStatus: 0 /* RequestStatus.NOT_STARTED */ } });
            await set(installations.appConfig, updatedInstallationEntry);
        }
        throw e;
    }
}
function isEntryRegistered(installationEntry) {
    return (installationEntry !== undefined &&
        installationEntry.registrationStatus === 2 /* RequestStatus.COMPLETED */);
}
function isAuthTokenValid(authToken) {
    return (authToken.requestStatus === 2 /* RequestStatus.COMPLETED */ &&
        !isAuthTokenExpired(authToken));
}
function isAuthTokenExpired(authToken) {
    const now = Date.now();
    return (now < authToken.creationTime ||
        authToken.creationTime + authToken.expiresIn < now + TOKEN_EXPIRATION_BUFFER);
}
/** Returns an updated InstallationEntry with an InProgressAuthToken. */
function makeAuthTokenRequestInProgressEntry(oldEntry) {
    const inProgressAuthToken = {
        requestStatus: 1 /* RequestStatus.IN_PROGRESS */,
        requestTime: Date.now()
    };
    return Object.assign(Object.assign({}, oldEntry), { authToken: inProgressAuthToken });
}
function hasAuthTokenRequestTimedOut(authToken) {
    return (authToken.requestStatus === 1 /* RequestStatus.IN_PROGRESS */ &&
        authToken.requestTime + PENDING_TIMEOUT_MS < Date.now());
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Creates a Firebase Installation if there isn't one for the app and
 * returns the Installation ID.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
async function getId(installations) {
    const installationsImpl = installations;
    const { installationEntry, registrationPromise } = await getInstallationEntry(installationsImpl);
    if (registrationPromise) {
        registrationPromise.catch(console.error);
    }
    else {
        // If the installation is already registered, update the authentication
        // token if needed.
        refreshAuthToken(installationsImpl).catch(console.error);
    }
    return installationEntry.fid;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a Firebase Installations auth token, identifying the current
 * Firebase Installation.
 * @param installations - The `Installations` instance.
 * @param forceRefresh - Force refresh regardless of token expiration.
 *
 * @public
 */
async function getToken(installations, forceRefresh = false) {
    const installationsImpl = installations;
    await completeInstallationRegistration(installationsImpl);
    // At this point we either have a Registered Installation in the DB, or we've
    // already thrown an error.
    const authToken = await refreshAuthToken(installationsImpl, forceRefresh);
    return authToken.token;
}
async function completeInstallationRegistration(installations) {
    const { registrationPromise } = await getInstallationEntry(installations);
    if (registrationPromise) {
        // A createInstallation request is in progress. Wait until it finishes.
        await registrationPromise;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function deleteInstallationRequest(appConfig, installationEntry) {
    const endpoint = getDeleteEndpoint(appConfig, installationEntry);
    const headers = getHeadersWithAuth(appConfig, installationEntry);
    const request = {
        method: 'DELETE',
        headers
    };
    const response = await retryIfServerError(() => fetch(endpoint, request));
    if (!response.ok) {
        throw await getErrorFromResponse('Delete Installation', response);
    }
}
function getDeleteEndpoint(appConfig, { fid }) {
    return `${getInstallationsEndpoint(appConfig)}/${fid}`;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Deletes the Firebase Installation and all associated data.
 * @param installations - The `Installations` instance.
 *
 * @public
 */
async function deleteInstallations(installations) {
    const { appConfig } = installations;
    const entry = await update(appConfig, oldEntry => {
        if (oldEntry && oldEntry.registrationStatus === 0 /* RequestStatus.NOT_STARTED */) {
            // Delete the unregistered entry without sending a deleteInstallation request.
            return undefined;
        }
        return oldEntry;
    });
    if (entry) {
        if (entry.registrationStatus === 1 /* RequestStatus.IN_PROGRESS */) {
            // Can't delete while trying to register.
            throw ERROR_FACTORY.create("delete-pending-registration" /* ErrorCode.DELETE_PENDING_REGISTRATION */);
        }
        else if (entry.registrationStatus === 2 /* RequestStatus.COMPLETED */) {
            if (!navigator.onLine) {
                throw ERROR_FACTORY.create("app-offline" /* ErrorCode.APP_OFFLINE */);
            }
            else {
                await deleteInstallationRequest(appConfig, entry);
                await remove(appConfig);
            }
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Sets a new callback that will get called when Installation ID changes.
 * Returns an unsubscribe function that will remove the callback when called.
 * @param installations - The `Installations` instance.
 * @param callback - The callback function that is invoked when FID changes.
 * @returns A function that can be called to unsubscribe.
 *
 * @public
 */
function onIdChange(installations, callback) {
    const { appConfig } = installations;
    addCallback(appConfig, callback);
    return () => {
        removeCallback(appConfig, callback);
    };
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an instance of {@link Installations} associated with the given
 * {@link @firebase/app#FirebaseApp} instance.
 * @param app - The {@link @firebase/app#FirebaseApp} instance.
 *
 * @public
 */
function getInstallations(app = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp)()) {
    const installationsImpl = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'installations').getImmediate();
    return installationsImpl;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function extractAppConfig(app) {
    if (!app || !app.options) {
        throw getMissingValueError('App Configuration');
    }
    if (!app.name) {
        throw getMissingValueError('App Name');
    }
    // Required app config keys
    const configKeys = [
        'projectId',
        'apiKey',
        'appId'
    ];
    for (const keyName of configKeys) {
        if (!app.options[keyName]) {
            throw getMissingValueError(keyName);
        }
    }
    return {
        appName: app.name,
        projectId: app.options.projectId,
        apiKey: app.options.apiKey,
        appId: app.options.appId
    };
}
function getMissingValueError(valueName) {
    return ERROR_FACTORY.create("missing-app-config-values" /* ErrorCode.MISSING_APP_CONFIG_VALUES */, {
        valueName
    });
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const INSTALLATIONS_NAME = 'installations';
const INSTALLATIONS_NAME_INTERNAL = 'installations-internal';
const publicFactory = (container) => {
    const app = container.getProvider('app').getImmediate();
    // Throws if app isn't configured properly.
    const appConfig = extractAppConfig(app);
    const heartbeatServiceProvider = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, 'heartbeat');
    const installationsImpl = {
        app,
        appConfig,
        heartbeatServiceProvider,
        _delete: () => Promise.resolve()
    };
    return installationsImpl;
};
const internalFactory = (container) => {
    const app = container.getProvider('app').getImmediate();
    // Internal FIS instance relies on public FIS instance.
    const installations = (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider)(app, INSTALLATIONS_NAME).getImmediate();
    const installationsInternal = {
        getId: () => getId(installations),
        getToken: (forceRefresh) => getToken(installations, forceRefresh)
    };
    return installationsInternal;
};
function registerInstallations() {
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME, publicFactory, "PUBLIC" /* ComponentType.PUBLIC */));
    (0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent)(new _firebase_component__WEBPACK_IMPORTED_MODULE_1__.Component(INSTALLATIONS_NAME_INTERNAL, internalFactory, "PRIVATE" /* ComponentType.PRIVATE */));
}

/**
 * The Firebase Installations Web SDK.
 * This SDK does not work in a Node.js environment.
 *
 * @packageDocumentation
 */
registerInstallations();
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version);
// BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'esm2017');


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel),
/* harmony export */   Logger: () => (/* binding */ Logger),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel),
/* harmony export */   setUserLogHandler: () => (/* binding */ setUserLogHandler)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
const defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    }
    else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler &&
            this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach(inst => {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances) {
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                    .map(arg => {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(arg => arg)
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/index.esm2017.js":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONSTANTS: () => (/* binding */ CONSTANTS),
/* harmony export */   DecodeBase64StringError: () => (/* binding */ DecodeBase64StringError),
/* harmony export */   Deferred: () => (/* binding */ Deferred),
/* harmony export */   ErrorFactory: () => (/* binding */ ErrorFactory),
/* harmony export */   FirebaseError: () => (/* binding */ FirebaseError),
/* harmony export */   MAX_VALUE_MILLIS: () => (/* binding */ MAX_VALUE_MILLIS),
/* harmony export */   RANDOM_FACTOR: () => (/* binding */ RANDOM_FACTOR),
/* harmony export */   Sha1: () => (/* binding */ Sha1),
/* harmony export */   areCookiesEnabled: () => (/* binding */ areCookiesEnabled),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   assertionError: () => (/* binding */ assertionError),
/* harmony export */   async: () => (/* binding */ async),
/* harmony export */   base64: () => (/* binding */ base64),
/* harmony export */   base64Decode: () => (/* binding */ base64Decode),
/* harmony export */   base64Encode: () => (/* binding */ base64Encode),
/* harmony export */   base64urlEncodeWithoutPadding: () => (/* binding */ base64urlEncodeWithoutPadding),
/* harmony export */   calculateBackoffMillis: () => (/* binding */ calculateBackoffMillis),
/* harmony export */   contains: () => (/* binding */ contains),
/* harmony export */   createMockUserToken: () => (/* binding */ createMockUserToken),
/* harmony export */   createSubscribe: () => (/* binding */ createSubscribe),
/* harmony export */   decode: () => (/* binding */ decode),
/* harmony export */   deepCopy: () => (/* binding */ deepCopy),
/* harmony export */   deepEqual: () => (/* binding */ deepEqual),
/* harmony export */   deepExtend: () => (/* binding */ deepExtend),
/* harmony export */   errorPrefix: () => (/* binding */ errorPrefix),
/* harmony export */   extractQuerystring: () => (/* binding */ extractQuerystring),
/* harmony export */   getDefaultAppConfig: () => (/* binding */ getDefaultAppConfig),
/* harmony export */   getDefaultEmulatorHost: () => (/* binding */ getDefaultEmulatorHost),
/* harmony export */   getDefaultEmulatorHostnameAndPort: () => (/* binding */ getDefaultEmulatorHostnameAndPort),
/* harmony export */   getDefaults: () => (/* binding */ getDefaults),
/* harmony export */   getExperimentalSetting: () => (/* binding */ getExperimentalSetting),
/* harmony export */   getGlobal: () => (/* binding */ getGlobal),
/* harmony export */   getModularInstance: () => (/* binding */ getModularInstance),
/* harmony export */   getUA: () => (/* binding */ getUA),
/* harmony export */   isAdmin: () => (/* binding */ isAdmin),
/* harmony export */   isBrowser: () => (/* binding */ isBrowser),
/* harmony export */   isBrowserExtension: () => (/* binding */ isBrowserExtension),
/* harmony export */   isCloudWorkstation: () => (/* binding */ isCloudWorkstation),
/* harmony export */   isCloudflareWorker: () => (/* binding */ isCloudflareWorker),
/* harmony export */   isElectron: () => (/* binding */ isElectron),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isIE: () => (/* binding */ isIE),
/* harmony export */   isIndexedDBAvailable: () => (/* binding */ isIndexedDBAvailable),
/* harmony export */   isMobileCordova: () => (/* binding */ isMobileCordova),
/* harmony export */   isNode: () => (/* binding */ isNode),
/* harmony export */   isNodeSdk: () => (/* binding */ isNodeSdk),
/* harmony export */   isReactNative: () => (/* binding */ isReactNative),
/* harmony export */   isSafari: () => (/* binding */ isSafari),
/* harmony export */   isSafariOrWebkit: () => (/* binding */ isSafariOrWebkit),
/* harmony export */   isUWP: () => (/* binding */ isUWP),
/* harmony export */   isValidFormat: () => (/* binding */ isValidFormat),
/* harmony export */   isValidTimestamp: () => (/* binding */ isValidTimestamp),
/* harmony export */   isWebWorker: () => (/* binding */ isWebWorker),
/* harmony export */   issuedAtTime: () => (/* binding */ issuedAtTime),
/* harmony export */   jsonEval: () => (/* binding */ jsonEval),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   ordinal: () => (/* binding */ ordinal),
/* harmony export */   pingServer: () => (/* binding */ pingServer),
/* harmony export */   promiseWithTimeout: () => (/* binding */ promiseWithTimeout),
/* harmony export */   querystring: () => (/* binding */ querystring),
/* harmony export */   querystringDecode: () => (/* binding */ querystringDecode),
/* harmony export */   safeGet: () => (/* binding */ safeGet),
/* harmony export */   stringLength: () => (/* binding */ stringLength),
/* harmony export */   stringToByteArray: () => (/* binding */ stringToByteArray),
/* harmony export */   stringify: () => (/* binding */ stringify),
/* harmony export */   updateEmulatorBanner: () => (/* binding */ updateEmulatorBanner),
/* harmony export */   validateArgCount: () => (/* binding */ validateArgCount),
/* harmony export */   validateCallback: () => (/* binding */ validateCallback),
/* harmony export */   validateContextObject: () => (/* binding */ validateContextObject),
/* harmony export */   validateIndexedDBOpenable: () => (/* binding */ validateIndexedDBOpenable),
/* harmony export */   validateNamespace: () => (/* binding */ validateNamespace)
/* harmony export */ });
/* harmony import */ var _postinstall_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postinstall.mjs */ "./node_modules/@firebase/util/dist/postinstall.mjs");


/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
const assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
const assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
// TODO(dlarocque): Define this as a class, since we no longer target ES5.
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw new DecodeBase64StringError();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * An error encountered while decoding base64 string.
 */
class DecodeBase64StringError extends Error {
    constructor() {
        super(...arguments);
        this.name = 'DecodeBase64StringError';
    }
}
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 * @public
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
/**
 * Attempt to read defaults from a JSON string provided to
 * process(.)env(.)__FIREBASE_DEFAULTS__ or a JSON file whose path is in
 * process(.)env(.)__FIREBASE_DEFAULTS_PATH__
 * The dots are in parens because certain compilers (Vite?) cannot
 * handle seeing that variable in comments.
 * See https://github.com/firebase/firebase-js-sdk/issues/6838
 */
const getDefaultsFromEnvVariable = () => {
    if (typeof process === 'undefined' || typeof process.env === 'undefined') {
        return;
    }
    const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
    if (defaultsJsonString) {
        return JSON.parse(defaultsJsonString);
    }
};
const getDefaultsFromCookie = () => {
    if (typeof document === 'undefined') {
        return;
    }
    let match;
    try {
        match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    }
    catch (e) {
        // Some environments such as Angular Universal SSR have a
        // `document` object but error on accessing `document.cookie`.
        return;
    }
    const decoded = match && base64Decode(match[1]);
    return decoded && JSON.parse(decoded);
};
/**
 * Get the __FIREBASE_DEFAULTS__ object. It checks in order:
 * (1) if such an object exists as a property of `globalThis`
 * (2) if such an object was provided on a shell environment variable
 * (3) if such an object exists in a cookie
 * @public
 */
const getDefaults = () => {
    try {
        return ((0,_postinstall_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultsFromPostinstall)() ||
            getDefaultsFromGlobal() ||
            getDefaultsFromEnvVariable() ||
            getDefaultsFromCookie());
    }
    catch (e) {
        /**
         * Catch-all for being unable to get __FIREBASE_DEFAULTS__ due
         * to any environment case we have not accounted for. Log to
         * info instead of swallowing so we can find these unknown cases
         * and add paths for them if needed.
         */
        console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
        return;
    }
};
/**
 * Returns emulator host stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a URL host formatted like `127.0.0.1:9999` or `[::1]:4000` if available
 * @public
 */
const getDefaultEmulatorHost = (productName) => { var _a, _b; return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName]; };
/**
 * Returns emulator hostname and port stored in the __FIREBASE_DEFAULTS__ object
 * for the given product.
 * @returns a pair of hostname and port like `["::1", 4000]` if available
 * @public
 */
const getDefaultEmulatorHostnameAndPort = (productName) => {
    const host = getDefaultEmulatorHost(productName);
    if (!host) {
        return undefined;
    }
    const separatorIndex = host.lastIndexOf(':'); // Finding the last since IPv6 addr also has colons.
    if (separatorIndex <= 0 || separatorIndex + 1 === host.length) {
        throw new Error(`Invalid host ${host} with no separate hostname and port!`);
    }
    // eslint-disable-next-line no-restricted-globals
    const port = parseInt(host.substring(separatorIndex + 1), 10);
    if (host[0] === '[') {
        // Bracket-quoted `[ipv6addr]:port` => return "ipv6addr" (without brackets).
        return [host.substring(1, separatorIndex - 1), port];
    }
    else {
        return [host.substring(0, separatorIndex), port];
    }
};
/**
 * Returns Firebase app config stored in the __FIREBASE_DEFAULTS__ object.
 * @public
 */
const getDefaultAppConfig = () => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config; };
/**
 * Returns an experimental setting on the __FIREBASE_DEFAULTS__ object (properties
 * prefixed by "_")
 * @public
 */
const getExperimentalSetting = (name) => { var _a; return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name}`]; };

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Checks whether host is a cloud workstation or not.
 * @public
 */
function isCloudWorkstation(host) {
    return host.endsWith('.cloudworkstations.dev');
}
/**
 * Makes a fetch request to the given server.
 * Mostly used for forwarding cookies in Firebase Studio.
 * @public
 */
async function pingServer(endpoint) {
    const result = await fetch(endpoint, {
        credentials: 'include'
    });
    return result.ok;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({ 
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`, aud: project, iat, exp: iat + 3600, auth_time: iat, sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}
const emulatorStatus = {};
// Checks whether any products are running on an emulator
function getEmulatorSummary() {
    const summary = {
        prod: [],
        emulator: []
    };
    for (const key of Object.keys(emulatorStatus)) {
        if (emulatorStatus[key]) {
            summary.emulator.push(key);
        }
        else {
            summary.prod.push(key);
        }
    }
    return summary;
}
function getOrCreateEl(id) {
    let parentDiv = document.getElementById(id);
    let created = false;
    if (!parentDiv) {
        parentDiv = document.createElement('div');
        parentDiv.setAttribute('id', id);
        created = true;
    }
    return { created, element: parentDiv };
}
let previouslyDismissed = false;
/**
 * Updates Emulator Banner. Primarily used for Firebase Studio
 * @param name
 * @param isRunningEmulator
 * @public
 */
function updateEmulatorBanner(name, isRunningEmulator) {
    if (typeof window === 'undefined' ||
        typeof document === 'undefined' ||
        !isCloudWorkstation(window.location.host) ||
        emulatorStatus[name] === isRunningEmulator ||
        emulatorStatus[name] || // If already set to use emulator, can't go back to prod.
        previouslyDismissed) {
        return;
    }
    emulatorStatus[name] = isRunningEmulator;
    function prefixedId(id) {
        return `__firebase__banner__${id}`;
    }
    const bannerId = '__firebase__banner';
    const summary = getEmulatorSummary();
    const showError = summary.prod.length > 0;
    function tearDown() {
        const element = document.getElementById(bannerId);
        if (element) {
            element.remove();
        }
    }
    function setupBannerStyles(bannerEl) {
        bannerEl.style.display = 'flex';
        bannerEl.style.background = '#7faaf0';
        bannerEl.style.position = 'fixed';
        bannerEl.style.bottom = '5px';
        bannerEl.style.left = '5px';
        bannerEl.style.padding = '.5em';
        bannerEl.style.borderRadius = '5px';
        bannerEl.style.alignItems = 'center';
    }
    function setupIconStyles(prependIcon, iconId) {
        prependIcon.setAttribute('width', '24');
        prependIcon.setAttribute('id', iconId);
        prependIcon.setAttribute('height', '24');
        prependIcon.setAttribute('viewBox', '0 0 24 24');
        prependIcon.setAttribute('fill', 'none');
        prependIcon.style.marginLeft = '-6px';
    }
    function setupCloseBtn() {
        const closeBtn = document.createElement('span');
        closeBtn.style.cursor = 'pointer';
        closeBtn.style.marginLeft = '16px';
        closeBtn.style.fontSize = '24px';
        closeBtn.innerHTML = ' &times;';
        closeBtn.onclick = () => {
            previouslyDismissed = true;
            tearDown();
        };
        return closeBtn;
    }
    function setupLinkStyles(learnMoreLink, learnMoreId) {
        learnMoreLink.setAttribute('id', learnMoreId);
        learnMoreLink.innerText = 'Learn more';
        learnMoreLink.href =
            'https://firebase.google.com/docs/studio/preview-apps#preview-backend';
        learnMoreLink.setAttribute('target', '__blank');
        learnMoreLink.style.paddingLeft = '5px';
        learnMoreLink.style.textDecoration = 'underline';
    }
    function setupDom() {
        const banner = getOrCreateEl(bannerId);
        const firebaseTextId = prefixedId('text');
        const firebaseText = document.getElementById(firebaseTextId) || document.createElement('span');
        const learnMoreId = prefixedId('learnmore');
        const learnMoreLink = document.getElementById(learnMoreId) ||
            document.createElement('a');
        const prependIconId = prefixedId('preprendIcon');
        const prependIcon = document.getElementById(prependIconId) ||
            document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        if (banner.created) {
            // update styles
            const bannerEl = banner.element;
            setupBannerStyles(bannerEl);
            setupLinkStyles(learnMoreLink, learnMoreId);
            const closeBtn = setupCloseBtn();
            setupIconStyles(prependIcon, prependIconId);
            bannerEl.append(prependIcon, firebaseText, learnMoreLink, closeBtn);
            document.body.appendChild(bannerEl);
        }
        if (showError) {
            firebaseText.innerText = `Preview backend disconnected.`;
            prependIcon.innerHTML = `<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`;
        }
        else {
            prependIcon.innerHTML = `<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`;
            firebaseText.innerText = 'Preview backend running in this workspace.';
        }
        firebaseText.setAttribute('id', firebaseTextId);
    }
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', setupDom);
    }
    else {
        setupDom();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected or specified.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    var _a;
    const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
    if (forceEnvironment === 'node') {
        return true;
    }
    else if (forceEnvironment === 'browser') {
        return false;
    }
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment.
 * Note: This will return true for certain test frameworks that are incompletely
 * mimicking a browser, and should not lead to assuming all browser APIs are
 * available.
 */
function isBrowser() {
    return typeof window !== 'undefined' || isWebWorker();
}
/**
 * Detect Web Worker context.
 */
function isWebWorker() {
    return (typeof WorkerGlobalScope !== 'undefined' &&
        typeof self !== 'undefined' &&
        self instanceof WorkerGlobalScope);
}
/**
 * Detect Cloudflare Worker context.
 */
function isCloudflareWorker() {
    return (typeof navigator !== 'undefined' &&
        navigator.userAgent === 'Cloudflare-Workers');
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        !!navigator.userAgent &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/** Returns true if we are running in Safari or WebKit */
function isSafariOrWebkit() {
    return (!isNode() &&
        !!navigator.userAgent &&
        (navigator.userAgent.includes('Safari') ||
            navigator.userAgent.includes('WebKit')) &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    try {
        return typeof indexedDB === 'object';
    }
    catch (e) {
        return false;
    }
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // TypeScript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if ((e as FirebaseError)?.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        // TODO(dlarocque): Replace this with `new.target`: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
        //                   which we can now use since we no longer target ES5.
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data JavaScript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const decode = function (token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidTimestamp = function (token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const issuedAtTime = function (token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidFormat = function (token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isAdmin = function (token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Rejects if the given promise doesn't resolve in timeInMS milliseconds.
 * @internal
 */
function promiseWithTimeout(promise, timeInMS = 2000) {
    const deferredPromise = new Deferred();
    setTimeout(() => deferredPromise.reject('timeout!'), timeInMS);
    promise.then(deferredPromise.resolve, deferredPromise.reject);
    return deferredPromise.promise;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(token => {
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
class Sha1 {
    constructor() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (let i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (let i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */
    digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    }
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber synchronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args) => {
        Promise.resolve(true)
            .then(() => {
            fn(...args);
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
const validateArgCount = function (fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in JavaScript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
const stringToByteArray = function (str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
const stringLength = function (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/util/dist/postinstall.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/postinstall.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultsFromPostinstall: () => (/* binding */ getDefaultsFromPostinstall)
/* harmony export */ });
const getDefaultsFromPostinstall = () => (undefined);


/***/ }),

/***/ "./node_modules/firebase/analytics/dist/esm/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/firebase/analytics/dist/esm/index.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAnalytics: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.getAnalytics),
/* harmony export */   getGoogleAnalyticsClientId: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.getGoogleAnalyticsClientId),
/* harmony export */   initializeAnalytics: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.initializeAnalytics),
/* harmony export */   isSupported: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.isSupported),
/* harmony export */   logEvent: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.logEvent),
/* harmony export */   setAnalyticsCollectionEnabled: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setAnalyticsCollectionEnabled),
/* harmony export */   setConsent: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setConsent),
/* harmony export */   setCurrentScreen: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setCurrentScreen),
/* harmony export */   setDefaultEventParameters: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setDefaultEventParameters),
/* harmony export */   setUserId: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserId),
/* harmony export */   setUserProperties: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.setUserProperties),
/* harmony export */   settings: () => (/* reexport safe */ _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__.settings)
/* harmony export */ });
/* harmony import */ var _firebase_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/analytics */ "./node_modules/@firebase/analytics/dist/esm/index.esm2017.js");

//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/firebase/app/dist/esm/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseError: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
/* harmony export */   SDK_VERSION: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
/* harmony export */   _DEFAULT_ENTRY_NAME: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
/* harmony export */   _addComponent: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
/* harmony export */   _addOrOverwriteComponent: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
/* harmony export */   _apps: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
/* harmony export */   _clearComponents: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
/* harmony export */   _components: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
/* harmony export */   _getProvider: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
/* harmony export */   _isFirebaseApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseApp),
/* harmony export */   _isFirebaseServerApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseServerApp),
/* harmony export */   _registerComponent: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
/* harmony export */   _removeServiceInstance: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
/* harmony export */   _serverApps: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._serverApps),
/* harmony export */   deleteApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp),
/* harmony export */   getApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp),
/* harmony export */   getApps: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps),
/* harmony export */   initializeApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp),
/* harmony export */   initializeServerApp: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeServerApp),
/* harmony export */   onLog: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog),
/* harmony export */   registerVersion: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion),
/* harmony export */   setLogLevel: () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");



var name = "firebase";
var version = "11.8.1";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteDB: () => (/* binding */ deleteDB),
/* harmony export */   openDB: () => (/* binding */ openDB),
/* harmony export */   unwrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   wrap: () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction), event);
        });
    }
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event.newVersion, event));
    }
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking) {
            db.addEventListener('versionchange', (event) => blocking(event.oldVersion, event.newVersion, event));
        }
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked) {
        request.addEventListener('blocked', (event) => blocked(
        // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
        event.oldVersion, event));
    }
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ reverseTransformCache),
/* harmony export */   i: () => (/* binding */ instanceOfAny),
/* harmony export */   r: () => (/* binding */ replaceTraps),
/* harmony export */   u: () => (/* binding */ unwrap),
/* harmony export */   w: () => (/* binding */ wrap)
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/firebase-init.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/esm/index.esm.js");
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/esm/index.esm.js");


var firebaseConfig = {
  apiKey: "AIzaSyC-e_UcwoG3M3cA_3owudIPIgSyzoHNICA",
  authDomain: "time-tracker-5dae5.firebaseapp.com",
  projectId: "time-tracker-5dae5",
  storageBucket: "time-tracker-5dae5.firebasestorage.app",
  messagingSenderId: "478476863536",
  appId: "1:478476863536:web:c716a1b13447b381b405f5",
  measurementId: "G-6DGFR66SKE"
};

// Initialize Firebase
var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
var analytics = (0,firebase_analytics__WEBPACK_IMPORTED_MODULE_1__.getAnalytics)(app);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwRjtBQUNoRDtBQUNrSztBQUM1SjtBQUNmOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxRkFBcUYsT0FBTztBQUM1Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBTTs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJHQUEyRyxLQUFLO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNKQUFzSixRQUFRO0FBQzlKO0FBQ0E7QUFDQSwwRUFBMEUsV0FBVztBQUNyRjtBQUNBO0FBQ0EsMEVBQTBFLFdBQVc7QUFDckY7QUFDQSw4RUFBOEUsdUJBQXVCO0FBQ3JHLHNHQUFzRyxZQUFZLEdBQUcsaUJBQWlCO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkgsU0FBUztBQUN0STtBQUNBLDBCQUEwQix3REFBWTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyR0FBMkc7QUFDM0csbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFNBQVMsS0FBSyxjQUFjLE1BQU0sY0FBYztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0JBQWdCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0JBQStCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsZ0RBQWdELDhCQUE4QjtBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRCxxQ0FBcUM7QUFDcEc7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFLHlGQUF5RixnREFBZ0Q7QUFDekkscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxjQUFjO0FBQ3pFLDZGQUE2Riw0REFBNEQ7QUFDekoseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsc0VBQXNCO0FBQ3BDLGNBQWMsc0VBQXNCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNELGVBQWU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBO0FBQ0EsdUJBQXVCLHlEQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELGtCQUFrQiwwQkFBMEI7QUFDakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQyxRQUFRLGlGQUFpRjtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0QsMkJBQTJCO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGVBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsSUFBSTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhHQUE4RztBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGNBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHFDQUFxQztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxvRUFBb0I7QUFDN0I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5RUFBeUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFLDBCQUEwQjtBQUN0RywrRUFBK0UscUJBQXFCO0FBQ3BHO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrRUFBa0I7QUFDMUI7QUFDQTtBQUNBLFNBQVMsaUVBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVUsSUFBSSxRQUFRO0FBQy9EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZGQUE2RiwwQkFBMEI7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0EsNEJBQTRCLHFEQUFNO0FBQ2xDLFVBQVUsa0VBQWtCO0FBQzVCO0FBQ0EsOEJBQThCLDJEQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsaUJBQWlCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQSw4QkFBOEIsMkRBQVk7QUFDMUM7QUFDQTtBQUNBLFlBQVkseURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELFNBQVM7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0VBQWtCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTLGlFQUFpQjtBQUMxQjtBQUNBO0FBQ0EsU0FBUyxvRUFBb0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHlFQUF5QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQyxRQUFRLGlGQUFpRjtBQUN6RjtBQUNBLG1DQUFtQyxpQkFBaUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtFQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsOEdBQThHO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBLHdCQUF3QixrRUFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsaUJBQWlCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrRUFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrRUFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGlCQUFpQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0VBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUJBQXVCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlFQUFrQixLQUFLLDBEQUFTLCtCQUErQiwyQkFBMkI7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUksaUVBQWtCLEtBQUssMERBQVM7QUFDcEMsSUFBSSw4REFBZTtBQUNuQjtBQUNBLElBQUksOERBQWU7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRWdPO0FBQ2hPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdHZDb0U7QUFDdUI7QUFDd0g7QUFDcEs7QUFDbEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixnQkFBZ0IsR0FBRyxnQkFBZ0I7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBTTs7QUFFekI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQixzQ0FBc0MsU0FBUztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxjQUFjO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxTQUFTO0FBQ2xFO0FBQ0EsdUVBQXVFLFNBQVM7QUFDaEYsMEVBQTBFLFNBQVM7QUFDbkYsc0VBQXNFLFNBQVM7QUFDL0U7QUFDQTtBQUNBLDZFQUE2RSxTQUFTO0FBQ3RGO0FBQ0E7QUFDQSxpR0FBaUcsc0JBQXNCO0FBQ3ZILG9HQUFvRyxzQkFBc0I7QUFDMUgsb0dBQW9HLHNCQUFzQjtBQUMxSCwyR0FBMkcsc0JBQXNCO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3REFBWTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLDBEQUFTO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRixxQkFBcUI7QUFDeEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNERBQVk7QUFDbkM7QUFDQSwyQ0FBMkMsV0FBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxXQUFXO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxXQUFXO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGdDQUFnQztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQSxtQ0FBbUMsZ0VBQWdFO0FBQ25HO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMEJBQTBCLG1FQUFtQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFTO0FBQ3JCLFlBQVkseURBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0EsdUZBQXVGLGVBQWU7QUFDdEc7QUFDQTtBQUNBLDBCQUEwQixtRUFBa0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVMsT0FBTywyREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUlBQW1JO0FBQ25JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUVBQWtCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUNBQWlDO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsbUVBQW1CO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxlQUFlO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRLGtCQUFrQixRQUFRO0FBQzdFO0FBQ0E7QUFDQSwwQ0FBMEMsUUFBUTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFFBQVE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsMERBQVMsSUFBSSxRQUFRLG9CQUFvQixrQkFBa0I7QUFDdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxtRUFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWE7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkNBQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBYTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHlEQUFhO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUyxHQUFHLGtCQUFrQjtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELGFBQWE7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtDQUFrQztBQUN0RCxpQ0FBaUMsNkVBQTZCLGtCQUFrQiwwQ0FBMEM7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlFQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkVBQTZCO0FBQ3hDO0FBQ0EscUJBQXFCLHlDQUF5QztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBEQUFTO0FBQ3BDLDJCQUEyQiwwREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFbVc7QUFDblc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xyQzBDOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLG9EQUFRO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0IsZUFBZSxVQUFVO0FBQzFGO0FBQ0E7QUFDQSx5Q0FBeUMsV0FBVztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsd0NBQXdDO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEIsZ0JBQWdCLGVBQWU7QUFDL0I7QUFDQTtBQUNBLDJCQUEyQixVQUFVLEdBQUcscUJBQXFCO0FBQzdEO0FBQ0E7QUFDQSxxQ0FBcUMsV0FBVztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixrQ0FBa0M7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRHQUE0RztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZ0JBQWdCLG1DQUFtQyxVQUFVO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVtRDtBQUNuRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4WjBGO0FBQzFDO0FBQ2E7QUFDaEM7O0FBRTdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILFdBQVc7QUFDNUg7QUFDQTtBQUNBLHlEQUF5RCxjQUFjLDRCQUE0QixjQUFjLGNBQWMsR0FBRyxlQUFlO0FBQ2pKO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQix3REFBWTtBQUN0QztBQUNBO0FBQ0EsNkJBQTZCLHlEQUFhO0FBQzFDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQyxjQUFjLHNCQUFzQixZQUFZLFVBQVU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QixFQUFFLGFBQWE7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMscUNBQXFDLElBQUksS0FBSztBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLEdBQUc7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQixHQUFHLGdCQUFnQjtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsVUFBVTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJDQUFNO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix5Q0FBeUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMscUNBQXFDO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELEtBQUs7QUFDeEQsY0FBYyxvQ0FBb0MsR0FBRyxJQUFJO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELGVBQWUsYUFBYSxvREFBb0Q7QUFDakk7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RSx3QkFBd0IsV0FBVztBQUMxRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLHdCQUF3QixhQUFhLG9EQUFvRDtBQUNwSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZUFBZSxnQ0FBZ0M7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUNBQXlDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0JBQXNCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsS0FBSztBQUM3QyxjQUFjLG9DQUFvQyxHQUFHLElBQUk7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksWUFBWTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIscUJBQXFCO0FBQ2hELElBQUksaUNBQWlDO0FBQ3JDLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFNO0FBQ3RDLDhCQUE4QiwyREFBWTtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMkRBQVk7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyREFBWTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaUVBQWtCLEtBQUssMERBQVM7QUFDcEMsSUFBSSxpRUFBa0IsS0FBSywwREFBUztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUFlO0FBQ2Y7QUFDQSw4REFBZTs7QUFFK0Q7QUFDOUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsSUFBSSxLQUFLLGNBQWM7QUFDbkQ7QUFDQTtBQUNBLHNGQUFzRixRQUFRO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELElBQUk7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTREO0FBQzVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFOK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxQkFBTTtBQUNyQixlQUFlLHFCQUFNO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNEVBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0Esd0NBQXdDLE1BQU07QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLFFBQVE7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxRQUFRLHdFQUF3RSxLQUFLOztBQUVoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsR0FBRztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsTUFBTTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGFBQWEsR0FBRyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixpQkFBaUIsSUFBSSxTQUFTLEdBQUcsU0FBUztBQUN6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZELEtBQUs7QUFDTDtBQUNBLG1CQUFtQixNQUFNLElBQUk7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksR0FBRztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYSxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHlCQUF5QjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixRQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFFBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsU0FBUztBQUNsRDtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsT0FBTztBQUMvQiw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVEsVUFBVSxTQUFTO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLEVBQUU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNmpDO0FBQzdqQzs7Ozs7Ozs7Ozs7Ozs7O0FDenZFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ3BDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGdEO0FBQ2xCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQWU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCbUU7QUFDTjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUNBQXlDLElBQUk7QUFDOUU7QUFDQSx3QkFBd0IscURBQUk7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixxREFBSSxzREFBc0QscURBQUk7QUFDbEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixVQUFVLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxREFBSTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5RjVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXFHOzs7Ozs7O1VDeExyRztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ040QztBQUNLO0FBR2pELElBQU1FLGNBQWMsR0FBRztFQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztFQUNqREMsVUFBVSxFQUFFLG9DQUFvQztFQUNoREMsU0FBUyxFQUFFLG9CQUFvQjtFQUMvQkMsYUFBYSxFQUFFLHdDQUF3QztFQUN2REMsaUJBQWlCLEVBQUUsY0FBYztFQUNqQ0MsS0FBSyxFQUFFLDJDQUEyQztFQUNsREMsYUFBYSxFQUFFO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQSxJQUFNQyxHQUFHLEdBQUdWLDJEQUFhLENBQUNFLGNBQWMsQ0FBQztBQUN6QyxJQUFNUyxTQUFTLEdBQUdWLGdFQUFZLENBQUNTLEdBQUcsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFydmlzLWFpLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9hbmFseXRpY3MvZGlzdC9lc20vaW5kZXguZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly9qYXJ2aXMtYWkvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovL2phcnZpcy1haS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvY29tcG9uZW50L2Rpc3QvZXNtL2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vamFydmlzLWFpLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zL2Rpc3QvZXNtL2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vamFydmlzLWFpLy4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9sb2dnZXIvZGlzdC9lc20vaW5kZXguZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly9qYXJ2aXMtYWkvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL3V0aWwvZGlzdC9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovL2phcnZpcy1haS8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9kaXN0L3Bvc3RpbnN0YWxsLm1qcyIsIndlYnBhY2s6Ly9qYXJ2aXMtYWkvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYW5hbHl0aWNzL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9qYXJ2aXMtYWkvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXBwL2Rpc3QvZXNtL2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9qYXJ2aXMtYWkvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL2phcnZpcy1haS8uL25vZGVfbW9kdWxlcy9pZGIvYnVpbGQvd3JhcC1pZGItdmFsdWUuanMiLCJ3ZWJwYWNrOi8vamFydmlzLWFpL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phcnZpcy1haS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFydmlzLWFpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamFydmlzLWFpL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFydmlzLWFpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFydmlzLWFpLy4vc3JjL2ZpcmViYXNlLWluaXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2dldFByb3ZpZGVyLCBnZXRBcHAsIF9yZWdpc3RlckNvbXBvbmVudCwgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgY2FsY3VsYXRlQmFja29mZk1pbGxpcywgRmlyZWJhc2VFcnJvciwgaXNJbmRleGVkREJBdmFpbGFibGUsIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUsIGlzQnJvd3NlckV4dGVuc2lvbiwgYXJlQ29va2llc0VuYWJsZWQsIGdldE1vZHVsYXJJbnN0YW5jZSwgZGVlcEVxdWFsIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGZpcmViYXNlL2NvbXBvbmVudCc7XG5pbXBvcnQgJ0BmaXJlYmFzZS9pbnN0YWxsYXRpb25zJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogVHlwZSBjb25zdGFudCBmb3IgRmlyZWJhc2UgQW5hbHl0aWNzLlxuICovXG5jb25zdCBBTkFMWVRJQ1NfVFlQRSA9ICdhbmFseXRpY3MnO1xuLy8gS2V5IHRvIGF0dGFjaCBGSUQgdG8gaW4gZ3RhZyBwYXJhbXMuXG5jb25zdCBHQV9GSURfS0VZID0gJ2ZpcmViYXNlX2lkJztcbmNvbnN0IE9SSUdJTl9LRVkgPSAnb3JpZ2luJztcbmNvbnN0IEZFVENIX1RJTUVPVVRfTUlMTElTID0gNjAgKiAxMDAwO1xuY29uc3QgRFlOQU1JQ19DT05GSUdfVVJMID0gJ2h0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlYXBpcy5jb20vdjFhbHBoYS9wcm9qZWN0cy8tL2FwcHMve2FwcC1pZH0vd2ViQ29uZmlnJztcbmNvbnN0IEdUQUdfVVJMID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZXRhZ21hbmFnZXIuY29tL2d0YWcvanMnO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcignQGZpcmViYXNlL2FuYWx5dGljcycpO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgRVJST1JTID0ge1xuICAgIFtcImFscmVhZHktZXhpc3RzXCIgLyogQW5hbHl0aWNzRXJyb3IuQUxSRUFEWV9FWElTVFMgKi9dOiAnQSBGaXJlYmFzZSBBbmFseXRpY3MgaW5zdGFuY2Ugd2l0aCB0aGUgYXBwSWQgeyRpZH0gJyArXG4gICAgICAgICcgYWxyZWFkeSBleGlzdHMuICcgK1xuICAgICAgICAnT25seSBvbmUgRmlyZWJhc2UgQW5hbHl0aWNzIGluc3RhbmNlIGNhbiBiZSBjcmVhdGVkIGZvciBlYWNoIGFwcElkLicsXG4gICAgW1wiYWxyZWFkeS1pbml0aWFsaXplZFwiIC8qIEFuYWx5dGljc0Vycm9yLkFMUkVBRFlfSU5JVElBTElaRUQgKi9dOiAnaW5pdGlhbGl6ZUFuYWx5dGljcygpIGNhbm5vdCBiZSBjYWxsZWQgYWdhaW4gd2l0aCBkaWZmZXJlbnQgb3B0aW9ucyB0aGFuIHRob3NlICcgK1xuICAgICAgICAnaXQgd2FzIGluaXRpYWxseSBjYWxsZWQgd2l0aC4gSXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aXRoIHRoZSBzYW1lIG9wdGlvbnMgdG8gJyArXG4gICAgICAgICdyZXR1cm4gdGhlIGV4aXN0aW5nIGluc3RhbmNlLCBvciBnZXRBbmFseXRpY3MoKSBjYW4gYmUgdXNlZCAnICtcbiAgICAgICAgJ3RvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgYWxyZWFkeS1pbml0aWFsaXplZCBpbnN0YW5jZS4nLFxuICAgIFtcImFscmVhZHktaW5pdGlhbGl6ZWQtc2V0dGluZ3NcIiAvKiBBbmFseXRpY3NFcnJvci5BTFJFQURZX0lOSVRJQUxJWkVEX1NFVFRJTkdTICovXTogJ0ZpcmViYXNlIEFuYWx5dGljcyBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkLicgK1xuICAgICAgICAnc2V0dGluZ3MoKSBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaW5pdGlhbGl6aW5nIGFueSBBbmFseXRpY3MgaW5zdGFuY2UnICtcbiAgICAgICAgJ29yIGl0IHdpbGwgaGF2ZSBubyBlZmZlY3QuJyxcbiAgICBbXCJpbnRlcm9wLWNvbXBvbmVudC1yZWctZmFpbGVkXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5URVJPUF9DT01QT05FTlRfUkVHX0ZBSUxFRCAqL106ICdGaXJlYmFzZSBBbmFseXRpY3MgSW50ZXJvcCBDb21wb25lbnQgZmFpbGVkIHRvIGluc3RhbnRpYXRlOiB7JHJlYXNvbn0nLFxuICAgIFtcImludmFsaWQtYW5hbHl0aWNzLWNvbnRleHRcIiAvKiBBbmFseXRpY3NFcnJvci5JTlZBTElEX0FOQUxZVElDU19DT05URVhUICovXTogJ0ZpcmViYXNlIEFuYWx5dGljcyBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgZW52aXJvbm1lbnQuICcgK1xuICAgICAgICAnV3JhcCBpbml0aWFsaXphdGlvbiBvZiBhbmFseXRpY3MgaW4gYW5hbHl0aWNzLmlzU3VwcG9ydGVkKCkgJyArXG4gICAgICAgICd0byBwcmV2ZW50IGluaXRpYWxpemF0aW9uIGluIHVuc3VwcG9ydGVkIGVudmlyb25tZW50cy4gRGV0YWlsczogeyRlcnJvckluZm99JyxcbiAgICBbXCJpbmRleGVkZGItdW5hdmFpbGFibGVcIiAvKiBBbmFseXRpY3NFcnJvci5JTkRFWEVEREJfVU5BVkFJTEFCTEUgKi9dOiAnSW5kZXhlZERCIHVuYXZhaWxhYmxlIG9yIHJlc3RyaWN0ZWQgaW4gdGhpcyBlbnZpcm9ubWVudC4gJyArXG4gICAgICAgICdXcmFwIGluaXRpYWxpemF0aW9uIG9mIGFuYWx5dGljcyBpbiBhbmFseXRpY3MuaXNTdXBwb3J0ZWQoKSAnICtcbiAgICAgICAgJ3RvIHByZXZlbnQgaW5pdGlhbGl6YXRpb24gaW4gdW5zdXBwb3J0ZWQgZW52aXJvbm1lbnRzLiBEZXRhaWxzOiB7JGVycm9ySW5mb30nLFxuICAgIFtcImZldGNoLXRocm90dGxlXCIgLyogQW5hbHl0aWNzRXJyb3IuRkVUQ0hfVEhST1RUTEUgKi9dOiAnVGhlIGNvbmZpZyBmZXRjaCByZXF1ZXN0IHRpbWVkIG91dCB3aGlsZSBpbiBhbiBleHBvbmVudGlhbCBiYWNrb2ZmIHN0YXRlLicgK1xuICAgICAgICAnIFVuaXggdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kcyB3aGVuIGZldGNoIHJlcXVlc3QgdGhyb3R0bGluZyBlbmRzOiB7JHRocm90dGxlRW5kVGltZU1pbGxpc30uJyxcbiAgICBbXCJjb25maWctZmV0Y2gtZmFpbGVkXCIgLyogQW5hbHl0aWNzRXJyb3IuQ09ORklHX0ZFVENIX0ZBSUxFRCAqL106ICdEeW5hbWljIGNvbmZpZyBmZXRjaCBmYWlsZWQ6IFt7JGh0dHBTdGF0dXN9XSB7JHJlc3BvbnNlTWVzc2FnZX0nLFxuICAgIFtcIm5vLWFwaS1rZXlcIiAvKiBBbmFseXRpY3NFcnJvci5OT19BUElfS0VZICovXTogJ1RoZSBcImFwaUtleVwiIGZpZWxkIGlzIGVtcHR5IGluIHRoZSBsb2NhbCBGaXJlYmFzZSBjb25maWcuIEZpcmViYXNlIEFuYWx5dGljcyByZXF1aXJlcyB0aGlzIGZpZWxkIHRvJyArXG4gICAgICAgICdjb250YWluIGEgdmFsaWQgQVBJIGtleS4nLFxuICAgIFtcIm5vLWFwcC1pZFwiIC8qIEFuYWx5dGljc0Vycm9yLk5PX0FQUF9JRCAqL106ICdUaGUgXCJhcHBJZFwiIGZpZWxkIGlzIGVtcHR5IGluIHRoZSBsb2NhbCBGaXJlYmFzZSBjb25maWcuIEZpcmViYXNlIEFuYWx5dGljcyByZXF1aXJlcyB0aGlzIGZpZWxkIHRvJyArXG4gICAgICAgICdjb250YWluIGEgdmFsaWQgYXBwIElELicsXG4gICAgW1wibm8tY2xpZW50LWlkXCIgLyogQW5hbHl0aWNzRXJyb3IuTk9fQ0xJRU5UX0lEICovXTogJ1RoZSBcImNsaWVudF9pZFwiIGZpZWxkIGlzIGVtcHR5LicsXG4gICAgW1wiaW52YWxpZC1ndGFnLXJlc291cmNlXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5WQUxJRF9HVEFHX1JFU09VUkNFICovXTogJ1RydXN0ZWQgVHlwZXMgZGV0ZWN0ZWQgYW4gaW52YWxpZCBndGFnIHJlc291cmNlOiB7JGd0YWdVUkx9Lidcbn07XG5jb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeSgnYW5hbHl0aWNzJywgJ0FuYWx5dGljcycsIEVSUk9SUyk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFZlcmlmaWVzIGFuZCBjcmVhdGVzIGEgVHJ1c3RlZFNjcmlwdFVSTC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlR3RhZ1RydXN0ZWRUeXBlc1NjcmlwdFVSTCh1cmwpIHtcbiAgICBpZiAoIXVybC5zdGFydHNXaXRoKEdUQUdfVVJMKSkge1xuICAgICAgICBjb25zdCBlcnIgPSBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtZ3RhZy1yZXNvdXJjZVwiIC8qIEFuYWx5dGljc0Vycm9yLklOVkFMSURfR1RBR19SRVNPVVJDRSAqLywge1xuICAgICAgICAgICAgZ3RhZ1VSTDogdXJsXG4gICAgICAgIH0pO1xuICAgICAgICBsb2dnZXIud2FybihlcnIubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbn1cbi8qKlxuICogTWFrZXNoaWZ0IHBvbHlmaWxsIGZvciBQcm9taXNlLmFsbFNldHRsZWQoKS4gUmVzb2x2ZXMgd2hlbiBhbGwgcHJvbWlzZXNcbiAqIGhhdmUgZWl0aGVyIHJlc29sdmVkIG9yIHJlamVjdGVkLlxuICpcbiAqIEBwYXJhbSBwcm9taXNlcyBBcnJheSBvZiBwcm9taXNlcyB0byB3YWl0IGZvci5cbiAqL1xuZnVuY3Rpb24gcHJvbWlzZUFsbFNldHRsZWQocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMubWFwKHByb21pc2UgPT4gcHJvbWlzZS5jYXRjaChlID0+IGUpKSk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBUcnVzdGVkVHlwZVBvbGljeSBvYmplY3QgdGhhdCBpbXBsZW1lbnRzIHRoZSBydWxlcyBwYXNzZWQgYXMgcG9saWN5T3B0aW9ucy5cbiAqXG4gKiBAcGFyYW0gcG9saWN5TmFtZSBBIHN0cmluZyBjb250YWluaW5nIHRoZSBuYW1lIG9mIHRoZSBwb2xpY3lcbiAqIEBwYXJhbSBwb2xpY3lPcHRpb25zIE9iamVjdCBjb250YWluaW5nIGltcGxlbWVudGF0aW9ucyBvZiBpbnN0YW5jZSBtZXRob2RzIGZvciBUcnVzdGVkVHlwZXNQb2xpY3ksIHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1RydXN0ZWRUeXBlUG9saWN5I2luc3RhbmNlX21ldGhvZHNcbiAqIHwgdGhlIFRydXN0ZWRUeXBlUG9saWN5IHJlZmVyZW5jZSBkb2N1bWVudGF0aW9ufS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KHBvbGljeU5hbWUsIHBvbGljeU9wdGlvbnMpIHtcbiAgICAvLyBDcmVhdGUgYSBUcnVzdGVkVHlwZXMgcG9saWN5IHRoYXQgd2UgY2FuIHVzZSBmb3IgdXBkYXRpbmcgc3JjXG4gICAgLy8gcHJvcGVydGllc1xuICAgIGxldCB0cnVzdGVkVHlwZXNQb2xpY3k7XG4gICAgaWYgKHdpbmRvdy50cnVzdGVkVHlwZXMpIHtcbiAgICAgICAgdHJ1c3RlZFR5cGVzUG9saWN5ID0gd2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kocG9saWN5TmFtZSwgcG9saWN5T3B0aW9ucyk7XG4gICAgfVxuICAgIHJldHVybiB0cnVzdGVkVHlwZXNQb2xpY3k7XG59XG4vKipcbiAqIEluc2VydHMgZ3RhZyBzY3JpcHQgdGFnIGludG8gdGhlIHBhZ2UgdG8gYXN5bmNocm9ub3VzbHkgZG93bmxvYWQgZ3RhZy5cbiAqIEBwYXJhbSBkYXRhTGF5ZXJOYW1lIE5hbWUgb2YgZGF0YWxheWVyIChtb3N0IG9mdGVuIHRoZSBkZWZhdWx0LCBcIl9kYXRhTGF5ZXJcIikuXG4gKi9cbmZ1bmN0aW9uIGluc2VydFNjcmlwdFRhZyhkYXRhTGF5ZXJOYW1lLCBtZWFzdXJlbWVudElkKSB7XG4gICAgY29uc3QgdHJ1c3RlZFR5cGVzUG9saWN5ID0gY3JlYXRlVHJ1c3RlZFR5cGVzUG9saWN5KCdmaXJlYmFzZS1qcy1zZGstcG9saWN5Jywge1xuICAgICAgICBjcmVhdGVTY3JpcHRVUkw6IGNyZWF0ZUd0YWdUcnVzdGVkVHlwZXNTY3JpcHRVUkxcbiAgICB9KTtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAvLyBXZSBhcmUgbm90IHByb3ZpZGluZyBhbiBhbmFseXRpY3NJZCBpbiB0aGUgVVJMIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBhIGBwYWdlX3ZpZXdgXG4gICAgLy8gd2l0aG91dCBmaWQuIFdlIHdpbGwgaW5pdGlhbGl6ZSBnYS1pZCB1c2luZyBndGFnIChjb25maWcpIGNvbW1hbmQgdG9nZXRoZXIgd2l0aCBmaWQuXG4gICAgY29uc3QgZ3RhZ1NjcmlwdFVSTCA9IGAke0dUQUdfVVJMfT9sPSR7ZGF0YUxheWVyTmFtZX0maWQ9JHttZWFzdXJlbWVudElkfWA7XG4gICAgc2NyaXB0LnNyYyA9IHRydXN0ZWRUeXBlc1BvbGljeVxuICAgICAgICA/IHRydXN0ZWRUeXBlc1BvbGljeSA9PT0gbnVsbCB8fCB0cnVzdGVkVHlwZXNQb2xpY3kgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRydXN0ZWRUeXBlc1BvbGljeS5jcmVhdGVTY3JpcHRVUkwoZ3RhZ1NjcmlwdFVSTClcbiAgICAgICAgOiBndGFnU2NyaXB0VVJMO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufVxuLyoqXG4gKiBHZXQgcmVmZXJlbmNlIHRvLCBvciBjcmVhdGUsIGdsb2JhbCBkYXRhbGF5ZXIuXG4gKiBAcGFyYW0gZGF0YUxheWVyTmFtZSBOYW1lIG9mIGRhdGFsYXllciAobW9zdCBvZnRlbiB0aGUgZGVmYXVsdCwgXCJfZGF0YUxheWVyXCIpLlxuICovXG5mdW5jdGlvbiBnZXRPckNyZWF0ZURhdGFMYXllcihkYXRhTGF5ZXJOYW1lKSB7XG4gICAgLy8gQ2hlY2sgZm9yIGV4aXN0aW5nIGRhdGFMYXllciBhbmQgY3JlYXRlIGlmIG5lZWRlZC5cbiAgICBsZXQgZGF0YUxheWVyID0gW107XG4gICAgaWYgKEFycmF5LmlzQXJyYXkod2luZG93W2RhdGFMYXllck5hbWVdKSkge1xuICAgICAgICBkYXRhTGF5ZXIgPSB3aW5kb3dbZGF0YUxheWVyTmFtZV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB3aW5kb3dbZGF0YUxheWVyTmFtZV0gPSBkYXRhTGF5ZXI7XG4gICAgfVxuICAgIHJldHVybiBkYXRhTGF5ZXI7XG59XG4vKipcbiAqIFdyYXBwZWQgZ3RhZyBsb2dpYyB3aGVuIGd0YWcgaXMgY2FsbGVkIHdpdGggJ2NvbmZpZycgY29tbWFuZC5cbiAqXG4gKiBAcGFyYW0gZ3RhZ0NvcmUgQmFzaWMgZ3RhZyBmdW5jdGlvbiB0aGF0IGp1c3QgYXBwZW5kcyB0byBkYXRhTGF5ZXIuXG4gKiBAcGFyYW0gaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCBNYXAgb2YgYXBwSWRzIHRvIHRoZWlyIGluaXRpYWxpemF0aW9uIHByb21pc2VzLlxuICogQHBhcmFtIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QgQXJyYXkgb2YgZHluYW1pYyBjb25maWcgZmV0Y2ggcHJvbWlzZXMuXG4gKiBAcGFyYW0gbWVhc3VyZW1lbnRJZFRvQXBwSWQgTWFwIG9mIEdBIG1lYXN1cmVtZW50SURzIHRvIGNvcnJlc3BvbmRpbmcgRmlyZWJhc2UgYXBwSWQuXG4gKiBAcGFyYW0gbWVhc3VyZW1lbnRJZCBHQSBNZWFzdXJlbWVudCBJRCB0byBzZXQgY29uZmlnIGZvci5cbiAqIEBwYXJhbSBndGFnUGFyYW1zIEd0YWcgY29uZmlnIHBhcmFtcyB0byBzZXQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGd0YWdPbkNvbmZpZyhndGFnQ29yZSwgaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCwgZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCwgbWVhc3VyZW1lbnRJZFRvQXBwSWQsIG1lYXN1cmVtZW50SWQsIGd0YWdQYXJhbXMpIHtcbiAgICAvLyBJZiBjb25maWcgaXMgYWxyZWFkeSBmZXRjaGVkLCB3ZSBrbm93IHRoZSBhcHBJZCBhbmQgY2FuIHVzZSBpdCB0byBsb29rIHVwIHdoYXQgRklEIHByb21pc2Ugd2VcbiAgICAvLy8gYXJlIHdhaXRpbmcgZm9yLCBhbmQgd2FpdCBvbmx5IG9uIHRoYXQgb25lLlxuICAgIGNvbnN0IGNvcnJlc3BvbmRpbmdBcHBJZCA9IG1lYXN1cmVtZW50SWRUb0FwcElkW21lYXN1cmVtZW50SWRdO1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChjb3JyZXNwb25kaW5nQXBwSWQpIHtcbiAgICAgICAgICAgIGF3YWl0IGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXBbY29ycmVzcG9uZGluZ0FwcElkXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIGNvbmZpZyBpcyBub3QgZmV0Y2hlZCB5ZXQsIHdhaXQgZm9yIGFsbCBjb25maWdzICh3ZSBkb24ndCBrbm93IHdoaWNoIG9uZSB3ZSBuZWVkKSBhbmRcbiAgICAgICAgICAgIC8vIGZpbmQgdGhlIGFwcElkIChpZiBhbnkpIGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBtZWFzdXJlbWVudElkLiBJZiB0aGVyZSBpcyBvbmUsIHdhaXQgb25cbiAgICAgICAgICAgIC8vIHRoYXQgYXBwSWQncyBpbml0aWFsaXphdGlvbiBwcm9taXNlLiBJZiB0aGVyZSBpcyBub25lLCBwcm9taXNlIHJlc29sdmVzIGFuZCBndGFnXG4gICAgICAgICAgICAvLyBjYWxsIGdvZXMgdGhyb3VnaC5cbiAgICAgICAgICAgIGNvbnN0IGR5bmFtaWNDb25maWdSZXN1bHRzID0gYXdhaXQgcHJvbWlzZUFsbFNldHRsZWQoZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCk7XG4gICAgICAgICAgICBjb25zdCBmb3VuZENvbmZpZyA9IGR5bmFtaWNDb25maWdSZXN1bHRzLmZpbmQoY29uZmlnID0+IGNvbmZpZy5tZWFzdXJlbWVudElkID09PSBtZWFzdXJlbWVudElkKTtcbiAgICAgICAgICAgIGlmIChmb3VuZENvbmZpZykge1xuICAgICAgICAgICAgICAgIGF3YWl0IGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXBbZm91bmRDb25maWcuYXBwSWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlKTtcbiAgICB9XG4gICAgZ3RhZ0NvcmUoXCJjb25maWdcIiAvKiBHdGFnQ29tbWFuZC5DT05GSUcgKi8sIG1lYXN1cmVtZW50SWQsIGd0YWdQYXJhbXMpO1xufVxuLyoqXG4gKiBXcmFwcGVkIGd0YWcgbG9naWMgd2hlbiBndGFnIGlzIGNhbGxlZCB3aXRoICdldmVudCcgY29tbWFuZC5cbiAqXG4gKiBAcGFyYW0gZ3RhZ0NvcmUgQmFzaWMgZ3RhZyBmdW5jdGlvbiB0aGF0IGp1c3QgYXBwZW5kcyB0byBkYXRhTGF5ZXIuXG4gKiBAcGFyYW0gaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCBNYXAgb2YgYXBwSWRzIHRvIHRoZWlyIGluaXRpYWxpemF0aW9uIHByb21pc2VzLlxuICogQHBhcmFtIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QgQXJyYXkgb2YgZHluYW1pYyBjb25maWcgZmV0Y2ggcHJvbWlzZXMuXG4gKiBAcGFyYW0gbWVhc3VyZW1lbnRJZCBHQSBNZWFzdXJlbWVudCBJRCB0byBsb2cgZXZlbnQgdG8uXG4gKiBAcGFyYW0gZ3RhZ1BhcmFtcyBQYXJhbXMgdG8gbG9nIHdpdGggdGhpcyBldmVudC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ3RhZ09uRXZlbnQoZ3RhZ0NvcmUsIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXAsIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QsIG1lYXN1cmVtZW50SWQsIGd0YWdQYXJhbXMpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlc1RvV2FpdEZvciA9IFtdO1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGEgJ3NlbmRfdG8nIHBhcmFtLCBjaGVjayBpZiBhbnkgSUQgc3BlY2lmaWVkIG1hdGNoZXNcbiAgICAgICAgLy8gYW4gaW5pdGlhbGl6ZUlkcygpIHByb21pc2Ugd2UgYXJlIHdhaXRpbmcgZm9yLlxuICAgICAgICBpZiAoZ3RhZ1BhcmFtcyAmJiBndGFnUGFyYW1zWydzZW5kX3RvJ10pIHtcbiAgICAgICAgICAgIGxldCBnYVNlbmRUb0xpc3QgPSBndGFnUGFyYW1zWydzZW5kX3RvJ107XG4gICAgICAgICAgICAvLyBNYWtlIGl0IGFuIGFycmF5IGlmIGlzIGlzbid0LCBzbyBpdCBjYW4gYmUgZGVhbHQgd2l0aCB0aGUgc2FtZSB3YXkuXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZ2FTZW5kVG9MaXN0KSkge1xuICAgICAgICAgICAgICAgIGdhU2VuZFRvTGlzdCA9IFtnYVNlbmRUb0xpc3RdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2tpbmcgJ3NlbmRfdG8nIGZpZWxkcyByZXF1aXJlcyBoYXZpbmcgYWxsIG1lYXN1cmVtZW50IElEIHJlc3VsdHMgYmFjayBmcm9tXG4gICAgICAgICAgICAvLyB0aGUgZHluYW1pYyBjb25maWcgZmV0Y2guXG4gICAgICAgICAgICBjb25zdCBkeW5hbWljQ29uZmlnUmVzdWx0cyA9IGF3YWl0IHByb21pc2VBbGxTZXR0bGVkKGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBzZW5kVG9JZCBvZiBnYVNlbmRUb0xpc3QpIHtcbiAgICAgICAgICAgICAgICAvLyBBbnkgZmV0Y2hlZCBkeW5hbWljIG1lYXN1cmVtZW50IElEIHRoYXQgbWF0Y2hlcyB0aGlzICdzZW5kX3RvJyBJRFxuICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQ29uZmlnID0gZHluYW1pY0NvbmZpZ1Jlc3VsdHMuZmluZChjb25maWcgPT4gY29uZmlnLm1lYXN1cmVtZW50SWQgPT09IHNlbmRUb0lkKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbml0aWFsaXphdGlvblByb21pc2UgPSBmb3VuZENvbmZpZyAmJiBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2ZvdW5kQ29uZmlnLmFwcElkXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbGl6YXRpb25Qcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IucHVzaChpbml0aWFsaXphdGlvblByb21pc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRm91bmQgYW4gaXRlbSBpbiAnc2VuZF90bycgdGhhdCBpcyBub3QgYXNzb2NpYXRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBkaXJlY3RseSB3aXRoIGFuIEZJRCwgcG9zc2libHkgYSBncm91cC4gIEVtcHR5IHRoaXMgYXJyYXksXG4gICAgICAgICAgICAgICAgICAgIC8vIGV4aXQgdGhlIGxvb3AgZWFybHksIGFuZCBsZXQgaXQgZ2V0IHBvcHVsYXRlZCBiZWxvdy5cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6YXRpb25Qcm9taXNlc1RvV2FpdEZvciA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVGhpcyB3aWxsIGJlIHVucG9wdWxhdGVkIGlmIHRoZXJlIHdhcyBubyAnc2VuZF90bycgZmllbGQgLCBvclxuICAgICAgICAvLyBpZiBub3QgYWxsIGVudHJpZXMgaW4gdGhlICdzZW5kX3RvJyBmaWVsZCBjb3VsZCBiZSBtYXBwZWQgdG9cbiAgICAgICAgLy8gYSBGSUQuIEluIHRoZXNlIGNhc2VzLCB3YWl0IG9uIGFsbCBwZW5kaW5nIGluaXRpYWxpemF0aW9uIHByb21pc2VzLlxuICAgICAgICBpZiAoaW5pdGlhbGl6YXRpb25Qcm9taXNlc1RvV2FpdEZvci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXMgKi9cbiAgICAgICAgICAgIGluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IgPSBPYmplY3QudmFsdWVzKGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXApO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJ1biBjb3JlIGd0YWcgZnVuY3Rpb24gd2l0aCBhcmdzIGFmdGVyIGFsbCByZWxldmFudCBpbml0aWFsaXphdGlvblxuICAgICAgICAvLyBwcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQuXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKGluaXRpYWxpemF0aW9uUHJvbWlzZXNUb1dhaXRGb3IpO1xuICAgICAgICAvLyBXb3JrYXJvdW5kIGZvciBodHRwOi8vYi8xNDEzNzA0NDkgLSB0aGlyZCBhcmd1bWVudCBjYW5ub3QgYmUgdW5kZWZpbmVkLlxuICAgICAgICBndGFnQ29yZShcImV2ZW50XCIgLyogR3RhZ0NvbW1hbmQuRVZFTlQgKi8sIG1lYXN1cmVtZW50SWQsIGd0YWdQYXJhbXMgfHwge30pO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBsb2dnZXIuZXJyb3IoZSk7XG4gICAgfVxufVxuLyoqXG4gKiBXcmFwcyBhIHN0YW5kYXJkIGd0YWcgZnVuY3Rpb24gd2l0aCBleHRyYSBjb2RlIHRvIHdhaXQgZm9yIGNvbXBsZXRpb24gb2ZcbiAqIHJlbGV2YW50IGluaXRpYWxpemF0aW9uIHByb21pc2VzIGJlZm9yZSBzZW5kaW5nIHJlcXVlc3RzLlxuICpcbiAqIEBwYXJhbSBndGFnQ29yZSBCYXNpYyBndGFnIGZ1bmN0aW9uIHRoYXQganVzdCBhcHBlbmRzIHRvIGRhdGFMYXllci5cbiAqIEBwYXJhbSBpbml0aWFsaXphdGlvblByb21pc2VzTWFwIE1hcCBvZiBhcHBJZHMgdG8gdGhlaXIgaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMuXG4gKiBAcGFyYW0gZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCBBcnJheSBvZiBkeW5hbWljIGNvbmZpZyBmZXRjaCBwcm9taXNlcy5cbiAqIEBwYXJhbSBtZWFzdXJlbWVudElkVG9BcHBJZCBNYXAgb2YgR0EgbWVhc3VyZW1lbnRJRHMgdG8gY29ycmVzcG9uZGluZyBGaXJlYmFzZSBhcHBJZC5cbiAqL1xuZnVuY3Rpb24gd3JhcEd0YWcoZ3RhZ0NvcmUsIFxuLyoqXG4gKiBBbGxvd3Mgd3JhcHBlZCBndGFnIGNhbGxzIHRvIHdhaXQgb24gd2hpY2hldmVyIGluaXRpYWxpemF0aW9uIHByb21pc2VzIGFyZSByZXF1aXJlZCxcbiAqIGRlcGVuZGluZyBvbiB0aGUgY29udGVudHMgb2YgdGhlIGd0YWcgcGFyYW1zJyBgc2VuZF90b2AgZmllbGQsIGlmIGFueS5cbiAqL1xuaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCwgXG4vKipcbiAqIFdyYXBwZWQgZ3RhZyBjYWxscyBzb21ldGltZXMgcmVxdWlyZSBhbGwgZHluYW1pYyBjb25maWcgZmV0Y2hlcyB0byBoYXZlIHJldHVybmVkXG4gKiBiZWZvcmUgZGV0ZXJtaW5pbmcgd2hhdCBpbml0aWFsaXphdGlvbiBwcm9taXNlcyAod2hpY2ggaW5jbHVkZSBGSURzKSB0byB3YWl0IGZvci5cbiAqL1xuZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCwgXG4vKipcbiAqIFdyYXBwZWQgZ3RhZyBjb25maWcgY2FsbHMgY2FuIG5hcnJvdyBkb3duIHdoaWNoIGluaXRpYWxpemF0aW9uIHByb21pc2UgKHdpdGggRklEKVxuICogdG8gd2FpdCBmb3IgaWYgdGhlIG1lYXN1cmVtZW50SWQgaXMgYWxyZWFkeSBmZXRjaGVkLCBieSBnZXR0aW5nIHRoZSBjb3JyZXNwb25kaW5nIGFwcElkLFxuICogd2hpY2ggaXMgdGhlIGtleSBmb3IgdGhlIGluaXRpYWxpemF0aW9uIHByb21pc2VzIG1hcC5cbiAqL1xubWVhc3VyZW1lbnRJZFRvQXBwSWQpIHtcbiAgICAvKipcbiAgICAgKiBXcmFwcGVyIGFyb3VuZCBndGFnIHRoYXQgZW5zdXJlcyBGSUQgaXMgc2VudCB3aXRoIGd0YWcgY2FsbHMuXG4gICAgICogQHBhcmFtIGNvbW1hbmQgR3RhZyBjb21tYW5kIHR5cGUuXG4gICAgICogQHBhcmFtIGlkT3JOYW1lT3JQYXJhbXMgTWVhc3VyZW1lbnQgSUQgaWYgY29tbWFuZCBpcyBFVkVOVC9DT05GSUcsIHBhcmFtcyBpZiBjb21tYW5kIGlzIFNFVC5cbiAgICAgKiBAcGFyYW0gZ3RhZ1BhcmFtcyBQYXJhbXMgaWYgZXZlbnQgaXMgRVZFTlQvQ09ORklHLlxuICAgICAqL1xuICAgIGFzeW5jIGZ1bmN0aW9uIGd0YWdXcmFwcGVyKGNvbW1hbmQsIC4uLmFyZ3MpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIElmIGV2ZW50LCBjaGVjayB0aGF0IHJlbGV2YW50IGluaXRpYWxpemF0aW9uIHByb21pc2VzIGhhdmUgY29tcGxldGVkLlxuICAgICAgICAgICAgaWYgKGNvbW1hbmQgPT09IFwiZXZlbnRcIiAvKiBHdGFnQ29tbWFuZC5FVkVOVCAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFttZWFzdXJlbWVudElkLCBndGFnUGFyYW1zXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgLy8gSWYgRVZFTlQsIHNlY29uZCBhcmcgbXVzdCBiZSBtZWFzdXJlbWVudElkLlxuICAgICAgICAgICAgICAgIGF3YWl0IGd0YWdPbkV2ZW50KGd0YWdDb3JlLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkLCBndGFnUGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiY29uZmlnXCIgLyogR3RhZ0NvbW1hbmQuQ09ORklHICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21lYXN1cmVtZW50SWQsIGd0YWdQYXJhbXNdID0gYXJncztcbiAgICAgICAgICAgICAgICAvLyBJZiBDT05GSUcsIHNlY29uZCBhcmcgbXVzdCBiZSBtZWFzdXJlbWVudElkLlxuICAgICAgICAgICAgICAgIGF3YWl0IGd0YWdPbkNvbmZpZyhndGFnQ29yZSwgaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcCwgZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCwgbWVhc3VyZW1lbnRJZFRvQXBwSWQsIG1lYXN1cmVtZW50SWQsIGd0YWdQYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY29tbWFuZCA9PT0gXCJjb25zZW50XCIgLyogR3RhZ0NvbW1hbmQuQ09OU0VOVCAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjb25zZW50QWN0aW9uLCBndGFnUGFyYW1zXSA9IGFyZ3M7XG4gICAgICAgICAgICAgICAgLy8gY29uc2VudEFjdGlvbiBjYW4gYmUgb25lIG9mICdkZWZhdWx0JyBvciAndXBkYXRlJy5cbiAgICAgICAgICAgICAgICBndGFnQ29yZShcImNvbnNlbnRcIiAvKiBHdGFnQ29tbWFuZC5DT05TRU5UICovLCBjb25zZW50QWN0aW9uLCBndGFnUGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbW1hbmQgPT09IFwiZ2V0XCIgLyogR3RhZ0NvbW1hbmQuR0VUICovKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW21lYXN1cmVtZW50SWQsIGZpZWxkTmFtZSwgY2FsbGJhY2tdID0gYXJncztcbiAgICAgICAgICAgICAgICBndGFnQ29yZShcImdldFwiIC8qIEd0YWdDb21tYW5kLkdFVCAqLywgbWVhc3VyZW1lbnRJZCwgZmllbGROYW1lLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb21tYW5kID09PSBcInNldFwiIC8qIEd0YWdDb21tYW5kLlNFVCAqLykge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtjdXN0b21QYXJhbXNdID0gYXJncztcbiAgICAgICAgICAgICAgICAvLyBJZiBTRVQsIHNlY29uZCBhcmcgbXVzdCBiZSBwYXJhbXMuXG4gICAgICAgICAgICAgICAgZ3RhZ0NvcmUoXCJzZXRcIiAvKiBHdGFnQ29tbWFuZC5TRVQgKi8sIGN1c3RvbVBhcmFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBndGFnQ29yZShjb21tYW5kLCAuLi5hcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmVycm9yKGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBndGFnV3JhcHBlcjtcbn1cbi8qKlxuICogQ3JlYXRlcyBnbG9iYWwgZ3RhZyBmdW5jdGlvbiBvciB3cmFwcyBleGlzdGluZyBvbmUgaWYgZm91bmQuXG4gKiBUaGlzIHdyYXBwZWQgZnVuY3Rpb24gYXR0YWNoZXMgRmlyZWJhc2UgaW5zdGFuY2UgSUQgKEZJRCkgdG8gZ3RhZyAnY29uZmlnJyBhbmRcbiAqICdldmVudCcgY2FsbHMgdGhhdCBiZWxvbmcgdG8gdGhlIEdBSUQgYXNzb2NpYXRlZCB3aXRoIHRoaXMgRmlyZWJhc2UgaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXAgTWFwIG9mIGFwcElkcyB0byB0aGVpciBpbml0aWFsaXphdGlvbiBwcm9taXNlcy5cbiAqIEBwYXJhbSBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0IEFycmF5IG9mIGR5bmFtaWMgY29uZmlnIGZldGNoIHByb21pc2VzLlxuICogQHBhcmFtIG1lYXN1cmVtZW50SWRUb0FwcElkIE1hcCBvZiBHQSBtZWFzdXJlbWVudElEcyB0byBjb3JyZXNwb25kaW5nIEZpcmViYXNlIGFwcElkLlxuICogQHBhcmFtIGRhdGFMYXllck5hbWUgTmFtZSBvZiBnbG9iYWwgR0EgZGF0YWxheWVyIGFycmF5LlxuICogQHBhcmFtIGd0YWdGdW5jdGlvbk5hbWUgTmFtZSBvZiBnbG9iYWwgZ3RhZyBmdW5jdGlvbiAoXCJndGFnXCIgaWYgbm90IHVzZXItc3BlY2lmaWVkKS5cbiAqL1xuZnVuY3Rpb24gd3JhcE9yQ3JlYXRlR3RhZyhpbml0aWFsaXphdGlvblByb21pc2VzTWFwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkVG9BcHBJZCwgZGF0YUxheWVyTmFtZSwgZ3RhZ0Z1bmN0aW9uTmFtZSkge1xuICAgIC8vIENyZWF0ZSBhIGJhc2ljIGNvcmUgZ3RhZyBmdW5jdGlvblxuICAgIGxldCBndGFnQ29yZSA9IGZ1bmN0aW9uICguLi5fYXJncykge1xuICAgICAgICAvLyBNdXN0IHB1c2ggSUFyZ3VtZW50cyBvYmplY3QsIG5vdCBhbiBhcnJheS5cbiAgICAgICAgd2luZG93W2RhdGFMYXllck5hbWVdLnB1c2goYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIC8vIFJlcGxhY2UgaXQgd2l0aCBleGlzdGluZyBvbmUgaWYgZm91bmRcbiAgICBpZiAod2luZG93W2d0YWdGdW5jdGlvbk5hbWVdICYmXG4gICAgICAgIHR5cGVvZiB3aW5kb3dbZ3RhZ0Z1bmN0aW9uTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBndGFnQ29yZSA9IHdpbmRvd1tndGFnRnVuY3Rpb25OYW1lXTtcbiAgICB9XG4gICAgd2luZG93W2d0YWdGdW5jdGlvbk5hbWVdID0gd3JhcEd0YWcoZ3RhZ0NvcmUsIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXAsIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QsIG1lYXN1cmVtZW50SWRUb0FwcElkKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBndGFnQ29yZSxcbiAgICAgICAgd3JhcHBlZEd0YWc6IHdpbmRvd1tndGFnRnVuY3Rpb25OYW1lXVxuICAgIH07XG59XG4vKipcbiAqIFJldHVybnMgdGhlIHNjcmlwdCB0YWcgaW4gdGhlIERPTSBtYXRjaGluZyBib3RoIHRoZSBndGFnIHVybCBwYXR0ZXJuXG4gKiBhbmQgdGhlIHByb3ZpZGVkIGRhdGEgbGF5ZXIgbmFtZS5cbiAqL1xuZnVuY3Rpb24gZmluZEd0YWdTY3JpcHRPblBhZ2UoZGF0YUxheWVyTmFtZSkge1xuICAgIGNvbnN0IHNjcmlwdFRhZ3MgPSB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIGZvciAoY29uc3QgdGFnIG9mIE9iamVjdC52YWx1ZXMoc2NyaXB0VGFncykpIHtcbiAgICAgICAgaWYgKHRhZy5zcmMgJiZcbiAgICAgICAgICAgIHRhZy5zcmMuaW5jbHVkZXMoR1RBR19VUkwpICYmXG4gICAgICAgICAgICB0YWcuc3JjLmluY2x1ZGVzKGRhdGFMYXllck5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFnO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBCYWNrb2ZmIGZhY3RvciBmb3IgNTAzIGVycm9ycywgd2hpY2ggd2Ugd2FudCB0byBiZSBjb25zZXJ2YXRpdmUgYWJvdXRcbiAqIHRvIGF2b2lkIG92ZXJsb2FkaW5nIHNlcnZlcnMuIEVhY2ggcmV0cnkgaW50ZXJ2YWwgd2lsbCBiZVxuICogQkFTRV9JTlRFUlZBTF9NSUxMSVMgKiBMT05HX1JFVFJZX0ZBQ1RPUiBeIHJldHJ5Q291bnQsIHNvIHRoZSBzZWNvbmQgb25lXG4gKiB3aWxsIGJlIH4zMCBzZWNvbmRzICh3aXRoIGZ1enppbmcpLlxuICovXG5jb25zdCBMT05HX1JFVFJZX0ZBQ1RPUiA9IDMwO1xuLyoqXG4gKiBCYXNlIHdhaXQgaW50ZXJ2YWwgdG8gbXVsdGlwbGllZCBieSBiYWNrb2ZmRmFjdG9yXmJhY2tvZmZDb3VudC5cbiAqL1xuY29uc3QgQkFTRV9JTlRFUlZBTF9NSUxMSVMgPSAxMDAwO1xuLyoqXG4gKiBTdHViYmFibGUgcmV0cnkgZGF0YSBzdG9yYWdlIGNsYXNzLlxuICovXG5jbGFzcyBSZXRyeURhdGEge1xuICAgIGNvbnN0cnVjdG9yKHRocm90dGxlTWV0YWRhdGEgPSB7fSwgaW50ZXJ2YWxNaWxsaXMgPSBCQVNFX0lOVEVSVkFMX01JTExJUykge1xuICAgICAgICB0aGlzLnRocm90dGxlTWV0YWRhdGEgPSB0aHJvdHRsZU1ldGFkYXRhO1xuICAgICAgICB0aGlzLmludGVydmFsTWlsbGlzID0gaW50ZXJ2YWxNaWxsaXM7XG4gICAgfVxuICAgIGdldFRocm90dGxlTWV0YWRhdGEoYXBwSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGhyb3R0bGVNZXRhZGF0YVthcHBJZF07XG4gICAgfVxuICAgIHNldFRocm90dGxlTWV0YWRhdGEoYXBwSWQsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMudGhyb3R0bGVNZXRhZGF0YVthcHBJZF0gPSBtZXRhZGF0YTtcbiAgICB9XG4gICAgZGVsZXRlVGhyb3R0bGVNZXRhZGF0YShhcHBJZCkge1xuICAgICAgICBkZWxldGUgdGhpcy50aHJvdHRsZU1ldGFkYXRhW2FwcElkXTtcbiAgICB9XG59XG5jb25zdCBkZWZhdWx0UmV0cnlEYXRhID0gbmV3IFJldHJ5RGF0YSgpO1xuLyoqXG4gKiBTZXQgR0VUIHJlcXVlc3QgaGVhZGVycy5cbiAqIEBwYXJhbSBhcGlLZXkgQXBwIEFQSSBrZXkuXG4gKi9cbmZ1bmN0aW9uIGdldEhlYWRlcnMoYXBpS2V5KSB7XG4gICAgcmV0dXJuIG5ldyBIZWFkZXJzKHtcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWdvb2ctYXBpLWtleSc6IGFwaUtleVxuICAgIH0pO1xufVxuLyoqXG4gKiBGZXRjaGVzIGR5bmFtaWMgY29uZmlnIGZyb20gYmFja2VuZC5cbiAqIEBwYXJhbSBhcHAgRmlyZWJhc2UgYXBwIHRvIGZldGNoIGNvbmZpZyBmb3IuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZldGNoRHluYW1pY0NvbmZpZyhhcHBGaWVsZHMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgeyBhcHBJZCwgYXBpS2V5IH0gPSBhcHBGaWVsZHM7XG4gICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgaGVhZGVyczogZ2V0SGVhZGVycyhhcGlLZXkpXG4gICAgfTtcbiAgICBjb25zdCBhcHBVcmwgPSBEWU5BTUlDX0NPTkZJR19VUkwucmVwbGFjZSgne2FwcC1pZH0nLCBhcHBJZCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcHBVcmwsIHJlcXVlc3QpO1xuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgIT09IDMwNCkge1xuICAgICAgICBsZXQgZXJyb3JNZXNzYWdlID0gJyc7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBUcnkgdG8gZ2V0IGFueSBlcnJvciBtZXNzYWdlIHRleHQgZnJvbSBzZXJ2ZXIgcmVzcG9uc2UuXG4gICAgICAgICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgICAgIGlmICgoX2EgPSBqc29uUmVzcG9uc2UuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0ganNvblJlc3BvbnNlLmVycm9yLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKF9pZ25vcmVkKSB7IH1cbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJjb25maWctZmV0Y2gtZmFpbGVkXCIgLyogQW5hbHl0aWNzRXJyb3IuQ09ORklHX0ZFVENIX0ZBSUxFRCAqLywge1xuICAgICAgICAgICAgaHR0cFN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICAgICAgcmVzcG9uc2VNZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG4vKipcbiAqIEZldGNoZXMgZHluYW1pYyBjb25maWcgZnJvbSBiYWNrZW5kLCByZXRyeWluZyBpZiBmYWlsZWQuXG4gKiBAcGFyYW0gYXBwIEZpcmViYXNlIGFwcCB0byBmZXRjaCBjb25maWcgZm9yLlxuICovXG5hc3luYyBmdW5jdGlvbiBmZXRjaER5bmFtaWNDb25maWdXaXRoUmV0cnkoYXBwLCBcbi8vIHJldHJ5RGF0YSBhbmQgdGltZW91dE1pbGxpcyBhcmUgcGFyYW1ldGVyaXplZCB0byBhbGxvdyBwYXNzaW5nIGEgZGlmZmVyZW50IHZhbHVlIGZvciB0ZXN0aW5nLlxucmV0cnlEYXRhID0gZGVmYXVsdFJldHJ5RGF0YSwgdGltZW91dE1pbGxpcykge1xuICAgIGNvbnN0IHsgYXBwSWQsIGFwaUtleSwgbWVhc3VyZW1lbnRJZCB9ID0gYXBwLm9wdGlvbnM7XG4gICAgaWYgKCFhcHBJZCkge1xuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vLWFwcC1pZFwiIC8qIEFuYWx5dGljc0Vycm9yLk5PX0FQUF9JRCAqLyk7XG4gICAgfVxuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIGlmIChtZWFzdXJlbWVudElkKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50SWQsXG4gICAgICAgICAgICAgICAgYXBwSWRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1hcGkta2V5XCIgLyogQW5hbHl0aWNzRXJyb3IuTk9fQVBJX0tFWSAqLyk7XG4gICAgfVxuICAgIGNvbnN0IHRocm90dGxlTWV0YWRhdGEgPSByZXRyeURhdGEuZ2V0VGhyb3R0bGVNZXRhZGF0YShhcHBJZCkgfHwge1xuICAgICAgICBiYWNrb2ZmQ291bnQ6IDAsXG4gICAgICAgIHRocm90dGxlRW5kVGltZU1pbGxpczogRGF0ZS5ub3coKVxuICAgIH07XG4gICAgY29uc3Qgc2lnbmFsID0gbmV3IEFuYWx5dGljc0Fib3J0U2lnbmFsKCk7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIE5vdGUgYSB2ZXJ5IGxvdyBkZWxheSwgZWcgPCAxMG1zLCBjYW4gZWxhcHNlIGJlZm9yZSBsaXN0ZW5lcnMgYXJlIGluaXRpYWxpemVkLlxuICAgICAgICBzaWduYWwuYWJvcnQoKTtcbiAgICB9LCB0aW1lb3V0TWlsbGlzICE9PSB1bmRlZmluZWQgPyB0aW1lb3V0TWlsbGlzIDogRkVUQ0hfVElNRU9VVF9NSUxMSVMpO1xuICAgIHJldHVybiBhdHRlbXB0RmV0Y2hEeW5hbWljQ29uZmlnV2l0aFJldHJ5KHsgYXBwSWQsIGFwaUtleSwgbWVhc3VyZW1lbnRJZCB9LCB0aHJvdHRsZU1ldGFkYXRhLCBzaWduYWwsIHJldHJ5RGF0YSk7XG59XG4vKipcbiAqIFJ1bnMgb25lIHJldHJ5IGF0dGVtcHQuXG4gKiBAcGFyYW0gYXBwRmllbGRzIE5lY2Vzc2FyeSBhcHAgY29uZmlnIGZpZWxkcy5cbiAqIEBwYXJhbSB0aHJvdHRsZU1ldGFkYXRhIE9uZ29pbmcgbWV0YWRhdGEgdG8gZGV0ZXJtaW5lIHRocm90dGxpbmcgdGltZXMuXG4gKiBAcGFyYW0gc2lnbmFsIEFib3J0IHNpZ25hbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXR0ZW1wdEZldGNoRHluYW1pY0NvbmZpZ1dpdGhSZXRyeShhcHBGaWVsZHMsIHsgdGhyb3R0bGVFbmRUaW1lTWlsbGlzLCBiYWNrb2ZmQ291bnQgfSwgc2lnbmFsLCByZXRyeURhdGEgPSBkZWZhdWx0UmV0cnlEYXRhIC8vIGZvciB0ZXN0aW5nXG4pIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgeyBhcHBJZCwgbWVhc3VyZW1lbnRJZCB9ID0gYXBwRmllbGRzO1xuICAgIC8vIFN0YXJ0cyB3aXRoIGEgKHBvdGVudGlhbGx5IHplcm8pIHRpbWVvdXQgdG8gc3VwcG9ydCByZXN1bXB0aW9uIGZyb20gc3RvcmVkIHN0YXRlLlxuICAgIC8vIEVuc3VyZXMgdGhlIHRocm90dGxlIGVuZCB0aW1lIGlzIGhvbm9yZWQgaWYgdGhlIGxhc3QgYXR0ZW1wdCB0aW1lZCBvdXQuXG4gICAgLy8gTm90ZSB0aGUgU0RLIHdpbGwgbmV2ZXIgbWFrZSBhIHJlcXVlc3QgaWYgdGhlIGZldGNoIHRpbWVvdXQgZXhwaXJlcyBhdCB0aGlzIHBvaW50LlxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNldEFib3J0YWJsZVRpbWVvdXQoc2lnbmFsLCB0aHJvdHRsZUVuZFRpbWVNaWxsaXMpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBpZiAobWVhc3VyZW1lbnRJZCkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRpbWVkIG91dCBmZXRjaGluZyB0aGlzIEZpcmViYXNlIGFwcCdzIG1lYXN1cmVtZW50IElEIGZyb20gdGhlIHNlcnZlci5gICtcbiAgICAgICAgICAgICAgICBgIEZhbGxpbmcgYmFjayB0byB0aGUgbWVhc3VyZW1lbnQgSUQgJHttZWFzdXJlbWVudElkfWAgK1xuICAgICAgICAgICAgICAgIGAgcHJvdmlkZWQgaW4gdGhlIFwibWVhc3VyZW1lbnRJZFwiIGZpZWxkIGluIHRoZSBsb2NhbCBGaXJlYmFzZSBjb25maWcuIFske2UgPT09IG51bGwgfHwgZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZS5tZXNzYWdlfV1gKTtcbiAgICAgICAgICAgIHJldHVybiB7IGFwcElkLCBtZWFzdXJlbWVudElkIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaER5bmFtaWNDb25maWcoYXBwRmllbGRzKTtcbiAgICAgICAgLy8gTm90ZSB0aGUgU0RLIG9ubHkgY2xlYXJzIHRocm90dGxlIHN0YXRlIGlmIHJlc3BvbnNlIGlzIHN1Y2Nlc3Mgb3Igbm9uLXJldHJpYWJsZS5cbiAgICAgICAgcmV0cnlEYXRhLmRlbGV0ZVRocm90dGxlTWV0YWRhdGEoYXBwSWQpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gZTtcbiAgICAgICAgaWYgKCFpc1JldHJpYWJsZUVycm9yKGVycm9yKSkge1xuICAgICAgICAgICAgcmV0cnlEYXRhLmRlbGV0ZVRocm90dGxlTWV0YWRhdGEoYXBwSWQpO1xuICAgICAgICAgICAgaWYgKG1lYXN1cmVtZW50SWQpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIud2FybihgRmFpbGVkIHRvIGZldGNoIHRoaXMgRmlyZWJhc2UgYXBwJ3MgbWVhc3VyZW1lbnQgSUQgZnJvbSB0aGUgc2VydmVyLmAgK1xuICAgICAgICAgICAgICAgICAgICBgIEZhbGxpbmcgYmFjayB0byB0aGUgbWVhc3VyZW1lbnQgSUQgJHttZWFzdXJlbWVudElkfWAgK1xuICAgICAgICAgICAgICAgICAgICBgIHByb3ZpZGVkIGluIHRoZSBcIm1lYXN1cmVtZW50SWRcIiBmaWVsZCBpbiB0aGUgbG9jYWwgRmlyZWJhc2UgY29uZmlnLiBbJHtlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubWVzc2FnZX1dYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgYXBwSWQsIG1lYXN1cmVtZW50SWQgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYmFja29mZk1pbGxpcyA9IE51bWJlcigoX2EgPSBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IuY3VzdG9tRGF0YSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmh0dHBTdGF0dXMpID09PSA1MDNcbiAgICAgICAgICAgID8gY2FsY3VsYXRlQmFja29mZk1pbGxpcyhiYWNrb2ZmQ291bnQsIHJldHJ5RGF0YS5pbnRlcnZhbE1pbGxpcywgTE9OR19SRVRSWV9GQUNUT1IpXG4gICAgICAgICAgICA6IGNhbGN1bGF0ZUJhY2tvZmZNaWxsaXMoYmFja29mZkNvdW50LCByZXRyeURhdGEuaW50ZXJ2YWxNaWxsaXMpO1xuICAgICAgICAvLyBJbmNyZW1lbnRzIGJhY2tvZmYgc3RhdGUuXG4gICAgICAgIGNvbnN0IHRocm90dGxlTWV0YWRhdGEgPSB7XG4gICAgICAgICAgICB0aHJvdHRsZUVuZFRpbWVNaWxsaXM6IERhdGUubm93KCkgKyBiYWNrb2ZmTWlsbGlzLFxuICAgICAgICAgICAgYmFja29mZkNvdW50OiBiYWNrb2ZmQ291bnQgKyAxXG4gICAgICAgIH07XG4gICAgICAgIC8vIFBlcnNpc3RzIHN0YXRlLlxuICAgICAgICByZXRyeURhdGEuc2V0VGhyb3R0bGVNZXRhZGF0YShhcHBJZCwgdGhyb3R0bGVNZXRhZGF0YSk7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgQ2FsbGluZyBhdHRlbXB0RmV0Y2ggYWdhaW4gaW4gJHtiYWNrb2ZmTWlsbGlzfSBtaWxsaXNgKTtcbiAgICAgICAgcmV0dXJuIGF0dGVtcHRGZXRjaER5bmFtaWNDb25maWdXaXRoUmV0cnkoYXBwRmllbGRzLCB0aHJvdHRsZU1ldGFkYXRhLCBzaWduYWwsIHJldHJ5RGF0YSk7XG4gICAgfVxufVxuLyoqXG4gKiBTdXBwb3J0cyB3YWl0aW5nIG9uIGEgYmFja29mZiBieTpcbiAqXG4gKiA8dWw+XG4gKiAgIDxsaT5Qcm9taXNpZnlpbmcgc2V0VGltZW91dCwgc28gd2UgY2FuIHNldCBhIHRpbWVvdXQgaW4gb3VyIFByb21pc2UgY2hhaW48L2xpPlxuICogICA8bGk+TGlzdGVuaW5nIG9uIGEgc2lnbmFsIGJ1cyBmb3IgYWJvcnQgZXZlbnRzLCBqdXN0IGxpa2UgdGhlIEZldGNoIEFQSTwvbGk+XG4gKiAgIDxsaT5GYWlsaW5nIGluIHRoZSBzYW1lIHdheSB0aGUgRmV0Y2ggQVBJIGZhaWxzLCBzbyB0aW1pbmcgb3V0IGEgbGl2ZSByZXF1ZXN0IGFuZCBhIHRocm90dGxlZFxuICogICAgICAgcmVxdWVzdCBhcHBlYXIgdGhlIHNhbWUuPC9saT5cbiAqIDwvdWw+XG4gKlxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZy5cbiAqL1xuZnVuY3Rpb24gc2V0QWJvcnRhYmxlVGltZW91dChzaWduYWwsIHRocm90dGxlRW5kVGltZU1pbGxpcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIC8vIERlcml2ZXMgYmFja29mZiBmcm9tIGdpdmVuIGVuZCB0aW1lLCBub3JtYWxpemluZyBuZWdhdGl2ZSBudW1iZXJzIHRvIHplcm8uXG4gICAgICAgIGNvbnN0IGJhY2tvZmZNaWxsaXMgPSBNYXRoLm1heCh0aHJvdHRsZUVuZFRpbWVNaWxsaXMgLSBEYXRlLm5vdygpLCAwKTtcbiAgICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQocmVzb2x2ZSwgYmFja29mZk1pbGxpcyk7XG4gICAgICAgIC8vIEFkZHMgbGlzdGVuZXIsIHJhdGhlciB0aGFuIHNldHMgb25hYm9ydCwgYmVjYXVzZSBzaWduYWwgaXMgYSBzaGFyZWQgb2JqZWN0LlxuICAgICAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcigoKSA9PiB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgcmVxdWVzdCBjb21wbGV0ZXMgYmVmb3JlIHRoaXMgdGltZW91dCwgdGhlIHJlamVjdGlvbiBoYXMgbm8gZWZmZWN0LlxuICAgICAgICAgICAgcmVqZWN0KEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZmV0Y2gtdGhyb3R0bGVcIiAvKiBBbmFseXRpY3NFcnJvci5GRVRDSF9USFJPVFRMRSAqLywge1xuICAgICAgICAgICAgICAgIHRocm90dGxlRW5kVGltZU1pbGxpc1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSB7QGxpbmsgRXJyb3J9IGluZGljYXRlcyBhIGZldGNoIHJlcXVlc3QgbWF5IHN1Y2NlZWQgbGF0ZXIuXG4gKi9cbmZ1bmN0aW9uIGlzUmV0cmlhYmxlRXJyb3IoZSkge1xuICAgIGlmICghKGUgaW5zdGFuY2VvZiBGaXJlYmFzZUVycm9yKSB8fCAhZS5jdXN0b21EYXRhKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gVXNlcyBzdHJpbmcgaW5kZXggZGVmaW5lZCBieSBFcnJvckRhdGEsIHdoaWNoIEZpcmViYXNlRXJyb3IgaW1wbGVtZW50cy5cbiAgICBjb25zdCBodHRwU3RhdHVzID0gTnVtYmVyKGUuY3VzdG9tRGF0YVsnaHR0cFN0YXR1cyddKTtcbiAgICByZXR1cm4gKGh0dHBTdGF0dXMgPT09IDQyOSB8fFxuICAgICAgICBodHRwU3RhdHVzID09PSA1MDAgfHxcbiAgICAgICAgaHR0cFN0YXR1cyA9PT0gNTAzIHx8XG4gICAgICAgIGh0dHBTdGF0dXMgPT09IDUwNCk7XG59XG4vKipcbiAqIFNoaW1zIGEgbWluaW1hbCBBYm9ydFNpZ25hbCAoY29waWVkIGZyb20gUmVtb3RlIENvbmZpZykuXG4gKlxuICogPHA+QWJvcnRDb250cm9sbGVyJ3MgQWJvcnRTaWduYWwgY29udmVuaWVudGx5IGRlY291cGxlcyBmZXRjaCB0aW1lb3V0IGxvZ2ljIGZyb20gb3RoZXIgYXNwZWN0c1xuICogb2YgbmV0d29ya2luZywgc3VjaCBhcyByZXRyaWVzLiBGaXJlYmFzZSBkb2Vzbid0IHVzZSBBYm9ydENvbnRyb2xsZXIgZW5vdWdoIHRvIGp1c3RpZnkgYVxuICogcG9seWZpbGwgcmVjb21tZW5kYXRpb24sIGxpa2Ugd2UgZG8gd2l0aCB0aGUgRmV0Y2ggQVBJLCBidXQgdGhpcyBtaW5pbWFsIHNoaW0gY2FuIGVhc2lseSBiZVxuICogc3dhcHBlZCBvdXQgaWYvd2hlbiB3ZSBkby5cbiAqL1xuY2xhc3MgQW5hbHl0aWNzQWJvcnRTaWduYWwge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgIH1cbiAgICBhZGRFdmVudExpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiBsaXN0ZW5lcigpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEV2ZW50IHBhcmFtZXRlcnMgdG8gc2V0IG9uICdndGFnJyBkdXJpbmcgaW5pdGlhbGl6YXRpb24uXG4gKi9cbmxldCBkZWZhdWx0RXZlbnRQYXJhbWV0ZXJzRm9ySW5pdDtcbi8qKlxuICogTG9ncyBhbiBhbmFseXRpY3MgZXZlbnQgdGhyb3VnaCB0aGUgRmlyZWJhc2UgU0RLLlxuICpcbiAqIEBwYXJhbSBndGFnRnVuY3Rpb24gV3JhcHBlZCBndGFnIGZ1bmN0aW9uIHRoYXQgd2FpdHMgZm9yIGZpZCB0byBiZSBzZXQgYmVmb3JlIHNlbmRpbmcgYW4gZXZlbnRcbiAqIEBwYXJhbSBldmVudE5hbWUgR29vZ2xlIEFuYWx5dGljcyBldmVudCBuYW1lLCBjaG9vc2UgZnJvbSBzdGFuZGFyZCBsaXN0IG9yIHVzZSBhIGN1c3RvbSBzdHJpbmcuXG4gKiBAcGFyYW0gZXZlbnRQYXJhbXMgQW5hbHl0aWNzIGV2ZW50IHBhcmFtZXRlcnMuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvZ0V2ZW50JDEoZ3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2UsIGV2ZW50TmFtZSwgZXZlbnRQYXJhbXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdsb2JhbCkge1xuICAgICAgICBndGFnRnVuY3Rpb24oXCJldmVudFwiIC8qIEd0YWdDb21tYW5kLkVWRU5UICovLCBldmVudE5hbWUsIGV2ZW50UGFyYW1zKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRJZCA9IGF3YWl0IGluaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBldmVudFBhcmFtcyksIHsgJ3NlbmRfdG8nOiBtZWFzdXJlbWVudElkIH0pO1xuICAgICAgICBndGFnRnVuY3Rpb24oXCJldmVudFwiIC8qIEd0YWdDb21tYW5kLkVWRU5UICovLCBldmVudE5hbWUsIHBhcmFtcyk7XG4gICAgfVxufVxuLyoqXG4gKiBTZXQgc2NyZWVuX25hbWUgcGFyYW1ldGVyIGZvciB0aGlzIEdvb2dsZSBBbmFseXRpY3MgSUQuXG4gKlxuICogQGRlcHJlY2F0ZWQgVXNlIHtAbGluayBsb2dFdmVudH0gd2l0aCBgZXZlbnROYW1lYCBhcyAnc2NyZWVuX3ZpZXcnIGFuZCBhZGQgcmVsZXZhbnQgYGV2ZW50UGFyYW1zYC5cbiAqIFNlZSB7QGxpbmsgaHR0cHM6Ly9maXJlYmFzZS5nb29nbGUuY29tL2RvY3MvYW5hbHl0aWNzL3NjcmVlbnZpZXdzIHwgVHJhY2sgU2NyZWVudmlld3N9LlxuICpcbiAqIEBwYXJhbSBndGFnRnVuY3Rpb24gV3JhcHBlZCBndGFnIGZ1bmN0aW9uIHRoYXQgd2FpdHMgZm9yIGZpZCB0byBiZSBzZXQgYmVmb3JlIHNlbmRpbmcgYW4gZXZlbnRcbiAqIEBwYXJhbSBzY3JlZW5OYW1lIFNjcmVlbiBuYW1lIHN0cmluZyB0byBzZXQuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldEN1cnJlbnRTY3JlZW4kMShndGFnRnVuY3Rpb24sIGluaXRpYWxpemF0aW9uUHJvbWlzZSwgc2NyZWVuTmFtZSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgICAgIGd0YWdGdW5jdGlvbihcInNldFwiIC8qIEd0YWdDb21tYW5kLlNFVCAqLywgeyAnc2NyZWVuX25hbWUnOiBzY3JlZW5OYW1lIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudElkID0gYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICAgICAgICBndGFnRnVuY3Rpb24oXCJjb25maWdcIiAvKiBHdGFnQ29tbWFuZC5DT05GSUcgKi8sIG1lYXN1cmVtZW50SWQsIHtcbiAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICdzY3JlZW5fbmFtZSc6IHNjcmVlbk5hbWVcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBTZXQgdXNlcl9pZCBwYXJhbWV0ZXIgZm9yIHRoaXMgR29vZ2xlIEFuYWx5dGljcyBJRC5cbiAqXG4gKiBAcGFyYW0gZ3RhZ0Z1bmN0aW9uIFdyYXBwZWQgZ3RhZyBmdW5jdGlvbiB0aGF0IHdhaXRzIGZvciBmaWQgdG8gYmUgc2V0IGJlZm9yZSBzZW5kaW5nIGFuIGV2ZW50XG4gKiBAcGFyYW0gaWQgVXNlciBJRCBzdHJpbmcgdG8gc2V0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVzZXJJZCQxKGd0YWdGdW5jdGlvbiwgaW5pdGlhbGl6YXRpb25Qcm9taXNlLCBpZCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZ2xvYmFsKSB7XG4gICAgICAgIGd0YWdGdW5jdGlvbihcInNldFwiIC8qIEd0YWdDb21tYW5kLlNFVCAqLywgeyAndXNlcl9pZCc6IGlkIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBtZWFzdXJlbWVudElkID0gYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICAgICAgICBndGFnRnVuY3Rpb24oXCJjb25maWdcIiAvKiBHdGFnQ29tbWFuZC5DT05GSUcgKi8sIG1lYXN1cmVtZW50SWQsIHtcbiAgICAgICAgICAgIHVwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICd1c2VyX2lkJzogaWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyoqXG4gKiBTZXQgYWxsIG90aGVyIHVzZXIgcHJvcGVydGllcyBvdGhlciB0aGFuIHVzZXJfaWQgYW5kIHNjcmVlbl9uYW1lLlxuICpcbiAqIEBwYXJhbSBndGFnRnVuY3Rpb24gV3JhcHBlZCBndGFnIGZ1bmN0aW9uIHRoYXQgd2FpdHMgZm9yIGZpZCB0byBiZSBzZXQgYmVmb3JlIHNlbmRpbmcgYW4gZXZlbnRcbiAqIEBwYXJhbSBwcm9wZXJ0aWVzIE1hcCBvZiB1c2VyIHByb3BlcnRpZXMgdG8gc2V0XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldFVzZXJQcm9wZXJ0aWVzJDEoZ3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2UsIHByb3BlcnRpZXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmdsb2JhbCkge1xuICAgICAgICBjb25zdCBmbGF0UHJvcGVydGllcyA9IHt9O1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKSkge1xuICAgICAgICAgICAgLy8gdXNlIGRvdCBub3RhdGlvbiBmb3IgbWVyZ2UgYmVoYXZpb3IgaW4gZ3RhZy5qc1xuICAgICAgICAgICAgZmxhdFByb3BlcnRpZXNbYHVzZXJfcHJvcGVydGllcy4ke2tleX1gXSA9IHByb3BlcnRpZXNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBndGFnRnVuY3Rpb24oXCJzZXRcIiAvKiBHdGFnQ29tbWFuZC5TRVQgKi8sIGZsYXRQcm9wZXJ0aWVzKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbWVhc3VyZW1lbnRJZCA9IGF3YWl0IGluaXRpYWxpemF0aW9uUHJvbWlzZTtcbiAgICAgICAgZ3RhZ0Z1bmN0aW9uKFwiY29uZmlnXCIgLyogR3RhZ0NvbW1hbmQuQ09ORklHICovLCBtZWFzdXJlbWVudElkLCB7XG4gICAgICAgICAgICB1cGRhdGU6IHRydWUsXG4gICAgICAgICAgICAndXNlcl9wcm9wZXJ0aWVzJzogcHJvcGVydGllc1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vKipcbiAqIFJldHJpZXZlcyBhIHVuaXF1ZSBHb29nbGUgQW5hbHl0aWNzIGlkZW50aWZpZXIgZm9yIHRoZSB3ZWIgY2xpZW50LlxuICogU2VlIHtAbGluayBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ2E0L3JlZmVyZW5jZS9jb25maWcjY2xpZW50X2lkIHwgY2xpZW50X2lkfS5cbiAqXG4gKiBAcGFyYW0gZ3RhZ0Z1bmN0aW9uIFdyYXBwZWQgZ3RhZyBmdW5jdGlvbiB0aGF0IHdhaXRzIGZvciBmaWQgdG8gYmUgc2V0IGJlZm9yZSBzZW5kaW5nIGFuIGV2ZW50XG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGludGVybmFsR2V0R29vZ2xlQW5hbHl0aWNzQ2xpZW50SWQoZ3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2UpIHtcbiAgICBjb25zdCBtZWFzdXJlbWVudElkID0gYXdhaXQgaW5pdGlhbGl6YXRpb25Qcm9taXNlO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGd0YWdGdW5jdGlvbihcImdldFwiIC8qIEd0YWdDb21tYW5kLkdFVCAqLywgbWVhc3VyZW1lbnRJZCwgJ2NsaWVudF9pZCcsIChjbGllbnRJZCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjbGllbnRJZCkge1xuICAgICAgICAgICAgICAgIHJlamVjdChFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vLWNsaWVudC1pZFwiIC8qIEFuYWx5dGljc0Vycm9yLk5PX0NMSUVOVF9JRCAqLykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShjbGllbnRJZCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLyoqXG4gKiBTZXQgd2hldGhlciBjb2xsZWN0aW9uIGlzIGVuYWJsZWQgZm9yIHRoaXMgSUQuXG4gKlxuICogQHBhcmFtIGVuYWJsZWQgSWYgdHJ1ZSwgY29sbGVjdGlvbiBpcyBlbmFibGVkIGZvciB0aGlzIElELlxuICovXG5hc3luYyBmdW5jdGlvbiBzZXRBbmFseXRpY3NDb2xsZWN0aW9uRW5hYmxlZCQxKGluaXRpYWxpemF0aW9uUHJvbWlzZSwgZW5hYmxlZCkge1xuICAgIGNvbnN0IG1lYXN1cmVtZW50SWQgPSBhd2FpdCBpbml0aWFsaXphdGlvblByb21pc2U7XG4gICAgd2luZG93W2BnYS1kaXNhYmxlLSR7bWVhc3VyZW1lbnRJZH1gXSA9ICFlbmFibGVkO1xufVxuLyoqXG4gKiBDb25zZW50IHBhcmFtZXRlcnMgdG8gZGVmYXVsdCB0byBkdXJpbmcgJ2d0YWcnIGluaXRpYWxpemF0aW9uLlxuICovXG5sZXQgZGVmYXVsdENvbnNlbnRTZXR0aW5nc0ZvckluaXQ7XG4vKipcbiAqIFNldHMgdGhlIHZhcmlhYmxlIHtAbGluayBkZWZhdWx0Q29uc2VudFNldHRpbmdzRm9ySW5pdH0gZm9yIHVzZSBpbiB0aGUgaW5pdGlhbGl6YXRpb24gb2ZcbiAqIGFuYWx5dGljcy5cbiAqXG4gKiBAcGFyYW0gY29uc2VudFNldHRpbmdzIE1hcHMgdGhlIGFwcGxpY2FibGUgZW5kIHVzZXIgY29uc2VudCBzdGF0ZSBmb3IgZ3RhZy5qcy5cbiAqL1xuZnVuY3Rpb24gX3NldENvbnNlbnREZWZhdWx0Rm9ySW5pdChjb25zZW50U2V0dGluZ3MpIHtcbiAgICBkZWZhdWx0Q29uc2VudFNldHRpbmdzRm9ySW5pdCA9IGNvbnNlbnRTZXR0aW5ncztcbn1cbi8qKlxuICogU2V0cyB0aGUgdmFyaWFibGUgYGRlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0YCBmb3IgdXNlIGluIHRoZSBpbml0aWFsaXphdGlvbiBvZlxuICogYW5hbHl0aWNzLlxuICpcbiAqIEBwYXJhbSBjdXN0b21QYXJhbXMgQW55IGN1c3RvbSBwYXJhbXMgdGhlIHVzZXIgbWF5IHBhc3MgdG8gZ3RhZy5qcy5cbiAqL1xuZnVuY3Rpb24gX3NldERlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0KGN1c3RvbVBhcmFtcykge1xuICAgIGRlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0ID0gY3VzdG9tUGFyYW1zO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gdmFsaWRhdGVJbmRleGVkREIoKSB7XG4gICAgaWYgKCFpc0luZGV4ZWREQkF2YWlsYWJsZSgpKSB7XG4gICAgICAgIGxvZ2dlci53YXJuKEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW5kZXhlZGRiLXVuYXZhaWxhYmxlXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5ERVhFRERCX1VOQVZBSUxBQkxFICovLCB7XG4gICAgICAgICAgICBlcnJvckluZm86ICdJbmRleGVkREIgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50LidcbiAgICAgICAgfSkubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW5kZXhlZGRiLXVuYXZhaWxhYmxlXCIgLyogQW5hbHl0aWNzRXJyb3IuSU5ERVhFRERCX1VOQVZBSUxBQkxFICovLCB7XG4gICAgICAgICAgICAgICAgZXJyb3JJbmZvOiBlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUudG9TdHJpbmcoKVxuICAgICAgICAgICAgfSkubWVzc2FnZSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4vKipcbiAqIEluaXRpYWxpemUgdGhlIGFuYWx5dGljcyBpbnN0YW5jZSBpbiBndGFnLmpzIGJ5IGNhbGxpbmcgY29uZmlnIGNvbW1hbmQgd2l0aCBmaWQuXG4gKlxuICogTk9URTogV2UgY29tYmluZSBhbmFseXRpY3MgaW5pdGlhbGl6YXRpb24gYW5kIHNldHRpbmcgZmlkIHRvZ2V0aGVyIGJlY2F1c2Ugd2Ugd2FudCBmaWQgdG8gYmVcbiAqIHBhcnQgb2YgdGhlIGBwYWdlX3ZpZXdgIGV2ZW50IHRoYXQncyBzZW50IGR1cmluZyB0aGUgaW5pdGlhbGl6YXRpb25cbiAqIEBwYXJhbSBhcHAgRmlyZWJhc2UgYXBwXG4gKiBAcGFyYW0gZ3RhZ0NvcmUgVGhlIGd0YWcgZnVuY3Rpb24gdGhhdCdzIG5vdCB3cmFwcGVkLlxuICogQHBhcmFtIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QgQXJyYXkgb2YgYWxsIGR5bmFtaWMgY29uZmlnIHByb21pc2VzLlxuICogQHBhcmFtIG1lYXN1cmVtZW50SWRUb0FwcElkIE1hcHMgbWVhc3VyZW1lbnRJRCB0byBhcHBJRC5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIF9GaXJlYmFzZUluc3RhbGxhdGlvbnNJbnRlcm5hbCBpbnN0YW5jZS5cbiAqXG4gKiBAcmV0dXJucyBNZWFzdXJlbWVudCBJRC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gX2luaXRpYWxpemVBbmFseXRpY3MoYXBwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkVG9BcHBJZCwgaW5zdGFsbGF0aW9ucywgZ3RhZ0NvcmUsIGRhdGFMYXllck5hbWUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZHluYW1pY0NvbmZpZ1Byb21pc2UgPSBmZXRjaER5bmFtaWNDb25maWdXaXRoUmV0cnkoYXBwKTtcbiAgICAvLyBPbmNlIGZldGNoZWQsIG1hcCBtZWFzdXJlbWVudElkcyB0byBhcHBJZCwgZm9yIGVhc2Ugb2YgbG9va3VwIGluIHdyYXBwZWQgZ3RhZyBmdW5jdGlvbi5cbiAgICBkeW5hbWljQ29uZmlnUHJvbWlzZVxuICAgICAgICAudGhlbihjb25maWcgPT4ge1xuICAgICAgICBtZWFzdXJlbWVudElkVG9BcHBJZFtjb25maWcubWVhc3VyZW1lbnRJZF0gPSBjb25maWcuYXBwSWQ7XG4gICAgICAgIGlmIChhcHAub3B0aW9ucy5tZWFzdXJlbWVudElkICYmXG4gICAgICAgICAgICBjb25maWcubWVhc3VyZW1lbnRJZCAhPT0gYXBwLm9wdGlvbnMubWVhc3VyZW1lbnRJZCkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oYFRoZSBtZWFzdXJlbWVudCBJRCBpbiB0aGUgbG9jYWwgRmlyZWJhc2UgY29uZmlnICgke2FwcC5vcHRpb25zLm1lYXN1cmVtZW50SWR9KWAgK1xuICAgICAgICAgICAgICAgIGAgZG9lcyBub3QgbWF0Y2ggdGhlIG1lYXN1cmVtZW50IElEIGZldGNoZWQgZnJvbSB0aGUgc2VydmVyICgke2NvbmZpZy5tZWFzdXJlbWVudElkfSkuYCArXG4gICAgICAgICAgICAgICAgYCBUbyBlbnN1cmUgYW5hbHl0aWNzIGV2ZW50cyBhcmUgYWx3YXlzIHNlbnQgdG8gdGhlIGNvcnJlY3QgQW5hbHl0aWNzIHByb3BlcnR5LGAgK1xuICAgICAgICAgICAgICAgIGAgdXBkYXRlIHRoZWAgK1xuICAgICAgICAgICAgICAgIGAgbWVhc3VyZW1lbnQgSUQgZmllbGQgaW4gdGhlIGxvY2FsIGNvbmZpZyBvciByZW1vdmUgaXQgZnJvbSB0aGUgbG9jYWwgY29uZmlnLmApO1xuICAgICAgICB9XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4gbG9nZ2VyLmVycm9yKGUpKTtcbiAgICAvLyBBZGQgdG8gbGlzdCB0byB0cmFjayBzdGF0ZSBvZiBhbGwgZHluYW1pYyBjb25maWcgcHJvbWlzZXMuXG4gICAgZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdC5wdXNoKGR5bmFtaWNDb25maWdQcm9taXNlKTtcbiAgICBjb25zdCBmaWRQcm9taXNlID0gdmFsaWRhdGVJbmRleGVkREIoKS50aGVuKGVudklzVmFsaWQgPT4ge1xuICAgICAgICBpZiAoZW52SXNWYWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbGxhdGlvbnMuZ2V0SWQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBbZHluYW1pY0NvbmZpZywgZmlkXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgZHluYW1pY0NvbmZpZ1Byb21pc2UsXG4gICAgICAgIGZpZFByb21pc2VcbiAgICBdKTtcbiAgICAvLyBEZXRlY3QgaWYgdXNlciBoYXMgYWxyZWFkeSBwdXQgdGhlIGd0YWcgPHNjcmlwdD4gdGFnIG9uIHRoaXMgcGFnZSB3aXRoIHRoZSBwYXNzZWQgaW5cbiAgICAvLyBkYXRhIGxheWVyIG5hbWUuXG4gICAgaWYgKCFmaW5kR3RhZ1NjcmlwdE9uUGFnZShkYXRhTGF5ZXJOYW1lKSkge1xuICAgICAgICBpbnNlcnRTY3JpcHRUYWcoZGF0YUxheWVyTmFtZSwgZHluYW1pY0NvbmZpZy5tZWFzdXJlbWVudElkKTtcbiAgICB9XG4gICAgLy8gRGV0ZWN0cyBpZiB0aGVyZSBhcmUgY29uc2VudCBzZXR0aW5ncyB0aGF0IG5lZWQgdG8gYmUgY29uZmlndXJlZC5cbiAgICBpZiAoZGVmYXVsdENvbnNlbnRTZXR0aW5nc0ZvckluaXQpIHtcbiAgICAgICAgZ3RhZ0NvcmUoXCJjb25zZW50XCIgLyogR3RhZ0NvbW1hbmQuQ09OU0VOVCAqLywgJ2RlZmF1bHQnLCBkZWZhdWx0Q29uc2VudFNldHRpbmdzRm9ySW5pdCk7XG4gICAgICAgIF9zZXRDb25zZW50RGVmYXVsdEZvckluaXQodW5kZWZpbmVkKTtcbiAgICB9XG4gICAgLy8gVGhpcyBjb21tYW5kIGluaXRpYWxpemVzIGd0YWcuanMgYW5kIG9ubHkgbmVlZHMgdG8gYmUgY2FsbGVkIG9uY2UgZm9yIHRoZSBlbnRpcmUgd2ViIGFwcCxcbiAgICAvLyBidXQgc2luY2UgaXQgaXMgaWRlbXBvdGVudCwgd2UgY2FuIGNhbGwgaXQgbXVsdGlwbGUgdGltZXMuXG4gICAgLy8gV2Uga2VlcCBpdCB0b2dldGhlciB3aXRoIG90aGVyIGluaXRpYWxpemF0aW9uIGxvZ2ljIGZvciBiZXR0ZXIgY29kZSBzdHJ1Y3R1cmUuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBndGFnQ29yZSgnanMnLCBuZXcgRGF0ZSgpKTtcbiAgICAvLyBVc2VyIGNvbmZpZyBhZGRlZCBmaXJzdC4gV2UgZG9uJ3Qgd2FudCB1c2VycyB0byBhY2NpZGVudGFsbHkgb3ZlcndyaXRlXG4gICAgLy8gYmFzZSBGaXJlYmFzZSBjb25maWcgcHJvcGVydGllcy5cbiAgICBjb25zdCBjb25maWdQcm9wZXJ0aWVzID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmNvbmZpZykgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge307XG4gICAgLy8gZ3VhcmQgYWdhaW5zdCBkZXZlbG9wZXJzIGFjY2lkZW50YWxseSBzZXR0aW5nIHByb3BlcnRpZXMgd2l0aCBwcmVmaXggYGZpcmViYXNlX2BcbiAgICBjb25maWdQcm9wZXJ0aWVzW09SSUdJTl9LRVldID0gJ2ZpcmViYXNlJztcbiAgICBjb25maWdQcm9wZXJ0aWVzLnVwZGF0ZSA9IHRydWU7XG4gICAgaWYgKGZpZCAhPSBudWxsKSB7XG4gICAgICAgIGNvbmZpZ1Byb3BlcnRpZXNbR0FfRklEX0tFWV0gPSBmaWQ7XG4gICAgfVxuICAgIC8vIEl0IHNob3VsZCBiZSB0aGUgZmlyc3QgY29uZmlnIGNvbW1hbmQgY2FsbGVkIG9uIHRoaXMgR0EtSURcbiAgICAvLyBJbml0aWFsaXplIHRoaXMgR0EtSUQgYW5kIHNldCBGSUQgb24gaXQgdXNpbmcgdGhlIGd0YWcgY29uZmlnIEFQSS5cbiAgICAvLyBOb3RlOiBUaGlzIHdpbGwgdHJpZ2dlciBhIHBhZ2VfdmlldyBldmVudCB1bmxlc3MgJ3NlbmRfcGFnZV92aWV3JyBpcyBzZXQgdG8gZmFsc2UgaW5cbiAgICAvLyBgY29uZmlnUHJvcGVydGllc2AuXG4gICAgZ3RhZ0NvcmUoXCJjb25maWdcIiAvKiBHdGFnQ29tbWFuZC5DT05GSUcgKi8sIGR5bmFtaWNDb25maWcubWVhc3VyZW1lbnRJZCwgY29uZmlnUHJvcGVydGllcyk7XG4gICAgLy8gRGV0ZWN0cyBpZiB0aGVyZSBpcyBkYXRhIHRoYXQgd2lsbCBiZSBzZXQgb24gZXZlcnkgZXZlbnQgbG9nZ2VkIGZyb20gdGhlIFNESy5cbiAgICBpZiAoZGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQpIHtcbiAgICAgICAgZ3RhZ0NvcmUoXCJzZXRcIiAvKiBHdGFnQ29tbWFuZC5TRVQgKi8sIGRlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0KTtcbiAgICAgICAgX3NldERlZmF1bHRFdmVudFBhcmFtZXRlcnNGb3JJbml0KHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHJldHVybiBkeW5hbWljQ29uZmlnLm1lYXN1cmVtZW50SWQ7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEFuYWx5dGljcyBTZXJ2aWNlIGNsYXNzLlxuICovXG5jbGFzcyBBbmFseXRpY3NTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihhcHApIHtcbiAgICAgICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgfVxuICAgIF9kZWxldGUoKSB7XG4gICAgICAgIGRlbGV0ZSBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW3RoaXMuYXBwLm9wdGlvbnMuYXBwSWRdO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgfVxufVxuLyoqXG4gKiBNYXBzIGFwcElkIHRvIGZ1bGwgaW5pdGlhbGl6YXRpb24gcHJvbWlzZS4gV3JhcHBlZCBndGFnIGNhbGxzIG11c3Qgd2FpdCBvblxuICogYWxsIG9yIHNvbWUgb2YgdGhlc2UsIGRlcGVuZGluZyBvbiB0aGUgY2FsbCdzIGBzZW5kX3RvYCBwYXJhbSBhbmQgdGhlIHN0YXR1c1xuICogb2YgdGhlIGR5bmFtaWMgY29uZmlnIGZldGNoZXMgKHNlZSBiZWxvdykuXG4gKi9cbmxldCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwID0ge307XG4vKipcbiAqIExpc3Qgb2YgZHluYW1pYyBjb25maWcgZmV0Y2ggcHJvbWlzZXMuIEluIGNlcnRhaW4gY2FzZXMsIHdyYXBwZWQgZ3RhZyBjYWxsc1xuICogd2FpdCBvbiBhbGwgdGhlc2UgdG8gYmUgY29tcGxldGUgaW4gb3JkZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNhbiBzZWxlY3RpdmVseVxuICogd2FpdCBmb3Igb25seSBjZXJ0YWluIGluaXRpYWxpemF0aW9uIChGSUQpIHByb21pc2VzIG9yIGlmIGl0IG11c3Qgd2FpdCBmb3IgYWxsLlxuICovXG5sZXQgZHluYW1pY0NvbmZpZ1Byb21pc2VzTGlzdCA9IFtdO1xuLyoqXG4gKiBNYXBzIGZldGNoZWQgbWVhc3VyZW1lbnRJZHMgdG8gYXBwSWQuIFBvcHVsYXRlZCB3aGVuIHRoZSBhcHAncyBkeW5hbWljIGNvbmZpZ1xuICogZmV0Y2ggY29tcGxldGVzLiBJZiBhbHJlYWR5IHBvcHVsYXRlZCwgZ3RhZyBjb25maWcgY2FsbHMgY2FuIHVzZSB0aGlzIHRvXG4gKiBzZWxlY3RpdmVseSB3YWl0IGZvciBvbmx5IHRoaXMgYXBwJ3MgaW5pdGlhbGl6YXRpb24gcHJvbWlzZSAoRklEKSBpbnN0ZWFkIG9mIGFsbFxuICogaW5pdGlhbGl6YXRpb24gcHJvbWlzZXMuXG4gKi9cbmNvbnN0IG1lYXN1cmVtZW50SWRUb0FwcElkID0ge307XG4vKipcbiAqIE5hbWUgZm9yIHdpbmRvdyBnbG9iYWwgZGF0YSBsYXllciBhcnJheSB1c2VkIGJ5IEdBOiBkZWZhdWx0cyB0byAnZGF0YUxheWVyJy5cbiAqL1xubGV0IGRhdGFMYXllck5hbWUgPSAnZGF0YUxheWVyJztcbi8qKlxuICogTmFtZSBmb3Igd2luZG93IGdsb2JhbCBndGFnIGZ1bmN0aW9uIHVzZWQgYnkgR0E6IGRlZmF1bHRzIHRvICdndGFnJy5cbiAqL1xubGV0IGd0YWdOYW1lID0gJ2d0YWcnO1xuLyoqXG4gKiBSZXByb2R1Y3Rpb24gb2Ygc3RhbmRhcmQgZ3RhZyBmdW5jdGlvbiBvciByZWZlcmVuY2UgdG8gZXhpc3RpbmdcbiAqIGd0YWcgZnVuY3Rpb24gb24gd2luZG93IG9iamVjdC5cbiAqL1xubGV0IGd0YWdDb3JlRnVuY3Rpb247XG4vKipcbiAqIFdyYXBwZXIgYXJvdW5kIGd0YWcgZnVuY3Rpb24gdGhhdCBlbnN1cmVzIEZJRCBpcyBzZW50IHdpdGggYWxsXG4gKiByZWxldmFudCBldmVudCBhbmQgY29uZmlnIGNhbGxzLlxuICovXG5sZXQgd3JhcHBlZEd0YWdGdW5jdGlvbjtcbi8qKlxuICogRmxhZyB0byBlbnN1cmUgcGFnZSBpbml0aWFsaXphdGlvbiBzdGVwcyAoY3JlYXRpb24gb3Igd3JhcHBpbmcgb2ZcbiAqIGRhdGFMYXllciBhbmQgZ3RhZyBzY3JpcHQpIGFyZSBvbmx5IHJ1biBvbmNlIHBlciBwYWdlIGxvYWQuXG4gKi9cbmxldCBnbG9iYWxJbml0RG9uZSA9IGZhbHNlO1xuLyoqXG4gKiBDb25maWd1cmVzIEZpcmViYXNlIEFuYWx5dGljcyB0byB1c2UgY3VzdG9tIGBndGFnYCBvciBgZGF0YUxheWVyYCBuYW1lcy5cbiAqIEludGVuZGVkIHRvIGJlIHVzZWQgaWYgYGd0YWcuanNgIHNjcmlwdCBoYXMgYmVlbiBpbnN0YWxsZWQgb25cbiAqIHRoaXMgcGFnZSBpbmRlcGVuZGVudGx5IG9mIEZpcmViYXNlIEFuYWx5dGljcywgYW5kIGlzIHVzaW5nIG5vbi1kZWZhdWx0XG4gKiBuYW1lcyBmb3IgZWl0aGVyIHRoZSBgZ3RhZ2AgZnVuY3Rpb24gb3IgZm9yIGBkYXRhTGF5ZXJgLlxuICogTXVzdCBiZSBjYWxsZWQgYmVmb3JlIGNhbGxpbmcgYGdldEFuYWx5dGljcygpYCBvciBpdCB3b24ndFxuICogaGF2ZSBhbnkgZWZmZWN0LlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gb3B0aW9ucyAtIEN1c3RvbSBndGFnIGFuZCBkYXRhTGF5ZXIgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIHNldHRpbmdzKG9wdGlvbnMpIHtcbiAgICBpZiAoZ2xvYmFsSW5pdERvbmUpIHtcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJhbHJlYWR5LWluaXRpYWxpemVkXCIgLyogQW5hbHl0aWNzRXJyb3IuQUxSRUFEWV9JTklUSUFMSVpFRCAqLyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRhdGFMYXllck5hbWUpIHtcbiAgICAgICAgZGF0YUxheWVyTmFtZSA9IG9wdGlvbnMuZGF0YUxheWVyTmFtZTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuZ3RhZ05hbWUpIHtcbiAgICAgICAgZ3RhZ05hbWUgPSBvcHRpb25zLmd0YWdOYW1lO1xuICAgIH1cbn1cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIG5vIGVudmlyb25tZW50IG1pc21hdGNoIGlzIGZvdW5kLlxuICogSWYgZW52aXJvbm1lbnQgbWlzbWF0Y2hlcyBhcmUgZm91bmQsIHRocm93cyBhbiBJTlZBTElEX0FOQUxZVElDU19DT05URVhUXG4gKiBlcnJvciB0aGF0IGFsc28gbGlzdHMgZGV0YWlscyBmb3IgZWFjaCBtaXNtYXRjaCBmb3VuZC5cbiAqL1xuZnVuY3Rpb24gd2Fybk9uQnJvd3NlckNvbnRleHRNaXNtYXRjaCgpIHtcbiAgICBjb25zdCBtaXNtYXRjaGVkRW52TWVzc2FnZXMgPSBbXTtcbiAgICBpZiAoaXNCcm93c2VyRXh0ZW5zaW9uKCkpIHtcbiAgICAgICAgbWlzbWF0Y2hlZEVudk1lc3NhZ2VzLnB1c2goJ1RoaXMgaXMgYSBicm93c2VyIGV4dGVuc2lvbiBlbnZpcm9ubWVudC4nKTtcbiAgICB9XG4gICAgaWYgKCFhcmVDb29raWVzRW5hYmxlZCgpKSB7XG4gICAgICAgIG1pc21hdGNoZWRFbnZNZXNzYWdlcy5wdXNoKCdDb29raWVzIGFyZSBub3QgYXZhaWxhYmxlLicpO1xuICAgIH1cbiAgICBpZiAobWlzbWF0Y2hlZEVudk1lc3NhZ2VzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IG1pc21hdGNoZWRFbnZNZXNzYWdlc1xuICAgICAgICAgICAgLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IGAoJHtpbmRleCArIDF9KSAke21lc3NhZ2V9YClcbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgIGNvbnN0IGVyciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZC1hbmFseXRpY3MtY29udGV4dFwiIC8qIEFuYWx5dGljc0Vycm9yLklOVkFMSURfQU5BTFlUSUNTX0NPTlRFWFQgKi8sIHtcbiAgICAgICAgICAgIGVycm9ySW5mbzogZGV0YWlsc1xuICAgICAgICB9KTtcbiAgICAgICAgbG9nZ2VyLndhcm4oZXJyLm1lc3NhZ2UpO1xuICAgIH1cbn1cbi8qKlxuICogQW5hbHl0aWNzIGluc3RhbmNlIGZhY3RvcnkuXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gZmFjdG9yeShhcHAsIGluc3RhbGxhdGlvbnMsIG9wdGlvbnMpIHtcbiAgICB3YXJuT25Ccm93c2VyQ29udGV4dE1pc21hdGNoKCk7XG4gICAgY29uc3QgYXBwSWQgPSBhcHAub3B0aW9ucy5hcHBJZDtcbiAgICBpZiAoIWFwcElkKSB7XG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tYXBwLWlkXCIgLyogQW5hbHl0aWNzRXJyb3IuTk9fQVBQX0lEICovKTtcbiAgICB9XG4gICAgaWYgKCFhcHAub3B0aW9ucy5hcGlLZXkpIHtcbiAgICAgICAgaWYgKGFwcC5vcHRpb25zLm1lYXN1cmVtZW50SWQpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGBUaGUgXCJhcGlLZXlcIiBmaWVsZCBpcyBlbXB0eSBpbiB0aGUgbG9jYWwgRmlyZWJhc2UgY29uZmlnLiBUaGlzIGlzIG5lZWRlZCB0byBmZXRjaCB0aGUgbGF0ZXN0YCArXG4gICAgICAgICAgICAgICAgYCBtZWFzdXJlbWVudCBJRCBmb3IgdGhpcyBGaXJlYmFzZSBhcHAuIEZhbGxpbmcgYmFjayB0byB0aGUgbWVhc3VyZW1lbnQgSUQgJHthcHAub3B0aW9ucy5tZWFzdXJlbWVudElkfWAgK1xuICAgICAgICAgICAgICAgIGAgcHJvdmlkZWQgaW4gdGhlIFwibWVhc3VyZW1lbnRJZFwiIGZpZWxkIGluIHRoZSBsb2NhbCBGaXJlYmFzZSBjb25maWcuYCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vLWFwaS1rZXlcIiAvKiBBbmFseXRpY3NFcnJvci5OT19BUElfS0VZICovKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcFthcHBJZF0gIT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFscmVhZHktZXhpc3RzXCIgLyogQW5hbHl0aWNzRXJyb3IuQUxSRUFEWV9FWElTVFMgKi8sIHtcbiAgICAgICAgICAgIGlkOiBhcHBJZFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKCFnbG9iYWxJbml0RG9uZSkge1xuICAgICAgICAvLyBTdGVwcyBoZXJlIHNob3VsZCBvbmx5IGJlIGRvbmUgb25jZSBwZXIgcGFnZTogY3JlYXRpb24gb3Igd3JhcHBpbmdcbiAgICAgICAgLy8gb2YgZGF0YUxheWVyIGFuZCBnbG9iYWwgZ3RhZyBmdW5jdGlvbi5cbiAgICAgICAgZ2V0T3JDcmVhdGVEYXRhTGF5ZXIoZGF0YUxheWVyTmFtZSk7XG4gICAgICAgIGNvbnN0IHsgd3JhcHBlZEd0YWcsIGd0YWdDb3JlIH0gPSB3cmFwT3JDcmVhdGVHdGFnKGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXAsIGR5bmFtaWNDb25maWdQcm9taXNlc0xpc3QsIG1lYXN1cmVtZW50SWRUb0FwcElkLCBkYXRhTGF5ZXJOYW1lLCBndGFnTmFtZSk7XG4gICAgICAgIHdyYXBwZWRHdGFnRnVuY3Rpb24gPSB3cmFwcGVkR3RhZztcbiAgICAgICAgZ3RhZ0NvcmVGdW5jdGlvbiA9IGd0YWdDb3JlO1xuICAgICAgICBnbG9iYWxJbml0RG9uZSA9IHRydWU7XG4gICAgfVxuICAgIC8vIEFzeW5jIGJ1dCBub24tYmxvY2tpbmcuXG4gICAgLy8gVGhpcyBtYXAgcmVmbGVjdHMgdGhlIGNvbXBsZXRpb24gc3RhdGUgb2YgYWxsIHByb21pc2VzIGZvciBlYWNoIGFwcElkLlxuICAgIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXBbYXBwSWRdID0gX2luaXRpYWxpemVBbmFseXRpY3MoYXBwLCBkeW5hbWljQ29uZmlnUHJvbWlzZXNMaXN0LCBtZWFzdXJlbWVudElkVG9BcHBJZCwgaW5zdGFsbGF0aW9ucywgZ3RhZ0NvcmVGdW5jdGlvbiwgZGF0YUxheWVyTmFtZSwgb3B0aW9ucyk7XG4gICAgY29uc3QgYW5hbHl0aWNzSW5zdGFuY2UgPSBuZXcgQW5hbHl0aWNzU2VydmljZShhcHApO1xuICAgIHJldHVybiBhbmFseXRpY3NJbnN0YW5jZTtcbn1cblxuLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueSAqL1xuLyoqXG4gKiBSZXR1cm5zIGFuIHtAbGluayBBbmFseXRpY3N9IGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gYXBwLlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSB0byB1c2UuXG4gKi9cbmZ1bmN0aW9uIGdldEFuYWx5dGljcyhhcHAgPSBnZXRBcHAoKSkge1xuICAgIGFwcCA9IGdldE1vZHVsYXJJbnN0YW5jZShhcHApO1xuICAgIC8vIERlcGVuZGVuY2llc1xuICAgIGNvbnN0IGFuYWx5dGljc1Byb3ZpZGVyID0gX2dldFByb3ZpZGVyKGFwcCwgQU5BTFlUSUNTX1RZUEUpO1xuICAgIGlmIChhbmFseXRpY3NQcm92aWRlci5pc0luaXRpYWxpemVkKCkpIHtcbiAgICAgICAgcmV0dXJuIGFuYWx5dGljc1Byb3ZpZGVyLmdldEltbWVkaWF0ZSgpO1xuICAgIH1cbiAgICByZXR1cm4gaW5pdGlhbGl6ZUFuYWx5dGljcyhhcHApO1xufVxuLyoqXG4gKiBSZXR1cm5zIGFuIHtAbGluayBBbmFseXRpY3N9IGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gYXBwLlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSB0byB1c2UuXG4gKi9cbmZ1bmN0aW9uIGluaXRpYWxpemVBbmFseXRpY3MoYXBwLCBvcHRpb25zID0ge30pIHtcbiAgICAvLyBEZXBlbmRlbmNpZXNcbiAgICBjb25zdCBhbmFseXRpY3NQcm92aWRlciA9IF9nZXRQcm92aWRlcihhcHAsIEFOQUxZVElDU19UWVBFKTtcbiAgICBpZiAoYW5hbHl0aWNzUHJvdmlkZXIuaXNJbml0aWFsaXplZCgpKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSW5zdGFuY2UgPSBhbmFseXRpY3NQcm92aWRlci5nZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgaWYgKGRlZXBFcXVhbChvcHRpb25zLCBhbmFseXRpY3NQcm92aWRlci5nZXRPcHRpb25zKCkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdJbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYWxyZWFkeS1pbml0aWFsaXplZFwiIC8qIEFuYWx5dGljc0Vycm9yLkFMUkVBRFlfSU5JVElBTElaRUQgKi8pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGFuYWx5dGljc0luc3RhbmNlID0gYW5hbHl0aWNzUHJvdmlkZXIuaW5pdGlhbGl6ZSh7IG9wdGlvbnMgfSk7XG4gICAgcmV0dXJuIGFuYWx5dGljc0luc3RhbmNlO1xufVxuLyoqXG4gKiBUaGlzIGlzIGEgcHVibGljIHN0YXRpYyBtZXRob2QgcHJvdmlkZWQgdG8gdXNlcnMgdGhhdCB3cmFwcyBmb3VyIGRpZmZlcmVudCBjaGVja3M6XG4gKlxuICogMS4gQ2hlY2sgaWYgaXQncyBub3QgYSBicm93c2VyIGV4dGVuc2lvbiBlbnZpcm9ubWVudC5cbiAqIDIuIENoZWNrIGlmIGNvb2tpZXMgYXJlIGVuYWJsZWQgaW4gY3VycmVudCBicm93c2VyLlxuICogMy4gQ2hlY2sgaWYgSW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAqIDQuIENoZWNrIGlmIHRoZSBjdXJyZW50IGJyb3dzZXIgY29udGV4dCBpcyB2YWxpZCBmb3IgdXNpbmcgYEluZGV4ZWREQi5vcGVuKClgLlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGlzU3VwcG9ydGVkKCkge1xuICAgIGlmIChpc0Jyb3dzZXJFeHRlbnNpb24oKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghYXJlQ29va2llc0VuYWJsZWQoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghaXNJbmRleGVkREJBdmFpbGFibGUoKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGlzREJPcGVuYWJsZSA9IGF3YWl0IHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKTtcbiAgICAgICAgcmV0dXJuIGlzREJPcGVuYWJsZTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIFVzZSBndGFnIGBjb25maWdgIGNvbW1hbmQgdG8gc2V0IGBzY3JlZW5fbmFtZWAuXG4gKlxuICogQHB1YmxpY1xuICpcbiAqIEBkZXByZWNhdGVkIFVzZSB7QGxpbmsgbG9nRXZlbnR9IHdpdGggYGV2ZW50TmFtZWAgYXMgJ3NjcmVlbl92aWV3JyBhbmQgYWRkIHJlbGV2YW50IGBldmVudFBhcmFtc2AuXG4gKiBTZWUge0BsaW5rIGh0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL2FuYWx5dGljcy9zY3JlZW52aWV3cyB8IFRyYWNrIFNjcmVlbnZpZXdzfS5cbiAqXG4gKiBAcGFyYW0gYW5hbHl0aWNzSW5zdGFuY2UgLSBUaGUge0BsaW5rIEFuYWx5dGljc30gaW5zdGFuY2UuXG4gKiBAcGFyYW0gc2NyZWVuTmFtZSAtIFNjcmVlbiBuYW1lIHRvIHNldC5cbiAqL1xuZnVuY3Rpb24gc2V0Q3VycmVudFNjcmVlbihhbmFseXRpY3NJbnN0YW5jZSwgc2NyZWVuTmFtZSwgb3B0aW9ucykge1xuICAgIGFuYWx5dGljc0luc3RhbmNlID0gZ2V0TW9kdWxhckluc3RhbmNlKGFuYWx5dGljc0luc3RhbmNlKTtcbiAgICBzZXRDdXJyZW50U2NyZWVuJDEod3JhcHBlZEd0YWdGdW5jdGlvbiwgaW5pdGlhbGl6YXRpb25Qcm9taXNlc01hcFthbmFseXRpY3NJbnN0YW5jZS5hcHAub3B0aW9ucy5hcHBJZF0sIHNjcmVlbk5hbWUsIG9wdGlvbnMpLmNhdGNoKGUgPT4gbG9nZ2VyLmVycm9yKGUpKTtcbn1cbi8qKlxuICogUmV0cmlldmVzIGEgdW5pcXVlIEdvb2dsZSBBbmFseXRpY3MgaWRlbnRpZmllciBmb3IgdGhlIHdlYiBjbGllbnQuXG4gKiBTZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9nYTQvcmVmZXJlbmNlL2NvbmZpZyNjbGllbnRfaWQgfCBjbGllbnRfaWR9LlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSB0byB1c2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldEdvb2dsZUFuYWx5dGljc0NsaWVudElkKGFuYWx5dGljc0luc3RhbmNlKSB7XG4gICAgYW5hbHl0aWNzSW5zdGFuY2UgPSBnZXRNb2R1bGFySW5zdGFuY2UoYW5hbHl0aWNzSW5zdGFuY2UpO1xuICAgIHJldHVybiBpbnRlcm5hbEdldEdvb2dsZUFuYWx5dGljc0NsaWVudElkKHdyYXBwZWRHdGFnRnVuY3Rpb24sIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXBbYW5hbHl0aWNzSW5zdGFuY2UuYXBwLm9wdGlvbnMuYXBwSWRdKTtcbn1cbi8qKlxuICogVXNlIGd0YWcgYGNvbmZpZ2AgY29tbWFuZCB0byBzZXQgYHVzZXJfaWRgLlxuICpcbiAqIEBwdWJsaWNcbiAqXG4gKiBAcGFyYW0gYW5hbHl0aWNzSW5zdGFuY2UgLSBUaGUge0BsaW5rIEFuYWx5dGljc30gaW5zdGFuY2UuXG4gKiBAcGFyYW0gaWQgLSBVc2VyIElEIHRvIHNldC5cbiAqL1xuZnVuY3Rpb24gc2V0VXNlcklkKGFuYWx5dGljc0luc3RhbmNlLCBpZCwgb3B0aW9ucykge1xuICAgIGFuYWx5dGljc0luc3RhbmNlID0gZ2V0TW9kdWxhckluc3RhbmNlKGFuYWx5dGljc0luc3RhbmNlKTtcbiAgICBzZXRVc2VySWQkMSh3cmFwcGVkR3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FuYWx5dGljc0luc3RhbmNlLmFwcC5vcHRpb25zLmFwcElkXSwgaWQsIG9wdGlvbnMpLmNhdGNoKGUgPT4gbG9nZ2VyLmVycm9yKGUpKTtcbn1cbi8qKlxuICogVXNlIGd0YWcgYGNvbmZpZ2AgY29tbWFuZCB0byBzZXQgYWxsIHBhcmFtcyBzcGVjaWZpZWQuXG4gKlxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiBzZXRVc2VyUHJvcGVydGllcyhhbmFseXRpY3NJbnN0YW5jZSwgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgIGFuYWx5dGljc0luc3RhbmNlID0gZ2V0TW9kdWxhckluc3RhbmNlKGFuYWx5dGljc0luc3RhbmNlKTtcbiAgICBzZXRVc2VyUHJvcGVydGllcyQxKHdyYXBwZWRHdGFnRnVuY3Rpb24sIGluaXRpYWxpemF0aW9uUHJvbWlzZXNNYXBbYW5hbHl0aWNzSW5zdGFuY2UuYXBwLm9wdGlvbnMuYXBwSWRdLCBwcm9wZXJ0aWVzLCBvcHRpb25zKS5jYXRjaChlID0+IGxvZ2dlci5lcnJvcihlKSk7XG59XG4vKipcbiAqIFNldHMgd2hldGhlciBHb29nbGUgQW5hbHl0aWNzIGNvbGxlY3Rpb24gaXMgZW5hYmxlZCBmb3IgdGhpcyBhcHAgb24gdGhpcyBkZXZpY2UuXG4gKiBTZXRzIGdsb2JhbCBgd2luZG93WydnYS1kaXNhYmxlLWFuYWx5dGljc0lkJ10gPSB0cnVlO2BcbiAqXG4gKiBAcHVibGljXG4gKlxuICogQHBhcmFtIGFuYWx5dGljc0luc3RhbmNlIC0gVGhlIHtAbGluayBBbmFseXRpY3N9IGluc3RhbmNlLlxuICogQHBhcmFtIGVuYWJsZWQgLSBJZiB0cnVlLCBlbmFibGVzIGNvbGxlY3Rpb24sIGlmIGZhbHNlLCBkaXNhYmxlcyBpdC5cbiAqL1xuZnVuY3Rpb24gc2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQoYW5hbHl0aWNzSW5zdGFuY2UsIGVuYWJsZWQpIHtcbiAgICBhbmFseXRpY3NJbnN0YW5jZSA9IGdldE1vZHVsYXJJbnN0YW5jZShhbmFseXRpY3NJbnN0YW5jZSk7XG4gICAgc2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQkMShpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FuYWx5dGljc0luc3RhbmNlLmFwcC5vcHRpb25zLmFwcElkXSwgZW5hYmxlZCkuY2F0Y2goZSA9PiBsb2dnZXIuZXJyb3IoZSkpO1xufVxuLyoqXG4gKiBBZGRzIGRhdGEgdGhhdCB3aWxsIGJlIHNldCBvbiBldmVyeSBldmVudCBsb2dnZWQgZnJvbSB0aGUgU0RLLCBpbmNsdWRpbmcgYXV0b21hdGljIG9uZXMuXG4gKiBXaXRoIGd0YWcncyBcInNldFwiIGNvbW1hbmQsIHRoZSB2YWx1ZXMgcGFzc2VkIHBlcnNpc3Qgb24gdGhlIGN1cnJlbnQgcGFnZSBhbmQgYXJlIHBhc3NlZCB3aXRoXG4gKiBhbGwgc3Vic2VxdWVudCBldmVudHMuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0gY3VzdG9tUGFyYW1zIC0gQW55IGN1c3RvbSBwYXJhbXMgdGhlIHVzZXIgbWF5IHBhc3MgdG8gZ3RhZy5qcy5cbiAqL1xuZnVuY3Rpb24gc2V0RGVmYXVsdEV2ZW50UGFyYW1ldGVycyhjdXN0b21QYXJhbXMpIHtcbiAgICAvLyBDaGVjayBpZiByZWZlcmVuY2UgdG8gZXhpc3RpbmcgZ3RhZyBmdW5jdGlvbiBvbiB3aW5kb3cgb2JqZWN0IGV4aXN0c1xuICAgIGlmICh3cmFwcGVkR3RhZ0Z1bmN0aW9uKSB7XG4gICAgICAgIHdyYXBwZWRHdGFnRnVuY3Rpb24oXCJzZXRcIiAvKiBHdGFnQ29tbWFuZC5TRVQgKi8sIGN1c3RvbVBhcmFtcyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBfc2V0RGVmYXVsdEV2ZW50UGFyYW1ldGVyc0ZvckluaXQoY3VzdG9tUGFyYW1zKTtcbiAgICB9XG59XG4vKipcbiAqIFNlbmRzIGEgR29vZ2xlIEFuYWx5dGljcyBldmVudCB3aXRoIGdpdmVuIGBldmVudFBhcmFtc2AuIFRoaXMgbWV0aG9kXG4gKiBhdXRvbWF0aWNhbGx5IGFzc29jaWF0ZXMgdGhpcyBsb2dnZWQgZXZlbnQgd2l0aCB0aGlzIEZpcmViYXNlIHdlYlxuICogYXBwIGluc3RhbmNlIG9uIHRoaXMgZGV2aWNlLlxuICogTGlzdCBvZiBvZmZpY2lhbCBldmVudCBwYXJhbWV0ZXJzIGNhbiBiZSBmb3VuZCBpbiB0aGUgZ3RhZy5qc1xuICogcmVmZXJlbmNlIGRvY3VtZW50YXRpb246XG4gKiB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vZ3RhZ2pzL3JlZmVyZW5jZS9nYTQtZXZlbnRzXG4gKiB8IHRoZSBHQTQgcmVmZXJlbmNlIGRvY3VtZW50YXRpb259LlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9nRXZlbnQoYW5hbHl0aWNzSW5zdGFuY2UsIGV2ZW50TmFtZSwgZXZlbnRQYXJhbXMsIG9wdGlvbnMpIHtcbiAgICBhbmFseXRpY3NJbnN0YW5jZSA9IGdldE1vZHVsYXJJbnN0YW5jZShhbmFseXRpY3NJbnN0YW5jZSk7XG4gICAgbG9nRXZlbnQkMSh3cmFwcGVkR3RhZ0Z1bmN0aW9uLCBpbml0aWFsaXphdGlvblByb21pc2VzTWFwW2FuYWx5dGljc0luc3RhbmNlLmFwcC5vcHRpb25zLmFwcElkXSwgZXZlbnROYW1lLCBldmVudFBhcmFtcywgb3B0aW9ucykuY2F0Y2goZSA9PiBsb2dnZXIuZXJyb3IoZSkpO1xufVxuLyoqXG4gKiBTZXRzIHRoZSBhcHBsaWNhYmxlIGVuZCB1c2VyIGNvbnNlbnQgc3RhdGUgZm9yIHRoaXMgd2ViIGFwcCBhY3Jvc3MgYWxsIGd0YWcgcmVmZXJlbmNlcyBvbmNlXG4gKiBGaXJlYmFzZSBBbmFseXRpY3MgaXMgaW5pdGlhbGl6ZWQuXG4gKlxuICogVXNlIHRoZSB7QGxpbmsgQ29uc2VudFNldHRpbmdzfSB0byBzcGVjaWZ5IGluZGl2aWR1YWwgY29uc2VudCB0eXBlIHZhbHVlcy4gQnkgZGVmYXVsdCBjb25zZW50XG4gKiB0eXBlcyBhcmUgc2V0IHRvIFwiZ3JhbnRlZFwiLlxuICogQHB1YmxpY1xuICogQHBhcmFtIGNvbnNlbnRTZXR0aW5ncyAtIE1hcHMgdGhlIGFwcGxpY2FibGUgZW5kIHVzZXIgY29uc2VudCBzdGF0ZSBmb3IgZ3RhZy5qcy5cbiAqL1xuZnVuY3Rpb24gc2V0Q29uc2VudChjb25zZW50U2V0dGluZ3MpIHtcbiAgICAvLyBDaGVjayBpZiByZWZlcmVuY2UgdG8gZXhpc3RpbmcgZ3RhZyBmdW5jdGlvbiBvbiB3aW5kb3cgb2JqZWN0IGV4aXN0c1xuICAgIGlmICh3cmFwcGVkR3RhZ0Z1bmN0aW9uKSB7XG4gICAgICAgIHdyYXBwZWRHdGFnRnVuY3Rpb24oXCJjb25zZW50XCIgLyogR3RhZ0NvbW1hbmQuQ09OU0VOVCAqLywgJ3VwZGF0ZScsIGNvbnNlbnRTZXR0aW5ncyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBfc2V0Q29uc2VudERlZmF1bHRGb3JJbml0KGNvbnNlbnRTZXR0aW5ncyk7XG4gICAgfVxufVxuXG5jb25zdCBuYW1lID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzXCI7XG5jb25zdCB2ZXJzaW9uID0gXCIwLjEwLjE2XCI7XG5cbi8qKlxuICogVGhlIEZpcmViYXNlIEFuYWx5dGljcyBXZWIgU0RLLlxuICogVGhpcyBTREsgZG9lcyBub3Qgd29yayBpbiBhIE5vZGUuanMgZW52aXJvbm1lbnQuXG4gKlxuICogQHBhY2thZ2VEb2N1bWVudGF0aW9uXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyQW5hbHl0aWNzKCkge1xuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KEFOQUxZVElDU19UWVBFLCAoY29udGFpbmVyLCB7IG9wdGlvbnM6IGFuYWx5dGljc09wdGlvbnMgfSkgPT4ge1xuICAgICAgICAvLyBnZXRJbW1lZGlhdGUgZm9yIEZpcmViYXNlQXBwIHdpbGwgYWx3YXlzIHN1Y2NlZWRcbiAgICAgICAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IGNvbnRhaW5lclxuICAgICAgICAgICAgLmdldFByb3ZpZGVyKCdpbnN0YWxsYXRpb25zLWludGVybmFsJylcbiAgICAgICAgICAgIC5nZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkoYXBwLCBpbnN0YWxsYXRpb25zLCBhbmFseXRpY3NPcHRpb25zKTtcbiAgICB9LCBcIlBVQkxJQ1wiIC8qIENvbXBvbmVudFR5cGUuUFVCTElDICovKSk7XG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ2FuYWx5dGljcy1pbnRlcm5hbCcsIGludGVybmFsRmFjdG9yeSwgXCJQUklWQVRFXCIgLyogQ29tcG9uZW50VHlwZS5QUklWQVRFICovKSk7XG4gICAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24pO1xuICAgIC8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTIwMTcsIGNqczIwMTcsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG4gICAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdlc20yMDE3Jyk7XG4gICAgZnVuY3Rpb24gaW50ZXJuYWxGYWN0b3J5KGNvbnRhaW5lcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYW5hbHl0aWNzID0gY29udGFpbmVyLmdldFByb3ZpZGVyKEFOQUxZVElDU19UWVBFKS5nZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbG9nRXZlbnQ6IChldmVudE5hbWUsIGV2ZW50UGFyYW1zLCBvcHRpb25zKSA9PiBsb2dFdmVudChhbmFseXRpY3MsIGV2ZW50TmFtZSwgZXZlbnRQYXJhbXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludGVyb3AtY29tcG9uZW50LXJlZy1mYWlsZWRcIiAvKiBBbmFseXRpY3NFcnJvci5JTlRFUk9QX0NPTVBPTkVOVF9SRUdfRkFJTEVEICovLCB7XG4gICAgICAgICAgICAgICAgcmVhc29uOiBlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbnJlZ2lzdGVyQW5hbHl0aWNzKCk7XG5cbmV4cG9ydCB7IGdldEFuYWx5dGljcywgZ2V0R29vZ2xlQW5hbHl0aWNzQ2xpZW50SWQsIGluaXRpYWxpemVBbmFseXRpY3MsIGlzU3VwcG9ydGVkLCBsb2dFdmVudCwgc2V0QW5hbHl0aWNzQ29sbGVjdGlvbkVuYWJsZWQsIHNldENvbnNlbnQsIHNldEN1cnJlbnRTY3JlZW4sIHNldERlZmF1bHRFdmVudFBhcmFtZXRlcnMsIHNldFVzZXJJZCwgc2V0VXNlclByb3BlcnRpZXMsIHNldHRpbmdzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRDb250YWluZXIgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlciwgc2V0VXNlckxvZ0hhbmRsZXIsIHNldExvZ0xldmVsIGFzIHNldExvZ0xldmVsJDEgfSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgYmFzZTY0RGVjb2RlLCBnZXREZWZhdWx0QXBwQ29uZmlnLCBkZWVwRXF1YWwsIGlzQnJvd3NlciwgaXNXZWJXb3JrZXIsIEZpcmViYXNlRXJyb3IsIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nLCBpc0luZGV4ZWREQkF2YWlsYWJsZSwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmV4cG9ydCB7IEZpcmViYXNlRXJyb3IgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5pbXBvcnQgeyBvcGVuREIgfSBmcm9tICdpZGInO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY2xhc3MgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCB7XG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyKSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH1cbiAgICAvLyBJbiBpbml0aWFsIGltcGxlbWVudGF0aW9uLCB0aGlzIHdpbGwgYmUgY2FsbGVkIGJ5IGluc3RhbGxhdGlvbnMgb25cbiAgICAvLyBhdXRoIHRva2VuIHJlZnJlc2gsIGFuZCBpbnN0YWxsYXRpb25zIHdpbGwgc2VuZCB0aGlzIHN0cmluZy5cbiAgICBnZXRQbGF0Zm9ybUluZm9TdHJpbmcoKSB7XG4gICAgICAgIGNvbnN0IHByb3ZpZGVycyA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVycygpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggcHJvdmlkZXJzIGFuZCBnZXQgbGlicmFyeS92ZXJzaW9uIHBhaXJzIGZyb20gYW55IHRoYXQgYXJlXG4gICAgICAgIC8vIHZlcnNpb24gY29tcG9uZW50cy5cbiAgICAgICAgcmV0dXJuIHByb3ZpZGVyc1xuICAgICAgICAgICAgLm1hcChwcm92aWRlciA9PiB7XG4gICAgICAgICAgICBpZiAoaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSBwcm92aWRlci5nZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7c2VydmljZS5saWJyYXJ5fS8ke3NlcnZpY2UudmVyc2lvbn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGxvZ1N0cmluZyA9PiBsb2dTdHJpbmcpXG4gICAgICAgICAgICAuam9pbignICcpO1xuICAgIH1cbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBwcm92aWRlciBjaGVjayBpZiB0aGlzIHByb3ZpZGVyIHByb3ZpZGVzIGEgVmVyc2lvblNlcnZpY2VcbiAqXG4gKiBOT1RFOiBVc2luZyBQcm92aWRlcjwnYXBwLXZlcnNpb24nPiBpcyBhIGhhY2sgdG8gaW5kaWNhdGUgdGhhdCB0aGUgcHJvdmlkZXJcbiAqIHByb3ZpZGVzIFZlcnNpb25TZXJ2aWNlLiBUaGUgcHJvdmlkZXIgaXMgbm90IG5lY2Vzc2FyaWx5IGEgJ2FwcC12ZXJzaW9uJ1xuICogcHJvdmlkZXIuXG4gKi9cbmZ1bmN0aW9uIGlzVmVyc2lvblNlcnZpY2VQcm92aWRlcihwcm92aWRlcikge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHByb3ZpZGVyLmdldENvbXBvbmVudCgpO1xuICAgIHJldHVybiAoY29tcG9uZW50ID09PSBudWxsIHx8IGNvbXBvbmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tcG9uZW50LnR5cGUpID09PSBcIlZFUlNJT05cIiAvKiBDb21wb25lbnRUeXBlLlZFUlNJT04gKi87XG59XG5cbmNvbnN0IG5hbWUkcSA9IFwiQGZpcmViYXNlL2FwcFwiO1xuY29uc3QgdmVyc2lvbiQxID0gXCIwLjEzLjBcIjtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0BmaXJlYmFzZS9hcHAnKTtcblxuY29uc3QgbmFtZSRwID0gXCJAZmlyZWJhc2UvYXBwLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJG8gPSBcIkBmaXJlYmFzZS9hbmFseXRpY3MtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkbiA9IFwiQGZpcmViYXNlL2FuYWx5dGljc1wiO1xuXG5jb25zdCBuYW1lJG0gPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2stY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkbCA9IFwiQGZpcmViYXNlL2FwcC1jaGVja1wiO1xuXG5jb25zdCBuYW1lJGsgPSBcIkBmaXJlYmFzZS9hdXRoXCI7XG5cbmNvbnN0IG5hbWUkaiA9IFwiQGZpcmViYXNlL2F1dGgtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkaSA9IFwiQGZpcmViYXNlL2RhdGFiYXNlXCI7XG5cbmNvbnN0IG5hbWUkaCA9IFwiQGZpcmViYXNlL2RhdGEtY29ubmVjdFwiO1xuXG5jb25zdCBuYW1lJGcgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRmID0gXCJAZmlyZWJhc2UvZnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUkZSA9IFwiQGZpcmViYXNlL2Z1bmN0aW9ucy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRkID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xuXG5jb25zdCBuYW1lJGMgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGIgPSBcIkBmaXJlYmFzZS9tZXNzYWdpbmdcIjtcblxuY29uc3QgbmFtZSRhID0gXCJAZmlyZWJhc2UvbWVzc2FnaW5nLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDkgPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZVwiO1xuXG5jb25zdCBuYW1lJDggPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSQ3ID0gXCJAZmlyZWJhc2UvcmVtb3RlLWNvbmZpZ1wiO1xuXG5jb25zdCBuYW1lJDYgPSBcIkBmaXJlYmFzZS9yZW1vdGUtY29uZmlnLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDUgPSBcIkBmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IG5hbWUkNCA9IFwiQGZpcmViYXNlL3N0b3JhZ2UtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkMyA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBuYW1lJDIgPSBcIkBmaXJlYmFzZS9haVwiO1xuXG5jb25zdCBuYW1lJDEgPSBcIkBmaXJlYmFzZS9maXJlc3RvcmUtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUgPSBcImZpcmViYXNlXCI7XG5jb25zdCB2ZXJzaW9uID0gXCIxMS44LjBcIjtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogVGhlIGRlZmF1bHQgYXBwIG5hbWVcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG5jb25zdCBQTEFURk9STV9MT0dfU1RSSU5HID0ge1xuICAgIFtuYW1lJHFdOiAnZmlyZS1jb3JlJyxcbiAgICBbbmFtZSRwXTogJ2ZpcmUtY29yZS1jb21wYXQnLFxuICAgIFtuYW1lJG5dOiAnZmlyZS1hbmFseXRpY3MnLFxuICAgIFtuYW1lJG9dOiAnZmlyZS1hbmFseXRpY3MtY29tcGF0JyxcbiAgICBbbmFtZSRsXTogJ2ZpcmUtYXBwLWNoZWNrJyxcbiAgICBbbmFtZSRtXTogJ2ZpcmUtYXBwLWNoZWNrLWNvbXBhdCcsXG4gICAgW25hbWUka106ICdmaXJlLWF1dGgnLFxuICAgIFtuYW1lJGpdOiAnZmlyZS1hdXRoLWNvbXBhdCcsXG4gICAgW25hbWUkaV06ICdmaXJlLXJ0ZGInLFxuICAgIFtuYW1lJGhdOiAnZmlyZS1kYXRhLWNvbm5lY3QnLFxuICAgIFtuYW1lJGddOiAnZmlyZS1ydGRiLWNvbXBhdCcsXG4gICAgW25hbWUkZl06ICdmaXJlLWZuJyxcbiAgICBbbmFtZSRlXTogJ2ZpcmUtZm4tY29tcGF0JyxcbiAgICBbbmFtZSRkXTogJ2ZpcmUtaWlkJyxcbiAgICBbbmFtZSRjXTogJ2ZpcmUtaWlkLWNvbXBhdCcsXG4gICAgW25hbWUkYl06ICdmaXJlLWZjbScsXG4gICAgW25hbWUkYV06ICdmaXJlLWZjbS1jb21wYXQnLFxuICAgIFtuYW1lJDldOiAnZmlyZS1wZXJmJyxcbiAgICBbbmFtZSQ4XTogJ2ZpcmUtcGVyZi1jb21wYXQnLFxuICAgIFtuYW1lJDddOiAnZmlyZS1yYycsXG4gICAgW25hbWUkNl06ICdmaXJlLXJjLWNvbXBhdCcsXG4gICAgW25hbWUkNV06ICdmaXJlLWdjcycsXG4gICAgW25hbWUkNF06ICdmaXJlLWdjcy1jb21wYXQnLFxuICAgIFtuYW1lJDNdOiAnZmlyZS1mc3QnLFxuICAgIFtuYW1lJDFdOiAnZmlyZS1mc3QtY29tcGF0JyxcbiAgICBbbmFtZSQyXTogJ2ZpcmUtdmVydGV4JyxcbiAgICAnZmlyZS1qcyc6ICdmaXJlLWpzJywgLy8gUGxhdGZvcm0gaWRlbnRpZmllciBmb3IgSlMgU0RLLlxuICAgIFtuYW1lXTogJ2ZpcmUtanMtYWxsJ1xufTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQGludGVybmFsXG4gKi9cbmNvbnN0IF9hcHBzID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuY29uc3QgX3NlcnZlckFwcHMgPSBuZXcgTWFwKCk7XG4vKipcbiAqIFJlZ2lzdGVyZWQgY29tcG9uZW50cy5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmNvbnN0IF9jb21wb25lbnRzID0gbmV3IE1hcCgpO1xuLyoqXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCBiZWluZyBhZGRlZCB0byB0aGlzIGFwcCdzIGNvbnRhaW5lclxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBfYWRkQ29tcG9uZW50KGFwcCwgY29tcG9uZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXBwLmNvbnRhaW5lci5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKGBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZmFpbGVkIHRvIHJlZ2lzdGVyIHdpdGggRmlyZWJhc2VBcHAgJHthcHAubmFtZX1gLCBlKTtcbiAgICB9XG59XG4vKipcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50KGFwcCwgY29tcG9uZW50KSB7XG4gICAgYXBwLmNvbnRhaW5lci5hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGNvbXBvbmVudCAtIHRoZSBjb21wb25lbnQgdG8gcmVnaXN0ZXJcbiAqIEByZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBjb21wb25lbnQgaXMgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHlcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gX3JlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xuICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnQubmFtZTtcbiAgICBpZiAoX2NvbXBvbmVudHMuaGFzKGNvbXBvbmVudE5hbWUpKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgJHtjb21wb25lbnROYW1lfS5gKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfY29tcG9uZW50cy5zZXQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcbiAgICAvLyBhZGQgdGhlIGNvbXBvbmVudCB0byBleGlzdGluZyBhcHAgaW5zdGFuY2VzXG4gICAgZm9yIChjb25zdCBhcHAgb2YgX2FwcHMudmFsdWVzKCkpIHtcbiAgICAgICAgX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc2VydmVyQXBwIG9mIF9zZXJ2ZXJBcHBzLnZhbHVlcygpKSB7XG4gICAgICAgIF9hZGRDb21wb25lbnQoc2VydmVyQXBwLCBjb21wb25lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBhcHAgLSBGaXJlYmFzZUFwcCBpbnN0YW5jZVxuICogQHBhcmFtIG5hbWUgLSBzZXJ2aWNlIG5hbWVcbiAqXG4gKiBAcmV0dXJucyB0aGUgcHJvdmlkZXIgZm9yIHRoZSBzZXJ2aWNlIHdpdGggdGhlIG1hdGNoaW5nIG5hbWVcbiAqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZnVuY3Rpb24gX2dldFByb3ZpZGVyKGFwcCwgbmFtZSkge1xuICAgIGNvbnN0IGhlYXJ0YmVhdENvbnRyb2xsZXIgPSBhcHAuY29udGFpbmVyXG4gICAgICAgIC5nZXRQcm92aWRlcignaGVhcnRiZWF0JylcbiAgICAgICAgLmdldEltbWVkaWF0ZSh7IG9wdGlvbmFsOiB0cnVlIH0pO1xuICAgIGlmIChoZWFydGJlYXRDb250cm9sbGVyKSB7XG4gICAgICAgIHZvaWQgaGVhcnRiZWF0Q29udHJvbGxlci50cmlnZ2VySGVhcnRiZWF0KCk7XG4gICAgfVxuICAgIHJldHVybiBhcHAuY29udGFpbmVyLmdldFByb3ZpZGVyKG5hbWUpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXG4gKiBAcGFyYW0gbmFtZSAtIHNlcnZpY2UgbmFtZVxuICogQHBhcmFtIGluc3RhbmNlSWRlbnRpZmllciAtIHNlcnZpY2UgaW5zdGFuY2UgaWRlbnRpZmllciBpbiBjYXNlIHRoZSBzZXJ2aWNlIHN1cHBvcnRzIG11bHRpcGxlIGluc3RhbmNlc1xuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBfcmVtb3ZlU2VydmljZUluc3RhbmNlKGFwcCwgbmFtZSwgaW5zdGFuY2VJZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XG4gICAgX2dldFByb3ZpZGVyKGFwcCwgbmFtZSkuY2xlYXJJbnN0YW5jZShpbnN0YW5jZUlkZW50aWZpZXIpO1xufVxuLyoqXG4gKlxuICogQHBhcmFtIG9iaiAtIGFuIG9iamVjdCBvZiB0eXBlIEZpcmViYXNlQXBwIG9yIEZpcmViYXNlT3B0aW9ucy5cbiAqXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlIG9iamVjdCBpcyBvZiB0eXBlIEZpcmViYXNlQXBwLlxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBfaXNGaXJlYmFzZUFwcChvYmopIHtcbiAgICByZXR1cm4gb2JqLm9wdGlvbnMgIT09IHVuZGVmaW5lZDtcbn1cbi8qKlxuICpcbiAqIEBwYXJhbSBvYmogLSBhbiBvYmplY3Qgb2YgdHlwZSBGaXJlYmFzZUFwcC5cbiAqXG4gKiBAcmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBvYmplY3QgaXMgb2YgdHlwZSBGaXJlYmFzZVNlcnZlckFwcEltcGwuXG4gKlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIF9pc0ZpcmViYXNlU2VydmVyQXBwKG9iaikge1xuICAgIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqLnNldHRpbmdzICE9PSB1bmRlZmluZWQ7XG59XG4vKipcbiAqIFRlc3Qgb25seVxuICpcbiAqIEBpbnRlcm5hbFxuICovXG5mdW5jdGlvbiBfY2xlYXJDb21wb25lbnRzKCkge1xuICAgIF9jb21wb25lbnRzLmNsZWFyKCk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBFUlJPUlMgPSB7XG4gICAgW1wibm8tYXBwXCIgLyogQXBwRXJyb3IuTk9fQVBQICovXTogXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXG4gICAgICAgICdjYWxsIGluaXRpYWxpemVBcHAoKSBmaXJzdCcsXG4gICAgW1wiYmFkLWFwcC1uYW1lXCIgLyogQXBwRXJyb3IuQkFEX0FQUF9OQU1FICovXTogXCJJbGxlZ2FsIEFwcCBuYW1lOiAneyRhcHBOYW1lfSdcIixcbiAgICBbXCJkdXBsaWNhdGUtYXBwXCIgLyogQXBwRXJyb3IuRFVQTElDQVRFX0FQUCAqL106IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGV4aXN0cyB3aXRoIGRpZmZlcmVudCBvcHRpb25zIG9yIGNvbmZpZ1wiLFxuICAgIFtcImFwcC1kZWxldGVkXCIgLyogQXBwRXJyb3IuQVBQX0RFTEVURUQgKi9dOiBcIkZpcmViYXNlIEFwcCBuYW1lZCAneyRhcHBOYW1lfScgYWxyZWFkeSBkZWxldGVkXCIsXG4gICAgW1wic2VydmVyLWFwcC1kZWxldGVkXCIgLyogQXBwRXJyb3IuU0VSVkVSX0FQUF9ERUxFVEVEICovXTogJ0ZpcmViYXNlIFNlcnZlciBBcHAgaGFzIGJlZW4gZGVsZXRlZCcsXG4gICAgW1wibm8tb3B0aW9uc1wiIC8qIEFwcEVycm9yLk5PX09QVElPTlMgKi9dOiAnTmVlZCB0byBwcm92aWRlIG9wdGlvbnMsIHdoZW4gbm90IGJlaW5nIGRlcGxveWVkIHRvIGhvc3RpbmcgdmlhIHNvdXJjZS4nLFxuICAgIFtcImludmFsaWQtYXBwLWFyZ3VtZW50XCIgLyogQXBwRXJyb3IuSU5WQUxJRF9BUFBfQVJHVU1FTlQgKi9dOiAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xuICAgICAgICAnRmlyZWJhc2UgQXBwIGluc3RhbmNlLicsXG4gICAgW1wiaW52YWxpZC1sb2ctYXJndW1lbnRcIiAvKiBBcHBFcnJvci5JTlZBTElEX0xPR19BUkdVTUVOVCAqL106ICdGaXJzdCBhcmd1bWVudCB0byBgb25Mb2dgIG11c3QgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLicsXG4gICAgW1wiaWRiLW9wZW5cIiAvKiBBcHBFcnJvci5JREJfT1BFTiAqL106ICdFcnJvciB0aHJvd24gd2hlbiBvcGVuaW5nIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gICAgW1wiaWRiLWdldFwiIC8qIEFwcEVycm9yLklEQl9HRVQgKi9dOiAnRXJyb3IgdGhyb3duIHdoZW4gcmVhZGluZyBmcm9tIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gICAgW1wiaWRiLXNldFwiIC8qIEFwcEVycm9yLklEQl9XUklURSAqL106ICdFcnJvciB0aHJvd24gd2hlbiB3cml0aW5nIHRvIEluZGV4ZWREQi4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXG4gICAgW1wiaWRiLWRlbGV0ZVwiIC8qIEFwcEVycm9yLklEQl9ERUxFVEUgKi9dOiAnRXJyb3IgdGhyb3duIHdoZW4gZGVsZXRpbmcgZnJvbSBJbmRleGVkREIuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxuICAgIFtcImZpbmFsaXphdGlvbi1yZWdpc3RyeS1ub3Qtc3VwcG9ydGVkXCIgLyogQXBwRXJyb3IuRklOQUxJWkFUSU9OX1JFR0lTVFJZX05PVF9TVVBQT1JURUQgKi9dOiAnRmlyZWJhc2VTZXJ2ZXJBcHAgZGVsZXRlT25EZXJlZiBmaWVsZCBkZWZpbmVkIGJ1dCB0aGUgSlMgcnVudGltZSBkb2VzIG5vdCBzdXBwb3J0IEZpbmFsaXphdGlvblJlZ2lzdHJ5LicsXG4gICAgW1wiaW52YWxpZC1zZXJ2ZXItYXBwLWVudmlyb25tZW50XCIgLyogQXBwRXJyb3IuSU5WQUxJRF9TRVJWRVJfQVBQX0VOVklST05NRU5UICovXTogJ0ZpcmViYXNlU2VydmVyQXBwIGlzIG5vdCBmb3IgdXNlIGluIGJyb3dzZXIgZW52aXJvbm1lbnRzLidcbn07XG5jb25zdCBFUlJPUl9GQUNUT1JZID0gbmV3IEVycm9yRmFjdG9yeSgnYXBwJywgJ0ZpcmViYXNlJywgRVJST1JTKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNsYXNzIEZpcmViYXNlQXBwSW1wbCB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcbiAgICAgICAgdGhpcy5fbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgICAgICB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPVxuICAgICAgICAgICAgY29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcbiAgICAgICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLmNvbnRhaW5lci5hZGRDb21wb25lbnQobmV3IENvbXBvbmVudCgnYXBwJywgKCkgPT4gdGhpcywgXCJQVUJMSUNcIiAvKiBDb21wb25lbnRUeXBlLlBVQkxJQyAqLykpO1xuICAgIH1cbiAgICBnZXQgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkKCkge1xuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ7XG4gICAgfVxuICAgIHNldCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQodmFsKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICAgICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID0gdmFsO1xuICAgIH1cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG4gICAgZ2V0IGNvbnRhaW5lcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcbiAgICB9XG4gICAgZ2V0IGlzRGVsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVsZXRlZDtcbiAgICB9XG4gICAgc2V0IGlzRGVsZXRlZCh2YWwpIHtcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxuICAgICAqIHVzZSBiZWZvcmUgcGVyZm9ybWluZyBBUEkgYWN0aW9ucyBvbiB0aGUgQXBwLlxuICAgICAqL1xuICAgIGNoZWNrRGVzdHJveWVkKCkge1xuICAgICAgICBpZiAodGhpcy5pc0RlbGV0ZWQpIHtcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiYXBwLWRlbGV0ZWRcIiAvKiBBcHBFcnJvci5BUFBfREVMRVRFRCAqLywgeyBhcHBOYW1lOiB0aGlzLl9uYW1lIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gUGFyc2UgdGhlIHRva2VuIGFuZCBjaGVjayB0byBzZWUgaWYgdGhlIGBleHBgIGNsYWltIGlzIGluIHRoZSBmdXR1cmUuXG4vLyBSZXBvcnRzIGFuIGVycm9yIHRvIHRoZSBjb25zb2xlIGlmIHRoZSB0b2tlbiBvciBjbGFpbSBjb3VsZCBub3QgYmUgcGFyc2VkLCBvciBpZiBgZXhwYCBpcyBpblxuLy8gdGhlIHBhc3QuXG5mdW5jdGlvbiB2YWxpZGF0ZVRva2VuVFRMKGJhc2U2NFRva2VuLCB0b2tlbk5hbWUpIHtcbiAgICBjb25zdCBzZWNvbmRQYXJ0ID0gYmFzZTY0RGVjb2RlKGJhc2U2NFRva2VuLnNwbGl0KCcuJylbMV0pO1xuICAgIGlmIChzZWNvbmRQYXJ0ID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZpcmViYXNlU2VydmVyQXBwICR7dG9rZW5OYW1lfSBpcyBpbnZhbGlkOiBzZWNvbmQgcGFydCBjb3VsZCBub3QgYmUgcGFyc2VkLmApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4cENsYWltID0gSlNPTi5wYXJzZShzZWNvbmRQYXJ0KS5leHA7XG4gICAgaWYgKGV4cENsYWltID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmlyZWJhc2VTZXJ2ZXJBcHAgJHt0b2tlbk5hbWV9IGlzIGludmFsaWQ6IGV4cGlyYXRpb24gY2xhaW0gY291bGQgbm90IGJlIHBhcnNlZGApO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4cCA9IEpTT04ucGFyc2Uoc2Vjb25kUGFydCkuZXhwICogMTAwMDtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBkaWZmID0gZXhwIC0gbm93O1xuICAgIGlmIChkaWZmIDw9IDApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgRmlyZWJhc2VTZXJ2ZXJBcHAgJHt0b2tlbk5hbWV9IGlzIGludmFsaWQ6IHRoZSB0b2tlbiBoYXMgZXhwaXJlZC5gKTtcbiAgICB9XG59XG5jbGFzcyBGaXJlYmFzZVNlcnZlckFwcEltcGwgZXh0ZW5kcyBGaXJlYmFzZUFwcEltcGwge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMsIHNlcnZlckNvbmZpZywgbmFtZSwgY29udGFpbmVyKSB7XG4gICAgICAgIC8vIEJ1aWxkIGNvbmZpZ3VyYXRpb24gcGFyYW1ldGVycyBmb3IgdGhlIEZpcmViYXNlQXBwSW1wbCBiYXNlIGNsYXNzLlxuICAgICAgICBjb25zdCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSBzZXJ2ZXJDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gc2VydmVyQ29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZFxuICAgICAgICAgICAgOiB0cnVlO1xuICAgICAgICAvLyBDcmVhdGUgdGhlIEZpcmViYXNlQXBwU2V0dGluZ3Mgb2JqZWN0IGZvciB0aGUgRmlyZWJhc2VBcHBJbXAgY29uc3RydWN0b3IuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKG9wdGlvbnMuYXBpS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIENvbnN0cnVjdCB0aGUgcGFyZW50IEZpcmViYXNlQXBwSW1wIG9iamVjdC5cbiAgICAgICAgICAgIHN1cGVyKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcEltcGwgPSBvcHRpb25zO1xuICAgICAgICAgICAgc3VwZXIoYXBwSW1wbC5vcHRpb25zLCBjb25maWcsIGNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTm93IGNvbnN0cnVjdCB0aGUgZGF0YSBmb3IgdGhlIEZpcmViYXNlU2VydmVyQXBwSW1wbC5cbiAgICAgICAgdGhpcy5fc2VydmVyQ29uZmlnID0gT2JqZWN0LmFzc2lnbih7IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCB9LCBzZXJ2ZXJDb25maWcpO1xuICAgICAgICAvLyBFbnN1cmUgdGhhdCB0aGUgY3VycmVudCB0aW1lIGlzIHdpdGhpbiB0aGUgYGF1dGhJZHRva2VuYCB3aW5kb3cgb2YgdmFsaWRpdHkuXG4gICAgICAgIGlmICh0aGlzLl9zZXJ2ZXJDb25maWcuYXV0aElkVG9rZW4pIHtcbiAgICAgICAgICAgIHZhbGlkYXRlVG9rZW5UVEwodGhpcy5fc2VydmVyQ29uZmlnLmF1dGhJZFRva2VuLCAnYXV0aElkVG9rZW4nKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFbnN1cmUgdGhhdCB0aGUgY3VycmVudCB0aW1lIGlzIHdpdGhpbiB0aGUgYGFwcENoZWNrVG9rZW5gIHdpbmRvdyBvZiB2YWxpZGl0eS5cbiAgICAgICAgaWYgKHRoaXMuX3NlcnZlckNvbmZpZy5hcHBDaGVja1Rva2VuKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZVRva2VuVFRMKHRoaXMuX3NlcnZlckNvbmZpZy5hcHBDaGVja1Rva2VuLCAnYXBwQ2hlY2tUb2tlbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5ID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbmFsaXphdGlvblJlZ2lzdHJ5ID0gbmV3IEZpbmFsaXphdGlvblJlZ2lzdHJ5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9tYXRpY0NsZWFudXAoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlZkNvdW50ID0gMDtcbiAgICAgICAgdGhpcy5pbmNSZWZDb3VudCh0aGlzLl9zZXJ2ZXJDb25maWcucmVsZWFzZU9uRGVyZWYpO1xuICAgICAgICAvLyBEbyBub3QgcmV0YWluIGEgaGFyZCByZWZlcmVuY2UgdG8gdGhlIGRyZWYgb2JqZWN0LCBvdGhlcndpc2UgdGhlIEZpbmFsaXphdGlvblJlZ2lzdHJ5XG4gICAgICAgIC8vIHdpbGwgbmV2ZXIgdHJpZ2dlci5cbiAgICAgICAgdGhpcy5fc2VydmVyQ29uZmlnLnJlbGVhc2VPbkRlcmVmID0gdW5kZWZpbmVkO1xuICAgICAgICBzZXJ2ZXJDb25maWcucmVsZWFzZU9uRGVyZWYgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJHEsIHZlcnNpb24kMSwgJ3NlcnZlcmFwcCcpO1xuICAgIH1cbiAgICB0b0pTT04oKSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGdldCByZWZDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZkNvdW50O1xuICAgIH1cbiAgICAvLyBJbmNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudCBvZiB0aGlzIHNlcnZlciBhcHAuIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCwgcmVnaXN0ZXIgaXRcbiAgICAvLyB3aXRoIHRoZSBmaW5hbGl6YXRpb24gcmVnaXN0cnkuXG4gICAgaW5jUmVmQ291bnQob2JqKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3JlZkNvdW50Kys7XG4gICAgICAgIGlmIChvYmogIT09IHVuZGVmaW5lZCAmJiB0aGlzLl9maW5hbGl6YXRpb25SZWdpc3RyeSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fZmluYWxpemF0aW9uUmVnaXN0cnkucmVnaXN0ZXIob2JqLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBEZWNyZW1lbnQgdGhlIHJlZmVyZW5jZSBjb3VudC5cbiAgICBkZWNSZWZDb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gLS10aGlzLl9yZWZDb3VudDtcbiAgICB9XG4gICAgLy8gSW52b2tlZCBieSB0aGUgRmluYWxpemF0aW9uUmVnaXN0cnkgY2FsbGJhY2sgdG8gbm90ZSB0aGF0IHRoaXMgYXBwIHNob3VsZCBnbyB0aHJvdWdoIGl0c1xuICAgIC8vIHJlZmVyZW5jZSBjb3VudHMgYW5kIGRlbGV0ZSBpdHNlbGYgaWYgbm8gcmVmZXJlbmNlIGNvdW50IHJlbWFpbi4gVGhlIGNvb3JkaW5hdGluZyBsb2dpYyB0aGF0XG4gICAgLy8gaGFuZGxlcyB0aGlzIGlzIGluIGRlbGV0ZUFwcCguLi4pLlxuICAgIGF1dG9tYXRpY0NsZWFudXAoKSB7XG4gICAgICAgIHZvaWQgZGVsZXRlQXBwKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgc2V0dGluZ3MoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlcnZlckNvbmZpZztcbiAgICB9XG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiB3aWxsIHRocm93IGFuIEVycm9yIGlmIHRoZSBBcHAgaGFzIGFscmVhZHkgYmVlbiBkZWxldGVkIC1cbiAgICAgKiB1c2UgYmVmb3JlIHBlcmZvcm1pbmcgQVBJIGFjdGlvbnMgb24gdGhlIEFwcC5cbiAgICAgKi9cbiAgICBjaGVja0Rlc3Ryb3llZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEZWxldGVkKSB7XG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInNlcnZlci1hcHAtZGVsZXRlZFwiIC8qIEFwcEVycm9yLlNFUlZFUl9BUFBfREVMRVRFRCAqLyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFRoZSBjdXJyZW50IFNESyB2ZXJzaW9uLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgU0RLX1ZFUlNJT04gPSB2ZXJzaW9uO1xuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChfb3B0aW9ucywgcmF3Q29uZmlnID0ge30pIHtcbiAgICBsZXQgb3B0aW9ucyA9IF9vcHRpb25zO1xuICAgIGlmICh0eXBlb2YgcmF3Q29uZmlnICE9PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBuYW1lID0gcmF3Q29uZmlnO1xuICAgICAgICByYXdDb25maWcgPSB7IG5hbWUgfTtcbiAgICB9XG4gICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7IG5hbWU6IERFRkFVTFRfRU5UUllfTkFNRSwgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkOiB0cnVlIH0sIHJhd0NvbmZpZyk7XG4gICAgY29uc3QgbmFtZSA9IGNvbmZpZy5uYW1lO1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgfHwgIW5hbWUpIHtcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJiYWQtYXBwLW5hbWVcIiAvKiBBcHBFcnJvci5CQURfQVBQX05BTUUgKi8sIHtcbiAgICAgICAgICAgIGFwcE5hbWU6IFN0cmluZyhuYW1lKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3B0aW9ucyB8fCAob3B0aW9ucyA9IGdldERlZmF1bHRBcHBDb25maWcoKSk7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tb3B0aW9uc1wiIC8qIEFwcEVycm9yLk5PX09QVElPTlMgKi8pO1xuICAgIH1cbiAgICBjb25zdCBleGlzdGluZ0FwcCA9IF9hcHBzLmdldChuYW1lKTtcbiAgICBpZiAoZXhpc3RpbmdBcHApIHtcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBleGlzdGluZyBhcHAgaWYgb3B0aW9ucyBhbmQgY29uZmlnIGRlZXAgZXF1YWwgdGhlIG9uZXMgaW4gdGhlIGV4aXN0aW5nIGFwcC5cbiAgICAgICAgaWYgKGRlZXBFcXVhbChvcHRpb25zLCBleGlzdGluZ0FwcC5vcHRpb25zKSAmJlxuICAgICAgICAgICAgZGVlcEVxdWFsKGNvbmZpZywgZXhpc3RpbmdBcHAuY29uZmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nQXBwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJkdXBsaWNhdGUtYXBwXCIgLyogQXBwRXJyb3IuRFVQTElDQVRFX0FQUCAqLywgeyBhcHBOYW1lOiBuYW1lIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb21wb25lbnRDb250YWluZXIobmFtZSk7XG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgX2NvbXBvbmVudHMudmFsdWVzKCkpIHtcbiAgICAgICAgY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xuICAgIH1cbiAgICBjb25zdCBuZXdBcHAgPSBuZXcgRmlyZWJhc2VBcHBJbXBsKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcbiAgICBfYXBwcy5zZXQobmFtZSwgbmV3QXBwKTtcbiAgICByZXR1cm4gbmV3QXBwO1xufVxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNlcnZlckFwcChfb3B0aW9ucywgX3NlcnZlckFwcENvbmZpZykge1xuICAgIGlmIChpc0Jyb3dzZXIoKSAmJiAhaXNXZWJXb3JrZXIoKSkge1xuICAgICAgICAvLyBGaXJlYmFzZVNlcnZlckFwcCBpc24ndCBkZXNpZ25lZCB0byBiZSBydW4gaW4gYnJvd3NlcnMuXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZC1zZXJ2ZXItYXBwLWVudmlyb25tZW50XCIgLyogQXBwRXJyb3IuSU5WQUxJRF9TRVJWRVJfQVBQX0VOVklST05NRU5UICovKTtcbiAgICB9XG4gICAgaWYgKF9zZXJ2ZXJBcHBDb25maWcuYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgX3NlcnZlckFwcENvbmZpZy5hdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgYXBwT3B0aW9ucztcbiAgICBpZiAoX2lzRmlyZWJhc2VBcHAoX29wdGlvbnMpKSB7XG4gICAgICAgIGFwcE9wdGlvbnMgPSBfb3B0aW9ucy5vcHRpb25zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYXBwT3B0aW9ucyA9IF9vcHRpb25zO1xuICAgIH1cbiAgICAvLyBCdWlsZCBhbiBhcHAgbmFtZSBiYXNlZCBvbiBhIGhhc2ggb2YgdGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucy5cbiAgICBjb25zdCBuYW1lT2JqID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBfc2VydmVyQXBwQ29uZmlnKSwgYXBwT3B0aW9ucyk7XG4gICAgLy8gSG93ZXZlciwgRG8gbm90IG1hbmdsZSB0aGUgbmFtZSBiYXNlZCBvbiByZWxlYXNlT25EZXJlZiwgc2luY2UgaXQgd2lsbCB2YXJ5IGJldHdlZW4gdGhlXG4gICAgLy8gY29uc3RydWN0aW9uIG9mIEZpcmViYXNlU2VydmVyQXBwIGluc3RhbmNlcy4gRm9yIGV4YW1wbGUsIGlmIHRoZSBvYmplY3QgaXMgdGhlIHJlcXVlc3QgaGVhZGVycy5cbiAgICBpZiAobmFtZU9iai5yZWxlYXNlT25EZXJlZiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlbGV0ZSBuYW1lT2JqLnJlbGVhc2VPbkRlcmVmO1xuICAgIH1cbiAgICBjb25zdCBoYXNoQ29kZSA9IChzKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4uc10ucmVkdWNlKChoYXNoLCBjKSA9PiAoTWF0aC5pbXVsKDMxLCBoYXNoKSArIGMuY2hhckNvZGVBdCgwKSkgfCAwLCAwKTtcbiAgICB9O1xuICAgIGlmIChfc2VydmVyQXBwQ29uZmlnLnJlbGVhc2VPbkRlcmVmICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZmluYWxpemF0aW9uLXJlZ2lzdHJ5LW5vdC1zdXBwb3J0ZWRcIiAvKiBBcHBFcnJvci5GSU5BTElaQVRJT05fUkVHSVNUUllfTk9UX1NVUFBPUlRFRCAqLywge30pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5hbWVTdHJpbmcgPSAnJyArIGhhc2hDb2RlKEpTT04uc3RyaW5naWZ5KG5hbWVPYmopKTtcbiAgICBjb25zdCBleGlzdGluZ0FwcCA9IF9zZXJ2ZXJBcHBzLmdldChuYW1lU3RyaW5nKTtcbiAgICBpZiAoZXhpc3RpbmdBcHApIHtcbiAgICAgICAgZXhpc3RpbmdBcHAuaW5jUmVmQ291bnQoX3NlcnZlckFwcENvbmZpZy5yZWxlYXNlT25EZXJlZik7XG4gICAgICAgIHJldHVybiBleGlzdGluZ0FwcDtcbiAgICB9XG4gICAgY29uc3QgY29udGFpbmVyID0gbmV3IENvbXBvbmVudENvbnRhaW5lcihuYW1lU3RyaW5nKTtcbiAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBfY29tcG9uZW50cy52YWx1ZXMoKSkge1xuICAgICAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0FwcCA9IG5ldyBGaXJlYmFzZVNlcnZlckFwcEltcGwoYXBwT3B0aW9ucywgX3NlcnZlckFwcENvbmZpZywgbmFtZVN0cmluZywgY29udGFpbmVyKTtcbiAgICBfc2VydmVyQXBwcy5zZXQobmFtZVN0cmluZywgbmV3QXBwKTtcbiAgICByZXR1cm4gbmV3QXBwO1xufVxuLyoqXG4gKiBSZXRyaWV2ZXMgYSB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXG4gKlxuICogV2hlbiBjYWxsZWQgd2l0aCBubyBhcmd1bWVudHMsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC4gV2hlbiBhbiBhcHAgbmFtZVxuICogaXMgcHJvdmlkZWQsIHRoZSBhcHAgY29ycmVzcG9uZGluZyB0byB0aGF0IG5hbWUgaXMgcmV0dXJuZWQuXG4gKlxuICogQW4gZXhjZXB0aW9uIGlzIHRocm93biBpZiB0aGUgYXBwIGJlaW5nIHJldHJpZXZlZCBoYXMgbm90IHlldCBiZWVuXG4gKiBpbml0aWFsaXplZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICogLy8gUmV0dXJuIHRoZSBkZWZhdWx0IGFwcFxuICogY29uc3QgYXBwID0gZ2V0QXBwKCk7XG4gKiBgYGBcbiAqXG4gKiBAZXhhbXBsZVxuICogYGBgamF2YXNjcmlwdFxuICogLy8gUmV0dXJuIGEgbmFtZWQgYXBwXG4gKiBjb25zdCBvdGhlckFwcCA9IGdldEFwcChcIm90aGVyQXBwXCIpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIG5hbWUgLSBPcHRpb25hbCBuYW1lIG9mIHRoZSBhcHAgdG8gcmV0dXJuLiBJZiBubyBuYW1lIGlzXG4gKiAgIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBpcyBgXCJbREVGQVVMVF1cImAuXG4gKlxuICogQHJldHVybnMgVGhlIGFwcCBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm92aWRlZCBhcHAgbmFtZS5cbiAqICAgSWYgbm8gYXBwIG5hbWUgaXMgcHJvdmlkZWQsIHRoZSBkZWZhdWx0IGFwcCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGdldEFwcChuYW1lID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XG4gICAgY29uc3QgYXBwID0gX2FwcHMuZ2V0KG5hbWUpO1xuICAgIGlmICghYXBwICYmIG5hbWUgPT09IERFRkFVTFRfRU5UUllfTkFNRSAmJiBnZXREZWZhdWx0QXBwQ29uZmlnKCkpIHtcbiAgICAgICAgcmV0dXJuIGluaXRpYWxpemVBcHAoKTtcbiAgICB9XG4gICAgaWYgKCFhcHApIHtcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJuby1hcHBcIiAvKiBBcHBFcnJvci5OT19BUFAgKi8sIHsgYXBwTmFtZTogbmFtZSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcDtcbn1cbi8qKlxuICogQSAocmVhZC1vbmx5KSBhcnJheSBvZiBhbGwgaW5pdGlhbGl6ZWQgYXBwcy5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gZ2V0QXBwcygpIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbShfYXBwcy52YWx1ZXMoKSk7XG59XG4vKipcbiAqIFJlbmRlcnMgdGhpcyBhcHAgdW51c2FibGUgYW5kIGZyZWVzIHRoZSByZXNvdXJjZXMgb2YgYWxsIGFzc29jaWF0ZWRcbiAqIHNlcnZpY2VzLlxuICpcbiAqIEBleGFtcGxlXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBkZWxldGVBcHAoYXBwKVxuICogICAudGhlbihmdW5jdGlvbigpIHtcbiAqICAgICBjb25zb2xlLmxvZyhcIkFwcCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAqICAgfSlcbiAqICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gKiAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyBhcHA6XCIsIGVycm9yKTtcbiAqICAgfSk7XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFwcChhcHApIHtcbiAgICBsZXQgY2xlYW51cFByb3ZpZGVycyA9IGZhbHNlO1xuICAgIGNvbnN0IG5hbWUgPSBhcHAubmFtZTtcbiAgICBpZiAoX2FwcHMuaGFzKG5hbWUpKSB7XG4gICAgICAgIGNsZWFudXBQcm92aWRlcnMgPSB0cnVlO1xuICAgICAgICBfYXBwcy5kZWxldGUobmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKF9zZXJ2ZXJBcHBzLmhhcyhuYW1lKSkge1xuICAgICAgICBjb25zdCBmaXJlYmFzZVNlcnZlckFwcCA9IGFwcDtcbiAgICAgICAgaWYgKGZpcmViYXNlU2VydmVyQXBwLmRlY1JlZkNvdW50KCkgPD0gMCkge1xuICAgICAgICAgICAgX3NlcnZlckFwcHMuZGVsZXRlKG5hbWUpO1xuICAgICAgICAgICAgY2xlYW51cFByb3ZpZGVycyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNsZWFudXBQcm92aWRlcnMpIHtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXBwLmNvbnRhaW5lclxuICAgICAgICAgICAgLmdldFByb3ZpZGVycygpXG4gICAgICAgICAgICAubWFwKHByb3ZpZGVyID0+IHByb3ZpZGVyLmRlbGV0ZSgpKSk7XG4gICAgICAgIGFwcC5pc0RlbGV0ZWQgPSB0cnVlO1xuICAgIH1cbn1cbi8qKlxuICogUmVnaXN0ZXJzIGEgbGlicmFyeSdzIG5hbWUgYW5kIHZlcnNpb24gZm9yIHBsYXRmb3JtIGxvZ2dpbmcgcHVycG9zZXMuXG4gKiBAcGFyYW0gbGlicmFyeSAtIE5hbWUgb2YgMXAgb3IgM3AgbGlicmFyeSAoZS5nLiBmaXJlc3RvcmUsIGFuZ3VsYXJmaXJlKVxuICogQHBhcmFtIHZlcnNpb24gLSBDdXJyZW50IHZlcnNpb24gb2YgdGhhdCBsaWJyYXJ5LlxuICogQHBhcmFtIHZhcmlhbnQgLSBCdW5kbGUgdmFyaWFudCwgZS5nLiwgbm9kZSwgcm4sIGV0Yy5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyVmVyc2lvbihsaWJyYXJ5S2V5T3JOYW1lLCB2ZXJzaW9uLCB2YXJpYW50KSB7XG4gICAgdmFyIF9hO1xuICAgIC8vIFRPRE86IFdlIGNhbiB1c2UgdGhpcyBjaGVjayB0byB3aGl0ZWxpc3Qgc3RyaW5ncyB3aGVuL2lmIHdlIHNldCB1cFxuICAgIC8vIGEgZ29vZCB3aGl0ZWxpc3Qgc3lzdGVtLlxuICAgIGxldCBsaWJyYXJ5ID0gKF9hID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbGlicmFyeUtleU9yTmFtZTtcbiAgICBpZiAodmFyaWFudCkge1xuICAgICAgICBsaWJyYXJ5ICs9IGAtJHt2YXJpYW50fWA7XG4gICAgfVxuICAgIGNvbnN0IGxpYnJhcnlNaXNtYXRjaCA9IGxpYnJhcnkubWF0Y2goL1xcc3xcXC8vKTtcbiAgICBjb25zdCB2ZXJzaW9uTWlzbWF0Y2ggPSB2ZXJzaW9uLm1hdGNoKC9cXHN8XFwvLyk7XG4gICAgaWYgKGxpYnJhcnlNaXNtYXRjaCB8fCB2ZXJzaW9uTWlzbWF0Y2gpIHtcbiAgICAgICAgY29uc3Qgd2FybmluZyA9IFtcbiAgICAgICAgICAgIGBVbmFibGUgdG8gcmVnaXN0ZXIgbGlicmFyeSBcIiR7bGlicmFyeX1cIiB3aXRoIHZlcnNpb24gXCIke3ZlcnNpb259XCI6YFxuICAgICAgICBdO1xuICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoKSB7XG4gICAgICAgICAgICB3YXJuaW5nLnB1c2goYGxpYnJhcnkgbmFtZSBcIiR7bGlicmFyeX1cIiBjb250YWlucyBpbGxlZ2FsIGNoYXJhY3RlcnMgKHdoaXRlc3BhY2Ugb3IgXCIvXCIpYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxpYnJhcnlNaXNtYXRjaCAmJiB2ZXJzaW9uTWlzbWF0Y2gpIHtcbiAgICAgICAgICAgIHdhcm5pbmcucHVzaCgnYW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZlcnNpb25NaXNtYXRjaCkge1xuICAgICAgICAgICAgd2FybmluZy5wdXNoKGB2ZXJzaW9uIG5hbWUgXCIke3ZlcnNpb259XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWApO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci53YXJuKHdhcm5pbmcuam9pbignICcpKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChgJHtsaWJyYXJ5fS12ZXJzaW9uYCwgKCkgPT4gKHsgbGlicmFyeSwgdmVyc2lvbiB9KSwgXCJWRVJTSU9OXCIgLyogQ29tcG9uZW50VHlwZS5WRVJTSU9OICovKSk7XG59XG4vKipcbiAqIFNldHMgbG9nIGhhbmRsZXIgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxuICogQHBhcmFtIGxvZ0NhbGxiYWNrIC0gQW4gb3B0aW9uYWwgY3VzdG9tIGxvZyBoYW5kbGVyIHRoYXQgZXhlY3V0ZXMgdXNlciBjb2RlIHdoZW5ldmVyXG4gKiB0aGUgRmlyZWJhc2UgU0RLIG1ha2VzIGEgbG9nZ2luZyBjYWxsLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gb25Mb2cobG9nQ2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBpZiAobG9nQ2FsbGJhY2sgIT09IG51bGwgJiYgdHlwZW9mIGxvZ0NhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaW52YWxpZC1sb2ctYXJndW1lbnRcIiAvKiBBcHBFcnJvci5JTlZBTElEX0xPR19BUkdVTUVOVCAqLyk7XG4gICAgfVxuICAgIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKTtcbn1cbi8qKlxuICogU2V0cyBsb2cgbGV2ZWwgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxuICpcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCBhcmUgY2FwdHVyZWQgKGkuZS4gaWZcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgaW5mb2AsIGVycm9ycyBhcmUgbG9nZ2VkLCBidXQgYGRlYnVnYCBhbmRcbiAqIGB2ZXJib3NlYCBsb2dzIGFyZSBub3QpLlxuICpcbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nTGV2ZWwpIHtcbiAgICBzZXRMb2dMZXZlbCQxKGxvZ0xldmVsKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IERCX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LWRhdGFiYXNlJztcbmNvbnN0IERCX1ZFUlNJT04gPSAxO1xuY29uc3QgU1RPUkVfTkFNRSA9ICdmaXJlYmFzZS1oZWFydGJlYXQtc3RvcmUnO1xubGV0IGRiUHJvbWlzZSA9IG51bGw7XG5mdW5jdGlvbiBnZXREYlByb21pc2UoKSB7XG4gICAgaWYgKCFkYlByb21pc2UpIHtcbiAgICAgICAgZGJQcm9taXNlID0gb3BlbkRCKERCX05BTUUsIERCX1ZFUlNJT04sIHtcbiAgICAgICAgICAgIHVwZ3JhZGU6IChkYiwgb2xkVmVyc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxuICAgICAgICAgICAgICAgIC8vIHRoZSBvbGQgdmVyc2lvbiBhbmQgdGhlIGN1cnJlbnQgdmVyc2lvbiwgd2Ugd2FudCBBTEwgdGhlIG1pZ3JhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgICAgICAgICAgICAgIHN3aXRjaCAob2xkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRiLmNyZWF0ZU9iamVjdFN0b3JlKFNUT1JFX05BTUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTYWZhcmkvaU9TIGJyb3dzZXJzIHRocm93IG9jY2FzaW9uYWwgZXhjZXB0aW9ucyBvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRiLmNyZWF0ZU9iamVjdFN0b3JlKCkgdGhhdCBtYXkgYmUgYSBidWcuIEF2b2lkIGJsb2NraW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIHJlc3Qgb2YgdGhlIGFwcCBmdW5jdGlvbmFsaXR5LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpZGItb3BlblwiIC8qIEFwcEVycm9yLklEQl9PUEVOICovLCB7XG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IGUubWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZGJQcm9taXNlO1xufVxuYXN5bmMgZnVuY3Rpb24gcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCKGFwcCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpLmdldChjb21wdXRlS2V5KGFwcCkpO1xuICAgICAgICAvLyBXZSBhbHJlYWR5IGhhdmUgdGhlIHZhbHVlIGJ1dCB0eC5kb25lIGNhbiB0aHJvdyxcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBhd2FpdCBpdCBoZXJlIHRvIGNhdGNoIGVycm9yc1xuICAgICAgICBhd2FpdCB0eC5kb25lO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpZGJHZXRFcnJvciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaWRiLWdldFwiIC8qIEFwcEVycm9yLklEQl9HRVQgKi8sIHtcbiAgICAgICAgICAgICAgICBvcmlnaW5hbEVycm9yTWVzc2FnZTogZSA9PT0gbnVsbCB8fCBlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlLm1lc3NhZ2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oaWRiR2V0RXJyb3IubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQihhcHAsIGhlYXJ0YmVhdE9iamVjdCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICAgICAgICBjb25zdCBvYmplY3RTdG9yZSA9IHR4Lm9iamVjdFN0b3JlKFNUT1JFX05BTUUpO1xuICAgICAgICBhd2FpdCBvYmplY3RTdG9yZS5wdXQoaGVhcnRiZWF0T2JqZWN0LCBjb21wdXRlS2V5KGFwcCkpO1xuICAgICAgICBhd2FpdCB0eC5kb25lO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IpIHtcbiAgICAgICAgICAgIGxvZ2dlci53YXJuKGUubWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBpZGJHZXRFcnJvciA9IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiaWRiLXNldFwiIC8qIEFwcEVycm9yLklEQl9XUklURSAqLywge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiBlID09PSBudWxsIHx8IGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGUubWVzc2FnZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2dnZXIud2FybihpZGJHZXRFcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbXB1dGVLZXkoYXBwKSB7XG4gICAgcmV0dXJuIGAke2FwcC5uYW1lfSEke2FwcC5vcHRpb25zLmFwcElkfWA7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBNQVhfSEVBREVSX0JZVEVTID0gMTAyNDtcbmNvbnN0IE1BWF9OVU1fU1RPUkVEX0hFQVJUQkVBVFMgPSAzMDtcbmNsYXNzIEhlYXJ0YmVhdFNlcnZpY2VJbXBsIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJbi1tZW1vcnkgY2FjaGUgZm9yIGhlYXJ0YmVhdHMsIHVzZWQgYnkgZ2V0SGVhcnRiZWF0c0hlYWRlcigpIHRvIGdlbmVyYXRlXG4gICAgICAgICAqIHRoZSBoZWFkZXIgc3RyaW5nLlxuICAgICAgICAgKiBTdG9yZXMgb25lIHJlY29yZCBwZXIgZGF0ZS4gVGhpcyB3aWxsIGJlIGNvbnNvbGlkYXRlZCBpbnRvIHRoZSBzdGFuZGFyZFxuICAgICAgICAgKiBmb3JtYXQgb2Ygb25lIHJlY29yZCBwZXIgdXNlciBhZ2VudCBzdHJpbmcgYmVmb3JlIGJlaW5nIHNlbnQgYXMgYSBoZWFkZXIuXG4gICAgICAgICAqIFBvcHVsYXRlZCBmcm9tIGluZGV4ZWREQiB3aGVuIHRoZSBjb250cm9sbGVyIGlzIGluc3RhbnRpYXRlZCBhbmQgc2hvdWxkXG4gICAgICAgICAqIGJlIGtlcHQgaW4gc3luYyB3aXRoIGluZGV4ZWREQi5cbiAgICAgICAgICogTGVhdmUgcHVibGljIGZvciBlYXNpZXIgdGVzdGluZy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9IG51bGw7XG4gICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgICAgICAgdGhpcy5fc3RvcmFnZSA9IG5ldyBIZWFydGJlYXRTdG9yYWdlSW1wbChhcHApO1xuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlID0gdGhpcy5fc3RvcmFnZS5yZWFkKCkudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID0gcmVzdWx0O1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGxlZCB0byByZXBvcnQgYSBoZWFydGJlYXQuIFRoZSBmdW5jdGlvbiB3aWxsIGdlbmVyYXRlXG4gICAgICogYSBIZWFydGJlYXRzQnlVc2VyQWdlbnQgb2JqZWN0LCB1cGRhdGUgaGVhcnRiZWF0c0NhY2hlLCBhbmQgcGVyc2lzdCBpdFxuICAgICAqIHRvIEluZGV4ZWREQi5cbiAgICAgKiBOb3RlIHRoYXQgd2Ugb25seSBzdG9yZSBvbmUgaGVhcnRiZWF0IHBlciBkYXkuIFNvIGlmIGEgaGVhcnRiZWF0IGZvciB0b2RheSBpc1xuICAgICAqIGFscmVhZHkgbG9nZ2VkLCBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoaXMgZnVuY3Rpb24gaW4gdGhlIHNhbWUgZGF5IHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKi9cbiAgICBhc3luYyB0cmlnZ2VySGVhcnRiZWF0KCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGxhdGZvcm1Mb2dnZXIgPSB0aGlzLmNvbnRhaW5lclxuICAgICAgICAgICAgICAgIC5nZXRQcm92aWRlcigncGxhdGZvcm0tbG9nZ2VyJylcbiAgICAgICAgICAgICAgICAuZ2V0SW1tZWRpYXRlKCk7XG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBcIkZpcmViYXNlIHVzZXIgYWdlbnRcIiBzdHJpbmcgZnJvbSB0aGUgcGxhdGZvcm0gbG9nZ2VyXG4gICAgICAgICAgICAvLyBzZXJ2aWNlLCBub3QgdGhlIGJyb3dzZXIgdXNlciBhZ2VudC5cbiAgICAgICAgICAgIGNvbnN0IGFnZW50ID0gcGxhdGZvcm1Mb2dnZXIuZ2V0UGxhdGZvcm1JbmZvU3RyaW5nKCk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xuICAgICAgICAgICAgaWYgKCgoX2EgPSB0aGlzLl9oZWFydGJlYXRzQ2FjaGUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5oZWFydGJlYXRzKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID0gYXdhaXQgdGhpcy5faGVhcnRiZWF0c0NhY2hlUHJvbWlzZTtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBmYWlsZWQgdG8gY29uc3RydWN0IGEgaGVhcnRiZWF0cyBjYWNoZSwgdGhlbiByZXR1cm4gaW1tZWRpYXRlbHkuXG4gICAgICAgICAgICAgICAgaWYgKCgoX2IgPSB0aGlzLl9oZWFydGJlYXRzQ2FjaGUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5oZWFydGJlYXRzKSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBEbyBub3Qgc3RvcmUgYSBoZWFydGJlYXQgaWYgb25lIGlzIGFscmVhZHkgc3RvcmVkIGZvciB0aGlzIGRheVxuICAgICAgICAgICAgLy8gb3IgaWYgYSBoZWFkZXIgaGFzIGFscmVhZHkgYmVlbiBzZW50IHRvZGF5LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5sYXN0U2VudEhlYXJ0YmVhdERhdGUgPT09IGRhdGUgfHxcbiAgICAgICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5zb21lKHNpbmdsZURhdGVIZWFydGJlYXQgPT4gc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlID09PSBkYXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIGVudHJ5IGZvciB0aGlzIGRhdGUuIENyZWF0ZSBvbmUuXG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMucHVzaCh7IGRhdGUsIGFnZW50IH0pO1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBudW1iZXIgb2Ygc3RvcmVkIGhlYXJ0YmVhdHMgZXhjZWVkcyB0aGUgbWF4aW11bSBudW1iZXIgb2Ygc3RvcmVkIGhlYXJ0YmVhdHMsIHJlbW92ZSB0aGUgaGVhcnRiZWF0IHdpdGggdGhlIGVhcmxpZXN0IGRhdGUuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBpcyBleGVjdXRlZCBlYWNoIHRpbWUgYSBoZWFydGJlYXQgaXMgcHVzaGVkLCB0aGUgbGltaXQgY2FuIG9ubHkgYmUgZXhjZWVkZWQgYnkgb25lLCBzbyBvbmx5IG9uZSBuZWVkcyB0byBiZSByZW1vdmVkLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5sZW5ndGggPiBNQVhfTlVNX1NUT1JFRF9IRUFSVEJFQVRTKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVhcmxpZXN0SGVhcnRiZWF0SWR4ID0gZ2V0RWFybGllc3RIZWFydGJlYXRJZHgodGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5zcGxpY2UoZWFybGllc3RIZWFydGJlYXRJZHgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIud2FybihlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIHdoaWNoIGNhbiBiZSBhdHRhY2hlZCB0byB0aGUgaGVhcnRiZWF0LXNwZWNpZmljIGhlYWRlciBkaXJlY3RseS5cbiAgICAgKiBJdCBhbHNvIGNsZWFycyBhbGwgaGVhcnRiZWF0cyBmcm9tIG1lbW9yeSBhcyB3ZWxsIGFzIGluIEluZGV4ZWREQi5cbiAgICAgKlxuICAgICAqIE5PVEU6IENvbnN1bWluZyBwcm9kdWN0IFNES3Mgc2hvdWxkIG5vdCBzZW5kIHRoZSBoZWFkZXIgaWYgdGhpcyBtZXRob2RcbiAgICAgKiByZXR1cm5zIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRIZWFydGJlYXRzSGVhZGVyKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faGVhcnRiZWF0c0NhY2hlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5faGVhcnRiZWF0c0NhY2hlUHJvbWlzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGl0J3Mgc3RpbGwgbnVsbCBvciB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZXJlIGlzIG5vIGRhdGEgdG8gc2VuZC5cbiAgICAgICAgICAgIGlmICgoKF9hID0gdGhpcy5faGVhcnRiZWF0c0NhY2hlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGVhcnRiZWF0cykgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBnZXRVVENEYXRlU3RyaW5nKCk7XG4gICAgICAgICAgICAvLyBFeHRyYWN0IGFzIG1hbnkgaGVhcnRiZWF0cyBmcm9tIHRoZSBjYWNoZSBhcyB3aWxsIGZpdCB1bmRlciB0aGUgc2l6ZSBsaW1pdC5cbiAgICAgICAgICAgIGNvbnN0IHsgaGVhcnRiZWF0c1RvU2VuZCwgdW5zZW50RW50cmllcyB9ID0gZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIodGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyU3RyaW5nID0gYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzVG9TZW5kIH0pKTtcbiAgICAgICAgICAgIC8vIFN0b3JlIGxhc3Qgc2VudCBkYXRlIHRvIHByZXZlbnQgYW5vdGhlciBiZWluZyBsb2dnZWQvc2VudCBmb3IgdGhlIHNhbWUgZGF5LlxuICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA9IGRhdGU7XG4gICAgICAgICAgICBpZiAodW5zZW50RW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgYW55IHVuc2VudCBlbnRyaWVzIGlmIHRoZXkgZXhpc3QuXG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSB1bnNlbnRFbnRyaWVzO1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgc2VlbXMgbW9yZSBsaWtlbHkgdGhhbiBlbXB0eWluZyB0aGUgYXJyYXkgKGJlbG93KSB0byBsZWFkIHRvIHNvbWUgb2RkIHN0YXRlXG4gICAgICAgICAgICAgICAgLy8gc2luY2UgdGhlIGNhY2hlIGlzbid0IGVtcHR5IGFuZCB0aGlzIHdpbGwgYmUgY2FsbGVkIGFnYWluIG9uIHRoZSBuZXh0IHJlcXVlc3QsXG4gICAgICAgICAgICAgICAgLy8gYW5kIGlzIHByb2JhYmx5IHNhZmVzdCBpZiB3ZSBhd2FpdCBpdC5cbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSBbXTtcbiAgICAgICAgICAgICAgICAvLyBEbyBub3Qgd2FpdCBmb3IgdGhpcywgdG8gcmVkdWNlIGxhdGVuY3kuXG4gICAgICAgICAgICAgICAgdm9pZCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhlYWRlclN0cmluZztcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgbG9nZ2VyLndhcm4oZSk7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBnZXRVVENEYXRlU3RyaW5nKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAvLyBSZXR1cm5zIGRhdGUgZm9ybWF0ICdZWVlZLU1NLUREJ1xuICAgIHJldHVybiB0b2RheS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCk7XG59XG5mdW5jdGlvbiBleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlcihoZWFydGJlYXRzQ2FjaGUsIG1heFNpemUgPSBNQVhfSEVBREVSX0JZVEVTKSB7XG4gICAgLy8gSGVhcnRiZWF0cyBncm91cGVkIGJ5IHVzZXIgYWdlbnQgaW4gdGhlIHN0YW5kYXJkIGZvcm1hdCB0byBiZSBzZW50IGluXG4gICAgLy8gdGhlIGhlYWRlci5cbiAgICBjb25zdCBoZWFydGJlYXRzVG9TZW5kID0gW107XG4gICAgLy8gU2luZ2xlIGRhdGUgZm9ybWF0IGhlYXJ0YmVhdHMgdGhhdCBhcmUgbm90IHNlbnQuXG4gICAgbGV0IHVuc2VudEVudHJpZXMgPSBoZWFydGJlYXRzQ2FjaGUuc2xpY2UoKTtcbiAgICBmb3IgKGNvbnN0IHNpbmdsZURhdGVIZWFydGJlYXQgb2YgaGVhcnRiZWF0c0NhY2hlKSB7XG4gICAgICAgIC8vIExvb2sgZm9yIGFuIGV4aXN0aW5nIGVudHJ5IHdpdGggdGhlIHNhbWUgdXNlciBhZ2VudC5cbiAgICAgICAgY29uc3QgaGVhcnRiZWF0RW50cnkgPSBoZWFydGJlYXRzVG9TZW5kLmZpbmQoaGIgPT4gaGIuYWdlbnQgPT09IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnQpO1xuICAgICAgICBpZiAoIWhlYXJ0YmVhdEVudHJ5KSB7XG4gICAgICAgICAgICAvLyBJZiBubyBlbnRyeSBmb3IgdGhpcyB1c2VyIGFnZW50IGV4aXN0cywgY3JlYXRlIG9uZS5cbiAgICAgICAgICAgIGhlYXJ0YmVhdHNUb1NlbmQucHVzaCh7XG4gICAgICAgICAgICAgICAgYWdlbnQ6IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnQsXG4gICAgICAgICAgICAgICAgZGF0ZXM6IFtzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGVdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjb3VudEJ5dGVzKGhlYXJ0YmVhdHNUb1NlbmQpID4gbWF4U2l6ZSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSBoZWFkZXIgd291bGQgZXhjZWVkIG1heCBzaXplLCByZW1vdmUgdGhlIGFkZGVkIGhlYXJ0YmVhdFxuICAgICAgICAgICAgICAgIC8vIGVudHJ5IGFuZCBzdG9wIGFkZGluZyB0byB0aGUgaGVhZGVyLlxuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdHNUb1NlbmQucG9wKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoZWFydGJlYXRFbnRyeS5kYXRlcy5wdXNoKHNpbmdsZURhdGVIZWFydGJlYXQuZGF0ZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgaGVhZGVyIHdvdWxkIGV4Y2VlZCBtYXggc2l6ZSwgcmVtb3ZlIHRoZSBhZGRlZCBkYXRlXG4gICAgICAgICAgICAvLyBhbmQgc3RvcCBhZGRpbmcgdG8gdGhlIGhlYWRlci5cbiAgICAgICAgICAgIGlmIChjb3VudEJ5dGVzKGhlYXJ0YmVhdHNUb1NlbmQpID4gbWF4U2l6ZSkge1xuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdEVudHJ5LmRhdGVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFBvcCB1bnNlbnQgZW50cnkgZnJvbSBxdWV1ZS4gKFNraXBwZWQgaWYgYWRkaW5nIHRoZSBlbnRyeSBleGNlZWRlZFxuICAgICAgICAvLyBxdW90YSBhbmQgdGhlIGxvb3AgYnJlYWtzIGVhcmx5LilcbiAgICAgICAgdW5zZW50RW50cmllcyA9IHVuc2VudEVudHJpZXMuc2xpY2UoMSk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGhlYXJ0YmVhdHNUb1NlbmQsXG4gICAgICAgIHVuc2VudEVudHJpZXNcbiAgICB9O1xufVxuY2xhc3MgSGVhcnRiZWF0U3RvcmFnZUltcGwge1xuICAgIGNvbnN0cnVjdG9yKGFwcCkge1xuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICAgICAgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZSA9IHRoaXMucnVuSW5kZXhlZERCRW52aXJvbm1lbnRDaGVjaygpO1xuICAgIH1cbiAgICBhc3luYyBydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrKCkge1xuICAgICAgICBpZiAoIWlzSW5kZXhlZERCQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZUluZGV4ZWREQk9wZW5hYmxlKClcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0cnVlKVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVhZCBhbGwgaGVhcnRiZWF0cy5cbiAgICAgKi9cbiAgICBhc3luYyByZWFkKCkge1xuICAgICAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xuICAgICAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xuICAgICAgICAgICAgcmV0dXJuIHsgaGVhcnRiZWF0czogW10gfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGlkYkhlYXJ0YmVhdE9iamVjdCA9IGF3YWl0IHJlYWRIZWFydGJlYXRzRnJvbUluZGV4ZWREQih0aGlzLmFwcCk7XG4gICAgICAgICAgICBpZiAoaWRiSGVhcnRiZWF0T2JqZWN0ID09PSBudWxsIHx8IGlkYkhlYXJ0YmVhdE9iamVjdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogaWRiSGVhcnRiZWF0T2JqZWN0LmhlYXJ0YmVhdHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaWRiSGVhcnRiZWF0T2JqZWN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaGVhcnRiZWF0czogW10gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBvdmVyd3JpdGUgdGhlIHN0b3JhZ2Ugd2l0aCB0aGUgcHJvdmlkZWQgaGVhcnRiZWF0c1xuICAgIGFzeW5jIG92ZXJ3cml0ZShoZWFydGJlYXRzT2JqZWN0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcbiAgICAgICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nSGVhcnRiZWF0c09iamVjdCA9IGF3YWl0IHRoaXMucmVhZCgpO1xuICAgICAgICAgICAgcmV0dXJuIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XG4gICAgICAgICAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOiAoX2EgPSBoZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRzOiBoZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGFkZCBoZWFydGJlYXRzXG4gICAgYXN5bmMgYWRkKGhlYXJ0YmVhdHNPYmplY3QpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBjYW5Vc2VJbmRleGVkREIgPSBhd2FpdCB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlO1xuICAgICAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0ID0gYXdhaXQgdGhpcy5yZWFkKCk7XG4gICAgICAgICAgICByZXR1cm4gd3JpdGVIZWFydGJlYXRzVG9JbmRleGVkREIodGhpcy5hcHAsIHtcbiAgICAgICAgICAgICAgICBsYXN0U2VudEhlYXJ0YmVhdERhdGU6IChfYSA9IGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlLFxuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdHM6IFtcbiAgICAgICAgICAgICAgICAgICAgLi4uZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0LmhlYXJ0YmVhdHMsXG4gICAgICAgICAgICAgICAgICAgIC4uLmhlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0c1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBDYWxjdWxhdGUgYnl0ZXMgb2YgYSBIZWFydGJlYXRzQnlVc2VyQWdlbnQgYXJyYXkgYWZ0ZXIgYmVpbmcgd3JhcHBlZFxuICogaW4gYSBwbGF0Zm9ybSBsb2dnaW5nIGhlYWRlciBKU09OIG9iamVjdCwgc3RyaW5naWZpZWQsIGFuZCBjb252ZXJ0ZWRcbiAqIHRvIGJhc2UgNjQuXG4gKi9cbmZ1bmN0aW9uIGNvdW50Qnl0ZXMoaGVhcnRiZWF0c0NhY2hlKSB7XG4gICAgLy8gYmFzZTY0IGhhcyBhIHJlc3RyaWN0ZWQgc2V0IG9mIGNoYXJhY3RlcnMsIGFsbCBvZiB3aGljaCBzaG91bGQgYmUgMSBieXRlLlxuICAgIHJldHVybiBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhcbiAgICAvLyBoZWFydGJlYXRzQ2FjaGUgd3JhcHBlciBwcm9wZXJ0aWVzXG4gICAgSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzQ2FjaGUgfSkpLmxlbmd0aDtcbn1cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGhlYXJ0YmVhdCB3aXRoIHRoZSBlYXJsaWVzdCBkYXRlLlxuICogSWYgdGhlIGhlYXJ0YmVhdHMgYXJyYXkgaXMgZW1wdHksIC0xIGlzIHJldHVybmVkLlxuICovXG5mdW5jdGlvbiBnZXRFYXJsaWVzdEhlYXJ0YmVhdElkeChoZWFydGJlYXRzKSB7XG4gICAgaWYgKGhlYXJ0YmVhdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgbGV0IGVhcmxpZXN0SGVhcnRiZWF0SWR4ID0gMDtcbiAgICBsZXQgZWFybGllc3RIZWFydGJlYXREYXRlID0gaGVhcnRiZWF0c1swXS5kYXRlO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgaGVhcnRiZWF0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaGVhcnRiZWF0c1tpXS5kYXRlIDwgZWFybGllc3RIZWFydGJlYXREYXRlKSB7XG4gICAgICAgICAgICBlYXJsaWVzdEhlYXJ0YmVhdERhdGUgPSBoZWFydGJlYXRzW2ldLmRhdGU7XG4gICAgICAgICAgICBlYXJsaWVzdEhlYXJ0YmVhdElkeCA9IGk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVhcmxpZXN0SGVhcnRiZWF0SWR4O1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gcmVnaXN0ZXJDb3JlQ29tcG9uZW50cyh2YXJpYW50KSB7XG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ3BsYXRmb3JtLWxvZ2dlcicsIGNvbnRhaW5lciA9PiBuZXcgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbChjb250YWluZXIpLCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudCgnaGVhcnRiZWF0JywgY29udGFpbmVyID0+IG5ldyBIZWFydGJlYXRTZXJ2aWNlSW1wbChjb250YWluZXIpLCBcIlBSSVZBVEVcIiAvKiBDb21wb25lbnRUeXBlLlBSSVZBVEUgKi8pKTtcbiAgICAvLyBSZWdpc3RlciBgYXBwYCBwYWNrYWdlLlxuICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJHEsIHZlcnNpb24kMSwgdmFyaWFudCk7XG4gICAgLy8gQlVJTERfVEFSR0VUIHdpbGwgYmUgcmVwbGFjZWQgYnkgdmFsdWVzIGxpa2UgZXNtMjAxNywgY2pzMjAxNywgZXRjIGR1cmluZyB0aGUgY29tcGlsYXRpb25cbiAgICByZWdpc3RlclZlcnNpb24obmFtZSRxLCB2ZXJzaW9uJDEsICdlc20yMDE3Jyk7XG4gICAgLy8gUmVnaXN0ZXIgcGxhdGZvcm0gU0RLIGlkZW50aWZpZXIgKG5vIHZlcnNpb24pLlxuICAgIHJlZ2lzdGVyVmVyc2lvbignZmlyZS1qcycsICcnKTtcbn1cblxuLyoqXG4gKiBGaXJlYmFzZSBBcHBcbiAqXG4gKiBAcmVtYXJrcyBUaGlzIHBhY2thZ2UgY29vcmRpbmF0ZXMgdGhlIGNvbW11bmljYXRpb24gYmV0d2VlbiB0aGUgZGlmZmVyZW50IEZpcmViYXNlIGNvbXBvbmVudHNcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5yZWdpc3RlckNvcmVDb21wb25lbnRzKCcnKTtcblxuZXhwb3J0IHsgU0RLX1ZFUlNJT04sIERFRkFVTFRfRU5UUllfTkFNRSBhcyBfREVGQVVMVF9FTlRSWV9OQU1FLCBfYWRkQ29tcG9uZW50LCBfYWRkT3JPdmVyd3JpdGVDb21wb25lbnQsIF9hcHBzLCBfY2xlYXJDb21wb25lbnRzLCBfY29tcG9uZW50cywgX2dldFByb3ZpZGVyLCBfaXNGaXJlYmFzZUFwcCwgX2lzRmlyZWJhc2VTZXJ2ZXJBcHAsIF9yZWdpc3RlckNvbXBvbmVudCwgX3JlbW92ZVNlcnZpY2VJbnN0YW5jZSwgX3NlcnZlckFwcHMsIGRlbGV0ZUFwcCwgZ2V0QXBwLCBnZXRBcHBzLCBpbml0aWFsaXplQXBwLCBpbml0aWFsaXplU2VydmVyQXBwLCBvbkxvZywgcmVnaXN0ZXJWZXJzaW9uLCBzZXRMb2dMZXZlbCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtMjAxNy5qcy5tYXBcbiIsImltcG9ydCB7IERlZmVycmVkIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuXG4vKipcbiAqIENvbXBvbmVudCBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcbiAqL1xuY2xhc3MgQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBwdWJsaWMgc2VydmljZSBuYW1lLCBlLmcuIGFwcCwgYXV0aCwgZmlyZXN0b3JlLCBkYXRhYmFzZVxuICAgICAqIEBwYXJhbSBpbnN0YW5jZUZhY3RvcnkgU2VydmljZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcHVibGljIGludGVyZmFjZVxuICAgICAqIEBwYXJhbSB0eXBlIHdoZXRoZXIgdGhlIHNlcnZpY2UgcHJvdmlkZWQgYnkgdGhlIGNvbXBvbmVudCBpcyBwdWJsaWMgb3IgcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluc3RhbmNlRmFjdG9yeSwgdHlwZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmluc3RhbmNlRmFjdG9yeSA9IGluc3RhbmNlRmFjdG9yeTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyA9IGZhbHNlO1xuICAgICAgICAvKipcbiAgICAgICAgICogUHJvcGVydGllcyB0byBiZSBhZGRlZCB0byB0aGUgc2VydmljZSBuYW1lc3BhY2VcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2VydmljZVByb3BzID0ge307XG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBcIkxBWllcIiAvKiBJbnN0YW50aWF0aW9uTW9kZS5MQVpZICovO1xuICAgICAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gbnVsbDtcbiAgICB9XG4gICAgc2V0SW5zdGFudGlhdGlvbk1vZGUobW9kZSkge1xuICAgICAgICB0aGlzLmluc3RhbnRpYXRpb25Nb2RlID0gbW9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldE11bHRpcGxlSW5zdGFuY2VzKG11bHRpcGxlSW5zdGFuY2VzKSB7XG4gICAgICAgIHRoaXMubXVsdGlwbGVJbnN0YW5jZXMgPSBtdWx0aXBsZUluc3RhbmNlcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHNldFNlcnZpY2VQcm9wcyhwcm9wcykge1xuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgc2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICAgICAgdGhpcy5vbkluc3RhbmNlQ3JlYXRlZCA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUHJvdmlkZXIgZm9yIGluc3RhbmNlIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiAnYXV0aCcsICdhdXRoLWludGVybmFsJ1xuICogTmFtZVNlcnZpY2VNYXBwaW5nW1RdIGlzIGFuIGFsaWFzIGZvciB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2VcbiAqL1xuY2xhc3MgUHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm9uSW5pdENhbGxiYWNrcyA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXG4gICAgICogaWYgdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgaXMgdHJ1ZS5cbiAgICAgKi9cbiAgICBnZXQoaWRlbnRpZmllcikge1xuICAgICAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuaGFzKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBkZWZlcnJlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdWxkQXV0b0luaXRpYWxpemUoKSkge1xuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemUgdGhlIHNlcnZpY2UgaWYgaXQgY2FuIGJlIGF1dG8taW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLnJlc29sdmUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgZ2V0KCksIGl0IHNob3VsZCBub3QgY2F1c2VcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCByZXR1cm4gdGhlIHVucmVzb2x2ZWQgcHJvbWlzZSBpbiB0aGlzIGNhc2UuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmdldChub3JtYWxpemVkSWRlbnRpZmllcikucHJvbWlzZTtcbiAgICB9XG4gICAgZ2V0SW1tZWRpYXRlKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pZGVudGlmaWVyKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uYWwgPSAoX2EgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMub3B0aW9uYWwpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxuICAgICAgICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gSW4gY2FzZSBhIGNvbXBvbmVudCBpcyBub3QgaW5pdGlhbGl6ZWQgYW5kIHNob3VsZC9jYW5ub3QgYmUgYXV0by1pbml0aWFsaXplZCBhdCB0aGUgbW9tZW50LCByZXR1cm4gbnVsbCBpZiB0aGUgb3B0aW9uYWwgZmxhZyBpcyBzZXQsIG9yIHRocm93XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBTZXJ2aWNlICR7dGhpcy5uYW1lfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQ7XG4gICAgfVxuICAgIHNldENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGNvbXBvbmVudC5uYW1lICE9PSB0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBNaXNtYXRjaGluZyBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZm9yIFByb3ZpZGVyICR7dGhpcy5uYW1lfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb21wb25lbnQgZm9yICR7dGhpcy5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHByb3ZpZGVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnQgPSBjb21wb25lbnQ7XG4gICAgICAgIC8vIHJldHVybiBlYXJseSB3aXRob3V0IGF0dGVtcHRpbmcgdG8gaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGlmIHRoZSBjb21wb25lbnQgcmVxdWlyZXMgZXhwbGljaXQgaW5pdGlhbGl6YXRpb24gKGNhbGxpbmcgYFByb3ZpZGVyLmluaXRpYWxpemUoKWApXG4gICAgICAgIGlmICghdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIHNlcnZpY2UgaXMgZWFnZXIsIGluaXRpYWxpemUgdGhlIGRlZmF1bHQgaW5zdGFuY2VcbiAgICAgICAgaWYgKGlzQ29tcG9uZW50RWFnZXIoY29tcG9uZW50KSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoeyBpbnN0YW5jZUlkZW50aWZpZXI6IERFRkFVTFRfRU5UUllfTkFNRSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSBmb3IgYW4gZWFnZXIgQ29tcG9uZW50IHRocm93cyBhbiBleGNlcHRpb24gZHVyaW5nIHRoZSBlYWdlclxuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpemF0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlIGEgZmF0YWwgZXJyb3IuXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW52ZXN0aWdhdGUgaWYgd2UgbmVlZCB0byBtYWtlIGl0IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudCBtYXkgd2FudCB0byBjYXVzZVxuICAgICAgICAgICAgICAgIC8vIGEgZmF0YWwgZXJyb3IgaW4gdGhpcyBjYXNlP1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIENyZWF0ZSBzZXJ2aWNlIGluc3RhbmNlcyBmb3IgdGhlIHBlbmRpbmcgcHJvbWlzZXMgYW5kIHJlc29sdmUgdGhlbVxuICAgICAgICAvLyBOT1RFOiBpZiB0aGlzLm11bHRpcGxlSW5zdGFuY2VzIGlzIGZhbHNlLCBvbmx5IHRoZSBkZWZhdWx0IGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZFxuICAgICAgICAvLyBhbmQgYWxsIHByb21pc2VzIHdpdGggcmVzb2x2ZSB3aXRoIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGlkZW50aWZpZXIuXG4gICAgICAgIGZvciAoY29uc3QgW2luc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2VEZWZlcnJlZF0gb2YgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaW5zdGFuY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gYGdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoKWAgc2hvdWxkIGFsd2F5cyByZXR1cm4gYSB2YWxpZCBpbnN0YW5jZSBzaW5jZSBhIGNvbXBvbmVudCBpcyBndWFyYW50ZWVkLiB1c2UgISB0byBtYWtlIHR5cGVzY3JpcHQgaGFwcHkuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gd2hlbiB0aGUgaW5zdGFuY2UgZmFjdG9yeSB0aHJvd3MgYW4gZXhjZXB0aW9uLCBpdCBzaG91bGQgbm90IGNhdXNlXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCBsZWF2ZSB0aGUgcHJvbWlzZSB1bnJlc29sdmVkLlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNsZWFySW5zdGFuY2UoaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmRlbGV0ZShpZGVudGlmaWVyKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLmRlbGV0ZShpZGVudGlmaWVyKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZXMuZGVsZXRlKGlkZW50aWZpZXIpO1xuICAgIH1cbiAgICAvLyBhcHAuZGVsZXRlKCkgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIG9uIGV2ZXJ5IHByb3ZpZGVyIHRvIGRlbGV0ZSB0aGUgc2VydmljZXNcbiAgICAvLyBUT0RPOiBzaG91bGQgd2UgbWFyayB0aGUgcHJvdmlkZXIgYXMgZGVsZXRlZD9cbiAgICBhc3luYyBkZWxldGUoKSB7XG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIC4uLnNlcnZpY2VzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihzZXJ2aWNlID0+ICdJTlRFUk5BTCcgaW4gc2VydmljZSkgLy8gbGVnYWN5IHNlcnZpY2VzXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICAubWFwKHNlcnZpY2UgPT4gc2VydmljZS5JTlRFUk5BTC5kZWxldGUoKSksXG4gICAgICAgICAgICAuLi5zZXJ2aWNlc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoc2VydmljZSA9PiAnX2RlbGV0ZScgaW4gc2VydmljZSkgLy8gbW9kdWxhcml6ZWQgc2VydmljZXNcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgIC5tYXAoc2VydmljZSA9PiBzZXJ2aWNlLl9kZWxldGUoKSlcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGlzQ29tcG9uZW50U2V0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQgIT0gbnVsbDtcbiAgICB9XG4gICAgaXNJbml0aWFsaXplZChpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlcy5oYXMoaWRlbnRpZmllcik7XG4gICAgfVxuICAgIGdldE9wdGlvbnMoaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNPcHRpb25zLmdldChpZGVudGlmaWVyKSB8fCB7fTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZShvcHRzID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBvcHRpb25zID0ge30gfSA9IG9wdHM7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIob3B0cy5pbnN0YW5jZUlkZW50aWZpZXIpO1xuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYCR7dGhpcy5uYW1lfSgke25vcm1hbGl6ZWRJZGVudGlmaWVyfSkgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXplZGApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudFNldCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ29tcG9uZW50ICR7dGhpcy5uYW1lfSBoYXMgbm90IGJlZW4gcmVnaXN0ZXJlZCB5ZXRgKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XG4gICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyLFxuICAgICAgICAgICAgb3B0aW9uc1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gcmVzb2x2ZSBhbnkgcGVuZGluZyBwcm9taXNlIHdhaXRpbmcgZm9yIHRoZSBzZXJ2aWNlIGluc3RhbmNlXG4gICAgICAgIGZvciAoY29uc3QgW2luc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2VEZWZlcnJlZF0gb2YgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgaWYgKG5vcm1hbGl6ZWRJZGVudGlmaWVyID09PSBub3JtYWxpemVkRGVmZXJyZWRJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VEZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIC0gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCAgYWZ0ZXIgdGhlIHByb3ZpZGVyIGhhcyBiZWVuIGluaXRpYWxpemVkIGJ5IGNhbGxpbmcgcHJvdmlkZXIuaW5pdGlhbGl6ZSgpLlxuICAgICAqIFRoZSBmdW5jdGlvbiBpcyBpbnZva2VkIFNZTkNIUk9OT1VTTFksIHNvIGl0IHNob3VsZCBub3QgZXhlY3V0ZSBhbnkgbG9uZ3J1bm5pbmcgdGFza3MgaW4gb3JkZXIgdG8gbm90IGJsb2NrIHRoZSBwcm9ncmFtLlxuICAgICAqXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQW4gb3B0aW9uYWwgaW5zdGFuY2UgaWRlbnRpZmllclxuICAgICAqIEByZXR1cm5zIGEgZnVuY3Rpb24gdG8gdW5yZWdpc3RlciB0aGUgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBvbkluaXQoY2FsbGJhY2ssIGlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgICBjb25zdCBleGlzdGluZ0NhbGxiYWNrcyA9IChfYSA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChub3JtYWxpemVkSWRlbnRpZmllcikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBTZXQoKTtcbiAgICAgICAgZXhpc3RpbmdDYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5vbkluaXRDYWxsYmFja3Muc2V0KG5vcm1hbGl6ZWRJZGVudGlmaWVyLCBleGlzdGluZ0NhbGxiYWNrcyk7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpO1xuICAgICAgICBpZiAoZXhpc3RpbmdJbnN0YW5jZSkge1xuICAgICAgICAgICAgY2FsbGJhY2soZXhpc3RpbmdJbnN0YW5jZSwgbm9ybWFsaXplZElkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBleGlzdGluZ0NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnZva2Ugb25Jbml0IGNhbGxiYWNrcyBzeW5jaHJvbm91c2x5XG4gICAgICogQHBhcmFtIGluc3RhbmNlIHRoZSBzZXJ2aWNlIGluc3RhbmNlYFxuICAgICAqL1xuICAgIGludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaWRlbnRpZmllcikge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLm9uSW5pdENhbGxiYWNrcy5nZXQoaWRlbnRpZmllcik7XG4gICAgICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaW5zdGFuY2UsIGlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlIGVycm9ycyBpbiB0aGUgb25Jbml0IGNhbGxiYWNrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0T3JJbml0aWFsaXplU2VydmljZSh7IGluc3RhbmNlSWRlbnRpZmllciwgb3B0aW9ucyA9IHt9IH0pIHtcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KGluc3RhbmNlSWRlbnRpZmllcik7XG4gICAgICAgIGlmICghaW5zdGFuY2UgJiYgdGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gdGhpcy5jb21wb25lbnQuaW5zdGFuY2VGYWN0b3J5KHRoaXMuY29udGFpbmVyLCB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpbnN0YW5jZUlkZW50aWZpZXIpLFxuICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIG9wdGlvbnMpO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBJbnZva2Ugb25Jbml0IGxpc3RlbmVycy5cbiAgICAgICAgICAgICAqIE5vdGUgdGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQgaXMgZGlmZmVyZW50LCB3aGljaCBpcyB1c2VkIGJ5IHRoZSBjb21wb25lbnQgY3JlYXRvcixcbiAgICAgICAgICAgICAqIHdoaWxlIG9uSW5pdCBsaXN0ZW5lcnMgYXJlIHJlZ2lzdGVyZWQgYnkgY29uc3VtZXJzIG9mIHRoZSBwcm92aWRlci5cbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5pbnZva2VPbkluaXRDYWxsYmFja3MoaW5zdGFuY2UsIGluc3RhbmNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIE9yZGVyIGlzIGltcG9ydGFudFxuICAgICAgICAgICAgICogb25JbnN0YW5jZUNyZWF0ZWQoKSBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIHRoaXMuaW5zdGFuY2VzLnNldChpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlKTsgd2hpY2hcbiAgICAgICAgICAgICAqIG1ha2VzIGBpc0luaXRpYWxpemVkKClgIHJldHVybiB0cnVlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnQub25JbnN0YW5jZUNyZWF0ZWQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCh0aGlzLmNvbnRhaW5lciwgaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZSB8fCBudWxsO1xuICAgIH1cbiAgICBub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xuICAgICAgICBpZiAodGhpcy5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyA/IGlkZW50aWZpZXIgOiBERUZBVUxUX0VOVFJZX05BTUU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllcjsgLy8gYXNzdW1lIG11bHRpcGxlIGluc3RhbmNlcyBhcmUgc3VwcG9ydGVkIGJlZm9yZSB0aGUgY29tcG9uZW50IGlzIHByb3ZpZGVkLlxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3VsZEF1dG9Jbml0aWFsaXplKCkge1xuICAgICAgICByZXR1cm4gKCEhdGhpcy5jb21wb25lbnQgJiZcbiAgICAgICAgICAgIHRoaXMuY29tcG9uZW50Lmluc3RhbnRpYXRpb25Nb2RlICE9PSBcIkVYUExJQ0lUXCIgLyogSW5zdGFudGlhdGlvbk1vZGUuRVhQTElDSVQgKi8pO1xuICAgIH1cbn1cbi8vIHVuZGVmaW5lZCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBzZXJ2aWNlIGZhY3RvcnkgZm9yIHRoZSBkZWZhdWx0IGluc3RhbmNlXG5mdW5jdGlvbiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpZGVudGlmaWVyKSB7XG4gICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IERFRkFVTFRfRU5UUllfTkFNRSA/IHVuZGVmaW5lZCA6IGlkZW50aWZpZXI7XG59XG5mdW5jdGlvbiBpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkge1xuICAgIHJldHVybiBjb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgPT09IFwiRUFHRVJcIiAvKiBJbnN0YW50aWF0aW9uTW9kZS5FQUdFUiAqLztcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQ29tcG9uZW50Q29udGFpbmVyIHRoYXQgcHJvdmlkZXMgUHJvdmlkZXJzIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxuICovXG5jbGFzcyBDb21wb25lbnRDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5wcm92aWRlcnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgYmVpbmcgYWRkZWRcbiAgICAgKiBAcGFyYW0gb3ZlcndyaXRlIFdoZW4gYSBjb21wb25lbnQgd2l0aCB0aGUgc2FtZSBuYW1lIGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCxcbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgdHJ1ZTogb3ZlcndyaXRlIHRoZSBleGlzdGluZyBjb21wb25lbnQgd2l0aCB0aGUgbmV3IGNvbXBvbmVudCBhbmQgY3JlYXRlIGEgbmV3XG4gICAgICogcHJvdmlkZXIgd2l0aCB0aGUgbmV3IGNvbXBvbmVudC4gSXQgY2FuIGJlIHVzZWZ1bCBpbiB0ZXN0cyB3aGVyZSB5b3Ugd2FudCB0byB1c2UgZGlmZmVyZW50IG1vY2tzXG4gICAgICogZm9yIGRpZmZlcmVudCB0ZXN0cy5cbiAgICAgKiBpZiBvdmVyd3JpdGUgaXMgZmFsc2U6IHRocm93IGFuIGV4Y2VwdGlvblxuICAgICAqL1xuICAgIGFkZENvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ29tcG9uZW50ICR7Y29tcG9uZW50Lm5hbWV9IGhhcyBhbHJlYWR5IGJlZW4gcmVnaXN0ZXJlZCB3aXRoICR7dGhpcy5uYW1lfWApO1xuICAgICAgICB9XG4gICAgICAgIHByb3ZpZGVyLnNldENvbXBvbmVudChjb21wb25lbnQpO1xuICAgIH1cbiAgICBhZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcbiAgICAgICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgZXhpc3RpbmcgcHJvdmlkZXIgZnJvbSB0aGUgY29udGFpbmVyLCBzbyB3ZSBjYW4gcmVnaXN0ZXIgdGhlIG5ldyBjb21wb25lbnRcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLmRlbGV0ZShjb21wb25lbnQubmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogZ2V0UHJvdmlkZXIgcHJvdmlkZXMgYSB0eXBlIHNhZmUgaW50ZXJmYWNlIHdoZXJlIGl0IGNhbiBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgZmllbGQgbmFtZVxuICAgICAqIHByZXNlbnQgaW4gTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZS5cbiAgICAgKlxuICAgICAqIEZpcmViYXNlIFNES3MgcHJvdmlkaW5nIHNlcnZpY2VzIHNob3VsZCBleHRlbmQgTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZSB0byByZWdpc3RlclxuICAgICAqIHRoZW1zZWx2ZXMuXG4gICAgICovXG4gICAgZ2V0UHJvdmlkZXIobmFtZSkge1xuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnMuaGFzKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm92aWRlcnMuZ2V0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNyZWF0ZSBhIFByb3ZpZGVyIGZvciBhIHNlcnZpY2UgdGhhdCBoYXNuJ3QgcmVnaXN0ZXJlZCB3aXRoIEZpcmViYXNlXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IFByb3ZpZGVyKG5hbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLnByb3ZpZGVycy5zZXQobmFtZSwgcHJvdmlkZXIpO1xuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XG4gICAgfVxuICAgIGdldFByb3ZpZGVycygpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wcm92aWRlcnMudmFsdWVzKCkpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRDb250YWluZXIsIFByb3ZpZGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiaW1wb3J0IHsgX2dldFByb3ZpZGVyLCBnZXRBcHAsIF9yZWdpc3RlckNvbXBvbmVudCwgcmVnaXN0ZXJWZXJzaW9uIH0gZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgRmlyZWJhc2VFcnJvciB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcbmltcG9ydCB7IG9wZW5EQiB9IGZyb20gJ2lkYic7XG5cbmNvbnN0IG5hbWUgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zXCI7XG5jb25zdCB2ZXJzaW9uID0gXCIwLjYuMTdcIjtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IFBFTkRJTkdfVElNRU9VVF9NUyA9IDEwMDAwO1xuY29uc3QgUEFDS0FHRV9WRVJTSU9OID0gYHc6JHt2ZXJzaW9ufWA7XG5jb25zdCBJTlRFUk5BTF9BVVRIX1ZFUlNJT04gPSAnRklTX3YyJztcbmNvbnN0IElOU1RBTExBVElPTlNfQVBJX1VSTCA9ICdodHRwczovL2ZpcmViYXNlaW5zdGFsbGF0aW9ucy5nb29nbGVhcGlzLmNvbS92MSc7XG5jb25zdCBUT0tFTl9FWFBJUkFUSU9OX0JVRkZFUiA9IDYwICogNjAgKiAxMDAwOyAvLyBPbmUgaG91clxuY29uc3QgU0VSVklDRSA9ICdpbnN0YWxsYXRpb25zJztcbmNvbnN0IFNFUlZJQ0VfTkFNRSA9ICdJbnN0YWxsYXRpb25zJztcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IEVSUk9SX0RFU0NSSVBUSU9OX01BUCA9IHtcbiAgICBbXCJtaXNzaW5nLWFwcC1jb25maWctdmFsdWVzXCIgLyogRXJyb3JDb2RlLk1JU1NJTkdfQVBQX0NPTkZJR19WQUxVRVMgKi9dOiAnTWlzc2luZyBBcHAgY29uZmlndXJhdGlvbiB2YWx1ZTogXCJ7JHZhbHVlTmFtZX1cIicsXG4gICAgW1wibm90LXJlZ2lzdGVyZWRcIiAvKiBFcnJvckNvZGUuTk9UX1JFR0lTVEVSRUQgKi9dOiAnRmlyZWJhc2UgSW5zdGFsbGF0aW9uIGlzIG5vdCByZWdpc3RlcmVkLicsXG4gICAgW1wiaW5zdGFsbGF0aW9uLW5vdC1mb3VuZFwiIC8qIEVycm9yQ29kZS5JTlNUQUxMQVRJT05fTk9UX0ZPVU5EICovXTogJ0ZpcmViYXNlIEluc3RhbGxhdGlvbiBub3QgZm91bmQuJyxcbiAgICBbXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqL106ICd7JHJlcXVlc3ROYW1lfSByZXF1ZXN0IGZhaWxlZCB3aXRoIGVycm9yIFwieyRzZXJ2ZXJDb2RlfSB7JHNlcnZlclN0YXR1c306IHskc2VydmVyTWVzc2FnZX1cIicsXG4gICAgW1wiYXBwLW9mZmxpbmVcIiAvKiBFcnJvckNvZGUuQVBQX09GRkxJTkUgKi9dOiAnQ291bGQgbm90IHByb2Nlc3MgcmVxdWVzdC4gQXBwbGljYXRpb24gb2ZmbGluZS4nLFxuICAgIFtcImRlbGV0ZS1wZW5kaW5nLXJlZ2lzdHJhdGlvblwiIC8qIEVycm9yQ29kZS5ERUxFVEVfUEVORElOR19SRUdJU1RSQVRJT04gKi9dOiBcIkNhbid0IGRlbGV0ZSBpbnN0YWxsYXRpb24gd2hpbGUgdGhlcmUgaXMgYSBwZW5kaW5nIHJlZ2lzdHJhdGlvbiByZXF1ZXN0LlwiXG59O1xuY29uc3QgRVJST1JfRkFDVE9SWSA9IG5ldyBFcnJvckZhY3RvcnkoU0VSVklDRSwgU0VSVklDRV9OQU1FLCBFUlJPUl9ERVNDUklQVElPTl9NQVApO1xuLyoqIFJldHVybnMgdHJ1ZSBpZiBlcnJvciBpcyBhIEZpcmViYXNlRXJyb3IgdGhhdCBpcyBiYXNlZCBvbiBhbiBlcnJvciBmcm9tIHRoZSBzZXJ2ZXIuICovXG5mdW5jdGlvbiBpc1NlcnZlckVycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIChlcnJvciBpbnN0YW5jZW9mIEZpcmViYXNlRXJyb3IgJiZcbiAgICAgICAgZXJyb3IuY29kZS5pbmNsdWRlcyhcInJlcXVlc3QtZmFpbGVkXCIgLyogRXJyb3JDb2RlLlJFUVVFU1RfRkFJTEVEICovKSk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5mdW5jdGlvbiBnZXRJbnN0YWxsYXRpb25zRW5kcG9pbnQoeyBwcm9qZWN0SWQgfSkge1xuICAgIHJldHVybiBgJHtJTlNUQUxMQVRJT05TX0FQSV9VUkx9L3Byb2plY3RzLyR7cHJvamVjdElkfS9pbnN0YWxsYXRpb25zYDtcbn1cbmZ1bmN0aW9uIGV4dHJhY3RBdXRoVG9rZW5JbmZvRnJvbVJlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdG9rZW46IHJlc3BvbnNlLnRva2VuLFxuICAgICAgICByZXF1ZXN0U3RhdHVzOiAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovLFxuICAgICAgICBleHBpcmVzSW46IGdldEV4cGlyZXNJbkZyb21SZXNwb25zZUV4cGlyZXNJbihyZXNwb25zZS5leHBpcmVzSW4pLFxuICAgICAgICBjcmVhdGlvblRpbWU6IERhdGUubm93KClcbiAgICB9O1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0RXJyb3JGcm9tUmVzcG9uc2UocmVxdWVzdE5hbWUsIHJlc3BvbnNlKSB7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGVycm9yRGF0YSA9IHJlc3BvbnNlSnNvbi5lcnJvcjtcbiAgICByZXR1cm4gRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJyZXF1ZXN0LWZhaWxlZFwiIC8qIEVycm9yQ29kZS5SRVFVRVNUX0ZBSUxFRCAqLywge1xuICAgICAgICByZXF1ZXN0TmFtZSxcbiAgICAgICAgc2VydmVyQ29kZTogZXJyb3JEYXRhLmNvZGUsXG4gICAgICAgIHNlcnZlck1lc3NhZ2U6IGVycm9yRGF0YS5tZXNzYWdlLFxuICAgICAgICBzZXJ2ZXJTdGF0dXM6IGVycm9yRGF0YS5zdGF0dXNcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEhlYWRlcnMoeyBhcGlLZXkgfSkge1xuICAgIHJldHVybiBuZXcgSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1nb29nLWFwaS1rZXknOiBhcGlLZXlcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIHsgcmVmcmVzaFRva2VuIH0pIHtcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVycyhhcHBDb25maWcpO1xuICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pKTtcbiAgICByZXR1cm4gaGVhZGVycztcbn1cbi8qKlxuICogQ2FsbHMgdGhlIHBhc3NlZCBpbiBmZXRjaCB3cmFwcGVyIGFuZCByZXR1cm5zIHRoZSByZXNwb25zZS5cbiAqIElmIHRoZSByZXR1cm5lZCByZXNwb25zZSBoYXMgYSBzdGF0dXMgb2YgNXh4LCByZS1ydW5zIHRoZSBmdW5jdGlvbiBvbmNlIGFuZFxuICogcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJldHJ5SWZTZXJ2ZXJFcnJvcihmbikge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZuKCk7XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPj0gNTAwICYmIHJlc3VsdC5zdGF0dXMgPCA2MDApIHtcbiAgICAgICAgLy8gSW50ZXJuYWwgU2VydmVyIEVycm9yLiBSZXRyeSByZXF1ZXN0LlxuICAgICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldEV4cGlyZXNJbkZyb21SZXNwb25zZUV4cGlyZXNJbihyZXNwb25zZUV4cGlyZXNJbikge1xuICAgIC8vIFRoaXMgd29ya3MgYmVjYXVzZSB0aGUgc2VydmVyIHdpbGwgbmV2ZXIgcmVzcG9uZCB3aXRoIGZyYWN0aW9ucyBvZiBhIHNlY29uZC5cbiAgICByZXR1cm4gTnVtYmVyKHJlc3BvbnNlRXhwaXJlc0luLnJlcGxhY2UoJ3MnLCAnMDAwJykpO1xufVxuZnVuY3Rpb24gZ2V0QXV0aG9yaXphdGlvbkhlYWRlcihyZWZyZXNoVG9rZW4pIHtcbiAgICByZXR1cm4gYCR7SU5URVJOQUxfQVVUSF9WRVJTSU9OfSAke3JlZnJlc2hUb2tlbn1gO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdCh7IGFwcENvbmZpZywgaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyIH0sIHsgZmlkIH0pIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBnZXRIZWFkZXJzKGFwcENvbmZpZyk7XG4gICAgLy8gSWYgaGVhcnRiZWF0IHNlcnZpY2UgZXhpc3RzLCBhZGQgdGhlIGhlYXJ0YmVhdCBzdHJpbmcgdG8gdGhlIGhlYWRlci5cbiAgICBjb25zdCBoZWFydGJlYXRTZXJ2aWNlID0gaGVhcnRiZWF0U2VydmljZVByb3ZpZGVyLmdldEltbWVkaWF0ZSh7XG4gICAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSk7XG4gICAgaWYgKGhlYXJ0YmVhdFNlcnZpY2UpIHtcbiAgICAgICAgY29uc3QgaGVhcnRiZWF0c0hlYWRlciA9IGF3YWl0IGhlYXJ0YmVhdFNlcnZpY2UuZ2V0SGVhcnRiZWF0c0hlYWRlcigpO1xuICAgICAgICBpZiAoaGVhcnRiZWF0c0hlYWRlcikge1xuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoJ3gtZmlyZWJhc2UtY2xpZW50JywgaGVhcnRiZWF0c0hlYWRlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgZmlkLFxuICAgICAgICBhdXRoVmVyc2lvbjogSU5URVJOQUxfQVVUSF9WRVJTSU9OLFxuICAgICAgICBhcHBJZDogYXBwQ29uZmlnLmFwcElkLFxuICAgICAgICBzZGtWZXJzaW9uOiBQQUNLQUdFX1ZFUlNJT05cbiAgICB9O1xuICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXRyeUlmU2VydmVyRXJyb3IoKCkgPT4gZmV0Y2goZW5kcG9pbnQsIHJlcXVlc3QpKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VWYWx1ZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0ge1xuICAgICAgICAgICAgZmlkOiByZXNwb25zZVZhbHVlLmZpZCB8fCBmaWQsXG4gICAgICAgICAgICByZWdpc3RyYXRpb25TdGF0dXM6IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi8sXG4gICAgICAgICAgICByZWZyZXNoVG9rZW46IHJlc3BvbnNlVmFsdWUucmVmcmVzaFRva2VuLFxuICAgICAgICAgICAgYXV0aFRva2VuOiBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlLmF1dGhUb2tlbilcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdDcmVhdGUgSW5zdGFsbGF0aW9uJywgcmVzcG9uc2UpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKiBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGFmdGVyIGdpdmVuIHRpbWUgcGFzc2VzLiAqL1xuZnVuY3Rpb24gc2xlZXAobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gYnVmZmVyVG9CYXNlNjRVcmxTYWZlKGFycmF5KSB7XG4gICAgY29uc3QgYjY0ID0gYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlKC4uLmFycmF5KSk7XG4gICAgcmV0dXJuIGI2NC5yZXBsYWNlKC9cXCsvZywgJy0nKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IFZBTElEX0ZJRF9QQVRURVJOID0gL15bY2RlZl1bXFx3LV17MjF9JC87XG5jb25zdCBJTlZBTElEX0ZJRCA9ICcnO1xuLyoqXG4gKiBHZW5lcmF0ZXMgYSBuZXcgRklEIHVzaW5nIHJhbmRvbSB2YWx1ZXMgZnJvbSBXZWIgQ3J5cHRvIEFQSS5cbiAqIFJldHVybnMgYW4gZW1wdHkgc3RyaW5nIGlmIEZJRCBnZW5lcmF0aW9uIGZhaWxzIGZvciBhbnkgcmVhc29uLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZUZpZCgpIHtcbiAgICB0cnkge1xuICAgICAgICAvLyBBIHZhbGlkIEZJRCBoYXMgZXhhY3RseSAyMiBiYXNlNjQgY2hhcmFjdGVycywgd2hpY2ggaXMgMTMyIGJpdHMsIG9yIDE2LjVcbiAgICAgICAgLy8gYnl0ZXMuIG91ciBpbXBsZW1lbnRhdGlvbiBnZW5lcmF0ZXMgYSAxNyBieXRlIGFycmF5IGluc3RlYWQuXG4gICAgICAgIGNvbnN0IGZpZEJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KDE3KTtcbiAgICAgICAgY29uc3QgY3J5cHRvID0gc2VsZi5jcnlwdG8gfHwgc2VsZi5tc0NyeXB0bztcbiAgICAgICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhmaWRCeXRlQXJyYXkpO1xuICAgICAgICAvLyBSZXBsYWNlIHRoZSBmaXJzdCA0IHJhbmRvbSBiaXRzIHdpdGggdGhlIGNvbnN0YW50IEZJRCBoZWFkZXIgb2YgMGIwMTExLlxuICAgICAgICBmaWRCeXRlQXJyYXlbMF0gPSAwYjAxMTEwMDAwICsgKGZpZEJ5dGVBcnJheVswXSAlIDBiMDAwMTAwMDApO1xuICAgICAgICBjb25zdCBmaWQgPSBlbmNvZGUoZmlkQnl0ZUFycmF5KTtcbiAgICAgICAgcmV0dXJuIFZBTElEX0ZJRF9QQVRURVJOLnRlc3QoZmlkKSA/IGZpZCA6IElOVkFMSURfRklEO1xuICAgIH1cbiAgICBjYXRjaCAoX2EpIHtcbiAgICAgICAgLy8gRklEIGdlbmVyYXRpb24gZXJyb3JlZFxuICAgICAgICByZXR1cm4gSU5WQUxJRF9GSUQ7XG4gICAgfVxufVxuLyoqIENvbnZlcnRzIGEgRklEIFVpbnQ4QXJyYXkgdG8gYSBiYXNlNjQgc3RyaW5nIHJlcHJlc2VudGF0aW9uLiAqL1xuZnVuY3Rpb24gZW5jb2RlKGZpZEJ5dGVBcnJheSkge1xuICAgIGNvbnN0IGI2NFN0cmluZyA9IGJ1ZmZlclRvQmFzZTY0VXJsU2FmZShmaWRCeXRlQXJyYXkpO1xuICAgIC8vIFJlbW92ZSB0aGUgMjNyZCBjaGFyYWN0ZXIgdGhhdCB3YXMgYWRkZWQgYmVjYXVzZSBvZiB0aGUgZXh0cmEgNCBiaXRzIGF0IHRoZVxuICAgIC8vIGVuZCBvZiBvdXIgMTcgYnl0ZSBhcnJheSwgYW5kIHRoZSAnPScgcGFkZGluZy5cbiAgICByZXR1cm4gYjY0U3RyaW5nLnN1YnN0cigwLCAyMik7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKiogUmV0dXJucyBhIHN0cmluZyBrZXkgdGhhdCBjYW4gYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgYXBwLiAqL1xuZnVuY3Rpb24gZ2V0S2V5KGFwcENvbmZpZykge1xuICAgIHJldHVybiBgJHthcHBDb25maWcuYXBwTmFtZX0hJHthcHBDb25maWcuYXBwSWR9YDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IGZpZENoYW5nZUNhbGxiYWNrcyA9IG5ldyBNYXAoKTtcbi8qKlxuICogQ2FsbHMgdGhlIG9uSWRDaGFuZ2UgY2FsbGJhY2tzIHdpdGggdGhlIG5ldyBGSUQgdmFsdWUsIGFuZCBicm9hZGNhc3RzIHRoZVxuICogY2hhbmdlIHRvIG90aGVyIHRhYnMuXG4gKi9cbmZ1bmN0aW9uIGZpZENoYW5nZWQoYXBwQ29uZmlnLCBmaWQpIHtcbiAgICBjb25zdCBrZXkgPSBnZXRLZXkoYXBwQ29uZmlnKTtcbiAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKTtcbiAgICBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpO1xufVxuZnVuY3Rpb24gYWRkQ2FsbGJhY2soYXBwQ29uZmlnLCBjYWxsYmFjaykge1xuICAgIC8vIE9wZW4gdGhlIGJyb2FkY2FzdCBjaGFubmVsIGlmIGl0J3Mgbm90IGFscmVhZHkgb3BlbixcbiAgICAvLyB0byBiZSBhYmxlIHRvIGxpc3RlbiB0byBjaGFuZ2UgZXZlbnRzIGZyb20gb3RoZXIgdGFicy5cbiAgICBnZXRCcm9hZGNhc3RDaGFubmVsKCk7XG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gICAgbGV0IGNhbGxiYWNrU2V0ID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xuICAgIGlmICghY2FsbGJhY2tTZXQpIHtcbiAgICAgICAgY2FsbGJhY2tTZXQgPSBuZXcgU2V0KCk7XG4gICAgICAgIGZpZENoYW5nZUNhbGxiYWNrcy5zZXQoa2V5LCBjYWxsYmFja1NldCk7XG4gICAgfVxuICAgIGNhbGxiYWNrU2V0LmFkZChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKSB7XG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gICAgY29uc3QgY2FsbGJhY2tTZXQgPSBmaWRDaGFuZ2VDYWxsYmFja3MuZ2V0KGtleSk7XG4gICAgaWYgKCFjYWxsYmFja1NldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNhbGxiYWNrU2V0LmRlbGV0ZShjYWxsYmFjayk7XG4gICAgaWYgKGNhbGxiYWNrU2V0LnNpemUgPT09IDApIHtcbiAgICAgICAgZmlkQ2hhbmdlQ2FsbGJhY2tzLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgICAvLyBDbG9zZSBicm9hZGNhc3QgY2hhbm5lbCBpZiB0aGVyZSBhcmUgbm8gbW9yZSBjYWxsYmFja3MuXG4gICAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XG59XG5mdW5jdGlvbiBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGtleSwgZmlkKSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gZmlkQ2hhbmdlQ2FsbGJhY2tzLmdldChrZXkpO1xuICAgIGlmICghY2FsbGJhY2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjYWxsYmFjayBvZiBjYWxsYmFja3MpIHtcbiAgICAgICAgY2FsbGJhY2soZmlkKTtcbiAgICB9XG59XG5mdW5jdGlvbiBicm9hZGNhc3RGaWRDaGFuZ2Uoa2V5LCBmaWQpIHtcbiAgICBjb25zdCBjaGFubmVsID0gZ2V0QnJvYWRjYXN0Q2hhbm5lbCgpO1xuICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2UoeyBrZXksIGZpZCB9KTtcbiAgICB9XG4gICAgY2xvc2VCcm9hZGNhc3RDaGFubmVsKCk7XG59XG5sZXQgYnJvYWRjYXN0Q2hhbm5lbCA9IG51bGw7XG4vKiogT3BlbnMgYW5kIHJldHVybnMgYSBCcm9hZGNhc3RDaGFubmVsIGlmIGl0IGlzIHN1cHBvcnRlZCBieSB0aGUgYnJvd3Nlci4gKi9cbmZ1bmN0aW9uIGdldEJyb2FkY2FzdENoYW5uZWwoKSB7XG4gICAgaWYgKCFicm9hZGNhc3RDaGFubmVsICYmICdCcm9hZGNhc3RDaGFubmVsJyBpbiBzZWxmKSB7XG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnW0ZpcmViYXNlXSBGSUQgQ2hhbmdlJyk7XG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwub25tZXNzYWdlID0gZSA9PiB7XG4gICAgICAgICAgICBjYWxsRmlkQ2hhbmdlQ2FsbGJhY2tzKGUuZGF0YS5rZXksIGUuZGF0YS5maWQpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gYnJvYWRjYXN0Q2hhbm5lbDtcbn1cbmZ1bmN0aW9uIGNsb3NlQnJvYWRjYXN0Q2hhbm5lbCgpIHtcbiAgICBpZiAoZmlkQ2hhbmdlQ2FsbGJhY2tzLnNpemUgPT09IDAgJiYgYnJvYWRjYXN0Q2hhbm5lbCkge1xuICAgICAgICBicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG4gICAgICAgIGJyb2FkY2FzdENoYW5uZWwgPSBudWxsO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IERBVEFCQVNFX05BTUUgPSAnZmlyZWJhc2UtaW5zdGFsbGF0aW9ucy1kYXRhYmFzZSc7XG5jb25zdCBEQVRBQkFTRV9WRVJTSU9OID0gMTtcbmNvbnN0IE9CSkVDVF9TVE9SRV9OQU1FID0gJ2ZpcmViYXNlLWluc3RhbGxhdGlvbnMtc3RvcmUnO1xubGV0IGRiUHJvbWlzZSA9IG51bGw7XG5mdW5jdGlvbiBnZXREYlByb21pc2UoKSB7XG4gICAgaWYgKCFkYlByb21pc2UpIHtcbiAgICAgICAgZGJQcm9taXNlID0gb3BlbkRCKERBVEFCQVNFX05BTUUsIERBVEFCQVNFX1ZFUlNJT04sIHtcbiAgICAgICAgICAgIHVwZ3JhZGU6IChkYiwgb2xkVmVyc2lvbikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFdlIGRvbid0IHVzZSAnYnJlYWsnIGluIHRoaXMgc3dpdGNoIHN0YXRlbWVudCwgdGhlIGZhbGwtdGhyb3VnaFxuICAgICAgICAgICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxuICAgICAgICAgICAgICAgIC8vIHRoZSBvbGQgdmVyc2lvbiBhbmQgdGhlIGN1cnJlbnQgdmVyc2lvbiwgd2Ugd2FudCBBTEwgdGhlIG1pZ3JhdGlvbnNcbiAgICAgICAgICAgICAgICAvLyB0aGF0IGNvcnJlc3BvbmQgdG8gdGhvc2UgdmVyc2lvbnMgdG8gcnVuLCBub3Qgb25seSB0aGUgbGFzdCBvbmUuXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuICAgICAgICAgICAgICAgIHN3aXRjaCAob2xkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGRiUHJvbWlzZTtcbn1cbi8qKiBBc3NpZ25zIG9yIG92ZXJ3cml0ZXMgdGhlIHJlY29yZCBmb3IgdGhlIGdpdmVuIGtleSB3aXRoIHRoZSBnaXZlbiB2YWx1ZS4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldChhcHBDb25maWcsIHZhbHVlKSB7XG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gICAgY29uc3Qgb2JqZWN0U3RvcmUgPSB0eC5vYmplY3RTdG9yZShPQkpFQ1RfU1RPUkVfTkFNRSk7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSAoYXdhaXQgb2JqZWN0U3RvcmUuZ2V0KGtleSkpO1xuICAgIGF3YWl0IG9iamVjdFN0b3JlLnB1dCh2YWx1ZSwga2V5KTtcbiAgICBhd2FpdCB0eC5kb25lO1xuICAgIGlmICghb2xkVmFsdWUgfHwgb2xkVmFsdWUuZmlkICE9PSB2YWx1ZS5maWQpIHtcbiAgICAgICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIHZhbHVlLmZpZCk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbn1cbi8qKiBSZW1vdmVzIHJlY29yZChzKSBmcm9tIHRoZSBvYmplY3RTdG9yZSB0aGF0IG1hdGNoIHRoZSBnaXZlbiBrZXkuICovXG5hc3luYyBmdW5jdGlvbiByZW1vdmUoYXBwQ29uZmlnKSB7XG4gICAgY29uc3Qga2V5ID0gZ2V0S2V5KGFwcENvbmZpZyk7XG4gICAgY29uc3QgZGIgPSBhd2FpdCBnZXREYlByb21pc2UoKTtcbiAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKE9CSkVDVF9TVE9SRV9OQU1FLCAncmVhZHdyaXRlJyk7XG4gICAgYXdhaXQgdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpLmRlbGV0ZShrZXkpO1xuICAgIGF3YWl0IHR4LmRvbmU7XG59XG4vKipcbiAqIEF0b21pY2FsbHkgdXBkYXRlcyBhIHJlY29yZCB3aXRoIHRoZSByZXN1bHQgb2YgdXBkYXRlRm4sIHdoaWNoIGdldHNcbiAqIGNhbGxlZCB3aXRoIHRoZSBjdXJyZW50IHZhbHVlLiBJZiBuZXdWYWx1ZSBpcyB1bmRlZmluZWQsIHRoZSByZWNvcmQgaXNcbiAqIGRlbGV0ZWQgaW5zdGVhZC5cbiAqIEByZXR1cm4gVXBkYXRlZCB2YWx1ZVxuICovXG5hc3luYyBmdW5jdGlvbiB1cGRhdGUoYXBwQ29uZmlnLCB1cGRhdGVGbikge1xuICAgIGNvbnN0IGtleSA9IGdldEtleShhcHBDb25maWcpO1xuICAgIGNvbnN0IGRiID0gYXdhaXQgZ2V0RGJQcm9taXNlKCk7XG4gICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbihPQkpFQ1RfU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xuICAgIGNvbnN0IHN0b3JlID0gdHgub2JqZWN0U3RvcmUoT0JKRUNUX1NUT1JFX05BTUUpO1xuICAgIGNvbnN0IG9sZFZhbHVlID0gKGF3YWl0IHN0b3JlLmdldChrZXkpKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHVwZGF0ZUZuKG9sZFZhbHVlKTtcbiAgICBpZiAobmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhd2FpdCBzdG9yZS5kZWxldGUoa2V5KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF3YWl0IHN0b3JlLnB1dChuZXdWYWx1ZSwga2V5KTtcbiAgICB9XG4gICAgYXdhaXQgdHguZG9uZTtcbiAgICBpZiAobmV3VmFsdWUgJiYgKCFvbGRWYWx1ZSB8fCBvbGRWYWx1ZS5maWQgIT09IG5ld1ZhbHVlLmZpZCkpIHtcbiAgICAgICAgZmlkQ2hhbmdlZChhcHBDb25maWcsIG5ld1ZhbHVlLmZpZCk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogVXBkYXRlcyBhbmQgcmV0dXJucyB0aGUgSW5zdGFsbGF0aW9uRW50cnkgZnJvbSB0aGUgZGF0YWJhc2UuXG4gKiBBbHNvIHRyaWdnZXJzIGEgcmVnaXN0cmF0aW9uIHJlcXVlc3QgaWYgaXQgaXMgbmVjZXNzYXJ5IGFuZCBwb3NzaWJsZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2V0SW5zdGFsbGF0aW9uRW50cnkoaW5zdGFsbGF0aW9ucykge1xuICAgIGxldCByZWdpc3RyYXRpb25Qcm9taXNlO1xuICAgIGNvbnN0IGluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgdXBkYXRlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XG4gICAgICAgIGNvbnN0IGluc3RhbGxhdGlvbkVudHJ5ID0gdXBkYXRlT3JDcmVhdGVJbnN0YWxsYXRpb25FbnRyeShvbGRFbnRyeSk7XG4gICAgICAgIGNvbnN0IGVudHJ5V2l0aFByb21pc2UgPSB0cmlnZ2VyUmVnaXN0cmF0aW9uSWZOZWNlc3NhcnkoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xuICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlID0gZW50cnlXaXRoUHJvbWlzZS5yZWdpc3RyYXRpb25Qcm9taXNlO1xuICAgICAgICByZXR1cm4gZW50cnlXaXRoUHJvbWlzZS5pbnN0YWxsYXRpb25FbnRyeTtcbiAgICB9KTtcbiAgICBpZiAoaW5zdGFsbGF0aW9uRW50cnkuZmlkID09PSBJTlZBTElEX0ZJRCkge1xuICAgICAgICAvLyBGSUQgZ2VuZXJhdGlvbiBmYWlsZWQuIFdhaXRpbmcgZm9yIHRoZSBGSUQgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgICByZXR1cm4geyBpbnN0YWxsYXRpb25FbnRyeTogYXdhaXQgcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBpbnN0YWxsYXRpb25FbnRyeSxcbiAgICAgICAgcmVnaXN0cmF0aW9uUHJvbWlzZVxuICAgIH07XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgSW5zdGFsbGF0aW9uIEVudHJ5IGlmIG9uZSBkb2VzIG5vdCBleGlzdC5cbiAqIEFsc28gY2xlYXJzIHRpbWVkIG91dCBwZW5kaW5nIHJlcXVlc3RzLlxuICovXG5mdW5jdGlvbiB1cGRhdGVPckNyZWF0ZUluc3RhbGxhdGlvbkVudHJ5KG9sZEVudHJ5KSB7XG4gICAgY29uc3QgZW50cnkgPSBvbGRFbnRyeSB8fCB7XG4gICAgICAgIGZpZDogZ2VuZXJhdGVGaWQoKSxcbiAgICAgICAgcmVnaXN0cmF0aW9uU3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi9cbiAgICB9O1xuICAgIHJldHVybiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeSk7XG59XG4vKipcbiAqIElmIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgbm90IHJlZ2lzdGVyZWQgeWV0LCB0aGlzIHdpbGwgdHJpZ2dlciB0aGVcbiAqIHJlZ2lzdHJhdGlvbiBhbmQgcmV0dXJuIGFuIEluUHJvZ3Jlc3NJbnN0YWxsYXRpb25FbnRyeS5cbiAqXG4gKiBJZiByZWdpc3RyYXRpb25Qcm9taXNlIGRvZXMgbm90IGV4aXN0LCB0aGUgaW5zdGFsbGF0aW9uRW50cnkgaXMgZ3VhcmFudGVlZFxuICogdG8gYmUgcmVnaXN0ZXJlZC5cbiAqL1xuZnVuY3Rpb24gdHJpZ2dlclJlZ2lzdHJhdGlvbklmTmVjZXNzYXJ5KGluc3RhbGxhdGlvbnMsIGluc3RhbGxhdGlvbkVudHJ5KSB7XG4gICAgaWYgKGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovKSB7XG4gICAgICAgIGlmICghbmF2aWdhdG9yLm9uTGluZSkge1xuICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHJlcXVpcmVkIGJ1dCBhcHAgaXMgb2ZmbGluZS5cbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvblByb21pc2VXaXRoRXJyb3IgPSBQcm9taXNlLnJlamVjdChFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1vZmZsaW5lXCIgLyogRXJyb3JDb2RlLkFQUF9PRkZMSU5FICovKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGluc3RhbGxhdGlvbkVudHJ5LFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblByb21pc2U6IHJlZ2lzdHJhdGlvblByb21pc2VXaXRoRXJyb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJ5IHJlZ2lzdGVyaW5nLiBDaGFuZ2Ugc3RhdHVzIHRvIElOX1BST0dSRVNTLlxuICAgICAgICBjb25zdCBpblByb2dyZXNzRW50cnkgPSB7XG4gICAgICAgICAgICBmaWQ6IGluc3RhbGxhdGlvbkVudHJ5LmZpZCxcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovLFxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uVGltZTogRGF0ZS5ub3coKVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZWdpc3RyYXRpb25Qcm9taXNlID0gcmVnaXN0ZXJJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9ucywgaW5Qcm9ncmVzc0VudHJ5KTtcbiAgICAgICAgcmV0dXJuIHsgaW5zdGFsbGF0aW9uRW50cnk6IGluUHJvZ3Jlc3NFbnRyeSwgcmVnaXN0cmF0aW9uUHJvbWlzZSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChpbnN0YWxsYXRpb25FbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5zdGFsbGF0aW9uRW50cnksXG4gICAgICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlOiB3YWl0VW50aWxGaWRSZWdpc3RyYXRpb24oaW5zdGFsbGF0aW9ucylcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7IGluc3RhbGxhdGlvbkVudHJ5IH07XG4gICAgfVxufVxuLyoqIFRoaXMgd2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UgZm9yIGVhY2ggbmV3IEZpcmViYXNlIEluc3RhbGxhdGlvbi4gKi9cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9uKGluc3RhbGxhdGlvbnMsIGluc3RhbGxhdGlvbkVudHJ5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZEluc3RhbGxhdGlvbkVudHJ5ID0gYXdhaXQgY3JlYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLCBpbnN0YWxsYXRpb25FbnRyeSk7XG4gICAgICAgIHJldHVybiBzZXQoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIHJlZ2lzdGVyZWRJbnN0YWxsYXRpb25FbnRyeSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChpc1NlcnZlckVycm9yKGUpICYmIGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDkpIHtcbiAgICAgICAgICAgIC8vIFNlcnZlciByZXR1cm5lZCBhIFwiRklEIGNhbm5vdCBiZSB1c2VkXCIgZXJyb3IuXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBJRCBuZXh0IHRpbWUuXG4gICAgICAgICAgICBhd2FpdCByZW1vdmUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIGZhaWxlZC4gU2V0IEZJRCBhcyBub3QgcmVnaXN0ZXJlZC5cbiAgICAgICAgICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywge1xuICAgICAgICAgICAgICAgIGZpZDogaW5zdGFsbGF0aW9uRW50cnkuZmlkLFxuICAgICAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cbi8qKiBDYWxsIGlmIEZJRCByZWdpc3RyYXRpb24gaXMgcGVuZGluZyBpbiBhbm90aGVyIHJlcXVlc3QuICovXG5hc3luYyBmdW5jdGlvbiB3YWl0VW50aWxGaWRSZWdpc3RyYXRpb24oaW5zdGFsbGF0aW9ucykge1xuICAgIC8vIFVuZm9ydHVuYXRlbHksIHRoZXJlIGlzIG5vIHdheSBvZiByZWxpYWJseSBvYnNlcnZpbmcgd2hlbiBhIHZhbHVlIGluXG4gICAgLy8gSW5kZXhlZERCIGNoYW5nZXMgKHlldCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9XSUNHL2luZGV4ZWQtZGItb2JzZXJ2ZXJzKSxcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHBvbGwuXG4gICAgbGV0IGVudHJ5ID0gYXdhaXQgdXBkYXRlSW5zdGFsbGF0aW9uUmVxdWVzdChpbnN0YWxsYXRpb25zLmFwcENvbmZpZyk7XG4gICAgd2hpbGUgKGVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XG4gICAgICAgIC8vIGNyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0IHN0aWxsIGluIHByb2dyZXNzLlxuICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICBlbnRyeSA9IGF3YWl0IHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICAgIH1cbiAgICBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8pIHtcbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXG4gICAgICAgIGNvbnN0IHsgaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpO1xuICAgICAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvblByb21pc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBubyByZWdpc3RyYXRpb25Qcm9taXNlLCBlbnRyeSBpcyByZWdpc3RlcmVkLlxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbGxhdGlvbkVudHJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeTtcbn1cbi8qKlxuICogQ2FsbGVkIG9ubHkgaWYgdGhlcmUgaXMgYSBDcmVhdGVJbnN0YWxsYXRpb24gcmVxdWVzdCBpbiBwcm9ncmVzcy5cbiAqXG4gKiBVcGRhdGVzIHRoZSBJbnN0YWxsYXRpb25FbnRyeSBpbiB0aGUgREIgYmFzZWQgb24gdGhlIHN0YXR1cyBvZiB0aGVcbiAqIENyZWF0ZUluc3RhbGxhdGlvbiByZXF1ZXN0LlxuICpcbiAqIFJldHVybnMgdGhlIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUluc3RhbGxhdGlvblJlcXVlc3QoYXBwQ29uZmlnKSB7XG4gICAgcmV0dXJuIHVwZGF0ZShhcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICAgICAgaWYgKCFvbGRFbnRyeSkge1xuICAgICAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJpbnN0YWxsYXRpb24tbm90LWZvdW5kXCIgLyogRXJyb3JDb2RlLklOU1RBTExBVElPTl9OT1RfRk9VTkQgKi8pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVkT3V0UmVxdWVzdChvbGRFbnRyeSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjbGVhclRpbWVkT3V0UmVxdWVzdChlbnRyeSkge1xuICAgIGlmIChoYXNJbnN0YWxsYXRpb25SZXF1ZXN0VGltZWRPdXQoZW50cnkpKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmaWQ6IGVudHJ5LmZpZCxcbiAgICAgICAgICAgIHJlZ2lzdHJhdGlvblN0YXR1czogMCAvKiBSZXF1ZXN0U3RhdHVzLk5PVF9TVEFSVEVEICovXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBlbnRyeTtcbn1cbmZ1bmN0aW9uIGhhc0luc3RhbGxhdGlvblJlcXVlc3RUaW1lZE91dChpbnN0YWxsYXRpb25FbnRyeSkge1xuICAgIHJldHVybiAoaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8gJiZcbiAgICAgICAgaW5zdGFsbGF0aW9uRW50cnkucmVnaXN0cmF0aW9uVGltZSArIFBFTkRJTkdfVElNRU9VVF9NUyA8IERhdGUubm93KCkpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVBdXRoVG9rZW5SZXF1ZXN0KHsgYXBwQ29uZmlnLCBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIgfSwgaW5zdGFsbGF0aW9uRW50cnkpIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IGdldEdlbmVyYXRlQXV0aFRva2VuRW5kcG9pbnQoYXBwQ29uZmlnLCBpbnN0YWxsYXRpb25FbnRyeSk7XG4gICAgY29uc3QgaGVhZGVycyA9IGdldEhlYWRlcnNXaXRoQXV0aChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgICAvLyBJZiBoZWFydGJlYXQgc2VydmljZSBleGlzdHMsIGFkZCB0aGUgaGVhcnRiZWF0IHN0cmluZyB0byB0aGUgaGVhZGVyLlxuICAgIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2UgPSBoZWFydGJlYXRTZXJ2aWNlUHJvdmlkZXIuZ2V0SW1tZWRpYXRlKHtcbiAgICAgICAgb3B0aW9uYWw6IHRydWVcbiAgICB9KTtcbiAgICBpZiAoaGVhcnRiZWF0U2VydmljZSkge1xuICAgICAgICBjb25zdCBoZWFydGJlYXRzSGVhZGVyID0gYXdhaXQgaGVhcnRiZWF0U2VydmljZS5nZXRIZWFydGJlYXRzSGVhZGVyKCk7XG4gICAgICAgIGlmIChoZWFydGJlYXRzSGVhZGVyKSB7XG4gICAgICAgICAgICBoZWFkZXJzLmFwcGVuZCgneC1maXJlYmFzZS1jbGllbnQnLCBoZWFydGJlYXRzSGVhZGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICBpbnN0YWxsYXRpb246IHtcbiAgICAgICAgICAgIHNka1ZlcnNpb246IFBBQ0tBR0VfVkVSU0lPTixcbiAgICAgICAgICAgIGFwcElkOiBhcHBDb25maWcuYXBwSWRcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJldHJ5SWZTZXJ2ZXJFcnJvcigoKSA9PiBmZXRjaChlbmRwb2ludCwgcmVxdWVzdCkpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCByZXNwb25zZVZhbHVlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRBdXRoVG9rZW4gPSBleHRyYWN0QXV0aFRva2VuSW5mb0Zyb21SZXNwb25zZShyZXNwb25zZVZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlZEF1dGhUb2tlbjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IGF3YWl0IGdldEVycm9yRnJvbVJlc3BvbnNlKCdHZW5lcmF0ZSBBdXRoIFRva2VuJywgcmVzcG9uc2UpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldEdlbmVyYXRlQXV0aFRva2VuRW5kcG9pbnQoYXBwQ29uZmlnLCB7IGZpZCB9KSB7XG4gICAgcmV0dXJuIGAke2dldEluc3RhbGxhdGlvbnNFbmRwb2ludChhcHBDb25maWcpfS8ke2ZpZH0vYXV0aFRva2VuczpnZW5lcmF0ZWA7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFJldHVybnMgYSB2YWxpZCBhdXRoZW50aWNhdGlvbiB0b2tlbiBmb3IgdGhlIGluc3RhbGxhdGlvbi4gR2VuZXJhdGVzIGEgbmV3XG4gKiB0b2tlbiBpZiBvbmUgZG9lc24ndCBleGlzdCwgaXMgZXhwaXJlZCBvciBhYm91dCB0byBleHBpcmUuXG4gKlxuICogU2hvdWxkIG9ubHkgYmUgY2FsbGVkIGlmIHRoZSBGaXJlYmFzZSBJbnN0YWxsYXRpb24gaXMgcmVnaXN0ZXJlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaEF1dGhUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2ggPSBmYWxzZSkge1xuICAgIGxldCB0b2tlblByb21pc2U7XG4gICAgY29uc3QgZW50cnkgPSBhd2FpdCB1cGRhdGUoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcsIG9sZEVudHJ5ID0+IHtcbiAgICAgICAgaWYgKCFpc0VudHJ5UmVnaXN0ZXJlZChvbGRFbnRyeSkpIHtcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm90LXJlZ2lzdGVyZWRcIiAvKiBFcnJvckNvZGUuTk9UX1JFR0lTVEVSRUQgKi8pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9sZEF1dGhUb2tlbiA9IG9sZEVudHJ5LmF1dGhUb2tlbjtcbiAgICAgICAgaWYgKCFmb3JjZVJlZnJlc2ggJiYgaXNBdXRoVG9rZW5WYWxpZChvbGRBdXRoVG9rZW4pKSB7XG4gICAgICAgICAgICAvLyBUaGVyZSBpcyBhIHZhbGlkIHRva2VuIGluIHRoZSBEQi5cbiAgICAgICAgICAgIHJldHVybiBvbGRFbnRyeTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChvbGRBdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XG4gICAgICAgICAgICAvLyBUaGVyZSBhbHJlYWR5IGlzIGEgdG9rZW4gcmVxdWVzdCBpbiBwcm9ncmVzcy5cbiAgICAgICAgICAgIHRva2VuUHJvbWlzZSA9IHdhaXRVbnRpbEF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgZm9yY2VSZWZyZXNoKTtcbiAgICAgICAgICAgIHJldHVybiBvbGRFbnRyeTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIHRva2VuIG9yIHRva2VuIGV4cGlyZWQuXG4gICAgICAgICAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1vZmZsaW5lXCIgLyogRXJyb3JDb2RlLkFQUF9PRkZMSU5FICovKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluUHJvZ3Jlc3NFbnRyeSA9IG1ha2VBdXRoVG9rZW5SZXF1ZXN0SW5Qcm9ncmVzc0VudHJ5KG9sZEVudHJ5KTtcbiAgICAgICAgICAgIHRva2VuUHJvbWlzZSA9IGZldGNoQXV0aFRva2VuRnJvbVNlcnZlcihpbnN0YWxsYXRpb25zLCBpblByb2dyZXNzRW50cnkpO1xuICAgICAgICAgICAgcmV0dXJuIGluUHJvZ3Jlc3NFbnRyeTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHRva2VuUHJvbWlzZVxuICAgICAgICA/IGF3YWl0IHRva2VuUHJvbWlzZVxuICAgICAgICA6IGVudHJ5LmF1dGhUb2tlbjtcbiAgICByZXR1cm4gYXV0aFRva2VuO1xufVxuLyoqXG4gKiBDYWxsIG9ubHkgaWYgRklEIGlzIHJlZ2lzdGVyZWQgYW5kIEF1dGggVG9rZW4gcmVxdWVzdCBpcyBpbiBwcm9ncmVzcy5cbiAqXG4gKiBXYWl0cyB1bnRpbCB0aGUgY3VycmVudCBwZW5kaW5nIHJlcXVlc3QgZmluaXNoZXMuIElmIHRoZSByZXF1ZXN0IHRpbWVzIG91dCxcbiAqIHRyaWVzIG9uY2UgaW4gdGhpcyB0aHJlYWQgYXMgd2VsbC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gd2FpdFVudGlsQXV0aFRva2VuUmVxdWVzdChpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpIHtcbiAgICAvLyBVbmZvcnR1bmF0ZWx5LCB0aGVyZSBpcyBubyB3YXkgb2YgcmVsaWFibHkgb2JzZXJ2aW5nIHdoZW4gYSB2YWx1ZSBpblxuICAgIC8vIEluZGV4ZWREQiBjaGFuZ2VzICh5ZXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vV0lDRy9pbmRleGVkLWRiLW9ic2VydmVycyksXG4gICAgLy8gc28gd2UgbmVlZCB0byBwb2xsLlxuICAgIGxldCBlbnRyeSA9IGF3YWl0IHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICAgIHdoaWxlIChlbnRyeS5hdXRoVG9rZW4ucmVxdWVzdFN0YXR1cyA9PT0gMSAvKiBSZXF1ZXN0U3RhdHVzLklOX1BST0dSRVNTICovKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlQXV0aFRva2VuIHN0aWxsIGluIHByb2dyZXNzLlxuICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICBlbnRyeSA9IGF3YWl0IHVwZGF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucy5hcHBDb25maWcpO1xuICAgIH1cbiAgICBjb25zdCBhdXRoVG9rZW4gPSBlbnRyeS5hdXRoVG9rZW47XG4gICAgaWYgKGF1dGhUb2tlbi5yZXF1ZXN0U3RhdHVzID09PSAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8pIHtcbiAgICAgICAgLy8gVGhlIHJlcXVlc3QgdGltZWQgb3V0IG9yIGZhaWxlZCBpbiBhIGRpZmZlcmVudCBjYWxsLiBUcnkgYWdhaW4uXG4gICAgICAgIHJldHVybiByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYXV0aFRva2VuO1xuICAgIH1cbn1cbi8qKlxuICogQ2FsbGVkIG9ubHkgaWYgdGhlcmUgaXMgYSBHZW5lcmF0ZUF1dGhUb2tlbiByZXF1ZXN0IGluIHByb2dyZXNzLlxuICpcbiAqIFVwZGF0ZXMgdGhlIEluc3RhbGxhdGlvbkVudHJ5IGluIHRoZSBEQiBiYXNlZCBvbiB0aGUgc3RhdHVzIG9mIHRoZVxuICogR2VuZXJhdGVBdXRoVG9rZW4gcmVxdWVzdC5cbiAqXG4gKiBSZXR1cm5zIHRoZSB1cGRhdGVkIEluc3RhbGxhdGlvbkVudHJ5LlxuICovXG5mdW5jdGlvbiB1cGRhdGVBdXRoVG9rZW5SZXF1ZXN0KGFwcENvbmZpZykge1xuICAgIHJldHVybiB1cGRhdGUoYXBwQ29uZmlnLCBvbGRFbnRyeSA9PiB7XG4gICAgICAgIGlmICghaXNFbnRyeVJlZ2lzdGVyZWQob2xkRW50cnkpKSB7XG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm5vdC1yZWdpc3RlcmVkXCIgLyogRXJyb3JDb2RlLk5PVF9SRUdJU1RFUkVEICovKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvbGRBdXRoVG9rZW4gPSBvbGRFbnRyeS5hdXRoVG9rZW47XG4gICAgICAgIGlmIChoYXNBdXRoVG9rZW5SZXF1ZXN0VGltZWRPdXQob2xkQXV0aFRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgb2xkRW50cnkpLCB7IGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8gfSB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2xkRW50cnk7XG4gICAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBmZXRjaEF1dGhUb2tlbkZyb21TZXJ2ZXIoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBhdXRoVG9rZW4gPSBhd2FpdCBnZW5lcmF0ZUF1dGhUb2tlblJlcXVlc3QoaW5zdGFsbGF0aW9ucywgaW5zdGFsbGF0aW9uRW50cnkpO1xuICAgICAgICBjb25zdCB1cGRhdGVkSW5zdGFsbGF0aW9uRW50cnkgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGluc3RhbGxhdGlvbkVudHJ5KSwgeyBhdXRoVG9rZW4gfSk7XG4gICAgICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5KTtcbiAgICAgICAgcmV0dXJuIGF1dGhUb2tlbjtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGlzU2VydmVyRXJyb3IoZSkgJiZcbiAgICAgICAgICAgIChlLmN1c3RvbURhdGEuc2VydmVyQ29kZSA9PT0gNDAxIHx8IGUuY3VzdG9tRGF0YS5zZXJ2ZXJDb2RlID09PSA0MDQpKSB7XG4gICAgICAgICAgICAvLyBTZXJ2ZXIgcmV0dXJuZWQgYSBcIkZJRCBub3QgZm91bmRcIiBvciBhIFwiSW52YWxpZCBhdXRoZW50aWNhdGlvblwiIGVycm9yLlxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgSUQgbmV4dCB0aW1lLlxuICAgICAgICAgICAgYXdhaXQgcmVtb3ZlKGluc3RhbGxhdGlvbnMuYXBwQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRJbnN0YWxsYXRpb25FbnRyeSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgaW5zdGFsbGF0aW9uRW50cnkpLCB7IGF1dGhUb2tlbjogeyByZXF1ZXN0U3RhdHVzOiAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8gfSB9KTtcbiAgICAgICAgICAgIGF3YWl0IHNldChpbnN0YWxsYXRpb25zLmFwcENvbmZpZywgdXBkYXRlZEluc3RhbGxhdGlvbkVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzRW50cnlSZWdpc3RlcmVkKGluc3RhbGxhdGlvbkVudHJ5KSB7XG4gICAgcmV0dXJuIChpbnN0YWxsYXRpb25FbnRyeSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGluc3RhbGxhdGlvbkVudHJ5LnJlZ2lzdHJhdGlvblN0YXR1cyA9PT0gMiAvKiBSZXF1ZXN0U3RhdHVzLkNPTVBMRVRFRCAqLyk7XG59XG5mdW5jdGlvbiBpc0F1dGhUb2tlblZhbGlkKGF1dGhUb2tlbikge1xuICAgIHJldHVybiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDIgLyogUmVxdWVzdFN0YXR1cy5DT01QTEVURUQgKi8gJiZcbiAgICAgICAgIWlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW4pKTtcbn1cbmZ1bmN0aW9uIGlzQXV0aFRva2VuRXhwaXJlZChhdXRoVG9rZW4pIHtcbiAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiAobm93IDwgYXV0aFRva2VuLmNyZWF0aW9uVGltZSB8fFxuICAgICAgICBhdXRoVG9rZW4uY3JlYXRpb25UaW1lICsgYXV0aFRva2VuLmV4cGlyZXNJbiA8IG5vdyArIFRPS0VOX0VYUElSQVRJT05fQlVGRkVSKTtcbn1cbi8qKiBSZXR1cm5zIGFuIHVwZGF0ZWQgSW5zdGFsbGF0aW9uRW50cnkgd2l0aCBhbiBJblByb2dyZXNzQXV0aFRva2VuLiAqL1xuZnVuY3Rpb24gbWFrZUF1dGhUb2tlblJlcXVlc3RJblByb2dyZXNzRW50cnkob2xkRW50cnkpIHtcbiAgICBjb25zdCBpblByb2dyZXNzQXV0aFRva2VuID0ge1xuICAgICAgICByZXF1ZXN0U3RhdHVzOiAxIC8qIFJlcXVlc3RTdGF0dXMuSU5fUFJPR1JFU1MgKi8sXG4gICAgICAgIHJlcXVlc3RUaW1lOiBEYXRlLm5vdygpXG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBvbGRFbnRyeSksIHsgYXV0aFRva2VuOiBpblByb2dyZXNzQXV0aFRva2VuIH0pO1xufVxuZnVuY3Rpb24gaGFzQXV0aFRva2VuUmVxdWVzdFRpbWVkT3V0KGF1dGhUb2tlbikge1xuICAgIHJldHVybiAoYXV0aFRva2VuLnJlcXVlc3RTdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLyAmJlxuICAgICAgICBhdXRoVG9rZW4ucmVxdWVzdFRpbWUgKyBQRU5ESU5HX1RJTUVPVVRfTVMgPCBEYXRlLm5vdygpKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQ3JlYXRlcyBhIEZpcmViYXNlIEluc3RhbGxhdGlvbiBpZiB0aGVyZSBpc24ndCBvbmUgZm9yIHRoZSBhcHAgYW5kXG4gKiByZXR1cm5zIHRoZSBJbnN0YWxsYXRpb24gSUQuXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXG4gKlxuICogQHB1YmxpY1xuICovXG5hc3luYyBmdW5jdGlvbiBnZXRJZChpbnN0YWxsYXRpb25zKSB7XG4gICAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSBpbnN0YWxsYXRpb25zO1xuICAgIGNvbnN0IHsgaW5zdGFsbGF0aW9uRW50cnksIHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnNJbXBsKTtcbiAgICBpZiAocmVnaXN0cmF0aW9uUHJvbWlzZSkge1xuICAgICAgICByZWdpc3RyYXRpb25Qcm9taXNlLmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIGluc3RhbGxhdGlvbiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQsIHVwZGF0ZSB0aGUgYXV0aGVudGljYXRpb25cbiAgICAgICAgLy8gdG9rZW4gaWYgbmVlZGVkLlxuICAgICAgICByZWZyZXNoQXV0aFRva2VuKGluc3RhbGxhdGlvbnNJbXBsKS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbkVudHJ5LmZpZDtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUmV0dXJucyBhIEZpcmViYXNlIEluc3RhbGxhdGlvbnMgYXV0aCB0b2tlbiwgaWRlbnRpZnlpbmcgdGhlIGN1cnJlbnRcbiAqIEZpcmViYXNlIEluc3RhbGxhdGlvbi5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cbiAqIEBwYXJhbSBmb3JjZVJlZnJlc2ggLSBGb3JjZSByZWZyZXNoIHJlZ2FyZGxlc3Mgb2YgdG9rZW4gZXhwaXJhdGlvbi5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGdldFRva2VuKGluc3RhbGxhdGlvbnMsIGZvcmNlUmVmcmVzaCA9IGZhbHNlKSB7XG4gICAgY29uc3QgaW5zdGFsbGF0aW9uc0ltcGwgPSBpbnN0YWxsYXRpb25zO1xuICAgIGF3YWl0IGNvbXBsZXRlSW5zdGFsbGF0aW9uUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnNJbXBsKTtcbiAgICAvLyBBdCB0aGlzIHBvaW50IHdlIGVpdGhlciBoYXZlIGEgUmVnaXN0ZXJlZCBJbnN0YWxsYXRpb24gaW4gdGhlIERCLCBvciB3ZSd2ZVxuICAgIC8vIGFscmVhZHkgdGhyb3duIGFuIGVycm9yLlxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IGF3YWl0IHJlZnJlc2hBdXRoVG9rZW4oaW5zdGFsbGF0aW9uc0ltcGwsIGZvcmNlUmVmcmVzaCk7XG4gICAgcmV0dXJuIGF1dGhUb2tlbi50b2tlbjtcbn1cbmFzeW5jIGZ1bmN0aW9uIGNvbXBsZXRlSW5zdGFsbGF0aW9uUmVnaXN0cmF0aW9uKGluc3RhbGxhdGlvbnMpIHtcbiAgICBjb25zdCB7IHJlZ2lzdHJhdGlvblByb21pc2UgfSA9IGF3YWl0IGdldEluc3RhbGxhdGlvbkVudHJ5KGluc3RhbGxhdGlvbnMpO1xuICAgIGlmIChyZWdpc3RyYXRpb25Qcm9taXNlKSB7XG4gICAgICAgIC8vIEEgY3JlYXRlSW5zdGFsbGF0aW9uIHJlcXVlc3QgaXMgaW4gcHJvZ3Jlc3MuIFdhaXQgdW50aWwgaXQgZmluaXNoZXMuXG4gICAgICAgIGF3YWl0IHJlZ2lzdHJhdGlvblByb21pc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gZGVsZXRlSW5zdGFsbGF0aW9uUmVxdWVzdChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KSB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBnZXREZWxldGVFbmRwb2ludChhcHBDb25maWcsIGluc3RhbGxhdGlvbkVudHJ5KTtcbiAgICBjb25zdCBoZWFkZXJzID0gZ2V0SGVhZGVyc1dpdGhBdXRoKGFwcENvbmZpZywgaW5zdGFsbGF0aW9uRW50cnkpO1xuICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIGhlYWRlcnNcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmV0cnlJZlNlcnZlckVycm9yKCgpID0+IGZldGNoKGVuZHBvaW50LCByZXF1ZXN0KSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBhd2FpdCBnZXRFcnJvckZyb21SZXNwb25zZSgnRGVsZXRlIEluc3RhbGxhdGlvbicsIHJlc3BvbnNlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBnZXREZWxldGVFbmRwb2ludChhcHBDb25maWcsIHsgZmlkIH0pIHtcbiAgICByZXR1cm4gYCR7Z2V0SW5zdGFsbGF0aW9uc0VuZHBvaW50KGFwcENvbmZpZyl9LyR7ZmlkfWA7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIERlbGV0ZXMgdGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbiBhbmQgYWxsIGFzc29jaWF0ZWQgZGF0YS5cbiAqIEBwYXJhbSBpbnN0YWxsYXRpb25zIC0gVGhlIGBJbnN0YWxsYXRpb25zYCBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUluc3RhbGxhdGlvbnMoaW5zdGFsbGF0aW9ucykge1xuICAgIGNvbnN0IHsgYXBwQ29uZmlnIH0gPSBpbnN0YWxsYXRpb25zO1xuICAgIGNvbnN0IGVudHJ5ID0gYXdhaXQgdXBkYXRlKGFwcENvbmZpZywgb2xkRW50cnkgPT4ge1xuICAgICAgICBpZiAob2xkRW50cnkgJiYgb2xkRW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAwIC8qIFJlcXVlc3RTdGF0dXMuTk9UX1NUQVJURUQgKi8pIHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSB0aGUgdW5yZWdpc3RlcmVkIGVudHJ5IHdpdGhvdXQgc2VuZGluZyBhIGRlbGV0ZUluc3RhbGxhdGlvbiByZXF1ZXN0LlxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2xkRW50cnk7XG4gICAgfSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmIChlbnRyeS5yZWdpc3RyYXRpb25TdGF0dXMgPT09IDEgLyogUmVxdWVzdFN0YXR1cy5JTl9QUk9HUkVTUyAqLykge1xuICAgICAgICAgICAgLy8gQ2FuJ3QgZGVsZXRlIHdoaWxlIHRyeWluZyB0byByZWdpc3Rlci5cbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZGVsZXRlLXBlbmRpbmctcmVnaXN0cmF0aW9uXCIgLyogRXJyb3JDb2RlLkRFTEVURV9QRU5ESU5HX1JFR0lTVFJBVElPTiAqLyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZW50cnkucmVnaXN0cmF0aW9uU3RhdHVzID09PSAyIC8qIFJlcXVlc3RTdGF0dXMuQ09NUExFVEVEICovKSB7XG4gICAgICAgICAgICBpZiAoIW5hdmlnYXRvci5vbkxpbmUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1vZmZsaW5lXCIgLyogRXJyb3JDb2RlLkFQUF9PRkZMSU5FICovKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGV0ZUluc3RhbGxhdGlvblJlcXVlc3QoYXBwQ29uZmlnLCBlbnRyeSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgcmVtb3ZlKGFwcENvbmZpZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFNldHMgYSBuZXcgY2FsbGJhY2sgdGhhdCB3aWxsIGdldCBjYWxsZWQgd2hlbiBJbnN0YWxsYXRpb24gSUQgY2hhbmdlcy5cbiAqIFJldHVybnMgYW4gdW5zdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCB3aWxsIHJlbW92ZSB0aGUgY2FsbGJhY2sgd2hlbiBjYWxsZWQuXG4gKiBAcGFyYW0gaW5zdGFsbGF0aW9ucyAtIFRoZSBgSW5zdGFsbGF0aW9uc2AgaW5zdGFuY2UuXG4gKiBAcGFyYW0gY2FsbGJhY2sgLSBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCBpcyBpbnZva2VkIHdoZW4gRklEIGNoYW5nZXMuXG4gKiBAcmV0dXJucyBBIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZCB0byB1bnN1YnNjcmliZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIG9uSWRDaGFuZ2UoaW5zdGFsbGF0aW9ucywgY2FsbGJhY2spIHtcbiAgICBjb25zdCB7IGFwcENvbmZpZyB9ID0gaW5zdGFsbGF0aW9ucztcbiAgICBhZGRDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICByZW1vdmVDYWxsYmFjayhhcHBDb25maWcsIGNhbGxiYWNrKTtcbiAgICB9O1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHtAbGluayBJbnN0YWxsYXRpb25zfSBhc3NvY2lhdGVkIHdpdGggdGhlIGdpdmVuXG4gKiB7QGxpbmsgQGZpcmViYXNlL2FwcCNGaXJlYmFzZUFwcH0gaW5zdGFuY2UuXG4gKiBAcGFyYW0gYXBwIC0gVGhlIHtAbGluayBAZmlyZWJhc2UvYXBwI0ZpcmViYXNlQXBwfSBpbnN0YW5jZS5cbiAqXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGdldEluc3RhbGxhdGlvbnMoYXBwID0gZ2V0QXBwKCkpIHtcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IF9nZXRQcm92aWRlcihhcHAsICdpbnN0YWxsYXRpb25zJykuZ2V0SW1tZWRpYXRlKCk7XG4gICAgcmV0dXJuIGluc3RhbGxhdGlvbnNJbXBsO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gZXh0cmFjdEFwcENvbmZpZyhhcHApIHtcbiAgICBpZiAoIWFwcCB8fCAhYXBwLm9wdGlvbnMpIHtcbiAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBDb25maWd1cmF0aW9uJyk7XG4gICAgfVxuICAgIGlmICghYXBwLm5hbWUpIHtcbiAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3IoJ0FwcCBOYW1lJyk7XG4gICAgfVxuICAgIC8vIFJlcXVpcmVkIGFwcCBjb25maWcga2V5c1xuICAgIGNvbnN0IGNvbmZpZ0tleXMgPSBbXG4gICAgICAgICdwcm9qZWN0SWQnLFxuICAgICAgICAnYXBpS2V5JyxcbiAgICAgICAgJ2FwcElkJ1xuICAgIF07XG4gICAgZm9yIChjb25zdCBrZXlOYW1lIG9mIGNvbmZpZ0tleXMpIHtcbiAgICAgICAgaWYgKCFhcHAub3B0aW9uc1trZXlOYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgZ2V0TWlzc2luZ1ZhbHVlRXJyb3Ioa2V5TmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYXBwTmFtZTogYXBwLm5hbWUsXG4gICAgICAgIHByb2plY3RJZDogYXBwLm9wdGlvbnMucHJvamVjdElkLFxuICAgICAgICBhcGlLZXk6IGFwcC5vcHRpb25zLmFwaUtleSxcbiAgICAgICAgYXBwSWQ6IGFwcC5vcHRpb25zLmFwcElkXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldE1pc3NpbmdWYWx1ZUVycm9yKHZhbHVlTmFtZSkge1xuICAgIHJldHVybiBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcIm1pc3NpbmctYXBwLWNvbmZpZy12YWx1ZXNcIiAvKiBFcnJvckNvZGUuTUlTU0lOR19BUFBfQ09ORklHX1ZBTFVFUyAqLywge1xuICAgICAgICB2YWx1ZU5hbWVcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjAgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmNvbnN0IElOU1RBTExBVElPTlNfTkFNRSA9ICdpbnN0YWxsYXRpb25zJztcbmNvbnN0IElOU1RBTExBVElPTlNfTkFNRV9JTlRFUk5BTCA9ICdpbnN0YWxsYXRpb25zLWludGVybmFsJztcbmNvbnN0IHB1YmxpY0ZhY3RvcnkgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgICAvLyBUaHJvd3MgaWYgYXBwIGlzbid0IGNvbmZpZ3VyZWQgcHJvcGVybHkuXG4gICAgY29uc3QgYXBwQ29uZmlnID0gZXh0cmFjdEFwcENvbmZpZyhhcHApO1xuICAgIGNvbnN0IGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlciA9IF9nZXRQcm92aWRlcihhcHAsICdoZWFydGJlYXQnKTtcbiAgICBjb25zdCBpbnN0YWxsYXRpb25zSW1wbCA9IHtcbiAgICAgICAgYXBwLFxuICAgICAgICBhcHBDb25maWcsXG4gICAgICAgIGhlYXJ0YmVhdFNlcnZpY2VQcm92aWRlcixcbiAgICAgICAgX2RlbGV0ZTogKCkgPT4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9O1xuICAgIHJldHVybiBpbnN0YWxsYXRpb25zSW1wbDtcbn07XG5jb25zdCBpbnRlcm5hbEZhY3RvcnkgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY29uc3QgYXBwID0gY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcbiAgICAvLyBJbnRlcm5hbCBGSVMgaW5zdGFuY2UgcmVsaWVzIG9uIHB1YmxpYyBGSVMgaW5zdGFuY2UuXG4gICAgY29uc3QgaW5zdGFsbGF0aW9ucyA9IF9nZXRQcm92aWRlcihhcHAsIElOU1RBTExBVElPTlNfTkFNRSkuZ2V0SW1tZWRpYXRlKCk7XG4gICAgY29uc3QgaW5zdGFsbGF0aW9uc0ludGVybmFsID0ge1xuICAgICAgICBnZXRJZDogKCkgPT4gZ2V0SWQoaW5zdGFsbGF0aW9ucyksXG4gICAgICAgIGdldFRva2VuOiAoZm9yY2VSZWZyZXNoKSA9PiBnZXRUb2tlbihpbnN0YWxsYXRpb25zLCBmb3JjZVJlZnJlc2gpXG4gICAgfTtcbiAgICByZXR1cm4gaW5zdGFsbGF0aW9uc0ludGVybmFsO1xufTtcbmZ1bmN0aW9uIHJlZ2lzdGVySW5zdGFsbGF0aW9ucygpIHtcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChJTlNUQUxMQVRJT05TX05BTUUsIHB1YmxpY0ZhY3RvcnksIFwiUFVCTElDXCIgLyogQ29tcG9uZW50VHlwZS5QVUJMSUMgKi8pKTtcbiAgICBfcmVnaXN0ZXJDb21wb25lbnQobmV3IENvbXBvbmVudChJTlNUQUxMQVRJT05TX05BTUVfSU5URVJOQUwsIGludGVybmFsRmFjdG9yeSwgXCJQUklWQVRFXCIgLyogQ29tcG9uZW50VHlwZS5QUklWQVRFICovKSk7XG59XG5cbi8qKlxuICogVGhlIEZpcmViYXNlIEluc3RhbGxhdGlvbnMgV2ViIFNESy5cbiAqIFRoaXMgU0RLIGRvZXMgbm90IHdvcmsgaW4gYSBOb2RlLmpzIGVudmlyb25tZW50LlxuICpcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxuICovXG5yZWdpc3Rlckluc3RhbGxhdGlvbnMoKTtcbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uKTtcbi8vIEJVSUxEX1RBUkdFVCB3aWxsIGJlIHJlcGxhY2VkIGJ5IHZhbHVlcyBsaWtlIGVzbTIwMTcsIGNqczIwMTcsIGV0YyBkdXJpbmcgdGhlIGNvbXBpbGF0aW9uXG5yZWdpc3RlclZlcnNpb24obmFtZSwgdmVyc2lvbiwgJ2VzbTIwMTcnKTtcblxuZXhwb3J0IHsgZGVsZXRlSW5zdGFsbGF0aW9ucywgZ2V0SWQsIGdldEluc3RhbGxhdGlvbnMsIGdldFRva2VuLCBvbklkQ2hhbmdlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQSBjb250YWluZXIgZm9yIGFsbCBvZiB0aGUgTG9nZ2VyIGluc3RhbmNlc1xuICovXG5jb25zdCBpbnN0YW5jZXMgPSBbXTtcbi8qKlxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxuICpcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXG4gKlxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXG4gKiBgVkVSQk9TRWAgbG9ncyB3aWxsIG5vdClcbiAqL1xudmFyIExvZ0xldmVsO1xuKGZ1bmN0aW9uIChMb2dMZXZlbCkge1xuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiREVCVUdcIl0gPSAwXSA9IFwiREVCVUdcIjtcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSAxXSA9IFwiVkVSQk9TRVwiO1xuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiSU5GT1wiXSA9IDJdID0gXCJJTkZPXCI7XG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJXQVJOXCJdID0gM10gPSBcIldBUk5cIjtcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVSUk9SXCJdID0gNF0gPSBcIkVSUk9SXCI7XG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJTSUxFTlRcIl0gPSA1XSA9IFwiU0lMRU5UXCI7XG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xuY29uc3QgbGV2ZWxTdHJpbmdUb0VudW0gPSB7XG4gICAgJ2RlYnVnJzogTG9nTGV2ZWwuREVCVUcsXG4gICAgJ3ZlcmJvc2UnOiBMb2dMZXZlbC5WRVJCT1NFLFxuICAgICdpbmZvJzogTG9nTGV2ZWwuSU5GTyxcbiAgICAnd2Fybic6IExvZ0xldmVsLldBUk4sXG4gICAgJ2Vycm9yJzogTG9nTGV2ZWwuRVJST1IsXG4gICAgJ3NpbGVudCc6IExvZ0xldmVsLlNJTEVOVFxufTtcbi8qKlxuICogVGhlIGRlZmF1bHQgbG9nIGxldmVsXG4gKi9cbmNvbnN0IGRlZmF1bHRMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XG4vKipcbiAqIEJ5IGRlZmF1bHQsIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgZGlzcGxheWVkIGluIHRoZSBkZXZlbG9wZXIgY29uc29sZSAoaW5cbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxuICogKGkuZS4gb25jZSBmb3IgZmlyZWJhc2UsIGFuZCBvbmNlIGluIHRoZSBjb25zb2xlKSwgd2UgYXJlIHNlbmRpbmcgYERFQlVHYFxuICogbG9ncyB0byB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbi5cbiAqL1xuY29uc3QgQ29uc29sZU1ldGhvZCA9IHtcbiAgICBbTG9nTGV2ZWwuREVCVUddOiAnbG9nJyxcbiAgICBbTG9nTGV2ZWwuVkVSQk9TRV06ICdsb2cnLFxuICAgIFtMb2dMZXZlbC5JTkZPXTogJ2luZm8nLFxuICAgIFtMb2dMZXZlbC5XQVJOXTogJ3dhcm4nLFxuICAgIFtMb2dMZXZlbC5FUlJPUl06ICdlcnJvcidcbn07XG4vKipcbiAqIFRoZSBkZWZhdWx0IGxvZyBoYW5kbGVyIHdpbGwgZm9yd2FyZCBERUJVRywgVkVSQk9TRSwgSU5GTywgV0FSTiwgYW5kIEVSUk9SXG4gKiBtZXNzYWdlcyBvbiB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNvbnNvbGUgY291bnRlcnBhcnRzIChpZiB0aGUgbG9nIG1ldGhvZFxuICogaXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IGxvZyBsZXZlbClcbiAqL1xuY29uc3QgZGVmYXVsdExvZ0hhbmRsZXIgPSAoaW5zdGFuY2UsIGxvZ1R5cGUsIC4uLmFyZ3MpID0+IHtcbiAgICBpZiAobG9nVHlwZSA8IGluc3RhbmNlLmxvZ0xldmVsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGNvbnN0IG1ldGhvZCA9IENvbnNvbGVNZXRob2RbbG9nVHlwZV07XG4gICAgaWYgKG1ldGhvZCkge1xuICAgICAgICBjb25zb2xlW21ldGhvZF0oYFske25vd31dICAke2luc3RhbmNlLm5hbWV9OmAsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0ZWQgdG8gbG9nIGEgbWVzc2FnZSB3aXRoIGFuIGludmFsaWQgbG9nVHlwZSAodmFsdWU6ICR7bG9nVHlwZX0pYCk7XG4gICAgfVxufTtcbmNsYXNzIExvZ2dlciB7XG4gICAgLyoqXG4gICAgICogR2l2ZXMgeW91IGFuIGluc3RhbmNlIG9mIGEgTG9nZ2VyIHRvIGNhcHR1cmUgbWVzc2FnZXMgYWNjb3JkaW5nIHRvXG4gICAgICogRmlyZWJhc2UncyBsb2dnaW5nIHNjaGVtZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIHRoYXQgdGhlIGxvZ3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGhcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgbG9nIGxldmVsIG9mIHRoZSBnaXZlbiBMb2dnZXIgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9sb2dMZXZlbCA9IGRlZmF1bHRMb2dMZXZlbDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBtYWluIChpbnRlcm5hbCkgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXG4gICAgICAgICAqIENhbiBiZSBzZXQgdG8gYSBuZXcgZnVuY3Rpb24gaW4gaW50ZXJuYWwgcGFja2FnZSBjb2RlIGJ1dCBub3QgYnkgdXNlci5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSBkZWZhdWx0TG9nSGFuZGxlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBvcHRpb25hbCwgYWRkaXRpb25hbCwgdXNlci1kZWZpbmVkIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgPSBudWxsO1xuICAgICAgICAvKipcbiAgICAgICAgICogQ2FwdHVyZSB0aGUgY3VycmVudCBpbnN0YW5jZSBmb3IgbGF0ZXIgdXNlXG4gICAgICAgICAqL1xuICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICB9XG4gICAgZ2V0IGxvZ0xldmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XG4gICAgfVxuICAgIHNldCBsb2dMZXZlbCh2YWwpIHtcbiAgICAgICAgaWYgKCEodmFsIGluIExvZ0xldmVsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBcIiR7dmFsfVwiIGFzc2lnbmVkIHRvIFxcYGxvZ0xldmVsXFxgYCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWw7XG4gICAgfVxuICAgIC8vIFdvcmthcm91bmQgZm9yIHNldHRlci9nZXR0ZXIgaGF2aW5nIHRvIGJlIHRoZSBzYW1lIHR5cGUuXG4gICAgc2V0TG9nTGV2ZWwodmFsKSB7XG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBsZXZlbFN0cmluZ1RvRW51bVt2YWxdIDogdmFsO1xuICAgIH1cbiAgICBnZXQgbG9nSGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0hhbmRsZXI7XG4gICAgfVxuICAgIHNldCBsb2dIYW5kbGVyKHZhbCkge1xuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVmFsdWUgYXNzaWduZWQgdG8gYGxvZ0hhbmRsZXJgIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSB2YWw7XG4gICAgfVxuICAgIGdldCB1c2VyTG9nSGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMb2dIYW5kbGVyO1xuICAgIH1cbiAgICBzZXQgdXNlckxvZ0hhbmRsZXIodmFsKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gdmFsO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGUgZnVuY3Rpb25zIGJlbG93IGFyZSBhbGwgYmFzZWQgb24gdGhlIGBjb25zb2xlYCBpbnRlcmZhY2VcbiAgICAgKi9cbiAgICBkZWJ1ZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkRFQlVHLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5ERUJVRywgLi4uYXJncyk7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmXG4gICAgICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcbiAgICB9XG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLklORk8sIC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLklORk8sIC4uLmFyZ3MpO1xuICAgIH1cbiAgICB3YXJuKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XG4gICAgfVxuICAgIGVycm9yKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xuICAgIGluc3RhbmNlcy5mb3JFYWNoKGluc3QgPT4ge1xuICAgICAgICBpbnN0LnNldExvZ0xldmVsKGxldmVsKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBpbnN0YW5jZXMpIHtcbiAgICAgICAgbGV0IGN1c3RvbUxvZ0xldmVsID0gbnVsbDtcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xuICAgICAgICAgICAgY3VzdG9tTG9nTGV2ZWwgPSBsZXZlbFN0cmluZ1RvRW51bVtvcHRpb25zLmxldmVsXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9nQ2FsbGJhY2sgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gKGluc3RhbmNlLCBsZXZlbCwgLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhcmdzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy5tZXNzYWdlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChpZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGFyZyA9PiBhcmcpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID49IChjdXN0b21Mb2dMZXZlbCAhPT0gbnVsbCAmJiBjdXN0b21Mb2dMZXZlbCAhPT0gdm9pZCAwID8gY3VzdG9tTG9nTGV2ZWwgOiBpbnN0YW5jZS5sb2dMZXZlbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nQ2FsbGJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV2ZWw6IExvZ0xldmVsW2xldmVsXS50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBpbnN0YW5jZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB7IExvZ0xldmVsLCBMb2dnZXIsIHNldExvZ0xldmVsLCBzZXRVc2VyTG9nSGFuZGxlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtMjAxNy5qcy5tYXBcbiIsImltcG9ydCB7IGdldERlZmF1bHRzRnJvbVBvc3RpbnN0YWxsIH0gZnJvbSAnLi9wb3N0aW5zdGFsbC5tanMnO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEZpcmViYXNlIGNvbnN0YW50cy4gIFNvbWUgb2YgdGhlc2UgKEBkZWZpbmVzKSBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBjb21waWxlLXRpbWUuXG4gKi9cbmNvbnN0IENPTlNUQU5UUyA9IHtcbiAgICAvKipcbiAgICAgKiBAZGVmaW5lIHtib29sZWFufSBXaGV0aGVyIHRoaXMgaXMgdGhlIGNsaWVudCBOb2RlLmpzIFNESy5cbiAgICAgKi9cbiAgICBOT0RFX0NMSUVOVDogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQGRlZmluZSB7Ym9vbGVhbn0gV2hldGhlciB0aGlzIGlzIHRoZSBBZG1pbiBOb2RlLmpzIFNESy5cbiAgICAgKi9cbiAgICBOT0RFX0FETUlOOiBmYWxzZSxcbiAgICAvKipcbiAgICAgKiBGaXJlYmFzZSBTREsgVmVyc2lvblxuICAgICAqL1xuICAgIFNES19WRVJTSU9OOiAnJHtKU0NPUkVfVkVSU0lPTn0nXG59O1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgdGhlIHByb3ZpZGVkIGFzc2VydGlvbiBpcyBmYWxzeVxuICovXG5jb25zdCBhc3NlcnQgPSBmdW5jdGlvbiAoYXNzZXJ0aW9uLCBtZXNzYWdlKSB7XG4gICAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICAgICAgdGhyb3cgYXNzZXJ0aW9uRXJyb3IobWVzc2FnZSk7XG4gICAgfVxufTtcbi8qKlxuICogUmV0dXJucyBhbiBFcnJvciBvYmplY3Qgc3VpdGFibGUgZm9yIHRocm93aW5nLlxuICovXG5jb25zdCBhc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignRmlyZWJhc2UgRGF0YWJhc2UgKCcgK1xuICAgICAgICBDT05TVEFOVFMuU0RLX1ZFUlNJT04gK1xuICAgICAgICAnKSBJTlRFUk5BTCBBU1NFUlQgRkFJTEVEOiAnICtcbiAgICAgICAgbWVzc2FnZSk7XG59O1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3Qgc3RyaW5nVG9CeXRlQXJyYXkkMSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICAvLyBUT0RPKHVzZXIpOiBVc2UgbmF0aXZlIGltcGxlbWVudGF0aW9ucyBpZi93aGVuIGF2YWlsYWJsZVxuICAgIGNvbnN0IG91dCA9IFtdO1xuICAgIGxldCBwID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoYyAmIDB4ZmMwMCkgPT09IDB4ZDgwMCAmJlxuICAgICAgICAgICAgaSArIDEgPCBzdHIubGVuZ3RoICYmXG4gICAgICAgICAgICAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XG4gICAgICAgICAgICAvLyBTdXJyb2dhdGUgUGFpclxuICAgICAgICAgICAgYyA9IDB4MTAwMDAgKyAoKGMgJiAweDAzZmYpIDw8IDEwKSArIChzdHIuY2hhckNvZGVBdCgrK2kpICYgMHgwM2ZmKTtcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn07XG4vKipcbiAqIFR1cm5zIGFuIGFycmF5IG9mIG51bWJlcnMgaW50byB0aGUgc3RyaW5nIGdpdmVuIGJ5IHRoZSBjb25jYXRlbmF0aW9uIG9mIHRoZVxuICogY2hhcmFjdGVycyB0byB3aGljaCB0aGUgbnVtYmVycyBjb3JyZXNwb25kLlxuICogQHBhcmFtIGJ5dGVzIEFycmF5IG9mIG51bWJlcnMgcmVwcmVzZW50aW5nIGNoYXJhY3RlcnMuXG4gKiBAcmV0dXJuIFN0cmluZ2lmaWNhdGlvbiBvZiB0aGUgYXJyYXkuXG4gKi9cbmNvbnN0IGJ5dGVBcnJheVRvU3RyaW5nID0gZnVuY3Rpb24gKGJ5dGVzKSB7XG4gICAgLy8gVE9ETyh1c2VyKTogVXNlIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbnMgaWYvd2hlbiBhdmFpbGFibGVcbiAgICBjb25zdCBvdXQgPSBbXTtcbiAgICBsZXQgcG9zID0gMCwgYyA9IDA7XG4gICAgd2hpbGUgKHBvcyA8IGJ5dGVzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCBjMSA9IGJ5dGVzW3BvcysrXTtcbiAgICAgICAgaWYgKGMxIDwgMTI4KSB7XG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoYzEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMxID4gMTkxICYmIGMxIDwgMjI0KSB7XG4gICAgICAgICAgICBjb25zdCBjMiA9IGJ5dGVzW3BvcysrXTtcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjMSA+IDIzOSAmJiBjMSA8IDM2NSkge1xuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYnl0ZXNbcG9zKytdO1xuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XG4gICAgICAgICAgICBjb25zdCBjNCA9IGJ5dGVzW3BvcysrXTtcbiAgICAgICAgICAgIGNvbnN0IHUgPSAoKChjMSAmIDcpIDw8IDE4KSB8ICgoYzIgJiA2MykgPDwgMTIpIHwgKChjMyAmIDYzKSA8PCA2KSB8IChjNCAmIDYzKSkgLVxuICAgICAgICAgICAgICAgIDB4MTAwMDA7XG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKHUgPj4gMTApKTtcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGRjMDAgKyAodSAmIDEwMjMpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGMyID0gYnl0ZXNbcG9zKytdO1xuICAgICAgICAgICAgY29uc3QgYzMgPSBieXRlc1twb3MrK107XG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjMSAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0LmpvaW4oJycpO1xufTtcbi8vIFdlIGRlZmluZSBpdCBhcyBhbiBvYmplY3QgbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY2xhc3MgYmVjYXVzZSBhIGNsYXNzIGNvbXBpbGVkIGRvd24gdG8gZXM1IGNhbid0XG4vLyBiZSB0cmVlc2hha2VkLiBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTY5MVxuLy8gU3RhdGljIGxvb2t1cCBtYXBzLCBsYXppbHkgcG9wdWxhdGVkIGJ5IGluaXRfKClcbi8vIFRPRE8oZGxhcm9jcXVlKTogRGVmaW5lIHRoaXMgYXMgYSBjbGFzcywgc2luY2Ugd2Ugbm8gbG9uZ2VyIHRhcmdldCBFUzUuXG5jb25zdCBiYXNlNjQgPSB7XG4gICAgLyoqXG4gICAgICogTWFwcyBieXRlcyB0byBjaGFyYWN0ZXJzLlxuICAgICAqL1xuICAgIGJ5dGVUb0NoYXJNYXBfOiBudWxsLFxuICAgIC8qKlxuICAgICAqIE1hcHMgY2hhcmFjdGVycyB0byBieXRlcy5cbiAgICAgKi9cbiAgICBjaGFyVG9CeXRlTWFwXzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBNYXBzIGJ5dGVzIHRvIHdlYnNhZmUgY2hhcmFjdGVycy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGJ5dGVUb0NoYXJNYXBXZWJTYWZlXzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBNYXBzIHdlYnNhZmUgY2hhcmFjdGVycyB0byBieXRlcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNoYXJUb0J5dGVNYXBXZWJTYWZlXzogbnVsbCxcbiAgICAvKipcbiAgICAgKiBPdXIgZGVmYXVsdCBhbHBoYWJldCwgc2hhcmVkIGJldHdlZW5cbiAgICAgKiBFTkNPREVEX1ZBTFMgYW5kIEVOQ09ERURfVkFMU19XRUJTQUZFXG4gICAgICovXG4gICAgRU5DT0RFRF9WQUxTX0JBU0U6ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWicgKyAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonICsgJzAxMjM0NTY3ODknLFxuICAgIC8qKlxuICAgICAqIE91ciBkZWZhdWx0IGFscGhhYmV0LiBWYWx1ZSA2NCAoPSkgaXMgc3BlY2lhbDsgaXQgbWVhbnMgXCJub3RoaW5nLlwiXG4gICAgICovXG4gICAgZ2V0IEVOQ09ERURfVkFMUygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UgKyAnKy89JztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIE91ciB3ZWJzYWZlIGFscGhhYmV0LlxuICAgICAqL1xuICAgIGdldCBFTkNPREVEX1ZBTFNfV0VCU0FGRSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuRU5DT0RFRF9WQUxTX0JBU0UgKyAnLV8uJztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhpcyBicm93c2VyIHN1cHBvcnRzIHRoZSBhdG9iIGFuZCBidG9hIGZ1bmN0aW9ucy4gVGhpcyBleHRlbnNpb25cbiAgICAgKiBzdGFydGVkIGF0IE1vemlsbGEgYnV0IGlzIG5vdyBpbXBsZW1lbnRlZCBieSBtYW55IGJyb3dzZXJzLiBXZSB1c2UgdGhlXG4gICAgICogQVNTVU1FXyogdmFyaWFibGVzIHRvIGF2b2lkIHB1bGxpbmcgaW4gdGhlIGZ1bGwgdXNlcmFnZW50IGRldGVjdGlvbiBsaWJyYXJ5XG4gICAgICogYnV0IHN0aWxsIGFsbG93aW5nIHRoZSBzdGFuZGFyZCBwZXItYnJvd3NlciBjb21waWxhdGlvbnMuXG4gICAgICpcbiAgICAgKi9cbiAgICBIQVNfTkFUSVZFX1NVUFBPUlQ6IHR5cGVvZiBhdG9iID09PSAnZnVuY3Rpb24nLFxuICAgIC8qKlxuICAgICAqIEJhc2U2NC1lbmNvZGUgYW4gYXJyYXkgb2YgYnl0ZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5wdXQgQW4gYXJyYXkgb2YgYnl0ZXMgKG51bWJlcnMgd2l0aFxuICAgICAqICAgICB2YWx1ZSBpbiBbMCwgMjU1XSkgdG8gZW5jb2RlLlxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIEJvb2xlYW4gaW5kaWNhdGluZyB3ZSBzaG91bGQgdXNlIHRoZVxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cbiAgICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gICAgICovXG4gICAgZW5jb2RlQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKCdlbmNvZGVCeXRlQXJyYXkgdGFrZXMgYW4gYXJyYXkgYXMgYSBwYXJhbWV0ZXInKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRfKCk7XG4gICAgICAgIGNvbnN0IGJ5dGVUb0NoYXJNYXAgPSB3ZWJTYWZlXG4gICAgICAgICAgICA/IHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfXG4gICAgICAgICAgICA6IHRoaXMuYnl0ZVRvQ2hhck1hcF87XG4gICAgICAgIGNvbnN0IG91dHB1dCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGlucHV0Lmxlbmd0aDsgaSArPSAzKSB7XG4gICAgICAgICAgICBjb25zdCBieXRlMSA9IGlucHV0W2ldO1xuICAgICAgICAgICAgY29uc3QgaGF2ZUJ5dGUyID0gaSArIDEgPCBpbnB1dC5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGlucHV0W2kgKyAxXSA6IDA7XG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpICsgMiA8IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgICAgIGNvbnN0IGJ5dGUzID0gaGF2ZUJ5dGUzID8gaW5wdXRbaSArIDJdIDogMDtcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gYnl0ZTEgPj4gMjtcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMSAmIDB4MDMpIDw8IDQpIHwgKGJ5dGUyID4+IDQpO1xuICAgICAgICAgICAgbGV0IG91dEJ5dGUzID0gKChieXRlMiAmIDB4MGYpIDw8IDIpIHwgKGJ5dGUzID4+IDYpO1xuICAgICAgICAgICAgbGV0IG91dEJ5dGU0ID0gYnl0ZTMgJiAweDNmO1xuICAgICAgICAgICAgaWYgKCFoYXZlQnl0ZTMpIHtcbiAgICAgICAgICAgICAgICBvdXRCeXRlNCA9IDY0O1xuICAgICAgICAgICAgICAgIGlmICghaGF2ZUJ5dGUyKSB7XG4gICAgICAgICAgICAgICAgICAgIG91dEJ5dGUzID0gNjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0LnB1c2goYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMV0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTJdLCBieXRlVG9DaGFyTWFwW291dEJ5dGUzXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlNF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBCYXNlNjQtZW5jb2RlIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIGlucHV0IEEgc3RyaW5nIHRvIGVuY29kZS5cbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBJZiB0cnVlLCB3ZSBzaG91bGQgdXNlIHRoZVxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cbiAgICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXG4gICAgICovXG4gICAgZW5jb2RlU3RyaW5nKGlucHV0LCB3ZWJTYWZlKSB7XG4gICAgICAgIC8vIFNob3J0Y3V0IGZvciBNb3ppbGxhIGJyb3dzZXJzIHRoYXQgaW1wbGVtZW50XG4gICAgICAgIC8vIGEgbmF0aXZlIGJhc2U2NCBlbmNvZGVyIGluIHRoZSBmb3JtIG9mIFwiYnRvYS9hdG9iXCJcbiAgICAgICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XG4gICAgICAgICAgICByZXR1cm4gYnRvYShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlQnl0ZUFycmF5KHN0cmluZ1RvQnl0ZUFycmF5JDEoaW5wdXQpLCB3ZWJTYWZlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaW5wdXQgdG8gZGVjb2RlLlxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGVcbiAgICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXG4gICAgICogQHJldHVybiBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxuICAgICAqL1xuICAgIGRlY29kZVN0cmluZyhpbnB1dCwgd2ViU2FmZSkge1xuICAgICAgICAvLyBTaG9ydGN1dCBmb3IgTW96aWxsYSBicm93c2VycyB0aGF0IGltcGxlbWVudFxuICAgICAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXG4gICAgICAgIGlmICh0aGlzLkhBU19OQVRJVkVfU1VQUE9SVCAmJiAhd2ViU2FmZSkge1xuICAgICAgICAgICAgcmV0dXJuIGF0b2IoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBieXRlQXJyYXlUb1N0cmluZyh0aGlzLmRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBCYXNlNjQtZGVjb2RlIGEgc3RyaW5nLlxuICAgICAqXG4gICAgICogSW4gYmFzZS02NCBkZWNvZGluZywgZ3JvdXBzIG9mIGZvdXIgY2hhcmFjdGVycyBhcmUgY29udmVydGVkIGludG8gdGhyZWVcbiAgICAgKiBieXRlcy4gIElmIHRoZSBlbmNvZGVyIGRpZCBub3QgYXBwbHkgcGFkZGluZywgdGhlIGlucHV0IGxlbmd0aCBtYXkgbm90XG4gICAgICogYmUgYSBtdWx0aXBsZSBvZiA0LlxuICAgICAqXG4gICAgICogSW4gdGhpcyBjYXNlLCB0aGUgbGFzdCBncm91cCB3aWxsIGhhdmUgZmV3ZXIgdGhhbiA0IGNoYXJhY3RlcnMsIGFuZFxuICAgICAqIHBhZGRpbmcgd2lsbCBiZSBpbmZlcnJlZC4gIElmIHRoZSBncm91cCBoYXMgb25lIG9yIHR3byBjaGFyYWN0ZXJzLCBpdCBkZWNvZGVzXG4gICAgICogdG8gb25lIGJ5dGUuICBJZiB0aGUgZ3JvdXAgaGFzIHRocmVlIGNoYXJhY3RlcnMsIGl0IGRlY29kZXMgdG8gdHdvIGJ5dGVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIGlucHV0IElucHV0IHRvIGRlY29kZS5cbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBUcnVlIGlmIHdlIHNob3VsZCB1c2UgdGhlIHdlYi1zYWZlIGFscGhhYmV0LlxuICAgICAqIEByZXR1cm4gYnl0ZXMgcmVwcmVzZW50aW5nIHRoZSBkZWNvZGVkIHZhbHVlLlxuICAgICAqL1xuICAgIGRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSB7XG4gICAgICAgIHRoaXMuaW5pdF8oKTtcbiAgICAgICAgY29uc3QgY2hhclRvQnl0ZU1hcCA9IHdlYlNhZmVcbiAgICAgICAgICAgID8gdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV9cbiAgICAgICAgICAgIDogdGhpcy5jaGFyVG9CeXRlTWFwXztcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOykge1xuICAgICAgICAgICAgY29uc3QgYnl0ZTEgPSBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKyspXTtcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlMiA9IGkgPCBpbnB1dC5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDA7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpIDwgaW5wdXQubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiA2NDtcbiAgICAgICAgICAgICsraTtcbiAgICAgICAgICAgIGNvbnN0IGhhdmVCeXRlNCA9IGkgPCBpbnB1dC5sZW5ndGg7XG4gICAgICAgICAgICBjb25zdCBieXRlNCA9IGhhdmVCeXRlNCA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgICAgaWYgKGJ5dGUxID09IG51bGwgfHwgYnl0ZTIgPT0gbnVsbCB8fCBieXRlMyA9PSBudWxsIHx8IGJ5dGU0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRGVjb2RlQmFzZTY0U3RyaW5nRXJyb3IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gKGJ5dGUxIDw8IDIpIHwgKGJ5dGUyID4+IDQpO1xuICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTEpO1xuICAgICAgICAgICAgaWYgKGJ5dGUzICE9PSA2NCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xuICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUyKTtcbiAgICAgICAgICAgICAgICBpZiAoYnl0ZTQgIT09IDY0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKG91dEJ5dGUzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIExhenkgc3RhdGljIGluaXRpYWxpemF0aW9uIGZ1bmN0aW9uLiBDYWxsZWQgYmVmb3JlXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBpbml0XygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmJ5dGVUb0NoYXJNYXBfKSB7XG4gICAgICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBfID0ge307XG4gICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XG4gICAgICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlXyA9IHt9O1xuICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV8gPSB7fTtcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuRU5DT0RFRF9WQUxTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTLmNoYXJBdChpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXSA9IHRoaXMuRU5DT0RFRF9WQUxTX1dFQlNBRkUuY2hhckF0KGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfW3RoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldXSA9IGk7XG4gICAgICAgICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXG4gICAgICAgICAgICAgICAgaWYgKGkgPj0gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyVG9CeXRlTWFwX1t0aGlzLkVOQ09ERURfVkFMU19XRUJTQUZFLmNoYXJBdChpKV0gPSBpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuLyoqXG4gKiBBbiBlcnJvciBlbmNvdW50ZXJlZCB3aGlsZSBkZWNvZGluZyBiYXNlNjQgc3RyaW5nLlxuICovXG5jbGFzcyBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ0RlY29kZUJhc2U2NFN0cmluZ0Vycm9yJztcbiAgICB9XG59XG4vKipcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZ1xuICovXG5jb25zdCBiYXNlNjRFbmNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgY29uc3QgdXRmOEJ5dGVzID0gc3RyaW5nVG9CeXRlQXJyYXkkMShzdHIpO1xuICAgIHJldHVybiBiYXNlNjQuZW5jb2RlQnl0ZUFycmF5KHV0ZjhCeXRlcywgdHJ1ZSk7XG59O1xuLyoqXG4gKiBVUkwtc2FmZSBiYXNlNjQgZW5jb2RpbmcgKHdpdGhvdXQgXCIuXCIgcGFkZGluZyBpbiB0aGUgZW5kKS5cbiAqIGUuZy4gVXNlZCBpbiBKU09OIFdlYiBUb2tlbiAoSldUKSBwYXJ0cy5cbiAqL1xuY29uc3QgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgLy8gVXNlIGJhc2U2NHVybCBlbmNvZGluZyBhbmQgcmVtb3ZlIHBhZGRpbmcgaW4gdGhlIGVuZCAoZG90IGNoYXJhY3RlcnMpLlxuICAgIHJldHVybiBiYXNlNjRFbmNvZGUoc3RyKS5yZXBsYWNlKC9cXC4vZywgJycpO1xufTtcbi8qKlxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXG4gKlxuICogTk9URTogRE8gTk9UIHVzZSB0aGUgZ2xvYmFsIGF0b2IoKSBmdW5jdGlvbiAtIGl0IGRvZXMgTk9UIHN1cHBvcnQgdGhlXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cbiAqXG4gKiBAcGFyYW0gc3RyIFRvIGJlIGRlY29kZWRcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXG4gKi9cbmNvbnN0IGJhc2U2NERlY29kZSA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gYmFzZTY0LmRlY29kZVN0cmluZyhzdHIsIHRydWUpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdiYXNlNjREZWNvZGUgZmFpbGVkOiAnLCBlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBEbyBhIGRlZXAtY29weSBvZiBiYXNpYyBKYXZhU2NyaXB0IE9iamVjdHMgb3IgQXJyYXlzLlxuICovXG5mdW5jdGlvbiBkZWVwQ29weSh2YWx1ZSkge1xuICAgIHJldHVybiBkZWVwRXh0ZW5kKHVuZGVmaW5lZCwgdmFsdWUpO1xufVxuLyoqXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0IChyZWN1cnNpdmVseSBhbGxvd3MgZXh0ZW5zaW9uXG4gKiBvZiBPYmplY3RzIGFuZCBBcnJheXMpLiAgU2NhbGFyIHZhbHVlcyBpbiB0aGUgdGFyZ2V0IGFyZSBvdmVyLXdyaXR0ZW4uXG4gKiBJZiB0YXJnZXQgaXMgdW5kZWZpbmVkLCBhbiBvYmplY3Qgb2YgdGhlIGFwcHJvcHJpYXRlIHR5cGUgd2lsbCBiZSBjcmVhdGVkXG4gKiAoYW5kIHJldHVybmVkKS5cbiAqXG4gKiBXZSByZWN1cnNpdmVseSBjb3B5IGFsbCBjaGlsZCBwcm9wZXJ0aWVzIG9mIHBsYWluIE9iamVjdHMgaW4gdGhlIHNvdXJjZS0gc29cbiAqIHRoYXQgbmFtZXNwYWNlLSBsaWtlIGRpY3Rpb25hcmllcyBhcmUgbWVyZ2VkLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgdGFyZ2V0IGNhbiBiZSBhIGZ1bmN0aW9uLCBpbiB3aGljaCBjYXNlIHRoZSBwcm9wZXJ0aWVzIGluXG4gKiB0aGUgc291cmNlIE9iamVjdCBhcmUgY29waWVkIG9udG8gaXQgYXMgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhlIEZ1bmN0aW9uLlxuICpcbiAqIE5vdGU6IHdlIGRvbid0IG1lcmdlIF9fcHJvdG9fXyB0byBwcmV2ZW50IHByb3RvdHlwZSBwb2xsdXRpb25cbiAqL1xuZnVuY3Rpb24gZGVlcEV4dGVuZCh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGlmICghKHNvdXJjZSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9XG4gICAgc3dpdGNoIChzb3VyY2UuY29uc3RydWN0b3IpIHtcbiAgICAgICAgY2FzZSBEYXRlOlxuICAgICAgICAgICAgLy8gVHJlYXQgRGF0ZXMgbGlrZSBzY2FsYXJzOyBpZiB0aGUgdGFyZ2V0IGRhdGUgb2JqZWN0IGhhZCBhbnkgY2hpbGRcbiAgICAgICAgICAgIC8vIHByb3BlcnRpZXMgLSB0aGV5IHdpbGwgYmUgbG9zdCFcbiAgICAgICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHNvdXJjZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlVmFsdWUuZ2V0VGltZSgpKTtcbiAgICAgICAgY2FzZSBPYmplY3Q6XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIEFycmF5OlxuICAgICAgICAgICAgLy8gQWx3YXlzIGNvcHkgdGhlIGFycmF5IHNvdXJjZSBhbmQgb3ZlcndyaXRlIHRoZSB0YXJnZXQuXG4gICAgICAgICAgICB0YXJnZXQgPSBbXTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgLy8gTm90IGEgcGxhaW4gT2JqZWN0IC0gdHJlYXQgaXQgYXMgYSBzY2FsYXIuXG4gICAgICAgICAgICByZXR1cm4gc291cmNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlKSB7XG4gICAgICAgIC8vIHVzZSBpc1ZhbGlkS2V5IHRvIGd1YXJkIGFnYWluc3QgcHJvdG90eXBlIHBvbGx1dGlvbi4gU2VlIGh0dHBzOi8vc255ay5pby92dWxuL1NOWUstSlMtTE9EQVNILTQ1MDIwMlxuICAgICAgICBpZiAoIXNvdXJjZS5oYXNPd25Qcm9wZXJ0eShwcm9wKSB8fCAhaXNWYWxpZEtleShwcm9wKSkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gZGVlcEV4dGVuZCh0YXJnZXRbcHJvcF0sIHNvdXJjZVtwcm9wXSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xuICAgIHJldHVybiBrZXkgIT09ICdfX3Byb3RvX18nO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBQb2x5ZmlsbCBmb3IgYGdsb2JhbFRoaXNgIG9iamVjdC5cbiAqIEByZXR1cm5zIHRoZSBgZ2xvYmFsVGhpc2Agb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZW52aXJvbm1lbnQuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGdldEdsb2JhbCgpIHtcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWw7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGxvY2F0ZSBnbG9iYWwgb2JqZWN0LicpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMiBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuY29uc3QgZ2V0RGVmYXVsdHNGcm9tR2xvYmFsID0gKCkgPT4gZ2V0R2xvYmFsKCkuX19GSVJFQkFTRV9ERUZBVUxUU19fO1xuLyoqXG4gKiBBdHRlbXB0IHRvIHJlYWQgZGVmYXVsdHMgZnJvbSBhIEpTT04gc3RyaW5nIHByb3ZpZGVkIHRvXG4gKiBwcm9jZXNzKC4pZW52KC4pX19GSVJFQkFTRV9ERUZBVUxUU19fIG9yIGEgSlNPTiBmaWxlIHdob3NlIHBhdGggaXMgaW5cbiAqIHByb2Nlc3MoLillbnYoLilfX0ZJUkVCQVNFX0RFRkFVTFRTX1BBVEhfX1xuICogVGhlIGRvdHMgYXJlIGluIHBhcmVucyBiZWNhdXNlIGNlcnRhaW4gY29tcGlsZXJzIChWaXRlPykgY2Fubm90XG4gKiBoYW5kbGUgc2VlaW5nIHRoYXQgdmFyaWFibGUgaW4gY29tbWVudHMuXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZpcmViYXNlL2ZpcmViYXNlLWpzLXNkay9pc3N1ZXMvNjgzOFxuICovXG5jb25zdCBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSA9ICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBwcm9jZXNzLmVudiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkZWZhdWx0c0pzb25TdHJpbmcgPSBwcm9jZXNzLmVudi5fX0ZJUkVCQVNFX0RFRkFVTFRTX187XG4gICAgaWYgKGRlZmF1bHRzSnNvblN0cmluZykge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkZWZhdWx0c0pzb25TdHJpbmcpO1xuICAgIH1cbn07XG5jb25zdCBnZXREZWZhdWx0c0Zyb21Db29raWUgPSAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgbWF0Y2g7XG4gICAgdHJ5IHtcbiAgICAgICAgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goL19fRklSRUJBU0VfREVGQVVMVFNfXz0oW147XSspLyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8vIFNvbWUgZW52aXJvbm1lbnRzIHN1Y2ggYXMgQW5ndWxhciBVbml2ZXJzYWwgU1NSIGhhdmUgYVxuICAgICAgICAvLyBgZG9jdW1lbnRgIG9iamVjdCBidXQgZXJyb3Igb24gYWNjZXNzaW5nIGBkb2N1bWVudC5jb29raWVgLlxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRlY29kZWQgPSBtYXRjaCAmJiBiYXNlNjREZWNvZGUobWF0Y2hbMV0pO1xuICAgIHJldHVybiBkZWNvZGVkICYmIEpTT04ucGFyc2UoZGVjb2RlZCk7XG59O1xuLyoqXG4gKiBHZXQgdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3QuIEl0IGNoZWNrcyBpbiBvcmRlcjpcbiAqICgxKSBpZiBzdWNoIGFuIG9iamVjdCBleGlzdHMgYXMgYSBwcm9wZXJ0eSBvZiBgZ2xvYmFsVGhpc2BcbiAqICgyKSBpZiBzdWNoIGFuIG9iamVjdCB3YXMgcHJvdmlkZWQgb24gYSBzaGVsbCBlbnZpcm9ubWVudCB2YXJpYWJsZVxuICogKDMpIGlmIHN1Y2ggYW4gb2JqZWN0IGV4aXN0cyBpbiBhIGNvb2tpZVxuICogQHB1YmxpY1xuICovXG5jb25zdCBnZXREZWZhdWx0cyA9ICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKGdldERlZmF1bHRzRnJvbVBvc3RpbnN0YWxsKCkgfHxcbiAgICAgICAgICAgIGdldERlZmF1bHRzRnJvbUdsb2JhbCgpIHx8XG4gICAgICAgICAgICBnZXREZWZhdWx0c0Zyb21FbnZWYXJpYWJsZSgpIHx8XG4gICAgICAgICAgICBnZXREZWZhdWx0c0Zyb21Db29raWUoKSk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYXRjaC1hbGwgZm9yIGJlaW5nIHVuYWJsZSB0byBnZXQgX19GSVJFQkFTRV9ERUZBVUxUU19fIGR1ZVxuICAgICAgICAgKiB0byBhbnkgZW52aXJvbm1lbnQgY2FzZSB3ZSBoYXZlIG5vdCBhY2NvdW50ZWQgZm9yLiBMb2cgdG9cbiAgICAgICAgICogaW5mbyBpbnN0ZWFkIG9mIHN3YWxsb3dpbmcgc28gd2UgY2FuIGZpbmQgdGhlc2UgdW5rbm93biBjYXNlc1xuICAgICAgICAgKiBhbmQgYWRkIHBhdGhzIGZvciB0aGVtIGlmIG5lZWRlZC5cbiAgICAgICAgICovXG4gICAgICAgIGNvbnNvbGUuaW5mbyhgVW5hYmxlIHRvIGdldCBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gZHVlIHRvOiAke2V9YCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59O1xuLyoqXG4gKiBSZXR1cm5zIGVtdWxhdG9yIGhvc3Qgc3RvcmVkIGluIHRoZSBfX0ZJUkVCQVNFX0RFRkFVTFRTX18gb2JqZWN0XG4gKiBmb3IgdGhlIGdpdmVuIHByb2R1Y3QuXG4gKiBAcmV0dXJucyBhIFVSTCBob3N0IGZvcm1hdHRlZCBsaWtlIGAxMjcuMC4wLjE6OTk5OWAgb3IgYFs6OjFdOjQwMDBgIGlmIGF2YWlsYWJsZVxuICogQHB1YmxpY1xuICovXG5jb25zdCBnZXREZWZhdWx0RW11bGF0b3JIb3N0ID0gKHByb2R1Y3ROYW1lKSA9PiB7IHZhciBfYSwgX2I7IHJldHVybiAoX2IgPSAoX2EgPSBnZXREZWZhdWx0cygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZW11bGF0b3JIb3N0cykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iW3Byb2R1Y3ROYW1lXTsgfTtcbi8qKlxuICogUmV0dXJucyBlbXVsYXRvciBob3N0bmFtZSBhbmQgcG9ydCBzdG9yZWQgaW4gdGhlIF9fRklSRUJBU0VfREVGQVVMVFNfXyBvYmplY3RcbiAqIGZvciB0aGUgZ2l2ZW4gcHJvZHVjdC5cbiAqIEByZXR1cm5zIGEgcGFpciBvZiBob3N0bmFtZSBhbmQgcG9ydCBsaWtlIGBbXCI6OjFcIiwgNDAwMF1gIGlmIGF2YWlsYWJsZVxuICogQHB1YmxpY1xuICovXG5jb25zdCBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQgPSAocHJvZHVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBob3N0ID0gZ2V0RGVmYXVsdEVtdWxhdG9ySG9zdChwcm9kdWN0TmFtZSk7XG4gICAgaWYgKCFob3N0KSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHNlcGFyYXRvckluZGV4ID0gaG9zdC5sYXN0SW5kZXhPZignOicpOyAvLyBGaW5kaW5nIHRoZSBsYXN0IHNpbmNlIElQdjYgYWRkciBhbHNvIGhhcyBjb2xvbnMuXG4gICAgaWYgKHNlcGFyYXRvckluZGV4IDw9IDAgfHwgc2VwYXJhdG9ySW5kZXggKyAxID09PSBob3N0Lmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaG9zdCAke2hvc3R9IHdpdGggbm8gc2VwYXJhdGUgaG9zdG5hbWUgYW5kIHBvcnQhYCk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLWdsb2JhbHNcbiAgICBjb25zdCBwb3J0ID0gcGFyc2VJbnQoaG9zdC5zdWJzdHJpbmcoc2VwYXJhdG9ySW5kZXggKyAxKSwgMTApO1xuICAgIGlmIChob3N0WzBdID09PSAnWycpIHtcbiAgICAgICAgLy8gQnJhY2tldC1xdW90ZWQgYFtpcHY2YWRkcl06cG9ydGAgPT4gcmV0dXJuIFwiaXB2NmFkZHJcIiAod2l0aG91dCBicmFja2V0cykuXG4gICAgICAgIHJldHVybiBbaG9zdC5zdWJzdHJpbmcoMSwgc2VwYXJhdG9ySW5kZXggLSAxKSwgcG9ydF07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gW2hvc3Quc3Vic3RyaW5nKDAsIHNlcGFyYXRvckluZGV4KSwgcG9ydF07XG4gICAgfVxufTtcbi8qKlxuICogUmV0dXJucyBGaXJlYmFzZSBhcHAgY29uZmlnIHN0b3JlZCBpbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuY29uc3QgZ2V0RGVmYXVsdEFwcENvbmZpZyA9ICgpID0+IHsgdmFyIF9hOyByZXR1cm4gKF9hID0gZ2V0RGVmYXVsdHMoKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbmZpZzsgfTtcbi8qKlxuICogUmV0dXJucyBhbiBleHBlcmltZW50YWwgc2V0dGluZyBvbiB0aGUgX19GSVJFQkFTRV9ERUZBVUxUU19fIG9iamVjdCAocHJvcGVydGllc1xuICogcHJlZml4ZWQgYnkgXCJfXCIpXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IGdldEV4cGVyaW1lbnRhbFNldHRpbmcgPSAobmFtZSkgPT4geyB2YXIgX2E7IHJldHVybiAoX2EgPSBnZXREZWZhdWx0cygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbYF8ke25hbWV9YF07IH07XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jbGFzcyBEZWZlcnJlZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVqZWN0ID0gKCkgPT4geyB9O1xuICAgICAgICB0aGlzLnJlc29sdmUgPSAoKSA9PiB7IH07XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzaWZpZWQgYW5kIGNhbm5vdCBiZWNhdXNlIG91ciBjYWxsYmFjayBBUElzIGhhdmUgc3VidGxlIGV4cGVjdGF0aW9ucyBhcm91bmRcbiAgICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xuICAgICAqIGFuZCByZXR1cm5zIGEgbm9kZS1zdHlsZSBjYWxsYmFjayB3aGljaCB3aWxsIHJlc29sdmUgb3IgcmVqZWN0IHRoZSBEZWZlcnJlZCdzIHByb21pc2UuXG4gICAgICovXG4gICAgd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiAoZXJyb3IsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXG4gICAgICAgICAgICAgICAgLy8gcHJvbWlzZXNcbiAgICAgICAgICAgICAgICB0aGlzLnByb21pc2UuY2F0Y2goKCkgPT4geyB9KTtcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcbiAgICAgICAgICAgICAgICAvLyBhc3NlcnQgdGhhdCB0aGUgcGFyYW1ldGVyIGxlbmd0aCBpcyAxXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI1IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGhvc3QgaXMgYSBjbG91ZCB3b3Jrc3RhdGlvbiBvciBub3QuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIGlzQ2xvdWRXb3Jrc3RhdGlvbihob3N0KSB7XG4gICAgcmV0dXJuIGhvc3QuZW5kc1dpdGgoJy5jbG91ZHdvcmtzdGF0aW9ucy5kZXYnKTtcbn1cbi8qKlxuICogTWFrZXMgYSBmZXRjaCByZXF1ZXN0IHRvIHRoZSBnaXZlbiBzZXJ2ZXIuXG4gKiBNb3N0bHkgdXNlZCBmb3IgZm9yd2FyZGluZyBjb29raWVzIGluIEZpcmViYXNlIFN0dWRpby5cbiAqIEBwdWJsaWNcbiAqL1xuYXN5bmMgZnVuY3Rpb24gcGluZ1NlcnZlcihlbmRwb2ludCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiAnaW5jbHVkZSdcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0Lm9rO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlTW9ja1VzZXJUb2tlbih0b2tlbiwgcHJvamVjdElkKSB7XG4gICAgaWYgKHRva2VuLnVpZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcInVpZFwiIGZpZWxkIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgbW9ja1VzZXJUb2tlbi4gUGxlYXNlIHVzZSBcInN1YlwiIGluc3RlYWQgZm9yIEZpcmViYXNlIEF1dGggVXNlciBJRC4nKTtcbiAgICB9XG4gICAgLy8gVW5zZWN1cmVkIEpXVHMgdXNlIFwibm9uZVwiIGFzIHRoZSBhbGdvcml0aG0uXG4gICAgY29uc3QgaGVhZGVyID0ge1xuICAgICAgICBhbGc6ICdub25lJyxcbiAgICAgICAgdHlwZTogJ0pXVCdcbiAgICB9O1xuICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0SWQgfHwgJ2RlbW8tcHJvamVjdCc7XG4gICAgY29uc3QgaWF0ID0gdG9rZW4uaWF0IHx8IDA7XG4gICAgY29uc3Qgc3ViID0gdG9rZW4uc3ViIHx8IHRva2VuLnVzZXJfaWQ7XG4gICAgaWYgKCFzdWIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibW9ja1VzZXJUb2tlbiBtdXN0IGNvbnRhaW4gJ3N1Yicgb3IgJ3VzZXJfaWQnIGZpZWxkIVwiKTtcbiAgICB9XG4gICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5hc3NpZ24oeyBcbiAgICAgICAgLy8gU2V0IGFsbCByZXF1aXJlZCBmaWVsZHMgdG8gZGVjZW50IGRlZmF1bHRzXG4gICAgICAgIGlzczogYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS8ke3Byb2plY3R9YCwgYXVkOiBwcm9qZWN0LCBpYXQsIGV4cDogaWF0ICsgMzYwMCwgYXV0aF90aW1lOiBpYXQsIHN1YiwgdXNlcl9pZDogc3ViLCBmaXJlYmFzZToge1xuICAgICAgICAgICAgc2lnbl9pbl9wcm92aWRlcjogJ2N1c3RvbScsXG4gICAgICAgICAgICBpZGVudGl0aWVzOiB7fVxuICAgICAgICB9IH0sIHRva2VuKTtcbiAgICAvLyBVbnNlY3VyZWQgSldUcyB1c2UgdGhlIGVtcHR5IHN0cmluZyBhcyBhIHNpZ25hdHVyZS5cbiAgICBjb25zdCBzaWduYXR1cmUgPSAnJztcbiAgICByZXR1cm4gW1xuICAgICAgICBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyhKU09OLnN0cmluZ2lmeShoZWFkZXIpKSxcbiAgICAgICAgYmFzZTY0dXJsRW5jb2RlV2l0aG91dFBhZGRpbmcoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpLFxuICAgICAgICBzaWduYXR1cmVcbiAgICBdLmpvaW4oJy4nKTtcbn1cbmNvbnN0IGVtdWxhdG9yU3RhdHVzID0ge307XG4vLyBDaGVja3Mgd2hldGhlciBhbnkgcHJvZHVjdHMgYXJlIHJ1bm5pbmcgb24gYW4gZW11bGF0b3JcbmZ1bmN0aW9uIGdldEVtdWxhdG9yU3VtbWFyeSgpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0ge1xuICAgICAgICBwcm9kOiBbXSxcbiAgICAgICAgZW11bGF0b3I6IFtdXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhlbXVsYXRvclN0YXR1cykpIHtcbiAgICAgICAgaWYgKGVtdWxhdG9yU3RhdHVzW2tleV0pIHtcbiAgICAgICAgICAgIHN1bW1hcnkuZW11bGF0b3IucHVzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc3VtbWFyeS5wcm9kLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtbWFyeTtcbn1cbmZ1bmN0aW9uIGdldE9yQ3JlYXRlRWwoaWQpIHtcbiAgICBsZXQgcGFyZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgIGxldCBjcmVhdGVkID0gZmFsc2U7XG4gICAgaWYgKCFwYXJlbnREaXYpIHtcbiAgICAgICAgcGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHBhcmVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgICAgICBjcmVhdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3JlYXRlZCwgZWxlbWVudDogcGFyZW50RGl2IH07XG59XG5sZXQgcHJldmlvdXNseURpc21pc3NlZCA9IGZhbHNlO1xuLyoqXG4gKiBVcGRhdGVzIEVtdWxhdG9yIEJhbm5lci4gUHJpbWFyaWx5IHVzZWQgZm9yIEZpcmViYXNlIFN0dWRpb1xuICogQHBhcmFtIG5hbWVcbiAqIEBwYXJhbSBpc1J1bm5pbmdFbXVsYXRvclxuICogQHB1YmxpY1xuICovXG5mdW5jdGlvbiB1cGRhdGVFbXVsYXRvckJhbm5lcihuYW1lLCBpc1J1bm5pbmdFbXVsYXRvcikge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgICFpc0Nsb3VkV29ya3N0YXRpb24od2luZG93LmxvY2F0aW9uLmhvc3QpIHx8XG4gICAgICAgIGVtdWxhdG9yU3RhdHVzW25hbWVdID09PSBpc1J1bm5pbmdFbXVsYXRvciB8fFxuICAgICAgICBlbXVsYXRvclN0YXR1c1tuYW1lXSB8fCAvLyBJZiBhbHJlYWR5IHNldCB0byB1c2UgZW11bGF0b3IsIGNhbid0IGdvIGJhY2sgdG8gcHJvZC5cbiAgICAgICAgcHJldmlvdXNseURpc21pc3NlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGVtdWxhdG9yU3RhdHVzW25hbWVdID0gaXNSdW5uaW5nRW11bGF0b3I7XG4gICAgZnVuY3Rpb24gcHJlZml4ZWRJZChpZCkge1xuICAgICAgICByZXR1cm4gYF9fZmlyZWJhc2VfX2Jhbm5lcl9fJHtpZH1gO1xuICAgIH1cbiAgICBjb25zdCBiYW5uZXJJZCA9ICdfX2ZpcmViYXNlX19iYW5uZXInO1xuICAgIGNvbnN0IHN1bW1hcnkgPSBnZXRFbXVsYXRvclN1bW1hcnkoKTtcbiAgICBjb25zdCBzaG93RXJyb3IgPSBzdW1tYXJ5LnByb2QubGVuZ3RoID4gMDtcbiAgICBmdW5jdGlvbiB0ZWFyRG93bigpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJhbm5lcklkKTtcbiAgICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0dXBCYW5uZXJTdHlsZXMoYmFubmVyRWwpIHtcbiAgICAgICAgYmFubmVyRWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgYmFubmVyRWwuc3R5bGUuYmFja2dyb3VuZCA9ICcjN2ZhYWYwJztcbiAgICAgICAgYmFubmVyRWwuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBiYW5uZXJFbC5zdHlsZS5ib3R0b20gPSAnNXB4JztcbiAgICAgICAgYmFubmVyRWwuc3R5bGUubGVmdCA9ICc1cHgnO1xuICAgICAgICBiYW5uZXJFbC5zdHlsZS5wYWRkaW5nID0gJy41ZW0nO1xuICAgICAgICBiYW5uZXJFbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JztcbiAgICAgICAgYmFubmVyRWwuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cEljb25TdHlsZXMocHJlcGVuZEljb24sIGljb25JZCkge1xuICAgICAgICBwcmVwZW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzI0Jyk7XG4gICAgICAgIHByZXBlbmRJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCBpY29uSWQpO1xuICAgICAgICBwcmVwZW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsICcyNCcpO1xuICAgICAgICBwcmVwZW5kSWNvbi5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCAnMCAwIDI0IDI0Jyk7XG4gICAgICAgIHByZXBlbmRJY29uLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XG4gICAgICAgIHByZXBlbmRJY29uLnN0eWxlLm1hcmdpbkxlZnQgPSAnLTZweCc7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwQ2xvc2VCdG4oKSB7XG4gICAgICAgIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjbG9zZUJ0bi5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG4gICAgICAgIGNsb3NlQnRuLnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XG4gICAgICAgIGNsb3NlQnRuLnN0eWxlLmZvbnRTaXplID0gJzI0cHgnO1xuICAgICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSAnICZ0aW1lczsnO1xuICAgICAgICBjbG9zZUJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgcHJldmlvdXNseURpc21pc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB0ZWFyRG93bigpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY2xvc2VCdG47XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldHVwTGlua1N0eWxlcyhsZWFybk1vcmVMaW5rLCBsZWFybk1vcmVJZCkge1xuICAgICAgICBsZWFybk1vcmVMaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBsZWFybk1vcmVJZCk7XG4gICAgICAgIGxlYXJuTW9yZUxpbmsuaW5uZXJUZXh0ID0gJ0xlYXJuIG1vcmUnO1xuICAgICAgICBsZWFybk1vcmVMaW5rLmhyZWYgPVxuICAgICAgICAgICAgJ2h0dHBzOi8vZmlyZWJhc2UuZ29vZ2xlLmNvbS9kb2NzL3N0dWRpby9wcmV2aWV3LWFwcHMjcHJldmlldy1iYWNrZW5kJztcbiAgICAgICAgbGVhcm5Nb3JlTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfX2JsYW5rJyk7XG4gICAgICAgIGxlYXJuTW9yZUxpbmsuc3R5bGUucGFkZGluZ0xlZnQgPSAnNXB4JztcbiAgICAgICAgbGVhcm5Nb3JlTGluay5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICd1bmRlcmxpbmUnO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXR1cERvbSgpIHtcbiAgICAgICAgY29uc3QgYmFubmVyID0gZ2V0T3JDcmVhdGVFbChiYW5uZXJJZCk7XG4gICAgICAgIGNvbnN0IGZpcmViYXNlVGV4dElkID0gcHJlZml4ZWRJZCgndGV4dCcpO1xuICAgICAgICBjb25zdCBmaXJlYmFzZVRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmaXJlYmFzZVRleHRJZCkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBjb25zdCBsZWFybk1vcmVJZCA9IHByZWZpeGVkSWQoJ2xlYXJubW9yZScpO1xuICAgICAgICBjb25zdCBsZWFybk1vcmVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGVhcm5Nb3JlSWQpIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIGNvbnN0IHByZXBlbmRJY29uSWQgPSBwcmVmaXhlZElkKCdwcmVwcmVuZEljb24nKTtcbiAgICAgICAgY29uc3QgcHJlcGVuZEljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwcmVwZW5kSWNvbklkKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcbiAgICAgICAgaWYgKGJhbm5lci5jcmVhdGVkKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgc3R5bGVzXG4gICAgICAgICAgICBjb25zdCBiYW5uZXJFbCA9IGJhbm5lci5lbGVtZW50O1xuICAgICAgICAgICAgc2V0dXBCYW5uZXJTdHlsZXMoYmFubmVyRWwpO1xuICAgICAgICAgICAgc2V0dXBMaW5rU3R5bGVzKGxlYXJuTW9yZUxpbmssIGxlYXJuTW9yZUlkKTtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnRuID0gc2V0dXBDbG9zZUJ0bigpO1xuICAgICAgICAgICAgc2V0dXBJY29uU3R5bGVzKHByZXBlbmRJY29uLCBwcmVwZW5kSWNvbklkKTtcbiAgICAgICAgICAgIGJhbm5lckVsLmFwcGVuZChwcmVwZW5kSWNvbiwgZmlyZWJhc2VUZXh0LCBsZWFybk1vcmVMaW5rLCBjbG9zZUJ0bik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGJhbm5lckVsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvd0Vycm9yKSB7XG4gICAgICAgICAgICBmaXJlYmFzZVRleHQuaW5uZXJUZXh0ID0gYFByZXZpZXcgYmFja2VuZCBkaXNjb25uZWN0ZWQuYDtcbiAgICAgICAgICAgIHByZXBlbmRJY29uLmlubmVySFRNTCA9IGA8ZyBjbGlwLXBhdGg9XCJ1cmwoI2NsaXAwXzYwMTNfMzM4NTgpXCI+XG48cGF0aCBkPVwiTTQuOCAxNy42TDEyIDUuNkwxOS4yIDE3LjZINC44Wk02LjkxNjY3IDE2LjRIMTcuMDgzM0wxMiA3LjkzMzMzTDYuOTE2NjcgMTYuNFpNMTIgMTUuNkMxMi4xNjY3IDE1LjYgMTIuMzA1NiAxNS41NDQ0IDEyLjQxNjcgMTUuNDMzM0MxMi41Mzg5IDE1LjMxMTEgMTIuNiAxNS4xNjY3IDEyLjYgMTVDMTIuNiAxNC44MzMzIDEyLjUzODkgMTQuNjk0NCAxMi40MTY3IDE0LjU4MzNDMTIuMzA1NiAxNC40NjExIDEyLjE2NjcgMTQuNCAxMiAxNC40QzExLjgzMzMgMTQuNCAxMS42ODg5IDE0LjQ2MTEgMTEuNTY2NyAxNC41ODMzQzExLjQ1NTYgMTQuNjk0NCAxMS40IDE0LjgzMzMgMTEuNCAxNUMxMS40IDE1LjE2NjcgMTEuNDU1NiAxNS4zMTExIDExLjU2NjcgMTUuNDMzM0MxMS42ODg5IDE1LjU0NDQgMTEuODMzMyAxNS42IDEyIDE1LjZaTTExLjQgMTMuNkgxMi42VjEwLjRIMTEuNFYxMy42WlwiIGZpbGw9XCIjMjEyMTIxXCIvPlxuPC9nPlxuPGRlZnM+XG48Y2xpcFBhdGggaWQ9XCJjbGlwMF82MDEzXzMzODU4XCI+XG48cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwid2hpdGVcIi8+XG48L2NsaXBQYXRoPlxuPC9kZWZzPmA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcmVwZW5kSWNvbi5pbm5lckhUTUwgPSBgPGcgY2xpcC1wYXRoPVwidXJsKCNjbGlwMF82MDgzXzM0ODA0KVwiPlxuPHBhdGggZD1cIk0xMS40IDE1LjJIMTIuNlYxMS4ySDExLjRWMTUuMlpNMTIgMTBDMTIuMTY2NyAxMCAxMi4zMDU2IDkuOTQ0NDQgMTIuNDE2NyA5LjgzMzMzQzEyLjUzODkgOS43MTExMSAxMi42IDkuNTY2NjcgMTIuNiA5LjRDMTIuNiA5LjIzMzMzIDEyLjUzODkgOS4wOTQ0NCAxMi40MTY3IDguOTgzMzNDMTIuMzA1NiA4Ljg2MTExIDEyLjE2NjcgOC44IDEyIDguOEMxMS44MzMzIDguOCAxMS42ODg5IDguODYxMTEgMTEuNTY2NyA4Ljk4MzMzQzExLjQ1NTYgOS4wOTQ0NCAxMS40IDkuMjMzMzMgMTEuNCA5LjRDMTEuNCA5LjU2NjY3IDExLjQ1NTYgOS43MTExMSAxMS41NjY3IDkuODMzMzNDMTEuNjg4OSA5Ljk0NDQ0IDExLjgzMzMgMTAgMTIgMTBaTTEyIDE4LjRDMTEuMTIyMiAxOC40IDEwLjI5NDQgMTguMjMzMyA5LjUxNjY3IDE3LjlDOC43Mzg4OSAxNy41NjY3IDguMDU1NTYgMTcuMTExMSA3LjQ2NjY3IDE2LjUzMzNDNi44ODg4OSAxNS45NDQ0IDYuNDMzMzMgMTUuMjYxMSA2LjEgMTQuNDgzM0M1Ljc2NjY3IDEzLjcwNTYgNS42IDEyLjg3NzggNS42IDEyQzUuNiAxMS4xMTExIDUuNzY2NjcgMTAuMjgzMyA2LjEgOS41MTY2N0M2LjQzMzMzIDguNzM4ODkgNi44ODg4OSA4LjA2MTExIDcuNDY2NjcgNy40ODMzM0M4LjA1NTU2IDYuODk0NDQgOC43Mzg4OSA2LjQzMzMzIDkuNTE2NjcgNi4xQzEwLjI5NDQgNS43NjY2NyAxMS4xMjIyIDUuNiAxMiA1LjZDMTIuODg4OSA1LjYgMTMuNzE2NyA1Ljc2NjY3IDE0LjQ4MzMgNi4xQzE1LjI2MTEgNi40MzMzMyAxNS45Mzg5IDYuODk0NDQgMTYuNTE2NyA3LjQ4MzMzQzE3LjEwNTYgOC4wNjExMSAxNy41NjY3IDguNzM4ODkgMTcuOSA5LjUxNjY3QzE4LjIzMzMgMTAuMjgzMyAxOC40IDExLjExMTEgMTguNCAxMkMxOC40IDEyLjg3NzggMTguMjMzMyAxMy43MDU2IDE3LjkgMTQuNDgzM0MxNy41NjY3IDE1LjI2MTEgMTcuMTA1NiAxNS45NDQ0IDE2LjUxNjcgMTYuNTMzM0MxNS45Mzg5IDE3LjExMTEgMTUuMjYxMSAxNy41NjY3IDE0LjQ4MzMgMTcuOUMxMy43MTY3IDE4LjIzMzMgMTIuODg4OSAxOC40IDEyIDE4LjRaTTEyIDE3LjJDMTMuNDQ0NCAxNy4yIDE0LjY3MjIgMTYuNjk0NCAxNS42ODMzIDE1LjY4MzNDMTYuNjk0NCAxNC42NzIyIDE3LjIgMTMuNDQ0NCAxNy4yIDEyQzE3LjIgMTAuNTU1NiAxNi42OTQ0IDkuMzI3NzggMTUuNjgzMyA4LjMxNjY3QzE0LjY3MjIgNy4zMDU1NSAxMy40NDQ0IDYuOCAxMiA2LjhDMTAuNTU1NiA2LjggOS4zMjc3OCA3LjMwNTU1IDguMzE2NjcgOC4zMTY2N0M3LjMwNTU2IDkuMzI3NzggNi44IDEwLjU1NTYgNi44IDEyQzYuOCAxMy40NDQ0IDcuMzA1NTYgMTQuNjcyMiA4LjMxNjY3IDE1LjY4MzNDOS4zMjc3OCAxNi42OTQ0IDEwLjU1NTYgMTcuMiAxMiAxNy4yWlwiIGZpbGw9XCIjMjEyMTIxXCIvPlxuPC9nPlxuPGRlZnM+XG48Y2xpcFBhdGggaWQ9XCJjbGlwMF82MDgzXzM0ODA0XCI+XG48cmVjdCB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiBmaWxsPVwid2hpdGVcIi8+XG48L2NsaXBQYXRoPlxuPC9kZWZzPmA7XG4gICAgICAgICAgICBmaXJlYmFzZVRleHQuaW5uZXJUZXh0ID0gJ1ByZXZpZXcgYmFja2VuZCBydW5uaW5nIGluIHRoaXMgd29ya3NwYWNlLic7XG4gICAgICAgIH1cbiAgICAgICAgZmlyZWJhc2VUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCBmaXJlYmFzZVRleHRJZCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSAnbG9hZGluZycpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBzZXR1cERvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzZXR1cERvbSgpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUmV0dXJucyBuYXZpZ2F0b3IudXNlckFnZW50IHN0cmluZyBvciAnJyBpZiBpdCdzIG5vdCBkZWZpbmVkLlxuICogQHJldHVybiB1c2VyIGFnZW50IHN0cmluZ1xuICovXG5mdW5jdGlvbiBnZXRVQSgpIHtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvclsndXNlckFnZW50J10gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3JbJ3VzZXJBZ2VudCddO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbn1cbi8qKlxuICogRGV0ZWN0IENvcmRvdmEgLyBQaG9uZUdhcCAvIElvbmljIGZyYW1ld29ya3Mgb24gYSBtb2JpbGUgZGV2aWNlLlxuICpcbiAqIERlbGliZXJhdGVseSBkb2VzIG5vdCByZWx5IG9uIGNoZWNraW5nIGBmaWxlOi8vYCBVUkxzIChhcyB0aGlzIGZhaWxzIFBob25lR2FwXG4gKiBpbiB0aGUgUmlwcGxlIGVtdWxhdG9yKSBub3IgQ29yZG92YSBgb25EZXZpY2VSZWFkeWAsIHdoaWNoIHdvdWxkIG5vcm1hbGx5XG4gKiB3YWl0IGZvciBhIGNhbGxiYWNrLlxuICovXG5mdW5jdGlvbiBpc01vYmlsZUNvcmRvdmEoKSB7XG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAvLyBAdHMtaWdub3JlIFNldHRpbmcgdXAgYW4gYnJvYWRseSBhcHBsaWNhYmxlIGluZGV4IHNpZ25hdHVyZSBmb3IgV2luZG93XG4gICAgICAgIC8vIGp1c3QgdG8gZGVhbCB3aXRoIHRoaXMgY2FzZSB3b3VsZCBwcm9iYWJseSBiZSBhIGJhZCBpZGVhLlxuICAgICAgICAhISh3aW5kb3dbJ2NvcmRvdmEnXSB8fCB3aW5kb3dbJ3Bob25lZ2FwJ10gfHwgd2luZG93WydQaG9uZUdhcCddKSAmJlxuICAgICAgICAvaW9zfGlwaG9uZXxpcG9kfGlwYWR8YW5kcm9pZHxibGFja2JlcnJ5fGllbW9iaWxlL2kudGVzdChnZXRVQSgpKSk7XG59XG4vKipcbiAqIERldGVjdCBOb2RlLmpzLlxuICpcbiAqIEByZXR1cm4gdHJ1ZSBpZiBOb2RlLmpzIGVudmlyb25tZW50IGlzIGRldGVjdGVkIG9yIHNwZWNpZmllZC5cbiAqL1xuLy8gTm9kZSBkZXRlY3Rpb24gbG9naWMgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2lsaWFrYW4vZGV0ZWN0LW5vZGUvXG5mdW5jdGlvbiBpc05vZGUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGZvcmNlRW52aXJvbm1lbnQgPSAoX2EgPSBnZXREZWZhdWx0cygpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZm9yY2VFbnZpcm9ubWVudDtcbiAgICBpZiAoZm9yY2VFbnZpcm9ubWVudCA9PT0gJ25vZGUnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChmb3JjZUVudmlyb25tZW50ID09PSAnYnJvd3NlcicpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChnbG9iYWwucHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIERldGVjdCBCcm93c2VyIEVudmlyb25tZW50LlxuICogTm90ZTogVGhpcyB3aWxsIHJldHVybiB0cnVlIGZvciBjZXJ0YWluIHRlc3QgZnJhbWV3b3JrcyB0aGF0IGFyZSBpbmNvbXBsZXRlbHlcbiAqIG1pbWlja2luZyBhIGJyb3dzZXIsIGFuZCBzaG91bGQgbm90IGxlYWQgdG8gYXNzdW1pbmcgYWxsIGJyb3dzZXIgQVBJcyBhcmVcbiAqIGF2YWlsYWJsZS5cbiAqL1xuZnVuY3Rpb24gaXNCcm93c2VyKCkge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyB8fCBpc1dlYldvcmtlcigpO1xufVxuLyoqXG4gKiBEZXRlY3QgV2ViIFdvcmtlciBjb250ZXh0LlxuICovXG5mdW5jdGlvbiBpc1dlYldvcmtlcigpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSk7XG59XG4vKipcbiAqIERldGVjdCBDbG91ZGZsYXJlIFdvcmtlciBjb250ZXh0LlxuICovXG5mdW5jdGlvbiBpc0Nsb3VkZmxhcmVXb3JrZXIoKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50ID09PSAnQ2xvdWRmbGFyZS1Xb3JrZXJzJyk7XG59XG5mdW5jdGlvbiBpc0Jyb3dzZXJFeHRlbnNpb24oKSB7XG4gICAgY29uc3QgcnVudGltZSA9IHR5cGVvZiBjaHJvbWUgPT09ICdvYmplY3QnXG4gICAgICAgID8gY2hyb21lLnJ1bnRpbWVcbiAgICAgICAgOiB0eXBlb2YgYnJvd3NlciA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgID8gYnJvd3Nlci5ydW50aW1lXG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdHlwZW9mIHJ1bnRpbWUgPT09ICdvYmplY3QnICYmIHJ1bnRpbWUuaWQgIT09IHVuZGVmaW5lZDtcbn1cbi8qKlxuICogRGV0ZWN0IFJlYWN0IE5hdGl2ZS5cbiAqXG4gKiBAcmV0dXJuIHRydWUgaWYgUmVhY3ROYXRpdmUgZW52aXJvbm1lbnQgaXMgZGV0ZWN0ZWQuXG4gKi9cbmZ1bmN0aW9uIGlzUmVhY3ROYXRpdmUoKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgbmF2aWdhdG9yID09PSAnb2JqZWN0JyAmJiBuYXZpZ2F0b3JbJ3Byb2R1Y3QnXSA9PT0gJ1JlYWN0TmF0aXZlJyk7XG59XG4vKiogRGV0ZWN0cyBFbGVjdHJvbiBhcHBzLiAqL1xuZnVuY3Rpb24gaXNFbGVjdHJvbigpIHtcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdFbGVjdHJvbi8nKSA+PSAwO1xufVxuLyoqIERldGVjdHMgSW50ZXJuZXQgRXhwbG9yZXIuICovXG5mdW5jdGlvbiBpc0lFKCkge1xuICAgIGNvbnN0IHVhID0gZ2V0VUEoKTtcbiAgICByZXR1cm4gdWEuaW5kZXhPZignTVNJRSAnKSA+PSAwIHx8IHVhLmluZGV4T2YoJ1RyaWRlbnQvJykgPj0gMDtcbn1cbi8qKiBEZXRlY3RzIFVuaXZlcnNhbCBXaW5kb3dzIFBsYXRmb3JtIGFwcHMuICovXG5mdW5jdGlvbiBpc1VXUCgpIHtcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdNU0FwcEhvc3QvJykgPj0gMDtcbn1cbi8qKlxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIGN1cnJlbnQgU0RLIGJ1aWxkIGlzIHRoZSBOb2RlIHZlcnNpb24uXG4gKlxuICogQHJldHVybiB0cnVlIGlmIGl0J3MgdGhlIE5vZGUgU0RLIGJ1aWxkLlxuICovXG5mdW5jdGlvbiBpc05vZGVTZGsoKSB7XG4gICAgcmV0dXJuIENPTlNUQU5UUy5OT0RFX0NMSUVOVCA9PT0gdHJ1ZSB8fCBDT05TVEFOVFMuTk9ERV9BRE1JTiA9PT0gdHJ1ZTtcbn1cbi8qKiBSZXR1cm5zIHRydWUgaWYgd2UgYXJlIHJ1bm5pbmcgaW4gU2FmYXJpLiAqL1xuZnVuY3Rpb24gaXNTYWZhcmkoKSB7XG4gICAgcmV0dXJuICghaXNOb2RlKCkgJiZcbiAgICAgICAgISFuYXZpZ2F0b3IudXNlckFnZW50ICYmXG4gICAgICAgIG5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ1NhZmFyaScpICYmXG4gICAgICAgICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdDaHJvbWUnKSk7XG59XG4vKiogUmV0dXJucyB0cnVlIGlmIHdlIGFyZSBydW5uaW5nIGluIFNhZmFyaSBvciBXZWJLaXQgKi9cbmZ1bmN0aW9uIGlzU2FmYXJpT3JXZWJraXQoKSB7XG4gICAgcmV0dXJuICghaXNOb2RlKCkgJiZcbiAgICAgICAgISFuYXZpZ2F0b3IudXNlckFnZW50ICYmXG4gICAgICAgIChuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdTYWZhcmknKSB8fFxuICAgICAgICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmNsdWRlcygnV2ViS2l0JykpICYmXG4gICAgICAgICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdDaHJvbWUnKSk7XG59XG4vKipcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XG4gKiBAcmV0dXJuIHRydWUgaWYgaW5kZXhlZERCIGlzIHN1cHBvcnRlZCBieSBjdXJyZW50IGJyb3dzZXIvc2VydmljZSB3b3JrZXIgY29udGV4dFxuICovXG5mdW5jdGlvbiBpc0luZGV4ZWREQkF2YWlsYWJsZSgpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGluZGV4ZWREQiA9PT0gJ29iamVjdCc7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vKipcbiAqIFRoaXMgbWV0aG9kIHZhbGlkYXRlcyBicm93c2VyL3N3IGNvbnRleHQgZm9yIGluZGV4ZWREQiBieSBvcGVuaW5nIGEgZHVtbXkgaW5kZXhlZERCIGRhdGFiYXNlIGFuZCByZWplY3RcbiAqIGlmIGVycm9ycyBvY2N1ciBkdXJpbmcgdGhlIGRhdGFiYXNlIG9wZW4gb3BlcmF0aW9uLlxuICpcbiAqIEB0aHJvd3MgZXhjZXB0aW9uIGlmIGN1cnJlbnQgYnJvd3Nlci9zdyBjb250ZXh0IGNhbid0IHJ1biBpZGIub3BlbiAoZXg6IFNhZmFyaSBpZnJhbWUsIEZpcmVmb3hcbiAqIHByaXZhdGUgYnJvd3NpbmcpXG4gKi9cbmZ1bmN0aW9uIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBwcmVFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICBjb25zdCBEQl9DSEVDS19OQU1FID0gJ3ZhbGlkYXRlLWJyb3dzZXItY29udGV4dC1mb3ItaW5kZXhlZGRiLWFuYWx5dGljcy1tb2R1bGUnO1xuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHNlbGYuaW5kZXhlZERCLm9wZW4oREJfQ0hFQ0tfTkFNRSk7XG4gICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnJlc3VsdC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBkYXRhYmFzZSBvbmx5IHdoZW4gaXQgZG9lc24ndCBwcmUtZXhpc3RcbiAgICAgICAgICAgICAgICBpZiAoIXByZUV4aXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5kZXhlZERCLmRlbGV0ZURhdGFiYXNlKERCX0NIRUNLX05BTUUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByZUV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICByZWplY3QoKChfYSA9IHJlcXVlc3QuZXJyb3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5tZXNzYWdlKSB8fCAnJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuLyoqXG4gKlxuICogVGhpcyBtZXRob2QgY2hlY2tzIHdoZXRoZXIgY29va2llIGlzIGVuYWJsZWQgd2l0aGluIGN1cnJlbnQgYnJvd3NlclxuICogQHJldHVybiB0cnVlIGlmIGNvb2tpZSBpcyBlbmFibGVkIHdpdGhpbiBjdXJyZW50IGJyb3dzZXJcbiAqL1xuZnVuY3Rpb24gYXJlQ29va2llc0VuYWJsZWQoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgPT09ICd1bmRlZmluZWQnIHx8ICFuYXZpZ2F0b3IuY29va2llRW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IFN0YW5kYXJkaXplZCBGaXJlYmFzZSBFcnJvci5cbiAqXG4gKiBVc2FnZTpcbiAqXG4gKiAgIC8vIFR5cGVTY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcbiAqICAgdHlwZSBFcnIgPVxuICogICAgICd1bmtub3duJyB8XG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXG4gKiAgICAgO1xuICpcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcbiAqICAgLy8gYXQtZW51bSB7c3RyaW5nfVxuICogICB2YXIgRXJyID0ge1xuICogICAgIFVOS05PV046ICd1bmtub3duJyxcbiAqICAgICBPQkpFQ1RfTk9UX0ZPVU5EOiAnb2JqZWN0LW5vdC1mb3VuZCcsXG4gKiAgIH1cbiAqXG4gKiAgIGxldCBlcnJvcnM6IE1hcDxFcnIsIHN0cmluZz4gPSB7XG4gKiAgICAgJ2dlbmVyaWMtZXJyb3InOiBcIlVua25vd24gZXJyb3JcIixcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcbiAqICAgfTtcbiAqXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXG4gKiAgIGxldCBlcnJvciA9IG5ldyBFcnJvckZhY3Rvcnk8RXJyPignc2VydmljZScsICdTZXJ2aWNlJywgZXJyb3JzKTtcbiAqXG4gKiAgIC4uLlxuICogICB0aHJvdyBlcnJvci5jcmVhdGUoRXJyLkdFTkVSSUMpO1xuICogICAuLi5cbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcbiAqICAgLi4uXG4gKiAgIC8vIFNlcnZpY2U6IENvdWxkIG5vdCBmaWxlIGZpbGU6IGZvby50eHQgKHNlcnZpY2UvZmlsZS1ub3QtZm91bmQpLlxuICpcbiAqICAgY2F0Y2ggKGUpIHtcbiAqICAgICBhc3NlcnQoZS5tZXNzYWdlID09PSBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IGZvby50eHQuXCIpO1xuICogICAgIGlmICgoZSBhcyBGaXJlYmFzZUVycm9yKT8uY29kZSA9PT0gJ3NlcnZpY2UvZmlsZS1ub3QtZm91bmQnKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCByZWFkIGZpbGU6IFwiICsgZVsnZmlsZSddKTtcbiAqICAgICB9XG4gKiAgIH1cbiAqL1xuY29uc3QgRVJST1JfTkFNRSA9ICdGaXJlYmFzZUVycm9yJztcbi8vIEJhc2VkIG9uIGNvZGUgZnJvbTpcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0N1c3RvbV9FcnJvcl9UeXBlc1xuY2xhc3MgRmlyZWJhc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAvKiogVGhlIGVycm9yIGNvZGUgZm9yIHRoaXMgZXJyb3IuICovXG4gICAgY29kZSwgbWVzc2FnZSwgXG4gICAgLyoqIEN1c3RvbSBkYXRhIGZvciB0aGlzIGVycm9yLiAqL1xuICAgIGN1c3RvbURhdGEpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgICAgIHRoaXMuY3VzdG9tRGF0YSA9IGN1c3RvbURhdGE7XG4gICAgICAgIC8qKiBUaGUgY3VzdG9tIG5hbWUgZm9yIGFsbCBGaXJlYmFzZUVycm9ycy4gKi9cbiAgICAgICAgdGhpcy5uYW1lID0gRVJST1JfTkFNRTtcbiAgICAgICAgLy8gRml4IEZvciBFUzVcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9UeXBlU2NyaXB0LXdpa2kvYmxvYi9tYXN0ZXIvQnJlYWtpbmctQ2hhbmdlcy5tZCNleHRlbmRpbmctYnVpbHQtaW5zLWxpa2UtZXJyb3ItYXJyYXktYW5kLW1hcC1tYXktbm8tbG9uZ2VyLXdvcmtcbiAgICAgICAgLy8gVE9ETyhkbGFyb2NxdWUpOiBSZXBsYWNlIHRoaXMgd2l0aCBgbmV3LnRhcmdldGA6IGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL3JlbGVhc2Utbm90ZXMvdHlwZXNjcmlwdC0yLTIuaHRtbCNzdXBwb3J0LWZvci1uZXd0YXJnZXRcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgd2hpY2ggd2UgY2FuIG5vdyB1c2Ugc2luY2Ugd2Ugbm8gbG9uZ2VyIHRhcmdldCBFUzUuXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBGaXJlYmFzZUVycm9yLnByb3RvdHlwZSk7XG4gICAgICAgIC8vIE1haW50YWlucyBwcm9wZXIgc3RhY2sgdHJhY2UgZm9yIHdoZXJlIG91ciBlcnJvciB3YXMgdGhyb3duLlxuICAgICAgICAvLyBPbmx5IGF2YWlsYWJsZSBvbiBWOC5cbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFcnJvckZhY3RvcnkucHJvdG90eXBlLmNyZWF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBFcnJvckZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsIHNlcnZpY2VOYW1lLCBlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5zZXJ2aWNlID0gc2VydmljZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlTmFtZSA9IHNlcnZpY2VOYW1lO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9XG4gICAgY3JlYXRlKGNvZGUsIC4uLmRhdGEpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tRGF0YSA9IGRhdGFbMF0gfHwge307XG4gICAgICAgIGNvbnN0IGZ1bGxDb2RlID0gYCR7dGhpcy5zZXJ2aWNlfS8ke2NvZGV9YDtcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmVycm9yc1tjb2RlXTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRlbXBsYXRlID8gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBjdXN0b21EYXRhKSA6ICdFcnJvcic7XG4gICAgICAgIC8vIFNlcnZpY2UgTmFtZTogRXJyb3IgbWVzc2FnZSAoc2VydmljZS9jb2RlKS5cbiAgICAgICAgY29uc3QgZnVsbE1lc3NhZ2UgPSBgJHt0aGlzLnNlcnZpY2VOYW1lfTogJHttZXNzYWdlfSAoJHtmdWxsQ29kZX0pLmA7XG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEZpcmViYXNlRXJyb3IoZnVsbENvZGUsIGZ1bGxNZXNzYWdlLCBjdXN0b21EYXRhKTtcbiAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHJlcGxhY2VUZW1wbGF0ZSh0ZW1wbGF0ZSwgZGF0YSkge1xuICAgIHJldHVybiB0ZW1wbGF0ZS5yZXBsYWNlKFBBVFRFUk4sIChfLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgIHJldHVybiB2YWx1ZSAhPSBudWxsID8gU3RyaW5nKHZhbHVlKSA6IGA8JHtrZXl9Pz5gO1xuICAgIH0pO1xufVxuY29uc3QgUEFUVEVSTiA9IC9cXHtcXCQoW159XSspfS9nO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBFdmFsdWF0ZXMgYSBKU09OIHN0cmluZyBpbnRvIGEgamF2YXNjcmlwdCBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBBIHN0cmluZyBjb250YWluaW5nIEpTT04uXG4gKiBAcmV0dXJuIHsqfSBUaGUgamF2YXNjcmlwdCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgSlNPTi5cbiAqL1xuZnVuY3Rpb24ganNvbkV2YWwoc3RyKSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcbn1cbi8qKlxuICogUmV0dXJucyBKU09OIHJlcHJlc2VudGluZyBhIGphdmFzY3JpcHQgb2JqZWN0LlxuICogQHBhcmFtIHsqfSBkYXRhIEphdmFTY3JpcHQgb2JqZWN0IHRvIGJlIHN0cmluZ2lmaWVkLlxuICogQHJldHVybiB7c3RyaW5nfSBUaGUgSlNPTiBjb250ZW50cyBvZiB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdpZnkoZGF0YSkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGludG8gY29uc3RpdHVlbnQgcGFydHMuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gd2l0aCBpbnZhbGlkIC8gaW5jb21wbGV0ZSBjbGFpbXMgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5jb25zdCBkZWNvZGUgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBsZXQgaGVhZGVyID0ge30sIGNsYWltcyA9IHt9LCBkYXRhID0ge30sIHNpZ25hdHVyZSA9ICcnO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gdG9rZW4uc3BsaXQoJy4nKTtcbiAgICAgICAgaGVhZGVyID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzBdKSB8fCAnJyk7XG4gICAgICAgIGNsYWltcyA9IGpzb25FdmFsKGJhc2U2NERlY29kZShwYXJ0c1sxXSkgfHwgJycpO1xuICAgICAgICBzaWduYXR1cmUgPSBwYXJ0c1syXTtcbiAgICAgICAgZGF0YSA9IGNsYWltc1snZCddIHx8IHt9O1xuICAgICAgICBkZWxldGUgY2xhaW1zWydkJ107XG4gICAgfVxuICAgIGNhdGNoIChlKSB7IH1cbiAgICByZXR1cm4ge1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGNsYWltcyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgc2lnbmF0dXJlXG4gICAgfTtcbn07XG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgdGltZS1iYXNlZCBjbGFpbXMuIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlXG4gKiB0b2tlbiBpcyB3aXRoaW4gdGhlIHRpbWUgd2luZG93IGF1dGhvcml6ZWQgYnkgdGhlICduYmYnIChub3QtYmVmb3JlKSBhbmQgJ2lhdCcgKGlzc3VlZC1hdCkgY2xhaW1zLlxuICpcbiAqIE5vdGVzOlxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxuICovXG5jb25zdCBpc1ZhbGlkVGltZXN0YW1wID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgY29uc3QgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XG4gICAgY29uc3Qgbm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIGxldCB2YWxpZFNpbmNlID0gMCwgdmFsaWRVbnRpbCA9IDA7XG4gICAgaWYgKHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ25iZicpKSB7XG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWyduYmYnXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XG4gICAgICAgICAgICB2YWxpZFNpbmNlID0gY2xhaW1zWydpYXQnXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdleHAnKSkge1xuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IGNsYWltc1snZXhwJ107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyB0b2tlbiB3aWxsIGV4cGlyZSBhZnRlciAyNGggYnkgZGVmYXVsdFxuICAgICAgICAgICAgdmFsaWRVbnRpbCA9IHZhbGlkU2luY2UgKyA4NjQwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCEhbm93ICYmXG4gICAgICAgICEhdmFsaWRTaW5jZSAmJlxuICAgICAgICAhIXZhbGlkVW50aWwgJiZcbiAgICAgICAgbm93ID49IHZhbGlkU2luY2UgJiZcbiAgICAgICAgbm93IDw9IHZhbGlkVW50aWwpO1xufTtcbi8qKlxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCByZXR1cm5zIGl0cyBpc3N1ZWQgYXQgdGltZSBpZiB2YWxpZCwgbnVsbCBvdGhlcndpc2UuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gbnVsbCBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmNvbnN0IGlzc3VlZEF0VGltZSA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGNvbnN0IGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xuICAgIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XG4gICAgICAgIHJldHVybiBjbGFpbXNbJ2lhdCddO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG4vKipcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgZm9ybWF0LiBFeHBlY3RzIGEgdmFsaWQgaXNzdWVkLWF0IHRpbWUuXG4gKlxuICogTm90ZXM6XG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXG4gKi9cbmNvbnN0IGlzVmFsaWRGb3JtYXQgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlKHRva2VuKSwgY2xhaW1zID0gZGVjb2RlZC5jbGFpbXM7XG4gICAgcmV0dXJuICEhY2xhaW1zICYmIHR5cGVvZiBjbGFpbXMgPT09ICdvYmplY3QnICYmIGNsYWltcy5oYXNPd25Qcm9wZXJ0eSgnaWF0Jyk7XG59O1xuLyoqXG4gKiBBdHRlbXB0cyB0byBwZWVyIGludG8gYW4gYXV0aCB0b2tlbiBhbmQgZGV0ZXJtaW5lIGlmIGl0J3MgYW4gYWRtaW4gYXV0aCB0b2tlbiBieSBsb29raW5nIGF0IHRoZSBjbGFpbXMgcG9ydGlvbi5cbiAqXG4gKiBOb3RlczpcbiAqIC0gTWF5IHJldHVybiBhIGZhbHNlIG5lZ2F0aXZlIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cbiAqL1xuY29uc3QgaXNBZG1pbiA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgIGNvbnN0IGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xuICAgIHJldHVybiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXNbJ2FkbWluJ10gPT09IHRydWU7XG59O1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuZnVuY3Rpb24gY29udGFpbnMob2JqLCBrZXkpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcbn1cbmZ1bmN0aW9uIHNhZmVHZXQob2JqLCBrZXkpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICByZXR1cm4gb2JqW2tleV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBtYXAob2JqLCBmbiwgY29udGV4dE9iaikge1xuICAgIGNvbnN0IHJlcyA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgcmVzW2tleV0gPSBmbi5jYWxsKGNvbnRleHRPYmosIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn1cbi8qKlxuICogRGVlcCBlcXVhbCB0d28gb2JqZWN0cy4gU3VwcG9ydCBBcnJheXMgYW5kIE9iamVjdHMuXG4gKi9cbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGFLZXlzID0gT2JqZWN0LmtleXMoYSk7XG4gICAgY29uc3QgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcbiAgICAgICAgaWYgKCFiS2V5cy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFQcm9wID0gYVtrXTtcbiAgICAgICAgY29uc3QgYlByb3AgPSBiW2tdO1xuICAgICAgICBpZiAoaXNPYmplY3QoYVByb3ApICYmIGlzT2JqZWN0KGJQcm9wKSkge1xuICAgICAgICAgICAgaWYgKCFkZWVwRXF1YWwoYVByb3AsIGJQcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhUHJvcCAhPT0gYlByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGsgb2YgYktleXMpIHtcbiAgICAgICAgaWYgKCFhS2V5cy5pbmNsdWRlcyhrKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gaXNPYmplY3QodGhpbmcpIHtcbiAgICByZXR1cm4gdGhpbmcgIT09IG51bGwgJiYgdHlwZW9mIHRoaW5nID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjIgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUmVqZWN0cyBpZiB0aGUgZ2l2ZW4gcHJvbWlzZSBkb2Vzbid0IHJlc29sdmUgaW4gdGltZUluTVMgbWlsbGlzZWNvbmRzLlxuICogQGludGVybmFsXG4gKi9cbmZ1bmN0aW9uIHByb21pc2VXaXRoVGltZW91dChwcm9taXNlLCB0aW1lSW5NUyA9IDIwMDApIHtcbiAgICBjb25zdCBkZWZlcnJlZFByb21pc2UgPSBuZXcgRGVmZXJyZWQoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGRlZmVycmVkUHJvbWlzZS5yZWplY3QoJ3RpbWVvdXQhJyksIHRpbWVJbk1TKTtcbiAgICBwcm9taXNlLnRoZW4oZGVmZXJyZWRQcm9taXNlLnJlc29sdmUsIGRlZmVycmVkUHJvbWlzZS5yZWplY3QpO1xuICAgIHJldHVybiBkZWZlcnJlZFByb21pc2UucHJvbWlzZTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUmV0dXJucyBhIHF1ZXJ5c3RyaW5nLWZvcm1hdHRlZCBzdHJpbmcgKGUuZy4gJmFyZz12YWwmYXJnMj12YWwyKSBmcm9tIGFcbiAqIHBhcmFtcyBvYmplY3QgKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXG4gKiBOb3RlOiBZb3UgbXVzdCBwcmVwZW5kIGl0IHdpdGggPyB3aGVuIGFkZGluZyBpdCB0byBhIFVSTC5cbiAqL1xuZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnlzdHJpbmdQYXJhbXMpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhxdWVyeXN0cmluZ1BhcmFtcykpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGFycmF5VmFsID0+IHtcbiAgICAgICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChhcnJheVZhbCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xufVxuLyoqXG4gKiBEZWNvZGVzIGEgcXVlcnlzdHJpbmcgKGUuZy4gP2FyZz12YWwmYXJnMj12YWwyKSBpbnRvIGEgcGFyYW1zIG9iamVjdFxuICogKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXG4gKi9cbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgY29uc3QgdG9rZW5zID0gcXVlcnlzdHJpbmcucmVwbGFjZSgvXlxcPy8sICcnKS5zcGxpdCgnJicpO1xuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSB0b2tlbi5zcGxpdCgnPScpO1xuICAgICAgICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb2JqO1xufVxuLyoqXG4gKiBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgcGFydCBvZiBhIFVSTCwgaW5jbHVkaW5nIHRoZSBsZWFkaW5nIHF1ZXN0aW9uIG1hcmsgKGlmIHByZXNlbnQpLlxuICovXG5mdW5jdGlvbiBleHRyYWN0UXVlcnlzdHJpbmcodXJsKSB7XG4gICAgY29uc3QgcXVlcnlTdGFydCA9IHVybC5pbmRleE9mKCc/Jyk7XG4gICAgaWYgKCFxdWVyeVN0YXJ0KSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgZnJhZ21lbnRTdGFydCA9IHVybC5pbmRleE9mKCcjJywgcXVlcnlTdGFydCk7XG4gICAgcmV0dXJuIHVybC5zdWJzdHJpbmcocXVlcnlTdGFydCwgZnJhZ21lbnRTdGFydCA+IDAgPyBmcmFnbWVudFN0YXJ0IDogdW5kZWZpbmVkKTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlldyBTSEEtMSBjcnlwdG9ncmFwaGljIGhhc2guXG4gKiBWYXJpYWJsZSBuYW1lcyBmb2xsb3cgdGhlIG5vdGF0aW9uIGluIEZJUFMgUFVCIDE4MC0zOlxuICogaHR0cDovL2NzcmMubmlzdC5nb3YvcHVibGljYXRpb25zL2ZpcHMvZmlwczE4MC0zL2ZpcHMxODAtM19maW5hbC5wZGYuXG4gKlxuICogVXNhZ2U6XG4gKiAgIHZhciBzaGExID0gbmV3IHNoYTEoKTtcbiAqICAgc2hhMS51cGRhdGUoYnl0ZXMpO1xuICogICB2YXIgaGFzaCA9IHNoYTEuZGlnZXN0KCk7XG4gKlxuICogUGVyZm9ybWFuY2U6XG4gKiAgIENocm9tZSAyMzogICB+NDAwIE1iaXQvc1xuICogICBGaXJlZm94IDE2OiAgfjI1MCBNYml0L3NcbiAqXG4gKi9cbi8qKlxuICogU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoIGNvbnN0cnVjdG9yLlxuICpcbiAqIFRoZSBwcm9wZXJ0aWVzIGRlY2xhcmVkIGhlcmUgYXJlIGRpc2N1c3NlZCBpbiB0aGUgYWJvdmUgYWxnb3JpdGhtIGRvY3VtZW50LlxuICogQGNvbnN0cnVjdG9yXG4gKiBAZmluYWxcbiAqIEBzdHJ1Y3RcbiAqL1xuY2xhc3MgU2hhMSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIb2xkcyB0aGUgcHJldmlvdXMgdmFsdWVzIG9mIGFjY3VtdWxhdGVkIHZhcmlhYmxlcyBhLWUgaW4gdGhlIGNvbXByZXNzX1xuICAgICAgICAgKiBmdW5jdGlvbi5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY2hhaW5fID0gW107XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGJ1ZmZlciBob2xkaW5nIHRoZSBwYXJ0aWFsbHkgY29tcHV0ZWQgaGFzaCByZXN1bHQuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmJ1Zl8gPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFuIGFycmF5IG9mIDgwIGJ5dGVzLCBlYWNoIGEgcGFydCBvZiB0aGUgbWVzc2FnZSB0byBiZSBoYXNoZWQuICBSZWZlcnJlZCB0b1xuICAgICAgICAgKiBhcyB0aGUgbWVzc2FnZSBzY2hlZHVsZSBpbiB0aGUgZG9jcy5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuV18gPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnRhaW5zIGRhdGEgbmVlZGVkIHRvIHBhZCBtZXNzYWdlcyBsZXNzIHRoYW4gNjQgYnl0ZXMuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnBhZF8gPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwcml2YXRlIHtudW1iZXJ9XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xuICAgICAgICB0aGlzLmJsb2NrU2l6ZSA9IDUxMiAvIDg7XG4gICAgICAgIHRoaXMucGFkX1swXSA9IDEyODtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLmJsb2NrU2l6ZTsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLnBhZF9baV0gPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICB9XG4gICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuY2hhaW5fWzBdID0gMHg2NzQ1MjMwMTtcbiAgICAgICAgdGhpcy5jaGFpbl9bMV0gPSAweGVmY2RhYjg5O1xuICAgICAgICB0aGlzLmNoYWluX1syXSA9IDB4OThiYWRjZmU7XG4gICAgICAgIHRoaXMuY2hhaW5fWzNdID0gMHgxMDMyNTQ3NjtcbiAgICAgICAgdGhpcy5jaGFpbl9bNF0gPSAweGMzZDJlMWYwO1xuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XG4gICAgICAgIHRoaXMudG90YWxfID0gMDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgY29tcHJlc3MgaGVscGVyIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSBidWYgQmxvY2sgdG8gY29tcHJlc3MuXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBjb21wcmVzc18oYnVmLCBvZmZzZXQpIHtcbiAgICAgICAgaWYgKCFvZmZzZXQpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgVyA9IHRoaXMuV187XG4gICAgICAgIC8vIGdldCAxNiBiaWcgZW5kaWFuIHdvcmRzXG4gICAgICAgIGlmICh0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyh1c2VyKTogW2J1ZyA4MTQwMTIyXSBSZWNlbnQgdmVyc2lvbnMgb2YgU2FmYXJpIGZvciBNYWMgT1MgYW5kIGlPU1xuICAgICAgICAgICAgICAgIC8vIGhhdmUgYSBidWcgdGhhdCB0dXJucyB0aGUgcG9zdC1pbmNyZW1lbnQgKysgb3BlcmF0b3IgaW50byBwcmUtaW5jcmVtZW50XG4gICAgICAgICAgICAgICAgLy8gZHVyaW5nIEpJVCBjb21waWxhdGlvbi4gIFdlIGhhdmUgY29kZSB0aGF0IGRlcGVuZHMgaGVhdmlseSBvbiBTSEEtMSBmb3JcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0bmVzcyBhbmQgd2hpY2ggaXMgYWZmZWN0ZWQgYnkgdGhpcyBidWcsIHNvIEkndmUgcmVtb3ZlZCBhbGwgdXNlc1xuICAgICAgICAgICAgICAgIC8vIG9mIHBvc3QtaW5jcmVtZW50ICsrIGluIHdoaWNoIHRoZSByZXN1bHQgdmFsdWUgaXMgdXNlZC4gIFdlIGNhbiByZXZlcnRcbiAgICAgICAgICAgICAgICAvLyB0aGlzIGNoYW5nZSBvbmNlIHRoZSBTYWZhcmkgYnVnXG4gICAgICAgICAgICAgICAgLy8gKGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDkwMzYpIGhhcyBiZWVuIGZpeGVkIGFuZFxuICAgICAgICAgICAgICAgIC8vIG1vc3QgY2xpZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cbiAgICAgICAgICAgICAgICBXW2ldID1cbiAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCkgPDwgMjQpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAxKSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDIpIDw8IDgpIHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1Zi5jaGFyQ29kZUF0KG9mZnNldCArIDMpO1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgV1tpXSA9XG4gICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0XSA8PCAyNCkgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXQgKyAxXSA8PCAxNikgfFxuICAgICAgICAgICAgICAgICAgICAgICAgKGJ1ZltvZmZzZXQgKyAyXSA8PCA4KSB8XG4gICAgICAgICAgICAgICAgICAgICAgICBidWZbb2Zmc2V0ICsgM107XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXhwYW5kIHRvIDgwIHdvcmRzXG4gICAgICAgIGZvciAobGV0IGkgPSAxNjsgaSA8IDgwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHQgPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xuICAgICAgICAgICAgV1tpXSA9ICgodCA8PCAxKSB8ICh0ID4+PiAzMSkpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYSA9IHRoaXMuY2hhaW5fWzBdO1xuICAgICAgICBsZXQgYiA9IHRoaXMuY2hhaW5fWzFdO1xuICAgICAgICBsZXQgYyA9IHRoaXMuY2hhaW5fWzJdO1xuICAgICAgICBsZXQgZCA9IHRoaXMuY2hhaW5fWzNdO1xuICAgICAgICBsZXQgZSA9IHRoaXMuY2hhaW5fWzRdO1xuICAgICAgICBsZXQgZiwgaztcbiAgICAgICAgLy8gVE9ETyh1c2VyKTogVHJ5IHRvIHVucm9sbCB0aGlzIGxvb3AgdG8gc3BlZWQgdXAgdGhlIGNvbXB1dGF0aW9uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgNDApIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGYgPSBkIF4gKGIgJiAoYyBeIGQpKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4NWE4Mjc5OTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xuICAgICAgICAgICAgICAgICAgICBrID0gMHg2ZWQ5ZWJhMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDYwKSB7XG4gICAgICAgICAgICAgICAgICAgIGYgPSAoYiAmIGMpIHwgKGQgJiAoYiB8IGMpKTtcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4OGYxYmJjZGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xuICAgICAgICAgICAgICAgICAgICBrID0gMHhjYTYyYzFkNjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0ID0gKCgoYSA8PCA1KSB8IChhID4+PiAyNykpICsgZiArIGUgKyBrICsgV1tpXSkgJiAweGZmZmZmZmZmO1xuICAgICAgICAgICAgZSA9IGQ7XG4gICAgICAgICAgICBkID0gYztcbiAgICAgICAgICAgIGMgPSAoKGIgPDwgMzApIHwgKGIgPj4+IDIpKSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgICAgICBiID0gYTtcbiAgICAgICAgICAgIGEgPSB0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2hhaW5fWzBdID0gKHRoaXMuY2hhaW5fWzBdICsgYSkgJiAweGZmZmZmZmZmO1xuICAgICAgICB0aGlzLmNoYWluX1sxXSA9ICh0aGlzLmNoYWluX1sxXSArIGIpICYgMHhmZmZmZmZmZjtcbiAgICAgICAgdGhpcy5jaGFpbl9bMl0gPSAodGhpcy5jaGFpbl9bMl0gKyBjKSAmIDB4ZmZmZmZmZmY7XG4gICAgICAgIHRoaXMuY2hhaW5fWzNdID0gKHRoaXMuY2hhaW5fWzNdICsgZCkgJiAweGZmZmZmZmZmO1xuICAgICAgICB0aGlzLmNoYWluX1s0XSA9ICh0aGlzLmNoYWluX1s0XSArIGUpICYgMHhmZmZmZmZmZjtcbiAgICB9XG4gICAgdXBkYXRlKGJ5dGVzLCBsZW5ndGgpIHtcbiAgICAgICAgLy8gVE9ETyhqb2hubGVueik6IHRpZ2h0ZW4gdGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBhbmQgcmVtb3ZlIHRoaXMgY2hlY2tcbiAgICAgICAgaWYgKGJ5dGVzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGJ5dGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsZW5ndGhNaW51c0Jsb2NrID0gbGVuZ3RoIC0gdGhpcy5ibG9ja1NpemU7XG4gICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgLy8gVXNpbmcgbG9jYWwgaW5zdGVhZCBvZiBtZW1iZXIgdmFyaWFibGVzIGdpdmVzIH41JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYuXG4gICAgICAgIGNvbnN0IGJ1ZiA9IHRoaXMuYnVmXztcbiAgICAgICAgbGV0IGluYnVmID0gdGhpcy5pbmJ1Zl87XG4gICAgICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXG4gICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGhhdmUgbm8gZGF0YSBpbiB0aGUgYmxvY2sgdG8gdG9wIHVwLCB3ZSBjYW4gZGlyZWN0bHkgcHJvY2VzcyB0aGVcbiAgICAgICAgICAgIC8vIGlucHV0IGJ1ZmZlciAoYXNzdW1pbmcgaXQgY29udGFpbnMgc3VmZmljaWVudCBkYXRhKS4gVGhpcyBnaXZlcyB+MjUlXG4gICAgICAgICAgICAvLyBzcGVlZHVwIG9uIENocm9tZSAyMyBhbmQgfjE1JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYsIGJ1dCByZXF1aXJlcyB0aGF0XG4gICAgICAgICAgICAvLyB0aGUgZGF0YSBpcyBwcm92aWRlZCBpbiBsYXJnZSBjaHVua3MgKG9yIGluIG11bHRpcGxlcyBvZiA2NCBieXRlcykuXG4gICAgICAgICAgICBpZiAoaW5idWYgPT09IDApIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8PSBsZW5ndGhNaW51c0Jsb2NrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ5dGVzLCBuKTtcbiAgICAgICAgICAgICAgICAgICAgbiArPSB0aGlzLmJsb2NrU2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlcy5jaGFyQ29kZUF0KG4pO1xuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xuICAgICAgICAgICAgICAgICAgICArK247XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmJ1ZiA9PT0gdGhpcy5ibG9ja1NpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmJ1ZiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBKdW1wIHRvIHRoZSBvdXRlciBsb29wIHNvIHdlIHVzZSB0aGUgZnVsbC1ibG9jayBvcHRpbWl6YXRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdoaWxlIChuIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcbiAgICAgICAgICAgICAgICAgICAgKytpbmJ1ZjtcbiAgICAgICAgICAgICAgICAgICAgKytuO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhidWYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5idWYgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcbiAgICAgICAgdGhpcy50b3RhbF8gKz0gbGVuZ3RoO1xuICAgIH1cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgZGlnZXN0KCkge1xuICAgICAgICBjb25zdCBkaWdlc3QgPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsQml0cyA9IHRoaXMudG90YWxfICogODtcbiAgICAgICAgLy8gQWRkIHBhZCAweDgwIDB4MDAqLlxuICAgICAgICBpZiAodGhpcy5pbmJ1Zl8gPCA1Nikge1xuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCA1NiAtIHRoaXMuaW5idWZfKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgdGhpcy5ibG9ja1NpemUgLSAodGhpcy5pbmJ1Zl8gLSA1NikpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFkZCAjIGJpdHMuXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJsb2NrU2l6ZSAtIDE7IGkgPj0gNTY7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5idWZfW2ldID0gdG90YWxCaXRzICYgMjU1O1xuICAgICAgICAgICAgdG90YWxCaXRzIC89IDI1NjsgLy8gRG9uJ3QgdXNlIGJpdC1zaGlmdGluZyBoZXJlIVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29tcHJlc3NfKHRoaXMuYnVmXyk7XG4gICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAyNDsgaiA+PSAwOyBqIC09IDgpIHtcbiAgICAgICAgICAgICAgICBkaWdlc3Rbbl0gPSAodGhpcy5jaGFpbl9baV0gPj4gaikgJiAyNTU7XG4gICAgICAgICAgICAgICAgKytuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkaWdlc3Q7XG4gICAgfVxufVxuXG4vKipcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcbiAqIFRoZW5hYmxlKS5cbiAqXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcbiAqICAgICBhcyBhIHByb3h5LlxuICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxuICovXG5mdW5jdGlvbiBjcmVhdGVTdWJzY3JpYmUoZXhlY3V0b3IsIG9uTm9PYnNlcnZlcnMpIHtcbiAgICBjb25zdCBwcm94eSA9IG5ldyBPYnNlcnZlclByb3h5KGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKTtcbiAgICByZXR1cm4gcHJveHkuc3Vic2NyaWJlLmJpbmQocHJveHkpO1xufVxuLyoqXG4gKiBJbXBsZW1lbnQgZmFuLW91dCBmb3IgYW55IG51bWJlciBvZiBPYnNlcnZlcnMgYXR0YWNoZWQgdmlhIGEgc3Vic2NyaWJlXG4gKiBmdW5jdGlvbi5cbiAqL1xuY2xhc3MgT2JzZXJ2ZXJQcm94eSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIGV4ZWN1dG9yIEZ1bmN0aW9uIHdoaWNoIGNhbiBtYWtlIGNhbGxzIHRvIGEgc2luZ2xlIE9ic2VydmVyXG4gICAgICogICAgIGFzIGEgcHJveHkuXG4gICAgICogQHBhcmFtIG9uTm9PYnNlcnZlcnMgQ2FsbGJhY2sgd2hlbiBjb3VudCBvZiBPYnNlcnZlcnMgZ29lcyB0byB6ZXJvLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKSB7XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzID0gW107XG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmVzID0gW107XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCA9IDA7XG4gICAgICAgIC8vIE1pY3JvLXRhc2sgc2NoZWR1bGluZyBieSBjYWxsaW5nIHRhc2sudGhlbigpLlxuICAgICAgICB0aGlzLnRhc2sgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gb25Ob09ic2VydmVycztcbiAgICAgICAgLy8gQ2FsbCB0aGUgZXhlY3V0b3IgYXN5bmNocm9ub3VzbHkgc28gc3Vic2NyaWJlcnMgdGhhdCBhcmUgY2FsbGVkXG4gICAgICAgIC8vIHN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdWJzY3JpYmUgZnVuY3Rpb25cbiAgICAgICAgLy8gY2FuIHN0aWxsIHJlY2VpdmUgdGhlIHZlcnkgZmlyc3QgdmFsdWUgZ2VuZXJhdGVkIGluIHRoZSBleGVjdXRvci5cbiAgICAgICAgdGhpcy50YXNrXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBleGVjdXRvcih0aGlzKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBuZXh0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlcnJvcihlcnJvcikge1xuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xvc2UoZXJyb3IpO1xuICAgIH1cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5mb3JFYWNoT2JzZXJ2ZXIoKG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmUgZnVuY3Rpb24gdGhhdCBjYW4gYmUgdXNlZCB0byBhZGQgYW4gT2JzZXJ2ZXIgdG8gdGhlIGZhbi1vdXQgbGlzdC5cbiAgICAgKlxuICAgICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5bmNocm9ub3VzbHkgdG8gdGhlaXJcbiAgICAgKiAgIGNhbGwgdG8gc3Vic2NyaWJlKCkuXG4gICAgICovXG4gICAgc3Vic2NyaWJlKG5leHRPck9ic2VydmVyLCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgbGV0IG9ic2VydmVyO1xuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXJyb3IgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIE9ic2VydmVyLicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEFzc2VtYmxlIGFuIE9ic2VydmVyIG9iamVjdCB3aGVuIHBhc3NlZCBhcyBjYWxsYmFjayBmdW5jdGlvbnMuXG4gICAgICAgIGlmIChpbXBsZW1lbnRzQW55TWV0aG9kcyhuZXh0T3JPYnNlcnZlciwgW1xuICAgICAgICAgICAgJ25leHQnLFxuICAgICAgICAgICAgJ2Vycm9yJyxcbiAgICAgICAgICAgICdjb21wbGV0ZSdcbiAgICAgICAgXSkpIHtcbiAgICAgICAgICAgIG9ic2VydmVyID0gbmV4dE9yT2JzZXJ2ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvYnNlcnZlciA9IHtcbiAgICAgICAgICAgICAgICBuZXh0OiBuZXh0T3JPYnNlcnZlcixcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICBjb21wbGV0ZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0ID0gbm9vcDtcbiAgICAgICAgfVxuICAgICAgICBpZiAob2JzZXJ2ZXIuZXJyb3IgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IgPSBub29wO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvYnNlcnZlci5jb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdW5zdWIgPSB0aGlzLnVuc3Vic2NyaWJlT25lLmJpbmQodGhpcywgdGhpcy5vYnNlcnZlcnMubGVuZ3RoKTtcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBzdWJzY3JpYmUgdG8gYSB0ZXJtaW5hdGVkIE9ic2VydmFibGUgLSB3ZVxuICAgICAgICAvLyBqdXN0IHJlc3BvbmQgdG8gdGhlIE9ic2VydmVyIHdpdGggdGhlIGZpbmFsIGVycm9yIG9yIGNvbXBsZXRlXG4gICAgICAgIC8vIGV2ZW50LlxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maW5hbEVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcih0aGlzLmZpbmFsRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBub3RoaW5nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJzLnB1c2gob2JzZXJ2ZXIpO1xuICAgICAgICByZXR1cm4gdW5zdWI7XG4gICAgfVxuICAgIC8vIFVuc3Vic2NyaWJlIGlzIHN5bmNocm9ub3VzIC0gd2UgZ3VhcmFudGVlIHRoYXQgbm8gZXZlbnRzIGFyZSBzZW50IHRvXG4gICAgLy8gYW55IHVuc3Vic2NyaWJlZCBPYnNlcnZlci5cbiAgICB1bnN1YnNjcmliZU9uZShpKSB7XG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVycyA9PT0gdW5kZWZpbmVkIHx8IHRoaXMub2JzZXJ2ZXJzW2ldID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5vYnNlcnZlcnNbaV07XG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCAtPSAxO1xuICAgICAgICBpZiAodGhpcy5vYnNlcnZlckNvdW50ID09PSAwICYmIHRoaXMub25Ob09ic2VydmVycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnModGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yRWFjaE9ic2VydmVyKGZuKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgICAgICAgLy8gQWxyZWFkeSBjbG9zZWQgYnkgcHJldmlvdXMgZXZlbnQuLi4uanVzdCBlYXQgdGhlIGFkZGl0aW9uYWwgdmFsdWVzLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNpbmNlIHNlbmRPbmUgY2FsbHMgYXN5bmNocm9ub3VzbHkgLSB0aGVyZSBpcyBubyBjaGFuY2UgdGhhdFxuICAgICAgICAvLyB0aGlzLm9ic2VydmVycyB3aWxsIGJlY29tZSB1bmRlZmluZWQuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2VuZE9uZShpLCBmbik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2FsbCB0aGUgT2JzZXJ2ZXIgdmlhIG9uZSBvZiBpdCdzIGNhbGxiYWNrIGZ1bmN0aW9uLiBXZSBhcmUgY2FyZWZ1bCB0b1xuICAgIC8vIGNvbmZpcm0gdGhhdCB0aGUgb2JzZXJ2ZSBoYXMgbm90IGJlZW4gdW5zdWJzY3JpYmVkIHNpbmNlIHRoaXMgYXN5bmNocm9ub3VzXG4gICAgLy8gZnVuY3Rpb24gaGFkIGJlZW4gcXVldWVkLlxuICAgIHNlbmRPbmUoaSwgZm4pIHtcbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgY2FsbGJhY2sgYXN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xuICAgICAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm9ic2VydmVyc1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZm4odGhpcy5vYnNlcnZlcnNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZ25vcmUgZXhjZXB0aW9ucyByYWlzZWQgaW4gT2JzZXJ2ZXJzIG9yIG1pc3NpbmcgbWV0aG9kcyBvZiBhblxuICAgICAgICAgICAgICAgICAgICAvLyBPYnNlcnZlci5cbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGVycm9yIHRvIGNvbnNvbGUuIGIvMzE0MDQ4MDZcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2UoZXJyKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgaWYgKGVyciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmZpbmFsRXJyb3IgPSBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUHJveHkgaXMgbm8gbG9uZ2VyIG5lZWRlZCAtIGdhcmJhZ2UgY29sbGVjdCByZWZlcmVuY2VzXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZmxvYXRpbmctcHJvbWlzZXNcbiAgICAgICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qKiBUdXJuIHN5bmNocm9ub3VzIGZ1bmN0aW9uIGludG8gb25lIGNhbGxlZCBhc3luY2hyb25vdXNseS4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiBhc3luYyhmbiwgb25FcnJvcikge1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBvbkVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgdGhlIG9iamVjdCBwYXNzZWQgaW4gaW1wbGVtZW50cyBhbnkgb2YgdGhlIG5hbWVkIG1ldGhvZHMuXG4gKi9cbmZ1bmN0aW9uIGltcGxlbWVudHNBbnlNZXRob2RzKG9iaiwgbWV0aG9kcykge1xuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG1ldGhvZCBvZiBtZXRob2RzKSB7XG4gICAgICAgIGlmIChtZXRob2QgaW4gb2JqICYmIHR5cGVvZiBvYmpbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gbm9vcCgpIHtcbiAgICAvLyBkbyBub3RoaW5nXG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQgZm9yIGEgcHVibGljIGZ1bmN0aW9uLlxuICogVGhyb3dzIGFuIGVycm9yIGlmIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSBtaW5Db3VudCBUaGUgbWluaW11bSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIGFsbG93IGZvciB0aGUgZnVuY3Rpb24gY2FsbFxuICogQHBhcmFtIG1heENvdW50IFRoZSBtYXhpbXVtIG51bWJlciBvZiBhcmd1bWVudCB0byBhbGxvdyBmb3IgdGhlIGZ1bmN0aW9uIGNhbGxcbiAqIEBwYXJhbSBhcmdDb3VudCBUaGUgYWN0dWFsIG51bWJlciBvZiBhcmd1bWVudHMgcHJvdmlkZWQuXG4gKi9cbmNvbnN0IHZhbGlkYXRlQXJnQ291bnQgPSBmdW5jdGlvbiAoZm5OYW1lLCBtaW5Db3VudCwgbWF4Q291bnQsIGFyZ0NvdW50KSB7XG4gICAgbGV0IGFyZ0Vycm9yO1xuICAgIGlmIChhcmdDb3VudCA8IG1pbkNvdW50KSB7XG4gICAgICAgIGFyZ0Vycm9yID0gJ2F0IGxlYXN0ICcgKyBtaW5Db3VudDtcbiAgICB9XG4gICAgZWxzZSBpZiAoYXJnQ291bnQgPiBtYXhDb3VudCkge1xuICAgICAgICBhcmdFcnJvciA9IG1heENvdW50ID09PSAwID8gJ25vbmUnIDogJ25vIG1vcmUgdGhhbiAnICsgbWF4Q291bnQ7XG4gICAgfVxuICAgIGlmIChhcmdFcnJvcikge1xuICAgICAgICBjb25zdCBlcnJvciA9IGZuTmFtZSArXG4gICAgICAgICAgICAnIGZhaWxlZDogV2FzIGNhbGxlZCB3aXRoICcgK1xuICAgICAgICAgICAgYXJnQ291bnQgK1xuICAgICAgICAgICAgKGFyZ0NvdW50ID09PSAxID8gJyBhcmd1bWVudC4nIDogJyBhcmd1bWVudHMuJykgK1xuICAgICAgICAgICAgJyBFeHBlY3RzICcgK1xuICAgICAgICAgICAgYXJnRXJyb3IgK1xuICAgICAgICAgICAgJy4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbn07XG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyB0byBwcmVmaXggYW4gZXJyb3IgbWVzc2FnZSBhYm91dCBmYWlsZWQgYXJndW1lbnQgdmFsaWRhdGlvblxuICpcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcbiAqIEBwYXJhbSBhcmdOYW1lIFRoZSBuYW1lIG9mIHRoZSBhcmd1bWVudFxuICogQHJldHVybiBUaGUgcHJlZml4IHRvIGFkZCB0byB0aGUgZXJyb3IgdGhyb3duIGZvciB2YWxpZGF0aW9uLlxuICovXG5mdW5jdGlvbiBlcnJvclByZWZpeChmbk5hbWUsIGFyZ05hbWUpIHtcbiAgICByZXR1cm4gYCR7Zm5OYW1lfSBmYWlsZWQ6ICR7YXJnTmFtZX0gYXJndW1lbnQgYDtcbn1cbi8qKlxuICogQHBhcmFtIGZuTmFtZVxuICogQHBhcmFtIGFyZ3VtZW50TnVtYmVyXG4gKiBAcGFyYW0gbmFtZXNwYWNlXG4gKiBAcGFyYW0gb3B0aW9uYWxcbiAqL1xuZnVuY3Rpb24gdmFsaWRhdGVOYW1lc3BhY2UoZm5OYW1lLCBuYW1lc3BhY2UsIG9wdGlvbmFsKSB7XG4gICAgaWYgKG9wdGlvbmFsICYmICFuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5hbWVzcGFjZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgLy9UT0RPOiBJIHNob3VsZCBkbyBtb3JlIHZhbGlkYXRpb24gaGVyZS4gV2Ugb25seSBhbGxvdyBjZXJ0YWluIGNoYXJzIGluIG5hbWVzcGFjZXMuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclByZWZpeChmbk5hbWUsICduYW1lc3BhY2UnKSArICdtdXN0IGJlIGEgdmFsaWQgZmlyZWJhc2UgbmFtZXNwYWNlLicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlQ2FsbGJhY2soZm5OYW1lLCBhcmd1bWVudE5hbWUsIFxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmNhbGxiYWNrLCBvcHRpb25hbCkge1xuICAgIGlmIChvcHRpb25hbCAmJiAhY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclByZWZpeChmbk5hbWUsIGFyZ3VtZW50TmFtZSkgKyAnbXVzdCBiZSBhIHZhbGlkIGZ1bmN0aW9uLicpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHZhbGlkYXRlQ29udGV4dE9iamVjdChmbk5hbWUsIGFyZ3VtZW50TmFtZSwgY29udGV4dCwgb3B0aW9uYWwpIHtcbiAgICBpZiAob3B0aW9uYWwgJiYgIWNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnIHx8IGNvbnRleHQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgYXJndW1lbnROYW1lKSArICdtdXN0IGJlIGEgdmFsaWQgY29udGV4dCBvYmplY3QuJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gQ29kZSBvcmlnaW5hbGx5IGNhbWUgZnJvbSBnb29nLmNyeXB0LnN0cmluZ1RvVXRmOEJ5dGVBcnJheSwgYnV0IGZvciBzb21lIHJlYXNvbiB0aGV5XG4vLyBhdXRvbWF0aWNhbGx5IHJlcGxhY2VkICdcXHJcXG4nIHdpdGggJ1xcbicsIGFuZCB0aGV5IGRpZG4ndCBoYW5kbGUgc3Vycm9nYXRlIHBhaXJzLFxuLy8gc28gaXQncyBiZWVuIG1vZGlmaWVkLlxuLy8gTm90ZSB0aGF0IG5vdCBhbGwgVW5pY29kZSBjaGFyYWN0ZXJzIGFwcGVhciBhcyBzaW5nbGUgY2hhcmFjdGVycyBpbiBKYXZhU2NyaXB0IHN0cmluZ3MuXG4vLyBmcm9tQ2hhckNvZGUgcmV0dXJucyB0aGUgVVRGLTE2IGVuY29kaW5nIG9mIGEgY2hhcmFjdGVyIC0gc28gc29tZSBVbmljb2RlIGNoYXJhY3RlcnNcbi8vIHVzZSAyIGNoYXJhY3RlcnMgaW4gSmF2YVNjcmlwdC4gIEFsbCA0LWJ5dGUgVVRGLTggY2hhcmFjdGVycyBiZWdpbiB3aXRoIGEgZmlyc3Rcbi8vIGNoYXJhY3RlciBpbiB0aGUgcmFuZ2UgMHhEODAwIC0gMHhEQkZGICh0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGEgc28tY2FsbGVkIHN1cnJvZ2F0ZVxuLy8gcGFpcikuXG4vLyBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTE1LjEuM1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuY29uc3Qgc3RyaW5nVG9CeXRlQXJyYXkgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgY29uc3Qgb3V0ID0gW107XG4gICAgbGV0IHAgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIElzIHRoaXMgdGhlIGxlYWQgc3Vycm9nYXRlIGluIGEgc3Vycm9nYXRlIHBhaXI/XG4gICAgICAgIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xuICAgICAgICAgICAgY29uc3QgaGlnaCA9IGMgLSAweGQ4MDA7IC8vIHRoZSBoaWdoIDEwIGJpdHMuXG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgICBhc3NlcnQoaSA8IHN0ci5sZW5ndGgsICdTdXJyb2dhdGUgcGFpciBtaXNzaW5nIHRyYWlsIHN1cnJvZ2F0ZS4nKTtcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IHN0ci5jaGFyQ29kZUF0KGkpIC0gMHhkYzAwOyAvLyB0aGUgbG93IDEwIGJpdHMuXG4gICAgICAgICAgICBjID0gMHgxMDAwMCArIChoaWdoIDw8IDEwKSArIGxvdztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA8IDEyOCkge1xuICAgICAgICAgICAgb3V0W3ArK10gPSBjO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDYpIHwgMTkyO1xuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjIDwgNjU1MzYpIHtcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTIpIHwgMjI0O1xuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxOCkgfCAyNDA7XG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dDtcbn07XG4vKipcbiAqIENhbGN1bGF0ZSBsZW5ndGggd2l0aG91dCBhY3R1YWxseSBjb252ZXJ0aW5nOyB1c2VmdWwgZm9yIGRvaW5nIGNoZWFwZXIgdmFsaWRhdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuY29uc3Qgc3RyaW5nTGVuZ3RoID0gZnVuY3Rpb24gKHN0cikge1xuICAgIGxldCBwID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIGlmIChjIDwgMTI4KSB7XG4gICAgICAgICAgICBwKys7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcbiAgICAgICAgICAgIHAgKz0gMjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xuICAgICAgICAgICAgLy8gTGVhZCBzdXJyb2dhdGUgb2YgYSBzdXJyb2dhdGUgcGFpci4gIFRoZSBwYWlyIHRvZ2V0aGVyIHdpbGwgdGFrZSA0IGJ5dGVzIHRvIHJlcHJlc2VudC5cbiAgICAgICAgICAgIHAgKz0gNDtcbiAgICAgICAgICAgIGkrKzsgLy8gc2tpcCB0cmFpbCBzdXJyb2dhdGUuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwICs9IDM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHA7XG59O1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBUaGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBleHBvbmVudGlhbGx5IGluY3JlYXNlLlxuICovXG5jb25zdCBERUZBVUxUX0lOVEVSVkFMX01JTExJUyA9IDEwMDA7XG4vKipcbiAqIFRoZSBmYWN0b3IgdG8gYmFja29mZiBieS5cbiAqIFNob3VsZCBiZSBhIG51bWJlciBncmVhdGVyIHRoYW4gMS5cbiAqL1xuY29uc3QgREVGQVVMVF9CQUNLT0ZGX0ZBQ1RPUiA9IDI7XG4vKipcbiAqIFRoZSBtYXhpbXVtIG1pbGxpc2Vjb25kcyB0byBpbmNyZWFzZSB0by5cbiAqXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXG4gKi9cbmNvbnN0IE1BWF9WQUxVRV9NSUxMSVMgPSA0ICogNjAgKiA2MCAqIDEwMDA7IC8vIEZvdXIgaG91cnMsIGxpa2UgaU9TIGFuZCBBbmRyb2lkLlxuLyoqXG4gKiBUaGUgcGVyY2VudGFnZSBvZiBiYWNrb2ZmIHRpbWUgdG8gcmFuZG9taXplIGJ5LlxuICogU2VlXG4gKiBodHRwOi8vZ28vc2FmZS1jbGllbnQtYmVoYXZpb3Ijc3RlcC0xLWRldGVybWluZS10aGUtYXBwcm9wcmlhdGUtcmV0cnktaW50ZXJ2YWwtdG8taGFuZGxlLXNwaWtlLXRyYWZmaWNcbiAqIGZvciBjb250ZXh0LlxuICpcbiAqIDxwPlZpc2libGUgZm9yIHRlc3RpbmdcbiAqL1xuY29uc3QgUkFORE9NX0ZBQ1RPUiA9IDAuNTtcbi8qKlxuICogQmFzZWQgb24gdGhlIGJhY2tvZmYgbWV0aG9kIGZyb21cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvY2xvc3VyZS1saWJyYXJ5L2Jsb2IvbWFzdGVyL2Nsb3N1cmUvZ29vZy9tYXRoL2V4cG9uZW50aWFsYmFja29mZi5qcy5cbiAqIEV4dHJhY3RlZCBoZXJlIHNvIHdlIGRvbid0IG5lZWQgdG8gcGFzcyBtZXRhZGF0YSBhbmQgYSBzdGF0ZWZ1bCBFeHBvbmVudGlhbEJhY2tvZmYgb2JqZWN0IGFyb3VuZC5cbiAqL1xuZnVuY3Rpb24gY2FsY3VsYXRlQmFja29mZk1pbGxpcyhiYWNrb2ZmQ291bnQsIGludGVydmFsTWlsbGlzID0gREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMsIGJhY2tvZmZGYWN0b3IgPSBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SKSB7XG4gICAgLy8gQ2FsY3VsYXRlcyBhbiBleHBvbmVudGlhbGx5IGluY3JlYXNpbmcgdmFsdWUuXG4gICAgLy8gRGV2aWF0aW9uOiBjYWxjdWxhdGVzIHZhbHVlIGZyb20gY291bnQgYW5kIGEgY29uc3RhbnQgaW50ZXJ2YWwsIHNvIHdlIG9ubHkgbmVlZCB0byBzYXZlIHZhbHVlXG4gICAgLy8gYW5kIGNvdW50IHRvIHJlc3RvcmUgc3RhdGUuXG4gICAgY29uc3QgY3VyckJhc2VWYWx1ZSA9IGludGVydmFsTWlsbGlzICogTWF0aC5wb3coYmFja29mZkZhY3RvciwgYmFja29mZkNvdW50KTtcbiAgICAvLyBBIHJhbmRvbSBcImZ1enpcIiB0byBhdm9pZCB3YXZlcyBvZiByZXRyaWVzLlxuICAgIC8vIERldmlhdGlvbjogcmFuZG9tRmFjdG9yIGlzIHJlcXVpcmVkLlxuICAgIGNvbnN0IHJhbmRvbVdhaXQgPSBNYXRoLnJvdW5kKFxuICAgIC8vIEEgZnJhY3Rpb24gb2YgdGhlIGJhY2tvZmYgdmFsdWUgdG8gYWRkL3N1YnRyYWN0LlxuICAgIC8vIERldmlhdGlvbjogY2hhbmdlcyBtdWx0aXBsaWNhdGlvbiBvcmRlciB0byBpbXByb3ZlIHJlYWRhYmlsaXR5LlxuICAgIFJBTkRPTV9GQUNUT1IgKlxuICAgICAgICBjdXJyQmFzZVZhbHVlICpcbiAgICAgICAgLy8gQSByYW5kb20gZmxvYXQgKHJvdW5kZWQgdG8gaW50IGJ5IE1hdGgucm91bmQgYWJvdmUpIGluIHRoZSByYW5nZSBbLTEsIDFdLiBEZXRlcm1pbmVzXG4gICAgICAgIC8vIGlmIHdlIGFkZCBvciBzdWJ0cmFjdC5cbiAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICpcbiAgICAgICAgMik7XG4gICAgLy8gTGltaXRzIGJhY2tvZmYgdG8gbWF4IHRvIGF2b2lkIGVmZmVjdGl2ZWx5IHBlcm1hbmVudCBiYWNrb2ZmLlxuICAgIHJldHVybiBNYXRoLm1pbihNQVhfVkFMVUVfTUlMTElTLCBjdXJyQmFzZVZhbHVlICsgcmFuZG9tV2FpdCk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIFByb3ZpZGUgRW5nbGlzaCBvcmRpbmFsIGxldHRlcnMgYWZ0ZXIgYSBudW1iZXJcbiAqL1xuZnVuY3Rpb24gb3JkaW5hbChpKSB7XG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaSkpIHtcbiAgICAgICAgcmV0dXJuIGAke2l9YDtcbiAgICB9XG4gICAgcmV0dXJuIGkgKyBpbmRpY2F0b3IoaSk7XG59XG5mdW5jdGlvbiBpbmRpY2F0b3IoaSkge1xuICAgIGkgPSBNYXRoLmFicyhpKTtcbiAgICBjb25zdCBjZW50ID0gaSAlIDEwMDtcbiAgICBpZiAoY2VudCA+PSAxMCAmJiBjZW50IDw9IDIwKSB7XG4gICAgICAgIHJldHVybiAndGgnO1xuICAgIH1cbiAgICBjb25zdCBkZWMgPSBpICUgMTA7XG4gICAgaWYgKGRlYyA9PT0gMSkge1xuICAgICAgICByZXR1cm4gJ3N0JztcbiAgICB9XG4gICAgaWYgKGRlYyA9PT0gMikge1xuICAgICAgICByZXR1cm4gJ25kJztcbiAgICB9XG4gICAgaWYgKGRlYyA9PT0gMykge1xuICAgICAgICByZXR1cm4gJ3JkJztcbiAgICB9XG4gICAgcmV0dXJuICd0aCc7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5mdW5jdGlvbiBnZXRNb2R1bGFySW5zdGFuY2Uoc2VydmljZSkge1xuICAgIGlmIChzZXJ2aWNlICYmIHNlcnZpY2UuX2RlbGVnYXRlKSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlLl9kZWxlZ2F0ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBzZXJ2aWNlO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgQ09OU1RBTlRTLCBEZWNvZGVCYXNlNjRTdHJpbmdFcnJvciwgRGVmZXJyZWQsIEVycm9yRmFjdG9yeSwgRmlyZWJhc2VFcnJvciwgTUFYX1ZBTFVFX01JTExJUywgUkFORE9NX0ZBQ1RPUiwgU2hhMSwgYXJlQ29va2llc0VuYWJsZWQsIGFzc2VydCwgYXNzZXJ0aW9uRXJyb3IsIGFzeW5jLCBiYXNlNjQsIGJhc2U2NERlY29kZSwgYmFzZTY0RW5jb2RlLCBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZywgY2FsY3VsYXRlQmFja29mZk1pbGxpcywgY29udGFpbnMsIGNyZWF0ZU1vY2tVc2VyVG9rZW4sIGNyZWF0ZVN1YnNjcmliZSwgZGVjb2RlLCBkZWVwQ29weSwgZGVlcEVxdWFsLCBkZWVwRXh0ZW5kLCBlcnJvclByZWZpeCwgZXh0cmFjdFF1ZXJ5c3RyaW5nLCBnZXREZWZhdWx0QXBwQ29uZmlnLCBnZXREZWZhdWx0RW11bGF0b3JIb3N0LCBnZXREZWZhdWx0RW11bGF0b3JIb3N0bmFtZUFuZFBvcnQsIGdldERlZmF1bHRzLCBnZXRFeHBlcmltZW50YWxTZXR0aW5nLCBnZXRHbG9iYWwsIGdldE1vZHVsYXJJbnN0YW5jZSwgZ2V0VUEsIGlzQWRtaW4sIGlzQnJvd3NlciwgaXNCcm93c2VyRXh0ZW5zaW9uLCBpc0Nsb3VkV29ya3N0YXRpb24sIGlzQ2xvdWRmbGFyZVdvcmtlciwgaXNFbGVjdHJvbiwgaXNFbXB0eSwgaXNJRSwgaXNJbmRleGVkREJBdmFpbGFibGUsIGlzTW9iaWxlQ29yZG92YSwgaXNOb2RlLCBpc05vZGVTZGssIGlzUmVhY3ROYXRpdmUsIGlzU2FmYXJpLCBpc1NhZmFyaU9yV2Via2l0LCBpc1VXUCwgaXNWYWxpZEZvcm1hdCwgaXNWYWxpZFRpbWVzdGFtcCwgaXNXZWJXb3JrZXIsIGlzc3VlZEF0VGltZSwganNvbkV2YWwsIG1hcCwgb3JkaW5hbCwgcGluZ1NlcnZlciwgcHJvbWlzZVdpdGhUaW1lb3V0LCBxdWVyeXN0cmluZywgcXVlcnlzdHJpbmdEZWNvZGUsIHNhZmVHZXQsIHN0cmluZ0xlbmd0aCwgc3RyaW5nVG9CeXRlQXJyYXksIHN0cmluZ2lmeSwgdXBkYXRlRW11bGF0b3JCYW5uZXIsIHZhbGlkYXRlQXJnQ291bnQsIHZhbGlkYXRlQ2FsbGJhY2ssIHZhbGlkYXRlQ29udGV4dE9iamVjdCwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgdmFsaWRhdGVOYW1lc3BhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJjb25zdCBnZXREZWZhdWx0c0Zyb21Qb3N0aW5zdGFsbCA9ICgpID0+ICh1bmRlZmluZWQpO1xuZXhwb3J0IHsgZ2V0RGVmYXVsdHNGcm9tUG9zdGluc3RhbGwgfTsiLCJleHBvcnQgKiBmcm9tICdAZmlyZWJhc2UvYW5hbHl0aWNzJztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuZXhwb3J0ICogZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjExLjguMVwiO1xuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdhcHAnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IHcgYXMgd3JhcCwgciBhcyByZXBsYWNlVHJhcHMgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcbmV4cG9ydCB7IHUgYXMgdW53cmFwLCB3IGFzIHdyYXAgfSBmcm9tICcuL3dyYXAtaWRiLXZhbHVlLmpzJztcblxuLyoqXG4gKiBPcGVuIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIG5hbWUgTmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0gdmVyc2lvbiBTY2hlbWEgdmVyc2lvbi5cbiAqIEBwYXJhbSBjYWxsYmFja3MgQWRkaXRpb25hbCBjYWxsYmFja3MuXG4gKi9cbmZ1bmN0aW9uIG9wZW5EQihuYW1lLCB2ZXJzaW9uLCB7IGJsb2NrZWQsIHVwZ3JhZGUsIGJsb2NraW5nLCB0ZXJtaW5hdGVkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIub3BlbihuYW1lLCB2ZXJzaW9uKTtcbiAgICBjb25zdCBvcGVuUHJvbWlzZSA9IHdyYXAocmVxdWVzdCk7XG4gICAgaWYgKHVwZ3JhZGUpIHtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCd1cGdyYWRlbmVlZGVkJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB1cGdyYWRlKHdyYXAocmVxdWVzdC5yZXN1bHQpLCBldmVudC5vbGRWZXJzaW9uLCBldmVudC5uZXdWZXJzaW9uLCB3cmFwKHJlcXVlc3QudHJhbnNhY3Rpb24pLCBldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQubmV3VmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpIHtcbiAgICAgICAgICAgIGRiLmFkZEV2ZW50TGlzdGVuZXIoJ3ZlcnNpb25jaGFuZ2UnLCAoZXZlbnQpID0+IGJsb2NraW5nKGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIGV2ZW50KSk7XG4gICAgICAgIH1cbiAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4geyB9KTtcbiAgICByZXR1cm4gb3BlblByb21pc2U7XG59XG4vKipcbiAqIERlbGV0ZSBhIGRhdGFiYXNlLlxuICpcbiAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGRhdGFiYXNlLlxuICovXG5mdW5jdGlvbiBkZWxldGVEQihuYW1lLCB7IGJsb2NrZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShuYW1lKTtcbiAgICBpZiAoYmxvY2tlZCkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2Jsb2NrZWQnLCAoZXZlbnQpID0+IGJsb2NrZWQoXG4gICAgICAgIC8vIENhc3RpbmcgZHVlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvVHlwZVNjcmlwdC1ET00tbGliLWdlbmVyYXRvci9wdWxsLzE0MDVcbiAgICAgICAgZXZlbnQub2xkVmVyc2lvbiwgZXZlbnQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiXG5pbXBvcnQgeyBnZXRBbmFseXRpY3MgfSBmcm9tIFwiZmlyZWJhc2UvYW5hbHl0aWNzXCJcblxuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUMtZV9VY3dvRzNNM2NBXzNvd3VkSVBJZ1N5em9ITklDQVwiLFxuICBhdXRoRG9tYWluOiBcInRpbWUtdHJhY2tlci01ZGFlNS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcInRpbWUtdHJhY2tlci01ZGFlNVwiLFxuICBzdG9yYWdlQnVja2V0OiBcInRpbWUtdHJhY2tlci01ZGFlNS5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ3ODQ3Njg2MzUzNlwiLFxuICBhcHBJZDogXCIxOjQ3ODQ3Njg2MzUzNjp3ZWI6YzcxNmExYjEzNDQ3YjM4MWI0MDVmNVwiLFxuICBtZWFzdXJlbWVudElkOiBcIkctNkRHRlI2NlNLRVwiXG59O1xuXG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbmNvbnN0IGFuYWx5dGljcyA9IGdldEFuYWx5dGljcyhhcHApOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QW5hbHl0aWNzIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYW5hbHl0aWNzIl0sInNvdXJjZVJvb3QiOiIifQ==