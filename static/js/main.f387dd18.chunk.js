(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{2:function(_,e,t){"use strict";t(0);var n=t(1);e.a=function(_){var e=_.label,t=_.onClick,a=_.className;return Object(n.jsx)("button",{onClick:t,className:a,children:e})}},20:function(_,e,t){},21:function(_,e,t){},25:function(_,e,t){"use strict";t.r(e);var n=t(0),a=t.n(n),r=t(7),l=t.n(r),s=(t(20),t(21),t(8)),c=t(1);var o=function(){return Object(c.jsx)(s.a,{})},i=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,l=e.getTTFB;t(_),n(_),a(_),r(_),l(_)}))};l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(o,{})}),document.getElementById("root")),i()},8:function(module,__webpack_exports__,__webpack_require__){"use strict";var _Users_hannaheichelsdoerfer_Code_personal_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(15),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_styles_Calculator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(9),_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(2),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(1),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__),operators=["/","*","-","+"],Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(_Users_hannaheichelsdoerfer_Code_personal_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),display=_useState2[0],setDisplay=_useState2[1],lastInput=display.slice(-1),lastInputWasOperator=operators.includes(lastInput),values=display.split(/([/*+-])/),lastDigits=values[values.length-1],handleClick=function(_){setDisplay(display+_.target.innerText)},handleClickOperator=function(_){!lastInputWasOperator&&setDisplay(display+_.target.innerText)},clear=function(){setDisplay("")},deleteLast=function(){setDisplay(display.slice(0,-1))},calculate=function calculate(){try{setDisplay(eval(display).toString())}catch(error){console.log("Not a valid operation!")}},percentage=function(){lastInputWasOperator||(values[values.length-1]=parseFloat(lastDigits)/100,setDisplay(values.join("")))},decimalSeperator=function(_){lastDigits.includes(".")||setDisplay(display+_.target.innerText)},zeroCheck=function(_){("0"!==lastDigits[0]||lastDigits.includes("."))&&setDisplay(display+_.target.innerText)};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_styles_Calculator__WEBPACK_IMPORTED_MODULE_2__.a,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"display",children:""===display?0:display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"C",onClick:clear}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"\u2b05",onClick:deleteLast}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"%",onClick:percentage}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"/",onClick:handleClickOperator}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"7",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"8",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"9",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"*",onClick:handleClickOperator}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"4",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"5",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"6",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"-",onClick:handleClickOperator}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"1",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"2",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"3",onClick:handleClick}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"+",onClick:handleClickOperator}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"0",onClick:zeroCheck,className:"span-two"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:".",onClick:decimalSeperator}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Buttons_Button__WEBPACK_IMPORTED_MODULE_3__.a,{label:"=",onClick:calculate})]})};__webpack_exports__.a=Calculator},9:function(_,e,t){"use strict";t.d(e,"a",(function(){return r}));var n,a=t(10),r=t(11).a.div(n||(n=Object(a.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 5rem);\n  grid-template-rows: minmax(5rem, auto) repeat(5, 5rem);\n  justify-content: center;\n  gap: 0.5rem;\n  padding: 0 0.5rem 0.5rem 0.5rem;\n  border-radius: 15px;\n  background: rgba(248, 245, 245, 0.1);\n  backdrop-filter: blur(0.5px);\n  -webkit-backdrop-filter: blur(0.5px);\n\n  .display {\n    font-size: 3rem;\n    grid-column: 1 / -1;\n    /* grid-column: span 4; */\n    padding: 1.5rem;\n    text-align: right;\n    align-self: center;\n    word-wrap: break-word;\n    word-break: break-all;\n  }\n\n  .span-two {\n    grid-column: span 2;\n  }\n\n  button {\n    color: white;\n    font-size: 1rem;\n    background: unset;\n    border: unset;\n    cursor: pointer;\n    outline: none;\n    /* border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n  border-right: 1px solid rgba(255, 255, 255, 0.05); */\n  }\n\n  button:hover {\n    /* transition: ease-in-out 0.1s; */\n    background: rgba(240, 238, 238, 0.1);\n    border-radius: 15px;\n  }\n\n  button:active {\n    background: unset;\n    /* background: rgba(229, 173, 173, 0.1); */\n    /* color: #192f00; */\n    transform: scale(1.2);\n    color: whitesmoke;\n    font-weight: 500;\n  }\n"])))}},[[25,1,2]]]);
//# sourceMappingURL=main.f387dd18.chunk.js.map