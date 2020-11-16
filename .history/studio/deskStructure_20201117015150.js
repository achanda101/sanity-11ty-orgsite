import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from 'react-icons/md'
import { FiLayers, FiFile, FiMenu } from 'react-icons/fi'

const hiddenDocTypes = listItem =>
  !['menuCategory', 'menu', 'page', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Configurations')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
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
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
