// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/i18n'],
    typescript: {
        typeCheck: true
    },
    app: {
      baseURL: '/mika/',
      head: {
        title: '謎卡 Mika on The Road',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          {
            hid: '謎卡 Mika on The Road',
            name: '謎卡 Mika on The Road',
            content: '一位作家、旅人、講師、同時是個野孩子。'
          }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/mika/img/favicon.ico' }]
      }
    },
    css: [
      '@/assets/fonts/NotoSerifTC/NotoSerifTC.css',
    ],
    vite: {
      css: {
        
        preprocessorOptions: {
          scss: {
            additionalData: ''
          }
        }
      }
    },
    i18n: {
        defaultLocale: 'zh',
        langDir: 'locales',
        locales: [
          { code: 'en', file: 'en.json', iso: 'en-US', name: 'English' },
          { code: 'zh', file: 'zh.json', iso: 'zh-TW', name: '繁體中文' }
        ],
        strategy: 'no_prefix',
        vueI18n: {
          legacy: false
        }
    }
})
