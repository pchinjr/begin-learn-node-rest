let arc = require('@architect/functions')
let auth = require('@architect/shared/auth')
let read = require('@architect/shared/read')
let data = require('@begin/data')

async function create(req) {
  console.log(req.body)
  await data.set({
    table: `todos-${req.session.account.id}`,
    todo: req.body
  })
}

exports.handler = arc.http.async(auth, create, read)
