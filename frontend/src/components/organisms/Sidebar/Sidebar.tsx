import React from 'react'
import {
  FiCalendar,
  FiHome,
  FiPieChart,
  FiSettings,
  FiUser
} from 'react-icons/fi'

import { Text } from '../../atoms/Text/Text'
import {
  activeNavigationItem,
  navigationIcon,
  navigationItem,
  navigationText,
  settingsItem,
  sidebarContainer,
  sidebarContent,
  sidebarTitle
} from './Sidebar.css'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  return (
    <div className={`${sidebarContainer} ${className}`}>
      <div className={sidebarTitle}>
        <Text size="md" weight="bold">
          内省日記
        </Text>
      </div>
      <div className={sidebarContent}>
        <div className={activeNavigationItem}>
          <div className={navigationIcon}>
            <FiHome size={18} />
          </div>
          <div className={navigationText}>
            <Text>ホーム</Text>
          </div>
        </div>
        <div className={navigationItem}>
          <div className={navigationIcon}>
            <FiPieChart size={18} />
          </div>
          <div className={navigationText}>
            <Text>分析</Text>
          </div>
        </div>
        <div className={navigationItem}>
          <div className={navigationIcon}>
            <FiCalendar size={18} />
          </div>
          <div className={navigationText}>
            <Text>カレンダー</Text>
          </div>
        </div>
        <div className={navigationItem}>
          <div className={navigationIcon}>
            <FiUser size={18} />
          </div>
          <div className={navigationText}>
            <Text>プロフィール</Text>
          </div>
        </div>
      </div>
      <div className={settingsItem}>
        <div className={navigationIcon}>
          <FiSettings size={18} />
        </div>
        <div className={navigationText}>
          <Text>設定</Text>
        </div>
      </div>
    </div>
  )
}
