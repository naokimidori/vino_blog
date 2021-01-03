module.exports = {
  siteName: 'Vino',
  siteDescription: 'Keep Calm And Carry On',
  icon: './src/assets/images/favicon.png',
  titleTemplate: "%s",

  templates: {
    Post: '/post/:id',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],

  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
