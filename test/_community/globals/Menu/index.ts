import type { GlobalConfig } from 'payload'

export const menuSlug = 'menu'

export const MenuGlobal: GlobalConfig = {
  slug: menuSlug,
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Complaint Type',
          fields: [
            {
              name: 'complaint_type',
              label: ' ',
              admin: {
                initCollapsed: true,
              },
              labels: {
                singular: 'Complaint Type',
                plural: 'Complaint Types',
              },
              type: 'array',
              fields: [
                {
                  type: 'text',
                  name: 'name',
                  label: 'Name',
                },
                {
                  type: 'row',
                  fields: [
                    {
                      type: 'checkbox',
                      name: 'assigned_date_autogen',
                      label: 'Assigned Date Auto-Gen',
                      defaultValue: false,
                    },
                    {
                      type: 'checkbox',
                      name: 'received_date_autogen',
                      label: 'Received Date Auto-Gen',
                      defaultValue: false,
                    },
                    {
                      type: 'checkbox',
                      name: 'target_date_autogen',
                      label: 'Target Date Auto-Gen',
                      defaultValue: false,
                    },
                    {
                      type: 'checkbox',
                      name: 'received_date_autoassign',
                      label: 'Received Date Auto-Assign',
                      defaultValue: false,
                    },
                  ],
                },
                {
                  type: 'checkbox',
                  name: 'del_flag',
                  label: 'Del Flag',
                  defaultValue: false,
                  admin: {
                    description: 'TODO: handle delete flag',
                  },
                },
              ],
            },
          ],
        },

        {
          label: 'Result Code',
          fields: [
            {
              name: 'result_code',
              label: '',
              admin: {
                initCollapsed: true,
              },
              labels: {
                singular: 'Result Code',
                plural: 'Result Codes',
              },
              type: 'array',
              fields: [
                {
                  type: 'text',
                  name: 'name',
                  label: 'Name',
                },
                {
                  type: 'checkbox',
                  name: 'del_flag',
                  label: 'Del Flag',
                  defaultValue: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
