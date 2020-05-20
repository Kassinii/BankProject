import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer';
import {COLORS, SCREEN, FONTS} from '../constants';
import {tabBarIcons} from './static';
import {withSafeAreaView} from '../hocs';
import I18n from 'i18n-js';
import DrawerMenu from "../components/DrawerMenu";
import TabBar from "../components/CustomTabBar";
import { ServiceDetails} from '../components/ServiceDetails';

const {LIGHT_GRAY_COLOR, GRAY_COLOR, DARK_BLACK} = COLORS;
const {WIDTH} = SCREEN;
const {BOLD} = FONTS;