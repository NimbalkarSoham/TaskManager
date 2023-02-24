const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')



// description: Get goals
// route:  GET /api/goals
// access: Private
const getGoals = asyncHandler(async (req,res) => {
    const goals = await Goal.find()

    res.status(200).json({goals})
})





// description: Set goal
// route:  POST /api/goals
// access: Private
const setGoal = asyncHandler(async (req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field')
    }
    
    const goal = await Goal.create({
        text: req.body.text,
    })

    res.status(200).json(goal)
})





// description: Update goal
// route:  PUT /api/goals/:id
// access: Private
const updateGoals = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    const updatedGoal= await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })

    res.status(200).json(updatedGoal)
})




// description: delete goal
// route:  DELETE /api/goals/:id
// access: Private
const deleteGoal = asyncHandler(async (req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }

    await goal.remove()

    res.status(200).json({id:req.params.id})
})




module.exports = {
    getGoals,
    setGoal,
    updateGoals,
    deleteGoal,
}