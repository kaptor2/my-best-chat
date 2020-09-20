import { Dialog, User } from '../models';
import { Express } from 'express';

export const dialogController = (app: Express) => {
    createDialog(app);
    getAllDialogsByIDUser(app);
}

const getAllDialogsByIDUser = (app: Express) => {
    app.get('/dialog/:id', ({ params: { id } }, res) => {
        Dialog.find({ "users": { $all: [id] } }).populate('users')
            .then((dialog) => {
                res.json(dialog).send()
            })
            .catch((error) => res.status(404).json({ message: 'Sorry, failed to search dialogs', error }).send());
    })
}

const getUserByID = async (id: string) => User.findById(id);


const createDialog = (app: Express) => {
    app.post('/dialog/create', ({ body: { users } }, res) => {
        const dialog = new Dialog({ users })
        dialog.save()
            .then((dialog) => res.json(dialog).send(dialog))
            .catch(() => res.status(404).json({ message: 'Sorry, failed to create dialog' }).send());
    })
}