import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend)

function Spending()
{
    const spendings = {
        labels: ['Food', 'Transport', 'Shopping', 'Hobbies', 'Salary', 'Freelance', 'Other'],
        datasets: [
            {
                label: 'Amount spent',
                data: [99, 200, 300, 400, 500, 600, 700],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 64, 239, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 64, 239, 1)',
                ],
                borderWidth: 2,
            }
        ]
    }

    return (
        <div className="spending-chart">
            <h4>Spending by Category</h4>
            <Pie data={spendings}/>
        </div>
    )
}

export default Spending