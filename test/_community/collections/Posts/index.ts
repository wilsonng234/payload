import type { CollectionConfig } from 'payload'

import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  admin: {
    useAsTitle: 'title',
    components: {
      beforeListTable: [
        {
          path: 'test/_community/collections/Posts/CustomListFilters',
        },
      ],
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      admin: {
        custom: {
          dynamicFilter: {
            useDynamicFilter: true,
            clientProps: {
              slug: 'menu',
              dropdownLabel: 'complaint_type',
              optionLabelAccessor: 'name',
            },
          },
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures],
      }),
    },
    {
      name: 'bool',
      type: 'checkbox',
    },
  ],
}
