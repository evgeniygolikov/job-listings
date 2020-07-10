import initTest from './modules/test.js';

const app = {
    init() {
        initTest();
    },
    
    load() {

    },

    resize() {

    },

    scroll() {

    },
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();

    window.addEventListener('load', app.load);
    window.addEventListener('resize', app.resize);
    window.addEventListener('scroll', app.scroll);
});