const asyncHandler = require('express-async-handler')

//@desc Get goals
//@route GET /api/goals
//@access private
const getGoals = asyncHandler (async (req, res) => {
    // console.log(req.body);
    res.status(200).json({message: 'get goals'})
})


//@desc set goals
//@route POST /api/goals
//@access private
const setGoals = asyncHandler (async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field' )
    }
    res.status(200).json({message: 'set goals'})

})

//@desc Update goals
//@route PUT /api/goals
//@access private
const updateGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

//@desc Delete goals
//@route Delete /api/goals
//@access private
const deleteGoals = asyncHandler (async (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = {
    getGoals, 
    setGoals,
    updateGoals,
    deleteGoals
}