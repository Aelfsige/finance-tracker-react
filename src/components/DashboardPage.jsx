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
    ]

    const status = financialStatus.map(item => 
        <div className="overview-item">
            <p>{item.name}</p>
            <h2 style={item.name === "Expenses" ? {color: 'red'} : {color: 'green'}}>₱{item.amount}</h2>
        </div>
    )

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <h4>Overview</h4>
            <div className="overview">
                {status}
            </div>
            <PieChart 
                category={expensesCategory} 
                label='Amount spent'
                amount={expensesAmount}
                backgroundColor={['#990f02', '#e3242b', '#4e0707', '#ed7014', '#fcae1e']}
                chartTitle='Spending by category'
                chartClass='spending-chart'
            />
            <PieChart 
                category={incomeCategory} 
                label='Amount earned'
                amount={incomeAmount}
                backgroundColor={['#3cb043', '#aef359', '#99edc3']}
                chartTitle='Earnings by category'
                chartClass='earnings-chart'
            />
        </div>
    )
}

export default Dashboard