import { Button, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs } from 'antd';
import { Typography, Space } from 'antd';
import { Link } from 'react-router-dom';

// const { Text, Link } = Typography;

const { TabPane } = Tabs;

function callback(e) {
    // console.log(key);
    // e.preventDefault();
}

function AppHeader() {
    return (
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <div className="card-container">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
                    <div className="card-container">
                        <Tabs defaultActiveKey="1" onChange={(e) => callback(e)} type="card">
                            <TabPane tab={<Link to="/Expense">Insight</Link>} key="1">
                            </TabPane>
                            <TabPane tab={<Link to="/ExpenseTracker">Transaction History</Link>} key="2">
                            </TabPane>
                            {/* <TabPane tab={<a href="/ExpenseTracker">Transactions</a>} key="2">
                        </TabPane> */}
                        </Tabs>
                    </div>
                </Menu>
            </div>
        </Header>
    )
}
export default AppHeader;