import PieChart from "./PieChart"
import React, {useState, useEffect, useRef} from 'react'

function Dashboard(props)
{
    const transactions = useRef([])
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState(transactions.current)

    useEffect(() => {
        fetch('http://localhost:8080/transactions')
        .then(res => res.json())
        .then(data => {
            setItems(data)
            setLoading(false)
            transactions.current = data
        })
    }, [])

    function getData(type){
        const baseData = items.filter(_ => _.type === type)

        let baseCategory = baseData.map(_ => _.category)
        baseCategory = [...new Set(baseCategory)]
        
        const baseAmount = []

        for (const category of baseCategory){
            let totalAmount = 0
            const categoryAmount = items.filter(_ => _.category === category).map(_ => _.amount)
            
            for (const amount of categoryAmount){
                totalAmount += amount
            }

            baseAmount.push(totalAmount)
        }

        let total = 0

        for (const amount of baseAmount){
            total += amount
        }

        return [baseCategory, baseAmount, total]
    }

    const [expensesCategory, expensesAmount, totalExpenses] = getData('Expenses')
    const [incomeCategory, incomeAmount, totalIncome] = getData('Income')

    const financialStatus = [
        {name: "Income", amount: totalIncome},
        {name: "Expenses", amount: totalExpenses},
        {name: "Balance", amount: totalIncome - totalExpenses}
    ]

    const status = financialStatus.map(item => 
        <div className="dashboard-item">
            <p>{item.name}</p>
            <h2 style={item.name === "Expenses" ? {color: 'red'} : {color: 'green'}}>₱{item.amount}</h2>
        </div>
    )

    return (
        <div className="overview">
            <h4>Overview</h4>
            <div className="dashboard">
                {status}
            </div>
            <PieChart 
                category={expensesCategory} 
                label='Amount spent'
                amount={expensesAmount}
                backgroundColor={[
                    'rgba(254, 183, 43, 0.2)',
                    'rgba(255, 99, 99, 0.2)',
                    'rgba(203, 64, 18, 0.2)',
                ]}
                borderColor={[
                    'rgba(254, 183, 43, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(203, 64, 18, 1)',
                ]}
                chartTitle='Spending by category'
            />
            <PieChart 
                category={incomeCategory} 
                label='Amount earned'
                amount={incomeAmount}
                backgroundColor={[
                    'rgba(96, 196, 68, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 162, 235, 0.2)',
                ]}
                borderColor={[
                    'rgba(96, 196, 68, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 162, 235, 1)',
                ]}
                chartTitle='Earnings by category'
            />
        </div>
    )
}

export default Dashboard