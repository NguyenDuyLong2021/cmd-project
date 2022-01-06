import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from "../../actions/todoListAction"
import DatePicker from 'sassy-datepicker';
import { Timepicker } from 'react-timepicker';
import 'react-timepicker/timepicker.css'
let distance = 0;
class DateInput extends Component {
    constructor() {
        super()
        this.state = ({ isChoseTime: false, dateChose: null, timeChose: null })
    }
    componentDidMount() {
        // console.log("Độ rộng màn hình" + window.screen.width)
        // console.log("Độ rộng của lọc nâng cao" + document.getElementById("filterAdvanced").clientWidth)
    }
    //dung de check xem la dang chon date input hay dang chon time input
    choseTime = () => {
        this.setState({ isChoseTime: true })
    }
    //xu ly su kien khi thay doi ngay thang nam
    choseDate = () => {
        this.setState({ isChoseTime: false })
    }
    //xu ly su kien khi thay doi gio
    onChangeHour = (hour, mminute) => {
        let result = `${hour}:${mminute}:00.000Z`
        this.setState({ timeChose: result })
    }
    //xu ly su kien khi thay doi ngay thang nam
    onChangeDate = (date) => {
        let result = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        this.setState({ dateChose: result })
    }
    //lay thoi gian hien tai
    timeCurrent = () => {
        let date = new Date();
        let time = `${date.getHours()}:${date.getMinutes()}:00.000Z`
        let dates = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
        this.setState({ ...this.state, timeChose: time, dateChose: dates })
    }
    //submit gio bat dau
    submitStartDate = () => {
        if (this.props.status.dateStartDateInput) {
            this.props.updateStartDateFilterAdvanced(this.state.dateChose+ "T" + this.state.timeChose)
        }
        if (this.props.status.dateEndDateInput) {
            this.props.updateEndDateFilterAdvanced(this.state.dateChose + "T" + this.state.timeChose)
        }
        if (this.props.status.showDatePickerStartNewTask) {
            this.props.timeStartNewTask(this.state.dateChose + "T" + this.state.timeChose)
        }
        if(this.props.status.showDatePickerCompleteNewTask){
            this.props.timeStartCompleteTask(this.state.dateChose + "T" + this.state.timeChose)
        }
    }
    //return distance from left to date picker by position
    distanceToLeft = () => {
        // if (this.props.status.dateStartDateInput) {
        //     distance = window.screen.width - document.getElementById("filterAdvanced").clientWidth + 20
        // }
        // else if (this.props.status.dateEndDateInput) {
        //     distance = window.screen.width - (document.getElementById("filterAdvanced").clientWidth / 2) - 20
        // }
        // else if (this.props.status.showDatePickerStartNewTask) {
        //     distance = 100
        // }
        distance = 100
        return distance
    }
    render() {
        return (
            <div id="date-picker" className="el-picker-panel el-date-picker el-popper has-time" style={{ position: 'fixed', top: '129px', left: `${this.distanceToLeft()}px`, zIndex: 2003 }} x-placement="bottom-start">
                <div className="el-picker-panel__body-wrapper"><div className="el-picker-panel__body">
                    <div className="el-date-picker__time-header">
                        <span className="el-date-picker__editor-wrap">
                            <div className="el-input el-input--small">
                                <input onClick={this.choseDate} value={this.state.dateChose} type="text" autoComplete="off" placeholder="Chọn ngày" className="el-input__inner" />
                            </div>
                        </span>
                        <span className="el-date-picker__editor-wrap">
                            <div className="el-input el-input--small">
                                <input onClick={this.choseTime} value={this.state.timeChose} type="text" autoComplete="off" placeholder="Chọn giờ" className="el-input__inner" />
                            </div>
                        </span>
                    </div>
                    {!this.state.isChoseTime ? <DatePicker onChange={this.onChangeDate} /> : <Timepicker onChange={this.onChangeHour} />}
                </div>
                </div>
                <div className="el-picker-panel__footer" style={{}}>
                    <button onClick={this.timeCurrent} type="button" className="el-button el-picker-panel__link-btn el-button--text el-button--mini">{/**/}{/**/}<span>
                        Hiện tại
                    </span></button>
                    <button onClick={this.submitStartDate} type="button" className="el-button el-picker-panel__link-btn el-button--default el-button--mini is-plain">{/**/}{/**/}<span>
                        OK
                    </span>
                    </button>
                </div>
                <div x-arrow className="popper__arrow" style={{ left: '35px' }} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        status: state.TodoListReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        updateStartDateFilterAdvanced: (date) => { dispatch(action.updateDateStartFilterAdvanced(date)) },
        updateEndDateFilterAdvanced: (date) => { dispatch(action.updateDateEndFilterAdvanced(date)) },
        timeStartNewTask:(date)=>{dispatch(action.timeStartNewTask(date))},
        timeStartCompleteTask:(date)=>{dispatch(action.timeStartCompleteTask(date))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DateInput);