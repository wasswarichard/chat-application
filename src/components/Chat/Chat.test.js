import React from "react";
import Chat from "./Chat";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import store from "../../store/store";

describe('<Chat>', () => {
    it('renders Chat Component', () => {
        const wrapper = shallow(<Chat store={store}/>)
    });
});