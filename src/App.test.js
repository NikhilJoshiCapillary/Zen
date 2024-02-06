import { render, screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import App from './App';
import Todos from './Todos';
import Navbar from './Navbar';
import Home from './Home';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import globalReducer, { initial_state } from './Reducers/globalReducer';
import { CREATE_TASK, REMOVE_TASK } from './Actions/constant';
import About from './About';

function initialProps(){
  render(<Provider store={store}><Todos/></Provider>);
}


describe("All about home page", ()=>{
  test(("check for all ui-elements"), ()=>{
    initialProps();
    const getInputBar = screen.getByTestId("input-bar")
    const addingBtn = screen.getByTestId("add-btn")
    expect(getInputBar).toBeInTheDocument()
    expect(addingBtn).toBeInTheDocument()
  })



  test("testing addition of a task", ()=>{
    initialProps();
    const inputBar = screen.getByTestId("input-bar");
    const addingBtn = screen.getByTestId("add-btn");
    fireEvent.change(inputBar, {target:{
      value:"Go to Park"
    }})
    fireEvent.click(addingBtn);
    expect(screen.getByText("Go to Park")).toBeInTheDocument();
    const removeBtn = screen.getByTestId("remove-btn");
    fireEvent.click(removeBtn)
  })


  test("testing removal of a task", ()=>{
    initialProps();
    const inputBar = screen.getByTestId("input-bar");
    const addingBtn = screen.getByTestId("add-btn");
    fireEvent.change(inputBar, {target:{
      value:"Go to Park"
    }})
    fireEvent.click(addingBtn);
    const text = screen.queryByText("Go to Park");
    const removeBtn = screen.getByTestId("remove-btn");
    fireEvent.click(removeBtn);
    expect(text).not.toBeInTheDocument()
  })


  test("testing editing  of a task", ()=>{
    initialProps();
    const inputBar = screen.getByTestId("input-bar");
    const addingBtn = screen.getByTestId("add-btn");
    fireEvent.change(inputBar, {target:{
      value:"Go to Park"
    }})
    fireEvent.click(addingBtn);
    const text = screen.queryByText("Go to Park");
    const removeBtn = screen.getByTestId("remove-btn");
    fireEvent.click(removeBtn);
    expect(text).not.toBeInTheDocument()
  })

})