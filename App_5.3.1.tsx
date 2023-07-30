import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Drawer = createDrawerNavigator();

function HomeScreen({ navigation }: any) {
  useEffect(() => {
    navigation.setOptions({
      title: '홈1',
      headerLeft: () => <Button title="left" onPress={() => navigation.openDrawer()} />
    });
  }, [navigation]);

  return (
    <View>
      <Text>Home</Text>
      <Button title="Drawer 열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}

function SettingScreen({ navigation }: any) {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="left"
        backBehavior="history"
        drawerContent={({ navigation }) => (
          <SafeAreaView>
            <Text>A Custom Drawer</Text>
            <Button
              onPress={() => navigation.closeDrawer()}
              title="Drawer 닫기"
            />
          </SafeAreaView>
        )}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '홈' }}
        />
        <Drawer.Screen
          name="Setting"
          component={SettingScreen}
          options={{ title: '설정' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
