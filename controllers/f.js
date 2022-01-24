import {S} from './s'
import {__result,_type,__one_flow_events,___ok} from '../index'
export class F extends S {
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
