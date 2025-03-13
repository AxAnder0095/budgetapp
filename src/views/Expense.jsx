import './ExpenseStyles.sass'

function Expense(){
    return (
        <>
            <div className={'expense-title'}><h1>Expenses</h1></div>
            <div className={'row mx-0 ex-first-row'}>
                <div className={'col-5 ex-first-col'}>sometihg</div>
                <div className={'col-5 ex-first-col'}>form for expense type</div>
            </div>
        </>
    )
}

export default Expense;