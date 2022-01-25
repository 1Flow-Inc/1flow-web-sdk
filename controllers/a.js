import {C} from './c'
import {F} from "1flow-web-sdk/controllers/f"
import {__result,_type,__one_flow_events,___ok} from '../index'
/**
 * CREATE PROJECT ANAYATIC USER
 */

 export class A extends C {
    constructor(__cn) {
        super(__cn)
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