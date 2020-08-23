import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faBars,
    faCalendarDay,
    faCircleNotch,
    faHome,
    faPlus,
    faStar,
    faSun,
    faUser
} from '@fortawesome/free-solid-svg-icons'

export const registerLibrary = () => {
    library.add(
        faBars,
        faCalendarDay,
        faCircleNotch,
        faHome,
        faPlus,
        faStar,
        faSun,
        faUser
    )
}
