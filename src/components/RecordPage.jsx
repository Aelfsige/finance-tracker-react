import React, {useState, useRef, useEffect} from 'react'

function Record()
{
    const EXPENSES_LABELS = ['Food', 'Transport', 'Shopping', 'Hobbies', 'Other']
    const INCOME_LABELS = ['Salary', 'Freelance', 'Other']

    const [LABELS, SET_LABELS] = useState(EXPENSES_LABELS)

    const OPTIONS = LABELS.map(label => 
        <option value={label}>{label}</option>
    )

	const form = useRef()

    function handleTypeChange(e)
    {
        if (e.target.value === 'Income')
        {
            SET_LABELS(INCOME_LABELS)
        } else
        {
            SET_LABELS(EXPENSES_LABELS)
        }
    }

    useEffect(() => {
        form.current.addEventListener('submit', e => {
            // prevent refresh
            e.preventDefault()

            // get data from all inputs
            const formData = new FormData(form.current)

            // send data to server
            let transaction = {}

            if (formData.get('description'))
            {
                formData.forEach((value, key) => {
                    if (key === 'amount')
                    {
                        transaction[key] = parseFloat(value)
                    } else
                    {
                        transaction[key] = value
                    }
                })

                console.log(transaction)
    
                fetch('http://localhost:8080/record', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(transaction)
                })
                .then(res => res.json())
                .then(data => console.log(data))
                .catch(error => console.error(error))
                
                // reset all input fields
                form.current.reset()
    
                // reset the type to expenses
                SET_LABELS(EXPENSES_LABELS)
            }
        })
    })

	return (
        <section className="record">
            <section className='record-container'>
                <h2 style={{textAlign: 'center'}}>Record Transactions</h2>
                <form action="" ref={form} >
                    <label htmlFor="description">Description</label>
                    <input 
						type="text" 
						name='description' 
						id='description' 
						placeholder="e.g. Groceries" 
						required  
					/>

                    <label htmlFor="amount">Amount (₱)</label>
                    <input 
						type="number" 
						name="amount" 
						id="amount" 
						placeholder="0" min={0} step={0.01} required
					/>

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" required />

                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleTypeChange}>
                        <option value="Expenses">Expenses</option>
                        <option value="Income">Income</option>
                    </select>

                    <label htmlFor="category">Category</label>
                    <select name="category" id="category">
                        {OPTIONS}
                    </select>

                    <input type="submit" value="Submit" />
                </form>
            </section>
        </section>
    )
}

export default Record
