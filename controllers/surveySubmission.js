
import {oneFlowGlob,__result,_type,__one_flow_events,___ok,__k} from '../index'
import {An} from './an'
import {F} from './f'
export class surveySubmission extends An {
    constructor() {
        super();
        this.answers = [];
        this.obj = {};
        this.checkBoxAnswer = [];

    }
    /**
      @params {key} key i.e. object property name
      @params {value} value i.e. object property value
      @return prepare object
    */
    generateProperty = (key, value) => {
        if (key === 'answerObj') {
            let _fI =   this.answers.filter(x=>x.screen_id === value.screen_id );
            if (_fI.length == 0) this.answers.push(value);
            let data = this.e(this.ds(this.answers));
            this.__store_data(___ok.__answer, data);
        }
        else this.obj[key] = value;
        return this;
    }
    /**
       @params _e _e element
       @return to prepare answer object
   */
    createObj = (keyValueStringArray) => {
        this.generateProperty.apply({}, keyValueStringArray);
    }
    /**
           @params _e _e element
           @return to prepare answer object
       */
    ansObj = (_e) => {
        //_gA for getting attribut  for screen index
        let _gA = _e.target.getAttribute('data_attr');
        //this is for nps, rating numerical,rating 1-5
        if (_e.target.tagName === 'BUTTON' && _e.target?.previousElementSibling?.nodeName?.toUpperCase() !== 'UL') {
            let _htmlContent = '';
            if (_e.target.tagName === 'BUTTON' && _e.target?.firstChild?.nodeName?.toLowerCase() === 'img') {
                _htmlContent = _e.target.firstChild.id;
            }
            else _htmlContent = _e.target.classList.value.indexOf("finish") !== -1 ? _e.target.previousElementSibling.firstElementChild.value : _e.target.innerHTML;
            if (_htmlContent !='' && _htmlContent.length !== 0) this.createObj(["answerObj", { 'screen_id': `${_gA}`, 'answer_value': _htmlContent }]);
        }
        //this is for input type radio , img,path
        else if (_e.target.tagName.toUpperCase() === 'INPUT' && _e.target.type.toUpperCase() === 'RADIO') {
            this.createObj(['answerObj', { 'screen_id': `${_gA}`, 'answer_index': _e.target.id }]);
        }
        //this is for input type img , span
        else if (_e.target.tagName.toLowerCase() === 'path' || _e.target.tagName.toLowerCase() === 'img') {
            this.createObj(['answerObj', { 'screen_id': `${_gA}`, 'answer_value': _e.target.id }]);
        }
        //this is for input type checkboxes and this is for multiple selections
        else if (_e.target.tagName === 'BUTTON' && _e.target.previousElementSibling.nodeName.toUpperCase() === 'UL') {
            let _gEN = this.gEN('check');
            for (var i = 0; i < _gEN.length; i++) {
                if (_gEN[i].checked) {
                    if (this.checkBoxAnswer.indexOf(_gEN[i].id)=== -1)  this.checkBoxAnswer.push(_gEN[i].id) ;
                }
                else {
                    let _index = this.checkBoxAnswer.indexOf(_gEN[i].id);
                    if (_index !== -1) {
                        this.checkBoxAnswer.splice(_index, 1);
                    }
                }
                if (i === _gEN.length - 1) this.createObj(['answerObj', { 'screen_id': `${_gA}`, 'answer_index': this.checkBoxAnswer.toString() }]);

            }
            this.showHideFinish()
        }

        else if (_e.target.tagName.toUpperCase() === 'INPUT' && _e.target.type.toUpperCase() === 'CHECKBOX') {
            let _gEN = _e.target.id;
            if (_gEN) {
                let _index = this.checkBoxAnswer.indexOf(_gEN);
                if (_index === -1) this.checkBoxAnswer.push(_gEN);
                else this.checkBoxAnswer.splice(_index, 1);
            }

            this.showHideFinish()
        }

        //for getting next survey
        if (!(_e.target.tagName.toUpperCase() === 'INPUT' && _e.target.type.toUpperCase() === 'CHECKBOX')) {
            this.sT(() => { this.gNS(_gA); }, 500);

        }
    }
    showHideFinish = () => {
        let el = this.gE('finish');
        if (this.checkBoxAnswer.length !== 0) {
            el.classList.add("displayFinsih");
        } else {
            el.classList.remove("displayFinsih");
        }
    }
    /**
       @params survey_id __key "1FLOW PROJECT API KEY"
       @return Boolean
   */
    addSurvey = (survey_id, trigger_event) => {
        let u = this.__storage_data([___ok.s, ___ok.u]);
        let $this = oneFlowGlob(); //get one flow key
        const request = new F($this.__key);
        let __answer = this.__storage_data(___ok.__answer);
        if ($this.emptyObj(__answer)) {
            this.answers = this.dp(this.d(__answer));
        }
        //check data exists in local storage or not
        if (this.answers.length !== 0) {
            //Creating survey object to save data
            this.createObj(["survey_data", {
                "survey_id": survey_id, "os": this.__os(), "analytic_user_id": u.au,
                "session_id": u.s_id, "trigger_event": trigger_event, "answers": this.answers,"mode":$this.gtcn().m
            }]);
            //USED CONSTANT FOR F
            request.req($this.getUrl(___ok.__survey.api), ___ok.__request.p, (dr) => {
                this.__remove_data(___ok.__answer);
                 this.__ls();
                 
            }, (e) => { this.l(___ok.er, e) }, JSON.stringify(this.obj["survey_data"]));
        }
    }

    __ls=(rm=true)=>{
        let __c_s=this.__storage_data([___ok.__survey.sc,___ok.__survey.ls]);
        const __s=__c_s.survey_settings
        let __rs=(__s.resurvey_option)? this.__cl_time(__s.retake_survey) :null
        let __lst=(__c_s.__ls)?__c_s.__ls:[];
        __lst=this.__rm_ls(__lst,__c_s._id);
        __lst.push({id:__c_s._id,lt:__rs});
        this.__store_data(___ok.__survey.ls,{__ls:__lst});
        if(rm){ this.__removeData(___ok.__survey.sc); }
      
        let __answer = this.__storage_data(___ok.__answer);
    }

    __rm_ls=(__ls,id)=>{
        if(__ls.length > 0){
            __ls= __ls.filter((s) => s.id !== id);
        }
        return __ls
    }

    __cl_time=(__d)=>{
       let __fd=this.__timestarp(__d.retake_input_value,__d.retake_select_value);
        return __fd
    }
    __timestarp=(__d,__t)=>{
        const __cd= new Date();
        switch(__t){
            case ___ok.__time.m:   
              return new Date(__cd.getTime() + __d*60000).getTime();
            case ___ok.__time.h:   
            return new Date(__cd.getTime() + __d*60*60000).getTime();
            case ___ok.__time.d:   
            return new Date(__cd.getTime() + __d*24*60*60000).getTime();
            default :
            return new Date(__cd.getTime() + __d*24*60*60000).getTime();
        }
    }
}