import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Resturant: [
        {
          image: images.rest1,
          text: 'get a combo meal\nversus 4000 points',
        },
        {
          image: images.rest2,
          text: 'just 3999 points\nversus it ',
        },
        {
          image: images.rest3,
          text: 'Buffalo burger is\nalways win',
        },
        {
          image: images.rest4,
          text: 'get a combo meal\nversus 4000 points',
        },
        {
          image: images.rest5,
          text: 'get a combo meal\nversus 4000 points',
        },
        {
          image: images.rest6,
          text: 'get a combo meal\nversus 4000 points',
        },
      ],
    };
  }

  render() {
    return (
      <>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={COLORS.backgrondTap}
            barStyle={'dark-content'}
            translucent={true}
          />

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
                fontWeight: 'bold',
                color: COLORS.first_color,
                fontSize: 20,
                marginLeft: SIZES.width * 0.23,
              }}>
              Restaurant
            </Text>
          </View>
          <ScrollView>
            {this.state.Resturant.map((data, index) => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  width: SIZES.width * 0.85,
                  height: 150,
                  borderRadius: SIZES.width * 0.04,
                  alignSelf: 'center',
                  backgroundColor: '#f0f0f0',
                  marginBottom: 15,
                  padding: 20,
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="cover"
                    source={data.image}
                    style={{
                      width: SIZES.width * 0.25,
                      height: SIZES.height * 0.14,
                      borderRadius: SIZES.width * 0.125,
                    }}
                  />
                  <View style={{marginLeft: SIZES.width * 0.09}}>
                    <Text
                      style={{
                        color: COLORS.first_color,
                        fontSize: 20,
                        marginBottom: 5,
                      }}>
                      Hurry Up
                    </Text>
                    <Text
                      style={{
                        color: COLORS.first_color,
                      }}>
                      {data.text}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
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
