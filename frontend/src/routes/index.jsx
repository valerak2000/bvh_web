import Loader from '../views/loaders';

const Main = Loader(() =>
  import(/* webpackChunkName: "Main" */ '../layouts/Main.jsx')
);

export default [{ path: '/', component: Main }];
