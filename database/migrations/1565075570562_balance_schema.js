'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BalanceSchema extends Schema {
  up () {
    this.create('balances', (table) => {
      table.increments()
      table.integer('account_id').references('id').inTable('accounts')
      table.integer('current').unsigned().defaultTo(0)
      table.datetime('last_charged')
      table.timestamps()
    })
  }

  down () {
    this.drop('balances')
  }
}

module.exports = BalanceSchema
