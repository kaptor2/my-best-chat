export const querys = {
    getAllDialogsByIdUser: `SELECT 
            myDialogs._id,
            lastMessage.date AS created_at,
            lastMessage.text,
            IF( lastMessage.user = ?, 1,0 ) as isMe,
            lastMessage.NoRe as notReed,
            IF(lastMessage.NoRe = 0, noReed.cr, 0) AS count_unread,
            JSON_OBJECT('_id', users._id,'fullname',users.fullname,'avatar',users.avatar) user
        FROM 
            (SELECT dialog AS _id, MAX(DATE) AS date FROM message 
            WHERE dialog LIKE ('%+?+%') 
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
        users ON myDialogs._id like CONCAT('%+',users._id,'+%') AND users._id != ?
        ORDER BY created_at DESC`,

    getMessages: `SELECT 
            message._id, 
            message.date, 
            message.dialog,
            JSON_OBJECT('_id', users._id,'fullName',users.fullname,'avatar',users.avatar) as user,
            message.text,
            IF(users._id = ?, 1, 0) as isMe,
            IF(users._id = ?,message.notReed, 0) AS notReed
        FROM message
        LEFT JOIN users ON message.user = users._id
        WHERE message.dialog = ?
        ORDER BY date ASC`
}