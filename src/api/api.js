function api (method, path, data){
    return fetch(path, {
        method: method.toUpperCase(),
        mode: 'cors',
        headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': window.location.origin,
        }),
        body: JSON.stringify(data)
    }).then(res=> res.json())
}