const recastai = require('recastai')

const client = new recastai.request('39fcababfbb02d0cf7ec4d8922e16f7e', 'fr')

client.converseText('hello')
  .then(function(res) {
    if (res.action) { console.log('Action: ', res.action.slug) }
    const reply = res.reply()
    console.log('Reply: ', reply)
  })
