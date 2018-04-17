import { InMemoryDbService } from 'angular-in-memory-web-api';

// DLXY	大连欣钰	http://113.57.169.43:8088/DLXY	修改  删除
//   SZDF	苏州东风	http://113.57.169.43:8088/SZDF	修改  删除
//   NBYY	宁波堰甬	http://113.57.169.43:8088/NBYY	修改  删除
//   HZSF	杭州世方	http://113.57.169.43:8088/HZSF	修改  删除
//   HZDSD	杭州东达盛	http://113.57.169.43:8088/HZDSD	修改  删除
//   WBCS	天友软件	http://115.29.178.60:8888/MobileSrvDvPlus_wb	修改  删除
//   JNSC	济宁首创	http://113.57.169.43:8088/JNSC	修改  删除
//   SHDR	上海东睿	http://113.57.169.43:8088/SHDR	修改  删除
//   SZYYS	苏州永业盛	http://113.57.169.43:8088/SZYYS	修改  删除
//   SDSC	山东首创	http://113.57.169.43:8088/SDSC	修改  删除
//   YPZ	YPZ	http://115.29.178.60:8888/ypz	修改  删除
//   XDJT	轩达集团	http://113.57.169.43:8088/XDJT	修改  删除
//   YAJT	永奥集团	http://113.57.169.43:8088/YAJT	修改  删除
//   CQJF	重庆嘉峰	http://113.57.169.43:8088/CQJF	修改  删除
//   JLTJT	金路通集团	http://113.57.169.43:8088/JLTJT	修改  删除
//   XRYJT	兴荣亚集团	http://113.57.169.43:8088/XRYJT	修改  删除
//   FZCD	福州昶达	http://113.57.169.43:8088/FZCD	修改  删除
//   GADW	高安东沃	http://113.57.169.43:8088/GADW	修改  删除
//   SXDS	陕西东尚	http://113.57.169.43:8088/SXDS	修改  删除
//   SXCK	陕西长凯	http://113.57.169.43:8088/SXCK	修改  删除
//   SXBS	陕西北盛	http://113.57.169.43:8088/SXBS	修改  删除
//   YLSH	榆林盛华	http://113.57.169.43:8088/YLSH	修改  删除
//   LJYG	龙锦阳光	http://113.57.169.43:8088/LJYG	修改  删除
//   DQFK	东汽方科	http://113.57.169.43:8088/DQFK	修改  删除
//   SXRD	陕西日鼎	http://113.57.169.43:8088/SXRD	修改  删除
//   ZDDF	正定东风	http://113.57.169.43:8088/ZDDF

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const companyInfoes = [
      {companyId: 1, companyNo: "NJDN", companyName: "南京东宁", serverUrl: "http://113.57.169.43:8088/NJDN"},
      {companyId: 2, companyNo: "SHCF", companyName: "上海畅飞", serverUrl: "http://113.57.169.43:8088/SHCF"},
      {companyId: 3, companyNo: "FYJH", companyName: "阜阳君和", serverUrl: "http://113.57.169.43:8088/FYJH"},
      {companyId: 4, companyNo: "SYDFW", companyName: "沈阳东风王", serverUrl: "http://113.57.169.43:8088/SYDFW"},
      {companyId: 5, companyNo: "DLXY", companyName: "大连欣钰", serverUrl: "http://113.57.169.43:8088/DLXY"},
      {companyId: 6, companyNo: "SZDF", companyName: "苏州东风", serverUrl: "http://113.57.169.43:8088/SZDF"},
      {companyId: 7, companyNo: "NBYY", companyName: "宁波堰甬", serverUrl: "http://113.57.169.43:8088/NBYY"},
      {companyId: 8, companyNo: "HZSF", companyName: "杭州世方", serverUrl: "http://113.57.169.43:8088/HZSF"},
      {companyId: 9, companyNo: "HZDSD", companyName: "杭州东达盛", serverUrl: "http://113.57.169.43:8088/HZDSD"},
      {companyId: 10, companyNo: "JNSC", companyName: "济宁首创", serverUrl: "http://113.57.169.43:8088/JNSC"},
      {companyId: 11, companyNo: "SHDR", companyName: "上海东睿", serverUrl: "http://113.57.169.43:8088/SHDR"},
      {companyId: 12, companyNo: "SZYYS", companyName: "苏州永业盛", serverUrl: "http://113.57.169.43:8088/SZYYS"},
      {companyId: 13, companyNo: "SDSC", companyName: "山东首创", serverUrl: "http://113.57.169.43:8088/SDSC"},
    ];
    return {companyInfoes};
  }


}
