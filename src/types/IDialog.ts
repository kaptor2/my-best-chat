export interface IDialog {
    _id: string,
    text: string,
    created_at: string,
    notReed: boolean,
    count_unread: number,
    user: {
        _id: string,
        fullname: string,
        avatar: string
        online: boolean
    }
}