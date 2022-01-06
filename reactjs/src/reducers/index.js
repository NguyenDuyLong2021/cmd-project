import { combineReducers } from 'redux'
import sidebarReducer from './sidebarReducer'
import employeesReducer from './employeesReducer'
import departmentsReducer from './departmentsReducer'
import rolesReducer from './rolesReducer'
import todoListReducer from './todoListReducer'
const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    employees: employeesReducer,
    departments: departmentsReducer,
    roles: rolesReducer,
    TodoListReducer: todoListReducer
});
export default rootReducer