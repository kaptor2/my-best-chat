import { TDialogState } from './dialogs/typesDialog'
import { TMessageState } from './messages/typesMessage'

export type TState = {
    dialogs: TDialogState
    messages: TMessageState
}