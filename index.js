
import {
  oneFlow_sdk_const
} from "./controllers/constants"
import { C, E,OneflowSDK } from "1flow-web-sdk/controllers/c"

import {
  OneFlowEvent
} from "1flow-web-sdk/controllers/OneFlowEvent"

import {
  F
} from "1flow-web-sdk/controllers/f"
import {
  A
} from "1flow-web-sdk/controllers/a"
import {
    Survey
  } from "1flow-web-sdk/controllers/survey"
  
import {
    DefaultEvents
  } from "1flow-web-sdk/controllers/event"
  
import {
    _1flow,
    one_flow_log_user,
    one_flow_events
  } from "./events"
  

/**
 * Global variable and Global functions
 */
const t = (se) => {
  return document.querySelector(se)
}
const __G = window
const a = (__ref, __attr) => {
  return __ref.getAttribute(__attr)
}
const w = () => {
  return __G
}
const stGbl = (d) => {
  __G.glob = d
}

export const oneFlowEvents = (name, data, callback) => {
  let __in = 10;
  window.setTimeout(function () {

    if (window.glob) {
      one_flow_events(name, data)
    } else {
      oneFlowEvents(name, data, callback);
    }
  }, __in);
},
 oneFlowLogUser = (sys, data, callback) => {
  let __in = 10;
  window.setTimeout(function () {
    if (window.glob) {
      one_flow_log_user(sys, data)
    } else {
      oneFlowLogUser(sys, data, callback);
    }
  }, __in);
};

export const __k = 'data-api-key',
      __t = 'script',
     __cv = 'aHR0cHM6Ly9kZXYuMWZsb3cuYXBwL2FwaS92MS8yMDIxLTA2LTE1L3N1cnZleS1yZXNwb25zZS9kZW1v',
    ___ok = oneFlow_sdk_const,
     __one_flow_events = new OneFlowEvent(),
  ev = (d) => {
    return d.detail
  };
w().__1f_path_controllers = 'controllers'
export const empty = (__s) => {
    return (__s == '') ? true : false
  },
  __result = (__d) => {
    return (__d.result) ? __d.result : {}
  },
  _type = (__d) => {
    return typeof __d
  },
  oneFlowGlob = () => {
    return __G.glob
  };

w().__1flow_key = 'one_flow_sdk'
const su = new Survey();

su.__removeData(___ok.__survey.s);
const __enc = new E();
/**
 * SDK INIT Function {fetch contantsm,survey and project analytic user create here}
 */
const __getSurvey = () => {
  su.gs(null, () => {})
}

const __default_events = (__C) => {
  const DE = new DefaultEvents(__C);
  DE.__default_events();
}



const oneFlowInit = function initOneFlow(__a_k) {
  w().__1flow_api_key = __a_k;
  const c = new C(undefined);
  c.sk(__a_k);
  c.v(__a_k);
  const f = new F(__a_k);
  f.gp(__enc.d(__cv)).then((d) => {
    d = __enc.dp(d);
    const oneflowsdk = new OneflowSDK();
    c.stcn(d);
    let ___an = c.gtcn()
    ___an.sdk = oneflowsdk.get();
    ___an._k = __a_k
    c.stcn(___an);
    stGbl(c);
    const au = new A(___an.m);
    const ___d = au.rd();
    ___d.mode = ___an.m;
    if (!c.emptyObj(su.__storage_data(___ok.s))) {
      oneFlowEvents(___ok.__events.s);
    }

    if (au.av()) {
      f.req(___an.au.au_url, ___ok.__request.p, (dr) => {
        au.s(dr);
        __getSurvey();
        __default_events(___an);
        __g_c = true
      }, (e) => {
        c.l(___ok.er, e)
      }, __enc.ds(___d));
    } else {
      __getSurvey();
      __default_events(___an)
    }
  });
}
export {
  oneFlowInit,
  _1flow
}
