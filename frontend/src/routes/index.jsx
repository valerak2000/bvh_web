import Loader from '../components/loaders';

const Root = Loader(() =>
    import(/* webpackChunkName: "Root" */ '../containers/Root/Root.jsx')
);

export default [{ path: '/', component: Root }];
