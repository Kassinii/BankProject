"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_native_1 = require("react-native");
var vector_icons_1 = require("@expo/vector-icons");
var constansts_1 = require("../../../constansts");
var types_1 = require("../../../types");
var components_1 = require("../../../components");
var styles_1 = require("../../../styles");
var utils_1 = require("../../../utils");
var FetchSortedServices = types_1.RequestType.FetchSortedServices, FetchServices = types_1.RequestType.FetchServices;
var Loading = types_1.RequestStatus.Loading, Failure = types_1.RequestStatus.Failure;
var MONSEMIBOLD = constansts_1.FONTS.MONSEMIBOLD, MONBOLD = constansts_1.FONTS.MONBOLD, RUBREGULAR = constansts_1.FONTS.RUBREGULAR, RUBLIGHT = constansts_1.FONTS.RUBLIGHT, MONMEDIUM = constansts_1.FONTS.MONMEDIUM, RUBMEDIUM = constansts_1.FONTS.RUBMEDIUM;
renderButtons = function (props) { return (<react_native_1.View style={styles.blocks}>
            <react_native_1.View style={styles.blocksTwo}>
                <react_native_1.TouchableOpacity style={styles.block1} onPress={function () { return _this.props.onPressMyServices(); }}>
                    <react_native_1.Image source={require('../../../assets/images/mainbuttons/myservices.png')} style={styles.butImage}/>
                    <react_native_1.Text style={styles.title}>История заказов</react_native_1.Text>
                    <vector_icons_1.MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={styles.block2} onPress={function () { return _this.props.onPressMyFinance(); }}>
                    <react_native_1.Image source={require('../../../assets/images/mainbuttons/balance.png')} style={styles.butImage}/>
                    <react_native_1.Text style={styles.title}>Баланс</react_native_1.Text>
                    <vector_icons_1.MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>
            <react_native_1.View style={styles.blocksTwo}>
                <react_native_1.TouchableOpacity style={styles.block3} onPress={function () { return _this.props.onDocument(); }}>
                    <react_native_1.Image source={require('../../../assets/images/mainbuttons/docs.png')} style={styles.butImage}/>
                    <react_native_1.Text style={styles.title}>Документы</react_native_1.Text>
                    <vector_icons_1.MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </react_native_1.TouchableOpacity>
                <react_native_1.TouchableOpacity style={styles.block4} onPress={_this.onPressQoovee}>
                    <react_native_1.Image source={require('../../../assets/images/mainbuttons/shopping-cart.png')} style={styles.butImage}/>
                    <react_native_1.Text style={styles.title}>Торговая площадка</react_native_1.Text>
                    <vector_icons_1.MaterialIcons name="arrow-forward" color={'#fff'} size={20}/>
                </react_native_1.TouchableOpacity>
            </react_native_1.View>
        </react_native_1.View>); };
renderPop = function (props) { return (<react_native_1.View style={styles.blocks_foot}>
            <react_native_1.TouchableOpacity style={styles.lcItem} onPress={function () { return _this.props.onAds(); }}>
                <react_native_1.View style={styles.circle}></react_native_1.View>
                <react_native_1.View style={styles.lcIteminto}>
                    <react_native_1.Text style={styles.title_lc}>Добавить объявление</react_native_1.Text>
                    <react_native_1.Text style={styles.title_time}>Добавить объявление</react_native_1.Text>
                </react_native_1.View>
                <vector_icons_1.Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </react_native_1.TouchableOpacity>
            <react_native_1.TouchableOpacity style={styles.lcItem} onPress={_this.openMyServicesNew}>
                <react_native_1.View style={styles.circle}/>
                <react_native_1.View style={styles.lcIteminto}>
                    <react_native_1.Text style={styles.title_lc}>Создать лицевой счет</react_native_1.Text>
                    <react_native_1.Text style={styles.title_time}>Для заказа IT-сервисов и других услуг</react_native_1.Text>
                </react_native_1.View>
                <vector_icons_1.Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </react_native_1.TouchableOpacity>
            
            
            
            
            
            
            
            
            <react_native_1.TouchableOpacity style={styles.lcItem} onPress={function () { return _this.props.onPressMyFinance(); }}>
                <react_native_1.View style={styles.circle}></react_native_1.View>
                <react_native_1.View style={styles.lcIteminto}>
                    <react_native_1.Text style={styles.title_lc}>Детализация</react_native_1.Text>
                    <react_native_1.Text style={styles.title_time}>Получить детализацию по интернету и телефоным переговорам</react_native_1.Text>
                </react_native_1.View>
                <vector_icons_1.Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </react_native_1.TouchableOpacity>
            <react_native_1.TouchableOpacity style={styles.lcItem} onPress={function () { return _this.props.onPressMyServices(); }}>
                <react_native_1.View style={styles.circle}></react_native_1.View>
                <react_native_1.View style={styles.lcIteminto}>
                    <react_native_1.Text style={styles.title_lc}>История заказов</react_native_1.Text>
                    <react_native_1.Text style={styles.title_time}>Услуги, купленные на ISMET.kz</react_native_1.Text>
                </react_native_1.View>
                <vector_icons_1.Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </react_native_1.TouchableOpacity>
            
            
            
            
            
            
            
            
            <react_native_1.TouchableOpacity style={styles.lcItem} onPress={_this.onPressInviteUser}>
                <react_native_1.View style={styles.circle}></react_native_1.View>
                <react_native_1.View style={styles.lcIteminto}>
                    <react_native_1.Text style={styles.title_lc}>Пригласить участника</react_native_1.Text>
                    <react_native_1.Text style={styles.title_time}>Вышлите приглашение по emaServiceItemAdsil или по СМС</react_native_1.Text>
                </react_native_1.View>
                <vector_icons_1.Ionicons color={'#000'} name={'ios-arrow-forward'} size={11}/>
            </react_native_1.TouchableOpacity>
        </react_native_1.View>); };
onPressChat = function () {
    _this.props.navigation.navigate('NewChat');
};
onPressInviteUser = function () {
    _this.props.navigation.navigate('InviteUser');
};
openMyServicesNew = function () {
    var currentUser = _this.props.userStore.currentUser;
    currentUser ? _this.props.navigation.navigate('PersonalAccount') : utils_1.checkAuth(_this.props);
};
onServicePress = function (params) {
    _this.props.navigation.navigate('DetailedService', params);
};
renderFooter = function (isLoading) {
    return (<react_native_1.ActivityIndicator style={styles_1.activityIndicator} animating={isLoading} size={'large'}/>);
};
KTrender = function () {
    var sortedKT2Services = _this.props.servicesStore.sortedKT2Services;
    return (<react_native_1.FlatList data={sortedKT2Services} horizontal={true} keyExtractor={function (item, index) { return index.toString(); }} renderItem={function (_a) {
        var item = _a.item;
        return <components_1.ServiceItemNew service={item} onPress={_this.onServicePress}/>;
    }}/>);
};
ServicesRender = function () {
    var sortedOFDServices = _this.props.servicesStore.sortedOFDServices;
    return (<react_native_1.FlatList data={sortedOFDServices} horizontal={true} keyExtractor={function (item, index) { return index.toString(); }} renderItem={function (_a) {
        var item = _a.item;
        return <components_1.ServiceItemNew service={item} onPress={_this.onServicePress}/>;
    }}/>);
};
ServicesCallBackRender = function () {
    var _a = _this.props.servicesStore, sortedCallBackServices = _a.sortedCallBackServices, fetchCallBackServices = _a.fetchCallBackServices;
    var requestStore = _this.props.requestStore;
    var request = requestStore.getRequest(FetchServices);
    var isLoading = Boolean(request) && request.status === Loading;
    return (<react_native_1.FlatList data={sortedCallBackServices} horizontal={true} keyExtractor={function (item, index) { return index.toString(); }} renderItem={function (_a) {
        var item = _a.item;
        return <components_1.ServiceItemNew service={item} onPress={_this.onServicePress}/>;
    }} refreshing={isLoading && sortedCallBackServices.length === 0} ListFooterComponent={_this.renderFooter(isLoading)} onEndReached={fetchCallBackServices} initialNumToRender={8} maxToRenderPerBatch={2} onEndReachedThreshold={0.5}/>);
};
ADSRender = function () {
    var advertisements = _this.props.servicesStore.advertisements;
    return (<react_native_1.FlatList data={advertisements} horizontal={true} keyExtractor={function (item, index) { return index.toString(); }} renderItem={function (_a) {
        var item = _a.item;
        return <components_1.ServiceItemAds service={item} onPress={_this.onServicePress}/>;
    }}/>);
};
render();
{
    var advertisements = this.props.servicesStore.advertisements;
    var visibleADS = advertisements.length !== 0;
    var ImageSlider1 = { uri: "https://www.ismet.kz/content/dam/ocp/companies/newpics/photo_2019-11-08_09-44-36.jpg?time=" + Date.now() };
    var ImageSlider2 = { uri: "https://www.ismet.kz/content/dam/ocp/companies/newpics/photo_2019-11-08_10-20-54.jpg?time=" + Date.now() };
    var ImageSlider3 = { uri: "https://www.ismet.kz/content/dam/ocp/companies/newpics/photo_2019-11-08_09-44-40.jpg?time=" + Date.now() };
    return (<react_native_1.ScrollView style={styles.container}>
                <react_native_1.View style={styles.slider}>
                    <react_native_web_swiper_1.default from={1} minDistanceForAction={0.1} controlsProps={{
        dotsTouchable: true,
        prevPos: false,
        nextPos: false,
        dotActiveStyle: {
            backgroundColor: '#fff'
        }
    }}>
                        <react_native_1.TouchableOpacity onPress={function () {
        react_native_1.Linking.openURL('https://www.ismet.kz/ru/catalog/cases/video-nabludenie-online');
    }}>
                            <react_native_1.Image source={ImageSlider1} style={styles.imageSlider} permanent={false}/>
                        </react_native_1.TouchableOpacity>
                        <react_native_1.TouchableOpacity onPress={function () {
        react_native_1.Linking.openURL('https://www.ismet.kz/content/ocp/ru/partners.html');
    }}>
                            <react_native_1.Image source={ImageSlider2} style={styles.imageSlider} permanent={false}/>
                        </react_native_1.TouchableOpacity>
                        <react_native_1.TouchableOpacity onPress={function () {
        react_native_1.Linking.openURL('https://www.ismet.kz/ru/catalog/cases/wifi-target-dlya-biznesa');
    }}>
                            <react_native_1.Image source={ImageSlider3} style={styles.imageSlider} permanent={false}/>
                        </react_native_1.TouchableOpacity>
                    </react_native_web_swiper_1.default>
                </react_native_1.View>
                {this.renderButtons(this.props)}
                <react_native_1.View style={styles.lc_but_out}>
                    <react_native_1.TouchableOpacity style={styles.lc_but} onPress={function () { return _this.props.navigation.navigate('KTPayForm'); }}>
                        <react_native_1.Text style={styles.lc_but_title}>Пополнить лицевой счет</react_native_1.Text>
                    </react_native_1.TouchableOpacity>
                </react_native_1.View>

                <react_native_1.View style={styles.title_blocks}>
                    <react_native_1.Text style={styles.title_h1}>Казахтелеком</react_native_1.Text>
                </react_native_1.View>
                {this.KTrender()}
                <react_native_1.View style={styles.title_blocks}>
                    <react_native_1.Text style={styles.title_h1}>Онлайн-кассы и ОФД</react_native_1.Text>
                </react_native_1.View>
                {this.ServicesRender()}
                <react_native_1.View style={styles.title_blocks}>
                    <react_native_1.Text style={styles.title_h1}>IT-сервисы</react_native_1.Text>
                </react_native_1.View>
                {this.ServicesCallBackRender()}
                
                
                
                
                
                
                <react_native_1.View style={styles.title_blocks}>
                    <react_native_1.Text style={styles.title_h1}>Полезное</react_native_1.Text>
                </react_native_1.View>
                {this.renderPop(this.props)}
            </react_native_1.ScrollView>);
}
var styles = react_native_1.StyleSheet.create({
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
exports.default = MainView;
