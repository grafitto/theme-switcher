export class ThemeSwitcher {
    private themeSwitched: CustomEvent | undefined;
    private eventName = 'theme-switched';
    private element: Element | Window | undefined;
    private eventPayload: any;

    constructor() {
        this.eventPayload = {
            theme: 'light',
            event: null
        };
    }

    public init (element: Element) {
        if (element !== undefined) {
            this.element = element;
        } else {
            this.element = window;
        }

        let themeEvent = window.matchMedia('(prefers-color-scheme: dark)');
        themeEvent.addListener((e: MediaQueryListEvent) => {
            this.eventPayload = {
                event: e,
                theme: 'dark'
            };
            if (e.matches) {
                this.themeSwitched = new CustomEvent(this.eventName, { detail: this.eventPayload });
                this.element?.dispatchEvent(this.themeSwitched);
            } else {
                this.eventPayload.theme = 'light';
                this.themeSwitched = new CustomEvent(this.eventName, { detail: this.eventPayload });
                this.element?.dispatchEvent(this.themeSwitched);
            }
        })

    }
}
