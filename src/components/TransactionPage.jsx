import React, {useState} from 'react'

function Chips()
{
    const badges = [
        {
            title: 'Travel to school', 
            category: 'Transport', 
            date: 'May 19', 
            amount: 100,
            type: 'Expenses'
        },
        {
            title: 'Baon from mom <3', 
            category: 'Salary', 
            date: 'May 19', 
            amount: 1500,
            type: 'Income'
        },
    ]

    const [showItems, setShowItems] = useState(badges)

    function showAll()
    {
        setShowItems(badges)
    }

    function showExpenses()
    {
        setShowItems(badges.filter(badge => badge.type === "Expenses"))
    }

    function showIncome()
    {
        setShowItems(badges.filter(badge => badge.type === "Income"))
    }
    
    const badgesHTML = showItems.map(badge => 
        <div className={badge.type == "Income" ? "badge income" : "badge expenses"}>
            <div className="left">
                <p>{badge.title}</p>
                <span>{badge.category} • {badge.date}</span>
            </div>
            <div className="right">
                <p>₱{badge.amount}</p>
                <button>X</button>
            </div>
        </div>
    )

    return (
        <>
            <div className="chips">
                <button onClick={() => showAll()}>All</button>
                <button onClick={() => showExpenses()}>Expenses</button>
                <button onClick={() => showIncome()}>Income</button>
            </div>
            <div className="badges">
                {badgesHTML}
            </div>
        </>
    )
}

export default Chips