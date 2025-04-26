import RemoteComponentLoader from '../../../core/remote-components/remote-component-loader';

const UesrList = () => {
  return (
    <RemoteComponentLoader loadComponent={() => import('userLifecycle/UserList')} />
  );
};

export default UesrList;