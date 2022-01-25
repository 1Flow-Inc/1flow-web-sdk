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
        api:"add_survey_l",
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
    _urlImg_CSS:"https://1flow.app/js/",
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

export {oneFlow_sdk_const}