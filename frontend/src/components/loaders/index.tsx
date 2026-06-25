import loadable from '@loadable/component';
import Loading from './ComponentLoader';

const Loader = (loader: any) =>
  loadable(loader, {
    fallback: <Loading />,
    timeout: 10000,
    /* devblock:start */
    delay: 1000
    /* devblock:end */
  });

export default Loader;
