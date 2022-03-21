import { logUser } from 'javascript-1flow-sdk/react-next';
import { logEvent } from 'javascript-1flow-sdk/react-next';
import { on } from 'javascript-1flow-sdk/react-next';
declare module 'javascript-1flow-sdk/react-next'{

    export function logEvent(event_name:String,params:Object={}):void
    export function  logUser(system_id:string,paramsL:Object={}):void
    export function on(event_name:string,action:any):void
    export const oneflow:{
        logEvent:logEvent,
        logUser:LogUser,
        on:on
    }
}
