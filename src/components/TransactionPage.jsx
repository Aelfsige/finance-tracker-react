import React, {useState, useEffect, useRef} from 'react'

function Chips()
{
    let recordedTransactions = useRef([])
    const [showItems, setShowItems] = useState(recordedTransactions.current)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:8080/transactions')
            .then(res => res.json())
            .then(data => {
                setShowItems(data)
                setLoading(false)
                recordedTransactions.current = data
            })
    }, [])
    
    function showAll()
    {
        setShowItems(recordedTransactions.current)
    }

    function showExpenses()
    {
        setShowItems(recordedTransactions.current.filter(transaction => transaction.type === "Expenses"))
    }

    function showIncome()
    {
        setShowItems(recordedTransactions.current.filter(transaction => transaction.type === "Income"))
    }

    function deleteItem(id)
    {
		fetch('http://localhost:8080/transactions', {
			method: 'DELETE',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({ id })
		})
		.then(res => res.json())
		.then(data => {
			recordedTransactions.current = data
			showAll()
		})
		.catch(err => console.error(err))
	}

    const badgesHTML = showItems.map(item => 
        <div className={item.type == "Income" ? "badge income" : "badge expenses"} id={item.id}>
            <div className="left">
                <p>{item.description}</p>
                <span>{item.category} • {item.date}</span>
            </div>
            <div className="right">
                <p>₱{item.amount}</p>
                <button onClick={() => deleteItem(item.id)}>X</button>
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
                {loading ? 'Loading...' : badgesHTML}
            </div>
        </>
    )
    
}

export default Chips
