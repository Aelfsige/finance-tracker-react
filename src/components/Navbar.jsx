function Navbar()
{
    const navList = [
        {icon: '🏠', name: 'Dashboard'},
        {icon: '📜', name: 'Record'},
        {icon: '💸', name: 'Transaction'},
        {icon: '⚙️', name: 'Settings'},

    ]

    const navItems = navList.map(item => 
        <li>{item.icon} <p>{item.name}</p></li>
    )

    return (
        <nav>
            <ul>
                {navItems}
            </ul>
        </nav>
    )
}

export default Navbar