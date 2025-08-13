'use client'

import type { ListQuery, Where } from 'payload'

import { useListQuery } from '@payloadcms/ui'
import React, { useState } from 'react'

export default function CustomListFilters() {
  const { query, refineListData } = useListQuery()
  const [currentFilterIndex, setCurrentFilterIndex] = useState(0)

  // Define the filter values to cycle through
  const filterValues = ['Outstanding', 'Closed', 'In Progress', 'Pending']

  const handleFilterButtonClick = async () => {
    const currentValue = filterValues[currentFilterIndex]

    const args: ListQuery = {
      where: {
        or: [
          {
            and: [
              {
                title: {
                  equals: currentValue,
                },
              },
            ],
          },
        ],
      },
    }

    await refineListData(args)

    // Move to next filter value (cycle back to start if at end)
    setCurrentFilterIndex((prevIndex) => (prevIndex + 1) % filterValues.length)
  }

  const currentValue = filterValues[currentFilterIndex]

  return <button onClick={handleFilterButtonClick}>Filter: {currentValue}</button>
}
