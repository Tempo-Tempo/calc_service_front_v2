import MainPage from "../../pages/MainPage";
import MyTriangle from "../../pages/figurePages/MyTriangle";
import MyTriangleMoreInfoPage from "../../pages/figurePages/MyTriangleMoreInfoPage";


export const ArrRoutes = [
   { path: "/", component: MainPage, exact: true },
   { path: "/triangle", component: MyTriangle, exact: true },
   { path: "/triangle/info", component: MyTriangleMoreInfoPage, exact: true },
]