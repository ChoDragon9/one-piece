module.exports = {
  title: 'ChoDragon9 | One Piece',
  themeConfig: {
    nav: [
      {text: 'Github', link: 'https://github.com/ChoDragon9', target: '_blank'}
    ]
  },
  plugins: [
    // [
    //   '@vuepress/google-analytics',
    //   {
    //     'ga': 'UA-135042351-1'
    //   }
    // ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
  ]
}
