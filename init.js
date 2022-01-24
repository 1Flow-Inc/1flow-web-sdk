// SDK initiator 
(async (window) => {
   /**
    * Global variable and Global functions
    */
   const t = (se) => {
         return document.querySelector(se)
      },
      __G = window;
   a = (__ref, __attr) => {
      return __ref.getAttribute(__attr)
   };
   w = () => {
      return __G
   };
   stGbl = (d) => {
      __G.glob = d
   };
   oneFlowGlob = () => {
      return __G.glob
   };
   oneFlowEvents = (name, data, callback) => {
      let __in = 10;
      window.setTimeout(function () {
        
         if (window.glob) {
            one_flow_events(name, data)
         } else {
            oneFlowEvents(name, data, callback);
         }
      }, __in);
   };
   oneFlowLogUser = (sys, data, callback) => {
      let __in = 10;
      window.setTimeout(function () {
         if (window.glob) {
            one_flow_log_user(sys, data)
         } else {
            oneFlowLogUser(sys, data, callback);
         }
      }, __in);
   };
   __k = 'data-api-key', __t = 'script', __cv = 'aHR0cHM6Ly9kZXYuMWZsb3cuYXBwL2FwaS92MS8yMDIxLTA2LTE1L3N1cnZleS1yZXNwb25zZS9kZW1v', ___ok = oneFlow_sdk_const, __one_flow_events = new OneFlowEvent(), ev = (d) => {
      return d.detail
   }
   w().__1f_path_controllers = 'controllers', empty = (__s) => {
      return (__s == '') ? true : false
   }, __result = (__d) => {
      return (__d.result) ? __d.result : {}
   }, _type = (__d) => {
      return typeof __d
   };
   w().__1flow_key = 'one_flow_sdk'
   let _ref = t(`${__t}[${__k}]`);
   let __a_k = a(_ref, __k);
   w().__1flow_api_key = __a_k;
   const c = new C(undefined);
   c.sk(__a_k);
   c.v(__a_k);
   const f = new F(__a_k);
   const su = new Survey();

   su.__removeData(___ok.__survey.s);
   const __enc = new E();
   /**
    * SDK INIT Function {fetch contantsm,survey and project analytic user create here}
    */
   const __getSurvey = () => {
      su.gs(null, () => {})
   }

   const __default_events = (__C) => {
      const DE = new DefaultEvents(__C);
      DE.__default_events();
   }
   async function init() {
      await f.gp(__enc.d(__cv)).then((d) => {
         d = __enc.dp(d);
         const oneflowsdk = new OneflowSDK();
         c.stcn(d);
         let ___an = c.gtcn()
         ___an.sdk = oneflowsdk.get();
         ___an._k = __a_k
         c.stcn(___an);
         stGbl(c);
         const au = new A(___an.m);
         const ___d = au.rd();
         ___d.mode = ___an.m;
         if (!c.emptyObj(su.__storage_data(___ok.s))) {
            oneFlowEvents(___ok.__events.s);
         }
      
         if (au.av()) {
            //'https://dev.1flow.app/api/v1/2021-06-15/project_users'
            f.req(___an.au.au_url, ___ok.__request.p, (dr) => {
               au.s(dr);
               __getSurvey();
               __default_events(___an);
               __g_c=true
            }, (e) => {
               c.l(___ok.er, e)
            }, __enc.ds(___d));
         } else {
            __getSurvey();
            __default_events(___an)
         }
      });
   }

   await init();
})(window);