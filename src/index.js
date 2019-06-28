import './style.css'
import './scss/main.scss'
import { suma } from './suma'

const profesor = 'Jonathan'

console.log('Hola mundo Webpack...')
console.log(`Hola ${profesor}`)
console.log(suma(9,20))

const d = document,
	app = d.getElementById('app'),
	h1 = d.createElement('h1')

h1.textContent = 'Hi again webpack'	

app.appendChild(h1)
app.appendChild(img)