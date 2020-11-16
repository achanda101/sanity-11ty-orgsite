export default {
  name: 'menuCategoryReference',
  type: 'object',
  title: 'Menu Category Reference',
  fields: [
    {
      name: 'menuCategory',
      type: 'reference',
      to: [
        {
          type: 'menuCategory'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'menuCategory.menuCategoryTitle'
    }
  }
}
