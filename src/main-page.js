import React from 'react'
import ControlPage from './components/controller-page'
import CommentApprovePage from './components/comment-approve-page'
import { useSelector } from 'react-redux'

const MainPage = () => {
    const header = useSelector(state => state.header)
    return (
        <>
            {header === 'control' ? < ControlPage /> : <CommentApprovePage />}
        </>
    )
}

export default MainPage