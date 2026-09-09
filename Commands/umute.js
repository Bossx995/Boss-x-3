async function umuteCommand(sock, chatId) {
    await sock.groupSettingUpdate(chatId, 'not_announcement'); // Umute the group
    await sock.sendMessage(chatId, { text: 'The group has been umuted.' });
}

module.exports = umuteCommand;
