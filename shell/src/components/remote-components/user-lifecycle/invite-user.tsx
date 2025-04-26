import RemoteComponentLoader from '../../../core/remote-components/remote-component-loader';

const InviteUser = () => {
  return (
    <RemoteComponentLoader loadComponent={() => import('userLifecycle/InviteUser')} />
  );
};

export default InviteUser;