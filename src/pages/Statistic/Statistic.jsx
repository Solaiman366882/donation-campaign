import MyChart from "../../components/PieChart/MyChart";
import 'chart.js/auto';
// import Example from "../../components/PieChart/MyChart";
// import PieChartDesign from "../../components/PieChart/MyChart";


const Statistic = () => {
    return (
        <div className="max-w-screen-xl px-4 mx-auto">
            {/* <Example></Example> */}
            <MyChart></MyChart>
        </div>
    );
};

export default Statistic;