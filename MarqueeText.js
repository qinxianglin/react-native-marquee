/**
 * Created by cuihongquan on 12/28/17.
 */

import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SPACE = '\t\t\t';

class MarqueeText extends Component {
    mLeft: number = 0;
    constructor (props) {
        super(props);

        this.text = this.props.text + SPACE + this.props.text;
        this.layoutText = this.props.text + SPACE;
    }

    componentDidMount () {
    }

    componentWillUnmount () {
        this.inteval && clearInterval(this.inteval);
    }

    startAnima () {
        if (this.inteval) {
            return;
        }
        this.inteval = setInterval(() => {
            this.mLeft = this.mLeft - this.props.speed;
            if (Math.abs(this.mLeft) >= this.textWidth) {
                this.mLeft = 0;
            }
            console.log('this.refText == ' + this.mLeft);
            this.refText.setNativeProps({style: {left: this.mLeft}});
        }, 10);
    }

    refView = (ref) => {
        this.refText = ref;
    };

    refLayoutView(ref) {
        // this.refLayoutView = ref;
        ref.setNativeProps({style: {height: 0}});
    }

    onContainerLayout = (e) => {
        this.containerWidth = e.nativeEvent.layout.width;
        console.log('containerWidth = ' + this.containerWidth);
        // 1.文字太短的不滚动
        if (this.textWidth - this.spaceWidth <= this.containerWidth) {
            this.text = this.props.text;
            this.forceUpdate();
            return;
        }
        // 2.文字达到滚动标准的，要重新设置一下滚动view的宽度
        this.refText.setNativeProps({style: {width: this.textWidth * 2}});
        this.startAnima();
    };

    onTextLayout = (e) => {
        this.textWidth = e.nativeEvent.layout.width;
        console.log('onLayout width = ' + this.textWidth);
    };

    onSpaceLayout = (e) => {
        this.spaceWidth = e.nativeEvent.layout.width;
        console.log('onSpaceLayout width = ' + this.spaceWidth);
    };

    render () {
        return (
            <View onLayout={this.onContainerLayout} style={this.props.style} overflow="hidden">
                <View style={{width: SCREEN_WIDTH * 2, flexDirection: 'row'}}>
                    <Text ref={this.refLayoutView} style={[this.props.textStyle, {height: 1}]} onLayout={this.onSpaceLayout}>{SPACE}</Text>
                    <Text ref={this.refLayoutView} style={[this.props.textStyle, {height: 1}]} onLayout={this.onTextLayout}>{this.layoutText}</Text>
                </View>
                <Text ref={this.refView} style={[this.props.textStyle, {width: SCREEN_WIDTH + 50, left: 0}]} numberOfLines={1}>{this.text}</Text>
            </View>
        );
    }
}

MarqueeText.defaultProps = {
    speed: 0.5
};

MarqueeText.propTypes = {
    /**
     * 以10ms为单位的速度
     */
    speed: PropTypes.number,
    /**
     * 定义本组建的style
     */
    style: PropTypes.object,
    textStyle: PropTypes.object
};

export default MarqueeText;
