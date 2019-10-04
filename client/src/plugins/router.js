import VueRouter from "vue-router"
import Search from '../modules/Search'
import Display from '../modules/Display'

const routes = [
    { path: '/', component: Search },
    { path: '/display', component: Display }
]

const router = new VueRouter({ routes, mode: 'history' })

export default router