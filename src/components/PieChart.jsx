import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend)

function PieChart({ category, label, amount, backgroundColor, borderColor, chartTitle })
{
    const spendings = {
        labels: category,
		datasets: [
            {
                label,
                data: amount,
                backgroundColor, 
                borderColor, 
                borderWidth: 2,
            }
        ]
    }

    return (
        <div className="spending-chart">
            <h4>{chartTitle}</h4>
            <Pie data={spendings}/>
        </div>
    )
}

export default PieChart