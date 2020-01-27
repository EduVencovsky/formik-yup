export function fakeRequest(willResolve, delay = 500) {
    return new Promise((resolve, reject) =>  {
        setTimeout(willResolve ? resolve : reject, delay);
    });
}