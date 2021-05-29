'use strict'

/**
 * @param { Egg.application } app - egg application
 */
module.exports = app => {
    const { router, controller, middleware, config } = app
    // const userRequired = middleware.userRequired()
    console.log('router user');
    router.get('/api/user', controller.user.getUser)
}