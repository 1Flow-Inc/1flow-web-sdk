/*import {OneFlowHelpers} from './s'
import {Survey} from './survey'*/
import {__result,_type,__one_flow_events,___ok} from '../index'

// E => Encryptor
// C => Common Handler
// OneflowSDK=> read config.json

export class E {
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
export class C extends E {
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
        const {OneFlowHelpers}=require("./s");
        return new OneFlowHelpers();
    }
    /**
   * Trying for saving survey on loading, refreshing or closing window but not worked yet
   * @returns Survey  Class object 
   */
    getSurveyHelpers = () => {
        const {Survey}=require("./survey");
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
 export class OneflowSDK extends C {
    sdk_details = {
        app_version: "1.1",
        app_build_number: "0987",
        library_version: "1",
        api_version: "2021-06-15"
    }
    constructor() {
        super()
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
