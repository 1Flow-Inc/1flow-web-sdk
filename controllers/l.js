import {C} from './c'
import {F} from './f'
import {empty,__result,_type,__one_flow_events,___ok} from '../index'
/**
 * LOG ANONYMOUS USER
 */
 export class L extends C {
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