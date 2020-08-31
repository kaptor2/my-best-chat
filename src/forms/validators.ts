export const validators = (name: string, observableField?: string, watch?: any) => {
    switch (name) {
        case 'email':
            return { required: true, min: 5, pattern: /.*@.*\..+/i }
        case 'name':
            return {
                required: true, min: 1,
                pattern: {
                    value: /^[a-zA-ZА-Яа-я]+$/i,
                    message: `Поле должно состоять только из букв`
                }
            }
        case 'password':
            return {
                required: true, min: 9,
                pattern: {
                    value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/i,
                    message: "Пароль должен содержать не менее 8 символов, состоять из латинских букв и цифр"
                }
            }
        case 'stillpassword' && watch :
            return {
                validate: (value: any) => {
                    return value === watch(observableField); // value is from password2 and watch will return value from password1
                }
            }
    }
}