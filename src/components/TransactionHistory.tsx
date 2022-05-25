import { CloseOutlined } from '@ant-design/icons';
import { Button, List, Radio, Table, Tag } from 'antd';
import React, { useState } from 'react';
import { Typography, Space } from 'antd';
import { Header } from 'antd/lib/layout/layout';
import Title from 'antd/lib/typography/Title';
import { connect, useSelector } from 'react-redux';
import { uniqueID } from '../utils';
import * as actionTypes from "../store/actionTypes"
import "../style.css"

const { Text, Link } = Typography;

function TransactionHistory(ledger) {

    console.log("Test", ledger);
    return (
        <div className="div-layout">
            <div>
                <Title>Transaction History</Title><>{
                    console.log("Test 2", ledger)
                }</>
                <ul>
                    <li>
                        {
                            ledger.ledger.map(el => <><div className='font_family'>
                                <Text> {el.name}</Text>
                                <Text> Rs {el.amount} </Text>
                            </div>
                                <div></div>
                            </>)
                        }
                    </li>
                    {/* <li ><Text code>{ledger.ledger.name} Rs{ledger.ledger.income}</Text></li> */}
                </ul>
            </div>

            {/* <ul>
                {
                    transactions.map((data) =>
                        <li key={data.id}> <Text code>{data.name} Rs{data.amount}</Text><CloseOutlined onClick={(e) => onDeleteTransaction(data.id)}></CloseOutlined></li>
                    )
                }
            </ul> */}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ledger: state.ledgerEntry,
    }
}
export default connect(mapStateToProps)(TransactionHistory)