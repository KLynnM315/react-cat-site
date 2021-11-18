import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import { FaGem, FaHeart } from 'react-icons/fa';

import 'react-pro-sidebar/dist/css/styles.css';

function SideBar() {
    return (

            <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                <SubMenu title="Say It With Cats" icon={<FaHeart />}>
                    <MenuItem>Order Cat Faxes</MenuItem>
                    <MenuItem>Subscribe to Cat Texts</MenuItem>
                </SubMenu>
            </Menu>
            </ProSidebar>

    );

}

export default SideBar;
