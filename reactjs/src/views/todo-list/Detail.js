import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from "classnames"
import * as action from "../../actions/todoListAction";
let styleX = { left: '0px', bottom: '0px' }
let styleY = { top: "0px", height: `477px`, right: "0px" }
let styleYMini = { top: "0px", height: `${277 / 2.8}px` }

class Detail extends Component {
    constructor() {
        super()
        this.state = ({ s: false, yPosition: 0, sw: window.innerWidth, showDecription: true, showMoreTime: true, showHistory: true })
    }
    printS = (e) => {
        let chieuDai = document.getElementById('myDiv1').clientHeight//bao gồm phần đệm
        // let chieuDai = document.getElementById('myDiv').offsetHeight//bao gồm phần đệm , scrollbar và viền
        // console.log(document.getElementById('myDiv').clientHeight)
        let tam = document.getElementById('myDiv1').scrollTop
        let pos = this.state.yPosition;
        if (e.deltaY > 0 && tam < chieuDai) {
            pos += 20
            this.setState({ yPosition: pos });
            styleX = { ...styleX, bottom: `${-pos}px` }
            styleY = { ...styleY, top: `${pos}px`, height: `${chieuDai}px` }
            styleYMini = { ...styleYMini, top: `${pos / 2}px`, height: `${chieuDai / 2.8}px` }
            document.getElementById("myDiv1").scrollTo(0, pos)
        }
        else if (e.deltaY < 0 && tam > 0) {
            pos -= 20
            this.setState({ yPosition: pos });
            styleX = { ...styleX, bottom: `${-pos}px` }
            styleY = { ...styleY, top: `${pos}px`, height: `${chieuDai}px` }
            styleYMini = { ...styleYMini, top: `${pos / 2}px`, height: `${chieuDai / 2.8}px` }
            document.getElementById("myDiv1").scrollTo(0, pos)
        }
    }
    // dung de dong chi tiet san pham
    showDetailTask = () => {
        this.props.isShowDetailTask()
    }
    //dung de lay du lieu chi tiet san pham
    getDetailData = () => {
        let detailData;
        if (typeof this.props.statuss.taskDetail !== "undefined") {
            detailData = this.props.statuss.taskDetail
        }
        return detailData;
    }
    // tra ve ten trang thai dua theo id trang thai
    returnNameStatus = (id) => {
        switch (id) {
            case 1:
                return <span data-v-77bf6b9c className="text-done font-bold">
                    Hoàn tất
                </span>
            case 2:
                return <span data-v-77bf6b9c className="text-reject font-bold">
                    Bị từ chối
                </span>
            case 3:
                return <span data-v-77bf6b9c className="text-cancel font-bold">
                    Đã hủy
                </span>
            case 4:
                return <span data-v-77bf6b9c className="text-new font-bold">
                    Mới
                </span>
            case 5:
                return <span data-v-77bf6b9c className="text-doing font-bold">
                    Đang làm
                </span>
            case 6:
                return <span data-v-77bf6b9c className="text-doing font-bold">
                    Chờ xác nhận
                </span>
            case 7:
                return <span data-v-77bf6b9c className="text-complete font-bold">
                    Hoàn thành
                </span>
            case 8:
                return <span data-v-77bf6b9c className="text-over-time font-bold">
                    Qúa hạn
                </span>
        }
    }
    // hien thi mo ta
    showDecription = () => this.setState({ showDecription: !this.state.showDecription })
    //hien thi thoi gian 
    showTime = () => this.setState({ showMoreTime: !this.state.showMoreTime })
    //hien thi lich su
    showHistory = () => this.setState({ showHistory: !this.state.showHistory })
    render() {
        let data = this.getDetailData();
        if (data !== null) {
            console.log("chi tiết nè ", data)
            return (
                <div data-v-77bf6b9c className="el-dialog__wrapper custom-dialog todo-detail-dialog" style={{ zIndex: 2055 }}>
                    <div role="dialog" aria-modal="true" aria-label="dialog" className="el-dialog" style={{ marginTop: '15vh' }}>
                        <div className="el-dialog__header">
                            <div data-v-77bf6b9c className="flex justify-between items-center w-full">
                                <span data-v-77bf6b9c className="el-dialog__title break-normal">Chi tiết công việc</span>
                                <button data-v-714e2a96 data-v-2198c4b9 data-v-77bf6b9c type="button" className="vs-con-dropdown parent-dropdown cbs-context-menu cursor-pointer cbs-context-menu--horizontal todo-context-menu mr-5">
                                    <i data-v-714e2a96 className="nucleo nucleo-dots font-bold cbs-context-menu__btn-trigger" />
                                </button>
                            </div>
                            <button onClick={this.showDetailTask} type="button" aria-label="Close" className="el-dialog__headerbtn">
                                <i className="el-dialog__close el-icon el-icon-close" />
                            </button>
                        </div>
                        <div onWheel={this.printS} className="el-dialog__body">
                            <div data-v-f05cc862 data-v-77bf6b9c className="cbs-comment-with-toggle">
                                <div data-v-f05cc862 className="btn-show-comments cursor-pointer rounded-full h-12 w-12 bg-solid-primary">
                                    <i data-v-f05cc862 className="nucleo nucleo-b-chat-2 text-white" />
                                    <span data-v-f05cc862 className="rounded-full total-comments--circle total-comments bg-solid-red text-center text-white">
                                        0
                                    </span>
                                </div>
                                <div id="myDiv1" data-v-f05cc862 className={classNames("scroll-area--data-list p-6 ps ps--active-y", { "ps--scrolling-y": this.state.s })}>
                                    <div data-v-77bf6b9c className="body main__body">
                                        <div data-v-77bf6b9c role="tablist" aria-multiselectable="true" className="el-collapse cbs-collapse mt-0">
                                            <div data-v-77bf6b9c className="el-collapse-item is-active">
                                                <div role="tab" aria-expanded="true" aria-controls="el-collapse-content-8465" aria-describedby="el-collapse-content-8465">
                                                    <div role="button" id="el-collapse-head-8465" tabIndex={0} className="el-collapse-item__header is-active">
                                                        <h6 data-v-77bf6b9c className="uppercase font-bold ml-6">Thông tin cơ bản</h6>
                                                        <i className="el-collapse-item__arrow el-icon-arrow-right is-active" />
                                                    </div>
                                                </div>
                                                <div role="tabpanel" aria-labelledby="el-collapse-head-8465" id="el-collapse-content-8465" className="el-collapse-item__wrap">
                                                    <div className="el-collapse-item__content">
                                                        <div data-v-77bf6b9c className="p-6 pb-0">
                                                            <div data-v-77bf6b9c>
                                                                <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                        <label data-v-77bf6b9c className="text-solid-gray-1">Mã công việc:</label>
                                                                    </div>
                                                                    <div data-v-77bf6b9c className="vs-col text-black vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                        {data.data.id}
                                                                    </div>
                                                                </div>
                                                                <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                        <label data-v-77bf6b9c className="text-solid-gray-1">Tên công việc:</label>
                                                                    </div>
                                                                    <div data-v-77bf6b9c className="vs-col text-black vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                        {data.data.nameTask}
                                                                    </div>
                                                                </div>
                                                                <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                        <label data-v-77bf6b9c className="text-solid-gray-1">Người giao:</label>
                                                                    </div>
                                                                    <div data-v-77bf6b9c className="vs-col text-black vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                        <i data-v-77bf6b9c className="nucleo nucleo-single-01-2" />
                                                                        &#160;
                                                                        {data.data.nameCretor}
                                                                        &#160;
                                                                        [{data.data.idCreator}]
                                                                    </div>
                                                                </div>
                                                                <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                        <label data-v-77bf6b9c className="text-solid-gray-1">Người được giao:</label>
                                                                    </div>
                                                                    <div data-v-77bf6b9c className="vs-col text-black vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                        <div data-v-77bf6b9c>
                                                                            <div data-v-77bf6b9c className="break-words flex flex-col">
                                                                                {
                                                                                    data.data.employees.map(item =>
                                                                                        <span>
                                                                                            <div className="inline-block">
                                                                                                <div className="item-relation">
                                                                                                    <div className="inline-block">
                                                                                                        <i className="nucleo nucleo-single-01-2 mr-1" />
                                                                                                    </div>
                                                                                                    <span className="item-relation__name">{item.nameEmployee}  &#160; ({item.id})</span>
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>)
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                        <label data-v-77bf6b9c className="text-solid-gray-1">Mức độ ưu tiên:</label>
                                                                    </div>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                        <div data-v-77bf6b9c className="flex items-center h-full">
                                                                            <span data-v-77bf6b9c>{data.data.prioritizeTask}</span>
                                                                            <i data-v-77bf6b9c className="nucleo-priority-S3 ml-2 nucleo text-xl text-gray-3" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                        <label data-v-77bf6b9c className="text-solid-gray-1">Trạng thái:</label>
                                                                    </div>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                        {this.returnNameStatus(data.data.status)}
                                                                    </div>
                                                                </div>
                                                                <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                        <label data-v-77bf6b9c className="text-solid-gray-1">Đánh giá:</label>
                                                                    </div>
                                                                    <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                        <div data-v-77bf6b9c className="flex items-center h-full">
                                                                            <i data-v-77bf6b9c className="nucleo nucleo-priority-S1" style={{ fontSize: '3rem', cursor: 'pointer', color: 'rgb(130, 130, 130)' }} />
                                                                            <i data-v-77bf6b9c className="nucleo nucleo-priority-S1" style={{ fontSize: '3rem', cursor: 'pointer', color: 'rgb(130, 130, 130)' }} />
                                                                            <i data-v-77bf6b9c className="nucleo nucleo-priority-S1" style={{ fontSize: '3rem', cursor: 'pointer', color: 'rgb(130, 130, 130)' }} />
                                                                            <i data-v-77bf6b9c className="nucleo nucleo-priority-S1" style={{ fontSize: '3rem', cursor: 'pointer', color: 'rgb(130, 130, 130)' }} />
                                                                            <i data-v-77bf6b9c className="nucleo nucleo-priority-S1" style={{ fontSize: '3rem', cursor: 'pointer', color: 'rgb(130, 130, 130)' }} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-77bf6b9c role="tablist" aria-multiselectable="true" className="el-collapse cbs-collapse">
                                            <div data-v-77bf6b9c className={classNames("el-collapse-item", { "is-active": this.state.showDecription })}>
                                                <div role="tab" aria-controls="el-collapse-content-9865" aria-describedby="el-collapse-content-9865" aria-aria-expanded={this.state.showDecription ? true : null}>
                                                    <div role="button" id="el-collapse-head-9865" tabIndex={0} className={classNames("el-collapse-item__header", { "is-active": this.state.showDecription })}>
                                                        <h6 data-v-77bf6b9c className="uppercase font-bold ml-6">Mô tả</h6>
                                                        <i onClick={this.showDecription} className="el-collapse-item__arrow el-icon-arrow-right" />
                                                    </div>
                                                </div>
                                                <div role="tabpanel" aria-hidden="true" aria-labelledby="el-collapse-head-9865" id="el-collapse-content-9865" className="el-collapse-item__wrap" style={this.state.showDecription ? { display: 'none' } : null}>
                                                    <div className="el-collapse-item__content">
                                                        <div data-v-77bf6b9c className="ql-editor p-6 pb-0">
                                                            {/* <p>Hai đứa hỗ trợ anh kiểm tra hệ thống nước thải thay phiên nhau 3 ngày/lần giúp anh nhé.</p>
                                                            <p>Báo cáo trên phần bình luận của công việc này luôn.</p> */}
                                                            {data.data.decripstionTask}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-77bf6b9c role="tablist" aria-multiselectable="true" className="el-collapse cbs-collapse">
                                            <div data-v-77bf6b9c className={classNames("el-collapse-item", { "is-active": this.state.showMoreTime })}>
                                                <div role="tab" aria-controls="el-collapse-content-1869" aria-describedby="el-collapse-content-1869" aria-aria-expanded={this.state.showMoreTime ? true : null}>
                                                    <div role="button" id="el-collapse-head-1869" tabIndex={0} className={classNames("el-collapse-item__header", { "is-active": this.state.showMoreTime })}>
                                                        <h6 data-v-77bf6b9c className="uppercase font-bold ml-6">Thông tin thời gian</h6>
                                                        <i onClick={this.showTime} className="el-collapse-item__arrow el-icon-arrow-right" />
                                                    </div>
                                                </div>
                                                <div role="tabpanel" aria-hidden="true" aria-labelledby="el-collapse-head-1869" id="el-collapse-content-1869" className="el-collapse-item__wrap" style={this.state.showMoreTime ? { display: 'none' } : null}>
                                                    <div className="el-collapse-item__content">
                                                        <div data-v-77bf6b9c className="p-6 pb-0">
                                                            <div data-v-77bf6b9c className="vs-row mb-1" style={{ display: 'flex', width: '100%' }}>
                                                                <div data-v-77bf6b9c className="vs-col vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '33.3333%' }}>
                                                                    <label data-v-77bf6b9c className="text-solid-gray-1">Thời điểm bắt đầu:</label>
                                                                </div>
                                                                <div data-v-77bf6b9c className="vs-col text-black vs-xs- vs-sm- vs-lg-" style={{ marginLeft: '0%', width: '66.6667%' }}>
                                                                    {data.data.dateStart.split("T")[0]}       {data.data.dateStart.split("T")[1].split(".")[0]}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-77bf6b9c role="tablist" aria-multiselectable="true" className="el-collapse vs-con-loading__container cbs-collapse" id="logs-with-loading">
                                            <div data-v-77bf6b9c className={classNames("el-collapse-item", { "is-active": this.state.showHistory })}>
                                                <div role="tab" aria-controls="el-collapse-content-3761" aria-describedby="el-collapse-content-3761" aria-aria-expanded={this.state.showHistory ? true : null}>
                                                    <div role="button" id="el-collapse-head-3761" tabIndex={0} className={classNames("el-collapse-item__header", { "is-active": this.state.showHistory })}>
                                                        <h6 data-v-77bf6b9c className="uppercase font-bold ml-6">Lịch sử hoạt động</h6>
                                                        <i onClick={this.showHistory} className="el-collapse-item__arrow el-icon-arrow-right" />
                                                    </div>
                                                </div>
                                                <div role="tabpanel" aria-hidden="true" aria-labelledby="el-collapse-head-3761" id="el-collapse-content-3761" className="el-collapse-item__wrap" style={this.state.showHistory ? { display: 'none' } : null}>
                                                    <div className="el-collapse-item__content">
                                                        {
                                                            data.data.historyTask.length === 0 ? <h6 data-v-77bf6b9c className="text-center px-6 py-3">Không có dữ liệu</h6> :
                                                            data.data.historyTask.map(item =>
                                                                    <div data-v-77bf6b9c className="px-6 py-3">
                                                                        <div data-v-77bf6b9c className="flex flex-wrap justify-between">
                                                                            <h6 data-v-77bf6b9c className="font-bold">{item.nameEmployee}</h6>
                                                                            <p data-v-77bf6b9c>{item.time.split("T")[0]}  {item.time.split("T")[1].split(".")[0]}</p>
                                                                        </div>
                                                                        <p data-v-77bf6b9c className="text-black">{item.comment}</p>
                                                                    </div>
                                                                )
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ps__rail-x" style={styleX}>
                                        <div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} />
                                    </div>
                                    <div className="ps__rail-y" style={styleY}>
                                        <div className="ps__thumb-y" tabIndex={0} style={styleYMini} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
        else return null
    }
}
const mapStateToProps = (state) => {
    return {
        statuss: state.TodoListReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        isShowDetailTask: () => { dispatch(action.showDetailTask()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail);