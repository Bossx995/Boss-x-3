async function miscCommand(sock, chatId, message, args) { if (sock?.sendMessage && chatId) await sock.sendMessage(chatId, {text: "❌ This command is unavailable in this build."}, {quoted: message}).catch(()=>{}); }
async function handleHeart(sock, chatId, message, args) { if (sock?.sendMessage && chatId) await sock.sendMessage(chatId, {text: "❌ This command is unavailable in this build."}, {quoted: message}).catch(()=>{}); }
module.exports = {miscCommand, handleHeart};
