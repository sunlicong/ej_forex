import VueI18n from 'vue-i18n'//需先安装vue-i18n
import Vue from 'vue'

Vue.use(VueI18n)

var langMessages = {
    cn: require('./common/zh_cn.json'),
    en: require('./common/en.json')
}
var i18n = new VueI18n({
    locale: 'en',
    messages: langMessages
})
export default i18n