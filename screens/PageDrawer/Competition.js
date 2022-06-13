import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {scale} from 'react-native-size-matters';
export default class Competition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      competition: [
        {
          image: images.girl,
          name: 'Ben Affleck',
          point: '1500',
        },
        {
          image: images.girl,
          name: 'peter',
          point: '1400',
        },
        {
          image: images.girl,
          name: 'Harry Maguire',
          point: '1300',
        },
        {
          image: images.girl,
          name: 'Harry Potter',
          point: '1200',
        },
      ],
    };
  }
  render() {
    return (
      <>
        <StatusBar
          backgroundColor={COLORS.white}
          barStyle={'dark-content'}
          translucent={true}
        />
        <View style={{backgroundColor: COLORS.backgrondHome, flex: 1}}>
          <View style={styles.container1}>
            <TouchableOpacity
              style={styles.btnHeader}
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <Icon
                name={icons.arrowLeft}
                color={COLORS.first_color}
                size={SIZES.sizeIcon}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: COLORS.first_color,
                fontSize: scale(20),
                textAlign: 'center',
                width: '80%',
              }}>
              Competition
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.state.competition.map((data, index) => (
              <View
                style={{
                  width: '90%',
                  height: SIZES.height * 0.15,
                  borderRadius: 20,
                  backgroundColor: COLORS.backgrondTap,
                  marginBottom: 15,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={data.image}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      justifyContent: 'center',
                      marginLeft: 10,
                    }}
                  />
                  <View>
                    <Text style={{fontSize: 20, color: '#000', marginLeft: 15}}>
                      {data.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginTop: SIZES.height * 0.02,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{fontSize: 20, color: '#000', marginLeft: 15}}>
                        Point
                      </Text>
                      <Text
                        style={{
                          color: '#5885ac',
                          fontSize: 20,
                          marginLeft: SIZES.width * 0.2,
                        }}>
                        {data.point}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    width: SIZES.width,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.05,
    paddingHorizontal: 15,
    alignItems: 'center',
    marginBottom: SIZES.height * 0.03,
  },
  textheader: {
    color: COLORS.first_color,
    fontSize: 20,
    textAlign: 'center',
    marginLeft: SIZES.width * 0.26,
  },
  btnHeader: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: COLORS.backgrondTap,
  },
});
