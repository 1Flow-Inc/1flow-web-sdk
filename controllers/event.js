import {C} from'./c'
import {F} from'./f'
import {Survey} from'./survey'
import {oneFlowGlob,empty,__result,_type,__one_flow_events,___ok} from '../index'
export class Events extends C {
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


export class DefaultEvents extends Events {
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

