import basket from './basket.js'
import calalog from './catalog.js'



export default () => {
    basket.init();
    catalog.init(basket);
}