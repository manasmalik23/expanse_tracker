import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from 'antd';
import { Typography, Space } from 'antd';

const { Text, Link } = Typography;

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function AppHeader() {
return(
    <Header style={{ position: "fixed", zIndex: 1, width: "1000%" }}>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Tabs defaultActiveKey="1" onChange={callback} type="card">
                <TabPane tab ={<a href="/Expense">Insight</a>}key="1">
                </TabPane>
                <TabPane tab={<a href="/ExpenseTracker">Transaction</a>} key="2">
                </TabPane>
           </Tabs>
        </Menu>
    </Header>
)
}
export default AppHeader;