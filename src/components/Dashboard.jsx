function Dashboard(props)
{
    const financialStatus = [
        {name: "Income", amount: 1500},
        {name: "Expenses", amount: 3000},
        {name: "Balance", amount: 5000},
    ]

    const items = financialStatus.map(item => 
        <div className="dashboard-item">
            <p>{item.name}</p>
            <h2 style={item.name === "Expenses" ? {color: 'red'} : {color: 'green'}}>₱{item.amount}</h2>
        </div>
    )

    return (
        <div className="overview">
            <h4>Overview</h4>
            <div className="dashboard">
                {items}
            </div>
        </div>
    )
}

export default Dashboard