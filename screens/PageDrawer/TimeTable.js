import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {images, COLORS, SIZES, icons} from '../../constants/index';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
const initialLayout = {width: Dimensions.get('window').width};

import Icon from 'react-native-vector-icons/FontAwesome5';

const track = [
  {
    namearea: 'State area',
  },
  {
    namearea: 'State area',
  },
  {
    namearea: 'State area',
  },
  {
    namearea: 'State area',
  },
];
const FirstRoute = () => (
  <View
    style={{
      height: SIZES.height,
      width: SIZES.width,
      backgroundColor: '#f0f0f0',
      marginTop: SIZES.height * 0.03,
    }}>
    <ScrollView>
      <View
        style={{
          height: SIZES.height,
          width: SIZES.width,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: SIZES.width,
            borderBottomEndRadius: 180,
            borderBottomLeftRadius: 180,
          }}>
          <View style={{height: SIZES.height * 0.08, backgroundColor: '#fff'}}>
            <Text style={{fontSize: 20, color: COLORS.black}}>
              From
              <Text style={{color: COLORS.second_color, fontSize: 17}}>
                10 AM : 6 PM
              </Text>
            </Text>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <Text style={{fontSize: 17, color: COLORS.black}}>Notes</Text>
          </View>
          <View
            style={{width: SIZES.width * 0.66, height: SIZES.height * 0.16}}>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.black,
                marginTop: SIZES.height * 0.01,
                fontSize: 14,
              }}>
              Each region only one day each week,at a fixed time,The location of
              the target area.He Will contact you before coming
            </Text>
          </View>
        </View>
        <View
          style={{
            height: SIZES.height * 0.05,
            width: SIZES.width,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.height * 0.05,
            backgroundColor: '#f0f0f0',
          }}>
          <Text
            style={{
              fontSize: 22,
              color: COLORS.black,
              fontWeight: 'bold',
            }}>
            My Area
          </Text>
        </View>
        <View
          style={{
            height: SIZES.height * 0.5,
            width: SIZES.width,
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
          }}>
          {track.map((item, index) => (
            <TouchableOpacity
              style={{
                height: SIZES.height * 0.06,
                width: SIZES.width * 0.6,
                backgroundColor: COLORS.first_color,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 7,
              }}>
              <Text style={{fontSize: 18, color: COLORS.white}}>
                {item.namearea}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
);

const SecondRoute = () => (
  <View
    style={{
      height: SIZES.height,
      width: SIZES.width,
      backgroundColor: '#f0f0f0',
      marginTop: SIZES.height * 0.03,
    }}>
    <ScrollView>
      <View
        style={{
          height: SIZES.height,
          width: SIZES.width,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: SIZES.width,
            borderBottomEndRadius: 180,
            borderBottomLeftRadius: 180,
          }}>
          <View style={{height: SIZES.height * 0.08, backgroundColor: '#fff'}}>
            <Text style={{fontSize: 20, color: COLORS.black}}>
              From
              <Text style={{color: COLORS.second_color, fontSize: 17}}>
                10 AM : 6 PM
              </Text>
            </Text>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <Text style={{fontSize: 17, color: COLORS.black}}>Notes</Text>
          </View>
          <View
            style={{width: SIZES.width * 0.66, height: SIZES.height * 0.16}}>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.black,
                fontSize: 14,
                marginTop: SIZES.height * 0.01,
              }}>
              Each region only one day each week,at a fixed time,The location of
              the target area.He Will contact you before coming
            </Text>
          </View>
        </View>
        <View
          style={{
            height: SIZES.height * 0.05,
            width: SIZES.width,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.height * 0.05,
            backgroundColor: '#f0f0f0',
          }}>
          <Text style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}>
            My Area
          </Text>
        </View>
        <View
          style={{
            height: SIZES.height * 0.5,
            width: SIZES.width,
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
          }}>
          {track.map((item, index) => (
            <TouchableOpacity
              style={{
                height: SIZES.height * 0.06,
                width: SIZES.width * 0.6,
                backgroundColor: COLORS.first_color,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 7,
              }}>
              <Text style={{fontSize: 18, color: COLORS.white}}>
                {item.namearea}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
);
const ThirdRoute = () => (
  <View
    style={{
      height: SIZES.height,
      width: SIZES.width,
      backgroundColor: '#f0f0f0',
      marginTop: SIZES.height * 0.03,
    }}>
    <ScrollView>
      <View
        style={{
          height: SIZES.height,
          width: SIZES.width,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: SIZES.width,
            borderBottomEndRadius: 180,
            borderBottomLeftRadius: 180,
          }}>
          <View style={{height: SIZES.height * 0.08, backgroundColor: '#fff'}}>
            <Text style={{fontSize: 20, color: COLORS.black}}>
              From
              <Text style={{color: COLORS.second_color, fontSize: 17}}>
                10 AM : 6 PM
              </Text>
            </Text>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <Text style={{fontSize: 17, color: COLORS.black}}>Notes</Text>
          </View>
          <View
            style={{width: SIZES.width * 0.66, height: SIZES.height * 0.16}}>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.black,
                fontSize: 14,
                marginTop: SIZES.height * 0.01,
              }}>
              Each region only one day each week,at a fixed time,The location of
              the target area.He Will contact you before coming
            </Text>
          </View>
        </View>
        <View
          style={{
            height: SIZES.height * 0.05,
            width: SIZES.width,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.height * 0.05,
            backgroundColor: '#f0f0f0',
          }}>
          <Text style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}>
            My Area
          </Text>
        </View>
        <View
          style={{
            height: SIZES.height * 0.5,
            width: SIZES.width,
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
          }}>
          {track.map((item, index) => (
            <TouchableOpacity
              style={{
                height: SIZES.height * 0.06,
                width: SIZES.width * 0.6,
                backgroundColor: COLORS.first_color,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 7,
              }}>
              <Text style={{fontSize: 18, color: COLORS.white}}>
                {item.namearea}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
);
const FourRoute = () => (
  <View
    style={{
      height: SIZES.height,
      width: SIZES.width,
      backgroundColor: '#f0f0f0',
      marginTop: SIZES.height * 0.03,
    }}>
    <ScrollView>
      <View
        style={{
          height: SIZES.height,
          width: SIZES.width,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: SIZES.width,
            borderBottomEndRadius: 180,
            borderBottomLeftRadius: 180,
          }}>
          <View style={{height: SIZES.height * 0.08, backgroundColor: '#fff'}}>
            <Text style={{fontSize: 20, color: COLORS.black}}>
              From
              <Text style={{color: COLORS.second_color, fontSize: 17}}>
                10 AM : 6 PM
              </Text>
            </Text>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <Text style={{fontSize: 17, color: COLORS.black}}>Notes</Text>
          </View>
          <View
            style={{width: SIZES.width * 0.66, height: SIZES.height * 0.16}}>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.black,
                fontSize: 14,
                marginTop: SIZES.height * 0.01,
              }}>
              Each region only one day each week,at a fixed time,The location of
              the target area.He Will contact you before coming
            </Text>
          </View>
        </View>
        <View
          style={{
            height: SIZES.height * 0.05,
            width: SIZES.width,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.height * 0.05,
            backgroundColor: '#f0f0f0',
          }}>
          <Text style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}>
            My Area
          </Text>
        </View>
        <View
          style={{
            height: SIZES.height * 0.5,
            width: SIZES.width,
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
          }}>
          {track.map((item, index) => (
            <TouchableOpacity
              style={{
                height: SIZES.height * 0.06,
                width: SIZES.width * 0.6,
                backgroundColor: COLORS.first_color,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 7,
              }}>
              <Text style={{fontSize: 18, color: COLORS.white}}>
                {item.namearea}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
);
const FiveRoute = () => (
  <View
    style={{
      height: SIZES.height,
      width: SIZES.width,
      backgroundColor: '#f0f0f0',
      marginTop: SIZES.height * 0.03,
    }}>
    <ScrollView>
      <View
        style={{
          height: SIZES.height,
          width: SIZES.width,
          flexWrap: 'wrap',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            width: SIZES.width,
            borderBottomEndRadius: 180,
            borderBottomLeftRadius: 180,
          }}>
          <View style={{height: SIZES.height * 0.08, backgroundColor: '#fff'}}>
            <Text style={{fontSize: 20, color: COLORS.black}}>
              From
              <Text style={{color: COLORS.second_color, fontSize: 17}}>
                10 AM : 6 PM
              </Text>
            </Text>
          </View>
          <View style={{backgroundColor: '#fff'}}>
            <Text style={{fontSize: 17, color: COLORS.black}}>Notes</Text>
          </View>
          <View
            style={{width: SIZES.width * 0.66, height: SIZES.height * 0.16}}>
            <Text
              style={{
                textAlign: 'center',
                color: COLORS.black,
                fontSize: 14,
                marginTop: SIZES.height * 0.01,
              }}>
              Each region only one day each week,at a fixed time,The location of
              the target area.He Will contact you before coming
            </Text>
          </View>
        </View>
        <View
          style={{
            height: SIZES.height * 0.05,
            width: SIZES.width,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: SIZES.height * 0.05,
            backgroundColor: '#f0f0f0',
          }}>
          <Text style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}>
            My Area
          </Text>
        </View>
        <View
          style={{
            height: SIZES.height * 0.5,
            width: SIZES.width,
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
          }}>
          {track.map((item, index) => (
            <TouchableOpacity
              style={{
                height: SIZES.height * 0.06,
                width: SIZES.width * 0.6,
                backgroundColor: COLORS.first_color,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 7,
              }}>
              <Text style={{fontSize: 18, color: COLORS.white}}>
                {item.namearea}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  </View>
);
// const SixRoute = () => (
//   <View
//     style={{
//       height: SIZES.height,
//       width: SIZES.width,
//       backgroundColor: '#f0f0f0',
//       marginTop: SIZES.height * 0.03,
//     }}>
//     <ScrollView>
//       <View
//         style={{
//           height: SIZES.height,
//           width: SIZES.width,
//           flexWrap: 'wrap',
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: '#fff',
//             width: SIZES.width,
//             borderBottomEndRadius: 180,
//             borderBottomLeftRadius: 180,
//           }}>
//           <View style={{height: SIZES.height * 0.08, backgroundColor: '#fff'}}>
//             <Text style={{fontSize: 20, color: COLORS.black}}>
//               From
//               <Text style={{color: COLORS.second_color, fontSize: 17}}>
//                 10 AM : 6 PM
//               </Text>
//             </Text>
//           </View>
//           <View style={{backgroundColor: '#fff'}}>
//             <Text style={{fontSize: 17, color: COLORS.black}}>Notes</Text>
//           </View>
//           <View
//             style={{width: SIZES.width * 0.66, height: SIZES.height * 0.16}}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 color: COLORS.black,
//                 fontSize: 14,
//                 marginTop: SIZES.height * 0.01,
//               }}>
//               Each region only one day each week,at a fixed time,The location of
//               the target area.He Will contact you before coming
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             height: SIZES.height * 0.05,
//             width: SIZES.width,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginTop: SIZES.height * 0.05,
//             backgroundColor: '#f0f0f0',
//           }}>
//           <Text style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}>
//             My Area
//           </Text>
//         </View>
//         <View
//           style={{
//             height: SIZES.height * 0.5,
//             width: SIZES.width,
//             alignItems: 'center',
//             backgroundColor: '#f0f0f0',
//           }}>
//           {track.map((item, index) => (
//             <TouchableOpacity
//               style={{
//                 height: SIZES.height * 0.06,
//                 width: SIZES.width * 0.6,
//                 backgroundColor: COLORS.first_color,
//                 borderRadius: 10,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginVertical: 7,
//               }}>
//               <Text style={{fontSize: 18, color: COLORS.white}}>
//                 {item.namearea}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   </View>
// );
// const SevenRoute = () => (
//   <View
//     style={{
//       height: SIZES.height,
//       width: SIZES.width,
//       backgroundColor: '#f0f0f0',
//       marginTop: SIZES.height * 0.03,
//     }}>
//     <ScrollView>
//       <View
//         style={{
//           height: SIZES.height,
//           width: SIZES.width,
//           flexWrap: 'wrap',
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             alignItems: 'center',
//             justifyContent: 'center',
//             backgroundColor: '#fff',
//             width: SIZES.width,
//             borderBottomEndRadius: 180,
//             borderBottomLeftRadius: 180,
//           }}>
//           <View style={{backgroundColor: '#fff'}}>
//             <Text style={{fontSize: 20, color: COLORS.black}}>
//               From
//               <Text style={{color: COLORS.second_color, fontSize: 17}}>
//                 10 AM : 6 PM
//               </Text>
//             </Text>
//           </View>
//           <View style={{height: SIZES.height * 0.024, backgroundColor: '#fff'}}>
//             <Text style={{fontSize: 17, color: COLORS.black}}>Notes</Text>
//           </View>
//           <View
//             style={{width: SIZES.width * 0.66, height: SIZES.height * 0.16}}>
//             <Text
//               style={{
//                 textAlign: 'center',
//                 color: COLORS.black,
//                 fontSize: 14,
//                 marginTop: SIZES.height * 0.01,
//               }}>
//               Each region only one day each week,at a fixed time,The location of
//               the target area.He Will contact you before coming
//             </Text>
//           </View>
//         </View>
//         <View
//           style={{
//             height: SIZES.height * 0.04,
//             width: SIZES.width,
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginTop: SIZES.height * 0.05,
//             backgroundColor: '#f0f0f0',
//           }}>
//           <Text style={{fontSize: 22, color: COLORS.black, fontWeight: 'bold'}}>
//             My Area
//           </Text>
//         </View>
//         <View
//           style={{
//             height: SIZES.height * 0.5,
//             width: SIZES.width,
//             alignItems: 'center',
//             backgroundColor: '#f0f0f0',
//           }}>
//           {track.map((item, index) => (
//             <TouchableOpacity
//               style={{
//                 height: SIZES.height * 0.06,
//                 width: SIZES.width * 0.6,
//                 backgroundColor: COLORS.first_color,
//                 borderRadius: 10,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginVertical: 7,
//               }}>
//               <Text style={{fontSize: 18, color: COLORS.white}}>
//                 {item.namearea}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>
//     </ScrollView>
//   </View>
// );
export default class TimeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'first', title: 'Saturday'},
        {key: 'second', title: 'Sunday'},
        {key: 'third', title: 'Monday'},
        {key: 'four', title: 'Tuesday'},
        {key: 'five', title: 'Wednesday'},
      ],
    };
  }

  renderTabBar = props => (
    <TabBar
      {...props}
      tabStyle={{
        backgroundColor: COLORS.white,
        height: SIZES.height * 0.07,
        width: SIZES.width * 0.2,
      }}
      style={{elevation: 0, marginLeft: 10}}
      scrollEnabled={true}
      activeColor={COLORS.second_color}
      inactiveColor={COLORS.first_color}
      renderLabel={({route, focused, color}) => (
        <View
          style={{
            backgroundColor: '#fff',
            width: SIZES.width * 0.2,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 11,
            borderRadius: 30,
            shadowColor: '#black',
            shadowOpacity: 0.9,
            elevation: focused ? 6 : 0,
            shadowRadius: 5,
            shadowOffset: {width: 56, height: 13},
          }}>
          <Text style={{color, margin: 2, fontSize: 13}}>{route.title}</Text>
        </View>
      )}
    />
  );

  render() {
    const {index, routes} = this.state;
    return (
      <>
        <View style={styles.container}>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
            translucent={true}
          />
          <View style={styles.view1}>
            <View style={{flex: 1, padding: 15, paddingLeft: -5}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.goBack();
                }}
                style={styles.styleiconrow}>
                <Icon
                  name={icons.arrowLeft}
                  size={SIZES.sizeIcon}
                  color={COLORS.first_color}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.viewheader}>
              <Text style={styles.textheader}>Time Table</Text>
            </View>
          </View>
          <TabView
            navigationState={{index: index, routes: routes}}
            renderScene={SceneMap({
              first: FirstRoute,
              second: SecondRoute,
              third: ThirdRoute,
              four: FourRoute,
              five: FiveRoute,
            })}
            onIndexChange={index => this.setState({index})}
            initialLayout={initialLayout}
            renderTabBar={this.renderTabBar}
          />
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    height: SIZES.height,
    witdh: SIZES.width,
    backgroundColor: COLORS.white,
  },
  view1: {
    height: SIZES.height * 0.08,
    width: SIZES.width * 0.2,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.03,
    marginBottom: SIZES.height * 0.01,
    padding: 10,
    alignItems: 'center',
  },
  styleiconrow: {
    height: SIZES.height * 0.04,
    width: SIZES.width * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.backgrondTap,
    borderRadius: 25,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 4,
    shadowRadius: 5,
    shadowOffset: {width: 56, height: 13},
  },
  viewheader: {
    height: SIZES.height * 0.07,
    width: SIZES.width * 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.first_color,
  },
  textheader: {
    fontSize: SIZES.mainSize,
    color: COLORS.first_color,
  },
});
