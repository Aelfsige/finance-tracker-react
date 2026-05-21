function Form(props)
{
    const labels = ['Food', 'Transport', 'Shopping', 'Hobbies', 'Salary', 'Freelance', 'Other']

    const options = labels.map(label => 
        <option value={label}>{label}</option>
    )

    return (
        <section className={props.class}>
            <h2>{props.title}</h2>
            <form action="">
                <label htmlFor="description">Description</label>
                <input type="text" placeholder="e.g. Groceries" />
                <label htmlFor="amount">Amount (₱)</label>
                <input type="number" name="amount" id="amount" placeholder="0"/>
                <label htmlFor="category">Category</label>
                <select name="category" id="category">
                    {options}
                </select>
                <input type="submit" value="Submit" />
            </form>
        </section>
    )
}

export default Form