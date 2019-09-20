export const demoMiddleware = (store) => (next) => (action) => {
    // Our middleware
    console.log(action);
    next(action);
}