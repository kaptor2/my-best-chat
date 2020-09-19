import { User } from '../schemas';
import { Express } from 'express';

export const userController = (app: Express) => {
    create(app);
    getByID(app);
}

const create = async (app: Express) => {
    app.post('/user/registration', ({ body: { email, fullname, password } }, res) => {
        const user = new User({ email, fullname, password });
        user.save()
            .then((user) => res.json(user).send())
            .catch(() => res.status(404).json({message: 'Sorry, cant find that'}).send());
    });
}

const getByID = (app: Express) => {
    app.get('/user/:id', ({ params: { id } }, res) => {
        User.findById(id)
            .then((user) => res.json(user).send())
            .catch(() => res.status(404).json({message: 'Sorry, cant find that'}).send());
    })
}