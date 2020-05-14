import { combineReducers } from "redux"

import comments from './comments-reducer'
import agendas from './agendas-reducer'
import socket from './socket-reducer'
import header from './header-reducer'
import errors from './error-reducer'
import event from './event-reducer'
import user from './user-reducer'


export default combineReducers({
    user,
    event,
    errors,
    socket,
    header,
    agendas,
    comments,
})
