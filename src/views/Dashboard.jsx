import './DashboardStyles.sass'

// import {useSelector} from "react-redux";
import BRadarChart from "./graphs/RadarChart.jsx";

function Dashboard (){
    // const title = useSelector((state) => state.pageTitle.pageTitle)
    return (
        <>
            <div className={'dash-title'}><h1>Dashboard</h1></div>
            <div className={'row mx-0 graph-row-1 gap-4'}>
                <div className={'col-lg-3 first-dash-row'}>
                    <p className={'expense-title text-center mt-3'}>Expense Tracking</p>
                    <div className={'row ms-0 me-0 mt-4'}>
                        <p className={'text-center ex-titles'}>Balance</p>
                        <p className={'text-center'} id={'dash-balance'}>$6000</p>
                    </div>
                    <div className={'row mx-0'}>
                        <div className={'col-6'}>
                            <p className={'text-center ex-titles'}>Expenses</p>
                            <p className={'text-center'} id={'dash-expense'}>-$300</p>
                        </div>
                        <div className={'col-6'}>
                            <p className={'text-center ex-titles'}>Budget</p>
                            <p className={'text-center'} id={'dash-budget'}>$2200</p>
                        </div>
                        <p className={'text-center ex-titles'}>Spending</p>
                        <div className="progress px-0 mt-2" role="progressbar" aria-label="Success example" aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-success" style={{width: "58%"}}>58%</div>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-3 first-dash-row '}>
                  hello
                </div>
                <div className={'col-lg-5 first-dash-row'}>
                    f
                </div>
            </div>
            <div className={'row mx-0 graph-row-2 gap-4'}>
                <div className={'col-2 mini-display'}>
                    <p className={'dash-currency'}>$6000</p>
                    <p className={'dash-currency-desc'}>Total balance for your account</p>
                </div>
                <div className={'col-2 mini-display'}>
                    <p className={'dash-currency'}>$2200</p>
                    <p className={'dash-currency-desc'}>Total budget amount set</p>
                </div>
                <div className={'col-2 mini-display'}>
                    <p className={'dash-currency'}>-$300</p>
                    <p className={'dash-currency-desc'}>Current sum total of expenses </p>
                </div>
                <div className={'col-lg-2 mini-display'}>
                    <p className={'dash-currency'}>$150</p>
                    <p className={'dash-currency-desc'}>Top category for expenses</p>
                </div>
                <div className={'col-lg-2 mini-display'}>
                    <p className={'dash-currency'}>$1800</p>
                    <p className={'dash-currency-desc'}>Remaining Budget</p>
                </div>
            </div>
            {/*<div className={''}>{title}</div>*/}

        </>
    )
}


export default Dashboard