import React from 'react'
import { Text } from '../../atoms/Text/Text'
import {
  sidebarContainer,
  navigationItem,
  activeNavigationItem,
  navigationIcon,
  navigationText,
  sidebarTitle,
  sidebarContent,
  settingsItem
} from './Sidebar.css'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className = '' }) => {
  return (
    <div className={`${sidebarContainer} ${className}`}>
      <div className={sidebarTitle}>
        <Text size="lg" weight="bold">
          内省日記
        </Text>
      </div>
      <div className={sidebarContent}>
        <div className={activeNavigationItem}>
          <div className={navigationIcon}>圖</div>
          <div className={navigationText}>
            <Text>ホーム</Text>
          </div>
        </div>
        <div className={navigationItem}>
          <div className={navigationIcon}>圖</div>
          <div className={navigationText}>
            <Text>分析</Text>
          </div>
        </div>
        <div className={navigationItem}>
          <div className={navigationIcon}>圖</div>
          <div className={navigationText}>
            <Text>カレンダー</Text>
          </div>
        </div>
        <div className={navigationItem}>
          <div className={navigationIcon}>圖</div>
          <div className={navigationText}>
            <Text>プロフィール</Text>
          </div>
        </div>
      </div>
      <div className={settingsItem}>
        <div className={navigationIcon}>圖</div>
        <div className={navigationText}>
          <Text>設定</Text>
        </div>
      </div>
    </div>
  )
}
