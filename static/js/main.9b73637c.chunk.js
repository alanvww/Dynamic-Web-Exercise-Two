(this["webpackJsonpexercise-two"]=this["webpackJsonpexercise-two"]||[]).push([[0],{35:function(e,c,t){},36:function(e,c,t){},65:function(e,c,t){"use strict";t.r(c);var n=t(1),i=t.n(n),s=t(26),a=t.n(s),r=(t(35),t(30)),h=t(3),o=(t(36),t(16)),j=t(27),l=t.n(j),d=t(0);var b=function(e){var c=e.cloudiness,t=e.currentTemp,n=e.highTemp,i=e.humidity,s=e.lowTemp,a=e.weatherDescription,r=e.weatherType,h=void 0===r?"Unknown":r,o=e.windSpeed;return Object(d.jsx)("section",{className:"WeatherCard",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Current Weather"}),Object(d.jsx)("strong",{className:"highlightedData",children:h})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Current Temperature"}),Object(d.jsxs)("strong",{className:"highlightedData",children:[t,"\xb0C"]})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Low - High"}),Object(d.jsxs)("strong",{className:"highlightedData",children:[s,"\xb0C - ",n,"\xb0C"]})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Cloudiness"}),Object(d.jsx)("strong",{className:"highlightedData",children:c})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Humidity"}),Object(d.jsx)("strong",{className:"highlightedData",children:i})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Description"}),Object(d.jsx)("strong",{className:"highlightedData",children:a})]}),Object(d.jsxs)("section",{className:"item",children:[Object(d.jsx)("h2",{children:"Wind Speed"}),Object(d.jsxs)("strong",{className:"highlightedData",children:[o,"mph"]})]})]})})},m=t(7),x=t(8);var O=function(e){switch(e.weatherType){default:return Object(d.jsx)(m.a,{icon:x.a});case"Clear":return Object(d.jsx)(m.a,{icon:x.d});case"Rain":return Object(d.jsx)(m.a,{icon:x.b});case"Snow":return Object(d.jsx)(m.a,{icon:x.c})}};var u=function(){var e=Object(n.useState)(),c=Object(o.a)(e,2),t=c[0],i=c[1],s=Object(n.useState)(),a=Object(o.a)(s,2),r=a[0],j=a[1],m=new URLSearchParams(Object(h.f)().search),x="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("70b0bdefd6b84baa7449b2155d0dd184");Object(n.useEffect)((function(){var e=m.get("city");i(e)}),[m]),Object(n.useEffect)((function(){t&&l.a.get(x).then((function(e){j(e.data),console.log(e)})).catch((function(e){console.log(e)}))}),[x,t]);var u=Object(n.useMemo)((function(){return r?{cloudiness:r.clouds.all,currentTemp:Math.round(r.main.temp-273.15),highTemp:Math.round(r.main.temp_max-273.15),humidity:r.main.humidity,lowTemp:Math.round(r.main.temp_min-273.15),weatherDescription:r.weather[0].description,weatherType:r.weather[0].main,windSpeed:r.wind.speed}:{}}),[r]),g=u.cloudiness,p=u.currentTemp,w=u.highTemp,f=u.humidity,y=u.lowTemp,T=u.weatherDescription,N=u.weatherType,v=u.windSpeed;return Object(d.jsxs)("main",{className:"App",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"cityList",children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"Dynamic-Web-Exercise-Two/?city=osaka",className:"osaka"===t&&"Active",children:"Osaka"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"Dynamic-Web-Exercise-Two/?city=chicago",className:"chicago"===t&&"Active",children:"Chicago"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"Dynamic-Web-Exercise-Two/?city=hongkong",className:"hongkong"===t&&"Active",children:"Hongkong"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"Dynamic-Web-Exercise-Two/?city=London",className:"London"===t&&"Active",children:"London"})}),Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"Dynamic-Web-Exercise-Two/?city=Chengdu",className:"Chengdu"===t&&"Active",children:"Chengdu"})})]})}),Object(d.jsx)("h1",{className:"Location",style:{textShadow:"0 0 10px rgb(".concat(255-g,",").concat(255-g,",").concat(255-g,")")},children:t}),Object(d.jsx)("section",{className:"WeatherIcon",style:{color:"rgba(".concat(255-g/2,",").concat(255-g/2,",").concat(255-g/2,",1")},children:Object(d.jsx)(O,{weatherType:N})})]}),Object(d.jsx)(b,{cloudiness:g,currentTemp:p,highTemp:w,humidity:f,lowTemp:y,weatherDescription:T,weatherType:N,windSpeed:v})]})};var g=function(){return Object(d.jsx)(r.a,{children:Object(d.jsx)(h.c,{children:Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(u,{})})})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,66)).then((function(c){var t=c.getCLS,n=c.getFID,i=c.getFCP,s=c.getLCP,a=c.getTTFB;t(e),n(e),i(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[65,1,2]]]);
//# sourceMappingURL=main.9b73637c.chunk.js.map