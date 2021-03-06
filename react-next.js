const valid = () => {
  if (typeof window !== "undefined" && window.glob) {
    return true
  }
  return false
}
const logEvent = (name, pr = {}) => {
  if (valid()) {
    _1flow.logEvent(name, pr);
  } else {
    setTimeout(() => { logEvent(name, pr) }, 10);
  }
}
const logUser = (system_id, pr = {}) => {
  if (valid()) {
    _1flow.logUser(system_id, pr);
  } else {
    setTimeout(() => { logUser(system_id, pr) }, 10);
  }
}

const on = (__event_name, action) => {
  if (valid()) {
    _1flow.on(__event_name, action);
  } else {
    setTimeout(() => { on(__event_name, action), 10 });
  }
}


module.exports = { logEvent, logUser, on }
