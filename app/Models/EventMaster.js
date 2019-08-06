'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class EventMaster extends Model {
    event_details(){
        return this.hasOne('App/Models/EventDetail')
    }
    products(){
        return this.hasMany('App/Models/Product')
    }
}

module.exports = EventMaster
