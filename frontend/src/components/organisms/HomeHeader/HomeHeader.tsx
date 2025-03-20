import React from 'react'

import { ActionButton } from '../../atoms/ActionButton'
import { Heading } from '../../atoms/Heading/Heading'
import { Text } from '../../atoms/Text/Text'

interface HomeHeaderProps {
  userName: string
  uncompletedDays: number
  onCreateEntry: () => void
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  userName,
  uncompletedDays,
  onCreateEntry
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
      <div>
        <Heading as="h1" size="2xl" className="mb-1">
          こんにちは、{userName}さん
        </Heading>
        {uncompletedDays > 0 ? (
          <Text size="md" className="text-yellow-600">
            {uncompletedDays}日分の内省が未入力です
          </Text>
        ) : (
          <Text size="md" className="text-green-600">
            すべての内省が入力済みです！
          </Text>
        )}
      </div>
      <ActionButton
        label="今日の内省を入力する"
        onClick={onCreateEntry}
        primary={true}
        className="mt-4 md:mt-0"
      />
    </div>
  )
}
