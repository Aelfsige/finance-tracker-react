import React, {useState} from 'react'

function Record()
{
    const labelsforExpenses = ['Food', 'Transport', 'Shopping', 'Hobbies', 'Other']
    const labelsForIncome = ['Salary', 'Freelance', 'Other']

    const [showLabels, setShowLabels] = useState(labelsforExpenses)

    function handleTypeChange(e)
    {
        if (e.target.value === 'Income')
        {
            setShowLabels(labelsForIncome)
        } else
        {
            setShowLabels(labelsforExpenses)
        }
    }

    const options = showLabels.map(label => 
        <option value={label}>{label}</option>
    )

    return (
        <section className="record">
            <section className='record-container'>
                <h2>Record Transactions</h2>
                <form action="">
                    <label htmlFor="description">Description</label>
                    <input type="text" placeholder="e.g. Groceries" />

                    <label htmlFor="amount">Amount (₱)</label>
                    <input type="number" name="amount" id="amount" placeholder="0"/>

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />

                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleTypeChange}>
                        <option value="Expenses">Expenses</option>
                        <option value="Income">Income</option>
                    </select>

                    <label htmlFor="category">Category</label>
                    <select name="category" id="category">
                        {options}
                    </select>

                    <input type="submit" value="Submit" />
                </form>
            </section>
        </section>
    )
}

export default Record