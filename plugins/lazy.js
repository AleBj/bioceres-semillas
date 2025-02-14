import Lazy from '~/assets/js/Lazy'

export default ({ app }, inject) => {
  inject('lazy', new Lazy(app))
}
