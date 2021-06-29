import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en <AppRouter />', () => {

    const setUser = jest.fn();
    const user = {
        id: 123,
        name: 'Hernan'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user,
            setUser
        }} >
            <AppRouter />
        </UserContext.Provider>
    );

    test('debe de mostrarse correctamente ', () => {

        expect(wrapper).toMatchSnapshot();

    });

});
