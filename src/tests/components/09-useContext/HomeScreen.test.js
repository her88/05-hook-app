import { mount } from "enzyme";
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from "../../../components/09-useContext/UserContext";


describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Hernan',
        email: 'her@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('se debe mostrar correctamente el componente ', () => {
        
        expect(wrapper).toMatchSnapshot();
    });
    
    
});
