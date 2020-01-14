exports.keys = 'jiaoguanwen_budapest'

// add view's configurations
exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks'
    },
}

exports.news = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
}