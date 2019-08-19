import lookup from './src/handlers/lookup';
import webhook from './src/handlers/webhook';
import Router from './router';

/**
 * Example of how router can be used in an application
 *  */
addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

// function handler(request) {
//     const init = {
//         headers: { 'content-type': 'application/json' },
//     }
//     const body = JSON.stringify({ some: 'json' })
//     return new Response(body, init)
// }

async function handleRequest(request) {
    const r = new Router()
    // Replace with the approriate paths and handlers
   
    r.post('/lookup', lookup)
    r.post('/webhook', webhook)

    let response = await r.route(request)

    if(!response) {
        response = new Response('Not found', { status: 404})
    }
    return response
}
