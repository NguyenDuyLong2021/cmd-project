import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from "../../actions/todoListAction"
import IconNumeberPagination from './IconNumeberPagination';

class Pagination extends Component {
    constructor() {
        super()
        this.state = ({
            isLoading: true
        })
    }
    // render button phân trang
    renderButtonPagination = () => {
        let numberPages;
        if ( this.props.status.listTaskFilter !== undefined) {
            numberPages = this.props.status.allTask
        }
        let arrayPanigation = [];
        if(numberPages>10){
            for (let index = 1; index <= Math.ceil(numberPages / 10); index++) {
                arrayPanigation.push(index)
            }
        }else{
            for (let index = 1; index === 1; index++) {
                arrayPanigation.push(index)
            }
        }
        return arrayPanigation.map((item, key) =>
            <IconNumeberPagination key={key} number={item} />
        )
    }

    render() {
        return (
            <div className="flex justify-center mt-3">
                <div>
                    <div className="vs-row" style={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
                        <div className="vs-col vs-pagination--mb vs-xs-12 vs-sm-12 vs-lg-6" style={{ justifyContent: 'flex-start', display: 'flex', alignItems: 'center', marginLeft: '0%', width: '100%' }} />
                        <div className="vs-col vs-pagination--mb vs-xs-12 vs-sm-12 vs-lg-6" style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', marginLeft: '0%', width: '100%' }}>
                            <div className="con-vs-pagination vs-pagination-primary">
                                <nav className="vs-pagination--nav">
                                    <button className="vs-pagination--buttons btn-prev-pagination vs-pagination--button-prev disabled" disabled="disabled">
                                        <i className="vs-icon notranslate icon-scale material-icons null">chevron_left</i>
                                    </button>
                                    <ul className="vs-pagination--ul">
                                        {this.renderButtonPagination()}
                                    </ul>
                                    <button className="vs-pagination--buttons btn-next-pagination vs-pagination--button-next disabled" disabled="disabled">
                                        <i className="vs-icon notranslate icon-scale material-icons null">chevron_right</i>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
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
        getTaskByPage: (page) => { dispatch(action.dispatchLimitedTaskRequest(page)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Pagination);