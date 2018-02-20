// Generates a page
const page = (url, lastmod, links = []) => ({ url, lastmod, links });

/**
Test Cases
**/

exports.singlePage = function () {
    return {
        input: page('/about', '2017-01-01'),
        expected: [{
            url: '/about',
            lastmod: '2017-01-01',
        }],
    };
};

exports.multiplePages = function() {
    return {
        input: page('/index', '2017-01-01', [
            page('/about', '2017-01-01'),
            page('/team', '2017-03-01'),
            page('/account', '2017-01-03'),
            ]),
        expected: [{
            url: 'index',
            lastmod: '2017-01-01'
        }, {
            url: 'about',
            lastmod: '2017-01-01'
        }, {
            url: 'team',
            lastmod: '2017-03-01'
        }, {
            url: 'account',
            lastmod: '2017-01-03'
        }]
    };
};

exports.pagesWithLinks = function() {

    const indexPage = page('/index', '2017-01-01');
    const aboutPage = page('/about', '2017-01-01');
    const teamPage = page('/team', '2017-03-01');
    const accountPage = page('/account', '2017-01-03');
    const cancelPage = page('/account/cancel', '2017-01-05');

    indexPage.links = [
    aboutPage,
    accountPage
    ];

    aboutPage.links = [
    accountPage,
    aboutPage,
    teamPage,
    indexPage,
    ];

    teamPage.links = [
    accountPage,
    cancelPage,
    teamPage,
    indexPage,
    ];

    accountPage.links = [
    cancelPage,
    indexPage,
    ];

    cancelPage.links = [
    accountPage,
    teamPage,
    ];

    return {
        input: indexPage,
        expected: [{
            url: '/index',
            lastmod: '2017-01-01',
        }, {
            url: '/about',
            lastmod: '2017-01-01',
        }, {
            url: '/team',
            lastmod: '2017-03-01',
        }, {
            url: '/account',
            lastmod: '2017-01-03',
        }, {
            url: '/acount/cancel',
            lastmod: '2017-01-05',
        }]
    };
}