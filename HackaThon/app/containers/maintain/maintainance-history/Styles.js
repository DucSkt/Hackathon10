import { StyleSheet } from 'react-native'
import Colors from '../../../themes/Colors';
import Fonts from '../../../themes/Fonts';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: 15,
        backgroundColor: Colors.silver
    },
    historyItem: {
        backgroundColor: Colors.nephritis
    },
    styleNameInHeader: {
        color: Colors.white,
        fontFamily: Fonts.type.base
    }
})
