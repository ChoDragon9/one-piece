module.exports = {
  title: 'ChoDragon9 | One Piece',
  base: '/one-piece/',
  themeConfig: {
    nav: [
      {
        text: 'Functional',
        link: '/src/Functional/Functional/'
      },
      {
        text: 'Javascript',
        items: [
          {text: 'Array', link: '/src/Javascript/Array/'},
          // {
          //   text: 'Array',
          //   items: [
          //     {text: 'Array', link: '/src/Javascript/Array/'},
          //   ]
          // },
        ]
      },
      {
        text: 'Reactive',
        link: '/src/Reactive/Reactive/'
      },
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
