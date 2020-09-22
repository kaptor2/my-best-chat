import { Message, Dialog } from '../models';
import { Express } from 'express';

export const messageController = (app: Express) => {
    createMessage(app);
    getAllMessagesByIDDialog(app);
}

const getAllMessagesByIDDialog = (app: Express) => {
    app.get('/message/get-all/:id', ({ params: { id } }, res) => {
        Message.find({ "dialog": id }).populate('user', 'avatar').sort([['updatedAt', -1]])
            .then((message: any) => {
                res.json(message).send()
            })
            .catch((error) => res.status(200).json({ message: 'Sorry, failed to search Messages', error }).send());
    })
} 

const createMessage = (app: Express) => {
    app.post('/message/create', ({ body: { dialog, user, text, audio, documents, reed = false } }, res) => {
        const message = new Message({ dialog, user, text, audio, documents, reed });
        message.save()
            .then((message) => {
                Dialog.findByIdAndUpdate(dialog, {
                    $set: {
                        last_message: message._id
                    }
                });
                res.status(200).json(message).send(message);
            })
            .catch((error) => res.status(404).json({ message: error }).send());
    })
}