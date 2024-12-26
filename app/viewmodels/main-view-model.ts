import { BaseViewModel } from '../shared/base-view-model'
import { CounterViewModel } from '../components/counter/counter-view-model'
import { WELCOME_MESSAGE } from '../config/constants'

export class MainViewModel extends BaseViewModel {
    private _message: string = WELCOME_MESSAGE
    private _counterModel: CounterViewModel

    constructor() {
        super()
        this._counterModel = new CounterViewModel()
    }

    get message(): string {
        return this._message
    }

    get counterModel(): CounterViewModel {
        return this._counterModel
    }
}