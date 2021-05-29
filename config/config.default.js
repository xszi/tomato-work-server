module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + '_1493400288522_208';
    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.tpl': 'nunjucks',
        },
    };

    config.news = {
        pageSize: 5,
        serverUrl: 'https://hacker-news.firebaseio.com/v0',
    }

    return config;
};