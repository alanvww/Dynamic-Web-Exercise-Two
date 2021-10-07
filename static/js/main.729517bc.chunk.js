(this["webpackJsonpexercise-two"]=this["webpackJsonpexercise-two"]||[]).push([[0],{35:function(e,c,t){},36:function(e,c,t){},65:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),i=t(26),a=t.n(i),r=(t(35),t(30)),h=t(3),j=(t(36),t(16)),o=t(27),l=t.n(o),d=t(0);var b=function(e){var c=e.cloudiness,t=e.currentTemp,n=e.highTemp,s=e.humidity,i=e.lowTemp,a=e.weatherDescription,r=e.weatherType,h=void 0===r?"Unknown":r,j=e.windSpeed;return Object(d.jsx)("section",{className:"WeatherCard",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Current Weather"}),Object(d.jsx)("strong",{className:"highlightedData",children:h})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Current Temperature"}),Object(d.jsxs)("strong",{className:"highlightedData",children:[t,"\xb0C"]})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Low - High"}),Object(d.jsxs)("strong",{className:"highlightedData",children:[i,"\xb0C - ",n,"\xb0C"]})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Cloudiness"}),Object(d.jsx)("strong",{className:"highlightedData",children:c})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Humidity"}),Object(d.jsx)("strong",{className:"highlightedData",children:s})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Description"}),Object(d.jsx)("strong",{className:"highlightedData",children:a})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Wind Speed"}),Object(d.jsxs)("strong",{className:"highlightedData",children:[j,"mph"]})]})]})})},m=t(7),O=t(8);var u=function(e){switch(e.weatherType){default:return Object(d.jsx)(m.a,{icon:O.a});case"Clear":return Object(d.jsx)(m.a,{icon:O.d});case"Rain":return Object(d.jsx)(m.a,{icon:O.b});case"Snow":return Object(d.jsx)(m.a,{icon:O.c})}};var x=function(){var e=Object(n.useState)(),c=Object(j.a)(e,2),t=c[0],s=c[1],i=Object(n.useState)(),a=Object(j.a)(i,2),r=a[0],o=a[1],m=new URLSearchParams(Object(h.f)().search),O="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("70b0bdefd6b84baa7449b2155d0dd184");Object(n.useEffect)((function(){var e=m.get("city");s(e)}),[m]),Object(n.useEffect)((function(){t&&l.a.get(O).then((function(e){o(e.data),console.log(e)})).catch((function(e){console.log(e)}))}),[O,t]);var x=Object(n.useMemo)((function(){return r?{cloudiness:r.clouds.all,currentTemp:Math.round(r.main.temp-273.15),highTemp:Math.round(r.main.temp_max-273.15),humidity:r.main.humidity,lowTemp:Math.round(r.main.temp_min-273.15),weatherDescription:r.weather[0].description,weatherType:r.weather[0].main,windSpeed:r.wind.speed}:{}}),[r]),g=x.cloudiness,p=x.currentTemp,w=x.highTemp,f=x.humidity,N=x.lowTemp,y=x.weatherDescription,T=x.weatherType,v=x.windSpeed;return Object(d.jsxs)("main",{className:"App",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"cityList",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/?city=osaka",className:"osaka"===t&&"Active",children:"Osaka"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/?city=chicago",className:"chicago"===t&&"Active",children:"Chicago"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/?city=hongkong",className:"hongkong"===t&&"Active",children:"Hongkong"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/?city=London",className:"London"===t&&"Active",children:"London"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/?city=Chengdu",className:"Chengdu"===t&&"Active",children:"Chengdu"})})]})}),Object(d.jsx)("h1",{className:"Location",style:{textShadow:"0 0 10px rgb(".concat(255-g,",").concat(255-g,",").concat(255-g,")")},children:t}),Object(d.jsx)("section",{className:"WeatherIcon",style:{color:"rgba(".concat(255-g/2,",").concat(255-g/2,",").concat(255-g/2,",1")},children:Object(d.jsx)(u,{weatherType:T})})]}),Object(d.jsx)(b,{cloudiness:g,currentTemp:p,highTemp:w,humidity:f,lowTemp:N,weatherDescription:y,weatherType:T,windSpeed:v})]})};var g=function(){return Object(d.jsx)(r.a,{children:Object(d.jsx)(h.c,{children:Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(x,{})})})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(c){var t=c.getCLS,n=c.getFID,s=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[65,1,2]]]);
//# sourceMappingURL=main.729517bc.chunk.js.map