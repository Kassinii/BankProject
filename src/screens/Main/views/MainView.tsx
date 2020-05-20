import React, {Component} from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    Linking,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {NavigationScreenProp, NavigationState} from "react-navigation";
import {inject, observer} from "mobx-react";
import {RequestStore, ServicesStore, UserStore, CompaniesStore,AuthStore} from "../../../stores";
import {Ionicons, MaterialIcons} from '@expo/vector-icons'
import {FONTS} from '../../../constansts';
import Swiper from "react-native-web-swiper";
import {IService, RequestStatus, RequestType,SearchResultList} from '../../../types';
import {ServiceItemAds, ServiceItemNew} from "../../../components";
import {activityIndicator} from "../../../styles";
import {checkAuth} from "../../../utils";

//const {FetchSortedServices, FetchServices} = RequestType;
//const {Loading, Failure} = RequestStatus;
const {MONSEMIBOLD, MONBOLD, RUBREGULAR, RUBLIGHT, MONMEDIUM, RUBMEDIUM} = FONTS;

 interface IProps {
     navigation: NavigationScreenProp<NavigationState>;
//     service?:IService;
//     companies?:SearchResultList;
//     onItemPress?: (service: IService, image: object) => void;
//     onServicePress?: (params: Object) => void;
//     servicesStore?: ServicesStore;
//     userStore?: UserStore;
//     companiesStore?:CompaniesStore;
//     authStore?: AuthStore;
//     requestStore?: RequestStore;
//     onError?: (error: string) => void;
//     onMakeOrder?: () => void;
//     onPressMyServices?: () => void;
//     onDocument?: () => void;
//     onAds?: () => void;
//     onPressMyFinance?: () => void;
//     onPressQoovee?: () => void;
 }
//
// @inject("requestStore", "servicesStore", "userStore", "authStore", "companiesStore")
// @observer

export default class MainView extends Component<IProps> {
     render() {
         return (





    // async componentDidMount() {
    //     const {
    //         fetchSortedKT2Services, fetchAdvertisements, fetchCallBackServices, fetchOFDServices, fetchSearchService
    //     } = this.props.servicesStore;
    //     fetchSortedKT2Services();
    //     fetchOFDServices();
    //     fetchCallBackServices();
    //     fetchAdvertisements();
    //
    //     const {fetchUserCompanies} = this.props.userStore;
    //     fetchUserCompanies(true);
    //
    // }
    //
    // public componentWillReact() {
    //     const {requestStore, onError} = this.props;
    //     const request = requestStore.getRequest(FetchServices);
    //     const isError = request && request.status === Failure;
    //     if (isError) {
    //         onError("explore.services.serviceWarning");
    //     }
    // }
    //
    // onPressQoovee = () => {
    //     this.props.navigation.navigate('WebView', {
    //         title: 'Торговая площадка',
    //         url: 'https://www.ismet.kz/content/ocp/ru/catalog/cases/qoovee.html',
    //         navigation: this.props.navigation
    //     })
    // };



    public renderButtons = props => (


        <View style={styles.blocks}>
            <View style={styles.blocksTwo}>
                <TouchableOpacity
                    style={styles.block1}
                    //onPress={() => this.props.onPressMyServices()}
                >
                    <Image source={require('../../../assets/images/mainbuttons/myservices.png')}
                           style={styles.butImage}/>
                    <Text style={styles.title}>История заказов</Text>
                    <MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.block2}
                    //onPress={() => this.props.onPressMyFinance()}
                >
                    <Image source={require('../../../assets/images/mainbuttons/balance.png')}
                           style={styles.butImage}/>
                    <Text style={styles.title}>Баланс</Text>
                    <MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </TouchableOpacity>
            </View>
            <View style={styles.blocksTwo}>
                <TouchableOpacity
                    style={styles.block3}
                    //onPress={() => this.props.onDocument()}
                >
                    <Image source={require('../../../assets/images/mainbuttons/docs.png')}
                           style={styles.butImage}/>
                    <Text style={styles.title}>Документы</Text>
                    <MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.block4}
                    //onPress={this.onPressQoovee}
                >
                    <Image source={require('../../../assets/images/mainbuttons/shopping-cart.png')}
                           style={styles.butImage}/>
                    <Text style={styles.title}>Торговая площадка</Text>
                    <MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </TouchableOpacity>
            </View>
        </View>
    );
    public renderPop = props => (
        <View style={styles.blocks_foot}>
            <TouchableOpacity style={styles.lcItem}
                              //onPress={() => this.props.onAds()}
            >
                <View style={styles.circle}></View>
                <View style={styles.lcIteminto}>
                    <Text style={styles.title_lc}>Добавить объявление</Text>
                    <Text style={styles.title_time}>Добавить объявление</Text>
                </View>
                <Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.lcItem}
                //onPress={this.openMyServicesNew}
            >
                <View style={styles.circle}/>
                <View style={styles.lcIteminto}>
                    <Text style={styles.title_lc}>Создать лицевой счет</Text>
                    <Text style={styles.title_time}>Для заказа IT-сервисов и других услуг</Text>
                </View>
                <Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </TouchableOpacity>
            {/*<TouchableOpacity style={styles.lcItem}>*/}
            {/*    <View style={styles.circle}></View>*/}
            {/*    <View style={styles.lcIteminto}>*/}
            {/*        <Text style={styles.title_lc}>Перенести услуги</Text>*/}
            {/*        <Text style={styles.title_time}>Переоформить услуги "Казахтелекома" на новый адрес</Text>*/}
            {/*    </View>*/}
            {/*    <Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>*/}
            {/*</TouchableOpacity>*/}
            <TouchableOpacity style={styles.lcItem}
                              //onPress={() => this.props.onPressMyFinance()}
            >
                <View style={styles.circle}></View>
                <View style={styles.lcIteminto}>
                    <Text style={styles.title_lc}>Детализация</Text>
                    <Text style={styles.title_time}>Получить детализацию по интернету и телефоным переговорам</Text>
                </View>
                <Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.lcItem}
                //onPress={() => this.props.onPressMyServices()}
            >
                <View style={styles.circle}></View>
                <View style={styles.lcIteminto}>
                    <Text style={styles.title_lc}>История заказов</Text>
                    <Text style={styles.title_time}>Услуги, купленные на ISMET.kz</Text>
                </View>
                <Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </TouchableOpacity>
            {/*<TouchableOpacity style={styles.lcItem}>*/}
            {/*    <View style={styles.circle}></View>*/}
            {/*    <View style={styles.lcIteminto}>*/}
            {/*        <Text style={styles.title_lc}>Разместить свой сервис</Text>*/}
            {/*        <Text style={styles.title_time}>После модерации услуга появится на ISMET.kz</Text>*/}
            {/*    </View>*/}
            {/*    <Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>*/}
            {/*</TouchableOpacity>*/}
            <TouchableOpacity
                style={styles.lcItem}
                //onPress={this.onPressInviteUser}
            >
                <View style={styles.circle}></View>
                <View style={styles.lcIteminto}>
                    <Text style={styles.title_lc}>Пригласить участника</Text>
                    <Text style={styles.title_time}>Вышлите приглашение по emaServiceItemAdsil или по СМС</Text>
                </View>
                <Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </TouchableOpacity>
        </View>
    );


    // onPressChat = () => {
    //     this.props.navigation.navigate('NewChat');
    // };
    // onPressInviteUser = () => {
    //     this.props.navigation.navigate('InviteUser');
    // };
    //
    // openMyServicesNew = () => {
    //     const {currentUser} = this.props.userStore;
    //     currentUser ? this.props.navigation.navigate('PersonalAccount') : checkAuth(this.props);
    // };
    // onServicePress = params => {
    //     this.props.navigation.navigate('DetailedService', params);
    // };

    // renderFooter = (isLoading: boolean) => {
    //     return (
    //         <ActivityIndicator
    //             style={activityIndicator}
    //             animating={isLoading}
    //             size={'large'}
    //         />
    //     );
    // };

    // KTrender = () => {
    //     const {sortedKT2Services} = this.props.servicesStore;
    //     return (
    //         <FlatList
    //             data={sortedKT2Services}
    //             horizontal={true}
    //             keyExtractor={(item, index) => index.toString()}
    //             renderItem={({item}) =>
    //                 <ServiceItemNew
    //                     service={item}
    //                     onPress={this.onServicePress}
    //                 />
    //             }
    //
    //         />
    //     );
    // };
    // ServicesRender = () => {
    //     const {sortedOFDServices} = this.props.servicesStore;
    //
    //     return (
    //         <FlatList
    //             data={sortedOFDServices}
    //             horizontal={true}
    //             keyExtractor={(item, index) => index.toString()}
    //             renderItem={({item}) =>
    //                 <ServiceItemNew
    //                     service={item}
    //                     onPress={this.onServicePress}
    //                 />
    //             }
    //
    //         />
    //     );
    // };
    // ServicesCallBackRender = () => {
    //     const {sortedCallBackServices, fetchCallBackServices} = this.props.servicesStore;
    //     const {requestStore} = this.props;
    //     const request = requestStore.getRequest(FetchServices);
    //     const isLoading = Boolean(request) && request.status === Loading;
    //     return (
    //         <FlatList
    //             data={sortedCallBackServices}
    //             horizontal={true}
    //             keyExtractor={(item, index) => index.toString()}
    //             renderItem={({item}) =>
    //                 <ServiceItemNew service={item} onPress={this.onServicePress}/>
    //             }
    //             refreshing={isLoading && sortedCallBackServices.length === 0}
    //             ListFooterComponent={this.renderFooter(isLoading)}
    //             onEndReached={fetchCallBackServices}
    //             initialNumToRender={8}
    //             maxToRenderPerBatch={2}
    //             onEndReachedThreshold={0.5}
    //
    //         />
    //     );
    // };
    // ADSRender = () => {
    //     const {advertisements} = this.props.servicesStore;
    //     return (
    //         <FlatList
    //             data={advertisements}
    //
    //             horizontal={true}
    //             keyExtractor={(item, index) => index.toString()}
    //             renderItem={({item}) =>
    //                 <ServiceItemAds
    //                     service={item}
    //                     onPress={this.onServicePress}
    //                 />
    //             }
    //
    //         />
    //     );
    // };

    // render() {
    //     const {advertisements} = this.props.servicesStore;
    //     const visibleADS = advertisements.length !==0;
    //
    //     const ImageSlider1 = {uri: `https://www.ismet.kz/content/dam/ocp/companies/newpics/photo_2019-11-08_09-44-36.jpg?time=${Date.now()}`};
    //     const ImageSlider2 = {uri: `https://www.ismet.kz/content/dam/ocp/companies/newpics/photo_2019-11-08_10-20-54.jpg?time=${Date.now()}`};
    //     const ImageSlider3 = {uri: `https://www.ismet.kz/content/dam/ocp/companies/newpics/photo_2019-11-08_09-44-40.jpg?time=${Date.now()}`};
    //     return (
    //         <ScrollView style={styles.container}>
    //             <View style={styles.slider}>
    //                 <Swiper
    //                     from={1}
    //                     minDistanceForAction={0.1}
    //                     controlsProps={{
    //                         dotsTouchable: true,
    //                         prevPos: false,
    //                         nextPos: false,
    //                         dotActiveStyle: {
    //                             backgroundColor: '#fff'
    //                         }
    //                     }}
    //                 >
    //                     <TouchableOpacity onPress={() => {
    //                         Linking.openURL('https://www.ismet.kz/ru/catalog/cases/video-nabludenie-online')
    //                     }}>
    //                         <Image source={ImageSlider1} style={styles.imageSlider} permanent={false}/>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => {
    //                         Linking.openURL('https://www.ismet.kz/content/ocp/ru/partners.html')
    //                     }}>
    //                         <Image source={ImageSlider2} style={styles.imageSlider} permanent={false}/>
    //                     </TouchableOpacity>
    //                     <TouchableOpacity onPress={() => {
    //                         Linking.openURL('https://www.ismet.kz/ru/catalog/cases/wifi-target-dlya-biznesa')
    //                     }}>
    //                         <Image source={ImageSlider3} style={styles.imageSlider} permanent={false}/>
    //                     </TouchableOpacity>
    //                 </Swiper>
    //             </View>
    //             {this.renderButtons(this.props)}
    //             <View style={styles.lc_but_out}>
    //                 <TouchableOpacity
    //                     style={styles.lc_but}
    //                     onPress={() => this.props.navigation.navigate('KTPayForm')}
    //                 >
    //                     <Text style={styles.lc_but_title}>Пополнить лицевой счет</Text>
    //                 </TouchableOpacity>
    //             </View>
    //
    //             <View style={styles.title_blocks}>
    //                 <Text style={styles.title_h1}>Казахтелеком</Text>
    //             </View>
    //             {this.KTrender()}
    //             <View style={styles.title_blocks}>
    //                 <Text style={styles.title_h1}>Онлайн-кассы и ОФД</Text>
    //             </View>
    //             {this.ServicesRender()}
    //             <View style={styles.title_blocks}>
    //                 <Text style={styles.title_h1}>IT-сервисы</Text>
    //             </View>
    //             {this.ServicesCallBackRender()}
    //             {/*{visibleADS &&*/}
    //             {/*<View style={styles.ads}>*/}
    //             {/*    <Text style={styles.title_ads}>Доска бъявлений</Text>*/}
    //             {/*    {this.ADSRender()}*/}
    //             {/*</View>*/}
    //             {/*}*/}
    //             <View style={styles.title_blocks}>
    //                 <Text style={styles.title_h1}>Полезное</Text>
    //             </View>
    //             {this.renderPop(this.props)}
    //         </ScrollView>
    //     );
    // }
}
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 7,
        backgroundColor: '#FCFCFC',
    },
    slider: {
        height: 136,
        width: '100%',
    },
    imageSlider: {
        height: 130,
        width: '100%',
        borderRadius: 7,
        //resizeMode: 'contain',
    },
    blocksTwo: {
        flexDirection: "row",
        justifyContent: 'space-between',

    },
    block1: {
        width: '49%',
        backgroundColor: "#4AD9B7",
        marginTop: 8,
        marginRight: 8,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 32,
        paddingBottom: 17,
    },
    block2: {
        width: '49%',
        backgroundColor: "#FFCB53",
        marginTop: 8,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 32,
        paddingBottom: 17,
    },
    block3: {
        width: '49%',
        backgroundColor: "#32B2EC",
        marginTop: 8,
        marginRight: 8,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 32,
        paddingBottom: 17,
    },
    block4: {
        width: '49%',
        backgroundColor: "#81A4FF",
        marginTop: 8,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 32,
        paddingBottom: 17,
    },
    butImage: {
        marginBottom: 12,
    },
    ads: {
        backgroundColor: '#81A4FF',
        marginHorizontal: 7,
        marginVertical: 20,
        paddingLeft: 5,
        paddingVertical: 15,
        borderRadius: 8,
    },
    title_ads: {
        color: '#fff',
        fontSize: 22,
        marginLeft: 10,
        fontFamily: MONSEMIBOLD,
    },
    ads_items: {
        paddingVertical: 25,
    },
    lc_but_out: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    lc_but: {
        borderWidth: 1,
        borderColor: '#222',
        marginTop: 20,
        borderRadius: 100,
    },
    lc_but_title: {
        color: '#222',
        fontFamily: RUBREGULAR,
        fontSize: 14,
        lineHeight: 34,
        textAlign: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 20,
    },
    serviceItem: {
        marginBottom: 9,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        borderRadius: 5,
        paddingLeft: 9,
        paddingVertical: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
    serviceImage: {
        height: 60,
        width: 60,
        marginRight: 10,
    },
    service_but: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        borderColor: '#222',
        borderWidth: 1,
    },
    service_time: {
        color: '#222',
        fontFamily: RUBREGULAR,
        fontSize: 14,
    },
    service_price: {
        color: '#222',
        fontFamily: MONBOLD,
        textTransform: 'uppercase',
        fontSize: 18,
        marginTop: 10,
    },
    service_lc: {
        color: '#222',
        textTransform: 'uppercase',
        fontFamily: RUBMEDIUM,
        fontSize: 16,
        marginBottom: 5,
    },
    service_rate: {
        fontFamily: RUBLIGHT,
        fontSize: 16,
        color: 'rgba(34, 34, 34, 0.3)',
        marginRight: 10,
    },
    service_desc: {
        fontFamily: RUBLIGHT,
        fontSize: 14,
        color: 'rgba(34, 34, 34, 0.8)',
        marginBottom: 10,
        marginTop: 10,
    },
    blocks_foot: {
        marginBottom: 20,
    },
    lcItem: {
        marginBottom: 1,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingVertical: 20,
        paddingRight: 30,
        backgroundColor: '#fff',

    },
    lcIteminto: {
        width: '80%',
    },
    title: {
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: MONSEMIBOLD,
        fontSize: 12,
        lineHeight: 18,
        marginBottom: 15,
        marginHorizontal: 20,
        textAlign: 'center'
    },
    title_lc: {
        color: '#222',
        textTransform: 'uppercase',
        fontFamily: RUBREGULAR,
        fontSize: 14,
    },
    title_time: {
        color: 'rgba(34, 34, 34, 0.5)',
        fontFamily: RUBLIGHT,
        fontSize: 12,
    },
    lc_price: {
        color: '#8CBF43',
        textTransform: 'uppercase',
        fontFamily: MONMEDIUM,
        fontSize: 14,
    },
    title_blocks: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        marginHorizontal: 7,
        marginBottom: 8,
    },
    title_h1: {
        color: '#222',
        fontFamily: MONSEMIBOLD,
        fontSize: 18,
    },
    circle: {
        borderRadius: 50,
        width: 18,
        height: 18,
        backgroundColor: '#00ACC1',
        marginBottom: 8,
    },
});

