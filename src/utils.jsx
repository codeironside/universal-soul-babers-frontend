const BASE_API_URI = 'https://unique-barbers.onrender.com/api/v1';

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
    if (hostname) {
        return hostname;
    }

    var tld = hostname.split('.').slice(-2).join('.');
    return tld;
}

export function isLoggedIn() {
    let isLoggedIn = false;
    try {
        let user = JSON.parse(getCookie('user'))
        if (user._id) isLoggedIn = true;
    } catch {
    } finally {
        return isLoggedIn;
    }
}

export function isOwner() {
    let isOwner = false;
    try {
        let user = JSON.parse(getCookie('user'))
        if (user.role === 'superadmin') isOwner = true;
        // console.log("owner",isOwner)
    } catch {
    } finally {
        return isOwner;
    }
}

export const tinyMCEInit = {
    height: 500,
    menubar: false,
    plugins: [
        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
        'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount'
    ],
    toolbar: 'undo redo | blocks | ' +
        'bold italic forecolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
}

// convert date from format "2021-08-01T00:00:00.000Z" to "30, September 2020"
export function formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
}
