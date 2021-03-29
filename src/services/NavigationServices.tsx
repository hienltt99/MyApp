import {StackActions, CommonActions} from '@react-navigation/native';

let _navigator: any;

function setTopLevelNavigator(navigatorRef: any) {
  _navigator = navigatorRef;
}

const back = () => {
  _navigator.dispatch(CommonActions.goBack);
};

function navigate(routeName: string, params?: any) {
  _navigator.dispatch(
    CommonActions.navigate(
      routeName,
      params,
    ),
  );
}

function replace(routeName: string, params?: any) {
  _navigator.dispatch(
    StackActions.replace(
      routeName,
      params,
    ),
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  back,
  replace,
};
