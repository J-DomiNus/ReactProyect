import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItems from './Navig_Items_List';
import NavigationItem from './Navig_Item_Builder';

//look for more testing methods in jest and enzyme web pages

configure({adapter: new Adapter()})

describe('<NavigationItems />', () => { //to identify 
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    })
    it('should render two <NavigationItem /> elements if is not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    })

    it('should render three <NavigationItem /> elements if is authenticated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    })

    it('should render "Logout" <NavigationItem /> element if is authenticated', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);
    })
});