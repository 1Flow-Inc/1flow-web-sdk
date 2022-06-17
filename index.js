let __frame,__doc;
function init(){
if(typeof window !=="undefined"){
   __frame = window
   __doc = document
}else{
  setTimeout(()=>{ init()},500);
}
}

const __cl = (key) => {
  const __t = __doc.createElement('script');
  __t.setAttribute('data-api-key', `${key}`);
  __t.src = 'https://sdk.1flow.app/js/1flow.js';
  __doc.head.appendChild(__t);
}
const __f = (__ob) => Object.freeze(__ob);
const __st = (action) => {
  setTimeout(action);
}
const __valid = () => { if (typeof __frame !== "undefined" && __frame.glob) { return true } return false }
function __init(key) {
  if (__doc) {
    __cl(key)
  } else {
    __st(() => { __init(key), 10 });
  }
}

const logEvent = (name, pr = {}) => {

  if (__valid()) {
    _1flow.logEvent(name, pr);
  } else {
    __st(() => { logEvent(name, pr), 10 });
  }
}
const on = (__event_name,action) => {
  if (__valid()) {
    _1flow.on(__event_name, action);
  } else {
    __st(() => { on(__event_name, action), 10 });
  }
}
const logUser = (system_id, pr = {}) => {
  if (__valid()) {
    _1flow.logUser(system_id, pr);
  } else {
    __st(() => { logUser(system_id, pr), 10 });
  }
}
const oneFlowInit = (key) => { __init(key); }
const oneflow = __f({
  oneFlowInit: oneFlowInit,
  logEvent: logEvent,
  logUser: logUser,
  on: on
});
init();
module.exports = { oneflow, logUser, logEvent, oneFlowInit }
