import NavigationGroup, { NavigationGroupData } from "./navigation-group";


export default function LeftSidePanel() {
    const navigationData: NavigationGroupData[] = [
        {
            name: 'User Lifecycle',
            // url: 'user-lifecycle',
            items: [
                {
                    name: 'User List',
                    url: 'user-lifecycle/user-list'
                },
                {
                    name: 'Invite User',
                    url: 'user-lifecycle/invite-user'
                },
                {
                    name: 'User Management',
                    url: 'user-management'
                },
                {
                    name: 'Sync History',
                    url: 'sync-history'
                },
            ]
        },
        {
            name: 'Access Policies',
            items: [
                {
                    name: 'Policy List',
                    url: 'policy-list'
                },
                {
                    name: 'Sync Policy',
                    url: 'sync-policy'
                },
            ]
        }
    ];    
    
    return (
        <div className="w-full text-left bg-primary-color">
            {
                navigationData.map((groupData, index) => (
                    <NavigationGroup key={index} {...groupData} />
                ))
            }
        </div>
    );
}