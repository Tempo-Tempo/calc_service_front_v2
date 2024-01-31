import MainPage from "../../pages/MainPage";
import MyTriangle from "../../pages/figurePages/MyTriangle";



export const ArrRoutes = [
   { path: "/", component: MainPage, exact: true },
   { path: "/triangle", component: MyTriangle, exact: true },
]