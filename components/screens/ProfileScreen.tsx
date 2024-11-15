import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Header from '../Header'
import Feather from '@expo/vector-icons/Feather';
import * as Font from 'expo-font';
import Input from '../Input';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';


import { useTheme } from '@react-navigation/native';


export default function ProfileScreen() {

  const { colors } = useTheme();

  const [fonstLoaded] = Font.useFonts({
    'SemiBold': require('../../components/assets/fonts/Poppins-SemiBold.ttf'),
    'Regular': require('../../components/assets/fonts/Poppins-Regular.ttf'),

  })

  if (!fonstLoaded) {
    return;
  }



  return (
    <ScrollView style={[styles.container, {backgroundColor: colors.bg}]}>
      <Header />

      <View style={styles.profileImageCOntainer}>
        <Image source={require('../../components/assets/images/dp.png')} style={styles.profileImage} />
        <TouchableOpacity style={[styles.editIconContainer, {backgroundColor: colors.orange}]}>
          <Feather name="edit-3" size={24} color={colors.iconWhite} />
        </TouchableOpacity>
      </View>


      <View style={styles.profileTitleContainer}>
        <Text style={[styles.name, {color: colors.textPrimary}]} >GFXAgency</Text>
        <Text style={[styles.title, {  color: colors.textSecondary,}]} >UI UX DESIGN</Text>
      </View>


      <View style={styles.inputFiledsContainer}>
        <Input
          label="Your Email"
          placeholder="abc@gmail.com"
          icon={<Ionicons name="mail-outline" size={24}
            color={colors.textSecondary} style={styles.icon} />}
        />

        <Input
          label="Phone Number"
          placeholder="+92316347832"
          icon={<Feather name="phone" size={24}
            color={colors.textSecondary} style={styles.icon} />}
        />

        <Input
          label="Website"
          placeholder="www.gfx.com"
          icon={<Foundation name="web" size={24}
          color={colors.textSecondary} style={styles.icon} />}
        />

        <Input
          label="Password"
          placeholder="********"

          icon={<AntDesign name="lock1" size={24}
            color={colors.textSecondary} style={styles.icon} />}
            type="password"
           
        />

      </View>

      <TouchableOpacity style={[styles.logoutButton, {borderColor: colors.orange,}]}>
        <Text style={[styles.logoutTxt, { color: colors.orange}]}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 15
  },

  profileImageCOntainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15
  },

  profileImage: {
    width: 140,
    height: 140
  },

  editIconContainer: {
    height: 31,
    width: 31,
   
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
    marginLeft: 45

  },

  profileTitleContainer: {
    alignItems: 'center',
    marginVertical: 10
  },

  name: {
    fontFamily: 'SemiBold',
    fontSize: 24,
    
  },

  title: {
    fontFamily: 'Regular',
    fontSize: 18,
  
  },

  inputFiledsContainer: {
    marginVertical: 10
  },
  icon: {
    marginHorizontal: 10
  },

  logoutButton: {
    borderWidth: 1,
    
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 20
  },
  logoutTxt: {
    fontSize: 15,
    fontFamily: 'SemiBold',
   
  },

})