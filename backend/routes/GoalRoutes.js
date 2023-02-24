const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoals, deleteGoal }= require('../controllers/goalController') 

router.route('/').get(getGoals).post(setGoal)
router.route('/:id').delete(deleteGoal).put(updateGoals)
//          ||
//          \/
// router.get('/', getGoals)
// router.post('/', setGoal)
// router.put('/:id', updateGoals)
// router.delete('/:id', deleteGoal)

module.exports = router