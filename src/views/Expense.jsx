import './ExpenseStyles.sass'

function Expense(){
    return (
        <>
            <div className={'expense-title'}><h1>Expenses</h1></div>
            <div className={'row mx-0 gap-4 ex-first-row'}>
                <div className={'col-5 ex-first-col'}>
                    <div className={'row mx-0'}>
                        <div className={'col-6'}>one</div>
                        <div className={'col-6'}>two</div>
                    </div>
                </div>
                <div className={'col-5 ex-first-col'}>
                    <form>
                        <input type="radio" id="food" name="ex-itmes" value="food" className={'food-ex'}/>
                        <label htmlFor="food">
                            <div id={'food-text'}>Food</div>
                        </label>


                        <input type="radio" id="bills" name="ex-itmes" value="bills" />
                        <label htmlFor="bills">Bills</label><br/>
                        <input type="radio" id="entertainment" name="ex-itmes" value="entertainment" />
                        <label htmlFor="entertainment">Entertainment</label>
                        <input type="radio" id="savings" name="ex-itmes" value="savings" />
                        <label htmlFor="savings">Savings</label>
                        <div>
                            <input type="submit" id='expense-button' value={'Add Expense'}/>
                        </div>
                    </form>
                </div>
            </div>
            <div className={'row mx-0 ex-second-row'}>
                transactions
            </div>
        </>
    )
}

export default Expense;