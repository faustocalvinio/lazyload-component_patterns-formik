
import { type LazyExoticComponent, lazy } from "react";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    name: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const Lazy1 = lazy(()=> import(/* webpackChunkName: "lazypage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(()=> import(/* webpackChunkName: "lazypage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(()=> import(/* webpackChunkName: "lazypage3" */'../01-lazyload/pages/LazyPage3'));

export const routes:Route[] = [
    {
        to: '/lazy-1',
        path: '/lazy-1',
        Component: Lazy1,
        name: 'Lazy Page 1'
    },
    {
        to: '/lazy-2',
        path: '/lazy-2',
        Component: Lazy2,
        name: 'Lazy Page 2'
    },
    {
        to: '/lazy-3',
        path: '/lazy-3',
        Component: Lazy3,
        name: 'Lazy Page 3'
    },
]