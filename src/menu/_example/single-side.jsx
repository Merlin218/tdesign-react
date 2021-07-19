// @ts-nocheck
import React, { useState } from 'react';
import { Menu, MenuItem } from '@tencent/tdesign-react';

function SingleSide() {
  const [active, setActive] = useState('0');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Menu
      value={active}
      onChange={(v) => setActive(v)}
      onCollapsed={({ collapsed }) => setCollapsed(collapsed)}
      logo={
        collapsed ? null : <img src="https://www.tencent.com/img/index/menu_logo_hover.png" width="136" alt="logo" />
      }
    >
      <MenuItem value={'0'}>
        <span>仪表盘</span>
      </MenuItem>
      <MenuItem value={'1'}>
        <span>资源列表</span>
      </MenuItem>
      <MenuItem value={'2'}>
        <span>视频区</span>
      </MenuItem>
      <MenuItem value={'3'} disabled>
        <span>根目录</span>
      </MenuItem>
      <MenuItem value={'4'}>
        <span>调度平台</span>
      </MenuItem>
      <MenuItem value={'5'}>
        <span>精准监控</span>
      </MenuItem>
      <MenuItem value={'6'}>
        <span>个人中心</span>
      </MenuItem>
    </Menu>
  );
}

export default SingleSide;