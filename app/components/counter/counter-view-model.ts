import { BaseViewModel } from '../../shared/base-view-model'

export class CounterViewModel extends BaseViewModel {
    private _count: number = 0

    get count(): number {
        return this._count
    }

    increment(): void {
        this._count++
        this.notifyPropertyChanges('count', this._count)
    }
}