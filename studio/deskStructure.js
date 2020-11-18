import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'
import { FiLayers, FiFile, FiMenu } from 'react-icons/fi'
import { GrChatOption } from 'react-icons/gr'

const hiddenDocTypes = listItem =>
  ![
    'menuCategory',
    'menu',
    'page',
    'siteSettings',
    'footerSettings',
    'socialMediaMenubar'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Sanity Eleventy Party')
    .items([
      S.listItem()
        .title('Site Configuration')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteConfig')
            .title('Site Configuration')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Footer Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('footerSettings')
            .title('Footer Settings')
            .schemaType('footerSettings')
            .documentId('footerSettings')
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(FiFile)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Menu Categories')
        .icon(FiLayers)
        .schemaType('menuCategory')
        .child(S.documentTypeList('menuCategory').title('Menu Categories')),
      S.listItem()
        .title('Menus')
        .icon(FiMenu)
        .schemaType('menu')
        .child(S.documentTypeList('menu').title('Menus')),
      S.listItem()
        .title('Social Media Menubar')
        .icon(GrChatOption)
        .child(
          S.editor()
            .id('socialMediaMenubar')
            .title('Social Media Menubar')
            .schemaType('socialMediaMenubar')
            .documentId('socialMediaMenubar')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
