import {empty,__result,_type,__one_flow_events,___ok} from '../index'
export class OneFlowEvent {
    events = [];
    /**
     * 
     * @param {String} __key   Event Name 
     * @param {Object} _data  (data)
     * @param {function} action Callback 
     * @returns Event Object
     */
    add = (__key, _data, action) => {
        let event = new CustomEvent(__key, {
            detail: _data
        });
        if (this.validFunction(action)) {
            this.addEventListener(__key, action);
        }
        this.events.push(event);
        return event;
    }
    /**
     * 
     * @param {String} __event  Event Name 
     */
    emit = (__event,__rm) => {
        document.dispatchEvent(this.currentEvent(__event));
        if(__rm){
            this.removeEvent(__event);
        }
    }
    /**
     * 
     * @param {String} __key  event name
     * @returns Object Event 
     */
    currentEvent = (__key) => {
        return this.events.find((event) => event.type === __key)
    }
    /**
     * 
     * @param {Object} event  Event Object
     */
    removeCurrentEvent = (event) => {
        let index = this.events.indexOf(event);
        this.events.splice(index, 1);
    }
    /**
     * 
     * @param {String} __key    Event name
     * @param {Function} __a    Event call back
     */
    addEventListener = (__key, __a) => {
        document.addEventListener(__key, __a);
    }
    /**
     * 
     * @param {String} __event  Event name
     */
    removeEvent = (__event) => {
        removeEventListener(this.currentEvent(__event), this.handleFileEmail, false);
        this.removeCurrentEvent(this.currentEvent(__event));
    }
    /**
     * 
     * @param {String} _event   Event Name
     * @returns Boolean
     */
    validEvent = (_event) => {
        return (this.events.find((event) => event.type === _event)) ? true : false;
    }
    /**
     * 
     * @param {*} f  
     * @returns Boolean | check if object is function
     */
    validFunction = (f) => {
        return f instanceof Function
    }
}
