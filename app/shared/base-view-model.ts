import { Observable } from '@nativescript/core'

export class BaseViewModel extends Observable {
    protected notifyPropertyChanges(propertyName: string, value: any): void {
        this.notifyPropertyChange(propertyName, value)
    }
}