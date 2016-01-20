/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    BackAndroid,
} = React;

var Calendar = require('react-native-calendar-android');

var DatePicker = React.createClass({

    getInitialState: function() {
        return {
            date: this.props.date,
            navigator: this.props.navigator
        };
    },

    navigatorPop(){
        this.props.navigator.pop();
        return true;
    },

    componentDidMount: function() {
        BackAndroid.addEventListener('hardwareBackPress', this.navigatorPop);
    },

    componentWillUnmount(){
        BackAndroid.removeEventListener('hardwareBackPress',this.navigatorPop)
    },

    render: function() {
        return (
            <View style={styles.container}>
            <Calendar
            width={300}
            topbarVisible={true}
            arrowColor="#FF5722"
            firstDayOfWeek="monday"
            showDate="all"
            currentDate={[ this.state.date ]}
            selectionMode="single"
            selectionColor="#FFCCBC"
            selectedDates={[ this.state.date ]}
            onDateChange={(data) => {
                this.state.navigator.resetTo({
                    index: 0,
                    pass_date: data.date,
                    category: this.props.category
                });
            }} />
            </View>
        );
    },

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = DatePicker;
