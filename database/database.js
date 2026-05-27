import Database from 'better-sqlite3'

const DB = new Database('database/transaction.db')
const TRANSACTIONS = DB.prepare('SELECT * FROM transactions')

export function setRecord(record)
{
    const INSERT_DATA = DB.prepare("INSERT INTO transactions (description, amount, date, type, category) VALUES (?, ?, ?, ?, ?)")

    INSERT_DATA.run(
        record.description,
        record.amount,
        record.date,
        record.type,
        record.category
    )

    DB.close()
}

export function getRecord()
{
    return TRANSACTIONS.all()
}

export function deleteRecord(id)
{
    DB.prepare('DELETE FROM transactions WHERE id=?').run(id)
    getRecord()
}