Storage class:-

s:-For save data in localstorage;
g:- get data from localstorage;
r:- remove data from localstorage


Helpers class:-


__storage_data:- For getting local Storage data;
__store_data:- For storing data in local storage;
__valid_data: local storage data exits or not (validation)
__eventTrigger:For trigger custom event after task complete.
__valid: For localstorage save data exits or not (Ex send key user if localstorage have save any data with key return true);
__os: Return current os system.
__browser: Return current __browser name.
__browser_version: Return current browser version.
__screen_details: Return screen inner height and width.


Encryptor class:-

d:- Decrypt data.
e:-Encrypt data.
dp:- parse data(JSON.parse)
ds:- convert object to string (JSON.stringify).


Common class:-

constructor => set constants.
sk => set API key.
gk  => get API key
iv  => validate API key
ar   => validate Array
emptyObj  => check object is empty or not.
ap => join array with ('&').
stcn  => set oneflow contants.
gtcn  => get contants.
er => for default error callback.
c => check value is function or not.
l => for sdk logging(console.log).
getUrl  => get API url.
getHelpers => get helpers intance.


OneflowSDK class- 
set:- set SDK core details.
get: return SDK details.


Init:-

t=> return query selector.
a  => get tag attribute.
w  => return window object.
stGbl  => set data globaly.
oneFlowGlob  => get Oneflow globaly data.
oneFlowEvents  => trigger one flow events.
__cv => store contants URL.
___ok => one flow static contants.
__one_flow_events => One flow custom event class instance.
ev=> return custom events callback data.
empty => check string is empty or not.
__result => return API result data.
_type => retrun variable data type.
init ==> fetch contants ,survey and create Project analytic user.

