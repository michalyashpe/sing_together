import { Page } from '@nativescript/core'
import { MainViewModel } from '../viewmodels/main-view-model'
import { APP_TITLE } from '../config/constants'

export class MainPage extends Page {
    constructor() {
        super()
        this.loadView()
    }

    private loadView() {
        this.content = `
            <Page xmlns="http://schemas.nativescript.org/tns.xsd">
                <ActionBar title="${APP_TITLE}" />
                <StackLayout class="p-4">
                    <Label text="{{ message }}" class="text-center text-lg" />
                    <ContentView model="{{ counterModel }}">
                        <ContentView.content>
                            <ns:counter />
                        </ContentView.content>
                    </ContentView>
                </StackLayout>
            </Page>
        `
    }
}