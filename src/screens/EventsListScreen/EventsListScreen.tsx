import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/AppNavigator';
import styles from './styles';

type EventsListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'EventsListScreen'
>;

type EventsListScreenRouteProp = RouteProp<
  RootStackParamList,
  'EventsListScreen'
>;

interface EventsListScreenProps {
  navigation: EventsListScreenNavigationProp;
}

const EventsListScreen: React.FC<EventsListScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/image360.png')}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.eventTitle}>Events</Text>
          <ScrollView horizontal>
            <View style={styles.eventContainer}>
              <Image
                style={styles.imageItem}
                source={require('../../../assets/picturesOfGirls.png')}
              />
              <View>
                <View style={styles.eventTimeContainer}>
                  <Text style={styles.eventDate}>
                    FRI 15 AUG 22:00 - SAt 16 aug 08:00
                  </Text>
                </View>
                <View>
                  <Text style={styles.eventLocationTop}>KUNE FESTIVAL</Text>
                  <Text style={styles.eventLocation}>secret location</Text>
                </View>
              </View>
            </View>
          </ScrollView>
          <Text style={styles.eventTitle}>Past Events</Text>
          <ScrollView horizontal>
            <View style={styles.eventContainer}>
              <Image
                style={styles.imageItem}
                source={require('../../../assets/picturesOfGirls.png')}
              />
              <View>
                <View style={styles.eventTimeContainer}>
                  <Text style={styles.eventDate}>
                    FRI 15 AUG 22:00 - SAt 16 aug 08:00
                  </Text>
                </View>
                <View>
                  <Text style={styles.eventLocationTop}>KUNE FESTIVAL</Text>
                  <Text style={styles.eventLocation}>secret location</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default EventsListScreen;
