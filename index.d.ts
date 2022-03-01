import { logUser } from 'javascript-1flow-sdk/index';
import { logEvent } from 'javascript-1flow-sdk/index';
import { oneFlowInit } from 'javascript-1flow-sdk/index';

declare module 'javascript-1flow-sdk'{

    export function logEvent(event_name:String,params:Object):void
    export function logUser(system_id:string,params:Object):void
    export function oneFlowInit(key:string):void
    export const oneflow:{
        oneFlowInit,
        logEvent,
        logUser
    }
}
