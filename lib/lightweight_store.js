const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'data', 'store.json');
const store = { contacts: {}, messages: {} };
function readFromFile(){ try { if(fs.existsSync(file)){ const d=JSON.parse(fs.readFileSync(file,'utf8')); Object.assign(store,d); } } catch(e){} }
function writeToFile(){ try { fs.mkdirSync(path.dirname(file),{recursive:true}); fs.writeFileSync(file, JSON.stringify({contacts:store.contacts,messages:store.messages})); } catch(e){} }
function bind(ev){ store.ev = ev; }
async function loadMessage(jid,id){ return store.messages?.[jid]?.[id] || null; }
function saveMessage(m){ const jid=m?.key?.remoteJid, id=m?.key?.id; if(!jid||!id)return; store.messages[jid] ||= {}; store.messages[jid][id]=m; const ids=Object.keys(store.messages[jid]); if(ids.length>20) delete store.messages[jid][ids[0]]; }
store.readFromFile=readFromFile; store.writeToFile=writeToFile; store.bind=bind; store.loadMessage=loadMessage; store.saveMessage=saveMessage;
module.exports=store;
