"use strict";(self.webpackChunkkuryltai=self.webpackChunkkuryltai||[]).push([[8668],{38668:(W,s,_)=>{_.r(s),_.d(s,{HomePageEE:()=>m});var D=_(92132),P=_(54675),n=_(64623),A=_(21272),C=_(2291),R=_(14718),i=_(15797),U=_(55151),v=_(79077),B=_(93805),t=_(15126),l=_(63299),I=_(67014),L=_(59080),d=_(79275),O=_(82437),T=_(61535),o=_(5790),E=_(12083),M=_(35223),K=_(5409),a=_(74930),h=_(2600),r=_(48940),f=_(41286),g=_(51187),S=_(56336),y=_(39404),N=_(58692),j=_(54257),H=_(501),e=_(57646),F=_(23120),V=_(44414),Z=_(25962),x=_(14664),$=_(42588),c=_(90325),z=_(62785),G=_(87443),X=_(41032),Y=_(22957),J=_(93179),Q=_(73055),u=_(15747),p=_(85306),k=_(77965),w=_(26509),b=_(84624),q=_(71210),__=_(32058),E_=_(81185),t_=_(82261),s_=_(29341),O_=_(67031);const m=()=>((0,n.u)(),(0,D.jsx)(P.HomePageCE,{}))},64623:(W,s,_)=>{_.d(s,{u:()=>B});var D=_(21272),P=_(2291),n=_(67031),A=_(54894),C=_(17703),R=_(93805);const i="strapi-notification-seat-limit",U="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:l,isError:I,isLoading:L}=(0,R.m)(),d=(0,P.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:o,licenseLimitStatus:E,isHostedOnStrapiCloud:M}=l??{};D.useEffect(()=>{if(I||L)return;const K=!n(o)&&!window.sessionStorage.getItem(`${i}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let a;E==="OVER_LIMIT"?a="warning":E==="AT_LIMIT"&&(a="softWarning"),K&&d({type:a,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:o}),link:{url:M?U:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:M})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${i}-${O}`,"true")}})},[d,l,O,t,L,o,E,T,M,I])}}}]);
