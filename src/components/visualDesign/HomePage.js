import { Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
import styles from './style';

const Tab = createBottomTabNavigator()

const EmptyScreen = () => {
    return <View></View>
};

const HomePage = ({ navigation }) => {
    return ( 
        <View style={styles.container}>
            {/* <View style={styles.labron}>
                <View style={styles.redPoint}/>
                <Text style={styles.text}>
                    #Labron Challenge
                </Text>
                <Image 
                    style={{ width: 300, height: 300 }}
                    source={require('../../pictures/Picture5.png')} // labron
                />
                <View style={styles.labronMask}>
                    <Image 
                        style={{ width: 300, height: 300 }}
                        source={require('../../pictures/Picture2.png')} // labron mask
                    />
                </View>
                <Text style={styles.textLabron}>
                    {`  Lakers wants YOU\nto be the next team\n\t    player`}
                </Text>
                <View style={styles.avatar}/>
                <View style={styles.lakersLogo}>
                    <Image 
                        style={{ width: 130, height: 90 }}
                        source={require('../../pictures/Picture3.png')} // lakers logo
                    />
                </View>
            </View> */}
            
            
            <Tab.Navigator
                barStyle={{ backgroundColor: 'white' }} //'black' bar
                initialRouteName="/"
            >
                <Tab.Screen
                    name='Home' // Home
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='home' size={24} color={color}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='Profile' // Profile
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='user' size={24} color={color}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='Add' // Add
                    component={EmptyScreen} // CameraScreen
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='plus-circle' size={24} color={color}/>
                        ),
                        headerShown: true
                    }}
                />
                <Tab.Screen
                    name='Notifications' // Notifications
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='bell' size={24} color={color}/>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='Search' // Search
                    component={EmptyScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Feather name='search' size={24} color={color}/>
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
    
            <Button
                title="Go back"
                onPress={() => navigation.goBack()}
            />
        </View>
     );
}
 
export default HomePage;