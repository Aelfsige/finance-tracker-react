import Form from "./Form"

function Record()
{
    return (
        <section className="record">
            <Form title="Expenses" class="expenses" />
            <Form title="Income" class="income" />
        </section>
    )
}

export default Record