import React from "react";
import Join from "./Join";
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })
import store from "../../store/store";

describe('<Join>', () => {
    it('renders Join Component', () => {
        const wrapper = shallow(<Join store={store}/>)
    });
});