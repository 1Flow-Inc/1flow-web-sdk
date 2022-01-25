import {C} from './c'
import {F} from './f'
import {__result,_type,__one_flow_events,___ok,__k} from '../index'
/**
 * CREATE USER SESSION
 */
export class Session extends C {
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