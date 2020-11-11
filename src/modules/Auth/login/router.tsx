import loadingComponent from '@components/commons/LoadingComponent/LoadingComponent'
import Loadable from 'react-loadable'
const Login=Loadable({
    loader:()=>import("./index"),
    loading:loadingComponent,
});
export default{
    path:"/login",
    exact:true,
    main:Login,
}
