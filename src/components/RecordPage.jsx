import React, {useState, useRef} from 'react'

function Record()
{
    const EXPENSES_LABELS = ['Food', 'Transport', 'Shopping', 'Hobbies', 'Other']
    const INCOME_LABELS = ['Salary', 'Freelance', 'Other']

    const [LABELS, SET_LABELS] = useState(EXPENSES_LABELS)

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

    const OPTIONS = LABELS.map(label => 
        <option value={label}>{label}</option>
    )

    const FORM_ELEMENT = useRef()

    let recordedTransaction = []
    let savedTransaction = []

    function submit_record()
    {
        FORM_ELEMENT.current.addEventListener('submit', e => {
            e.preventDefault()
            let formData = new FormData(FORM_ELEMENT.current)
            
            let transaction = {}

            formData.forEach((data, key) => {
                if (key === 'amount')
                {
                    transaction[key] = parseFloat(data)
                } else
                {
                    transaction[key] = data
                }
            })

            recordedTransaction.push(transaction) // push to any array
            
            localStorage.setItem('transaction', JSON.stringify(recordedTransaction)) // save it and string it
        
            console.log(JSON.parse(localStorage.getItem('transaction')))
        
            FORM_ELEMENT.current.reset()
        })
    }

    savedTransaction = JSON.parse(localStorage.getItem('transaction'))

    if (savedTransaction != null)
    {
        savedTransaction.forEach(item => recordedTransaction.push(item))
    }

    return (
        <section className="record">
            <section className='record-container'>
                <h2 style={{textAlign: 'center'}}>Record Transactions</h2>
                <form action="" ref={FORM_ELEMENT}>
                    <label htmlFor="description">Description</label>
                    <input type="text" name='description' id='description' placeholder="e.g. Groceries"  />

                    <label htmlFor="amount">Amount (₱)</label>
                    <input type="number" name="amount" id="amount" placeholder="0" min={0} step={0.01}/>

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" />

                    <label htmlFor="type">Type</label>
                    <select name="type" id="type" onChange={handleTypeChange}>
                        <option value="Expenses">Expenses</option>
                        <option value="Income">Income</option>
                    </select>

                    <label htmlFor="category">Category</label>
                    <select name="category" id="category">
                        {OPTIONS}
                    </select>

                    <input type="submit" value="Submit" onClick={() => submit_record()} />
                </form>
            </section>
        </section>
    )
}

export default Record