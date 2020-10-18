import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDatails from './pages/OrphanageDetails';


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen
                    name="OrphanagesMap"
                    component={OrphanagesMap}
                    options={{
                        headerShown: true,
                        headerStyle: { backgroundColor: '#15c3d6' },
                        title: 'Localização dos Orfanatos',
                        headerTitleStyle: { color: '#FFF', alignSelf: 'center' }
                    }}
                />

                <Screen
                    name="OrphanageDetails"
                    component={OrphanageDatails}
                />
            </Navigator>
        </NavigationContainer>
    );
}