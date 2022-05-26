import { CloseOutlined } from '@ant-design/icons';
import { Button, Divider, List, Radio, Table, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import { Typography, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import { connect, useSelector } from 'react-redux';
import { uniqueID } from '../utils';
import * as actionTypes from "../store/actionTypes"
import TransactionForm from './TransactionForm';


const { Text, Link } = Typography;


function TransactionHistory(ledger) {
    const [value, setValue] = React.useState(1);
    const onClick = e => {
        console.log('Test completed', e.target.value);
        setValue(e.target.value);
    };

    console.log("Test", ledger);
    // useEffect(() => {
    //     console.log({test:test})
    // }, ledger)
    return (
   <div className="div-layout">
            <div>
                <Title>Transaction History</Title><>{
                    console.log("Test 2", ledger)
                }</>
                <Button type="primary"  onClick={(e) => { }}>
                </Button>
                <ul>
                    <li>
                        {
                            ledger.ledger.map(el => <><Text> {el.name}</Text>
                                <Text> for Rs {el.amount} </Text>
                                <div>
                                </div></>)
                        }
                    </li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    console.log({ state })
    return {
        ledger: state.ledgerEntry,
    }
}
export default connect(mapStateToProps)(TransactionHistory)