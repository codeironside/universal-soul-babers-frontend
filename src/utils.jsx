const BASE_API_URI = 'http://localhost:5087';

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function setCookie(name, value) {
    document.cookie = `${name}=${value}; domain=${getTLD()}; path=/;`;
}

export function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    var i;
    for (i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0)
            return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}

export function getAllCookieNames() {
    var cookies = document.cookie.split(';');
    var names = [];
    var i;
    for (i = 0; i < cookies.length; i++) {
        names.push(cookies[i].split('=')[0].trim());
    }
    return names;
}

export function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;path=/';
}

export function deleteAllCookies() {
    getAllCookieNames().forEach((name) => deleteCookie(name));
}

export function buildApiEndpoint(path, token = false) {
    let string = BASE_API_URI + path;

    if (token) {
        string += '?token=' + getCookie('token');
    }

    return string;
}


export function getTLD() {
    var hostname = window.location.hostname;

    // if localhost or ip address, return it
    if (hostname === 'localhost' || /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(hostname)) {
        return hostname;
    }

    var tld = hostname.split('.').slice(-2).join('.');
    return tld;
}