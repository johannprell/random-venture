import * as UI from './ui'
import * as TMPL from './template'

window.onload = init

function init() {
  console.log('This is a Random Venture.')
  UI.init()
  UI.apply(TMPL.introduction())
  // Never ending placeholder gameloop
  UI.setOnChoiceCallback(
    placeholderCallback
  )
}

function placeholderCallback(id) {
  console.log(id)
  UI.apply(TMPL.example())
}
