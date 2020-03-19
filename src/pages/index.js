import loadable from "react-loadable"
import Loading from "@common/loading"

export const Home=loadable({
    loader:_=>import("./home"),
    loading:Loading
})

export const Classify=loadable({
    loader:_=>import("./classify"),
    loading:Loading
})

export const Find=loadable({
    loader:_=>import("./find"),
    loading:Loading
})

export const Cart=loadable({
    loader:_=>import("./cart"),
    loading:Loading
})

export const Mine=loadable({
    loader:_=>import("./mine"),
    loading:Loading
})