import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            backgroundPrimary: string,
            backgroundSecondary: string,
            navbarColor: string,
            logo: string,
            detail: string,
            detailBtn: string,
            detailDarker: string,
            switchShadow: string,
            menuItemsColor: string,
            menuItemsShadow: string,
            title: string,
        },
        title
    }
}