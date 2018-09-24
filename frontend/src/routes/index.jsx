import Loader from '../components/loaders';

const Main = Loader(() =>
  import(/* webpackChunkName: "Main" */ '../layouts/Main.jsx')
);

export default [{ path: '/', component: Main }];
