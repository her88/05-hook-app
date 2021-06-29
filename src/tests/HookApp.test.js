import { shallow } from 'enzyme';
import React from 'react';
import { HookApp } from '../HookApp';

describe('Pruebas en <HooKApp />', () => {

    test('debe mostrarse correctamente ', () => {
        
        const wrapper = shallow( <HookApp />);
        expect(wrapper).toMatchSnapshot();
    })
    
    
})
