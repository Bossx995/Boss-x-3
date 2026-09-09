const fs=require('fs'), path=require('path');
const file=path.join(process.cwd(),'data','banned.json');
function load(){try{return JSON.parse(fs.readFileSync(file,'utf8'))}catch{return []}}
function isBanned(jid){return load().includes(String(jid).split('@')[0]) || load().includes(jid)}
module.exports={isBanned};
