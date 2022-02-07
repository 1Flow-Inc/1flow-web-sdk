
import {OneFlowHelpers} from './s'
import {__result,_type,__one_flow_events,___ok} from '../index'
/**
 This is for the animations
*/
export class An extends OneFlowHelpers {
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
            this.sT(() => this._effect(), 50/ 4);
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
            this.sT(()=>{element.remove();},500 / 4);
        }else{
            this.sT(()=>{this.__rm_el(element) ;},100 / 4);
         
        }
    }
       
    }
    /**
  @return {*} remove color from button
  */
    _rCB = () => {
        let elmnt = this.gE("finish");
        elmnt.classList.remove("removeEffect");
        this.sT(() => { elmnt.classList.add("effectapply") }, 500 / 4)

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
        var op = 0.24;
        let __in = setInterval(function () {
            if (op >= __opacity){
                element.style.opacity = __opacity;
                clearInterval(__in);
               
            }
            element.style.opacity = op;
           // element.style.filter = 'opacity=' + op * .20 ;
            op += (op * 0.100).toFixed(2);;
        }, __interval / 4);
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
        }, __interval/ 4);
    }
    }
}