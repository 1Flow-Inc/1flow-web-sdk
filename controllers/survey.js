
import {F} from './f'
import {surveySubmission} from './surveySubmission'
import {DefaultEvents} from './event'
import {oneFlowGlob,__result,_type,__one_flow_events,___ok,ev,__k} from '../index'
export class Survey extends surveySubmission {
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
                            this.__request=false;
							 this.gE(___ok.__element.__in_root.id);
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
        let __c_ans={
            index:__iNS,
            ans:  (this.answers[this.answers.length -1].answer_value)? this.answers[this.answers.length -1].answer_value :this.answers[this.answers.length -1].answer_index
        };
    
        let __n_key=this.checkQuestionLogic(__c_ans, this.currentSurvey.screens);
        this.sc(this.currentSurvey, __n_key);
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
                href: "https://1flow.app/?utm_source=1flow-web-npm-sdk&utm_medium=watermark&utm_campaign=real-time+feedback+powered+by+1flow"
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
                        href: "https://1flow.app/?utm_source=1flow-npm-web-sdk&utm_medium=watermark&utm_campaign=real-time+feedback+powered+by+1flow"
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

    checkQuestionLogic(qus_ans,all_questions) {
        let __cur_key = qus_ans.index - 1
        let key;
        const ans = qus_ans.ans, rules = all_questions[__cur_key]?.rules;
        let screen = all_questions;
    
        if (rules && Object.keys(rules).length > 0) {
          const __qus_logic = rules.dataLogic
          let __apply = false
          if (__qus_logic && __qus_logic.length > 0) {
            let i;
            for (i = 0; i < __qus_logic.length; i++) {
              /*---------FOR IS CONDITION---------*/
              if (__qus_logic[i].condition == ___ok.__logic.__con[0]) {
    
                if (__qus_logic[i].type == ___ok.__logic.___values[0]) {
                  if (__qus_logic[i].values === ans?.toString()) {
                    if (__qus_logic[i].action == ___ok.__logic.__default_value) {
                      key = screen.length
                      __apply = true;
                      return key -1
                    } else {
                      key = screen.findIndex((question) => question._id === __qus_logic[i].action);
    
                      if (key < __cur_key) {
                        return __cur_key + 1
                      }
                      __apply = true;
                      return key
                    }
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[1]) {
                  if (__qus_logic[i].values === ans?.toString()) {
                    __apply = true;
                    return __cur_key + 1
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[2]) {
                  if (__qus_logic[i].values === ans?.toString()) {
                    window.open(
                        (__qus_logic[i].action.indexOf("http://") == 0 || __qus_logic[i].action.indexOf("https://") == 0) ?  __qus_logic[i].action :  `https://${__qus_logic[i].action}`,
                        '_blank'
                      );
                    __apply = true;
                    return __cur_key + 1
                  }
    
                }
              }
              /*-----------END IF CONDITION------------*/
    
              /*---------FOR IS NOT CONDITION---------*/
              if (__qus_logic[i].condition == ___ok.__logic.__con[1] && !__apply) {
                if (__qus_logic[i].type == ___ok.__logic.___values[0]) {
                  if (__qus_logic[i].values !== ans?.toString()) {
                    if (__qus_logic[i].action == ___ok.__logic.__default_value) {
                      key =  screen.length
                      __apply = true;
                      return key -1
                    } else {
                      key = screen.findIndex((question) => question._id === __qus_logic[i].action);
    
                      if (key <= __cur_key) {
                        return __cur_key + 1
                      }
                      __apply = true;
                      return key
                    }
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[1]) {
                  if (__qus_logic[i].values !== ans?.toString()) {
                    __apply = true;
                    return __cur_key + 1
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[3]) {
                  if (__qus_logic[i].values !== ans?.toString()) {
                    window.open(
                        (__qus_logic[i].action.indexOf("http://") == 0 || __qus_logic[i].action.indexOf("https://") == 0) ?  __qus_logic[i].action :  `https://${__qus_logic[i].action}`,
                        '_blank'
                      );
                    __apply = true;
                    return __cur_key + 1
                  }
    
                }
              }
              /*-----------END IF NOT CONDITION------------*/
    
              /*---------FOR IS ONE OF CONDITION---------*/
              if (__qus_logic[i].condition == ___ok.__logic.__con[2] && !__apply) {
                
                if (__qus_logic[i].type == ___ok.__logic.___values[0]) {
                    let values=__qus_logic[i].values.split(",")
                  if (values.includes(ans?.toString())) {
                    if (__qus_logic[i].action == ___ok.__logic.__default_value) {
                      key = screen.length
                      __apply = true;
                      return key -1
                    } else {
                      key = screen.findIndex((question) => question._id === __qus_logic[i].action);
    
                      if (key <= __cur_key) {
                        return __cur_key + 1
                      }
                      __apply = true;
                      return key
                    }
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[1]) {
                  if (__qus_logic[i].values.includes(ans?.toString())) {
                    __apply = true;
                    return __cur_key + 1
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[2]) {
                  if (__qus_logic[i].values.includes(ans?.toString())) {
                    window.open(
                        (__qus_logic[i].action.indexOf("http://") == 0 || __qus_logic[i].action.indexOf("https://") == 0) ?  __qus_logic[i].action :  `https://${__qus_logic[i].action}`,
                        '_blank'
                      );
                    __apply = true;
                    return __cur_key + 1
                  }
    
                }
    
              }
              /*-----------END IF ONE OF CONDITION------------*/
    
              /*---------FOR IS NONE OF CONDITION---------*/
              if (__qus_logic[i].condition == ___ok.__logic.__con[3] && !__apply) {
                if (__qus_logic[i].type == ___ok.__logic.___values[0]) {
                    let values=__qus_logic[i].values.split(",")
                  if (!values.includes(ans?.toString())) {
                    if (__qus_logic[i].action == ___ok.__logic.__default_value) {
                      key = screen.length
                      __apply = true;
                      return key -1
                    } else {
                      key = screen.findIndex((question) => question._id === __qus_logic[i].action);
    
                      if (key <= __cur_key) {
                        return __cur_key + 1
                      }
                      __apply = true;
                      return key
                    }
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[1]) {
                  if (!__qus_logic[i].values.includes(ans?.toString())) {
                    __apply = true;
                    return __cur_key + 1
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[2]) {
                  if (!__qus_logic[i].values.includes(ans?.toString())) {
                    window.open(
                        (__qus_logic[i].action.indexOf("http://") == 0 || __qus_logic[i].action.indexOf("https://") == 0) ?  __qus_logic[i].action :  `https://${__qus_logic[i].action}`,
                        '_blank'
                      );
                    __apply = true;
                    return __cur_key + 1
                  }
    
                }
    
              }
              /*-----------END IF NONE OF CONDITION------------*/
    
              /*---------FOR IS ANY CONDITION---------*/
              if (__qus_logic[i].condition == ___ok.__logic.__con[4] && !__apply) {
                if (__qus_logic[i].type == ___ok.__logic.___values[0]) {
                  if (__qus_logic[i].action == ___ok.__logic.__default_value) {
                    key = screen.length
                    __apply = true;
                    return key -1
                  } else {
                    key = screen.findIndex((question) => question._id === __qus_logic[i].action);
                    if (key <= __cur_key) {
                      return __cur_key + 1
                    }
                    __apply = true;
                    return key
                  }
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[1]) {
                  __apply = true;
                  return __cur_key + 1
                }
                if (__qus_logic[i].type == ___ok.__logic.___values[2]) {
                  window.open(
                    (__qus_logic[i].action.indexOf("http://") == 0 || __qus_logic[i].action.indexOf("https://") == 0) ?  __qus_logic[i].action :  `https://${__qus_logic[i].action}`,
                    '_blank'
                  );
                  __apply = true;
                  return __cur_key + 1
                }
    
              }
              /*-----------END IF ANY CONDITION------------*/
    
              if ((__qus_logic.length - 1) == i) {
                return __cur_key + 1
              }
    
            }
          } else {
            return __cur_key + 1
           }
        } else {
          return __cur_key + 1
        }
    
      }
}
