import incomeModel from "../models/incomeModel.js";

const getUserIncome = async (req, res) => {
    const id = req.params.id;
    
    try {
        const getIncomeData = await incomeModel.find({userId: id});
        res.send(getIncomeData);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

const addUserIncome = async (req, res) => {
    const userId = req.params.id
    const userIncomeData = req.body;

    const userData = {
        userId: userId,
        income: userIncomeData.income,
        income_start_data_interval: {
            start_date: userIncomeData.income_start_data_interval.start_date,
            interval: userIncomeData.income_start_data_interval.interval,
        }
    }

    try {
        const addIncome = await incomeModel.create(userData);
        res.send(addIncome);
    } catch (error) {
        res.send(error);
    }
}

const updateUserIncome = async (req, res) => {
    const id = req.params.id;
    const updates = req.body;

    try {
        const updateIncome = await incomeModel.findByIdAndUpdate({_id: id}, updates);
        res.send(updateIncome);
    } catch (error) {
        res.send(error)
    }
}

export { getUserIncome, addUserIncome, updateUserIncome }