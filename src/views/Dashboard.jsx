import './DashboardStyles.sass'
import { TbPigMoney } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TbZoomMoney } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";


import SLineChart from "./graphs/LineChart.jsx";
import SPie from "./graphs/SPieChart.jsx";



function Dashboard (){
    // const title = useSelector((state) => state.pageTitle.pageTitle)
    //ToDo: enter this search in google again "react get days prior to date for graph"

    return (
        <>
            <div className={'dash-title'}><h1>Dashboard</h1></div>
            <div className={'row mx-0 first-row gap-4'}>
                <div className={'col-md-2 mini-display'}>
                    <div className={'h-50'}>
                        <p className={'dash-currency'} id={'bal-num'}>$6000</p>
                        <p className={'dash-currency-desc'}>Total balance for your account</p>
                    </div>
                    <div className={'row dash-icons h-50'}><TbPigMoney/></div>
                </div>
                <div className={'col-md-2 mini-display'}>
                    <div className={'h-50'}>
                        <p className={'dash-currency'} id={'bud-num'}>$2200</p>
                        <p className={'dash-currency-desc'}>Total budget amount set</p>
                    </div>
                    <div className={'row dash-icons h-50'}><TbMoneybag/></div>
                </div>
                <div className={'col-md-2 mini-display'}>
                    <div className={'h-50'}>
                        <p className={'dash-currency'} id={'sum-num'}>-$300</p>
                        <p className={'dash-currency-desc'}>Current sum total of expenses </p>
                    </div>
                    <div className={'row dash-icons h-50'}><FaMoneyBillTrendUp/></div>
                </div>
                <div className={'col-md-2 mini-display'}>
                    <div className={'h-50'}>
                        <p className={'dash-currency'} id={'cat-num'}>$150</p>
                        <p className={'dash-currency-desc'}>Top category for expenses</p>
                    </div>
                    <div className={'row dash-icons h-50'}><TbZoomMoney/></div>
                </div>
                <div className={'col-md-2 mini-display'}>
                    <div className={'h-50'}>
                        <p className={'dash-currency'} id={'re-num'}>$1800</p>
                        <p className={'dash-currency-desc'}>Remaining Budget</p>
                    </div>
                    <div className={'row dash-icons h-50'}><GiReceiveMoney/></div>
                </div>
            </div>

            <div className={'row ms-0 me-0 mt-3 gap-4 graph-row'}>
                <div className={'col-xl-5 line-chart'}>
                    <SLineChart/>
                </div>
                <div className={'col-xl-5 line-chart'}>
                    <div className={'pie-chart-containers w-50'}>
                        <div className={'h-100'} id={'pie-chart-desc'}>
                            <div className={''}>
                                <p id={'pie-color1'}>Food</p>
                                <p id={'pie-color2'}>Bills</p>
                                <p id={'pie-color3'}>Entertainment</p>
                                <p id={'pie-color4'}>Savings</p>
                            </div>
                        </div>
                    </div>
                    <div className={'pie-chart-containers w-50'}>
                        <SPie/>
                    </div>
                </div>
            </div>



        </>
    )
}


export default Dashboard