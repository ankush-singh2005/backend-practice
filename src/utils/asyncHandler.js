//using PROMISES

// const asyncHandler = (requestHandler) => {
//     (req,res,next) => {
//         Promise.resolve(requestHandler(req,res,next)).catch((error) => next(err))
//     }
// }

// export default asyncHandler;


//this is a higher order function
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


// this one using try catch
const asyncHandler = (fn) => async (req,res,next) => {
    try {
        await fn(req,res,next)
    } catch (error) {
        res.status(error.code || 500).json({
            success:true,
            message: err.message
        })
    }
}

export default asyncHandler;