import { Link } from 'react-router-dom'

function Navbar()
{
    const navList = [
        {icon: '🏠', name: 'Dashboard', link: '/'},
        {icon: '📜', name: 'Record', link: '/record'},
        {icon: '💸', name: 'Transaction', link: '/transaction'},
        {icon: '⚙️', name: 'Settings', link: '/settings'},
    ]

    const navItems = navList.map(item => 
        <Link to={item.link}>
            {item.icon} 
            <p>{item.name}</p>
        </Link>
    )

    return (
        <nav>
            <div className="navbar">
                {navItems}
            </div>
        </nav>
    )
}

export default Navbar