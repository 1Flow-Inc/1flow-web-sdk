
import {
  oneFlow_sdk_const
} from "./controllers/constants"
import { C, E,OneflowSDK } from "./controllers/c"

import {
  OneFlowEvent
} from "./controllers/OneFlowEvent"

import {
  F
} from "./controllers/f"
import {
  A
} from "./controllers/a"
import {
    Survey
  } from "./controllers/survey"
  
import {
    DefaultEvents
  } from "./controllers/event"
  
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
  let __in=(window.glob) ? 0 :10
  window.setTimeout(function () {
    if (window.glob) {
      let su = new Survey();
      let d=[];d.push(data)
     if(su.__valid(___ok.s)){ su.trigger_survey(d);}
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

const customEncryptorMethod = (type = 'MWZsb3dfZW5jcnlwdGlvbg==') => {
  const __data = text => text.split('').map(c => c.charCodeAt(0));
  const __data_hex = n => ("0" + Number(n).toString(16)).substr(-2);
  const __apply_salt = code => __data(type).reduce((a, b) => a ^ b, code);

  return text => text.split('')
     .map(__data)
     .map(__apply_salt)
     .map(__data_hex)
     .join('');
}
const customDecryptorMethod = (type = 'MWZsb3dfZW5jcnlwdGlvbg==') => {
  const __data = text => text.split('').map(c => c.charCodeAt(0));
  const __apply_salt = code => __data(type).reduce((a, b) => a ^ b, code);
  return encoded => encoded.match(/.{1,2}/g)
     .map(hex => parseInt(hex, 16))
     .map(__apply_salt)
     .map(charCode => String.fromCharCode(charCode))
     .join('');

}



export const __k = 'data-api-key',
      __t = 'script',
     __cv = '706c6c686b22373779687136297e74776f36796868376e29372a282a2935282e35292d376b6d6a6e7d61356a7d6b6877766b7d377c7d7577',
    ___ok = oneFlow_sdk_const,
     __one_flow_events = new OneFlowEvent(),
    ev = (d) => {
    return d.detail
  },
  Encryptor=customEncryptorMethod(),
  Decryptor=customDecryptorMethod();
w().__1f_path_controllers = 'controllers'
export const empty = (__s) => {
    return (__s == '') ? true : false
  },
  __result = (__d) => {
    return (__d.result) ? __d.result : {}
  },
  _type = (__d) => {
    return (__d) ? typeof __d : '';
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
