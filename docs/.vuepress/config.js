module.exports = {
  title: 'ChoDragon9 | One Piece',
  base: '/one-piece/',
  themeConfig: {
    nav: [
      {
        text: 'UIComponent',
        items: [
          {text: 'Pagination', link: '/src/UIComponent/Pagination/'},
          {text: 'Calendar', link: '/src/UIComponent/Calendar/'},
          {text: 'InfiniteScrolling', link: '/src/UIComponent/InfiniteScrolling/'},
        ]
      },
      {
        text: 'Javascript',
        items: [
          {text: 'Array', link: '/src/Javascript/Array/'},
          {text: 'Date', link: '/src/Javascript/Date/'},
          // {
          //   text: 'Array',
          //   items: [
          //     {text: 'Array', link: '/src/Javascript/Array/'},
          //   ]
          // },
        ]
      },
      {
        text: 'Functional',
        link: '/src/Functional/Functional/'
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
    [
      'vuepress-plugin-typescript',
      {
        tsLoaderOptions: {
          transpileOnly: true,
        },
      },
    ]
  ]
}
