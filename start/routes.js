'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')
Route.on('/static').render('static')
Route.on('/login').render('login')
Route.on('/register').render('register')
Route.on('/partner').render('partner')
Route.on('/register').render('register')

Route.group(() =>{
    // [o] HTTP - GET
    Route.get('/post/:id?', 'ApiController.post_data')
    Route.get('/event/:id?', 'ApiController.event_data')
    Route.get('/address/:id?', 'ApiController.address_data')
    Route.get('/account/:id?', 'ApiController.account_data')
    // [o] HTTP - POST
    Route.post('/init_token', 'ApiController.initialize')
    Route.post('/register', 'ApiController.register')
    Route.post('/login', 'ApiController.login')
}).prefix('api/v1')

Route.post('/register','AuthController.add_account')
