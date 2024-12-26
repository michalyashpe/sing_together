import { Application } from '@nativescript/core'
import { MainViewModel } from './viewmodels/main-view-model'
import { MainPage } from './pages/main-page'

Application.run({
    create: () => {
        const page = new MainPage()
        page.bindingContext = new MainViewModel()
        return page
    },
})