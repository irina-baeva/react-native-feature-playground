import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {HeaderButton} from 'react-navigation-header-buttons'

 const HeaderButtonCustom = (props) => {
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={40} color={'blue'} />
}
export default HeaderButtonCustom