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
          {text: 'TimePicker', link: '/src/UIComponent/TimePicker/'},
          {text: 'InfiniteScrolling', link: '/src/UIComponent/InfiniteScrolling/'},
        ]
      },
      {
        text: 'Helper',
        items: [
          {text: 'Helper', link: '/src/Helper/Helper/'},
          {text: 'clone', link: '/src/Helper/clone/'},
          {text: 'produce', link: '/src/Helper/produce/'},
          {text: 'safe-chain', link: '/src/Helper/safe-chain/'},
          {text: 'shuffle', link: '/src/Helper/shuffle/'},
          {text: 'Router', link: '/src/Helper/router/'},
          {text: 'Observer', link: '/src/Helper/observer/'},
          {text: 'Component', link: '/src/Helper/component/'},
          {text: 'Directive', link: '/src/Helper/directive/'},
        ]
      },
      {
        text: 'Javascript',
        items: [
          {text: 'Array', link: '/src/Javascript/Array/'},
          {text: 'Date', link: '/src/Javascript/Date/'},
          {text: 'Iterable', link: '/src/Javascript/Iterable/'},
          {text: 'Object', link: '/src/Javascript/Object/'},
          {text: 'String', link: '/src/Javascript/String/'},
          {text: 'RegExp', link: '/src/Javascript/RegExp/'},
        ]
      },
      {
        text: 'HTML5',
        items: [
          {text: 'HTML5', link: '/src/HTML5/HTML5/'},
          {text: 'FetchApi', link: '/src/HTML5/FetchApi/'},
          {text: 'FileReader', link: '/src/HTML5/FileReader/'},
          {text: 'SVG', link: '/src/HTML5/SVG/'},
        ]
      },
      {
        text: 'OpenSources',
        items: [
          {text: 'chart-adaptor', link: '/src/OpenSources/chart-adaptor/'},
          {text: 'editor', link: '/src/OpenSources/editor/'},
          {text: 'express-server', link: '/src/OpenSources/express-server/'},
          {text: 'pdfjs-sample', link: '/src/OpenSources/pdfjs-sample/'},
        ]
      },
      {
        text: 'Functional',
        link: '/src/Functional/Functional/'
      },
      {
        text: 'TodoList',
        link: '/src/TodoList/'
      },
      {
        text: 'Reactive',
        link: '/src/Reactive/Reactive/'
      },
    ]
  },
  head: [
    ['meta', {name: 'google-site-verification', content: 'yX6dHIw5DyDCd9iNbZSo2w8VjnED68OLdw6zu_Rm554'}]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-135042351-4'
      }
    ],
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
