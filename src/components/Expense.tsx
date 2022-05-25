import React from 'react';
import { Pie } from '@ant-design/plots';
import { connect } from 'react-redux';
import { Button, Col, Row, Statistic } from 'antd';

let transactions = JSON.parse(localStorage.getItem('expenseTrackerState')!);

function Expense(ledger) {

    const DemoPie = () => {
        const data = [
            {
                type: 'income',
                value: ledger.income,
            },
            {
                type: 'expense',
                value: ledger.expense,
            },

        ];
        const config = {
            appendPadding: 10,
            data,
            angleField: 'value',
            colorField: 'type',
            radius: 0.5,
            interactions: [
                {
                    type: 'element-active',
                },
            ],
        };
        return <Pie {...config} />;
    };
    console.log(ledger)
    ledger = ledger.ledger
    return (
        <div className="form-layout1">
            <Row gutter={16}>
                <Col span={12}>
                    <Statistic title="Your Balance" value={ledger.income - ledger.expense} />
                </Col>
                <Col span={12}>
                    <Statistic title="Income (INR)" value={ledger.income} precision={2} />
                </Col>
                <Col span={12}>
                    <Statistic title="Expense (INR)" value={ledger.expense} />
                </Col>
            </Row>
            <DemoPie />
        </div>
        // // <div className="form-layout1">
        // //     <h2> Your Balance</h2>
        // //     <div className="marginBottom1"><span>Rs{ledger.income - ledger.expense}</span></div>
        // //     <h2>Income</h2>
        // //     <div className="marginBottom1"><span>Rs{ledger.income}</span></div>
        // //     <h2>Expense</h2>
        // //     <div className="marginBottom1">Rs{ledger.expense}</div>
        //     <DemoPie />
        // </div>

    )
}

const mapStateToProps = state => {
    return {
        ledger: state.ledger,
    }
}
export default connect(mapStateToProps)(Expense);