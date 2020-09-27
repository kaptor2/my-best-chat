export const querys = {
    
    getAllDialogsByIdUser: `SELECT 
            myDialogs._id,
            lastMessage.date AS created_at,
            lastMessage.text,
            IF( lastMessage.user = ?, 1,0 ) as isMe,
            lastMessage.NoRe as notReed,
            IF(lastMessage.NoRe = 0, noReed.cr, 0) AS count_unread,
            JSON_OBJECT('_id', _users._id,'fullname',_users.fullname,'avatar',_users.avatar) user
        FROM 
            (SELECT dialog AS _id, MAX(DATE) AS date FROM message 
            WHERE dialog LIKE CONCAT('%.',?,'.%') 
            GROUP BY dialog) AS myDialogs
        LEFT JOIN 
            (SELECT message.text, DATE, USER, IF(USER = ?, message.notReed, 0) AS NoRe 
                FROM message) as lastMessage 
            ON lastMessage.date = myDialogs.date
        LEFT JOIN 
            (SELECT count(message.notReed) AS cr, message.dialog, user 
                FROM message 
                WHERE message.user != ?
                GROUP BY message.dialog, user ) AS noReed 
            ON noReed.dialog = myDialogs._id
        LEFT JOIN 
        _users ON myDialogs._id like CONCAT('%.',_users._id,'.%') AND _users._id != ?
        ORDER BY created_at DESC`,

    getMessages: `SELECT 
            message._id, 
            message.date, 
            message.dialog,
            JSON_OBJECT('_id', _users._id,'fullName',_users.fullname,'avatar',_users.avatar) as user,
            message.text,
            IF(_users._id = ?, 1, 0) as isMe,
            IF(_users._id = ?,message.notReed, 0) AS notReed
        FROM message
        LEFT JOIN _users ON message.user = _users._id
        WHERE message.dialog = ? AND message.dialog like CONCAT('%.',?,'.%')
        ORDER BY date ASC`,

    setUser: `INSERT INTO users (fullname, email, PASSWORD) VALUES (?, ?, ?)`,

    checkUser: `SELECT COUNT(*) as count FROM users WHERE users.email = ?`,

    checkUserPassword: `SELECT COUNT(*) as count FROM users WHERE users.email = ? AND users.password = ?`,

    setUserToken: `UPDATE users SET users.hash = ? WHERE users.email = ? AND users.password = ?`,

    getIdByHash: `SELECT _id FROM _users WHERE _users.hash = ?`,

    cleaToken: `UPDATE users SET users.hash = ? WHERE users.hash = ?`,
}