import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from "../../actions/todoListAction"
import ButtonFilter from './ButtonFilter';
import DateInput from './DateInput';
import Detail from './Detail';
import DropdownMenu from './DropdownMenu';
import FilterAdvanced from './FilterAdvanced';
import FormCreateTask from './FormCreateTask';
import ItemTask from './ItemTask';
import Pagination from './Pagination';
// import StyledContentLoader from 'styled-content-loader'
const ve = { page: 1, filter: [], advanced: [] };
class TodoList extends Component {
    constructor() {
        super()
        this.state = ({ isFocus: false })
    }
    // có hiện bộ lọc nâng cao hay không
    isShowFilterAdvanced = () => {
        if (this.props.status.isShowFilterAdvanced) {
            let arr = [<div className="v-modal" tabIndex={0} style={{ zIndex: 2054 }} />, <FilterAdvanced />]
            return arr.map((item) => item)
        }
        return null
    }
    isShowCreateTask = () => {
        if (this.props.status.isShowCreateTask) {
            let arr = [<div className="v-modal" tabIndex={0} style={{ zIndex: 2054 }} />, <FormCreateTask />]
            return arr.map((item) => item)
        }
        return null
    }
    isShowDetailTask = () => {
        if (this.props.status.isShowDetailTask) {
            let arr = [<div className="v-modal" tabIndex={0} style={{ zIndex: 2054 }} />, <Detail />]
            return arr.map((item) => item)
        }
        return null
    }
    // hiển thị dropdown menu
    isShowDropdownMenu = () => {
        if (this.props.status.showDropDownMenu) {
            let arr = [<div className="v-modal" tabIndex={0} style={{ zIndex: 2054 }} />, <DropdownMenu />]
            return arr.map((item) => item)
        }
        return null
    }
    // render list công việc
    renderListTask = () => {
        console.log("list item", this.props.status.listTaskFilter)
        if (this.props.status.listTaskFilter !== undefined) {
            return this.props.status.listTaskFilter.map((item) => {
                let status = "";
                switch (item.status) {
                    case 1:
                        status = "Hoàn tất"
                        break;
                    case 2:
                        status = "Bị từ chối"
                        break;
                    case 3:
                        status = "Đã hủy"
                        break;
                    case 4:
                        status = "Mới"
                        break;
                    case 5:
                        status = "Đang làm"
                        break;
                    case 6:
                        status = "Chờ xác nhận"
                        break;
                    case 7:
                        status = "Hoàn thành"
                        break;
                    case 8:
                        status = "Qúa hạn"
                        break;
                }
                return <ItemTask Status={status} nameTask={item.nameTask} id={item.id} dateEnd={item.dateEnd} employees={item.employees} />
            })
        }
    }
    // click vào sẽ hiện thị giao diện bộ lọc nâng cao
    showFilterAdvanced = () => {
        this.props.isShowFilterAdvanced();
        // window.onscroll = ()=>{window.scrollTo(0,0)}
        // document.body.style.overflowY="hidden"
    }
    showFormCreateTask = () => {
        this.props.isShowFormCreateTask()
    }

    // sau khi render xong thi no se lay du lieu defualt
    componentDidMount() {
        // this.props.getAllStask()
        this.props.getTaskByStatus(ve)
    }
    //dung de lay thong tin tim kiem moi khi noi dung trong input thay doi
    changeInforTask = (e) => {
        this.props.searchTask({ object: "tasks", contain: "nameTask_like", key: e.target.value })
    }
    render() {
        return (
            <>
                <div className="router-view">
                    <div className="router-content">
                        <div className="router-header flex flex-wrap items-center mb-6">
                            <div className="content-area__heading">
                                <h2 className="mb-1">Danh sách công việc</h2>
                            </div>
                        </div>
                        <div className="content-area__content">
                            <div className="vue-back-to-top" style={{ bottom: '5%', right: '30px', display: 'none' }}><button type="button" name="button" className="vs-component vs-button icon-white vs-button-primary vs-button-filled includeIcon includeIconOnly"><span className="vs-button-backgroundx vs-button--background" style={{ opacity: 1, left: '20px', top: '20px', width: '0px', height: '0px', transition: 'width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s' }} /><i className="vs-icon notranslate icon-scale vs-button--icon  nucleo nucleo-up-arrow null" style={{ order: 0, marginRight: '0px', marginLeft: '0px' }} />{/**/}<span className="vs-button-linex" style={{ top: 'auto', bottom: '-2px', left: '50%', transform: 'translate(-50%)' }} /></button></div>
                            <div id="todo-list" className="data-list-container">
                                <div data-v-763f102e className="el-dialog__wrapper custom-dialog todo-list-form-sidebar" style={{ display: 'none' }}>
                                    <div role="dialog" aria-modal="true" aria-label="Tạo mới công việc " className="el-dialog" style={{ marginTop: '15vh' }}>
                                        <div className="el-dialog__header">
                                            <span className="el-dialog__title">Tạo mới công việc</span>
                                            <button type="button" aria-label="Close" className="el-dialog__headerbtn">
                                                <i className="el-dialog__close el-icon el-icon-close" />
                                            </button>
                                        </div>
                                        <div className="el-dialog__footer">
                                            <div data-v-763f102e className="flex justify-center flex-wrap items-center">
                                                <button data-v-763f102e type="button" name="button" className="vs-component vs-button w-full sm:w-1/3 mb-3 sm:mb-0 sm:mr-6 font-bold vs-button-primary vs-button-border" style={{ background: 'transparent' }}><span className="vs-button-backgroundx vs-button--background" style={{ opacity: 1, left: '20px', top: '20px', width: '0px', height: '0px', transition: 'width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s' }} />{/**/}<span className="vs-button-text vs-button--text">
                                                    Lưu và Tạo mới
                                                </span><span className="vs-button-linex" style={{ top: 'auto', bottom: '-2px', left: '50%', transform: 'translate(-50%)' }} /></button><button data-v-763f102e type="button" name="button" className="vs-component vs-button w-full sm:w-1/3 font-bold vs-button-primary vs-button-filled"><span className="vs-button-backgroundx vs-button--background" style={{ opacity: 1, left: '20px', top: '20px', width: '0px', height: '0px', transition: 'width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s' }} />{/**/}<span className="vs-button-text vs-button--text">Lưu</span><span className="vs-button-linex" style={{ top: 'auto', bottom: '-2px', left: '50%', transform: 'translate(-50%)' }} /></button></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="dropdown-button-container flex justify-end md:hidden lg:hidden xl:hidden">
                                    <div onClick={this.focusSearch} className={"vs-component vs-con-input-label vs-input input-search mr-3 vs-input-primary", { "isFocus": this.state.isFocus }}>{/**/}
                                        <div className="vs-con-input">
                                            <input type="text" className="vs-inputx vs-input--input large hasIcon" style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                                            <span className="input-span-placeholder vs-input--placeholder large"> Tìm kiếm </span><i className="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon material-icons null">search</i>{/**/}
                                        </div>
                                        <span />
                                    </div>
                                    <button type="button" className="vs-con-dropdown parent-dropdown" />
                                    <button type="button" name="button" className="vs-component vs-button btn-drop vs-button-primary vs-button-filled includeIcon includeIconOnly"><span className="vs-button-backgroundx vs-button--background" style={{ opacity: 1, left: '20px', top: '20px', width: '0px', height: '0px', transition: 'width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s' }} />
                                        <i className="vs-icon notranslate icon-scale vs-button--icon  material-icons null" style={{ order: 0, marginRight: '0px', marginLeft: '0px' }}>expand_more</i>{/**/}
                                        <span className="vs-button-linex" style={{ top: 'auto', bottom: '-2px', left: '50%', transform: 'translate(-50%)' }} />
                                    </button>
                                </div>

                                <div className="vs-component vs-con-table stack-table todo-list-table vs-table-primary">
                                    <header className="header-table vs-table--header">
                                        <div className="w-full">
                                            <div className="flex flex-grow justify-end">
                                                <div className="vs-component vs-con-input-label vs-input input-search mr-3 md:block lg:block xl:block hidden vs-input-primary">{/**/}
                                                    <div className="vs-con-input">
                                                        <input onChange={this.changeInforTask} type="text" className="vs-inputx vs-input--input large hasIcon" style={{ border: '1px solid rgba(0, 0, 0, 0.2)' }} />
                                                        <span className="input-span-placeholder vs-input--placeholder large"> Tìm kiếm </span>
                                                        <i className="vs-icon notranslate icon-scale icon-inputx notranslate vs-input--icon material-icons null">search</i>{/**/}
                                                    </div>
                                                    <span />
                                                </div>
                                                <div className="md:flex lg:flex xl:flex hidden">
                                                    <button onClick={this.showFilterAdvanced} type="button" name="button" className="vs-component vs-button w-48 font-bold vs-button-primary vs-button-border" style={{ background: 'transparent' }}>
                                                        <span className="vs-button-backgroundx vs-button--background" style={{ opacity: 1, left: '20px', top: '20px', width: '0px', height: '0px', transition: 'width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s' }} />{/**/}
                                                        <span className="vs-button-text vs-button--text">Bộ lọc</span>
                                                        <span className="vs-button-linex" style={{ top: 'auto', bottom: '-2px', left: '50%', transform: 'translate(-50%)' }} />
                                                    </button>
                                                    <div onClick={this.showFormCreateTask} className="md:flex lg:flex xl:flex hidden ml-3">
                                                        <button type="button" name="button" className="vs-component vs-button w-48 font-bold vs-button-primary vs-button-filled">
                                                            <span className="vs-button-backgroundx vs-button--background" style={{ opacity: 1, left: '20px', top: '20px', width: '0px', height: '0px', transition: 'width 0.3s ease 0s, height 0.3s ease 0s, opacity 0.3s ease 0s' }} />{/**/}
                                                            <span className="vs-button-text vs-button--text">Tạo việc</span>
                                                            <span className="vs-button-linex" style={{ top: 'auto', bottom: '-2px', left: '50%', transform: 'translate(-50%)' }} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-grow justify-between items-center mt-5 pb-5">
                                                <div className="lg:flex flex-grow justify-start w-full">
                                                    <ButtonFilter nameButtonFilter="Mới" />
                                                    <ButtonFilter nameButtonFilter="Đang làm" />
                                                    <ButtonFilter nameButtonFilter="Chờ xác nhận" />
                                                    <ButtonFilter nameButtonFilter="Hoàn thành" />
                                                    <ButtonFilter nameButtonFilter="Đã hủy" />
                                                    <ButtonFilter nameButtonFilter="Qúa hạn" />
                                                </div>
                                            </div>
                                        </div>
                                    </header>

                                    <div className="con-tablex vs-table--content">
                                        <div className="vs-con-tbody vs-table--tbody ">
                                            <table className="vs-table vs-table--tbody-table">
                                                <thead className="vs-table--thead">
                                                    <tr>{/**/}</tr>
                                                </thead>
                                                <div>
                                                    {this.props.status.listTaskFilter === undefined ?

                                                        <div data-v-763f102e className="el-dialog__wrapper custom-dialog todo-list-form-sidebar" style={{ zIndex: 2003 }}>
                                                            <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-19.jpg" alt="" style={{ width: "200px", height: "200px", margin: "auto" }} />
                                                        </div>
                                                        : this.renderListTask()
                                                    }
                                                </div>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <Pagination />
                            </div>
                        </div>
                    </div >
                </div >
                {this.isShowFilterAdvanced()}
                {this.isShowCreateTask()}
                {this.isShowDetailTask()}
                {this.isShowDropdownMenu()}
                {/* <div className="v-modal" tabIndex={0} style={{ zIndex: 2000 }} /> */}
                {this.props.status.dateStartDateInput ? <DateInput /> : null}
                {this.props.status.dateEndDateInput ? <DateInput /> : null}
                {this.props.status.showDatePickerStartNewTask ? <DateInput /> : null}
                {this.props.status.showDatePickerCompleteNewTask ? <DateInput /> : null}
            </>
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
        getTaskByStatus: (page) => { dispatch(action.dispatchLimitedTaskRequest(page)) },
        getAllStask: () => { dispatch(action.getAllTaskRequest()) },
        isShowFilterAdvanced: () => { dispatch(action.isShowFilterAdvanced()) },
        isShowFormCreateTask: () => { dispatch(action.isShowCreateTask()) },
        isShowDetailTask: () => { dispatch(action.showDetailTask()) },
        searchTask: (params) => { dispatch(action.searchTask(params)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);