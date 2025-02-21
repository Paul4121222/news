import { compose } from "redux"

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }

    interface ITheme {
        [propName: string]: any
    }
      
    interface IPromiseData {
        read: () => ITheme
    }
}
