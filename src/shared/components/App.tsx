import React, { Suspense,useEffect, } from "react";
import {Route, Switch} from 'react-router-dom';
import LoginRouter from '@modules/Auth/login/router';
import LoadingComponent from "@components/commons/LoadingComponent/LoadingComponent";
import   LanguageProvider  from "@shared/Context/Language";
import { useDispatch } from "react-redux";
import { notification } from "antd";
import { ACCESS_JWTTOKEN } from "@helper/variable";
import {login } from '@reducer/loginReducer';
import { from } from "rxjs";
const AppLogin=React.lazy(()=>import("./AppLogin"));
const AppPages=React.lazy(()=>import("./AppPage"))
interface Iprops {
  privateLogin: boolean;
};
const App = ({ privateLogin }: Iprops) =>{
  const dispatch = useDispatch();
  useEffect(() => {
  notification.config({ placement: "bottomRight" });

    const token = localStorage.getItem(ACCESS_JWTTOKEN);
    if (!token) {
      dispatch(login(true));
    } 
  }, []);
  return (
    <Switch>
      <LanguageProvider>
      <Route
      key={LoginRouter.path}
      path={LoginRouter.path}
      exact={LoginRouter.exact}
      component={LoginRouter.main}
      >
      </Route>
      <Suspense  fallback={<LoadingComponent />}>
          {privateLogin ? <AppLogin privateLogin /> :<AppPages privateLogin />}
      </Suspense>
      </LanguageProvider>
    </Switch>
  );
}

export default App;
