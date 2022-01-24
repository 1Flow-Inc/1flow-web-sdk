/**
 * One Flow Event Trigger && Handling 
 * @param {*} event_name String || Event name
 * @param {*} data any || data
 * @returns 
 */
const one_flow_events = (event_name , data,only_event=false) => {
    let $this = oneFlowGlob();
    const __helper = $this.getHelpers();
    if (!$this) {
        console.error("Error: Oneflow SDK is not loaded.");
        return false;
    }
    if (event_name == ___ok.__events.cu) {
        const __ev = new A($this.dp($this.d($this.__cn)));
        if(data){
            __ev.add($this.__key,data);
        }else{
            $this.l(___ok.er, ___ok.msg.__e._ar);
        }
    }
    if (event_name == ___ok.__events.e) {
        if ($this.emptyObj(data)) {
            const __d = [];
            __d[0] = data;
            const __ev = new Events($this.gtcn());
            if(only_event){
                __one_flow_events.add(event_name, __d, (d) => {
                    __ev.add($this.__key, ev(d))
                });
            }else{
                
                __helper.__valid(___ok.s) ? __ev.add($this.__key, __d) : __one_flow_events.add(event_name, __d, (d) => {
                    __ev.add($this.__key, ev(d))
                });
            }
           
        } else {
            $this.l(___ok.er, ___ok.msg.__e._ar);
        }

    }
    if (event_name === ___ok.__events.s) {
        const __cs = new Session($this.dp($this.d($this.__cn)));
        if(only_event){
            __one_flow_events.add(event_name, data, (d) => {
                __cs.add($this.__key)
            });
        }else{
            __helper.__valid(___ok.u) ? __cs.add($this.__key) : __one_flow_events.add(event_name, data, () => {
                __cs.add($this.__key)
            });
        }
       
    }
    if (event_name === ___ok.__events.l) {
        const __lg = new L($this.gtcn());
        if(only_event){
            __one_flow_events.add(event_name, data, (d) => {
                let data=ev(d);
                __lg.add($this.__key, true,data.d,data.p)
            }); 
        }else{
       
            __helper.__valid(___ok.s) ? __lg.add($this.__key, true,data.d,data.p) : __one_flow_events.add(event_name, data, (d) => {
                let data=ev(d);
                __lg.add($this.__key, true,data.d,data.p)
            }); 
        }
       
        
    }
}

const one_flow_log_user = (d, p = {}) => {
    oneFlowEvents(___ok.__events.cu,d);
    oneFlowEvents(___ok.__events.s,null,true);
    oneFlowEvents(___ok.__events.l,{d,p},true);
   
}

const _1flow={
    logEvent:(name,time)=>{
        oneFlowEvents(___ok.__events.e,{name,time});
    },
    logUser:(sys_id,parameters={})=>{
        oneFlowLogUser(sys_id, parameters)
    }
}

exports =_1flow;