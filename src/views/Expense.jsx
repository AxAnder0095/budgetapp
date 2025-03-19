import './ExpenseStyles.sass'

function Expense(){
    return (
        <>
            <div className={'expense-title'}><h1>Expenses</h1></div>
            <div className={'row mx-0 gap-4 ex-first-row'}>
                <div className={'col-3 ex-first-col'}>
                    <div className={'row mx-0'}>
                        <div className={'col-6'}>
                            <p className={''}>Remaining Budget</p>
                            <p className={''}>$500</p>
                        </div>
                        <div className={'col-6'}>
                            <p>Current Expenses</p>
                            <p>$1200</p>
                        </div>
                    </div>
                </div>
                <div className={'col-3 ex-first-col d-flex justify-content-center'}>
                    <form className={''}>
                        <label htmlFor="food" id={'food-label'}>
                            <input type="radio" id="food" name="ex-itmes" value="food" className={'food-ex'}/>
                            <span className={'ms-2'} id={'food-text'}>Food</span>
                        </label>

                        <label htmlFor="bills" id={'bills-label'}>
                            <input type="radio" id="bills" name="ex-itmes" value="bills" />
                            <span className={'ms-2'} id={'bills-text'}>Bills</span>
                        </label>
                        <br/>

                        <label htmlFor="entertainment" id={'et-label'}>
                            <input type="radio" id="entertainment" name="ex-itmes" value="entertainment" />
                            <span className={'ms-2'} id={'et-text'}>Entertainment</span>
                        </label>


                        <label htmlFor="savings" id={'saving-label'}>
                            <input type="radio" id="savings" name="ex-itmes" value="savings" />
                            <span className={'ms-2'} id={'saving-text'}>Savings</span>
                        </label>

                        <label className='ex-input-label'>
                            <span>$</span>
                            <input
                                name={'expense'}
                                className='expense-input'
                                type='text'
                                placeholder='enter expense amount'
                                // onChange={handleCredentials}
                            />
                        </label>

                        <div className={'d-flex justify-content-center'}>
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