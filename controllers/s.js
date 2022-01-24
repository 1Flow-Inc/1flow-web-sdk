import {C} from './c'
import {empty,__result,_type,__one_flow_events,___ok} from '../index'
/**
 * STORAGE CLASS FOR ONE FLOW SDK
 */

 export class S extends C {
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
export class OneFlowHelpers extends S {
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
        return (type == 'width') ? window.innerWidth : window.innerHeight
    }
}
