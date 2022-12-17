import { useState } from 'react'
import { Route, Routes, } from "react-router-dom";

import './css/Layout.css'
import './css/OldLayout.css'

import Content from './Content'
import Sidebar from './Sidebar'
import Notes from './Notes/Notes';
import NoteDetail from './Notes/NoteDetail';
import NotFound from './NotFound';

export default function Layout() {

    const [toggleClass, setToggleClass] = useState('')

    function setClass() {
        if (toggleClass === '') {
            setToggleClass('active')
            console.log('class set done')
        } else {
            setToggleClass('')
            console.log('class remove done ')
        }
    }
    return (
        <>
            <div id="layout" className={toggleClass}>
                {/* Menu toggle */}
                <div href="#menu" id="menuLink" className="menu-link" onClick={setClass}>
                    {/*  Hamburger icon  */}
                    <span></span>
                </div>
                <Sidebar />
                <Routes>
                    <Route path="/" element={<Content />}
                    />
                    <Route path="/notes">
                        <Route index
                            element={<Notes />}>
                        </Route>
                        <Route path=":id" element={<NoteDetail />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>



            </div>
        </>
    )
}