'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
    static get hidden(){
        return ['created_at', 'updated_at']
    }
    products(){
        return this.hasMany('App/Models/Product')
    }
}

module.exports = Event
