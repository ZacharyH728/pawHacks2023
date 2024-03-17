import React, { useState, useEffect } from 'react';

import Cookies from 'js-cookie'


export const API = () => {
    const [terms, setTerms] = useState(null);

    useEffect(() => {
        fetch('/StudentRegistrationSsb/ssb/classSearch/getTerms?offset=1&max=10&searchTerm=')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setTerms(res);
            })
            .catch(err => console.log(err));
    }, []);


    getCookiesForSearch('202430')
        .catch((error) => console.error('Error:', error));


    return (
        <div>
            {/* Render your UI here based on the terms data */}
            {/* <button onClick={getCookiesForSearch('202430').catch((error) => console.error('Error:', error))}>POST Term</button> */}
        </div>
    );
};


const getCookiesForSearch = async (termId) => {

    // We will store our cookies here
    // In node-fetch, we cannot use a CookieJar as we would in the request library.
    // Instead, we simply save cookies as strings in an array.
    const cookieJar = [];

    const response = await fetch('/StudentRegistrationSsb/ssb/term/search?mode=search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cookie': 'JSESSIONID=20D82E6A9E04072CC7309F09C8B1200D; nubanner-cookie=2485068187.36895.0000'
        },
        body: new URLSearchParams({
            term: termId
        })
    });

    // If the response includes a 'set-cookie' header, save the cookies to the cookieJar
    if (response.headers.get('set-cookie')) {
        cookieJar.push(response.headers.get('set-cookie'));
    }
    console.log(response.headers.get('set-cookie'))

    // console.log(Cookies.get());

    // For debug
    console.log(response);

    // Please note that this would return the cookieJar, but you can't use it directly with fetch
};
export default API;
