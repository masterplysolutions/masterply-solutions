import {defineField, defineType} from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título da Categoria',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(60),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 3,
    }),
  ],
})
