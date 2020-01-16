module.exports = app => {
    const { router, controller } = app
    router.get('/', controller.home.index)
    router.get('/news', controller.news.list)
    app.router.resources('topics', '/api/v2/topics', app.controller.topics)
}