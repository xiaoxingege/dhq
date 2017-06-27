import * as vsr from 'vue-server-renderer'
import pify from 'pify'

const renderer = vsr.createRenderer()

module.exports = pify(renderer.renderToString.bind(renderer))
