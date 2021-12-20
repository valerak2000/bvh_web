import Loader from '../components/loaders/ComponentLoader';

const Root = Loader(() =>
    import(/* webpackChunkName: "Root" */ '../containers/Root/Root.jsx')
);

export default [{ path: '/', component: Root }];
