const __keys = {
    u: 'user',
    s: 'session',
    ano: 'anonymous_user',
    an: 'anonymous_user_id',
    sid: 'system_id',
    s_id: "session_id",
    m: "mode",
    l: 'log_user',
    au: "analytic_user_id",
    did: "device_id",
    uid: "unique_id",
    cs: "cs_url",
    lu: "lu_url",
    ie: "ev_url",
    time:{
        m:"minutes",
        h:"hours",
        d:"days"
    },
    sr:{
        s:"survey",
        sc:"current_survey",
        ls:"last_submitted",
        api:"add_survey",
        g_api:"su_url"
    },
    elements:{
        __root:"one_flow_survey_preview",
        __in_root:{
            id:"oneflow_main_box",
            class:"one-flow-rating-box"
        },
        __type:{

        },
        __star_path:"M14.5514 2.11622C15.0362 0.627928 17.1417 0.627928 17.6249 2.11622L20.0795 9.66916C20.1852 9.99314 20.3905 10.2754 20.6662 10.4757C20.942 10.6759 21.2739 10.7839 21.6147 10.7842H29.5571C31.1229 10.7842 31.7725 12.7879 30.5073 13.709L24.0822 18.3759C23.8062 18.5765 23.6008 18.8594 23.4955 19.1839C23.3901 19.5085 23.3902 19.858 23.4956 20.1825L25.9487 27.7355C26.4334 29.2254 24.7286 30.4632 23.4633 29.5421L17.0383 24.8752C16.7622 24.6745 16.4295 24.5664 16.0881 24.5664C15.7467 24.5664 15.4141 24.6745 15.138 24.8752L8.71294 29.5421C7.44765 30.4632 5.74283 29.2238 6.22761 27.7355L8.68062 20.1825C8.78611 19.858 8.78617 19.5085 8.6808 19.1839C8.57542 18.8594 8.37003 18.5765 8.09403 18.3759L1.66902 13.709C0.402114 12.7879 1.05496 10.7842 2.6192 10.7842H10.56C10.901 10.7843 11.2333 10.6764 11.5094 10.4762C11.7854 10.2759 11.991 9.99341 12.0967 9.66916L14.5514 2.11622V2.11622Z"
    },
    _e: {
        c: "create_event",
        l: "log_user",
        s: "create_session",
        e: "log_event",
        tr:"oneflow_event_trigger",
        d:"default_events",
        cu:"create_user"
    },
    _r: {
        p: "POST",
        g: "GET"
    },
    er: "error",
    br: ['chrome', 'firefox', 'safari', 'opera', 'edge'],
    os: ['windows', 'mac', 'ios'],
    msg: {
        __e: {
            _ar: "This is not valid event data.",
            _rn: "Event name is required"
        }
    },
    answers: "answer",
    default_events:{
        events:['first_visit','page_view','button_click',"session_start","survey_impression"],
        __l_events:['first_visit','page_view',"session_start"],
        __es:"complete_events"
    },
    temp:"one_flow_temp_data",
    _urlImg_CSS:"./",
    _js_css_root:"OneFlow-stylesheet"

}
/**
 * __p stand for post/get
 * __ stands for storage key
 */
const oneFlow_sdk_const = {
    __lg: [__keys.u, __keys.s],
    __p_log: [__keys.an, __keys.sid, __keys.s_id, __keys.m, __keys.l],
    _a_user: [__keys.au, __keys.sid, __keys.did, __keys.uid],
    cs: __keys.cs,
    lu: __keys.lu,
    ie: __keys.ie,
    u: __keys.u,
    s: __keys.s,
    m: __keys.m,
    ano: __keys.ano,
    __events: __keys._e,
    __request: __keys._r,
    er: __keys.er,
    br: __keys.br,
    os: __keys.os,
    msg: __keys.msg,
    __survey:__keys.sr,
    __element:__keys.elements,
    __answer:__keys.answers,
    __time:__keys.time,
    __d_events:__keys.default_events,
    __temp:__keys.temp,
    _urlImg_CSS:__keys._urlImg_CSS,
    _js_css_root:__keys._js_css_root
}

exports = oneFlow_sdk_const;class OneFlowEvent {
    events = [];
    /**
     * 
     * @param {String} __key   Event Name 
     * @param {Object} _data  (data)
     * @param {function} action Callback 
     * @returns Event Object
     */
    add = (__key, _data, action) => {
        let event = new CustomEvent(__key, {
            detail: _data
        });
        if (this.validFunction(action)) {
            this.addEventListener(__key, action);
        }
        this.events.push(event);
        return event;
    }
    /**
     * 
     * @param {String} __event  Event Name 
     */
    emit = (__event,__rm) => {
        document.dispatchEvent(this.currentEvent(__event));
        if(__rm){
            this.removeEvent(__event);
        }
    }
    /**
     * 
     * @param {String} __key  event name
     * @returns Object Event 
     */
    currentEvent = (__key) => {
        return this.events.find((event) => event.type === __key)
    }
    /**
     * 
     * @param {Object} event  Event Object
     */
    removeCurrentEvent = (event) => {
        let index = this.events.indexOf(event);
        this.events.splice(index, 1);
    }
    /**
     * 
     * @param {String} __key    Event name
     * @param {Function} __a    Event call back
     */
    addEventListener = (__key, __a) => {
        document.addEventListener(__key, __a);
    }
    /**
     * 
     * @param {String} __event  Event name
     */
    removeEvent = (__event) => {
        removeEventListener(this.currentEvent(__event), this.handleFileEmail, false);
        this.removeCurrentEvent(this.currentEvent(__event));
    }
    /**
     * 
     * @param {String} _event   Event Name
     * @returns Boolean
     */
    validEvent = (_event) => {
        return (this.events.find((event) => event.type === _event)) ? true : false;
    }
    /**
     * 
     * @param {*} f  
     * @returns Boolean | check if object is function
     */
    validFunction = (f) => {
        return f instanceof Function
    }
}
exports = OneFlowEvent;// E => Encryptor
// C => Common Handler
// OneflowSDK=> read config.json

class E {
    constructor(__cn) {
        this.__cn = __cn;
    }
    /**
     * 
     * @param {*} __v value
     * @returns Decrypt String
     */
    d = (__v) => {
        if(__v !=''){
            return atob(__v)
        }
        return this.ds({});
       
    }
    /**
     * 
     * @param {*} __v value
     * @returns encrypt String
     */
    e = (__v) => {
        return btoa(__v)
    }
    /**
     * 
     * @param {Object String} __v 
     * @returns Object 
     */
    dp = (__v) => {
        return JSON.parse(__v)
    }
    /**
     * 
     * @param {Object || ARRAY } __v 
     * @returns String
     */
    ds = (__v) => {
        return JSON.stringify(__v)
    }
    static d = (__v) => {
        return atob(__v)
    }
}
class C extends E {
    __a_k_valid = '1FLOW API key is required'
    __key = null
    __cn
    constructor(__cn) {
        super(__cn);
        this.stcn(__cn)
    }
    /**
     * 
     * @param {String} __v API KEY
     */

    v = (__v) => {
        this.iv(__v);
    }
    /**
     * 
     * @param {String} __key API KEY
     */
    sk = (__key) => {
        this.__key = __key;
    }
    /**
     * 
     * @returns String (API KEY)
     */
    gk = () => {
        return this.__key;
    }
    /**
     * 
     * @param {String} k API key 
     * @returns Boolean
     */
    iv = (k) => {
        if (!k && k == '') {
            this.l('e', this.__a_k_valid);
            return false
        }
        return true
    }
    /**
     * 
     * @param {Any || Array} _ar Validation Array
     * @returns Boolean
     */
    ar = (_ar) => {
        return Array.isArray(_ar);
    }
    /**
     * 
     * @param {Object} __ob 
     * @returns Boolean
     */
    emptyObj = (__ob) => {
        return Object.keys(__ob).length ? true : false
    }
    /**
     * 
     * @param {Array} p 
     * @returns string
     */
    ap = (p) => {
        return p.join('&');
    }
    su = (d) => {
        return d;
    }
    /**
     * 
     * @param {Object} d Setting constants
     */
    stcn = (d) => {
        if (d && d.result) {
            this.__cn = this.e(this.ds(d.result.data))
        } else if (d) {
            this.__cn = this.e(this.ds(d))
        }
    }
    /**
     * 
     * @returns Object || Contants
     */
    gtcn = () => {
        return this.dp(this.d( this.__cn));
    }
    /**
     * 
     * @param {String} m  Error message
     */
    er = (m) => {
        this.l('e', m)
    }
    /**
     * 
     * @param {Any & function} f Validating function
     * @returns Boolean
     */
    c = (f) => {
        return f instanceof Function
    }
    /**
     * 
     * @param {String} t type[e,error,l,log,warn,w]
     * @param {String} m 
     */
    l = (t, m) => {
        switch (t) {
            case 'e':
            case 'error':
                console.error(`ONEFLOW SDK ERROR: ${m}`);
                break;
            case 'l':
            case 'log':
                console.log(`ONEFLOW SDK: ${m}`);
                break;
            case 'w':
            case 'warn':
                console.warn(`ONEFLOW SDK Warn: ${m}`);
                break;
            default:
                console.log(`ONEFLOW SDK: ${m}`);
                break;
        }
    }
    /**
    * 
    * @param {el} el  element Name
    * @param {attr} attr  element Name
    * @returns  create element and set attributes in this 
    */
    ce = (el, attr) => {
        if (el == null) {
            Object.keys(attr).forEach((__key) => {
                document.documentElement.setAttribute(__key, attr[__key]);
            });
            return null;
        }
        let el1 = document.createElement(el);
        Object.keys(attr).forEach((__key) => {
            if (__key == 'titleContent') {
                el1.textContent = attr[__key];
            } else {
                el1.setAttribute(__key, attr[__key]);
            }
        });
        return el1;
    }
    /**
    * 
    * @param {el} el  element Name
    * @returns  get element by Id 
    */
    gE = (el) => {
      
        if(document.getElementById(el) == null && document.getElementById(___ok.__element.__root) == null && el == ___ok.__element.__in_root.id){
          let new_el=  this.ce('div',{id:___ok.__element.__root});
          document.body.appendChild(new_el);
          let ap_el=this.ce("div",___ok.__element.__in_root)
          let ap_el_o=this.ce("div",{id:"one_flow_over_lay"});
          let n=this.gE(___ok.__element.__root)
          n.appendChild(ap_el_o);
          n.appendChild(ap_el);
          return ap_el;
        }else if(document.getElementById(el) == null && el == ___ok.__element.__in_root.id){
            let ap_el=this.ce("div",___ok.__element.__in_root)
            let n=this.gE(___ok.__element.__root)
            n.appendChild(ap_el);
            return ap_el;
        }else{
            return document.getElementById(el);
        }
        
    }
    /**
     * 
     * @param {el} el  element Name
     * @returns  get element by class name 
     */
    gEC = (el) => {
        return document.getElementsByClassName(el);
    }
    /**
     * 
     * @param {prop} prop property Name
     * @param {propVal} propVal property  Value
     * @returns  set property 
     */
    sP = (prop, propVal) => {
        return document.documentElement.style.setProperty(prop, propVal);
    }
    /**
    * 
    * @param {lN} lN listener Name
    * @param {lM} lM listener method
    * @returns  add event listener   
    */
    rL = (lN, lM) => {
        return removeEventListener(lN, lM);

    }
    /**
     * 
     * @param {eL} eL element
     * @param {lN} lN listener Name
     * @returns  add event listener   
     */
    aL = (eL, lN, callback) => {
        return eL.addEventListener(lN, callback);

    }
    /**
     * 
     * @param {callback} callback calllback
     * @returns {tL} timout   
     */
    sT = (callback, tL) => {
        return setTimeout(callback, tL);;

    }
    /**
    * 
    * @param {sl} sl selector name
    * @returns Get selector  
    */
    gQS = (sl) => {
        return document.querySelector(sl);

    }
    /**
   * 
   * @param {el} el element
   * @returns Get element by  name
   */
    gEN = (el) => {
        return document.getElementsByName(el);
    }
    /**
      * 
      * @param {el} el element
      * @returns Get element by tag name
      */
    gETN = (el) => {
        return document.getElementsByTagName(el);
    }
    static gtcn = () => {
        return this.__cn
    }
    /**
     * 
     * @param {String} _key url key 
     * @returns String API url
     */
    getUrl = (_key,m='') => {
        const URL = this.gtcn()
        let url=URL.au[_key]

        if(m !==''){
            url=`${url}?mode=${m}`;
        }
        return url
    }
    /**
     * 
     * @returns Helpler class Object
     */
    getHelpers = () => {
        return new OneFlowHelpers();
    }
    /**
   * Trying for saving survey on loading, refreshing or closing window but not worked yet
   * @returns Survey  Class object 
   */
    getSurveyHelpers = () => {
        return new Survey();
    }
    /**
     * 
     * @param {*} __t String | HOST | WHOLE_UR | PAGE NAME ONLY
     * @returns String 
     */
    getCurrentHost=(__t)=>{
        let __l=window.location;
        if(__t == 'host'){
            return  __l.origin
        }
        if(__t == 'whole_url'){
            return  __l.href
        }
        if(__t == 'page_only'){
            return  __l.pathname
        }
         
    }
    /**
     * 
     */
    appendOneFlowStyle=()=>{
        if(this.gE(___ok._js_css_root) == null){
            const __attr={
                href:`${___ok._urlImg_CSS}style.css`,
                id:___ok._js_css_root,
                rel:'stylesheet'
            }
            let el=this.ce('link',__attr);
            document.head.appendChild(el);
        }
        
    }

}
/**
 * SDK CORE DETAILS CLASS
 */
class OneflowSDK extends C {
    sdk_details = {
        app_version: "1.1",
        app_build_number: "0987",
        library_version: "1",
        api_version: "2021-06-15"
    }
    constructor() {
        super()
        this.r = new F('');
    }
    /**
     * 
     * @param {Object} sdk_details  Set Sdk Details
     */
    set = (sdk_details) => {
        this.sdk_details = sdk_details
    }
    /**
     * 
     * @returns return SDK Details
     */
    get = () => {
        return this.sdk_details;
    }
}
exports = E;
exports = C;
exports = OneflowSDK;/**
 * CREATE USER SESSION
 */
class Session extends C {
    sdk_version = {};
    constructor(__con) {
        super(__con);
        this.sdk_version = this.gtcn().sdk;
        this.mode = this.gtcn().m
        this.u = this.getUrl(___ok.cs);
        this.__helpers = this.getHelpers();

    }
    /**
        @param  {}
        @return OBJECT (CREATE SESSION API DATA).
    */
    rd = () => {
        const au = this.getUser()
        au.device = this.getDevices();
        au.connectivity = this.getConnectivity()
        au.app_version = this.sdk_version.app_version
        au.app_build_number = this.sdk_version.app_build_number
        au.library_version = this.sdk_version.library_version
        au.api_version = this.sdk_version.api_version
        au.mode = this.mode
        au.location_check = true
        return au
    }

    /**
        @param {String} key "1FLOW PROJECT API KEY"
    */

    add = (__KEY) => {
        const request = new F(__KEY);
        const d = this.rd();
        // 'https://dev.1flow.app/api/v1/2021-06-15/sessions' this.u
        request.req(this.u, ___ok.__request.p, (_d) => {
            this.save(_d);
        }, (err) => {
            this.l(___ok.er, err)
        }, this.ds(d));
    }
    /**
     @param {}
     @return Object contain devices details.
    */
    getDevices = () => {
        return {
            os: this.__helpers.__os(),
          // carrier: 'airtel', ////for dev only
             carrier: null,
            manufacturer: this.__helpers.__browser(),
            model: this.__helpers.__browser(),
            os_ver: this.__helpers.__browser_version(),
            screen_width: this.__helpers.__screen_details('width'),
            screen_height: this.__helpers.__screen_details('height'),
            unique_id: this.uid,
            device_id: this.did
        }
    }

    /**
       @param {} ''
       @return Object current anayltic user
    */
    getUser = () => {
        let user = this.__helpers.__storage_data(___ok.u)
        this.uid = user.uid;
        this.did = user.did;
        return {
            analytic_user_id: user.au,
            system_id: user.sid
        };
    }
    /**  
    @param {},
    @return Object current connectivity
    */
    getConnectivity = () => {
        return {
            radio: 'wireless'
        }
    }

    /**
     @param {data string} __d {session data }
     @return Boolean
    */
    save = (__d) => {
        let _fd = __result(this.dp(__d));
        const _f = {
            s_id: _fd._id
        }
        this.__helpers.__store_data(___ok.s, _f);
        this.__helpers.__eventTrigger(___ok.__events.l,true);
        this.__helpers.__eventTrigger(___ok.__events.e,true);
        this.__helpers.__eventTrigger(___ok.__d_events.events[3],true);
    }
    /**
        @param {}
        @return Object session user 
    */
    get = () => {
        return this.__helpers.__storage_data(___ok.s)
    }
    /**
        @params {} validating session user
        @return Boolean 
    */
    __valid = () => {
        return this.emptyObj(this.get())
    }



}

exports = Session;/**
 * STORAGE CLASS FOR ONE FLOW SDK
 */
class S extends C {
    constructor() {
        super()
        this.l = localStorage;
    }
    /**
     * 
     * @param {String} _k 
     * @param {Object} _d 
     */
    s(_k, _d) {
        this.l.setItem(_k, this.ds(_d))
    }
    /**
     * 
     * @param {String} _k 
     * @returns Object
     */
    g(_k) {
        return this.dp(this.l.getItem(_k))
    }
    /**
     * 
     * @param {String} _k 
     */
    r(_k) {
        this.l.removeItem(__k);
    }

}

/**
 * Class For SDK HELPER FUNCTION CREATE IN THIS CLASS
 */
class OneFlowHelpers extends S {
    key = window.__1flow_key
    constructor() {
        super();
    }
    /**
     * 
     * @param {String} __key   
     * @param {Object} __data object
     * @returns OBJECT  Merge data with localstorage data
     */
    merge_data = (__key, __data) => {
        let __d = this.__valid_data();
        let fd = {}
        if (!__d) {
            fd[__key] = __data
        } else {
            __d = this.dp(this.d(__d));
            fd = {
                ...__d
            }
            fd[__key] = __data
        }
        return fd
    }
    /** 
     * @param {String && Array} __key   {get save data with specfic object }
     * @returns OBJECT 
     */
    __storage_data = (__key) => {
        let __d = this.g(this.e(this.key));
        if (!__d || empty(__key)) return {};
        __d = this.dp(this.d(__d));
        if (_type(__key) == 'string') {
            return (__d[__key]) ? __d[__key] : {}
        }
        if (_type(__key) == 'object' && __key.length) {
            let __fd = {};
            __key.map((d) => {
                __fd = {
                    ...__fd,
                    ...__d[d]
                }
            });
            return (__fd) ? __fd : {}
        }

        return {}
    }
    /**
     * 
     * @param {*} __key string
     * @returns 
     */
    __removeData=(__key)=>{
        let __d = this.g(this.e(this.key));
        if (!__d || empty(__key)) return {};
        __d = this.dp(this.d(__d));
        if (_type(__key) == 'string' && __d[__key]) {
            delete __d[__key]
        }
        this.s(this.e(this.key), this.e(this.ds(__d)));

    }
    /**
     * 
     * @param {String} __key  (key)
     * @param {Object} __d   (value)
     *
     */
    __store_data = (__key, __d) => {
        if (empty(__key) || empty(__d)) {
            return false
        }
        let __sd = this.merge_data(__key, __d);
        this.s(this.e(this.key), this.e(this.ds(__sd)))

    }
    /**
    * 
    * @param {String} __key  (key)
    *
    */
    __remove_data = (__key) => {
        let __d = this.__valid_data();
        if (!__d || empty(__key)) return {};
        __d = this.dp(this.d(__d));
        delete __d[__key];
        this.s(this.e(this.key), this.e(this.ds(__d)))
    }
    /**
     * @param {} 
     * @returns Boolean 
     */
    __valid_data = () => {
        return this.g(this.e(this.key));
    }
    /**
     * 
     * @param {String} _event_name Trigger event name
     */
    __eventTrigger = (_event_name,__rm=false) => {
        if (__one_flow_events.validEvent(_event_name)) {
            __one_flow_events.emit(_event_name,__rm);
        }
    }
    /**
     * 
     * @param {String} __key   Local Storage data key
     * @returns Boolean
     */
    __valid = (__key) => {
        return this.emptyObj(this.__storage_data(__key));
    }

    /**
     * 
     * @returns STRING CURRENT OS SYSTEM
     */

    __os = () => {
        if (window.navigator.userAgent.indexOf("Win") != -1) {
            return ___ok.os[0];
        }
        if (window.navigator.userAgent.indexOf("Mac") != -1) {
            return ___ok.os[1];
        }
        if (window.navigator.userAgent.indexOf("X11") != -1) {
            return ___ok.os[0];
        }
        if (window.navigator.userAgent.indexOf("Linux") != -1) {
            return ___ok.os[0];
        }
        return ___ok.os[0];
    }
    /**
     * 
     * @returns String || current browser
     */
    __browser = () => {
        let __ug = navigator.userAgent;
        let __b = 'window';
        if (__ug.match(/chrome|chromium|crios/i)) {
            __b = ___ok.br[0];
        } else if (__ug.match(/firefox|fxios/i)) {
            __b = ___ok.br[1];
        } else if (__ug.match(/safari/i)) {
            __b = ___ok.br[2];
        } else if (__ug.match(/opr\//i)) {
            __b = ___ok.br[3];
        } else if (__ug.match(/edg/i)) {
            __b = ___ok.br[4];
        }
        return __b
    }
    /**
     * 
     * @returns current browser version
     */
    __browser_version = () => {
        var __u = navigator.userAgent;
        var __tem;
        var M = __u.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(M[1])) {
            __tem = /\brv[ :]+(\d+)/g.exec(__u) || [];
            return 'IE ' + (__tem[1] || '');
        }
        if (M[1] === 'Chrome') {
            __tem = __u.match(/\b(OPR|Edge)\/(\d+)/);
            if (__tem != null) return __tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((__tem = __u.match(/version\/(\d+)/i)) != null) M.splice(1, 1, __tem[1]);
        return M.join(' ');
    }
    /**
         @param {String} type [height,width]
        */
    __screen_details = (type) => {
        return (type == 'width') ? w().innerWidth : w().innerHeight
    }
}
exports = OneFlowHelpers;
exports = S;class F extends S {
    constructor(_key) {
        super()
        this.__key = _key
        this.__r = new XMLHttpRequest();
    }
    /**
     * 
     * @param {*} u  URL
     * @param {*} t  type
     * @param {*} s  success callback
     * @param {*} e  error callback
     * @param {*} d  payload
     * 
     */
    req = (u, t, s, e, d = {}) => {
        const __r = this.__r;
        switch (t) {
            case 'GET': {
                this.get(__r, u, s, e);
                break;
            }
            case 'POST': {
                this.post(__r, u, d, s, e);
                break;
            }
            default: {
                this.get(__r, u, s, e);
            }
        }
    }

    /**
     * 
     * @param {XMLHTTPRequest object} __r XMLHTTPRequest
     * @param {string} u url
     * @param {function} s sucess callback
     * @param {function} e error callback
     */
    get = (__r, u, s, e) => {
        __r.onreadystatechange = () => {
            if (__r.readyState == 4 && __r.status == 200) {
                if (this.c(s)) {
                    s(__r.responseText);
                }
            } else if (__r.readyState > 4) {
                if (this.c(e)) {
                    e(__r.statusText);
                }
            }
        };
        __r.open('GET', u);
        __r.setRequestHeader("one_flow_key", this.__key);
        __r.send();
    }

    /**
     * 
     * @param {*} u URL
     * @returns Promise<ResponseText>
     */
    gp = (u) => {
        return new Promise((resolve, reject) => {
            this.__r.onreadystatechange = () => {
                if (this.__r.readyState == 4 && this.__r.status == 200) {
                    resolve(this.__r.responseText)
                } else if (this.__r.readyState > 4) {
                    reject(this.__r.statusText);
                }
            };
            this.__r.open('GET', u);
            this.__r.setRequestHeader("one_flow_key", this.__key);
            this.__r.send();
        })
    }

    /**
     * 
     * @param {*} __r XMLHTTPRequest
     * @param {*} u URL
     * @param {*} d payload
     * @param {*} s success callback
     * @param {*} e error callback
     */
    post = (__r, u, d, s, e) => {
    
        const data = (this.emptyObj(d))? this.dp(d):{}
        data.web = true
        data.one_flow_key = this.__key
        var requestOptions = {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: this.ds(data),
        };
         fetch(u, requestOptions)
            .then(response => {
                if(response.status == 200){
                    return response.text();
                }else{
                    throw 'Something went wrong' || ""
                }   
            })
            .then((result) => {
                s(result);
            })
            .catch(error => {
                console.log(error.message)
                e(error.message || "")
            });
    }
}
exports = F;/**
 This is for the animations
*/
class An extends OneFlowHelpers {
    constructor() {
        super()
    }
    /**
     @param {*} __el this is for the element
    */
    _sUp = (__el) => {
        let _elem = this.gE(__el);
        if (_elem) {
            _elem.style.transition = "all 2s ease-in-out";
            _elem.style.bottom = "0px";
            this.sT(() => this._effect(), 50);
            if (_elem.classList.contains("removeEffect")) _elem.classList.remove("removeEffect")
            else this.sT(() => { _elem.classList.add("removeEffect") }, 1)
            this.__rm_el(_elem);
        }
    }
    /**
     @param {*} __el this is for the element
     @param {*} __ty add or remove Effect
     @return To add class on all elements
    */
    _sTE = (__el, __ty) => {
        let _elem = this.gE(__el);
        if (_elem) _elem.classList.add(__ty === 'add' ? "effectapply" : "removeEffect");
    }
    /**
    @param {*} __ty add or remove Effect
    */
    _effect = (__ty) => {
        let ids = ['show', 'exp', 'button_list', 'like_unlike', 'wtr_mrk', 'finish_text'];
        for (let i = 0; i < ids.length; i++) {
            let t = 200 * (i + 1);
            this.sT(() => { this._sTE(ids[i], 'add') }, t)
        }
    }
    /**
       Display effect  tag that has id finish 
    */
    _sIT = () => {
        let _elem = this.gE("finish");
        if (_elem) _elem.classList.add("effectapply");
    }
    /**
    @param {*} __el current element
    */
    _sD = (__el) => {
        let elem = this.gE(__el);
        if (elem) {
            elem.style.transition = "all 2s ease-in-out";
            this.sT(() => { this._rAll(); elem.classList.add("removeEffect");this.__rm_el(elem)}, 1)
        }
    }

    __rm_el=(element)=>{
        if(this.__screen_details('width') > 600){
        if(element.classList.contains('removeEffect')){
            this.sT(()=>{element.remove();},500);
        }else{
            this.sT(()=>{this.__rm_el(element) ;},100);
         
        }
    }
       
    }
    /**
  @return {*} remove color from button
  */
    _rCB = () => {
        let elmnt = this.gE("finish");
        elmnt.classList.remove("removeEffect");
        this.sT(() => { elmnt.classList.add("effectapply") }, 500)

    }
    /**
    Remove effect from all tags
  */
    _rAll = () => {
        let lights = this.gEC("effectapply");
        while (lights.length)
            lights[0].classList.remove("effectapply");

    }
    /**
     @param {*} __in index
     @param {*} __el element
     @return {*} add hover on star
    */
    addHover = (__in) => {

        for (let i = 1; i <= 5; i++) {
            if(i <= __in){
                let __e = this.gE("class_active_" + i);
                __e.classList.add("rating-active");
            }else{
                let __e = this.gE("class_active_" + i);
                __e.classList.remove("rating-active");
            }
          
        }
    }

    CustomFadeIn=(__interval,__opacity,_el)=>{
        let element=this.gE(_el);
        var op = 0.1;
        let __in = setInterval(function () {
            if (op >= __opacity){
                element.style.opacity = __opacity;
                clearInterval(__in);
               
            }
            element.style.opacity = op;
           // element.style.filter = 'opacity=' + op * .20 ;
            op += (op * 0.100).toFixed(2);;
        }, __interval);
    }

    CustomFadeOut=(__interval,__opacity,_el)=>{
        let element=this.gE(_el);
        var op = __opacity;
        if(this.__screen_details('width') < 600){
        let __in_out = setInterval(function () {
          
            if (op <= 0.04){
                element.style.opacity = op;
                let _el=document.getElementById(___ok.__element.__root)
                _el.remove();
                clearInterval(__in_out); 
            }
            
           // element.style.filter = 'opacity=' + op * .20 ;
            op -= (op * 0.100).toFixed(2);
            op=op.toFixed(2);
        }, __interval);
    }
    }
}
exports = An;class surveySubmission extends An {
    constructor() {
        super();
        this.answers = [];
        this.obj = {};
        this.checkBoxAnswer = [];

    }
    /**
      @params {key} key i.e. object property name
      @params {value} value i.e. object property value
      @return prepare object
    */
    generateProperty = (key, value) => {
        if (key === 'answerObj') {
            let _fI =   this.answers.filter(x=>x.screen_id === value.screen_id );
            if (_fI.length == 0) this.answers.push(value);
            let data = this.e(this.ds(this.answers));
            this.__store_data(___ok.__answer, data);
        }
        else this.obj[key] = value;
        return this;
    }
    /**
       @params _e _e element
       @return to prepare answer object
   */
    createObj = (keyValueStringArray) => {
        this.generateProperty.apply({}, keyValueStringArray);
    }
    /**
           @params _e _e element
           @return to prepare answer object
       */
    ansObj = (_e) => {
        //_gA for getting attribut  for screen index
        let _gA = _e.target.getAttribute('data_attr');
        //this is for nps, rating numerical,rating 1-5
        if (_e.target.tagName === 'BUTTON' && _e.target?.previousElementSibling?.nodeName?.toUpperCase() !== 'UL') {
            let _htmlContent = '';
            if (_e.target.tagName === 'BUTTON' && _e.target?.firstChild?.nodeName?.toLowerCase() === 'img') {
                _htmlContent = _e.target.firstChild.id;
            }
            else _htmlContent = _e.target.classList.value.indexOf("finish") !== -1 ? _e.target.previousElementSibling.firstElementChild.value : _e.target.innerHTML;
            if (_htmlContent !='' && _htmlContent.length !== 0) this.createObj(["answerObj", { 'screen_id': `${_gA}`, 'answer_value': _htmlContent }]);
        }
        //this is for input type radio , img,path
        else if (_e.target.tagName.toUpperCase() === 'INPUT' && _e.target.type.toUpperCase() === 'RADIO') {
            this.createObj(['answerObj', { 'screen_id': `${_gA}`, 'answer_index': _e.target.id }]);
        }
        //this is for input type img , span
        else if (_e.target.tagName.toLowerCase() === 'path' || _e.target.tagName.toLowerCase() === 'img') {
            this.createObj(['answerObj', { 'screen_id': `${_gA}`, 'answer_value': _e.target.id }]);
        }
        //this is for input type checkboxes and this is for multiple selections
        else if (_e.target.tagName === 'BUTTON' && _e.target.previousElementSibling.nodeName.toUpperCase() === 'UL') {
            let _gEN = this.gEN('check');
            for (var i = 0; i < _gEN.length; i++) {
                if (_gEN[i].checked) {
                    if (this.checkBoxAnswer.indexOf(_gEN[i].id)=== -1)  this.checkBoxAnswer.push(_gEN[i].id) ;
                }
                else {
                    let _index = this.checkBoxAnswer.indexOf(_gEN[i].id);
                    if (_index !== -1) {
                        this.checkBoxAnswer.splice(_index, 1);
                    }
                }
                if (i === _gEN.length - 1) this.createObj(['answerObj', { 'screen_id': `${_gA}`, 'answer_index': this.checkBoxAnswer.toString() }]);

            }
            this.showHideFinish()
        }

        else if (_e.target.tagName.toUpperCase() === 'INPUT' && _e.target.type.toUpperCase() === 'CHECKBOX') {
            let _gEN = _e.target.id;
            if (_gEN) {
                let _index = this.checkBoxAnswer.indexOf(_gEN);
                if (_index === -1) this.checkBoxAnswer.push(_gEN);
                else this.checkBoxAnswer.splice(_index, 1);
            }

            this.showHideFinish()
        }

        //for getting next survey
        if (!(_e.target.tagName.toUpperCase() === 'INPUT' && _e.target.type.toUpperCase() === 'CHECKBOX')) {
            this.sT(() => { this.gNS(_gA); }, 500);

        }
    }
    showHideFinish = () => {
        let el = this.gE('finish');
        if (this.checkBoxAnswer.length !== 0) {
            el.classList.add("displayFinsih");
        } else {
            el.classList.remove("displayFinsih");
        }
    }
    /**
       @params survey_id __key "1FLOW PROJECT API KEY"
       @return Boolean
   */
    addSurvey = (survey_id, trigger_event) => {
        let u = this.__storage_data([___ok.s, ___ok.u]);
        let $this = oneFlowGlob(); //get one flow key
        const request = new F($this.__key);
        let __answer = this.__storage_data(___ok.__answer);
        if ($this.emptyObj(__answer)) {
            this.answers = this.dp(this.d(__answer));
        }
        //check data exists in local storage or not
        if (this.answers.length !== 0) {
            //Creating survey object to save data
            this.createObj(["survey_data", {
                "survey_id": survey_id, "os": this.__os(), "analytic_user_id": u.au,
                "session_id": u.s_id, "trigger_event": trigger_event, "answers": this.answers
            }]);
            //USED CONSTANT FOR F
            request.req($this.getUrl(___ok.__survey.api), ___ok.__request.p, (dr) => {
                this.__remove_data(___ok.__answer);
                 this.__ls();
                 
            }, (e) => { this.l(___ok.er, e) }, JSON.stringify(this.obj["survey_data"]));
        }
    }

    __ls=(rm=true)=>{
        let __c_s=this.__storage_data([___ok.__survey.sc,___ok.__survey.ls]);
        const __s=__c_s.survey_settings
        let __rs=(__s.resurvey_option)? this.__cl_time(__s.retake_survey) :null
        let __lst=(__c_s.__ls)?__c_s.__ls:[];
        __lst=this.__rm_ls(__lst,__c_s._id);
        __lst.push({id:__c_s._id,lt:__rs});
        this.__store_data(___ok.__survey.ls,{__ls:__lst});
        if(rm){ this.__removeData(___ok.__survey.sc); }
      
        let __answer = this.__storage_data(___ok.__answer);
    }

    __rm_ls=(__ls,id)=>{
        if(__ls.length > 0){
            __ls= __ls.filter((s) => s.id !== id);
        }
        return __ls
    }

    __cl_time=(__d)=>{
       let __fd=this.__timestarp(__d.retake_input_value,__d.retake_select_value);
        return __fd
    }
    __timestarp=(__d,__t)=>{
        const __cd= new Date();
        switch(__t){
            case ___ok.__time.m:   
              return new Date(__cd.getTime() + __d*60000).getTime();
            case ___ok.__time.h:   
            return new Date(__cd.getTime() + __d*60*60000).getTime();
            case ___ok.__time.d:   
            return new Date(__cd.getTime() + __d*24*60*60000).getTime();
            default :
            return new Date(__cd.getTime() + __d*24*60*60000).getTime();
        }
    }
}class Survey extends surveySubmission {
    constructor() {
        super();
        this.currentSurvey = {};
        this.__request=false
    }

    /**
    @param {*} __sKey this could be either Id,Name,Description
    @return {*} returning list of surveys and saving in localstorage.
    */
    gs = (__sKey, callback) => {
        let $this = oneFlowGlob();
        const request = new F($this.__key);
        this.appendOneFlowStyle()
        request.req($this.getUrl(___ok.__survey.g_api,$this.gtcn().m), ___ok.__request.p, (d) => {
            this.__store_data(___ok.__survey.s, __result(this.dp(d)))
            const _r = __result(this.dp(d));
            this.__eventTrigger(___ok.__events.tr);
            if (__sKey && _r.length !== 0) {
                let __sur = this.rS(_r, __sKey);
                this.__store_data(___ok.__survey.sc, __sur);
                this.__eventTrigger(___ok.__events.tr);

                callback(__sKey, this.bs);

            }
        }, (e) => {
           // $this.l(___ok.er, e);
        });
        //  })
    }
    /**
     * 
     * @returns current time stamp
     */
    t = () => {
        return new Date().valueOf()
    }
    /**
     * 
     * @param {*} __e event_name
     */
    trigger_survey = (__e) => {
        let i;
        let $this = oneFlowGlob();
        this.__remove_data(___ok.__answer);
        let sr = this.__storage_data(___ok.__survey.s);
        let __f = false;
        if (this.emptyObj(sr)) {
            for (i = 0; i < __e.length; i++) {
                if (!__f) {
                    let __cs = sr.find((t) => t.trigger_event_name.includes(__e[i].name));
                    if (__cs) {
                        if (this.___rs_option(__cs._id)) {
                            __f = true;
                            this.__request=false
                            __cs.current_event_trigger_name = __e[i].name;
                            this.__store_data(___ok.__survey.sc, __cs);
                            this.__ls(false)
                            this.fsKey(__cs._id, this.bs);
                            const __ev = new DefaultEvents($this.gtcn());
                            __ev.addSurveyInitEvent(__cs._id);
                        }

                    }
                }

            }
        } else {
            __one_flow_events.add(___ok.__events.tr, __e, (d) => { this.trigger_survey(ev(d)) });
        }


    }
    ___rs_option = (sid) => {

        let __ls = this.__storage_data(___ok.__survey.ls);
        let __r = true

        if (this.emptyObj(__ls)) {
            __ls = __ls.__ls;
            if (this.emptyObj(__ls)) {
                let __cs = __ls.find((s) => s.id === sid);
                if (__cs && __cs.lt !== null) {
                    let __ct = this.t();
                    if (__ct < __cs.lt) {
                        __r = false
                    }
                }
                if (__cs && __cs.lt === null) {
                    __r = false
                }
            }
            return __r
        }
        return __r
    }
    /**
    @param {*} __sKey this could be either Id,Name,Description
    @return {*} finding survey by Id,Name,Description
    */
    fsKey = (__sKey, callback) => {
        const _s = this.__storage_data(___ok.__survey.s)
        if (this.emptyObj(_s)) {
            if (_s.length !== 0) {
                let __sur = this.rS(_s, __sKey)
                callback(__sur);
            }
        }
    }
    /**
       @param {*} __sKey filter property
       @param {*} __sL this is current survey
       @return {*} Getting next survey after answering one
       */
    rS = (__sL, __sKey) => {
        return __sL.find(x => (
            x.name.toLowerCase().indexOf(__sKey.toLowerCase()) !== -1 ||
            x.description.toLowerCase().indexOf(__sKey.toLowerCase()) !== -1 ||
            x._id.toLowerCase().indexOf(__sKey.toLowerCase()) !== -1
        ))
    }
    /**
@return {*} Getting curren  survey from local storage
*/
    gCFLS = () => {
        let _s = this.__storage_data(___ok.__survey.sc);
        if (this.emptyObj(_s)) {
            this.currentSurvey = _s;
            return this.currentSurvey;
        }

    }
    /**
 @param {*} __cSL current survey id
 @return {*} Getting next survey index
 */
    gNIS = (__cSL) => {
        let __gCS = this.gCFLS();
        let __gICS = __gCS?.screens.findIndex((element) => element._id === __cSL);
        return __gICS + 1;

    }
    /**
    @param {*} __cSL current survey id
    @return {*} Getting next survey after answering one
    */

    gNS = (__cSL, __f) => {
        let __iNS = this.gNIS(__cSL);
        let __hC = this.gE(___ok.__element.__in_root.id);
        __hC.innerHTML = '';
        this.sc(this.currentSurvey, __iNS);
        this.rL('click', this._lA);
    }
   
    /**
    @param {*} __sd Survey Object
    @return {*} Set the themes of the Surveys
    */
    bs = (__sd) => {
        let prop = ['--bg--primary-color',  '--hover--color-opacity','--primary_color', '--color_opacity', '--font', '--corner_radius'];
        if (__sd.style !== undefined || __sd.style !== null) {
            for (let i = 0; i < prop.length; i++) {
             
                    if (prop[i] === '--bg--primary-color') {
                        this.sP(prop[i], `#${__sd.style.primary_color}` );
                    }
                    else if (prop[i] === '--hover--color-opacity') {
                        this.sP(prop[i], __sd.style.color_opacity/100);
                    }
                    else {
                        let prp = __sd.style[prop[i].replace(/[^a-zA-Z_]/g, "")]
                        this.sP(prop[i], i == 0 ? `${'#' + prp}` : i == 3 ? prp + 'px' : prp);
                    }
                
            }
            this.cE(null, { "data-theme": __sd.style.display_mode });
        };

        this.sc(__sd, 0);
        this.CustomFadeIn(10,.25,'one_flow_over_lay')
        this.cSL();//check survey exits in local storage 
    }
    /**
       check if any answers exits in local storage    
    */
    cSL = () => {
        let _checkAnswer = this.__storage_data(___ok.__answer);
        if (_checkAnswer) {
            if (Object.keys(_checkAnswer).length !== 0) {
                this.currentSurvey = this.gCFLS();
                this.addSurvey(this.currentSurvey._id, this.currentSurvey.current_event_trigger_name);
            }

        }
    }
    /**
   @param {*} __type type of element
   @param {*} attributes attributes of elements
   @return {*} Create element
   */
    cE = (__type, attributes) => {
        return this.ce(__type, attributes);
    }
    /**
      @param {*} rE recurssive function for child elements
      @param {*} nestingKey children key
      @param {*} parentdata parent element in which html needs to append
      */
    rE = (arr, nestingKey, parentdata) => {
        let data = '';
        arr.forEach((element) => {
            data = this.cE(element.type, element.attributes);
            parentdata.appendChild(data);
            if (element[nestingKey]) {
                return this.rE(element[nestingKey], nestingKey, data)
            }
        });
    }
    /**
    @param {*} __in input text
    */
    _tC = (__in) => {
        let el = this.gE(__in);
        this.gE('txt_count').innerHTML = `${el.value.length}/280`;
    }
    /**
    @param {*} e events trigger
    */
    _lA = (e) => {
        e.stopPropagation();
        if (e.target) {
            let _sI = e.target.getAttribute("data_attr");
            let _tL = e.target.tagName.toLowerCase();
            if (_sI) {
                if ((_tL === "input" && e.target.type === "radio") ||
                    (_tL === 'input' && e.target.type === "checkbox") ||
                    _tL === "button" || _tL === "img" ||
                    _tL === "svg" || _tL === "path") {
                    this.ansObj(e);
                }
            }
        }

    }
    /**
  @param {*} e events trigger
  */
    _nd = (e,gCIN) => {
        if (gCIN > 0) {
            this.addSurvey(this.currentSurvey._id, this.currentSurvey.current_event_trigger_name);
        }
        this.CustomFadeOut(10,.25,'one_flow_over_lay')
        this._sUp('oneflow_main_box');
    }
    /**
   @param {*} e events trigger on mouse enter
   */
    _mE = (e) => {
        if (e.relatedTarget?.nodeName === 'svg') {
            let _iN = e.relatedTarget.getAttribute("data_in");
            this.addHover(_iN);
        }
    }
    /**
    @param {*} __uS current survey  
    @param {*} __f instance of f
    @param {*} __iN index of current survey for progress bar
    @return {*} based on the type of survey question, html is appending in the  main div
    */
    sc = (__uS, __iN) => {
        let _htmlContainer = this.gE(___ok.__element.__in_root.id);
        let __subChildren = [];
        let parentdata = '';

        let gCIN = this.gNIS(__uS.screens[__iN]._id);
       
        if (gCIN >= this.currentSurvey.screens.length) this.addSurvey(this.currentSurvey._id, this.currentSurvey.current_event_trigger_name);
        let __logo = [];
        let __children = [
            { type: 'div', attributes: { id: "nodge", class: "nodge", draggable:"true" } },
            { type: 'img', attributes: { class: "cross-btn", id: "cross-btn", src: `${___ok._urlImg_CSS}img/cross.svg` } },
            { type: 'h4', attributes: { class: "pd-t-20", id: "show", titleContent: __uS.screens[__iN].title } },
            { type: 'p', attributes: { id: "exp", titleContent: __uS.screens[__iN].message } }
        ];
        let __imgChild = [];
        __imgChild.push({
            type: 'img',
            attributes: {
                src: `${___ok._urlImg_CSS}img/logo.png` 
            },
        });
        __logo.push({
            type: 'a',
            attributes: {
                target: "_blank",
                href: "https://1flow.app/?utm_source=1flow-ios-sdk&utm_medium=watermark&utm_campaign=real-time+feedback+powered+by+1flow"
            },
            children: __imgChild

        });
        switch (__uS.screens[__iN].input.input_type) {
            case 'text':
                __subChildren.push({
                    type: 'textarea',
                    attributes: {
                        maxlength: 280,
                        class: "oneflow-textarea",
                        placeholder: __uS.screens[__iN].input.placeholder_text !== null ? __uS.screens[__iN].input.placeholder_text : "Type here..."
                    }
                }, {
                    type: 'span',
                    attributes: {
                        class: "txt-count",
                        titleContent: '0/280',
                        id: 'txt_count'
                    }
                });
                __children.push({
                    type: 'div',
                    attributes: {
                        class: "oneflow-area-text mt-10",
                        id: "button_list"
                    },
                    children: __subChildren
                }, {
                    type: 'button',
                    attributes: {
                        class: `textarea-btn  finish_${__iN}`,
                        id: 'finish_text',
                        titleContent: 'Finish',
                        data_attr: `${__uS.screens[__iN]._id}`
                    }
                }, {
                    type: 'p',
                    attributes: {
                        class: "water-mark",
                        id: "wtr_mrk",
                        titleContent: 'Powered by'
                    },
                    children: __logo
                }, {
                    type: 'progress',
                    attributes: {
                        id: "oneflow_progress",
                        value: __iN,
                        max: __uS.screens.length
                    }
                });

                break;
            case 'rating-emojis':
                __subChildren = [];
                for (let i = 1; i <= __uS.screens[__iN].input.max_val; i++) {
                    __subChildren.push({ type: 'li', attributes: { id: __uS.screens[__iN]._id }, children: this.getEmoji(i, __iN, __uS.screens[__iN]._id) });

                }
                __children.push({
                    type: 'ul',
                    attributes: {
                        class: "rating-list",
                        id: "button_list"
                    },
                    children: __subChildren
                }, {
                    type: 'p',
                    attributes: {
                        class: "water-mark",
                        id: "wtr_mrk",
                        titleContent: 'Powered by'
                    },
                    children: __logo
                }, {
                    type: 'progress',
                    attributes: {
                        id: "oneflow_progress",
                        value: __iN,
                        max: __uS.screens.length
                    }
                });
                break;
            case 'rating-5-star':
                __subChildren = [];
                for (let i = 1; i <= __uS.screens[__iN].input.max_val; i++) {
                    __subChildren.push({
                        type: 'li',
                        attributes: {},
                        children: this.getStarEmoji(i, __iN, __uS.screens[__iN]._id)
                    });
                }
                __children.push({
                    type: 'ul',
                    attributes: {
                        class: "rating-list  star-list ",
                        id: "button_list"
                    },
                    children: __subChildren
                }, {
                    type: 'p',
                    attributes: {
                        class: "water-mark",
                        id: "wtr_mrk",
                        titleContent: 'Powered by'
                    },
                    children: __logo
                }, {
                    type: 'progress',
                    attributes: {
                        id: "oneflow_progress",
                        value: __iN,
                        max: __uS.screens.length
                    }
                });
                break;
            case 'rating-numerical':
                let ____subChildren = [];
                let ____subLikeUnlike = [];
                ____subLikeUnlike.push({
                    type: 'li',
                    attributes: {
                        titleContent: `${__uS.screens[__iN].input.rating_min_text}`
                    }
                }, {
                    type: 'li',
                    attributes: {
                        titleContent: `${__uS.screens[__iN].input.rating_max_text}`
                    }
                });
                for (let i = 1; i <= 5; i++) {
                    ____subChildren.push({
                        type: 'li',
                        attributes: {},
                        children: this.getButton(i, __iN, __uS.screens[__iN]._id)
                    });
                }
                __children.push({
                    type: 'ul',
                    attributes: {
                        class: "rating-list ",
                        id: "button_list"
                    },
                    children: ____subChildren
                }, {
                    type: 'ul',
                    attributes: {
                        class: "act-link",
                        id: "like_unlike"
                    },
                    children: ____subLikeUnlike
                }, {
                    type: 'p',
                    attributes: {
                        class: "water-mark",
                        id: "wtr_mrk",
                        titleContent: 'Powered by'
                    },
                    children: __logo
                }, {
                    type: 'progress',
                    attributes: {
                        id: "oneflow_progress",
                        value: __iN,
                        max: __uS.screens.length
                    }
                });
                break;
            case 'nps':
                __subChildren = [];
                let __subLikeUnlike = [];
                __subLikeUnlike.push({
                    type: 'li',
                    attributes: {
                        titleContent: `${__uS.screens[__iN].input.rating_min_text}`
                    }
                }, {
                    type: 'li',
                    attributes: {
                        titleContent: `${__uS.screens[__iN].input.rating_max_text}`
                    }
                });
                for (let i = 0; i <= __uS.screens[__iN].input.max_val; i++) {
                    __subChildren.push({
                        type: 'li',
                        attributes: {},
                        children: this.getButton(i, __iN, __uS.screens[__iN]._id)
                    });
                }
                __children.push({
                    type: 'ul',
                    attributes: {
                        class: "rating-list  rating-list-10",
                        id: "button_list"
                    },
                    children: __subChildren
                }, {
                    type: 'ul',
                    attributes: {
                        class: "act-link",
                        id: "like_unlike"
                    },
                    children: __subLikeUnlike
                }, {
                    type: 'p',
                    attributes: {
                        class: "water-mark",
                        id: "wtr_mrk",
                        titleContent: 'Powered by'
                    },
                    children: __logo
                }, {
                    type: 'progress',
                    attributes: {
                        id: "oneflow_progress",
                        value: __iN,
                        max: __uS.screens.length
                    }
                });
                break;
            case 'mcq':
                __subChildren = [];
                let __options = [];
                __uS.screens[__iN].input.choices.map((item) => {
                    __options.push({
                        type: 'li',
                        attributes: {},
                        children: this.gRC(item, __iN, 'radio', __uS.screens[__iN]._id)
                    });
                });
                __children.push({
                    type: 'ul',
                    attributes: {
                        class: "multiple",
                        id: "button_list"
                    },
                    children: __options
                }, {
                    type: 'p',
                    attributes: {
                        class: "water-mark",
                        id: "wtr_mrk",
                        titleContent: 'Powered by'
                    },
                    children: __logo
                }, {
                    type: 'progress',
                    attributes: {
                        id: "oneflow_progress",
                        value: __iN,
                        max: __uS.screens.length
                    }
                });

                break;
            case 'checkbox':
                __subChildren = [];
                let __checkbox = [];
                __uS.screens[__iN].input.choices.map((item) => {
                    __checkbox.push({
                        type: 'li',
                        attributes: {},
                        children: this.gRC(item, __iN, 'checkbox', __uS.screens[__iN]._id)
                    });
                });
                __children.push({
                    type: 'ul',
                    attributes: {
                        class: "multiple",
                        id: "button_list"
                    },
                    children: __checkbox
                }, {
                    type: 'button',
                    attributes: {
                        class: `textarea-btn  finish_${__iN}`,
                        id: 'finish',
                        titleContent: 'Finish',
                        data_attr: `${__uS.screens[__iN]._id}`
                    }
                }
                    , {
                        type: 'p',
                        attributes: {
                            class: "water-mark",
                            id: "wtr_mrk",
                            titleContent: 'Powered by'
                        },
                        children: __logo
                    }, {
                    type: 'progress',
                    attributes: {
                        id: "oneflow_progress",
                        value: __iN,
                        max: __uS.screens.length
                    }
                });

                break;
            default:
                __children.pop();
                __children.pop();
                let __subCenter = [],
                    __subChildImg = [], _logo = [];

                __subChildImg.push({
                    type: 'img',
                    attributes: {
                        src: `${___ok._urlImg_CSS}img/logo.png`
                    },
                    children: __subCenter

                });
                _logo.push({
                    type: 'a',
                    attributes: {
                        target: "_blank",
                        href: "https://1flow.app/?utm_source=1flow-ios-sdk&utm_medium=watermark&utm_campaign=real-time+feedback+powered+by+1flow"
                    },
                    children: __subChildImg

                });
                __subCenter.push({
                    type: 'img',
                    attributes: {
                        src: `${___ok._urlImg_CSS}img/thanku.gif`,
                        width: "53",
                        class:"one-flow-thankyou"
                    }
                });
                __children.push({
                    type: 'center',
                    attributes: {
                        class: "mt-40 op-0",
                        id: "show"
                    },
                    children: __subCenter
                }, {
                    type: 'h4',
                    attributes: {
                        class: "pd-t-20 text-center",
                        id: "exp",
                        titleContent: "Thank you for your input!"
                    }
                }, {
                    type: 'p',
                    attributes: {
                        class: "oneflow-thankyou-msg",
                        id: "button_list",
                        titleContent: "Powered by"
                    },
                    children: _logo
                });
                break;
        }
        let __pN = { type: 'div', attributes: {}, children: __children };

        parentdata = this.cE(__pN.type, __pN.attributes);
        if (__pN.children) {
            this.rE(__pN.children, 'children', parentdata);
        }
        _htmlContainer.innerHTML = `${parentdata.outerHTML}`;
        let _list = ['button_list', 'finish_text', 'finish', 'nodge', 'cross-btn'];
        for (let i = 0; i < _list.length; i++) {
            if (this.gE(_list[i]) !== null) {
                if(_list[i] === 'nodge'){
                  this.addDragEvent(this.gE(_list[i]));
                }else{
                this.aL(this.gE(_list[i]), 'click', (e) => {
                    if (_list[i] === 'cross-btn') {
                        this.CustomFadeOut(10,.25,'one_flow_over_lay')
                        this._sD('oneflow_main_box');
                        if (gCIN !== this.currentSurvey.screens.length) this.addSurvey(this.currentSurvey._id, this.currentSurvey.current_event_trigger_name);
                    }
                    else {
                        this._lA(e);
                    }
                });
            }
            }
        }

        if (this.gETN('textarea').length !== 0) {
            this.aL(this.gETN('textarea')[0], 'input', (e) => {
                this.gE('txt_count').innerHTML = `${e.target.value.length}/280`;

            });
        }
        this.aL(this.gE('button_list'), 'mouseover', (e) => {
            this._mE(e);
        });
        this.sT(() => this._effect('add'), 2);
        if (__uS.screens[__iN].input.input_type == 'thank_you') {
            this.sT(() => {
                this._sD('oneflow_main');
                let _s = this.gE('nodge');
                if (_s) { _s.style.display = 'none'; }
            }, 3000);
        }
    }

    addDragEvent=(__el)=>{
       let __events=['touchstart','touchmove','touchend','touchcancel'];
       let i;
       for(i=0;i<__events.length;i++){
        this.aL(__el, __events[i], this.__drag_event_handler);
       };
       this.start_drag=0;
    }
    
    __drag_event_handler=(event)=>{

        var touch = event.changedTouches[0];

        var simulatedEvent = document.createEvent("MouseEvent");
            simulatedEvent.initMouseEvent({
            touchstart: "mousedown",
            touchmove: "mousemove",
            touchend: "mouseup"
        }[event.type], true, true, window, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);
    
        touch.target.dispatchEvent(simulatedEvent);
        if(event.type == 'touchstart'){
            this.start_drag=event.changedTouches[0].clientY;
        }
        if(event.type == 'touchend'){
            if(this.start_drag > 0  && this.start_drag < event.changedTouches[0].clientY){
                let __progress=this.gE('oneflow_progress');
                this._nd(this.gE('nodge'),__progress.value);
            }
        }
    }
    /**
    @param {*} __ci current survey child
    @param {*} __iN current survey
    @param {*} __sI current survey Id
    @param {*} __tp type of button either radio or checkbox
    @return {*} returns radio button or checkbox button 
    */
    gRC = (__ci, __iN, __tp, __sI) => {
        let __la = [],
            __insp = [];
        if (__tp === 'radio') {
            __insp.push({
                type: 'INPUT',
                attributes: {
                    name: 'radio',
                    type: 'radio',
                    id: __ci._id,
                    data_attr: `${__sI}`
                }
            }, {
                type: 'span',
                attributes: {
                    class: 'checkmark'
                }
            })
            __la.push({
                type: 'label',
                attributes: {
                    class: 'oneflow_radio',
                    titleContent: __ci.title
                },
                children: __insp
            })
        } else {
            __insp.push({
                type: 'INPUT',
                attributes: {
                    name: 'check',
                    type: 'checkbox',
                    data_attr: `${__sI}`,
                    class: 'checkBox',
                    id: __ci._id
                }
            }, {
                type: 'span',
                attributes: {
                    class: 'oneflow-checkmark',
                    data_attr: `${__sI}`
                }
            });
            __la.push({
                type: 'label',
                attributes: {
                    class: 'checkcontainer',
                    data_attr: `${__sI}`,
                    titleContent: __ci.title
                },
                children: __insp
            });

        }
        return __la;
    }
    /**
    @param {*} __in index
    @param {*} __sI screenId
    @param {*} __uSE current survey
    @return {*} returns button list 
    */
    getButton = (__in, __iN, __sI) => {
        let __btn = [];
        __btn.push({
            type: 'button',
            attributes: {
                class: 'btn rating-btn',
                titleContent: __in,
                data_attr: `${__sI}`
            }
        })
        return __btn;
    }
    /**
     @param {*} __in index
     @param {*} __uSE current survey
     @param {*} __sI survey Id
     @return {*} returns emoji  
    */
    getEmoji = (__in, __iN, __sI) => {
        let __btn = [], __emoj = [];
        __emoj.push({ type: 'img', attributes: { src:  `${___ok._urlImg_CSS}img/${__in}.svg` , data_attr: `${__sI}`, id: `${__in}` } })
        __btn.push({ type: 'button', attributes: { class: 'btn rating-btn', data_attr: `${__sI}` }, children: __emoj })

        return __btn;
    }
    /**
    @param {*} __in index
    @param {*} __uSE current survey
    @param {*} __sI survey Id
    @return {*} returns star  
    */
    getStarEmoji = (__in, __iN, __sI) => {
        let __svg = [],
            __star = [];
        __star.push({
            type: 'path',
            attributes: {
                data_attr: `${__sI}`,
                id: `${__in}`,
                d: ___ok.__element.__star_path,
                stroke: "#5D5FEF",
                strokelinecap: "round",
                strokelinejoin: "round"
            }
        })
        __svg.push({
            type: 'svg',
            attributes: {
                width: 32,
                height: "31",
                viewBox: "0 0 32 31",
                fill: "none",
                class: `class_active_${__in}`,
                id: `class_active_${__in}`,
                data_in: `${__in}`,
                xmlns: "http://www.w3.org/2000/svg"
            },
            children: __star
        })
        return __svg;
    }
}
exports = Survey/**
 * CREATE PROJECT ANAYATIC USER
 */

class A extends C {
    constructor(__cn) {
        super(__cn)
        //this.m = m
        this.st = new S()
    }

    add=(__key,sys_id)=>{
        let u = this.getUrl('au_url');
        let _req = new F(__key);
        let _d=this.rd(sys_id)
        _req.req(u, ___ok.__request.p, (d) => {
            this.s(d)
        }, (e) => {
            this.l(___ok.er, e)
        }, this.ds(_d));
    }
    /**
     * @param {}
     * @returns OBJECT USER DETAILS
     */
    rd = (sys_id = '') => {
        const __helper = this.getHelpers()
        return {
            device: {
                device_id: `sdk_did_${this.t()}`,
                os: __helper.__os(),
                unique_id: `sdk_uid_${this.t()}`
            },
            mode: this.gtcn().m,
            location_check: true,
            system_id:(sys_id != '')? sys_id: `sdk_system_id_${this.t()}`
        }
    }
    /**
     * 
     * @returns CURRENT DATE TIME STRAMP
     */
    t = () => {
        return new Date().valueOf()
    }

    /**
     * 
     * @returns VOID {SAVE USER DETAILS IN LOCAL STORAGE}
     */
    s = (da) => {
        let d = this.dp(da);
        d = d.result;
        let __h = this.getHelpers();
        if(this.emptyObj(__h.__storage_data(___ok.u))){
            __h.__removeData(___ok.u)
        }

        let _fd = {
            au: d.analytic_user_id,
            sid: d.system_id,
            did:(this.emptyObj(d.devices)) ? d.devices[0].device_id : '',
            uid: (this.emptyObj(d.devices)) ? d.devices[0].unique_id : ''
        };
      
        __h.__store_data(___ok.u, _fd);
        __h.__removeData(___ok.__survey.ls);
        __h.__removeData(___ok.__survey.__answer);
        __h.__eventTrigger(___ok.__events.s,true);
    }
    /**
     * 
     * @returns Boolean
     */
    av = () => {
        const __h = this.getHelpers();
        let t = __h.__storage_data(___ok.u);
        if (!this.emptyObj(t)) return true;
        return (t.au && t.au != '') ? false : true
    }

}
exports = A;/**
 * LOG ANONYMOUS USER
 */
class L extends C {
    constructor(__con) {
        super(__con)
        this.__helpers = this.getHelpers();
    }
    /**
     * 
     * @param {String} __key  API KEY 
     * @param {Boolean} __d log user data 
     */
    add = (__key, __lg_user, sys, d= {}) => {
        let u = this.getUrl(___ok.lu);
        let _req = new F(__key);
        let _d = this.rd(__lg_user, sys, d);
        _req.req(u, ___ok.__request.p, (d) => {
            this.save(d)
        }, (e) => {
            this.l(___ok.er, e)
        }, this.ds(_d));
    }
    /** 
     * @param {Boolean} __lg_user   
     * @return {Object}  Log user data
     */
    rd = (__lg_user, sys_id, d = {}) => {
       
        let u = this.__helpers.__storage_data(___ok.__lg);
        return {
            anonymous_user_id: u.au,
            system_id: sys_id,
            session_id: u.s_id,
            mode: this.gtcn().m,
            log_user: __lg_user,
            parameters: d
        }
         
    }
    /**
     * 
     * @param {Object string} __d {log user data}
     */
    save = (__d) => {
        let _fd = __result(this.dp(__d));
        const _f = {
            s_id: _fd.session_id,
            au: _fd.analytic_user_id
        }
        let _up_o_u = this.__helpers.__storage_data(___ok.u);
         _up_o_u.au= _fd.analytic_user_id
         _up_o_u.sid=_fd.session_id
        
      
        this.__helpers.__store_data(___ok.u, _up_o_u);
        this.__helpers.__store_data(___ok.ano, _f);
    }
    /**
        @params {}
        @return Object log user
    */
    get = () => {
        return this.__helpers.__storage_data(___ok.ano)
    }
    /**
        @params {} validating log user
        @return Boolean 
    */
    __valid = () => {
        return this.emptyObj(this.get())
    }
}
exports = L;class Events extends C {
    constructor(__con) {
        super(__con);
        this.u = this.getUrl(___ok.ie);
    }
    /**
        @params {String} __key "1FLOW PROJECT API KEY"
        @return Boolean
    */
    add(__key, __d) {
        const request = new F(__key);
        const d = this.rd(__d);
        if (this.__valid_event_data(__d)) {
            //https://dev.1flow.app/api/v1/2021-06-15/events/bulk
            // console.log(this.u);
            request.req(this.u, ___ok.__request.p, (_d) => {
                this.success(__d);
                return true
            }, (err) => {
                this.l(___ok.er, err);
                return false;
            }, this.ds(d));
        }
    }
    /**
     * 
     * @param {Array} __d   Event Data
     * @returns Event API DATA
     */
    rd = (__d) => {
        const __helper = this.getHelpers();
        let s = __helper.__storage_data(___ok.s);
        return {
            session_id: s.s_id,
            mode: this.gtcn().m,
            events: __d
            //   name: "testing" for dev only

        }
    }
    /**
     * 
     * @param {*} __d API RETURN DATA 
     *
     */
    success = (__d) => {
        const __el = ___ok.__d_events.events;
        const sr = new Survey();
        if (__el.includes(__d[0].name)) {
            this.setDefaultEventData(__d, __el);
        } else {
            sr.trigger_survey(__d);
        }

        const __helper = this.getHelpers();
        __helper.__eventTrigger(___ok.__d_events.events[0], true);
        __helper.__eventTrigger(___ok.__d_events.events[1], true);
        __helper.__eventTrigger(___ok.__d_events.events[2], true);
        return true
    }

    setDefaultEventData = (__en, __el) => {
        const __helper = this.getHelpers();
        const __e = __en[0]
        // __helper.__removeData(___ok.__d_events.__es)
        let __lev = __helper.__storage_data(___ok.__d_events.__es);
        __lev = (this.emptyObj(__lev)) ? __lev.__event : {};
        if (__e.name == __el[0]) {
            if (!__lev[__el[0]]) {
                __lev[__el[0]] = true
            }
        }
        if (__e.name == __el[1]) {
            let __list = (!__lev[__el[1]]) ? [] : __lev[__el[1]]
            __list.push({
                path: __e.parameters.url,
                log: true
            });
            __lev[__el[1]] = __list;
        }
        __helper.__store_data(___ok.__d_events.__es, {
            __event: __lev
        });
        if (__e.name == __el[2]) {
            __helper.__remove_data(___ok.__temp);
        }

    }
    /**
     * 
     * @param {Array} _d Event data 
     * @returns Boolean
     */
    __valid_event_data = (_d) => {
        try {
            let __s = true
            _d.forEach((d) => {
                if (d.name == null || d.name == undefined || empty(d.name)) {
                    __s = false
                }
                return d
            })
            if (!__s) {
                this.l(___ok.er, ___ok.msg.__e._rn);
                return false;
            }
            return true
        } catch {
            return false
        }

    }
}


class DefaultEvents extends Events {
    constructor(__con) {
        super(__con);
    }

    addEvent = (__en, __d, __s = false) => {
        let $this = oneFlowGlob();
        let __k = $this.__key;
        const __helper = this.getHelpers();
        if (__s) {
            __helper.__store_data(___ok.__temp, __d);
        }
        if (this.eventExits(__en, __d)) {
            __helper.__valid(___ok.s) ? this.add(__k, __d) : __one_flow_events.add(__en, __d, (d) => {
                this.add(__k, ev(d))
            });
        }

    }

    __default_events = () => {
        const __el = ___ok.__d_events.events;
        const __ev = ___ok.__d_events.__l_events;
        const __helper = this.getHelpers();
        const temp = __helper.__storage_data(___ok.__temp);
        __ev.map((__e) => {
            this.addEvent(__e, [this.__event_data(__e, __el)]);
        })
        if (temp) {
            this.addEvent(__el[2], temp);
        }

        this.domClickEvents(__el[2]);
    }

    addSurveyInitEvent = (__sid) => {
        const __el = ___ok.__d_events.events;
        const event = this.__event_data(__el[4], __el);
        event.parameters.survey_id = __sid
        this.addEvent(__el[4], [event], false, __k);

    }
    domClickEvents = (__en) => {
        __one_flow_events.add('click', null, (d) => {
            let tag = d.target.tagName;
            const __attr = this.getAttributes(d.target, d.target.attributes);
            const __tz = this.__timeZone()
            const __t = new Date().valueOf()
            const event = {
                name: __en,
                time: __t
            }
            let parameters = {
                time_zone: __tz,
                current_url: this.getCurrentHost('whole_url'),
                tagName: tag,
                ...__attr
            }
            if (d.target.closest(`#${___ok.__element.__root}`) === null) {
                switch (tag) {
                    case 'BUTTON':
                        if (d.target.closest("form")) {
                            let ac = this.getAttributes(d.target.closest("form"), d.target.closest("form").attributes);
                            parameters = {
                                ...parameters,
                                ...ac
                            }
                        }
                        parameters.innerText = (d.target.innerHTML) ? d.target.innerHTML : parameters.value
                        event.parameters = parameters
                        this.addEvent(__en, [event], true);
                        break
                    case 'INPUT':
                        if (d.target.type == 'button' || d.target.type == 'submit') {
                            if (d.target.closest("form")) {
                                let ac = this.getAttributes(d.target.closest("form"), d.target.closest("form").attributes);
                                parameters = {
                                    ...parameters,
                                    ...ac
                                }
                            }
                        }
                        parameters.innerText = d.target.value
                        event.parameters = parameters
                        this.addEvent(__en, [event], true);
                        break
                    case 'A':
                        parameters.innerText = d.target.text
                        event.parameters = parameters
                        this.addEvent(__en, [event], true);
                        break
                    default:
                        if (d.target.closest("a")) {
                            let new_a = this.getAttributes(d.target.closest("a"), d.target.closest("a").attributes);
                            parameters = {
                                current_url: this.getCurrentHost('whole_url'),
                                tagName: 'A',
                                childTag: tag,
                                innerText: d.target.closest("a").text,
                                ...new_a
                            }
                            event.parameters = parameters
                            this.addEvent(__en, [event], true);
                        }
                }
            }
        });
    }


    getAttributes = (__s, __attrs) => {
        let __ar = {}
        if (this.emptyObj(__attrs)) {
            let att = Object.values(__attrs)
            att.map((a) => {
                let key = a.localName
                if (key === 'href' || key == 'action') {
                    key = 'redirect_to'
                }
                __ar[key] = a.value;
            })
        }
        return __ar
    }
    __event_data = (__e, __el) => {
        const __tz = this.__timeZone()
        const __t = new Date().valueOf()
        const event = {
            name: __e,
            time: __t,
            parameters: {
                time_zone: __tz,
                entry_time: __t
            }
        }
        if (__e == __el[0] || __e == __el[3]) {
            event.parameters.url = this.getCurrentHost('host')
        }
        if (__e == __el[1] || __e == __el[2] || __e == __el[4]) {
            event.parameters.url = this.getCurrentHost('whole_url')
        }
        return event;
    }

    __timeZone = () => {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }
    eventExits = (__en, __d) => {
        const __helper = this.getHelpers();
        const __ev = (__en == ___ok.__d_events.events[3]) ? __helper.__storage_data(___ok.s) : __helper.__storage_data(___ok.__d_events.__es);
        let __r = true
        if (this.emptyObj(__en)) {
            if (__en == ___ok.__d_events.events[3] && this.emptyObj(__ev)) {
                __r = false
            } else if (this.__ev_exits(__en, __ev.__event, __d)) {
                __r = false
            }
        }

        return __r
    }

    __ev_exits = (__en, __er, __d) => {
        const keys = (__er) ? Object.keys(__er) : null
        if (__en !== ___ok.__d_events.events[1]) {
            return (keys) ? keys.includes(__en) : false
        }

        if (keys && keys.includes(__en)) {
            const ev = __d[0]
            const __c = __er[__en].find((e) => e.path == ev.parameters.url && e.log == true);
            return (__c) ? true : false;
        } else {
            return false
        }


    }
}

exports = DefaultEvents;
exports = Events;/**
 * One Flow Event Trigger && Handling 
 * @param {*} event_name String || Event name
 * @param {*} data any || data
 * @returns 
 */
const one_flow_events = (event_name , data,only_event=false) => {
    let $this = oneFlowGlob();
    const __helper = $this.getHelpers();
    if (!$this) {
        console.error("Error: Oneflow SDK is not loaded.");
        return false;
    }
    if (event_name == ___ok.__events.cu) {
        const __ev = new A($this.dp($this.d($this.__cn)));
        if(data){
            __ev.add($this.__key,data);
        }else{
            $this.l(___ok.er, ___ok.msg.__e._ar);
        }
    }
    if (event_name == ___ok.__events.e) {
        if ($this.emptyObj(data)) {
            const __d = [];
            __d[0] = data;
            const __ev = new Events($this.gtcn());
            if(only_event){
                __one_flow_events.add(event_name, __d, (d) => {
                    __ev.add($this.__key, ev(d))
                });
            }else{
                
                __helper.__valid(___ok.s) ? __ev.add($this.__key, __d) : __one_flow_events.add(event_name, __d, (d) => {
                    __ev.add($this.__key, ev(d))
                });
            }
           
        } else {
            $this.l(___ok.er, ___ok.msg.__e._ar);
        }

    }
    if (event_name === ___ok.__events.s) {
        const __cs = new Session($this.dp($this.d($this.__cn)));
        if(only_event){
            __one_flow_events.add(event_name, data, (d) => {
                __cs.add($this.__key)
            });
        }else{
            __helper.__valid(___ok.u) ? __cs.add($this.__key) : __one_flow_events.add(event_name, data, () => {
                __cs.add($this.__key)
            });
        }
       
    }
    if (event_name === ___ok.__events.l) {
        const __lg = new L($this.gtcn());
        if(only_event){
            __one_flow_events.add(event_name, data, (d) => {
                let data=ev(d);
                __lg.add($this.__key, true,data.d,data.p)
            }); 
        }else{
       
            __helper.__valid(___ok.s) ? __lg.add($this.__key, true,data.d,data.p) : __one_flow_events.add(event_name, data, (d) => {
                let data=ev(d);
                __lg.add($this.__key, true,data.d,data.p)
            }); 
        }
       
        
    }
}

const one_flow_log_user = (d, p = {}) => {
    oneFlowEvents(___ok.__events.cu,d);
    oneFlowEvents(___ok.__events.s,null,true);
    oneFlowEvents(___ok.__events.l,{d,p},true);
   
}

const _1flow={
    logEvent:(name,time)=>{
        oneFlowEvents(___ok.__events.e,{name,time});
    },
    logUser:(sys_id,parameters={})=>{
        oneFlowLogUser(sys_id, parameters)
    }
}

exports =_1flow;// SDK initiator 
(async (window) => {
   /**
    * Global variable and Global functions
    */
   const t = (se) => {
         return document.querySelector(se)
      },
      __G = window;
   a = (__ref, __attr) => {
      return __ref.getAttribute(__attr)
   };
   w = () => {
      return __G
   };
   stGbl = (d) => {
      __G.glob = d
   };
   oneFlowGlob = () => {
      return __G.glob
   };
   oneFlowEvents = (name, data, callback) => {
      let __in = 10;
      window.setTimeout(function () {
        
         if (window.glob) {
            one_flow_events(name, data)
         } else {
            oneFlowEvents(name, data, callback);
         }
      }, __in);
   };
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
   __k = 'data-api-key', __t = 'script', __cv = 'aHR0cHM6Ly9hcGkuMWZsb3cuYXBwL3YxLzIwMjEtMDYtMTUvc3VydmV5LXJlc3BvbnNlL2RlbW8=', ___ok = oneFlow_sdk_const, __one_flow_events = new OneFlowEvent(), ev = (d) => {
      return d.detail
   }
   w().__1f_path_controllers = 'controllers', empty = (__s) => {
      return (__s == '') ? true : false
   }, __result = (__d) => {
      return (__d.result) ? __d.result : {}
   }, _type = (__d) => {
      return typeof __d
   };
   w().__1flow_key = 'one_flow_sdk'
   let _ref = t(`${__t}[${__k}]`);
   let __a_k = a(_ref, __k);
   w().__1flow_api_key = __a_k;
   const c = new C(undefined);
   c.sk(__a_k);
   c.v(__a_k);
   const f = new F(__a_k);
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
   async function init() {
      await f.gp(__enc.d(__cv)).then((d) => {
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
            //'https://dev.1flow.app/api/v1/2021-06-15/project_users'
            f.req(___an.au.au_url, ___ok.__request.p, (dr) => {
               au.s(dr);
               __getSurvey();
               __default_events(___an);
               __g_c=true
            }, (e) => {
               c.l(___ok.er, e)
            }, __enc.ds(___d));
         } else {
            __getSurvey();
            __default_events(___an)
         }
      });
   }

   await init();
})(window);