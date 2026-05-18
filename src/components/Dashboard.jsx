function Dashboard(props)
{
    const items = props.items.map(item => 
        <div className="dashboard-item">
            <p>{item.name}</p>
            <h2>{item.amount}</h2>
        </div>
    )

    return (
        <div className="dashboard">
            {items}
        </div>
    )
}

export default Dashboard