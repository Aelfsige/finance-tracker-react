import Database from 'better-sqlite3'
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 8080

// const QUERY = `
//     CREATE TABLE transactions (
//         id INTEGER PRIMARY KEY,
//         description STRING NOT NULL,
//         amount INTEGER NOT NULL,
//         date DATE NOT NULL,
//         type STRING NOT NULL,
//         category STRING NOT NULL
//     )
// `
// DB.exec(QUERY)


const DB = new Database('database/transaction.db')

function setRecord(record)
{
    const INSERT_DATA = DB.prepare("INSERT INTO transactions (description, amount, date, type, category) VALUES (?, ?, ?, ?, ?)")

    INSERT_DATA.run(
        record.description,
        record.amount,
        record.date,
        record.type,
        record.category
    )
}

function getRecord()
{
    return DB.prepare('SELECT * FROM transactions').all()
}

function deleteRecord(id)
{
    DB.prepare('DELETE FROM transactions WHERE id=?').run(id)
}

app.use(cors())

app.use(express.json()) // middleware

app.get('/transactions', (req, res) => {
	res.json(getRecord())
})

app.post('/record', (req, res) => {
    setRecord(req.body)
})

app.delete('/transactions', (req, res) => {
	deleteRecord(req.body.id)
	
	res.json(getRecord())
})

const server = app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})

async function shutDownServer(signal)
{
	await DB.close()
	console.log('Database', DB.open ? 'opened' : 'closed')

	server.close(() => {
		console.log('Server closed')
		process.exit(0)
	})
}

process.on('SIGINT', () => shutDownServer('SIGINT'))
