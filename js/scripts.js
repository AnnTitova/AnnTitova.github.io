$('#theme').bind('click', () => {
    let jBody = $('body'),
    bodyLight = 'blue lighten-4',
    bodyDark = 'orange accent-4';

    let jNav = $('#nav-bar'),
    navLight = 'indigo',
    navDark = 'grey darken-4';

    if (jBody.attr('class') === bodyLight) {
        jBody.attr('class', bodyDark);
        jNav.removeClass(navLight).addClass(navDark);
    } else {
        jBody.attr('class', bodyLight);
        jNav.removeClass(navDark).addClass(navLight);
    }
});
