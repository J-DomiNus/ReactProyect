import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { BurgerBuilder } from './BurgerBuilder';
import ControlsList from '../../components/Burger/Controls/ControlsList';

//look for more testing methods in jest and enzyme web pages

configure({adapter: new Adapter()})

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitStateFromServer={() => {}}/>);
    });

    it('should render <ControlsList /> when receving ingredients', () => {
        wrapper.setProps({localIngredients: true})
        expect(wrapper.find(ControlsList)).toHaveLength(1);
    })
})
