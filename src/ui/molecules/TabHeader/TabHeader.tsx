import React, {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {TabHeaderStyles} from './TabHeaderStyle';
import {ButtonIcon} from '@atoms';

export type TabItem = {
  label: string;
  icon?: ReactNode;
  onPressTab?: () => void;
};

export interface TabHeaderProps {
  tabs: TabItem[];
  activeTab: TabItem['label'];
}

export const TabHeader: FC<TabHeaderProps> = props => {
  const {tabs, activeTab} = props;
  const styles = TabHeaderStyles;

  const handleOnPressTab = (callBack?: () => void) => {
    if (typeof callBack === 'function') {
      callBack();
    }
  };

  return (
    <View style={[styles.container, styles.row]}>
      {tabs.map((tab: TabItem) => {
        return (
          <ButtonIcon
            key={`${tab.label}`}
            buttonLabel={tab.label}
            onPress={() => handleOnPressTab(tab.onPressTab)}
            icon={() => tab.icon}
            iconPosition={'Left'}
            buttonStyle={[
              activeTab === tab.label ? styles.activeTab : styles.tab,
              styles.row,
            ]}
            labelStyle={
              activeTab === tab.label ? styles.activeTabLabel : styles.tabLabel
            }
          />
        );
      })}
    </View>
  );
};
