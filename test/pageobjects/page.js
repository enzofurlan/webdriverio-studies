module.exports = class Page {
    open (path) {
        return browser.url(`https://dev.deel.wtf/${path}`)
    }
}
