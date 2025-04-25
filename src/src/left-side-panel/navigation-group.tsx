export type NavigationItem = {
    name: string,
    url: string
}

export type NavigationGroupData = {
    name: string,
    items: NavigationItem[]
}

export default function NavigationGroup(data: NavigationGroupData) {
    return (
        <div>
            <div className="bg-cyan-600 p-4 flex justify-between cursor-pointer">
                <span className="flex font-bold">{data.name}</span>
                <span className="flex">▼</span>
                {/* <span className="flex">▼</span> */}
            </div>
            <ul>
                {
                    data.items.map((item, index) => (
                        <li key={index} className="p-4 bg-primary-color-hover cursor-pointer">
                            <a href={item.url}> {item.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}