import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as Font from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useTheme } from '@react-navigation/native';


type customInputProps = {
    label: string,
     icon?: React.FC,
      placeholder: string,
      type?: string
      
}

const Input: React.FC = ({label, icon, placeholder, type, ...rest}) => {
 
   
    const [secureEntry, setSecureEntry] = useState(true);

   
    const [fonstLoaded] = Font.useFonts({
        'SemiBold': require('../components/assets/fonts/Poppins-SemiBold.ttf'),
        'Regular': require('../components/assets/fonts/Poppins-Regular.ttf'),

    })

    if (!fonstLoaded) {
        return;
    }

    const { colors } = useTheme();
    return (
        <View style={styles.container}>
            <Text style={[styles.label, {color: colors.textPrimary}]}>{label}</Text>
            <View style={styles.inputContainer}>
                {icon}
              {/*   <Ionicons name="mail-outline" size={24} color={Colors.textSecondary} style={styles.icon} /> */}
                <TextInput 
                style={[styles.input, {color: colors.textSecondary}]}
                 placeholder={placeholder}
                  placeholderTextColor={colors.textSecondary}
                secureTextEntry={ type === 'password' && secureEntry}
                  
                  />
                  {
                    type === 'password' && (
                        <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}> 
                        <Ionicons name={secureEntry ? 'eye-outline' : 'eye-off-sharp'} size={24} color={colors.textSecondary} style={styles.icon} />
                        </TouchableOpacity>
                    )
                  }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10
    },
    label: {
        fontFamily: 'SemiBold',
        fontSize: 16,
        
    },

    inputContainer: {
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'grey'
    },

    icon: {
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        
    },
})

export default Input;