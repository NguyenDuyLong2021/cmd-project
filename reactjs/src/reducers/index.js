import { combineReducers } from 'redux'
import sidebarReducer from './sidebarReducer'
import employeesReducer from './employeesReducer'
import departmentsReducer from './departmentsReducer'
import rolesReducer from './rolesReducer'
import todoListReducer from './todoListReducer'
import requestsReducer from './requestsReducer'
const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    employees: employeesReducer,
    departments: departmentsReducer,
    roles: rolesReducer,
    requests: requestsReducer,
    TodoListReducer: todoListReducer
});
export default rootReducer