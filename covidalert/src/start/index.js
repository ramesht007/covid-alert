import 'react-native-get-random-values'
import { AppRegistry } from 'react-native'
import { name as appName } from '../../app.json'
import viewLayer from '../view'

const view = viewLayer.init()
export default () => AppRegistry.registerComponent(appName, () => view)

// Old app
// import App from '../App'
// export default () => AppRegistry.registerComponent(appName, () => App)
