import React from 'react'
import { useDispatch } from 'react-redux';
import { addItems } from '../Features/Todo/CartSLice';

const Items = () => {
    const dispatch = useDispatch();
    const handelAddItem = () => {
        // when someone click the button i want to dicpatch an action
        // firstly we want to accesa the dispatch whcih is come from the useDispatch hook
        dispatch(addItems("item"))
    }
    return (
        <>
            <div className='item text-center bg-blue-300 mb-2 p-4'>
                <p className='text-xl mb-4'>Item 1</p>
                <button className='px-6 py-2 border-2 border-black rounded-full bg-pink-300' onClick={handelAddItem}>Add Items</button>
            </div>
            <div className='item text-center bg-blue-300 mb-2 p-4'>
                <p className='text-xl mb-4'>Item 2</p>
                <button className='px-6 py-2 border-2 border-black rounded-full bg-pink-300' onClick={handelAddItem}>Add Items</button>
            </div>
            <div className='item text-center bg-blue-300 mb-2 p-4'>
                <p className='text-xl mb-4'>Item 3</p>
                <button className='px-6 py-2 border-2 border-black rounded-full bg-pink-300' onClick={handelAddItem}>Add Items</button>
            </div>
            <div className='item text-center bg-blue-300 mb-2 p-4'>
                <p className='text-xl mb-4'>Item 4</p>
                <button className='px-6 py-2 border-2 border-black rounded-full bg-pink-300' onClick={handelAddItem}>Add Items</button>
            </div>
        </>
    )
}

export default Items
