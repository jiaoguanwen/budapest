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

exports.middleware = [
    'robot',
    'errorHandler'
]

exports.robot = {
    ua: [
        /Baiduspider/i,
    ]
}

exports.errorHandler = {
    match: '/api'
}


/* exports.security = {
    csrf: {
        enable: false,
    },
} */