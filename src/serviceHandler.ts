function constructResponse(serviceResult: {body: any, headers: Headers}) {
    const result = {
        'body': serviceResult.body || null,
        'headers': serviceResult.headers || {},
        'status': 200
    };

    return result;
}

function setHeaders(res: any, headers: Headers) {
    res.headers(headers);
}

export function ServiceHandler(req: Request, res: any, serviceInstance: any) {
    return serviceInstance
            .then(constructResponse)
            .then((result: any) => {
                setHeaders(res, result.headers);
                res.status(result.status).send(result.body);
            });
}